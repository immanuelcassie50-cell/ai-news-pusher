// slide-106.js - Escalation Management
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 106,
  title: '冲突升级管理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("冲突升级管理", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Intro
  slide.addText("当合作破裂时：有序应对，而非情绪化反应", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Four response options
  const options = [
    { title: "升级条款", desc: "合同中预设的\n逐级升级程序\n避免直接对抗", color: theme.primary },
    { title: "调解机制", desc: "第三方介入\n中立立场协助\n寻求共同方案", color: theme.accent },
    { title: "仲裁程序", desc: "约束性裁决\n专业机构判定\n具有法律效力", color: theme.secondary },
    { title: "退出策略", desc: "明确退出条件\n有序终止合作\n保留未来可能", color: theme.light }
  ];

  const cardWidth = 2.15;
  const cardHeight = 2.7;
  const startX = 0.5;
  const gap = 0.3;

  options.forEach((o, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card
    slide.addShape("roundRect", {
      x: x, y: 1.6, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.08
    });

    // Top bar
    slide.addShape("rect", {
      x: x, y: 1.6, w: cardWidth, h: 0.08,
      fill: { color: o.color }
    });

    // Number
    slide.addText((idx + 1).toString(), {
      x: x, y: 1.7, w: cardWidth, h: 0.45,
      fontSize: 20, fontFace: "Arial",
      color: o.color, bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(o.title, {
      x: x + 0.1, y: 2.15, w: cardWidth - 0.2, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.2, y: 2.6, w: cardWidth - 0.4, h: 0.015,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(o.desc, {
      x: x + 0.1, y: 2.7, w: cardWidth - 0.2, h: 1.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom insight
  slide.addShape("roundRect", {
    x: 0.5, y: 4.5, w: 9, h: 0.9,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });
  slide.addText("预防胜于应对", {
    x: 0.7, y: 4.55, w: 2.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("最好的冲突管理是在合作开始前就设计好规则和退出机制", {
    x: 0.7, y: 4.9, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("106", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-106-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
