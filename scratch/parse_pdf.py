import pdfplumber

with pdfplumber.open('Suriya_B_Frontend_Developer.pdf') as pdf:
    for page in pdf.pages:
        text = page.extract_text()
        if text:
            print(text.encode('utf-8', errors='ignore').decode('utf-8'))
