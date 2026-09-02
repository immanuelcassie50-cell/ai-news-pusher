// slide-99.js - 第三方调停的技巧
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("第三方调停的技巧", {
    x: 0.5, y: 0.2, w: 6, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("Mediation Techniques", {
    x: 0.5, y: 0.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.light, margin: 0
  });

  // Numbered list with icons - 2 columns, 4 rows
  const techniques = [
    { num: "1", title: "分别沟通", desc: "与各方单独会面，了解真实立场与底线" },
    { num: "2", title: "议题分离", desc: "将复杂问题拆分为可处理的单个议题" },
    { num: "3", title: "寻找共同点", desc: "识别双方共享的利益或价值观" },
    { num: "4", title: "提出选项", desc: "为双方提供"面子解决方案"的选择" },
    { num: "5", title: "施加适当压力", desc: "利用外交、经济或舆论压力促使妥协" },
    { num: "6", title: "设定时限", desc: "创造紧迫感，推动决策进程" }
  ];

  techniques.forEach((tech, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.8;
    const y = 1.1 + row * 1.4;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.6, h: 1.2,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 0.5 }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.35, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(tech.num, {
      x: x + 0.15, y: y + 0.37, w: 0.5, h: 0.45,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(tech.title, {
      x: x + 0.8, y: y + 0.15, w: 3.6, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(tech.desc, {
      x: x + 0.8, y: y + 0.55, w: 3.6, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 5.15, w: 9.2, h: 0.35,
    fill: { color: theme.secondary, transparency: 80 }
  });

  slide.addText("核心原则：调停者不是裁判，而是推动对话的促进者", {
    x: 0.5, y: 5.18, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("99", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "c9ada7",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: './slide-99-preview.pptx' });
}

module.exports = { createSlide };
