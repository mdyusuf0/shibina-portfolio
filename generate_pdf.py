import os
import shutil
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable, KeepTogether
)
from reportlab.pdfgen import canvas

pdf_path = r'c:\Users\yusuf\OneDrive\Desktop\shibina\Shibina_Portfolio_Guide.pdf'
pub_pdf_path = r'c:\Users\yusuf\OneDrive\Desktop\shibina\public\Shibina_Portfolio_Guide.pdf'

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont('Helvetica-Bold', 8)
        self.setFillColor(colors.HexColor('#6B7280'))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 750, 'SHIBINA S — PORTFOLIO USER GUIDE')
            self.setStrokeColor(colors.HexColor('#E5E7EB'))
            self.setLineWidth(0.5)
            self.line(54, 742, 558, 742)

        # Footer
        self.setFont('Helvetica', 8)
        self.drawString(54, 36, '© 2026 Shibina S | Portfolio Documentation')
        page_str = f'Page {self._pageNumber} of {page_count}'
        self.drawRightString(558, 36, page_str)
        self.setStrokeColor(colors.HexColor('#E5E7EB'))
        self.setLineWidth(0.5)
        self.line(54, 48, 558, 48)
        
        self.restoreState()

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=54,
    rightMargin=54,
    topMargin=48,
    bottomMargin=48
)

styles = getSampleStyleSheet()

# Custom Palette
PRIMARY = colors.HexColor('#1E1B4B') # Dark Indigo
ACCENT = colors.HexColor('#7C3AED')  # Purple Accent
TEXT_DARK = colors.HexColor('#1F2937')
BG_LIGHT = colors.HexColor('#F9FAFB')
BORDER_COLOR = colors.HexColor('#E5E7EB')

# Custom Styles
title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=PRIMARY,
    spaceAfter=4
)

subtitle_style = ParagraphStyle(
    'DocSubTitle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10.5,
    leading=14,
    textColor=colors.HexColor('#4B5563'),
    spaceAfter=12
)

h1_style = ParagraphStyle(
    'Heading1_Custom',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=12.5,
    leading=16,
    textColor=ACCENT,
    spaceBefore=10,
    spaceAfter=5,
    keepWithNext=True
)

h2_style = ParagraphStyle(
    'Heading2_Custom',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10,
    leading=13,
    textColor=PRIMARY,
    spaceBefore=6,
    spaceAfter=3,
    keepWithNext=True
)

body_style = ParagraphStyle(
    'Body_Custom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=13.5,
    textColor=TEXT_DARK,
    spaceAfter=5
)

code_style = ParagraphStyle(
    'Code_Custom',
    parent=styles['Normal'],
    fontName='Courier-Bold',
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor('#1E293B'),
    backColor=colors.HexColor('#F1F5F9'),
    borderColor=colors.HexColor('#CBD5E1'),
    borderWidth=0.5,
    borderPadding=5,
    spaceAfter=5,
    borderRadius=4
)

bullet_style = ParagraphStyle(
    'Bullet_Custom',
    parent=body_style,
    leftIndent=12,
    bulletIndent=4,
    spaceAfter=2
)

story = []

# Title Banner
story.append(Paragraph('SHIBINA S — PORTFOLIO USER GUIDE', title_style))
story.append(Paragraph('Comprehensive Manual for Running, Managing & Customizing Your Web Portfolio', subtitle_style))
story.append(HRFlowable(width='100%', thickness=1.5, color=ACCENT, spaceAfter=10))

# 1. Executive Summary
story.append(Paragraph('1. Executive Summary & Overview', h1_style))
story.append(Paragraph(
    'Welcome to your personal web portfolio! This document provides a clear, step-by-step guide explaining how your portfolio is structured, how to download and run it locally on your computer, and how you can easily edit text, projects, skills, certificates, and media without complex programming knowledge.',
    body_style
))

