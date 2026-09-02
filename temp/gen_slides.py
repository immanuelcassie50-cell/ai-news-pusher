import os

slides_dir = "D:/新课开发/心理学/09-悲伤与失去：走过丧失与告别的历程/授课PPT/slides/"

# Slide content definitions - more detailed for first 40
slide_defs = {
    1: {'type': 'cover', 'title': '悲伤与失去', 'subtitle': '走过丧失与告别的历程', 'english': 'Grief and Loss: Walking Through the Journey of Loss and Farewell'},
    2: {'type': 'toc', 'title': '课程目录'},
    3: {'type': 'info', 'title': '课程信息'},
    4: {'type': 'story', 'title': '开场故事'},
    5: {'type': 'intro', 'title': '认知自测'},
    6: {'type': 'content', 'title': '第一部分：重新认识悲伤'},
    7: {'type': 'content', 'title': '悲伤是什么'},
    8: {'type': 'content', 'title': '悲伤不是'},
    9: {'type': 'content', 'title': '悲伤的正常性'},
    10: {'type': 'content', 'title': '悲伤的类型'},
    11: {'type': 'section', 'title': '第二部分', 'subtitle': '悲伤的旅程'},
    12: {'type': 'content', 'title': '哀伤的阶段'},
    13: {'type': 'content', 'title': '否认与隔离'},
    14: {'type': 'content', 'title': '愤怒'},
    15: {'type': 'content', 'title': '讨价还价'},
    16: {'type': 'content', 'title': '抑郁'},
    17: {'type': 'content', 'title': '接受'},
    18: {'type': 'content', 'title': '第二部分：继续联结'},
    19: {'type': 'section', 'title': '第三部分', 'subtitle': '与自己悲伤共处'},
    20: {'type': 'content', 'title': '自我陪伴'},
    21: {'type': 'content', 'title': '允许悲伤'},
    22: {'type': 'content', 'title': '身体表达'},
    23: {'type': 'content', 'title': '情绪出口'},
    24: {'type': 'content', 'title': '日常仪式'},
    25: {'type': 'section', 'title': '第四部分', 'subtitle': '支持他人'},
    26: {'type': 'content', 'title': '倾听三步'},
    27: {'type': 'content', 'title': '说什么'},
    28: {'type': 'content', 'title': '什么不该说'},
    29: {'type': 'content', 'title': '支持资源'},
    30: {'type': 'section', 'title': '第五部分', 'subtitle': '整合与前行'},
    31: {'type': 'content', 'title': '与丧失和解'},
    32: {'type': 'content', 'title': '生命叙事'},
    33: {'type': 'content', 'title': '继续联结'},
    34: {'type': 'content', 'title': '寻找意义'},
    35: {'type': 'content', 'title': '新的身份'},
    36: {'type': 'content', 'title': '场景演练'},
    37: {'type': 'content', 'title': '角色扮演'},
    38: {'type': 'content', 'title': '小组讨论'},
    39: {'type': 'content', 'title': '反思日记'},
    40: {'type': 'content', 'title': '练习与反思'},
}

for idx in range(1, 151):
    if idx not in slide_defs:
        slide_defs[idx] = {'type': 'content', 'title': f'内容页 {idx}'}

