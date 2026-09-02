#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, sys, importlib.util

def ensure_deps():
    missing = [p for p in ("reportlab",) if importlib.util.find_spec(p) is None]
    if missing:
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "--break-system-packages", "-q"] + missing)
ensure_deps()

from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.pagesizes import A6
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_CENTER, TA_LEFT

A6_W = 105 * 2.8346
A6_H = 148 * 2.8346

C = {
    "primary": "#1A5276", "secondary": "#2E86AB", "accent": "#00B4A6", "accent_lt": "#E8F6F3",
    "success": "#27AE60", "warning": "#E67E22", "danger": "#E74C3C", "dark": "#1A1A2E",
    "muted": "#7F8C8D", "bg": "#F8F9FA", "white": "#FFFFFF",
}

def sty(name, **kw):
    defaults = dict(fontName="Helvetica", fontSize=7.5, leading=10, textColor=HexColor(C["dark"]), spaceAfter=2)
    defaults.update(kw)
    return ParagraphStyle(name, **defaults)

S = {
    "title": sty("T", fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=white, alignment=TA_CENTER),
    "subtitle": sty("ST", fontName="Helvetica", fontSize=7, leading=9, textColor=HexColor("#E0E0E0"), alignment=TA_CENTER),
    "section": sty("SEC", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=HexColor(C["primary"]), spaceBefore=6, spaceAfter=3),
    "body": sty("B", fontSize=7, leading=9),
    "bullet": sty("BU", fontSize=6.5, leading=9, leftIndent=6),
    "small": sty("SM", fontSize=6, leading=8, textColor=HexColor(C["muted"])),
    "t_hdr": sty("TH", fontName="Helvetica-Bold", fontSize=7, leading=9, textColor=white, alignment=TA_CENTER),
    "t_cell": sty("TC", fontSize=6.5, leading=8.5),
    "footer": sty("FT", fontSize=5.5, leading=7, textColor=HexColor(C["muted"]), alignment=TA_CENTER),
    "num": sty("N", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=HexColor(C["accent"]), alignment=TA_CENTER),
}

W = A6_W - 16

def header(title, subtitle, accent, num):
    ts = TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), HexColor(accent)),
        ("ALIGN", (0,0), (-1,-1), "CENTER"), ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING", (0,0), (-1,-1), 6), ("BOTTOMPADDING", (0,0), (-1,-1), 6),
    ])
    t = Table([[Paragraph(f"<b>{num:02d}</b>", S["num"])], [Paragraph(f"<b>{title}</b>", S["title"])], [Paragraph(subtitle, S["subtitle"])]], colWidths=[W])
    t.setStyle(ts)
    return t

def sec(txt): return Paragraph(f"<b>{txt}</b>", S["section"])
def bul(txt, ch="*"): return Paragraph(f"{ch} {txt}", S["bullet"])
def sp(n=4): return Spacer(1, n)

def simple_table(hdr, rows, widths=None):
    cw = widths or [W/len(hdr)]*len(hdr)
    data = [[Paragraph(h, S["t_hdr"]) for h in hdr]] + [[Paragraph(str(c), S["t_cell"]) for c in r] for r in rows]
    t = Table(data, colWidths=cw)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), HexColor(C["secondary"])),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [white, HexColor("#F5F5F5")]),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING", (0,0), (-1,-1), 2), ("BOTTOMPADDING", (0,0), (-1,-1), 2),
        ("LEFTPADDING", (0,0), (-1,-1), 3), ("RIGHTPADDING", (0,0), (-1,-1), 3),
        ("BOX", (0,0), (-1,-1), 0.5, HexColor("#CCCCCC")),
        ("LINEBELOW", (0,0), (-1,0), 1, HexColor(C["accent"])),
    ]))
    return t