# Quick Info Table
info_data = [
    [Paragraph('<b>Client Name:</b>', body_style), Paragraph('Shibina S', body_style)],
    [Paragraph('<b>Professional Role:</b>', body_style), Paragraph('Web Developer & Software Engineer', body_style)],
    [Paragraph('<b>Location:</b>', body_style), Paragraph('Deira, Dubai, UAE', body_style)],
    [Paragraph('<b>GitHub Repository:</b>', body_style), Paragraph('<u>https://github.com/mdyusuf0/shibina-portfolio</u>', body_style)],
]
t_info = Table(info_data, colWidths=[130, 370])
t_info.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), BG_LIGHT),
    ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 4),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))
story.append(t_info)
story.append(Spacer(1, 8))

# 2. Technology Stack
story.append(Paragraph('2. Technology Stack Breakdown', h1_style))
story.append(Paragraph(
    'Your portfolio is built using modern, industry-standard web technologies designed for ultra-fast page speed, modern glassmorphic aesthetics, and full mobile responsiveness:',
    body_style
))

tech_data = [
    [Paragraph('<b>Component</b>', body_style), Paragraph('<b>Technology</b>', body_style), Paragraph('<b>Purpose</b>', body_style)],
    [Paragraph('Frontend Framework', body_style), Paragraph('React 19', body_style), Paragraph('Powers interactive UI components & state', body_style)],
    [Paragraph('Build System', body_style), Paragraph('Vite 8', body_style), Paragraph('Ultra-fast local development & production bundler', body_style)],
    [Paragraph('Styling Engine', body_style), Paragraph('Tailwind CSS v4', body_style), Paragraph('Modern utility-first responsive styling', body_style)],
    [Paragraph('Design System', body_style), Paragraph('Glassmorphism 2029', body_style), Paragraph('Glass cards & sleek black edge glows', body_style)],
    [Paragraph('Animations', body_style), Paragraph('AOS & Canvas Particles', body_style), Paragraph('Smooth scroll reveals & cursor particle effects', body_style)],
]
t_tech = Table(tech_data, colWidths=[110, 140, 250])
t_tech.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#EDE9FE')),
    ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 4),
]))
story.append(t_tech)
story.append(Spacer(1, 8))

# 3. How to Run Locally
story.append(Paragraph('3. How to Download & Run Locally (Step-by-Step)', h1_style))
story.append(Paragraph(
    'Follow these simple steps to download and run your website on your computer:',
    body_style
))

story.append(Paragraph('<b>Step 1: Install Node.js</b>', h2_style))
story.append(Paragraph('Go to <u>https://nodejs.org/</u> and download the <b>LTS (Recommended)</b> version. Install it using standard installer prompts.', bullet_style))

story.append(Paragraph('<b>Step 2: Download Code from GitHub</b>', h2_style))
story.append(Paragraph('• Visit <u>https://github.com/mdyusuf0/shibina-portfolio</u>', bullet_style))
story.append(Paragraph('• Click the green <b>Code</b> button and select <b>Download ZIP</b>.', bullet_style))
story.append(Paragraph('• Extract the ZIP folder to your Desktop or preferred folder.', bullet_style))

story.append(Paragraph('<b>Step 3: Open Terminal in Project Directory</b>', h2_style))
story.append(Paragraph('Open Command Prompt (Windows) or Terminal (Mac) and navigate to your project folder:', body_style))
story.append(Paragraph('cd Desktop/shibina-portfolio', code_style))

story.append(Paragraph('<b>Step 4: Install Dependencies</b>', h2_style))
story.append(Paragraph('Run the following command to install required libraries:', body_style))
story.append(Paragraph('npm install', code_style))

story.append(Paragraph('<b>Step 5: Start Local Development Server</b>', h2_style))
story.append(Paragraph('Run this command to start your live local preview:', body_style))
story.append(Paragraph('npm run dev', code_style))
story.append(Paragraph('Open <b>http://localhost:5173</b> in Google Chrome or any browser.', body_style))

