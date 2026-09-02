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
from reportlab.lib.enums import TA_CENTER

A6_W = 105 * 2.8346
A6_H = 148 * 2.8346

C = {"primary": "#1A5276", "secondary": "#2E86AB", "accent": "#00B4A6", "success": "#27AE60", "warning": "#E67E22", "danger": "#E74C3C", "dark": "#1A1A2E", "muted": "#7F8C8D", "white": "#FFFFFF"}

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
    ts = TableStyle([("BACKGROUND", (0,0), (-1,-1), HexColor(accent)), ("ALIGN", (0,0), (-1,-1), "CENTER"), ("VALIGN", (0,0), (-1,-1), "MIDDLE"), ("TOPPADDING", (0,0), (-1,-1), 6), ("BOTTOMPADDING", (0,0), (-1,-1), 6)])
    t = Table([[Paragraph(f"<b>{num:02d}</b>", S["num"])], [Paragraph(f"<b>{title}</b>", S["title"])], [Paragraph(subtitle, S["subtitle"])]], colWidths=[W])
    t.setStyle(ts)
    return t

def sec(txt): return Paragraph(f"<b>{txt}</b>", S["section"])
def bul(txt, ch="*"): return Paragraph(f"{ch} {txt}", S["bullet"])
def sp(n=4): return Spacer(1, n)

def gen_card(card_num, title, subtitle, accent, content_fn):
    out_dir = r"D:/新课开发/运营商/03-厅店转型/可打印工具卡"
    os.makedirs(out_dir, exist_ok=True)
    story = [header(title, subtitle, accent, card_num), sp(6)]
    content_fn(story)
    story += [sp(6), Paragraph("《厅店重生》培训课程工具卡 | 勤践勤思 知行合一", S["footer"])]
    out_path = os.path.join(out_dir, f"0{card_num}-{title}.pdf")
    doc = SimpleDocTemplate(out_path, pagesize=(A6_W, A6_H), leftMargin=8, rightMargin=8, topMargin=6, bottomMargin=6)
    doc.build(story)
    print(f"OK: 0{card_num}-{title}.pdf")

def main():
    titles = ["开篇认知自测卡","厅店转型认知卡","客户动机识别卡","人工服务价值证明卡","体验场景设计卡","增值业务推荐卡","家庭生态捆绑卡","数据化经营追踪卡","课程成果总结卡","30天行动计划卡"]
    subtitles = ["自我评估 · 转型认知水平诊断","转型方向 · 评估维度 · 关键指标","客户画像 · 五问法 · 决策树","AI局限 · 人工价值 · 话术指南","动线设计 · 场景类型 · 检查清单","推荐话术 · 价值呈现 · 拒绝处理","需求评估 · 产品组合 · 价值计算","指标定义 · 追踪频率 · 改善行动","核心要点 · 能力自评 · 下一步","周计划模板 · 月度目标 · 成果检验"]
    accents = [C["primary"],C["secondary"],"#27AE60","#E74C3C","#9B59B6","#E67E22","#16A085","#34495E","#2C3E50",C["accent"]]
    
    for i in range(10):
        card_num = i + 1
        title = titles[i]
        subtitle = subtitles[i]
        accent = accents[i]
        
        def make_content(n):
            def content(story):
                if n == 1:
                    story.append(sec("5道判断题（每题20分）"))
                    for q in ["厅店转型只是把柜台从直线改成弧线？","自助终端可以100%替代人工服务？","增值业务推荐就是推销贵的产品？","家庭客户比单体客户更有价值？","数据化经营就是每天填报表格？"]:
                        story.append(bul(q))
                    story += [sp(4), sec("自我评估量表")]
                    story.append(Paragraph("<b>0-40分</b> 认知误区 - 需要全面重构认知", sty("sc1", fontSize=6.5, textColor=HexColor(C["danger"]))))
                    story.append(Paragraph("<b>60-80分</b> 基本认知 - 有基础，需深化理解", sty("sc2", fontSize=6.5, textColor=HexColor(C["warning"]))))
                    story.append(Paragraph("<b>100分</b> 转型认知 - 已建立正确认知框架", sty("sc3", fontSize=6.5, textColor=HexColor(C["success"]))))
                    story += [sp(4), sec("答案解析区")]
                    for ans in ["厅店转型是业态根本性改变","人工服务有不可替代价值","增值是解决客户真实需求","家庭客户生命周期价值更高","数据化是为决策而非填报"]:
                        color = C["success"] if "更高" in ans else C["danger"]
                        story.append(Paragraph(ans, sty("a", fontSize=6.5, textColor=HexColor(color))))
            return content
        
        gen_card(card_num, title, subtitle, accent, make_content(card_num))
    
    print("
Done! 10 cards generated.")

if __name__ == "__main__": main()
