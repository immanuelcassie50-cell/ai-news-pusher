import os

path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/'

# Template for slides 91-120 (scenarios and practice)
def make_slide(i, title, subtitle=""):
    return f'''// slide-{i}.js
const pptxgen = require("pptxgenjs");

const slideConfig = {{
  type: 'content',
  index: {i},
  title: '{title}'
}};

function createSlide(pres, theme) {{
  const slide = pres.addSlide();
  slide.background = {{ color: theme.bg }};

  slide.addShape(pres.shapes.RECTANGLE, {{
    x: 0, y: 0, w: 10, h: 0.08,
    fill: {{ color: theme.accent }}
  }});

  slide.addText("{title}", {{
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  }});

  if ("{subtitle}") {{
    slide.addText("{subtitle}", {{
      x: 0.5, y: 0.9, w: 9, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary
    }});
  }}

  // Content placeholder
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {{
    x: 0.5, y: 1.5, w: 9, h: 3.5,
    fill: {{ color: "FFFFFF" }},
    shadow: {{ type: 'outer', blur: 4, offset: 2, color: 'rgba(0,0,0,0.06)' }},
    rectRadius: 0.1
  }});

  slide.addText("Slide {i} Content", {{
    x: 0.5, y: 1.5, w: 9, h: 3.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  }});

  // Page number
  slide.addShape(pres.shapes.OVAL, {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: {{ color: theme.accent }}
  }});
  slide.addText("{i}", {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  }});

  return slide;
}}

module.exports = {{ createSlide, slideConfig }};
'''

# Slide data for 91-120
slide_data = {
    91: ("场景演练：业主拒绝AI门禁", "场景一"),
    92: ("场景演练：业主担心信息泄露", "场景二"),
    93: ("场景演练：业主不会用智能手机", "场景三"),
    94: ("场景演练：业主坚持要人工服务", "场景四"),
    95: ("角色扮演练习", "两人一组进行对话练习"),
    96: ("话术优化工作坊", "根据实际情况调整话术"),
    97: ("常见问题解答", "Q&A环节"),
    98: ("课程总结", "核心要点回顾"),
    99: ("学习评估", "知识测验"),
    100: ("后续行动计划", "制定落地计划"),
}

# Generate slides 91-120
for i in range(91, 121):
    if i in slide_data:
        title, subtitle = slide_data[i]
    else:
        title = f"Slide {i}"
        subtitle = ""
    content = make_slide(i, title, subtitle)
    with open(path + f'slide-{i}.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'slide-{i} written')

print('Done!')