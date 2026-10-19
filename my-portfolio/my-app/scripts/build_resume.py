"""Build the single-column, text-based portfolio resume.

Install dependencies with: python -m pip install -r scripts/requirements-resume.txt
Then run: python scripts/build_resume.py
Edit the content below before rebuilding. Use only verified facts and metrics.
"""

from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Resume.pdf"
EMAIL = "shivamofficialsm@gmail.com"
PHONE = "+91 9654385742"

INK = colors.HexColor("#17243a")
MUTED = colors.HexColor("#435066")
ACCENT = colors.HexColor("#2257a8")

styles = {
    "name": ParagraphStyle(
        "Name", fontName="Helvetica-Bold", fontSize=19, leading=23,
        textColor=INK, alignment=TA_CENTER, spaceAfter=3,
    ),
    "headline": ParagraphStyle(
        "Headline", fontName="Helvetica", fontSize=10, leading=13,
        textColor=MUTED, alignment=TA_CENTER, spaceAfter=3,
    ),
    "contact": ParagraphStyle(
        "Contact", fontName="Helvetica", fontSize=9.2, leading=12.5,
        textColor=INK, alignment=TA_CENTER, spaceAfter=2,
    ),
    "links": ParagraphStyle(
        "Links", fontName="Helvetica", fontSize=8.8, leading=12,
        textColor=ACCENT, alignment=TA_CENTER, spaceAfter=8,
    ),
    "section": ParagraphStyle(
        "Section", fontName="Helvetica-Bold", fontSize=10.3, leading=13,
        textColor=INK, spaceBefore=10, spaceAfter=4,
    ),
    "entry": ParagraphStyle(
        "Entry", fontName="Helvetica-Bold", fontSize=9.7, leading=13,
        textColor=INK, spaceBefore=6, spaceAfter=3,
    ),
    "detail": ParagraphStyle(
        "Detail", fontName="Helvetica", fontSize=9.2, leading=13,
        textColor=INK, spaceAfter=3,
    ),
    "bullet": ParagraphStyle(
        "Bullet", fontName="Helvetica", fontSize=9.2, leading=13.2,
        textColor=INK, leftIndent=10, firstLineIndent=-9, spaceAfter=3,
    ),
}


def para(text, style="detail"):
    return Paragraph(text, styles[style])


def link(label, url):
    return f'<link href="{escape(url)}" color="#2257a8">{escape(label)}</link>'


story = []


def section(title):
    story.append(para(escape(title.upper()), "section"))
    story.append(HRFlowable(width="100%", thickness=0.55, color=colors.HexColor("#b9c5d3")))
    story.append(Spacer(1, 2))


def entry(title, subtitle=""):
    story.append(para(escape(title), "entry"))
    if subtitle:
        story.append(para(escape(subtitle)))


def bullet(text):
    story.append(para("- " + escape(text), "bullet"))


story.append(para("Shivam Mittal", "name"))
story.append(para("Software Developer | Full-Stack Development", "headline"))
contact = ["Delhi, India", EMAIL]
if PHONE:
    contact.append(PHONE)
story.append(para(" | ".join(escape(item) for item in contact), "contact"))
story.append(para(
    " | ".join([
        link("github.com/shivamMittal088", "https://github.com/shivamMittal088"),
        link("linkedin.com/in/shivammittal088", "https://www.linkedin.com/in/shivammittal088"),
        link("theshivam.dev", "https://www.theshivam.dev"),
    ]),
    "links",
))

section("Education")
entry("Vivekananda Institute of Professional Studies (VIPS-TC), Delhi | Nov 2022 - Jul 2026")
story.append(para("B.Tech, Computer Science and Engineering | CGPA: 8.77/10"))

section("Technical Skills")
story.append(para("<b>Languages:</b> TypeScript, JavaScript, C++, Python"))
story.append(para("<b>Frontend:</b> React, Redux Toolkit, HTML, CSS, Tailwind CSS"))
story.append(para("<b>Backend and Databases:</b> Node.js, Express, REST APIs, MongoDB, MySQL, Redis"))
story.append(para("<b>Tools and Deployment:</b> Git, GitHub, Docker, AWS EC2, Nginx, PM2, Vercel, Postman"))

section("Experience")
entry("goSharpener | Software Engineer | Aug 2026 - Present")
bullet("Automated Excel-based student mapping to classify records as matched, review needed, or unmatched.")
bullet("Built file conversion and tab synchronization workflows; contributed to rollback functionality and code reviews.")

entry("AccioJob | Web Development Intern (college-sponsored) | Jun 2024 - Sep 2024")
bullet("Built a responsive restaurant web app with search, filtering, sorting, a cart, and dynamic routing.")

section("Projects")
entry("Expense Tracker | React, TypeScript, Node.js, Express, MongoDB, Redis, Docker")
story.append(para(
    link("track-expense.com", "https://www.track-expense.com/") + " | "
    + link("Frontend GitHub", "https://github.com/shivamMittal088/Expense-Tracker") + " | "
    + link("Backend GitHub", "https://github.com/shivamMittal088/ExpenseTracker-backend"),
))
bullet("Built expense tracking with recurring payment analytics, spending trends, heatmaps, and Excel export by date range.")
bullet("Implemented JWT authentication with HTTP-only cookies and cursor-paginated expense APIs in TypeScript and Express.")
bullet("Added offline expense queuing with IndexedDB and sync on reconnect; containerized the frontend, API, and MongoDB with Docker Compose.")

entry("DevTinder | React, Node.js, Express, MongoDB, AWS EC2 | Oct 2025 - Nov 2025")
story.append(para(
    link("Frontend GitHub", "https://github.com/shivamMittal088/devFrontend") + " | "
    + link("Backend GitHub", "https://github.com/shivamMittal088/DevBackend"),
))
bullet("Built a developer matching app with feeds, profiles, connection requests, and mutual connections, secured with JWT.")
bullet("Deployed the Node.js service on AWS EC2 behind an Nginx reverse proxy with PM2 process management.")

entry("Freelance Client Website | React, Vercel")
story.append(para(link("advocatenaveengarg.com", "https://advocatenaveengarg.com")))
bullet("Built and deployed a responsive React frontend for a client using Vercel and a custom domain.")

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
document = SimpleDocTemplate(
    str(OUTPUT), pagesize=letter,
    leftMargin=0.63 * inch, rightMargin=0.63 * inch,
    topMargin=0.48 * inch, bottomMargin=0.48 * inch,
    title="Shivam Mittal - Software Developer Resume",
    author="Shivam Mittal",
)
document.build(story)
print(OUTPUT)
