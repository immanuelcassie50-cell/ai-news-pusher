// slide-09.js - 学习路径图（五维系列定位）
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 9, title: '五维表达中的位置' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("学习路径  ·  LEARNING PATH", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // Title
  slide.addText("谈判在五维表达中的位置", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 5 dimensions horizontal flow
  const dims = [
    { t: "沟通", en: "Communication", sub: "让真话流通", color: theme.light, dark: false },
    { t: "说服", en: "Persuasion", sub: "让对方找到改变的理由", color: theme.light, dark: false },
    { t: "谈判", en: "Negotiation", sub: "在利益的博弈中找到双赢的路", color: theme.primary, dark: true },
    { t: "演讲", en: "Speaking", sub: "让思想被听见并打动人心", color: theme.light, dark: false },
    { t: "辩论", en: "Debate", sub: "让逻辑成为说服力", color: theme.light, dark: false }
  ];

  dims.forEach((d, i) => {
    const x = 0.4 + i * 1.92;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.6, w: 1.78, h: 1.85,
      fill: { color: d.dark ? d.color : "FFFFFF" },
      line: { color: d.dark ? d.color : theme.light, width: 1 }
    });
    // Top accent
    if (d.dark) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 1.6, w: 1.78, h: 0.08,
        fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
      });
    }
    // Number
    slide.addText(`0${i + 1}`, {
      x: x + 0.15, y: 1.75, w: 1.5, h: 0.35,
      fontSize: 16, fontFace: "Arial",
      color: d.dark ? theme.accent : theme.accent, bold: true
    });
    // Title CN
    slide.addText(d.t, {
      x: x + 0.15, y: 2.1, w: 1.5, h: 0.5,
      fontSize: 24, fontFace: "Microsoft YaHei",
      color: d.dark ? "FFFFFF" : theme.primary, bold: true
    });
    // English
    slide.addText(d.en, {
      x: x + 0.15, y: 2.65, w: 1.5, h: 0.3,
      fontSize: 9, fontFace: "Arial",
      color: d.dark ? theme.accent : theme.secondary, italic: true
    });
    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: 2.97, w: 0.3, h: 0.02,
      fill: { color: d.dark ? theme.accent : theme.secondary },
      line: { color: d.dark ? theme.accent : theme.secondary, width: 0 }
    });
    // Sub
    slide.addText(d.sub, {
      x: x + 0.15, y: 3.05, w: 1.5, h: 0.45,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: d.dark ? theme.light : theme.secondary, lineSpacing: 13
    });
  });

  // Connecting arrows
  for (let i = 0; i < 4; i++) {
    slide.addShape(pres.shapes.RIGHT_TRIANGLE, {
      x: 2.13 + i * 1.92, y: 2.45, w: 0.15, h: 0.15,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 },
      rotate: 30
    });
  }

  // Power structure note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.7, w: 9.2, h: 1.15,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("谈判的权力结构：权力在双方（vs 说服：权力在对方）", {
    x: 0.6, y: 3.78, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("双方都有筹码，需要通过利益置换找到共同可接受的版本。\n决定权不在一方，筹码管理是这门课的核心技术主线。", {
    x: 0.6, y: 4.2, w: 8.8, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, lineSpacing: 16
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("09", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
