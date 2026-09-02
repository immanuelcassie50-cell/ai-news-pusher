#!/usr/bin/env python3
"""Convert card JSON files to block format for PDF generation."""

import json
import os

def fix_json_quotes(raw):
    # Replace fancy/curly double quotes (U+201C, U+201D) with straight double quote
    raw = raw.replace('“', '"')
    raw = raw.replace('”', '"')
    return raw

def convert_card_02(src, dst):
    with open(src, encoding="utf-8") as f:
        raw = f.read()
    raw = fix_json_quotes(raw)
    d = json.loads(raw)
    front = d.get("front", {})
    back = d.get("back", {})

    content = [
        {"type": "h1", "text": front.get("title", "")},
        {"type": "h2", "text": front.get("subtitle", "")},
        {"type": "spacer", "pt": 10},
    ]

    ct = front.get("comparisonTable", {})
    headers = ct.get("headers", [])
    rows_data = ct.get("rows", [])
    content.append({
        "type": "table",
        "headers": headers,
        "rows": [[r.get("type",""), r.get("features",""), r.get("aiResponse",""),
                  r.get("suitableScenario",""), r.get("manufacturingExample","")] for r in rows_data],
        "col_widths": [0.18, 0.22, 0.15, 0.2, 0.25]
    })
    content.append({"type": "spacer", "pt": 10})

    ki = front.get("keyInsight", {})
    content.append({
        "type": "callout",
        "text": "[%s]%s" % (ki.get("label",""), ki.get("content",""))
    })

    content.append({"type": "pagebreak"})
    content.append({"type": "h1", "text": back.get("title", "")})
    content.append({"type": "spacer", "pt": 8})
    for step in back.get("steps", []):
        content.append({"type": "numbered", "text": step})
    content.append({"type": "spacer", "pt": 12})

    ex = back.get("example", {})
    content.append({"type": "body", "text": "[%s]%s" % (ex.get("badLabel",""), ex.get("badExample",""))})
    content.append({"type": "spacer", "pt": 6})
    content.append({"type": "body", "text": "[%s]%s" % (ex.get("goodLabel",""), ex.get("goodExample",""))})
    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "caption", "text": "管理者AI实战课 · 制造业版 | 工具卡 02"})

    with open(dst, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)


def convert_card_03(src, dst):
    with open(src, encoding="utf-8") as f:
        raw = f.read()
    raw = fix_json_quotes(raw)
    d = json.loads(raw)
    front = d.get("front", {})
    back = d.get("back", {})

    content = [
        {"type": "h1", "text": front.get("title", "")},
        {"type": "h2", "text": front.get("subtitle", "")},
        {"type": "spacer", "pt": 8},
        {"type": "body", "text": "模板："},
        {"type": "callout", "text": "角色：%s\n任务：%s\n格式：%s" % (
            front.get("template",{}).get("role",""),
            front.get("template",{}).get("task",""),
            front.get("template",{}).get("format","")
        )},
        {"type": "spacer", "pt": 8},
        {"type": "h2", "text": "信息提炼四步法"},
    ]

    steps = front.get("fourStepMethod", {})
    for step_key in ["step1", "step2", "step3", "step4"]:
        s = steps.get(step_key, {})
        content.append({"type": "numbered", "text": "%s：%s" % (s.get("name",""), s.get("description",""))})

    content.append({"type": "spacer", "pt": 8})
    ex = front.get("example", {})
    content.append({"type": "h3", "text": "示例"})
    content.append({"type": "body", "text": "原始：%s" % ex.get("raw","")[:80]})
    content.append({"type": "body", "text": "提炼：%s" % ex.get("extracted","")})

    content.append({"type": "pagebreak"})
    content.append({"type": "h1", "text": back.get("title", "")})
    content.append({"type": "spacer", "pt": 8})
    for step in back.get("steps", []):
        content.append({"type": "numbered", "text": step})
    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "callout", "text": back.get("tip", "")})
    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "caption", "text": "管理者AI实战课 · 制造业版 | 工具卡 03"})

    with open(dst, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)


