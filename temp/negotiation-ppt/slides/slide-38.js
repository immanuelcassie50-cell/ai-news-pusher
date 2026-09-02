// slide-38.js - 利益地图工具
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 38, title: '利益地图工具' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 工具：利益地图", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("把你和对方的立场都翻译成四维利益", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("用这个模板，5 分钟内画出一次谈判的全貌", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Template
  const sides = [
    {
      x: 0.4, color: theme.secondary, label: "我方", stance: "我方的立场：",
      cells: ["实质：", "程序：", "关系：", "原则："]
    },
    {
      x: 5.1, color: theme.primary, label: "对方", stance: "我猜的对方立场：",
      cells: ["实质：", "程序：", "关系：", "原则："]
    }
  ];

  sides.forEach((s) => {
    // Card
    slide.addShape("rect", {
      x: s.x, y: 1.7, w: 4.5, h: 3.05,
      fill: { color: "FFFFFF" }, line: { color: s.color, width: 1 }
    });
    // Header
    slide.addShape("rect", {
      x: s.x, y: 1.7, w: 4.5, h: 0.4,
      fill: { color: s.color }, line: { color: s.color, width: 0 }
    });
    slide.addText(s.label, {
      x: s.x + 0.2, y: 1.7, w: 4, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });
    // Stance
    slide.addText(s.stance, {
      x: s.x + 0.2, y: 2.2, w: 4.1, h: 0.3,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: s.color, bold: true
    });
    slide.addShape("rect", {
      x: s.x + 0.2, y: 2.5, w: 4.1, h: 0.35,
      fill: { color: theme.bg }, line: { color: s.color, width: 0.5 }
    });
    // 4 dimensions
    s.cells.forEach((c, i) => {
      const y = 2.95 + i * 0.42;
      slide.addText(c, {
        x: s.x + 0.2, y: y, w: 0.8, h: 0.35,
        fontSize: 10.5, fontFace: "Microsoft YaHei",
        color: theme.accent, bold: true, valign: "middle"
      });
      slide.addShape("rect", {
        x: s.x + 1.0, y: y + 0.05, w: 3.3, h: 0.25,
        fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
      });
    });
  });

  // Bottom prompt
  slide.addShape("rect", {
    x: 0.4, y: 4.85, w: 9.2, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("填完后看两边：哪个维度我可以\"送\"？哪个维度我希望\"要\"？", {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("38", {
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
  pres.writeFile({ fileName: "slide-38-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
