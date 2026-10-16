import os
import sys
from pypdf import PdfReader
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.style import WD_STYLE_TYPE
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    KeepTogether,
)

# Target output files
ROOT_DIR = r"c:\Users\nirma\Desktop\nirmal"
DESKTOP_DIR = r"c:\Users\nirma\Desktop"
USER_DIR = r"c:\Users\nirma"

PDF_FILENAME = "Nirmal_Kumar_V_Resume.pdf"
DOCX_FILENAME = "Nirmal_Kumar_V_Resume.docx"

# Color Palette (ATS-friendly, professional dark navy / slate palette)
COLOR_PRIMARY = colors.HexColor("#0F172A")    # Deep Navy
COLOR_SECONDARY = colors.HexColor("#1E293B")  # Slate 800
COLOR_BODY = colors.HexColor("#1E293B")       # Dark Charcoal
COLOR_MUTED = colors.HexColor("#475569")      # Slate 600
COLOR_LINE = colors.HexColor("#CBD5E1")       # Border rule
COLOR_LINK = colors.HexColor("#0369A1")       # Slate/Sky Blue for links

def build_pdf(output_path):
    # A4: 595.27 x 841.89 pt
    # Target exactly 1 single page with zero clipping
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=34,
        rightMargin=34,
        topMargin=26,
        bottomMargin=24,
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=17,
        leading=19,
        textColor=COLOR_PRIMARY,
        alignment=1, # Center
        spaceAfter=2,
    )
    
    subtitle_style = ParagraphStyle(
        'ResumeSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=11,
        textColor=COLOR_SECONDARY,
        alignment=1,
        spaceAfter=4,
    )
    
    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=COLOR_MUTED,
        alignment=1,
        spaceAfter=6,
    )
    
    section_style = ParagraphStyle(
        'ResumeSection',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11.5,
        textColor=COLOR_PRIMARY,
        spaceBefore=5,
        spaceAfter=2,
    )
    
    item_title_style = ParagraphStyle(
        'ResumeItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=10.5,
        textColor=COLOR_PRIMARY,
    )
    
    item_meta_style = ParagraphStyle(
        'ResumeItemMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10,
        textColor=COLOR_MUTED,
        alignment=2, # Right align
    )
    
    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=COLOR_BODY,
        spaceAfter=1.5,
    )
    
    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.2,
        textColor=COLOR_BODY,
        leftIndent=11,
        firstLineIndent=-7,
        spaceAfter=1.5,
    )
    
    story = []
    
    # --- HEADER ---
    story.append(Paragraph("NIRMAL KUMAR V.", name_style))
    story.append(Paragraph("B.Tech Information Technology • Kongu Engineering College", subtitle_style))
    
    # Contact Links Lines (balanced 3 lines)
    contact_text = (
        'nirmalkumar31082006@gmail.com &nbsp;&bull;&nbsp; '
        'nirmalkumarv.24it@kongu.edu &nbsp;&bull;&nbsp; '
        'Tiruppur, Tamil Nadu, India<br/>'
        '<a href="https://github.com/nirmal-kumar-v" color="#0369A1"><b>GitHub</b>: github.com/nirmal-kumar-v</a> &nbsp;&bull;&nbsp; '
        '<a href="https://www.linkedin.com/in/nirmal-kumar-v/" color="#0369A1"><b>LinkedIn</b>: linkedin.com/in/nirmal-kumar-v-</a><br/>'
        '<a href="https://leetcode.com/u/nirmal-kumar-v/" color="#0369A1"><b>LeetCode</b>: @nirmal-kumar-v</a> &nbsp;&bull;&nbsp; '
        '<a href="https://www.geeksforgeeks.org/profile/nirmalkumar33" color="#0369A1"><b>GeeksforGeeks</b>: @nirmalkumar33</a> &nbsp;&bull;&nbsp; '
        '<a href="https://codeforces.com/profile/nirmal_kumar_v" color="#0369A1"><b>Codeforces</b>: @nirmal_kumar_v</a>'
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(HRFlowable(width="100%", thickness=0.75, color=COLOR_LINE, spaceBefore=0, spaceAfter=4))
    
    # Helper for Section Title
    def add_section_header(title):
        p = Paragraph(f"<b>{title.upper()}</b>", section_style)
        hr = HRFlowable(width="100%", thickness=0.5, color=COLOR_LINE, spaceBefore=1, spaceAfter=3)
        story.append(p)
        story.append(hr)

    # --- EDUCATION ---
    add_section_header("Education")
    edu_table_data = [
        [
            Paragraph("<b>Kongu Engineering College</b> — Perundurai, Tamil Nadu", item_title_style),
            Paragraph("<b>2023 – Present</b>", item_meta_style)
        ],
        [
            Paragraph("Bachelor of Technology in Information Technology &nbsp;|&nbsp; <b>CGPA: 8.62 / 10.0</b> (Semesters 1–4)", body_style),
            Paragraph("Current: 3rd Year / 5th Sem", item_meta_style)
        ],
        [
            Paragraph("HSC (Class XII): <b>91.33%</b> &nbsp;|&nbsp; <b>Computer Science: 100 / 100</b>", body_style),
            Paragraph("March 2024", item_meta_style)
        ]
    ]
    t_edu = Table(edu_table_data, colWidths=[385, 142])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 2))

    # --- TECHNICAL SKILLS ---
    add_section_header("Technical Skills")
    skills_text = (
        "• <b>Languages:</b> Java (Primary for DSA & OOP), JavaScript (ES6+), Python, SQL<br/>"
        "• <b>Web & Frontend:</b> React.js, Vite, HTML5, CSS3, Tailwind CSS, Responsive Design<br/>"
        "• <b>Backend & APIs:</b> Node.js, Express.js, RESTful Architecture, JWT Authentication, FastAPI<br/>"
        "• <b>Databases:</b> PostgreSQL, MongoDB, Relational Schema Design, Query Optimization<br/>"
        "• <b>Developer Tools:</b> Git, GitHub, Linux CLI, Android / Termux Integration, Postman, Vercel"
    )
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 2))

    # --- PROBLEM SOLVING & COMPETITIVE PROGRAMMING ---
    add_section_header("Problem Solving & Competitive Programming")
    cp_text = (
        "• <b>LeetCode:</b> <a href='https://leetcode.com/u/nirmal-kumar-v/' color='#0369A1'><b>250+ Problems Solved</b></a> across Data Structures, Dynamic Programming, and Graph Algorithms.<br/>"
        "• <b>GeeksforGeeks:</b> <a href='https://www.geeksforgeeks.org/profile/nirmalkumar33' color='#0369A1'><b>500+ Problems Solved</b></a> (Coding Score: 1,500+; Institute Rank: 35; Longest Streak: 32).<br/>"
        "• <b>Elite PAAC Training:</b> Selected among the <b>top ~4%</b> (80 students out of 2,000+ candidates considered) for specialized DSA and Competitive Programming training conducted directly by GeeksforGeeks mentors."
    )
    story.append(Paragraph(cp_text, body_style))
    story.append(Spacer(1, 2))

    # --- SELECTED PROJECTS ---
    add_section_header("Selected Technical Projects")
    
    # Project 1: Kongu Kural
    p1_head = [
        [
            Paragraph("<b>Kongu Kural — Multilingual AI College Chatbot & SMS Gateway</b>", item_title_style),
            Paragraph("<b>1st Prize — Tamil Mandram 24H Hackathon</b>", item_meta_style)
        ],
        [
            Paragraph("<i>Tech: React, Node.js, Express, NLP, Android Termux SMS Gateway, Vercel</i> &nbsp;|&nbsp; <a href='https://kongu-kural.vercel.app' color='#0369A1'>Live Demo</a> &bull; <a href='https://github.com/nirmal-kumar-v/kongu-kural' color='#0369A1'>GitHub</a>", body_style),
            Paragraph("Role: Team Lead", item_meta_style)
        ]
    ]
    t_p1 = Table(p1_head, colWidths=[355, 172])
    t_p1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_p1)
    story.append(Paragraph("&bull; Architected a dual-channel conversational platform answering campus queries across Tamil, Tanglish, English, and Hindi using verified institutional knowledge bases.", bullet_style))
    story.append(Paragraph("&bull; Engineered an Android Termux-powered SMS gateway with an offline fallback mechanism, enabling low-connectivity students to query database records via SMS.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 2: Retail POS
    p2_head = [
        [
            Paragraph("<b>Integrated Retail POS & Store Management System</b>", item_title_style),
            Paragraph("<b>1st Place — DevForge 2K26 24H Hackathon</b>", item_meta_style)
        ],
        [
            Paragraph("<i>Tech: React, Node.js, Express.js, PostgreSQL, Role-Based Access Control</i> &nbsp;|&nbsp; <a href='https://github.com/nirmal-kumar-v/Store-Management-System' color='#0369A1'>GitHub</a>", body_style),
            Paragraph("Role: Team Lead", item_meta_style)
        ]
    ]
    t_p2 = Table(p2_head, colWidths=[355, 172])
    t_p2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_p2)
    story.append(Paragraph("&bull; Led a 4-member sprint developing an offline-first retail system featuring client-side transaction queueing and deterministic background synchronization upon reconnection.", bullet_style))
    story.append(Paragraph("&bull; Constructed relational PostgreSQL schemas, role-based authorization (Admin/Manager/Cashier), branch-level isolation, and real-time inventory decrement triggers.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 3: OptiVest
    p3_head = [
        [
            Paragraph("<b>OptiVest / PortfolioIQ — Quantitative Portfolio Risk & Return Optimizer</b>", item_title_style),
            Paragraph("<b>1st Prize — CoE Hackathon</b>", item_meta_style)
        ],
        [
            Paragraph("<i>Tech: React, Vite, FastAPI, Python, SciPy, Modern Portfolio Theory</i> &nbsp;|&nbsp; <a href='https://optivest-psi.vercel.app/' color='#0369A1'>Live Demo</a> &bull; <a href='https://github.com/nirmal-kumar-v/Portfolio-Risk-and-Return-Optimization' color='#0369A1'>GitHub</a>", body_style),
            Paragraph("Role: Team Lead", item_meta_style)
        ]
    ]
    t_p3 = Table(p3_head, colWidths=[355, 172])
    t_p3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_p3)
    story.append(Paragraph("&bull; Implemented financial optimization endpoints in Python using SciPy to generate the Markowitz Efficient Frontier curve and validate asset covariance matrices.", bullet_style))
    story.append(Paragraph("&bull; Ran Monte Carlo simulations across 10,000 randomized asset allocations to identify Maximum Sharpe and Minimum Volatility portfolio weights with dynamic visual charts.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 4: ChangeWave
    p4_head = [
        [
            Paragraph("<b>ChangeWave — Social Impact & Community Welfare Management System</b>", item_title_style),
            Paragraph("<b>1st Place (RRC) &bull; 2× 2nd Place (CSI)</b>", item_meta_style)
        ],
        [
            Paragraph("<i>Tech: Node.js, Express.js, MongoDB, JWT, JavaScript</i> &nbsp;|&nbsp; <a href='https://changewave.tech' color='#0369A1'>changewave.tech</a> &bull; <a href='https://github.com/nirmal-kumar-v/changewave' color='#0369A1'>GitHub</a>", body_style),
            Paragraph("Role: Presenter / Developer", item_meta_style)
        ]
    ]
    t_p4 = Table(p4_head, colWidths=[355, 172])
    t_p4.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_p4)
    story.append(Paragraph("&bull; Developed an end-to-end welfare platform for campaign launch, pre/post initiative surveying, and sentiment metric tracking; presented as the institutional showcase system for NBA accreditation.", bullet_style))
    story.append(Spacer(1, 2))

    # --- TRAINING & EXPERIENCE ---
    add_section_header("Training & Experience")
    train_head = [
        [
            Paragraph("<b>In-Plant Trainee — Mist Technology</b> (15 Days)", item_title_style),
            Paragraph("<b>Technical Training</b>", item_meta_style)
        ],
        [
            Paragraph("Completed 15 days of intensive training: 8 days in Full-Stack Web Development and 7 days in Frontend Application Design.", body_style),
            Paragraph("Web & Frontend Engineering", item_meta_style)
        ],
        [
            Paragraph("<b>WeLe — Software Engineering Internship Selection:</b> Selected for an internship opportunity following technical evaluation at VIT Data Quest 3.0.", body_style),
            Paragraph("Internship Selection", item_meta_style)
        ]
    ]
    t_train = Table(train_head, colWidths=[385, 142])
    t_train.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_train)
    story.append(Spacer(1, 2))

    # --- CERTIFICATIONS & KEY HONORS ---
    add_section_header("Certifications & Key Honors")
    honors_text = (
        "• <b>NPTEL (IIT) — Human-Computer Interaction:</b> <b>Elite + Gold Medal (Top 5% Nationwide, Score: 98%)</b>.<br/>"
        "• <b>NPTEL (IIT) — Demystifying Networking:</b> Completed with 65% certification score.<br/>"
        "• <b>Hackathon Recognition:</b> <b>4 First-Place Wins</b> (DevForge 2K26 24H, Tamil Mandram 24H, CoE Challenge, RRC 8H) and <b>5 Second-Place Awards</b> across regional and national technical symposiums (CSI Solo & Team, IEEE BCI Paper, KPR Presentation)."
    )
    story.append(Paragraph(honors_text, body_style))

    # Build PDF
    doc.build(story)
    print(f"PDF generated successfully at: {output_path}")

def build_docx(output_path):
    doc = Document()
    
    # 0.45 inch margins for clean 1-page fit
    for section in doc.sections:
        section.top_margin = Inches(0.4)
        section.bottom_margin = Inches(0.4)
        section.left_margin = Inches(0.5)
        section.right_margin = Inches(0.5)
        section.page_width = Inches(8.27)  # A4
        section.page_height = Inches(11.69)
        
    # Helper to add bottom border to paragraph (for section headers)
    def add_bottom_border(paragraph):
        pPr = paragraph._p.get_or_add_pPr()
        pBdr = parse_xml(r'<w:pBdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:bottom w:val="single" w:sz="6" w:space="2" w:color="CBD5E1"/></w:pBdr>')
        pPr.append(pBdr)

    # Helper for adding hyperlinks in docx
    def add_hyperlink(paragraph, url, text, color="0369A1", underline=False):
        part = paragraph.part
        r_id = part.relate_to(url, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", is_external=True)
        hyperlink = parse_xml(f'<w:hyperlink xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:id="{r_id}" w:history="1"/>')
        new_run = parse_xml(f'<w:r xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:rPr><w:rColor w:val="{color}"/>{("<w:u w:val=\'single\'/>" if underline else "")}<w:b/></w:rPr><w:t>{text}</w:t></w:r>')
        hyperlink.append(new_run)
        paragraph._p.append(hyperlink)

    # Header - Name
    p_name = doc.add_paragraph()
    p_name.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_name.paragraph_format.space_before = Pt(0)
    p_name.paragraph_format.space_after = Pt(1)
    run_name = p_name.add_run("NIRMAL KUMAR V.")
    run_name.font.name = "Calibri"
    run_name.font.size = Pt(17)
    run_name.font.bold = True
    run_name.font.color.rgb = RGBColor(15, 23, 42)

    # Subtitle
    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_sub.paragraph_format.space_before = Pt(0)
    p_sub.paragraph_format.space_after = Pt(2)
    run_sub = p_sub.add_run("B.Tech Information Technology • Kongu Engineering College")
    run_sub.font.name = "Calibri"
    run_sub.font.size = Pt(9.5)
    run_sub.font.color.rgb = RGBColor(30, 41, 59)

    # Contact line 1
    p_con1 = doc.add_paragraph()
    p_con1.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_con1.paragraph_format.space_before = Pt(0)
    p_con1.paragraph_format.space_after = Pt(1)
    r1 = p_con1.add_run("nirmalkumar31082006@gmail.com  |  nirmalkumarv.24it@kongu.edu  |  Tiruppur, Tamil Nadu")
    r1.font.name = "Calibri"
    r1.font.size = Pt(8.5)
    r1.font.color.rgb = RGBColor(71, 85, 105)

    # Contact line 2 (GitHub & LinkedIn)
    p_con2 = doc.add_paragraph()
    p_con2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_con2.paragraph_format.space_before = Pt(0)
    p_con2.paragraph_format.space_after = Pt(1)
    add_hyperlink(p_con2, "https://github.com/nirmal-kumar-v", "GitHub: github.com/nirmal-kumar-v")
    p_con2.add_run("  •  ")
    add_hyperlink(p_con2, "https://www.linkedin.com/in/nirmal-kumar-v/", "LinkedIn: linkedin.com/in/nirmal-kumar-v-")

    # Contact line 3 (Competitive Coding Profiles)
    p_con3 = doc.add_paragraph()
    p_con3.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_con3.paragraph_format.space_before = Pt(0)
    p_con3.paragraph_format.space_after = Pt(5)
    add_hyperlink(p_con3, "https://leetcode.com/u/nirmal-kumar-v/", "LeetCode: @nirmal-kumar-v")
    p_con3.add_run("  •  ")
    add_hyperlink(p_con3, "https://www.geeksforgeeks.org/profile/nirmalkumar33", "GeeksforGeeks: @nirmalkumar33")
    p_con3.add_run("  •  ")
    add_hyperlink(p_con3, "https://codeforces.com/profile/nirmal_kumar_v", "Codeforces: @nirmal_kumar_v")

    # Section generator
    def add_heading(title):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(6)
        p.paragraph_format.space_after = Pt(2)
        run = p.add_run(title.upper())
        run.font.name = "Calibri"
        run.font.size = Pt(10)
        run.font.bold = True
        run.font.color.rgb = RGBColor(15, 23, 42)
        add_bottom_border(p)
        return p

    def add_bullet(text_runs):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.18)
        p.paragraph_format.first_line_indent = Inches(-0.14)
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(1.5)
        r_bullet = p.add_run("•  ")
        r_bullet.font.name = "Calibri"
        r_bullet.font.size = Pt(8.5)
        for (txt, bold, italic) in text_runs:
            r = p.add_run(txt)
            r.font.name = "Calibri"
            r.font.size = Pt(8.5)
            r.font.bold = bold
            r.font.italic = italic
            r.font.color.rgb = RGBColor(30, 41, 59)
        return p

    # --- EDUCATION ---
    add_heading("Education")
    
    p_edu1 = doc.add_paragraph()
    p_edu1.paragraph_format.space_before = Pt(1)
    p_edu1.paragraph_format.space_after = Pt(0.5)
    r_c = p_edu1.add_run("Kongu Engineering College")
    r_c.font.name = "Calibri"; r_c.font.size = Pt(9); r_c.font.bold = True; r_c.font.color.rgb = RGBColor(15, 23, 42)
    r_loc = p_edu1.add_run(" — Perundurai, Tamil Nadu")
    r_loc.font.name = "Calibri"; r_loc.font.size = Pt(9); r_loc.font.color.rgb = RGBColor(71, 85, 105)
    
    p_edu2 = doc.add_paragraph()
    p_edu2.paragraph_format.space_before = Pt(0)
    p_edu2.paragraph_format.space_after = Pt(1)
    r_deg = p_edu2.add_run("Bachelor of Technology in Information Technology  |  ")
    r_deg.font.name = "Calibri"; r_deg.font.size = Pt(8.5); r_deg.font.color.rgb = RGBColor(30, 41, 59)
    r_cgpa = p_edu2.add_run("CGPA: 8.62 / 10.0 (Semesters 1–4)")
    r_cgpa.font.name = "Calibri"; r_cgpa.font.size = Pt(8.5); r_cgpa.font.bold = True; r_cgpa.font.color.rgb = RGBColor(15, 23, 42)
    r_yr = p_edu2.add_run("  [Current: 3rd Year / 5th Sem, 2023–Present]")
    r_yr.font.name = "Calibri"; r_yr.font.size = Pt(8.5); r_yr.font.color.rgb = RGBColor(71, 85, 105)

    p_hsc = doc.add_paragraph()
    p_hsc.paragraph_format.space_before = Pt(0)
    p_hsc.paragraph_format.space_after = Pt(3)
    r_h1 = p_hsc.add_run("Higher Secondary Certificate (Class XII): ")
    r_h1.font.name = "Calibri"; r_h1.font.size = Pt(8.5); r_h1.font.color.rgb = RGBColor(71, 85, 105)
    r_h2 = p_hsc.add_run("91.33%  |  Computer Science: 100 / 100")
    r_h2.font.name = "Calibri"; r_h2.font.size = Pt(8.5); r_h2.font.bold = True; r_h2.font.color.rgb = RGBColor(30, 41, 59)

    # --- TECHNICAL SKILLS ---
    add_heading("Technical Skills")
    add_bullet([("Languages: ", True, False), ("Java (Primary for DSA & OOP), JavaScript (ES6+), Python, SQL", False, False)])
    add_bullet([("Web & Frontend: ", True, False), ("React.js, Vite, HTML5, CSS3, Tailwind CSS, Responsive Web Design", False, False)])
    add_bullet([("Backend & APIs: ", True, False), ("Node.js, Express.js, RESTful APIs, JWT Authentication, FastAPI", False, False)])
    add_bullet([("Databases: ", True, False), ("PostgreSQL, MongoDB, Relational Schema Architecture, Query Optimization", False, False)])
    add_bullet([("Developer Tools: ", True, False), ("Git, GitHub, Linux CLI, Android / Termux Integration, Postman, Vercel", False, False)])

    # --- PROBLEM SOLVING ---
    add_heading("Problem Solving & Competitive Programming")
    add_bullet([("LeetCode: ", True, False), ("250+ Problems Solved ", True, False), ("across Data Structures, Dynamic Programming, and Graph Algorithms.", False, False)])
    add_bullet([("GeeksforGeeks: ", True, False), ("500+ Problems Solved ", True, False), ("(Coding Score: 1,500+; Institute Rank: 35; Longest Streak: 32).", False, False)])
    add_bullet([("Elite PAAC Training: ", True, False), ("Selected among the ", False, False), ("top ~4% ", True, False), ("(80 students out of 2,000+ candidates considered) for specialized DSA and Competitive Programming training conducted directly by GeeksforGeeks mentors.", False, False)])

    # --- PROJECTS ---
    add_heading("Selected Technical Projects")
    
    # Project 1
    p_pr1 = doc.add_paragraph()
    p_pr1.paragraph_format.space_before = Pt(2); p_pr1.paragraph_format.space_after = Pt(0.5)
    r_p1a = p_pr1.add_run("Kongu Kural — Multilingual AI College Chatbot & SMS Gateway ")
    r_p1a.font.name = "Calibri"; r_p1a.font.size = Pt(9); r_p1a.font.bold = True; r_p1a.font.color.rgb = RGBColor(15, 23, 42)
    r_p1b = p_pr1.add_run(" |  1st Prize — Tamil Mandram 24H Hackathon")
    r_p1b.font.name = "Calibri"; r_p1b.font.size = Pt(8.5); r_p1b.font.bold = True; r_p1b.font.color.rgb = RGBColor(3, 105, 161)
    
    p_pr1_sub = doc.add_paragraph()
    p_pr1_sub.paragraph_format.space_before = Pt(0); p_pr1_sub.paragraph_format.space_after = Pt(1)
    r_p1c = p_pr1_sub.add_run("Tech: React, Node.js, Express, NLP, Android Termux SMS Gateway, Vercel  (Role: Team Lead)")
    r_p1c.font.name = "Calibri"; r_p1c.font.size = Pt(8); r_p1c.font.italic = True; r_p1c.font.color.rgb = RGBColor(71, 85, 105)
    
    add_bullet([("Architected a dual-channel conversational platform answering campus inquiries across Tamil, Tanglish, English, and Hindi using verified institutional knowledge bases.", False, False)])
    add_bullet([("Engineered an Android Termux-powered SMS gateway with an offline fallback mechanism, enabling low-connectivity students to query database records via SMS.", False, False)])

    # Project 2
    p_pr2 = doc.add_paragraph()
    p_pr2.paragraph_format.space_before = Pt(2.5); p_pr2.paragraph_format.space_after = Pt(0.5)
    r_p2a = p_pr2.add_run("Integrated Retail POS & Store Management System ")
    r_p2a.font.name = "Calibri"; r_p2a.font.size = Pt(9); r_p2a.font.bold = True; r_p2a.font.color.rgb = RGBColor(15, 23, 42)
    r_p2b = p_pr2.add_run(" |  1st Place — DevForge 2K26 24H Hackathon")
    r_p2b.font.name = "Calibri"; r_p2b.font.size = Pt(8.5); r_p2b.font.bold = True; r_p2b.font.color.rgb = RGBColor(3, 105, 161)
    
    p_pr2_sub = doc.add_paragraph()
    p_pr2_sub.paragraph_format.space_before = Pt(0); p_pr2_sub.paragraph_format.space_after = Pt(1)
    r_p2c = p_pr2_sub.add_run("Tech: React, Node.js, Express.js, PostgreSQL, Role-Based Access Control  (Role: Team Lead)")
    r_p2c.font.name = "Calibri"; r_p2c.font.size = Pt(8); r_p2c.font.italic = True; r_p2c.font.color.rgb = RGBColor(71, 85, 105)
    
    add_bullet([("Led a 4-member sprint developing an offline-first retail system featuring client-side transaction queueing and deterministic background synchronization upon reconnection.", False, False)])
    add_bullet([("Constructed relational PostgreSQL schemas, role-based authorization (Admin/Manager/Cashier), branch-level isolation, and real-time inventory decrement triggers.", False, False)])

    # Project 3
    p_pr3 = doc.add_paragraph()
    p_pr3.paragraph_format.space_before = Pt(2.5); p_pr3.paragraph_format.space_after = Pt(0.5)
    r_p3a = p_pr3.add_run("OptiVest / PortfolioIQ — Quantitative Portfolio Risk & Return Optimizer ")
    r_p3a.font.name = "Calibri"; r_p3a.font.size = Pt(9); r_p3a.font.bold = True; r_p3a.font.color.rgb = RGBColor(15, 23, 42)
    r_p3b = p_pr3.add_run(" |  1st Prize — CoE Hackathon")
    r_p3b.font.name = "Calibri"; r_p3b.font.size = Pt(8.5); r_p3b.font.bold = True; r_p3b.font.color.rgb = RGBColor(3, 105, 161)
    
    p_pr3_sub = doc.add_paragraph()
    p_pr3_sub.paragraph_format.space_before = Pt(0); p_pr3_sub.paragraph_format.space_after = Pt(1)
    r_p3c = p_pr3_sub.add_run("Tech: React, Vite, FastAPI, Python, SciPy, Modern Portfolio Theory  (Role: Team Lead)")
    r_p3c.font.name = "Calibri"; r_p3c.font.size = Pt(8); r_p3c.font.italic = True; r_p3c.font.color.rgb = RGBColor(71, 85, 105)
    
    add_bullet([("Implemented financial optimization endpoints in Python using SciPy to generate the Markowitz Efficient Frontier curve and validate asset covariance matrices.", False, False)])
    add_bullet([("Ran Monte Carlo simulations across 10,000 randomized asset allocations to identify Maximum Sharpe and Minimum Volatility portfolio weights with dynamic visual charts.", False, False)])

    # Project 4
    p_pr4 = doc.add_paragraph()
    p_pr4.paragraph_format.space_before = Pt(2.5); p_pr4.paragraph_format.space_after = Pt(0.5)
    r_p4a = p_pr4.add_run("ChangeWave — Social Impact & Community Welfare Management System ")
    r_p4a.font.name = "Calibri"; r_p4a.font.size = Pt(9); r_p4a.font.bold = True; r_p4a.font.color.rgb = RGBColor(15, 23, 42)
    r_p4b = p_pr4.add_run(" |  1st Place (RRC) & 2× 2nd Place (CSI)")
    r_p4b.font.name = "Calibri"; r_p4b.font.size = Pt(8.5); r_p4b.font.bold = True; r_p4b.font.color.rgb = RGBColor(3, 105, 161)
    
    p_pr4_sub = doc.add_paragraph()
    p_pr4_sub.paragraph_format.space_before = Pt(0); p_pr4_sub.paragraph_format.space_after = Pt(1)
    r_p4c = p_pr4_sub.add_run("Tech: Node.js, Express.js, MongoDB, JWT, JavaScript  (Role: Presenter / Developer)")
    r_p4c.font.name = "Calibri"; r_p4c.font.size = Pt(8); r_p4c.font.italic = True; r_p4c.font.color.rgb = RGBColor(71, 85, 105)
    
    add_bullet([("Developed an end-to-end welfare platform for campaign launch, pre/post initiative surveying, and sentiment metric tracking; presented as the institutional showcase system for NBA accreditation.", False, False)])

    # --- TRAINING & EXPERIENCE ---
    add_heading("Training & Experience")
    add_bullet([
        ("In-Plant Trainee — Mist Technology ", True, False),
        ("(15 Days): Completed hands-on training with 8 days in Full-Stack Web Development architectures and 7 days in Frontend Application Engineering.", False, False)
    ])
    add_bullet([
        ("WeLe — Software Engineering Internship Selection: ", True, False),
        ("Selected for an engineering internship opportunity following technical evaluation at VIT Data Quest 3.0.", False, False)
    ])

    # --- CERTIFICATIONS & HONORS ---
    add_heading("Certifications & Key Honors")
    add_bullet([
        ("NPTEL (IIT) — Human-Computer Interaction: ", True, False),
        ("Elite + Gold Medal (Top 5% Nationwide, Score: 98%).", True, False)
    ])
    add_bullet([
        ("NPTEL (IIT) — Demystifying Networking: ", True, False),
        ("Completed certification with 65% score.", False, False)
    ])
    add_bullet([
        ("Hackathon Recognition: ", True, False),
        ("4 First-Place Titles ", True, False),
        ("(DevForge 2K26 24H, Tamil Mandram 24H, CoE Challenge, RRC 8H) and ", False, False),
        ("5 Second-Place Awards ", True, False),
        ("across regional & national symposiums (CSI Solo & Team, IEEE BCI Paper, KPR Presentation).", False, False)
    ])

    doc.save(output_path)
    print(f"DOCX generated successfully at: {output_path}")

if __name__ == '__main__':
    # 1. Generate in Root Directory
    pdf_root = os.path.join(ROOT_DIR, PDF_FILENAME)
    docx_root = os.path.join(ROOT_DIR, DOCX_FILENAME)
    build_pdf(pdf_root)
    build_docx(docx_root)

    # 2. Also save to Desktop directory so both locations are covered
    pdf_desktop = os.path.join(DESKTOP_DIR, PDF_FILENAME)
    docx_desktop = os.path.join(DESKTOP_DIR, DOCX_FILENAME)
    import shutil
    shutil.copy2(pdf_root, pdf_desktop)
    shutil.copy2(docx_root, docx_desktop)
    print(f"Copied to desktop: {pdf_desktop}")

    # Check page count
    reader = PdfReader(pdf_root)
    num_pages = len(reader.pages)
    print(f"TOTAL PDF PAGE COUNT: {num_pages}")