def convert_card_04(src, dst):
    with open(src, encoding="utf-8") as f:
        raw = f.read()
    raw = fix_json_quotes(raw)
    d = json.loads(raw)
    front = d.get("front", {})
    back = d.get("back", {})

    content = [
        {"type": "h1", "text": front.get("title", "")},
        {"type": "h2", "text": front.get("subtitle", "")},
        {"type": "spacer", "pt": 8},
    ]

    ft = front.get("frameworkTable", {})
    headers = ft.get("headers", [])
    rows_data = ft.get("rows", [])
    content.append({
        "type": "table",
        "headers": headers,
        "rows": [[r.get("framework",""), r.get("applicableScenario",""), r.get("structure","")] for r in rows_data],
        "col_widths": [0.2, 0.4, 0.4]
    })
    content.append({"type": "spacer", "pt": 8})

    fye = front.get("fiveWhyExample", {})
    content.append({"type": "h2", "text": "5Why示例"})
    content.append({"type": "body", "text": "问题：%s" % fye.get("problem","")})
    for step in fye.get("steps", []):
        content.append({"type": "bullet", "text": "%s %s %s" % (step.get("why",""), step.get("question",""), step.get("answer",""))})
    content.append({"type": "body", "text": "结论：%s" % fye.get("conclusion","")})

    content.append({"type": "pagebreak"})
    content.append({"type": "h1", "text": back.get("title", "")})
    content.append({"type": "spacer", "pt": 8})
    for step in back.get("steps", []):
        content.append({"type": "numbered", "text": step})

    pt = back.get("promptTemplate", {})
    content.append({"type": "spacer", "pt": 8})
    content.append({"type": "h2", "text": pt.get("label", "")})
    content.append({"type": "callout", "text": pt.get("template", "")})
    content.append({"type": "body", "text": "示例：%s" % pt.get("example",{}).get("content","")})
    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "caption", "text": "管理者AI实战课 · 制造业版 | 工具卡 04"})

    with open(dst, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)


def convert_card_05(src, dst):
    with open(src, encoding="utf-8") as f:
        raw = f.read()
    raw = fix_json_quotes(raw)
    d = json.loads(raw)
    front = d.get("front", {})
    back = d.get("back", {})

    content = []
    for block in front.get("blocks", []):
        btype = block.get("type", "")
        if btype == "spacer":
            content.append({"type": "spacer", "pt": block.get("height", 12)})
        elif btype in ("h1", "h2", "h3"):
            content.append({"type": btype, "text": block.get("text", "")})
        elif btype == "body":
            content.append({"type": "body", "text": block.get("text", "")})
        elif btype == "table":
            content.append({"type": "table", "headers": block.get("header", []),
                           "rows": block.get("rows", [])})
        elif btype == "numbered":
            for item in block.get("items", []):
                text = item if isinstance(item, str) else item.get("title", "")
                content.append({"type": "numbered", "text": text})
        elif btype == "bullet":
            for item in block.get("items", []):
                text = item if isinstance(item, str) else item.get("title", "")
                content.append({"type": "bullet", "text": text})
        elif btype == "callout":
            content.append({"type": "callout", "text": block.get("text", "")})

    content.append({"type": "pagebreak"})
    for block in back.get("blocks", []):
        btype = block.get("type", "")
        if btype == "spacer":
            content.append({"type": "spacer", "pt": block.get("height", 12)})
        elif btype in ("h1", "h2", "h3"):
            content.append({"type": btype, "text": block.get("text", "")})
        elif btype == "body":
            content.append({"type": "body", "text": block.get("text", "")})
        elif btype == "numbered":
            for item in block.get("items", []):
                title = item.get("title","")
                desc = item.get("desc","")
                content.append({"type": "numbered", "text": "%s：%s" % (title, desc)})
        elif btype == "bullet":
            for item in block.get("items", []):
                text = item if isinstance(item, str) else item.get("title","")
                content.append({"type": "bullet", "text": text})
        elif btype == "callout":
            content.append({"type": "callout", "text": block.get("text", "")})
    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "caption", "text": "管理者AI实战课 · 制造业版 | 工具卡 05"})

    with open(dst, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)


def convert_card_06(src, dst):
    with open(src, encoding="utf-8") as f:
        raw = f.read()
    raw = fix_json_quotes(raw)
    d = json.loads(raw)
    front = d.get("front", {})
    back = d.get("back", {})

    content = [
        {"type": "h1", "text": front.get("title", "")},
        {"type": "h2", "text": front.get("subtitle", "")},
        {"type": "spacer", "pt": 8},
    ]

    fs = front.get("fourSteps", {})
    content.append({"type": "h2", "text": fs.get("intro", "")})
    for step in fs.get("steps", []):
        content.append({"type": "numbered", "text": "%s %s：%s" % (step.get("number",""), step.get("name",""), step.get("description",""))})

    content.append({"type": "spacer", "pt": 8})
    wt = front.get("wasteTable", {})
    content.append({"type": "h2", "text": wt.get("title", "")})
    content.append({"type": "table", "headers": wt.get("headers", []),
                   "rows": [[r.get("problemType",""), r.get("characteristics",""), r.get("typicalScenario","")] for r in wt.get("rows", [])],
                   "col_widths": [0.2, 0.4, 0.4]})

    content.append({"type": "pagebreak"})
    content.append({"type": "h1", "text": back.get("title", "")})
    content.append({"type": "spacer", "pt": 8})
    for step in back.get("steps", []):
        content.append({"type": "numbered", "text": "%s %s：%s" % (step.get("number",""), step.get("name",""), step.get("description",""))})
    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "callout", "text": back.get("tip", "")})
    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "caption", "text": "管理者AI实战课 · 制造业版 | 工具卡 06"})

    with open(dst, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)


