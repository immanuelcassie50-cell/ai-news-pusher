"""
封底页（最后）
"""
import sys
sys.path.insert(0, r'D:\CC\temp\manual-build')

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from doc_helpers import *


def build_backcover(doc):
    """封底"""
    add_pagebreak(doc)

    # 顶部留白
    add_p(doc, '', before=24, after=24)
    add_p(doc, '', before=24, after=24)
    add_p(doc, '', before=24, after=24)

    add_p(doc, '— 封底 —', size=12, color=COLOR_MUTED, align=WD_ALIGN_PARAGRAPH.CENTER, after=24, italic=True)

    add_p(doc, '对话驱动', size=36, bold=True, color=COLOR_PRIMARY,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=24, after=12, line=1.3)
    add_p(doc, 'AI 时代的绩效面谈与能力发展', size=18, bold=True, color=COLOR_ACCENT,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=0, after=24, line=1.3)
    add_p(doc, '学员手册 · 完整版', size=14, color=COLOR_TEXT,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=0, after=24)

    add_p(doc, '', before=12, after=12)
    add_p(doc, '— 一段话 —', size=11, color=COLOR_MUTED, align=WD_ALIGN_PARAGRAPH.CENTER, after=8, italic=True)
    add_p(doc, '绩效面谈不是管理者给员工的"评分仪式"，', size=13, color=COLOR_TEXT,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=4, after=4, line=1.5)
    add_p(doc, '而是员工一年里能感受到的', size=13, color=COLOR_TEXT,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=4, after=4, line=1.5)
    add_p(doc, '"我被认真对待了"的少数几个时刻之一。', size=13, bold=True, color=COLOR_PRIMARY,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=4, after=24, line=1.5)

    add_p(doc, '', before=24, after=24)

    add_p(doc, '开发者：罗宏伟', size=11, color=COLOR_TEXT,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=24, after=4)
    add_p(doc, '课程出品：竞越 · 绩效管理和绩效面谈课程包', size=10, color=COLOR_MUTED,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=4, after=4)
    add_p(doc, '版本：完整版 · 2026', size=9, color=COLOR_MUTED,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=4, after=4)
    add_p(doc, '', before=8, after=8)
    add_p(doc, '本手册为课程内部使用材料，未经许可不得复制或传播。', size=9, color=COLOR_MUTED,
          align=WD_ALIGN_PARAGRAPH.CENTER, before=8, after=4, italic=True)
