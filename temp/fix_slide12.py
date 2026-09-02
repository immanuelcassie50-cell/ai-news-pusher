# -*- coding: utf-8 -*-
slides_dir = r"D:\新课开发\2026核心课\技控-绩效改进\完整课程包\02-授课PPT\slides"

content = r'''// slide-12.js - M0小结过渡
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: 'M0小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.light };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.0,
    fill: { color: theme.primary }
  });
  slide.addText("M0小结", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Main content area - 3 key points
  const points = [
    { num: "01", text: "认知冲击: 90秒 vs 90天" },
    { num: "02", text: "建立期待: 方法论比工具重要" },
    { num: "03", text: '过渡语: "90秒能出初稿,那什么变了、什么没变?\u8BF7\u5148\u56DE\u5230\u4E00\u4E2A\u516C\u5F0F"' }
  ];

  const startY = 1.4;
  const itemH = 0.9;

  points.forEach((point, i) => {
    const y = startY + i * itemH;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: y + 0.15, w: 0.55, h: 0.55,
      fill: { color: theme.secondary }
    });
    slide.addText(point.num, {
      x: 0.8, y: y + 0.15, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.6, y: y, w: 7.6, h: 0.8,
      fill: { color: theme.bg },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, color: "000000", opacity: 0.06 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.6, y: y, w: 0.06, h: 0.8,
      fill: { color: theme.accent }
    });

    slide.addText(point.text, {
      x: 1.85, y: y, w: 7.2, h: 0.8,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle", margin: 0
    });
  });

  // Bottom quote box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: theme.primary, transparency: 8 }
  });
  slide.addText('"90\u79D2\u80FD\u51FA\u521D\u7A3F,\u90A3\u4EC0\u4E48\u53D8\u4E86\u3001\u4EC0\u4E48\u6CA1\u53D8?\u8BF7\u5148\u56DE\u5230\u4E00\u4E2A\u516C\u5F0F"', {
    x: 0.7, y: 4.4, w: 8.6, h: 0.9,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("12", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(slides_dir + "\\slide-12.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Written slide-12.js")

# Now also create slide-16.js with proper escaping
content16 = r'''// slide-16.js - 人大附中三张表背景
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '案例:人大附中三张表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例: 人大附中三张表", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // 4-stage timeline
  const stages = [
    { label: "背景", title: "作文平均分48/50", desc: "满分50分的作文,平均失分仅2分", color: theme.secondary },
    { label: "冲突", title: "如何保证如此高分?", desc: "高分已常态化,问题是如何持续", color: theme.accent },
    { label: "动作", title: "三张表层层定位问题", desc: "定位表\u2192分析表\u2192改进表", color: theme.secondary },
    { label: "结果", title: '20\u5929\u89E3\u51B3"扣\u9898"\u95EE\u9898', desc: "从方法论入手,精准干预", color: theme.accent }
  ];

  const startX = 0.5;
  const stageW = 2.2;
  const gap = 0.13;
  const stageY = 1.3;
  const stageH = 3.5;

  stages.forEach((stage, i) => {
    const x = startX + i * (stageW + gap);

    // Stage card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: stageY, w: stageW, h: stageH,
      fill: { color: theme.light },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
    });

    // Stage number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + stageW/2 - 0.35, y: stageY + 0.2, w: 0.7, h: 0.7,
      fill: { color: stage.color }
    });
    slide.addText(String(i + 1), {
      x: x + stageW/2 - 0.35, y: stageY + 0.2, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Stage label
    slide.addText(stage.label, {
      x: x, y: stageY + 1.05, w: stageW, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: stage.color, bold: true,
      align: "center", margin: 0
    });

    // Stage title
    slide.addText(stage.title, {
      x: x + 0.15, y: stageY + 1.55, w: stageW - 0.3, h: 0.6,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", margin: 0
    });

    // Stage description
    slide.addText(stage.desc, {
      x: x + 0.15, y: stageY + 2.2, w: stageW - 0.3, h: 1.0,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", margin: 0
    });
  });

  // Bottom key takeaway
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.95, w: 8.5, h: 0.5,
    fill: { color: theme.primary, transparency: 8 }
  });
  slide.addText("关键: 用分母思维(降低代价)而不是盲目提高要求", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("16", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(slides_dir + "\\slide-16.js", "w", encoding="utf-8") as f:
    f.write(content16)
print("Written slide-16.js")
