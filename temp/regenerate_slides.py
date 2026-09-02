import os

slides_dir = "D:/新课开发/工作手册/出海跨文化团队隐性规则解码/完整课程包/09-演示文件/slides"

def create_slide(num, slide_type, title, content_lines):
    filepath = os.path.join(slides_dir, f'slide-{num:02d}.js')

    if "封面" in title or "目录" in title or "模块" in title:
        config_type = "'section'"
    elif "案例" in title:
        config_type = "'case'"
    elif "练习" in title or "工具" in title:
        config_type = "'exercise'"
    else:
        config_type = "'content'"

    js_content = f'''// slide-{num:02d}.js - {title}
const pptxgen = require("pptxgenjs");

const slideConfig = {{
  type: {config_type},
  index: {num},
  title: "{title}"
}};

function createSlide(pres, theme) {{
  const slide = pres.addSlide();
  slide.background = {{ color: theme.bg }};

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: {{ color: theme.accent }}
  }});
  slide.addText("{num}", {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  }});
'''

    for line in content_lines:
        js_content += f"  {line}\n"

    js_content += '''  return slide;
}

module.exports = { createSlide, slideConfig };
'''

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f'Created: slide-{num:02d}.js')

# Slides 84-89 - Module 4 section
module4_slides = [
    (84, "content", "开场问题：什么时候「包容」变成了借口？", [
        'slide.addText("「包容」", {',
        '  x: 0.5, y: 2.3, w: 9, h: 0.9,',
        '  fontSize: 48, fontFace: "Microsoft YaHei",',
        '  color: theme.accent, bold: true, align: "center"',
        '});',
        'slide.addText("变 成 了 借 口 ？", {',
        '  x: 0.5, y: 3.2, w: 9, h: 0.8,',
        '  fontSize: 36, fontFace: "Microsoft YaHei",',
        '  color: theme.secondary, align: "center"',
        '});',
    ]),
    (85, "case", "案例：东南亚延误交付", [
        'slide.addText("表面原因：", {',
        '  x: 0.7, y: 1.2, w: 2, h: 0.35,',
        '  fontSize: 14, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
        'slide.addText("「他们这边的工作节奏本来就比较松弛，要包容。」", {',
        '  x: 0.7, y: 1.55, w: 8.6, h: 0.45,',
        '  fontSize: 14, fontFace: "Microsoft YaHei",',
        '  color: theme.secondary, italic: true',
        '});',
    ]),
    (86, "content", "诊断问题", [
        'slide.addText("诊断问题：", {',
        '  x: 0.5, y: 1.5, w: 9, h: 0.5,',
        '  fontSize: 18, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (87, "content", "反思问题", [
        'slide.addText("如果这件事发生在我自己团队，我会怎么处理？", {',
        '  x: 0.5, y: 2.0, w: 9, h: 0.6,',
        '  fontSize: 20, fontFace: "Microsoft YaHei",',
        '  color: theme.accent, bold: true',
        '});',
        'slide.addText("同样标准，不因「跨文化」放松", {',
        '  x: 0.5, y: 2.8, w: 9, h: 0.5,',
        '  fontSize: 16, fontFace: "Microsoft YaHei",',
        '  color: theme.secondary',
        '});',
    ]),
    (88, "content", "模块四小结", [
        'slide.addText("模块四：包容的边界", {',
        '  x: 0.5, y: 1.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (89, "section", "模块五：反馈的节奏", [
        'slide.addText("模块五", {',
        '  x: 0.5, y: 1.8, w: 9, h: 0.6,',
        '  fontSize: 20, fontFace: "Microsoft YaHei",',
        '  color: theme.accent',
        '});',
        'slide.addText("反馈的节奏", {',
        '  x: 0.5, y: 2.4, w: 9, h: 1,',
        '  fontSize: 44, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
]

for num, stype, title, lines in module4_slides:
    create_slide(num, stype, title, lines)

# Slides 90-110
module5_content = [
    (90, "content", "反馈的常见误区", [
        'slide.addText("反馈的常见误区", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (91, "content", "误区一：沉默等于认可", [
        'slide.addText("误区一", {',
        '  x: 0.5, y: 1.2, w: 9, h: 0.5,',
        '  fontSize: 16, fontFace: "Microsoft YaHei",',
        '  color: theme.accent',
        '});',
        'slide.addText("沉默等于认可", {',
        '  x: 0.5, y: 1.7, w: 9, h: 0.8,',
        '  fontSize: 32, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (92, "content", "误区二：邮件等于确认", [
        'slide.addText("误区二", {',
        '  x: 0.5, y: 1.2, w: 9, h: 0.5,',
        '  fontSize: 16, fontFace: "Microsoft YaHei",',
        '  color: theme.accent',
        '});',
        'slide.addText("邮件等于确认", {',
        '  x: 0.5, y: 1.7, w: 9, h: 0.8,',
        '  fontSize: 32, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (93, "content", "正确反馈的节奏", [
        'slide.addText("正确反馈的节奏", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (94, "content", "即时反馈 vs 延迟反馈", [
        'slide.addText("即时反馈", {',
        '  x: 0.5, y: 1.2, w: 4, h: 0.5,',
        '  fontSize: 20, fontFace: "Microsoft YaHei",',
        '  color: theme.accent, bold: true',
        '});',
        'slide.addText("延迟反馈", {',
        '  x: 5, y: 1.2, w: 4, h: 0.5,',
        '  fontSize: 20, fontFace: "Microsoft YaHei",',
        '  color: theme.secondary, bold: true',
        '});',
    ]),
    (95, "case", "案例：邮件确认的陷阱", [
        'slide.addText("案例：邮件确认的陷阱", {',
        '  x: 0.5, y: 0.4, w: 9, h: 0.6,',
        '  fontSize: 32, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (96, "content", "如何正确确认", [
        'slide.addText("如何正确确认", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (97, "content", "确认的三种方式", [
        'slide.addText("确认的三种方式", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (98, "exercise", "练习：反馈节奏检测", [
        'slide.addText("练习：反馈节奏检测", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (99, "content", "模块五小结", [
        'slide.addText("模块五：反馈的节奏", {',
        '  x: 0.5, y: 1.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (100, "section", "模块六：决策与问责", [
        'slide.addText("模块六", {',
        '  x: 0.5, y: 1.8, w: 9, h: 0.6,',
        '  fontSize: 20, fontFace: "Microsoft YaHei",',
        '  color: theme.accent',
        '});',
        'slide.addText("决策与问责", {',
        '  x: 0.5, y: 2.4, w: 9, h: 1,',
        '  fontSize: 44, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
]

for num, stype, title, lines in module5_content:
    create_slide(num, stype, title, lines)

# Slides 101-110
module6_part1 = [
    (101, "content", "决策权的分配", [
        'slide.addText("决策权的分配", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (102, "content", "谁有最终决定权", [
        'slide.addText("谁有最终决定权", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (103, "case", "案例：决策权争议", [
        'slide.addText("案例：决策权争议", {',
        '  x: 0.5, y: 0.4, w: 9, h: 0.6,',
        '  fontSize: 32, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (104, "content", "问责的时机", [
        'slide.addText("问责的时机", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (105, "content", "事前确认 vs 事后追责", [
        'slide.addText("事前确认", {',
        '  x: 0.5, y: 1.2, w: 4, h: 0.5,',
        '  fontSize: 20, fontFace: "Microsoft YaHei",',
        '  color: theme.accent, bold: true',
        '});',
        'slide.addText("事后追责", {',
        '  x: 5, y: 1.2, w: 4, h: 0.5,',
        '  fontSize: 20, fontFace: "Microsoft YaHei",',
        '  color: theme.secondary, bold: true',
        '});',
    ]),
    (106, "content", "如何建立问责共识", [
        'slide.addText("如何建立问责共识", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (107, "content", "决策记录的重要性", [
        'slide.addText("决策记录的重要性", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (108, "exercise", "练习：决策与问责情境", [
        'slide.addText("练习：决策与问责情境", {',
        '  x: 0.5, y: 0.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (109, "content", "模块六小结", [
        'slide.addText("模块六：决策与问责", {',
        '  x: 0.5, y: 1.5, w: 9, h: 0.6,',
        '  fontSize: 28, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
    (110, "section", "总结与行动计划", [
        'slide.addText("总结与行动计划", {',
        '  x: 0.5, y: 2.0, w: 9, h: 1,',
        '  fontSize: 40, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true',
        '});',
    ]),
]

for num, stype, title, lines in module6_part1:
    create_slide(num, stype, title, lines)

# Slides 111-145
remaining_slides = [
    (111, "content", "课程回顾"),
    (112, "content", "模块一：各自协作的默认设置"),
    (113, "content", "模块二：会议沉默的真相"),
    (114, "content", "模块三：批评的成本"),
    (115, "content", "模块四：包容的边界"),
    (116, "content", "模块五：反馈的节奏"),
    (117, "content", "模块六：决策与问责"),
    (118, "content", "关键收获"),
    (119, "content", "收获一：意识到默认设置"),
    (120, "content", "收获二：主动确认不默认"),
    (121, "content", "收获三：建立反馈文化"),
    (122, "content", "行动计划制定"),
    (123, "exercise", "练习：我的行动清单"),
    (124, "content", "行动清单模板"),
    (125, "content", "第一步：识别默认设置"),
    (126, "content", "第二步：主动沟通计划"),
    (127, "content", "第三步：建立反馈机制"),
    (128, "content", "后续跟进建议"),
    (129, "content", "30天跟进计划"),
    (130, "content", "资源推荐"),
    (131, "content", "推荐阅读一"),
    (132, "content", "推荐阅读二"),
    (133, "content", "推荐工具"),
    (134, "content", "Q&A 环节"),
    (135, "content", "感谢参与"),
    (136, "content", "联系作者"),
    (137, "content", "更多课程信息"),
    (138, "content", "课程反馈"),
    (139, "content", "后续工作坊"),
    (140, "content", "认证项目"),
    (141, "content", "企业内部培训"),
    (142, "content", "公开课安排"),
    (143, "content", "一对一辅导"),
    (144, "content", "期待再会"),
    (145, "content", "结束页"),
]

for num, stype, title in remaining_slides:
    create_slide(num, stype, title, [
        f'slide.addText("{title}", {{',
        '  x: 0.5, y: 2.0, w: 9, h: 1,',
        '  fontSize: 32, fontFace: "Microsoft YaHei",',
        '  color: theme.primary, bold: true, align: "center"',
        '});',
    ])

print("\nAll slides 84-145 regenerated successfully!")