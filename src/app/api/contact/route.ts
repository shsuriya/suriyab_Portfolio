import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (Note: In a serverless environment like Vercel, 
// this is not 100% reliable as instances spin up and down, but it provides basic protection).
const rateLimit = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: Request) {
  try {
    // Basic IP extraction (works on Vercel)
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
    
    // Rate limit check: 3 requests per 15 minutes per IP
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; 
    
    if (ip !== 'unknown') {
      const userRecord = rateLimit.get(ip);
      if (userRecord && now < userRecord.resetTime) {
        if (userRecord.count >= 3) {
          return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
        }
        userRecord.count++;
      } else {
        rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
      }
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Input Validation (Length limits and Email format)
    if (name.length > 100 || email.length > 150 || message.length > 2000) {
      return NextResponse.json({ error: "Input is too long" }, { status: 400 });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // You will need to set these environment variables in your .env.local file
    // EMAIL_USER=your_email@gmail.com
    // EMAIL_PASS=your_gmail_app_password

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "suriyab2105@gmail.com",
        pass: process.env.EMAIL_PASS || "",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "suriyab2105@gmail.com",
      to: "suriyab2105@gmail.com", // Your email where you want to receive messages
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #4F46E5; background-color: #f9fafb;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
