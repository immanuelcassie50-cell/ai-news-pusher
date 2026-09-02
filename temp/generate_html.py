import os
import re

base_path = "D:/新课开发/领导力/05-志向与意义感：AI无法替你回答我们为什么而做/全流程练习题库"

html_template = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
            line-height: 1.8;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }}
        .container {{
            max-width: 900px;
            margin: 0 auto;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }}
        header {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            padding: 40px 50px;
        }}
        header h1 {{ font-size: 28px; margin-bottom: 10px; }}
        header .subtitle {{ font-size: 16px; opacity: 0.9; }}
        .purpose {{
            background: #f8f9ff;
            border-left: 4px solid #667eea;
            padding: 20px 30px;
            margin: 30px 50px;
            border-radius: 0 8px 8px 0;
        }}
        .purpose h2 {{ font-size: 16px; color: #667eea; margin-bottom: 10px; }}
        .purpose p {{ font-size: 14px; color: #666; }}
        .meta {{
            display: flex;
            gap: 30px;
            margin: 20px 50px;
            font-size: 14px;
            color: #888;
        }}
        .content {{ padding: 0 50px 40px; }}
        .section-card {{
            background: #fff;
            border: 1px solid #e8e8f0;
            border-radius: 12px;
            margin-bottom: 30px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }}
        .section-header {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            padding: 20px 30px;
            font-size: 18px;
            font-weight: 600;
        }}
        .section-body {{ padding: 25px 30px; }}
        .scenario {{
            background: #f5f5fa;
            padding: 20px 25px;
            border-radius: 8px;
            font-size: 16px;
            color: #333;
            margin-bottom: 20px;
            border-left: 4px solid #764ba2;
        }}
        .question-box {{
            background: #fff;
            border: 1px solid #e8e8f0;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 15px;
        }}
        .question-label {{
            font-weight: 600;
            color: #667eea;
            margin-bottom: 10px;
        }}
        .answer-area {{
            background: #f8f9ff;
            border: 2px dashed #667eea;
            border-radius: 8px;
            padding: 20px;
            min-height: 120px;
            margin-top: 15px;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            margin: 15px 0;
        }}
        th {{
            background: #f5f5fa;
            color: #667eea;
            font-weight: 600;
            text-align: left;
            padding: 12px 15px;
            border: 1px solid #e8e8f0;
        }}
        td {{
            padding: 12px 15px;
            border: 1px solid #e8e8f0;
            vertical-align: top;
        }}
        .highlight-box {{
            background: #f8f9ff;
            padding: 15px 20px;
            border-radius: 8px;
            font-size: 14px;
            color: #555;
            margin-top: 15px;
        }}
        .key-point {{
            background: #fff3e0;
            padding: 12px 18px;
            border-radius: 8px;
            font-size: 14px;
            color: #e65100;
            margin-top: 15px;
        }}
        .key-point strong {{ display: block; margin-bottom: 5px; }}
        @media print {{
            body {{ background: #fff; padding: 0; }}
            .container {{ box-shadow: none; border-radius: 0; }}
            @page {{ size: A4; margin: 1cm; }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>{header_title}</h1>
            <p class="subtitle">{subtitle}</p>
        </header>
        {content}
    </div>
</body>
</html>'''

files_content = {
    "G1_开场暖场练习题.html": {
        "title": "G1：开场暖场练习题 - 志向与意义感",
        "header_title": "G1：开场暖场练习题",
        "subtitle": "主题：AI生成的完美愿景陈述 vs 真实的意义感",
        "content": '''
        <div class="purpose">
            <h2>设计目的</h2>
            <p>本练习旨在帮助学员快速建立对"意义感"与"漂亮口号"的直觉区分能力。AI可以生成语法正确、逻辑通顺、激励性强的愿景陈述，但这些陈述往往缺乏个人信念的重量、团队历史的沉淀、与具体场景的深度连接。</p>
        </div>
        <div class="meta">
            <span>适用时机：课程开场破冰环节</span>
            <span>建议用时：20-25分钟</span>
            <span>题目数量：5题</span>
        </div>
        <div class="content">
            <div class="section-card">
                <div class="section-header">题目一</div>
                <div class="section-body">
                    <div class="scenario"><strong>愿景A：</strong>"我们的使命是通过创新科技让每个人都能享受便捷的数字生活，成为全球领先的智能解决方案提供商。"<br><br><strong>愿景B：</strong>"三年前，我们几个创始人都是连续创业者，有次在一个偏远山区做公益，看到一个村庄的老教师用手机给学生们上网课，但信号时断时续，孩子们眼睛贴着屏幕看了二十分钟才加载出一页。我们当时就想，能不能让这种连接变得稳定可靠？后来我们做第一个产品时，就聚焦在信号增强这个细分领域。现在我们的产品已经覆盖了3000多个偏远村庄。"</div>
                    <div class="question-box">
                        <div class="question-label">讨论问题：哪个愿景更能让你感受到意义感？为什么？</div>
                        <div><strong>你的选择：</strong>□ 愿景A　 □ 愿景B</div>
                        <div class="answer-area"><strong>判断理由：</strong><br><br><br></div>
                    </div>
                </div>
            </div>
        </div>
        '''
    }
}

for filename, data in files_content.items():
    filepath = os.path.join(base_path, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_template.format(**data))
    print(f"Created: {filepath}")

print("HTML generation complete!")
