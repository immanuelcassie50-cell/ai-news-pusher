import os
import re

output_path = "D:/新课开发/HR/员工关系/8.管理者角色升级-从执行者到人性化管理者的能力重塑/12-可打印工具卡/工具卡合集.html"

input_dir = "D:/新课开发/HR/员工关系/8.管理者角色升级-从执行者到人性化管理者的能力重塑/05-全流程工具表单"

html_start = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>课程8：管理者角色升级 - 工具卡片合集</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
            background: #f5f5f5;
            color: #333;
            line-height: 1.5;
        }
        .tool-card {
            width: 190mm;
            min-height: 276mm;
            background: white;
            margin: 10px auto;
            padding: 15mm;
            padding-top: 22mm;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: relative;
            page-break-after: always;
            page-break-inside: avoid;
        }
        .tool-card:last-child {
            page-break-after: auto;
        }
        @media print {
            body { background: white; }
            .tool-card {
                box-shadow: none;
                margin: 0;
                width: 100%;
                min-height: 100vh;
            }
            @page {
                size: A4;
                margin: 12mm;
            }
            .print-header {
                display: block !important;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #C62828, #E53935);
                color: white;
                text-align: center;
                padding: 6px 15mm;
                font-size: 11px;
                font-weight: bold;
                z-index: 1000;
            }
            .print-footer {
                display: block !important;
                position: fixed;
                bottom: 5mm;
                left: 0;
                right: 0;
                text-align: center;
                font-size: 9px;
                color: #999;
            }
        }
        .print-header, .print-footer {
            display: none;
        }
        h1 {
            font-size: 20px;
            color: #C62828;
            margin-bottom: 8px;
            text-align: center;
            border-bottom: 2px solid #C62828;
            padding-bottom: 8px;
        }
        .subtitle {
            font-size: 11px;
            color: #666;
            text-align: center;
            margin-bottom: 15px;
        }
        h2 {
            font-size: 14px;
            color: #424242;
            margin: 12px 0 6px;
            background: #ffebee;
            padding: 6px 10px;
            border-left: 4px solid #C62828;
        }
        .checklist {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 4px;
            margin-bottom: 8px;
        }
        .check-item {
            font-size: 10px;
            padding: 4px 0;
        }
        .signal-level {
            display: flex;
            gap: 10px;
            font-size: 9px;
            margin-top: 4px;
            padding: 6px;
            background: #fafafa;
            border-radius: 4px;
        }
        .level-box {
            flex: 1;
            padding: 4px;
            text-align: center;
            border-radius: 4px;
        }
        .level-1 { background: #d4edda; color: #155724; }
        .level-2 { background: #fff3cd; color: #856404; }
        .level-3 { background: #f8d7da; color: #721c24; }
        .summary-table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
            font-size: 11px;
        }
        .summary-table th {
            background: #C62828;
            color: white;
            padding: 8px;
            text-align: left;
        }
        .summary-table td {
            padding: 6px 8px;
            border: 1px solid #ddd;
        }
        .strategy-table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
            font-size: 10px;
        }
        .strategy-table th {
            padding: 8px;
            text-align: left;
        }
        .strategy-table td {
            padding: 6px 8px;
            border: 1px solid #ddd;
        }
        .tip-box {
            background: #fff3cd;
            padding: 10px;
            border-radius: 4px;
            font-size: 10px;
            margin-top: 15px;
        }
        .print-note {
            position: absolute;
            bottom: 10mm;
            right: 15mm;
            font-size: 8px;
            color: #999;
        }
        .page-num {
            position: absolute;
            bottom: 10mm;
            left: 15mm;
            font-size: 9px;
            color: #999;
        }
    </style>
</head>
<body>

<div class="print-header">课程8：管理者角色升级 - 工具卡片</div>
'''

additional_styles = '''
        .type-section {
            margin-bottom: 8px;
            padding: 6px;
            border-left: 3px solid;
            background: #fafafa;
        }
        .type-section.type-1 { border-color: #E53935; }
        .type-section.type-2 { border-color: #FF9800; }
        .type-section.type-3 { border-color: #4CAF50; }
        .type-section.type-4 { border-color: #9C27B0; }
        .type-title { font-size: 11px; font-weight: bold; margin-bottom: 2px; }
        .type-section.type-1 .type-title { color: #E53935; }
        .type-section.type-2 .type-title { color: #FF9800; }
        .type-section.type-3 .type-title { color: #4CAF50; }
        .type-section.type-4 .type-title { color: #9C27B0; }
        .type-desc { font-size: 9px; color: #555; margin-bottom: 2px; }
        .score-box {
            background: #ffebee;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 9px;
            margin-top: 4px;
        }
        .flowchart {
            background: #fafafa;
            padding: 8px;
            border-radius: 4px;
            font-size: 9px;
        }
        .ai-insight {
            background: #fff9e6;
            padding: 6px;
            border-radius: 4px;
            font-size: 8px;
            margin-top: 6px;
        }
        .motivation-point {
            background: #ffebee;
            padding: 3px 6px;
            border-radius: 3px;
            font-size: 8px;
            margin: 2px 0;
        }
        .speech-bubble {
            font-style: italic;
            font-size: 9px;
            color: #C62828;
            border-left: 2px solid #C62828;
            padding-left: 6px;
            margin-top: 4px;
        }
        .dimension-section {
            margin-bottom: 12px;
            border: 1px solid #ddd;
            border-radius: 6px;
            overflow: hidden;
        }
        .dimension-header {
            padding: 8px 12px;
            color: white;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
        }
        .dim-1 .dimension-header { background: #E53935; }
        .dim-2 .dimension-header { background: #FF9800; }
        .dim-3 .dimension-header { background: #4CAF50; }
        .dim-4 .dimension-header { background: #2196F3; }
        .dimension-content {
            padding: 8px 12px;
            background: #fafafa;
        }
        .question-row {
            display: grid;
            grid-template-columns: 40px 1fr 30px 30px 30px 30px 30px;
            gap: 4px;
            align-items: center;
            margin-bottom: 4px;
            font-size: 10px;
        }
        .question-num { font-weight: bold; }
        .rating-cell {
            text-align: center;
            padding: 2px;
        }
        .self-check {
            background: #ffebee;
            padding: 10px;
            border-radius: 6px;
            margin: 15px 0;
            font-size: 10px;
        }
        .self-check-title { font-weight: bold; color: #C62828; margin-bottom: 6px; }
        .type-section-new {
            margin-bottom: 10px;
            padding: 8px;
            border-left: 3px solid #4CAF50;
            background: #fafafa;
        }
        .type-title-new {
            font-size: 12px;
            font-weight: bold;
            color: #4CAF50;
            margin-bottom: 4px;
        }
        .type-desc-new {
            font-size: 9px;
            color: #555;
            margin-bottom: 4px;
        }
        .strategy-box {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 6px;
            margin-bottom: 6px;
        }
        .strategy-title {
            font-size: 11px;
            font-weight: bold;
            color: #E53935;
            margin-bottom: 3px;
        }
        .strategy-content {
            font-size: 9px;
            color: #555;
        }
        .quote {
            font-size: 9px;
            color: #C62828;
            font-style: italic;
            margin-top: 4px;
            padding: 4px;
            background: #ffebee;
            border-radius: 3px;
        }
        .usage-tip {
            margin-top: 8px;
            padding: 6px;
            background: #fff3cd;
            border-radius: 4px;
            font-size: 9px;
        }
        .checkbox {
            display: inline-block;
            width: 14px;
            height: 14px;
            border: 1px solid #999;
            border-radius: 2px;
            text-align: center;
            line-height: 12px;
            font-size: 9px;
            margin-right: 2px;
        }
        .section-info {
            display: flex;
            justify-content: space-around;
            background: #ffebee;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 10px;
        }
        .info-item {
            text-align: center;
            font-size: 10px;
        }
        .info-label { color: #666; }
        .info-value { font-weight: bold; color: #C62828; font-size: 12px; }
        .score-box-new {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 4px;
            padding: 8px;
            margin: 8px 0;
            font-size: 10px;
        }
        .result-table {
            margin-top: 15px;
        }
        .result-table th {
            background: #4CAF50;
        }
        .grade-a { background: #d4edda; }
        .grade-b { background: #cce5ff; }
        .grade-c { background: #fff3cd; }
        .grade-d { background: #f8d7da; }
        .signal-section {
            border: 1px solid #ddd;
            border-radius: 6px;
            margin-bottom: 12px;
            overflow: hidden;
        }
        .signal-header {
            background: linear-gradient(135deg, #9C27B0, #E53935);
            color: white;
            padding: 8px 12px;
            font-size: 13px;
            font-weight: bold;
        }
        .signal-content {
            padding: 10px 12px;
            background: #fafafa;
        }
        .signal-item {
            display: flex;
            align-items: center;
            padding: 4px 0;
            font-size: 10px;
        }
        .signal-checkbox {
            width: 14px;
            height: 14px;
            border: 1px solid #9C27B0;
            border-radius: 2px;
            margin-right: 8px;
            flex-shrink: 0;
        }
        .signal-score {
            margin-left: auto;
            font-weight: bold;
            color: #9C27B0;
            font-size: 11px;
        }
        .observation-box {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 6px;
            margin-top: 8px;
            font-size: 9px;
            color: #666;
        }
        .summary-section {
            background: #f0f0f0;
            padding: 15px;
            border-radius: 6px;
            margin-top: 15px;
        }
        .weight-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 10px;
            margin: 10px 0;
        }
        .weight-table th, .weight-table td {
            border: 1px solid #ddd;
            padding: 6px 8px;
            text-align: center;
        }
        .weight-table th {
            background: #9C27B0;
            color: white;
        }
        .result-box {
            background: #d4edda;
            border: 2px solid #28a745;
            border-radius: 6px;
            padding: 15px;
            margin-top: 15px;
            text-align: center;
        }
        .grade-label {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 4px;
            font-weight: bold;
            margin: 0 5px;
        }
        .grade-1 { background: #d4edda; color: #155724; }
        .grade-2 { background: #cce5ff; color: #004085; }
        .grade-3 { background: #fff3cd; color: #856404; }
        .grade-4 { background: #e2e3e5; color: #383d41; }
        .grade-5 { background: #f8d7da; color: #721c24; }
        .week1, .week2, .week3, .week4, .week-review {
            font-size: 14px;
            color: #fff;
            padding: 6px 10px;
            border-radius: 4px;
            margin: 10px 0 6px;
        }
        .week1 { background: #2196F3; }
        .week2 { background: #4CAF50; }
        .week3 { background: #9C27B0; }
        .week4 { background: #FF9800; }
        .week-review { background: #424242; }
        .goal-section {
            background: #fef9e7;
            border: 1px solid #f39c12;
            border-radius: 4px;
            padding: 8px;
            margin-bottom: 10px;
        }
        .goal-section h3 {
            font-size: 11px;
            color: #d35400;
            margin-bottom: 6px;
        }
        .goal-line {
            display: flex;
            align-items: center;
            margin-bottom: 4px;
            font-size: 9px;
        }
        .goal-label {
            width: 80px;
            font-weight: bold;
            color: #666;
        }
        .goal-input {
            flex: 1;
            border-bottom: 1px solid #ddd;
            height: 18px;
        }
        .harvest-box {
            background: #e8f8f5;
            border: 1px solid #1abc9c;
            border-radius: 4px;
            padding: 6px;
            font-size: 9px;
            margin-top: 6px;
        }
        .harvest-label {
            font-weight: bold;
            color: #16a085;
        }
        .monthly-review {
            background: #f5eef8;
            border: 2px solid #9b59b6;
            border-radius: 6px;
            padding: 12px;
            margin-top: 10px;
        }
        .review-table {
            width: 100%;
            font-size: 9px;
            margin: 8px 0;
        }
        .review-table th {
            background: #9b59b6;
            color: white;
            padding: 4px 6px;
        }
        .review-table td {
            padding: 4px 6px;
            border: 1px solid #ddd;
        }
        .h2-type1 { background: #E53935; }
        .h2-type2 { background: #4CAF50; }
        .h2-type3 { background: #2196F3; }
        .h2-type4 { background: #9C27B0; }
        .h2-gray { background: #7f8c8d; }
        .situation {
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 6px;
            margin-bottom: 6px;
        }
        .situation-title {
            font-size: 10px;
            font-weight: bold;
            color: #333;
            margin-bottom: 3px;
        }
        .option-row {
            display: flex;
            align-items: center;
            padding: 2px 0;
            font-size: 9px;
        }
        .option-letter {
            width: 18px;
            height: 18px;
            background: #eee;
            border-radius: 50%;
            text-align: center;
            line-height: 18px;
            font-weight: bold;
            margin-right: 6px;
            font-size: 9px;
        }
        .letter-a { color: #E53935; }
        .letter-b { color: #4CAF50; }
        .letter-c { color: #2196F3; }
        .letter-d { color: #9C27B0; }
        .score-section {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 4px;
            padding: 8px;
            margin-top: 8px;
        }
        .score-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 9px;
            margin: 6px 0;
        }
        .score-table th, .score-table td {
            border: 1px solid #ddd;
            padding: 3px 5px;
            text-align: center;
        }
        .score-table th {
            background: #424242;
            color: white;
        }
        .style-section {
            margin-bottom: 8px;
            padding: 6px;
            border-left: 3px solid;
            background: #fafafa;
        }
        .style-section.s1 { border-color: #E53935; }
        .style-section.s2 { border-color: #4CAF50; }
        .style-section.s3 { border-color: #2196F3; }
        .style-section.s4 { border-color: #9C27B0; }
        .style-title {
            font-size: 11px;
            font-weight: bold;
            margin-bottom: 2px;
        }
        .style-title.t1 { color: #E53935; }
        .style-title.t2 { color: #4CAF50; }
        .style-title.t3 { color: #2196F3; }
        .style-title.t4 { color: #9C27B0; }
        .style-desc {
            font-size: 8px;
            color: #555;
        }
        .stage-box {
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 5px;
            margin-bottom: 5px;
        }
        .stage-title {
            font-size: 10px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 2px;
        }
        .phase-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            margin-top: 6px;
        }
        .phase-item {
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 4px;
            font-size: 8px;
        }
        .phase-name {
            font-weight: bold;
            margin-bottom: 2px;
        }
        .tip-box {
            background: #e8f4f8;
            border-radius: 4px;
            padding: 5px;
            font-size: 8px;
            margin-top: 6px;
        }
        .level-section {
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            overflow: hidden;
        }
        .level-header {
            padding: 8px 12px;
            color: white;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
        }
        .level-1 .level-header { background: #E53935; }
        .level-2 .level-header { background: #FF9800; }
        .level-3 .level-header { background: #4CAF50; }
        .level-4 .level-header { background: #2196F3; }
        .level-5 .level-header { background: #9C27B0; }
        .level-content {
            padding: 10px 12px;
            background: #fafafa;
        }
        .check-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
            margin-bottom: 8px;
        }
        .check-item { font-size: 10px; }
        .score-row {
            display: flex;
            gap: 8px;
            font-size: 9px;
        }
        .score-row .score-box {
            padding: 4px 8px;
            border-radius: 4px;
            text-align: center;
            background: #ffebee;
        }
        .dos-donts {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 15px 0;
        }
        .dos, .donts {
            padding: 10px;
            border-radius: 6px;
        }
        .dos { background: #d4edda; }
        .donts { background: #f8d7da; }
        .dos-title, .donts-title {
            font-weight: bold;
            margin-bottom: 6px;
            font-size: 12px;
        }
        .dos-title { color: #155724; }
        .donts-title { color: #721c24; }
        .five-col-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            font-size: 9px;
        }
'''

html_end = '''
<div class="print-footer">课程8：管理者角色升级 - 工具卡片</div>
</body>
</html>
'''

def extract_body_content(html_content):
    match = re.search(r'<body>(.*?)</body>', html_content, re.DOTALL)
    if match:
        return match.group(1)
    return html_content

def fix_colors(content):
    content = content.replace('#1a5f7a', '#C62828')
    content = content.replace('#e74c3c', '#E53935')
    content = content.replace('#f39c12', '#FF9800')
    content = content.replace('#27ae60', '#4CAF50')
    content = content.replace('#3498db', '#2196F3')
    content = content.replace('#9b59b6', '#9C27B0')
    content = content.replace('#34495e', '#424242')
    content = content.replace('#c0392b', '#C62828')
    content = content.replace('#e67e22', '#FF9800')
    return content

files = [
    ("F1_管理者角色自评卡.html", "管理者角色自评卡"),
    ("F2_员工情绪信号识别表.html", "员工情绪信号识别表"),
    ("F3_共情沟通能力评估表.html", "共情沟通能力评估表"),
    ("F4_员工激励偏好分析卡.html", "员工激励偏好分析卡"),
    ("F5_心理安全感团队评估表.html", "心理安全感团队评估表"),
    ("F6_信任建设行动清单.html", "信任建设行动清单"),
    ("F7_AI时代人才评估矩阵.html", "AI时代人才评估矩阵"),
    ("F8_高潜人才识别清单.html", "高潜人才识别清单"),
    ("F9_人性化管理行动计划表.html", "人性化管理行动计划表"),
    ("F10_团队管理风格诊断卡.html", "团队管理风格诊断卡"),
]

cards_html = ""
page_num = 1

for fname, title in files:
    filepath = os.path.join(input_dir, fname)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            html_content = f.read()

        body_content = extract_body_content(html_content)
        body_content = fix_colors(body_content)

        # Remove original print-note elements
        body_content = re.sub(r'<p class="print-note">[^<]*</p>', '', body_content)

        cards_html += f'''
        <div class="tool-card">
            {body_content}
            <div class="page-num">第 {page_num} 页 / 共 10 页</div>
        </div>
        '''
        page_num += 1
    else:
        print(f"File not found: {filepath}")

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_start)
    f.write(f'<style>{additional_styles}</style>')
    f.write(cards_html)
    f.write(html_end)

print(f"Created: {output_path}")
print(f"Total tool cards: {page_num - 1}")
