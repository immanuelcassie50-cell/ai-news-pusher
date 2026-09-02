// slide-09.js - Content Page: 斯密的两大遗产
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '斯密的两大遗产'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page title
  slide.addText("斯密的两大遗产", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Two columns layout
  const leftX = 0.5;
  const rightX = 5.2;
  const colW = 4.3;
  const startY = 1.2;

  // Left column - 经济学遗产
  slide.addShape(pres.shapes.RECTANGLE, {
    x: leftX, y: startY, w: colW, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.1 }
  });

  // Left header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: leftX, y: startY, w: colW, h: 0.7,
    fill: { color: theme.primary }
  });

  slide.addText("经济学遗产", {
    x: leftX, y: startY, w: colW, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left content
  const leftContent = [
    { text: "核心概念", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "· 看不见的手 — 市场自动调节", options: { breakLine: true } },
    { text: "· 劳动分工 — 效率与专业化", options: { breakLine: true } },
    { text: "· 自由市场 — 减少干预", options: { breakLine: true } },
    { text: "· 资本积累 — 财富增长机制", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "传承与发展", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "古典 → 新古典 → 现代经济学", options: { breakLine: true } },
    { text: "李嘉图、穆勒、马歇尔、凯恩斯", options: { breakLine: true } },
    { text: "弗里德曼、哈耶克、布坎南", options: {} }
  ];

  slide.addText(leftContent, {
    x: leftX + 0.25, y: startY + 0.85, w: colW - 0.5, h: 3.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Right column - 道德哲学遗产
  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX, y: startY, w: colW, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.1 }
  });

  // Right header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX, y: startY, w: colW, h: 0.7,
    fill: { color: theme.accent }
  });

  slide.addText("道德哲学遗产", {
    x: rightX, y: startY, w: colW, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Right content
  const rightContent = [
    { text: "核心概念", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "· 同理心 — 道德情感的根源", options: { breakLine: true } },
    { text: "· 公正旁观者 — 自我审视机制", options: { breakLine: true } },
    { text: "· 美德伦理 — 品格与自控", options: { breakLine: true } },
    { text: "· 正义与仁慈 — 社会伦理基础", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "当代意义", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "商业伦理、企业社会责任", options: { breakLine: true } },
    { text: "行为经济学中的道德因素", options: { breakLine: true } },
    { text: "幸福经济学、正义理论", options: {} }
  ];

  slide.addText(rightContent, {
    x: rightX + 0.25, y: startY + 0.85, w: colW - 0.5, h: 3.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Bottom connection
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 5.25, w: 7, h: 0.25,
    fill: { color: theme.secondary }
  });

  slide.addText("两本书共同构成理解现代社会与经济的双钥匙", {
    x: 1.5, y: 5.25, w: 7, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("9", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