for idx in range(1, 151):
    sdef = slide_defs.get(idx, {'type': 'content', 'title': f'内容页 {idx}'})
    stype = sdef.get('type', 'content')
    title = sdef.get('title', f'幻灯片 {idx}')
    subtitle = sdef.get('subtitle', '')
    english = sdef.get('english', '')

    if stype == 'cover':
        content = f'''// slide-{idx:03d}.js - Course Cover
const pptxgen = require("pptxgenjs");

const slideConfig = {{
  type: 'cover',
  index: {idx},
  title: '{title}'
}};

function createSlide(pres, theme) {{
  const slide = pres.addSlide();
  slide.background = {{ color: theme.bg }};

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {{
    x: -0.5, y: -0.3, w: 4.5, h: 2.2,
    fill: {{ color: theme.accent, transparency: 15 }},
    rectRadius: 0.12
  }});
  slide.addShape(pres.shapes.OVAL, {{
    x: 8.5, y: 0.3, w: 0.8, h: 0.8,
    fill: {{ color: theme.light, transparency: 40 }}
  }});
  slide.addShape(pres.shapes.OVAL, {{
    x: 0.8, y: 4.2, w: 1.2, h: 1.2,
    fill: {{ color: theme.primary, transparency: 85 }}
  }});
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {{
    x: 7.5, y: 4.0, w: 3.5, h: 2.0,
    fill: {{ color: theme.accent, transparency: 20 }},
    rectRadius: 0.1
  }});
  slide.addShape(pres.shapes.RECTANGLE, {{
    x: 1.5, y: 2.7, w: 2.5, h: 0.04,
    fill: {{ color: theme.accent }}
  }});

  slide.addText("{title}", {{
    x: 0.5, y: 1.8, w: 9, h: 0.9,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  }});
  slide.addText("{subtitle}", {{
    x: 0.5, y: 2.75, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  }});
  slide.addText("{english}", {{
    x: 0.5, y: 3.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.light, align: "center", italic: true
  }});

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {{
    x: 3.5, y: 4.6, w: 3, h: 0.5,
    fill: {{ color: theme.primary }},
    rectRadius: 0.1
  }});
  slide.addText("心理学课程", {{
    x: 3.5, y: 4.6, w: 3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.bg, align: "center", valign: "middle"
  }});

  return slide;
}}

if (require.main === module) {{
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {{
    primary: "4A3030", secondary: "6B5B5B", accent: "9E6B6B", light: "D4C4C4", bg: "F8F5F5"
  }};
  createSlide(pres, theme);
  pres.writeFile({{ fileName: "slide-{idx:03d}-preview.pptx" }});
}}

module.exports = {{ createSlide, slideConfig }};
'''
    elif stype == 'toc':
        content = f'''// slide-{idx:03d}.js - Table of Contents
const pptxgen = require("pptxgenjs");

const slideConfig = {{
  type: 'toc',
  index: {idx},
  title: '{title}'
}};

function createSlide(pres, theme) {{
  const slide = pres.addSlide();
  slide.background = {{ color: theme.bg }};

  slide.addShape(pres.shapes.RECTANGLE, {{
    x: 0, y: 0, w: 10, h: 1.0,
    fill: {{ color: theme.primary }}
  }});
  slide.addText("{title}", {{
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true
  }});

  const modules = [
    "第一部分：重新认识悲伤",
    "第二部分：悲伤的旅程",
    "第三部分：与自己悲伤共处",
    "第四部分：支持他人",
    "第五部分：整合与前行"
  ]];

  modules.forEach((mod, i) => {{
    const y = 1.3 + i * 0.8;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {{
      x: 0.8, y: y, w: 8.4, h: 0.65,
      fill: {{ color: "FFFFFF" }},
      rectRadius: 0.08,
      shadow: {{ type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }}
    }});
    slide.addShape(pres.shapes.RECTANGLE, {{
      x: 0.8, y: y, w: 0.08, h: 0.65,
      fill: {{ color: theme.accent }}
    }});
    slide.addText(mod, {{
      x: 1.1, y: y, w: 7.8, h: 0.65,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    }});
  }});

  slide.addShape(pres.shapes.OVAL, {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: {{ color: theme.accent }}
  }});
  slide.addText("{idx}", {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  }});

  return slide;
}}

if (require.main === module) {{
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {{
    primary: "4A3030", secondary: "6B5B5B", accent: "9E6B6B", light: "D4C4C4", bg: "F8F5F5"
  }};
  createSlide(pres, theme);
  pres.writeFile({{ fileName: "slide-{idx:03d}-preview.pptx" }});
}}

module.exports = {{ createSlide, slideConfig }};
'''
    elif stype == 'section':
        content = f'''// slide-{idx:03d}.js - Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {{
  type: 'section',
  index: {idx},
  title: '{title}'
}};

function createSlide(pres, theme) {{
  const slide = pres.addSlide();
  slide.background = {{ color: theme.primary }};

  slide.addShape(pres.shapes.OVAL, {{
    x: -1, y: -1, w: 4, h: 4,
    fill: {{ color: theme.secondary, transparency: 60 }}
  }});
  slide.addShape(pres.shapes.OVAL, {{
    x: 7, y: 3, w: 5, h: 5,
    fill: {{ color: theme.accent, transparency: 50 }}
  }});

  slide.addText("{title}", {{
    x: 0.5, y: 1.8, w: 9, h: 0.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  }});
  slide.addText("{subtitle}", {{
    x: 0.5, y: 2.6, w: 9, h: 1.2,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  }});

  slide.addShape(pres.shapes.OVAL, {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: {{ color: theme.accent }}
  }});
  slide.addText("{idx}", {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  }});

  return slide;
}}

if (require.main === module) {{
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {{
    primary: "4A3030", secondary: "6B5B5B", accent: "9E6B6B", light: "D4C4C4", bg: "F8F5F5"
  }};
  createSlide(pres, theme);
  pres.writeFile({{ fileName: "slide-{idx:03d}-preview.pptx" }});
}}

module.exports = {{ createSlide, slideConfig }};
'''
    else:
        content = f'''// slide-{idx:03d}.js - Content
const pptxgen = require("pptxgenjs");

const slideConfig = {{
  type: 'content',
  index: {idx},
  title: '{title}'
}};

function createSlide(pres, theme) {{
  const slide = pres.addSlide();
  slide.background = {{ color: theme.bg }};

  slide.addShape(pres.shapes.RECTANGLE, {{
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: {{ color: theme.accent }}
  }});

  slide.addText("{title}", {{
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  }});

  slide.addShape(pres.shapes.RECTANGLE, {{
    x: 0.5, y: 0.95, w: 2, h: 0.03,
    fill: {{ color: theme.accent }}
  }});

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {{
    x: 0.5, y: 1.3, w: 9, h: 3.6,
    fill: {{ color: "FFFFFF" }},
    rectRadius: 0.1,
    shadow: {{ type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }}
  }});

  slide.addText("{title}", {{
    x: 0.8, y: 1.6, w: 8.4, h: 3,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  }});

  slide.addShape(pres.shapes.OVAL, {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: {{ color: theme.accent }}
  }});
  slide.addText("{idx}", {{
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  }});

  return slide;
}}

if (require.main === module) {{
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {{
    primary: "4A3030", secondary: "6B5B5B", accent: "9E6B6B", light: "D4C4C4", bg: "F8F5F5"
  }};
  createSlide(pres, theme);
  pres.writeFile({{ fileName: "slide-{idx:03d}-preview.pptx" }});
}}

module.exports = {{ createSlide, slideConfig }};
'''

    filepath = os.path.join(slides_dir, f"slide-{idx:03d}.js")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Generated 150 slide files")