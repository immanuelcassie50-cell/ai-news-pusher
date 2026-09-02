import os
import re

output_path = "D:/新课开发/HR/员工关系/8.管理者角色升级-从执行者到人性化管理者的能力重塑/12-可打印工具卡/工具卡合集.html"

input_dir = "D:/新课开发/HR/员工关系/8.管理者角色升级-从执行者到人性化管理者的能力重塑/05-全流程工具表单"

# Color scheme: primary #C62828 (red), secondary #424242 (gray), accent #E53935 (lighter red)
html_template = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>课程8：管理者角色升级 - 工具卡片合集</title>
    <style>
        @page {{
            size: A4;
            margin: 10mm;
        }}

        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        body {
            font-family: "Microsoft YaHei", "PingFang SC", "SimHei", Arial, sans-serif;
            background: #f5f5f5;
            color: #333;
            line-height: 1.5;
            font-size: 12px;
        }}

        /* Page header - shown when printing */
        .print-header {{
            display: none;
            background: linear-gradient(135deg, #C62828, #E53935);
            color: white;
            text-align: center;
            padding: 6px 15mm;
            font-size: 11px;
            font-weight: bold;
            margin-bottom: 8px;
        }}

        /* Page footer - shown when printing */
        .print-footer {{
            display: none;
            text-align: center;
            font-size: 9px;
            color: #666;
            padding: 8px 0;
            border-top: 1px solid #ddd;
            margin-top: 10px;
        }}

        /* Tool card container */
        .tool-card {{
            width: 190mm;
            min-height: 257mm;
            background: white;
            margin: 8px auto;
            padding: 12mm 15mm;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            position: relative;
            page-break-after: always;
            page-break-inside: avoid;
        }}

        .tool-card:last-child {{
            page-break-after: auto;
        }}

        /* Print styles */
        @media print {{
            body {{
                background: white;
                font-size: 11px;
            }}

            .print-header {{
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #C62828, #E53935);
                color: white;
                text-align: center;
                padding: 5px 15mm;
                font-size: 10px;
                font-weight: bold;
                z-index: 1000;
            }}

            .print-footer {{
                display: block;
                position: fixed;
                bottom: 8mm;
                left: 0;
                right: 0;
                text-align: center;
                font-size: 8px;
                color: #999;
            }}

            .tool-card {{
                box-shadow: none;
                margin: 0;
                width: 100%;
                min-height: auto;
                padding-top: 18mm;
            }}

            @page {{
                size: A4;
                margin: 8mm;
            }}
        }}

        /* Common styles */
        h1 {{
            font-size: 18px;
            color: #C62828;
            margin-bottom: 6px;
            text-align: center;
            border-bottom: 2px solid #C62828;
            padding-bottom: 6px;
        }}

        .subtitle {{
            font-size: 10px;
            color: #666;
            text-align: center;
            margin-bottom: 12px;
        }}

        h2 {{
            font-size: 13px;
            color: #424242;
            margin: 10px 0 5px;
            background: #ffebee;
            padding: 5px 8px;
            border-left: 3px solid #C62828;
        }}

        .summary-table {{
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
            font-size: 10px;
        }}

        .summary-table th {{
            background: #C62828;
            color: white;
            padding: 5px 8px;
            text-align: left;
        }}

        .summary-table td {{
            padding: 4px 6px;
            border: 1px solid #ddd;
        }}

        .checklist {{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3px;
            margin-bottom: 6px;
        }}

        .check-item {{
            font-size: 9px;
            padding: 2px 0;
        }}

        .signal-level {{
            display: flex;
            gap: 8px;
            font-size: 8px;
            margin-top: 3px;
            padding: 4px;
            background: #fafafa;
            border-radius: 3px;
        }}

        .level-box {{
            flex: 1;
            padding: 3px;
            text-align: center;
            border-radius: 3px;
        }}

        .level-1 {{ background: #d4edda; color: #155724; }}
        .level-2 {{ background: #fff3cd; color: #856404; }}
        .level-3 {{ background: #f8d7da; color: #721c24; }}

        .tip-box {{
            background: #fff3cd;
            padding: 8px;
            border-radius: 4px;
            font-size: 9px;
            margin-top: 10px;
        }}

        .page-num {{
            position: absolute;
            bottom: 6mm;
            left: 15mm;
            font-size: 8px;
            color: #999;
        }}

        /* F1 specific styles */
        .type-section {{
            margin-bottom: 6px;
            padding: 5px;
            border-left: 3px solid;
            background: #fafafa;
        }}

        .type-section.type-1 {{ border-color: #E53935; }}
        .type-section.type-2 {{ border-color: #FF9800; }}
        .type-section.type-3 {{ border-color: #4CAF50; }}
        .type-section.type-4 {{ border-color: #9C27B0; }}

        .type-title {{ font-size: 10px; font-weight: bold; margin-bottom: 2px; }}
        .type-section.type-1 .type-title {{ color: #E53935; }}
        .type-section.type-2 .type-title {{ color: #FF9800; }}
        .type-section.type-3 .type-title {{ color: #4CAF50; }}
        .type-section.type-4 .type-title {{ color: #9C27B0; }}

        .type-desc {{ font-size: 8px; color: #555; margin-bottom: 2px; }}

        .score-box {{
            background: #ffebee;
            padding: 3px 6px;
            border-radius: 3px;
            font-size: 8px;
            margin-top: 3px;
        }}

        .flowchart {{
            background: #fafafa;
            padding: 6px;
            border-radius: 4px;
            font-size: 8px;
        }}

        .flowchart pre {{
            font-family: monospace;
            font-size: 7px;
            line-height: 1.2;
            white-space: pre-wrap;
        }}

        .ai-insight {{
            background: #fff9e6;
            padding: 5px;
            border-radius: 4px;
            font-size: 8px;
            margin-top: 5px;
        }}

        /* F3 level sections */
        .level-section {{
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
        }}

        .level-header {{
            padding: 6px 10px;
            color: white;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            font-size: 10px;
        }}

        .level-1 .level-header {{ background: #E53935; }}
        .level-2 .level-header {{ background: #FF9800; }}
        .level-3 .level-header {{ background: #4CAF50; }}
        .level-4 .level-header {{ background: #2196F3; }}
        .level-5 .level-header {{ background: #9C27B0; }}

        .level-content {{
            padding: 8px 10px;
            background: #fafafa;
        }}

        .check-grid {{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 4px;
            margin-bottom: 6px;
        }}

        .score-row {{
            display: flex;
            gap: 6px;
            font-size: 8px;
        }}

        .score-row .score-box {{
            padding: 2px 6px;
            border-radius: 3px;
            text-align: center;
        }}

        .dos-donts {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin: 10px 0;
        }}

        .dos, .donts {{
            padding: 8px;
            border-radius: 4px;
            font-size: 9px;
        }}

        .dos {{ background: #d4edda; }}
        .donts {{ background: #f8d7da; }}

        .dos-title, .donts-title {{
            font-weight: bold;
            margin-bottom: 4px;
            font-size: 10px;
        }}

        .dos-title {{ color: #155724; }}
        .donts-title {{ color: #721c24; }}

        /* F4 motivation card */
        .motivation-point {{
            background: #ffebee;
            padding: 2px 5px;
            border-radius: 2px;
            font-size: 8px;
            margin: 2px 0;
        }}

        .speech-bubble {{
            font-style: italic;
            font-size: 8px;
            color: #C62828;
            border-left: 2px solid #C62828;
            padding-left: 5px;
            margin-top: 3px;
        }}

        /* F5 psychological safety */
        .dimension-section {{
            margin-bottom: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
        }}

        .dimension-header {{
            padding: 6px 10px;
            color: white;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            font-size: 10px;
        }}

        .dim-1 .dimension-header {{ background: #E53935; }}
        .dim-2 .dimension-header {{ background: #FF9800; }}
        .dim-3 .dimension-header {{ background: #4CAF50; }}
        .dim-4 .dimension-header {{ background: #2196F3; }}

        .dimension-content {{
            padding: 6px 10px;
            background: #fafafa;
        }}

        .question-row {{
            display: grid;
            grid-template-columns: 30px 1fr 25px 25px 25px 25px 25px;
            gap: 3px;
            align-items: center;
            margin-bottom: 3px;
            font-size: 9px;
        }}

        .question-num {{ font-weight: bold; }}

        .rating-cell {{
            text-align: center;
        }}

        .self-check {{
            background: #ffebee;
            padding: 8px;
            border-radius: 4px;
            margin: 10px 0;
            font-size: 9px;
        }}

        .self-check-title {{ font-weight: bold; color: #C62828; margin-bottom: 4px; }}

        /* F6 trust building */
        .type-section-new {{
            margin-bottom: 8px;
            padding: 6px;
            border-left: 3px solid #4CAF50;
            background: #fafafa;
        }}

        .type-title-new {{
            font-size: 10px;
            font-weight: bold;
            color: #4CAF50;
            margin-bottom: 3px;
        }}

        .type-desc-new {{
            font-size: 8px;
            color: #555;
            margin-bottom: 3px;
        }}

        .strategy-box {{
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 5px;
            margin-bottom: 5px;
        }}

        .strategy-title {{
            font-size: 10px;
            font-weight: bold;
            color: #E53935;
            margin-bottom: 2px;
        }}

        .strategy-content {{
            font-size: 8px;
            color: #555;
        }}

        .quote {{
            font-size: 8px;
            color: #C62828;
            font-style: italic;
            margin-top: 3px;
            padding: 3px;
            background: #ffebee;
            border-radius: 2px;
        }}

        .usage-tip {{
            margin-top: 6px;
            padding: 5px;
            background: #fff3cd;
            border-radius: 3px;
            font-size: 8px;
        }}

        .checkbox {{
            display: inline-block;
            width: 12px;
            height: 12px;
            border: 1px solid #999;
            border-radius: 2px;
            text-align: center;
            line-height: 10px;
            font-size: 8px;
            margin-right: 2px;
        }}

        /* F7 talent assessment */
        .section-info {{
            display: flex;
            justify-content: space-around;
            background: #ffebee;
            padding: 8px;
            border-radius: 4px;
            margin-bottom: 8px;
        }}

        .info-item {{
            text-align: center;
            font-size: 9px;
        }}

        .info-label {{ color: #666; }}

        .info-value {{ font-weight: bold; color: #C62828; font-size: 11px; }}

        .score-box-new {{
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 3px;
            padding: 6px;
            margin: 6px 0;
            font-size: 9px;
        }}

        .result-table {{
            margin-top: 10px;
        }}

        .result-table th {{
            background: #4CAF50;
        }}

        .grade-a {{ background: #d4edda; }}
        .grade-b {{ background: #cce5ff; }}
        .grade-c {{ background: #fff3cd; }}
        .grade-d {{ background: #f8d7da; }}

        /* F8 high potential */
        .signal-section {{
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 8px;
            overflow: hidden;
        }}

        .signal-header {{
            background: linear-gradient(135deg, #9C27B0, #E53935);
            color: white;
            padding: 6px 10px;
            font-size: 11px;
            font-weight: bold;
        }}

        .signal-content {{
            padding: 8px 10px;
            background: #fafafa;
        }}

        .signal-item {{
            display: flex;
            align-items: center;
            padding: 3px 0;
            font-size: 9px;
        }}

        .signal-checkbox {{
            width: 12px;
            height: 12px;
            border: 1px solid #9C27B0;
            border-radius: 2px;
            margin-right: 6px;
            flex-shrink: 0;
        }}

        .signal-score {{
            margin-left: auto;
            font-weight: bold;
            color: #9C27B0;
            font-size: 10px;
        }}

        .observation-box {{
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 5px;
            margin-top: 6px;
            font-size: 8px;
            color: #666;
        }}

        .summary-section {{
            background: #f0f0f0;
            padding: 10px;
            border-radius: 4px;
            margin-top: 10px;
        }}

        .weight-table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 9px;
            margin: 8px 0;
        }}

        .weight-table th, .weight-table td {{
            border: 1px solid #ddd;
            padding: 4px 6px;
            text-align: center;
        }}

        .weight-table th {{
            background: #9C27B0;
            color: white;
        }}

        .result-box {{
            background: #d4edda;
            border: 2px solid #28a745;
            border-radius: 4px;
            padding: 10px;
            margin-top: 10px;
            text-align: center;
        }}

        .grade-label {{
            display: inline-block;
            padding: 3px 10px;
            border-radius: 3px;
            font-weight: bold;
            margin: 0 4px;
            font-size: 9px;
        }}

        .grade-1 {{ background: #d4edda; color: #155724; }}
        .grade-2 {{ background: #cce5ff; color: #004085; }}
        .grade-3 {{ background: #fff3cd; color: #856404; }}
        .grade-4 {{ background: #e2e3e5; color: #383d41; }}
        .grade-5 {{ background: #f8d7da; color: #721c24; }}

        /* F9 action plan */
        .week1, .week2, .week3, .week4, .week-review {{
            font-size: 12px;
            color: #fff;
            padding: 5px 8px;
            border-radius: 3px;
            margin: 8px 0 5px;
        }}

        .week1 {{ background: #2196F3; }}
        .week2 {{ background: #4CAF50; }}
        .week3 {{ background: #9C27B0; }}
        .week4 {{ background: #FF9800; }}
        .week-review {{ background: #424242; }}

        .goal-section {{
            background: #fef9e7;
            border: 1px solid #f39c12;
            border-radius: 3px;
            padding: 6px;
            margin-bottom: 8px;
        }}

        .goal-section h3 {{
            font-size: 10px;
            color: #d35400;
            margin-bottom: 4px;
        }}

        .goal-line {{
            display: flex;
            align-items: center;
            margin-bottom: 3px;
            font-size: 8px;
        }}

        .goal-label {{
            width: 70px;
            font-weight: bold;
            color: #666;
        }}

        .goal-input {{
            flex: 1;
            border-bottom: 1px solid #ddd;
            height: 15px;
        }}

        .harvest-box {{
            background: #e8f8f5;
            border: 1px solid #1abc9c;
            border-radius: 3px;
            padding: 5px;
            font-size: 8px;
            margin-top: 5px;
        }}

        .harvest-label {{
            font-weight: bold;
            color: #16a085;
        }}

        .monthly-review {{
            background: #f5eef8;
            border: 2px solid #9b59b6;
            border-radius: 4px;
            padding: 10px;
            margin-top: 8px;
        }}

        .review-table {{
            width: 100%;
            font-size: 8px;
            margin: 6px 0;
        }}

        .review-table th {{
            background: #9b59b6;
            color: white;
            padding: 3px 5px;
        }}

        .review-table td {{
            padding: 3px 5px;
            border: 1px solid #ddd;
        }}

        /* F10 management style */
        .h2-type1 {{ background: #E53935; }}
        .h2-type2 {{ background: #4CAF50; }}
        .h2-type3 {{ background: #2196F3; }}
        .h2-type4 {{ background: #9C27B0; }}
        .h2-gray {{ background: #7f8c8d; }}

        .situation {{
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 5px;
            margin-bottom: 5px;
        }}

        .situation-title {{
            font-size: 9px;
            font-weight: bold;
            color: #333;
            margin-bottom: 2px;
        }}

        .option-row {{
            display: flex;
            align-items: center;
            padding: 2px 0;
            font-size: 8px;
        }}

        .option-letter {{
            width: 16px;
            height: 16px;
            background: #eee;
            border-radius: 50%;
            text-align: center;
            line-height: 16px;
            font-weight: bold;
            margin-right: 5px;
            font-size: 8px;
        }}

        .letter-a {{ color: #E53935; }}
        .letter-b {{ color: #4CAF50; }}
        .letter-c {{ color: #2196F3; }}
        .letter-d {{ color: #9C27B0; }}

        .score-section {{
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 3px;
            padding: 6px;
            margin-top: 6px;
        }}

        .score-table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 8px;
            margin: 5px 0;
        }}

        .score-table th, .score-table td {{
            border: 1px solid #ddd;
            padding: 2px 4px;
            text-align: center;
        }}

        .score-table th {{
            background: #424242;
            color: white;
        }}

        .style-section {{
            margin-bottom: 6px;
            padding: 5px;
            border-left: 3px solid;
            background: #fafafa;
        }}

        .style-section.s1 {{ border-color: #E53935; }}
        .style-section.s2 {{ border-color: #4CAF50; }}
        .style-section.s3 {{ border-color: #2196F3; }}
        .style-section.s4 {{ border-color: #9C27B0; }}

        .style-title {{
            font-size: 10px;
            font-weight: bold;
            margin-bottom: 2px;
        }}

        .style-title.t1 {{ color: #E53935; }}
        .style-title.t2 {{ color: #4CAF50; }}
        .style-title.t3 {{ color: #2196F3; }}
        .style-title.t4 {{ color: #9C27B0; }}

        .style-desc {{
            font-size: 7px;
            color: #555;
        }}

        .stage-box {{
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 4px;
            margin-bottom: 4px;
        }}

        .stage-title {{
            font-size: 9px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 2px;
        }}

        .phase-grid {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4px;
            margin-top: 5px;
        }}

        .phase-item {{
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 3px;
            font-size: 7px;
        }}

        .phase-name {{
            font-weight: bold;
            margin-bottom: 2px;
        }}

        .tip-box {{
            background: #e8f4f8;
            border-radius: 3px;
            padding: 4px;
            font-size: 7px;
            margin-top: 5px;
        }}

        /* Five column grid for F2 */
        .five-col-grid {{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 6px;
            font-size: 8px;
        }}

        .five-col-item {{
            background: #fafafa;
            padding: 6px;
            border-radius: 3px;
        }}

        .five-col-item strong {{
            display: block;
            margin-bottom: 3px;
        }}
    </style>
</head>
<body>

<div class="print-header">课程8：管理者角色升级 - 工具卡片</div>
'''

html_end = '''
<div class="print-footer">课程8：管理者角色升级 - 工具卡片 | 第 页</div>

<script>
    // Add page numbers when printing
    document.addEventListener('DOMContentLoaded', function() {
        // This will be handled by browser print dialog
    });
</script>

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

def clean_content(content):
    # Remove print notes
    content = re.sub(r'<p class="print-note">[^<]*</p>', '', content)
    # Keep the structure clean
    return content

files = [
    "F1_管理者角色自评卡.html",
    "F2_员工情绪信号识别表.html",
    "F3_共情沟通能力评估表.html",
    "F4_员工激励偏好分析卡.html",
    "F5_心理安全感团队评估表.html",
    "F6_信任建设行动清单.html",
    "F7_AI时代人才评估矩阵.html",
    "F8_高潜人才识别清单.html",
    "F9_人性化管理行动计划表.html",
    "F10_团队管理风格诊断卡.html",
]

cards_html = ""
page_num = 1

for fname in files:
    filepath = os.path.join(input_dir, fname)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            html_content = f.read()

        body_content = extract_body_content(html_content)
        body_content = fix_colors(body_content)
        body_content = clean_content(body_content)

        cards_html += f'''
        <div class="tool-card">
            {body_content}
            <div class="page-num">第 {page_num} 页 / 共 10 页</div>
        </div>
        '''
        page_num += 1
    else:
        print(f"File not found: {filepath}")

# Write the HTML file - use simple concatenation instead of format()
html_content = html_template + cards_html + html_end

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Created: {output_path}")
print(f"Total tool cards: {page_num - 1}")
print(f"")
print(f"To create PDF:")
print(f"1. Open the HTML file in a browser")
print(f"2. Press Ctrl+P to open print dialog")
print(f"3. Select 'Save as PDF' as destination")
print(f"4. Choose A4 paper size")
print(f"5. Enable 'Background graphics'")
print(f"6. Click Save")