story.append(Paragraph('<b>Step 6: Build for Production Hosting</b>', h2_style))
story.append(Paragraph('When ready to upload to web hosting (Vercel, Netlify, Hostinger, cPanel), run:', body_style))
story.append(Paragraph('npm run build', code_style))

story.append(Spacer(1, 8))

# 4. How to Edit Content
story.append(Paragraph('4. How to Edit & Customize Website Content', h1_style))
story.append(Paragraph(
    'All website text and content is centralized inside one easy-to-edit file: <b>src/data/portfolioData.js</b>.',
    body_style
))

story.append(Paragraph('<b>a) Editing Personal Details & Contact Info</b>', h2_style))
story.append(Paragraph('Open <b>src/data/portfolioData.js</b>. Update <b>personalInfo</b>:', body_style))
story.append(Paragraph('export const personalInfo = {\n  name: "Shibina S",\n  title: "Web Developer & Software Engineer",\n  location: "Deira, Dubai, UAE",\n  phone: "+971 523346885",\n  emails: { primary: "Shibinaibi@gmail.com" }\n};', code_style))

story.append(Paragraph('<b>b) Editing Live UAE Projects & Web Links</b>', h2_style))
story.append(Paragraph('In <b>portfolioData.js</b>, update <b>projects</b> array to modify live URLs (mizco.ae, mizhome.ae, mizperfectsupplies.com), titles, and descriptions.', body_style))

story.append(Paragraph('<b>c) Editing Technical Skills</b>', h2_style))
story.append(Paragraph('In <b>portfolioData.js</b>, update <b>technicalSkills</b>. Official SVG brand logos render automatically for all skills.', body_style))

story.append(Paragraph('<b>d) Editing Work Experience & Education</b>', h2_style))
story.append(Paragraph('In <b>portfolioData.js</b>, update <b>experienceData</b> and <b>educationData</b> to add new employment roles or degrees.', body_style))

story.append(Spacer(1, 8))

# 5. Media Assets
story.append(Paragraph('5. Managing Media Assets & Resume', h1_style))
story.append(Paragraph(
    'All media files, downloadable resume, and certificate images are stored in the <b>public/</b> folder:',
    body_style
))

media_data = [
    [Paragraph('<b>Asset Type</b>', body_style), Paragraph('<b>File Path</b>', body_style), Paragraph('<b>How to Replace</b>', body_style)],
    [Paragraph('Resume PDF', body_style), Paragraph('public/shibina-resume.pdf', body_style), Paragraph('Replace with your new PDF using exact same filename', body_style)],
    [Paragraph('Hero Video', body_style), Paragraph('public/hero-video.mp4', body_style), Paragraph('Replace with new MP4 video file', body_style)],
    [Paragraph('Hero Poster', body_style), Paragraph('public/hero-poster.png', body_style), Paragraph('Replace with new PNG image', body_style)],
    [Paragraph('Certificates', body_style), Paragraph('public/certificates/', body_style), Paragraph('Add new certificate PNG images to this folder', body_style)],
]
t_media = Table(media_data, colWidths=[100, 150, 250])
t_media.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#EDE9FE')),
    ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 4),
]))
story.append(t_media)
story.append(Spacer(1, 8))

# 6. Publishing Updates to GitHub
story.append(Paragraph('6. Publishing Changes to GitHub', h1_style))
story.append(Paragraph('After saving edits locally, run these terminal commands to push updates to GitHub:', body_style))
story.append(Paragraph('git add .\ngit commit -m "Update portfolio content"\ngit push origin main', code_style))

story.append(Spacer(1, 8))
story.append(Paragraph('<b>Thank you, Shibina! Your portfolio is ready to showcase your engineering excellence.</b>', ParagraphStyle('Ending', parent=body_style, fontName='Helvetica-Bold', textColor=PRIMARY, alignment=1)))

# Build PDF
doc.build(story, canvasmaker=NumberedCanvas)

# Copy to public folder
shutil.copy2(pdf_path, pub_pdf_path)

print('Generated PDF at:', pdf_path)
print('Copied PDF to public at:', pub_pdf_path)
