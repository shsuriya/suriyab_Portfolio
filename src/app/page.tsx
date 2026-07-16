import ContactForm from "@/components/ContactForm";
import CertificationsCard from "@/components/CertificationsCard";
import { Code2, Palette, Database, Wrench, Activity, Building2, UtensilsCrossed, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="page-main">
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-inner">

          {/* Left — Profile Image */}
          <div className="hero-image-wrap">
            <div className="hero-image-glow" />
            <div className="hero-image-ring">
              {/* Spinning gradient border — only this rotates */}
              <div className="hero-image-spinner" />
              {/* Image — completely static */}
              <div className="hero-image-inner">
                <img src="/profile.png" alt="Suriya B — React Front-End Developer" />
              </div>
            </div>
          </div>

          {/* Right — Hero Text */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for Work
            </div>

            <h1 className="hero-name">Suriya B</h1>

            <p className="hero-role">
              React{" "}
              <span className="hero-role-highlight">Front-End Developer</span>
            </p>

            <p className="hero-desc">
              3+ years building scalable web applications with React.js, Next.js, and
              Redux. Passionate about exceptional user experiences and clean
              architecture. Based in Chennai, India.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Let&apos;s Connect →
              </a>
              <a href="#experience" className="btn-outline">
                View Work
              </a>
            </div>

            <div className="hero-chips">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Redux",
                "Firebase",
                "REST APIs",
                "Figma",
              ].map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Skills</h2>
            <div className="section-line" />
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrap cyan">
                <Code2 size={26} strokeWidth={1.8} />
              </div>
              <h3 className="skill-card-title cyan">Frontend Development</h3>
              <p className="skill-card-text">
                React.js, Next.js, Redux, JavaScript (ES6+), TypeScript, HTML5,
                CSS3
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon-wrap purple">
                <Palette size={26} strokeWidth={1.8} />
              </div>
              <h3 className="skill-card-title purple">UI Frameworks</h3>
              <p className="skill-card-text">
                Ant Design, Bootstrap, Tailwind CSS, Responsive Web Design,
                Figma
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon-wrap pink">
                <Database size={26} strokeWidth={1.8} />
              </div>
              <h3 className="skill-card-title pink">Database &amp; Backend</h3>
              <p className="skill-card-text">
                Firebase, Firestore, Real-time databases, Authentication &amp;
                security rules
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon-wrap blue">
                <Wrench size={26} strokeWidth={1.8} />
              </div>
              <h3 className="skill-card-title blue">Tools &amp; Integration</h3>
              <p className="skill-card-text">
                Git, GitHub, VS Code, REST APIs, Jira, Stripe, Razorpay
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="section" id="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Experience</h2>
            <div className="section-line" />
          </div>

          <div className="exp-card">
            <div className="exp-head">
              <div>
                <h3 className="exp-role">Software Engineer</h3>
                <p className="exp-company">Trident Solution Pvt Ltd</p>
              </div>
              <span className="exp-period">
                <span className="exp-period-dot" />
                May 2023 – Present
              </span>
            </div>

            <div className="projects-list">

              {/* Project 1 */}
              <div className="project-item">
                <div className="project-header">
                  <div className="project-icon-wrap cyan">
                    <Activity size={18} strokeWidth={2} />
                  </div>
                  <h4 className="project-item-name">
                    Enterprise Fitness Management Platform
                  </h4>
                </div>
                <ul className="project-bullets">
                  <li>Developed customer-facing booking workflows enabling users to browse programs and manage bookings.</li>
                  <li>Implemented secure authentication and role-based access using Firebase Authentication and Firestore.</li>
                  <li>Integrated payment workflows using Stripe and Razorpay.</li>
                  <li>Built business and admin dashboards for managing coaches, classes, and customer activities.</li>
                </ul>
                <div className="project-tags">
                  {["React.js", "Redux", "Firebase", "Razorpay", "Firestore"].map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-item">
                <div className="project-header">
                  <div className="project-icon-wrap purple">
                    <Building2 size={18} strokeWidth={2} />
                  </div>
                  <h4 className="project-item-name">
                    Enterprise Business Management Platform
                  </h4>
                </div>
                <ul className="project-bullets">
                  <li>Developed role-based dashboards for Super Admin, Manager, and Agent users.</li>
                  <li>Converted Figma designs into responsive React interfaces using Ant Design.</li>
                  <li>Optimized API integration and component rendering to improve performance.</li>
                </ul>
                <div className="project-tags">
                  {["React.js", "Redux", "Ant Design", "REST APIs", "Figma", "Jira"].map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-item">
                <div className="project-header">
                  <div className="project-icon-wrap pink">
                    <UtensilsCrossed size={18} strokeWidth={2} />
                  </div>
                  <h4 className="project-item-name">
                    Online Food Ordering &amp; Delivery Platform
                  </h4>
                </div>
                <ul className="project-bullets">
                  <li>Developed customer-facing ordering workflows including menu browsing, cart, and checkout.</li>
                  <li>Built back-office modules for managing products, orders, and business operations.</li>
                  <li>Implemented real-time application workflows with Firebase and Firestore.</li>
                </ul>
                <div className="project-tags">
                  {["React.js", "Redux", "Stripe", "Firebase", "Firestore", "Real-time DB"].map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="section" id="education">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Education & Certifications</h2>
            <div className="section-line" />
          </div>

          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-icon-wrap cyan">
                <GraduationCap size={28} strokeWidth={1.8} />
              </div>
              <h3 className="edu-degree">Bachelor of Engineering</h3>
              <p className="edu-field">Mechanical Engineering</p>
              <p className="edu-place">Oxford Engineering College, Trichy</p>
            </div>

            {/* Certifications card — interactive with PDF modal */}
            <CertificationsCard />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Get in Touch</h2>
            <div className="section-line" />
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>
          Built with ❤️ by{" "}
          <span className="footer-highlight">Suriya B</span> · React Front-End
          Developer · Chennai, India
        </p>
      </footer>
    </div>
  );
}
