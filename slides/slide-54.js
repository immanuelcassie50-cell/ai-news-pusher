// slide-54.js - 印度的两面下注策略
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 54,
  title: '印度的两面下注策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("印度的两面下注策略", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("54", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Strategy diagram - balance scale visualization
  // Left side - US/West
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 3.0, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 3.0, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("美国与西方", {
    x: 0.5, y: 1.3, w: 3.0, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const westItems = [
    "Quad（四方安全对话）成员",
    "美印军事合作深化",
    "从美国购买武器",
    "参与「印太经济框架」"
  ];

  westItems.forEach((item, idx) => {
    slide.addShape("ellipse", {
      x: 0.7, y: 1.95 + idx * 0.4, w: 0.12, h: 0.12,
      fill: { color: theme.primary }
    });
    slide.addText(item, {
      x: 0.95, y: 1.85 + idx * 0.4, w: 2.4, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right side - China/Russia
  slide.addShape("rect", {
    x: 6.5, y: 1.3, w: 3.0, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 6.5, y: 1.3, w: 3.0, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("中国与俄罗斯", {
    x: 6.5, y: 1.3, w: 3.0, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const eastItems = [
    "加入上合组织",
    "俄印传统军售关系",
    "金砖国家合作",
    "贸易依赖中国制造"
  ];

  eastItems.forEach((item, idx) => {
    slide.addShape("ellipse", {
      x: 6.7, y: 1.95 + idx * 0.4, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });
    slide.addText(item, {
      x: 6.95, y: 1.85 + idx * 0.4, w: 2.4, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // India center
  slide.addShape("ellipse", {
    x: 4.25, y: 1.95, w: 1.5, h: 1.5,
    fill: { color: theme.secondary }
  });
  slide.addText("印度", {
    x: 4.25, y: 2.4, w: 1.5, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Arrows
  slide.addShape(pres.shapes.LINE, {
    x: 3.5, y: 2.7, w: 0.75, h: 0,
    line: { color: theme.primary, width: 2 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 5.75, y: 2.7, w: 0.75, h: 0,
    line: { color: theme.accent, width: 2 }
  });

  // Key insight box
  slide.addShape("rect", {
    x: 0.5, y: 3.9, w: 9, h: 1.4,
    fill: { color: theme.light, transparency: 60 }
  });

  slide.addText("战略逻辑", {
    x: 0.7, y: 4.0, w: 1.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const insights = [
    { text: "不做单选题：在中美竞争中保持回旋空间", color: theme.primary },
    { text: "经济上倚重中国制造，战略上借美制衡", color: theme.secondary },
    { text: "维护战略自主权，不选边站队", color: theme.accent }
  ];

  insights.forEach((ins, idx) => {
    const x = 0.7 + idx * 3.0;
    slide.addShape("ellipse", {
      x: x, y: 4.5, w: 0.15, h: 0.15,
      fill: { color: ins.color }
    });
    slide.addText(ins.text, {
      x: x + 0.25, y: 4.4, w: 2.6, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-54-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