def convert_card_07(src, dst):
    with open(src, encoding="utf-8") as f:
        raw = f.read()
    raw = fix_json_quotes(raw)
    d = json.loads(raw)
    front = d.get("front", {})
    back = d.get("back", {})

    content = [
        {"type": "h1", "text": front.get("title", "")},
        {"type": "h2", "text": front.get("subtitle", "")},
        {"type": "spacer", "pt": 8},
    ]

    fet = front.get("fourElementsTable", {})
    content.append({"type": "table", "headers": fet.get("headers", []),
                   "rows": [[r.get("element",""), r.get("description",""), r.get("example","")] for r in fet.get("rows", [])],
                   "col_widths": [0.18, 0.35, 0.47]})
    content.append({"type": "spacer", "pt": 8})

    content.append({"type": "h2", "text": front.get("consequencesTitle", "")})
    for c in front.get("consequences", []):
        content.append({"type": "bullet", "text": "%s -> %s" % (c.get("missing",""), c.get("result",""))})

    content.append({"type": "pagebreak"})
    content.append({"type": "h1", "text": back.get("title", "")})
    content.append({"type": "h2", "text": back.get("characteristicsTitle", "")})
    for char in back.get("characteristics", []):
        content.append({"type": "numbered", "text": "%s %s：%s" % (char.get("number",""), char.get("name",""), char.get("desc",""))})

    content.append({"type": "spacer", "pt": 8})
    ex = back.get("example", {})
    content.append({"type": "h2", "text": back.get("exampleTitle", "")})
    content.append({"type": "body", "text": "[%s]%s" % (ex.get("badLabel",""), ex.get("badExample",""))})
    content.append({"type": "body", "text": "[%s]%s" % (ex.get("goodLabel",""), ex.get("goodExample",""))})
    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "callout", "text": back.get("memoryTip", "")})
    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "caption", "text": "管理者AI实战课 · 制造业版 | 工具卡 07"})

    with open(dst, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)


def convert_card_08(src, dst):
    with open(src, encoding="utf-8") as f:
        raw = f.read()
    raw = fix_json_quotes(raw)
    d = json.loads(raw)
    front = d.get("front", {})
    back = d.get("back", {})

    content = [
        {"type": "h1", "text": front.get("title", "")},
        {"type": "h2", "text": front.get("subtitle", "")},
        {"type": "spacer", "pt": 8},
    ]

    aft = front.get("aiFeasibilityTable", {})
    content.append({"type": "table", "headers": aft.get("headers", []),
                   "rows": [[r.get("dimension",""), r.get("highApplicable",""), r.get("lowApplicable","")] for r in aft.get("rows", [])],
                   "col_widths": [0.22, 0.39, 0.39]})
    content.append({"type": "spacer", "pt": 8})

    trt = front.get("teamAiRulesTable", {})
    content.append({"type": "table", "headers": trt.get("headers", []),
                   "rows": [[r.get("category",""), r.get("rule","")] for r in trt.get("rows", [])],
                   "col_widths": [0.22, 0.78]})

    content.append({"type": "pagebreak"})
    content.append({"type": "h1", "text": back.get("title", "")})
    content.append({"type": "spacer", "pt": 8})
    for point in back.get("implementationPoints", []):
        content.append({"type": "bullet", "text": point})

    content.append({"type": "spacer", "pt": 8})
    si = back.get("scoringInstructions", {})
    content.append({"type": "h2", "text": si.get("title", "")})
    for scale in si.get("scales", []):
        content.append({"type": "bullet", "text": "%s：%s" % (scale.get("score",""), scale.get("description",""))})

    content.append({"type": "spacer", "pt": 8})
    iss = back.get("implementationSchedule", {})
    content.append({"type": "h2", "text": iss.get("title", "")})
    for phase in iss.get("phases", []):
        content.append({"type": "bullet", "text": "%s：%s" % (phase.get("phase",""), phase.get("action",""))})

    content.append({"type": "spacer", "pt": 12})
    content.append({"type": "caption", "text": "管理者AI实战课 · 制造业版 | 工具卡 08"})

    with open(dst, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)


BASE = "D:/新课开发/管理者的AI课/管理者AI实战课制造业版教学文档/完整课程包/10_可打印工具卡"
TMP = "D:/CC/temp"

if __name__ == "__main__":
    convert_card_02("%s/工具卡_02_三种问法对比_content.json" % BASE, "%s/card02_blocks.json" % TMP)
    convert_card_03("%s/工具卡_03_信息提炼_content.json" % BASE, "%s/card03_blocks.json" % TMP)
    convert_card_04("%s/工具卡_04_结构化分析_content.json" % BASE, "%s/card04_blocks.json" % TMP)
    convert_card_05("%s/工具卡_05_对话准备_content.json" % BASE, "%s/card05_blocks.json" % TMP)
    convert_card_06("%s/工具卡_06_流程诊断_content.json" % BASE, "%s/card06_blocks.json" % TMP)
    convert_card_07("%s/工具卡_07_提示词四要素_content.json" % BASE, "%s/card07_blocks.json" % TMP)
    convert_card_08("%s/工具卡_08_团队AI规范_content.json" % BASE, "%s/card08_blocks.json" % TMP)
    print("All conversions complete")