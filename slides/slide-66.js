// slide-66.js - 自由市场思想谱系图（完整版）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 66,
  title: '自由市场思想谱系图（完整版）'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("自由市场思想谱系图（完整版）", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Smith at top center
  slide.addShape("ellipse", {
    x: 4.25, y: 1.15, w: 1.5, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("斯密（1723-1790）", {
    x: 4.25, y: 1.15, w: 1.5, h: 0.7,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Arrow down
  slide.addText("↓", {
    x: 4.75, y: 1.85, w: 0.5, h: 0.3,
    fontSize: 16, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Classical economics
  slide.addShape("rect", {
    x: 3.5, y: 2.15, w: 3, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("李嘉图、穆勒（古典经济学）", {
    x: 3.5, y: 2.15, w: 3, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Arrow down
  slide.addText("↓", {
    x: 4.75, y: 2.65, w: 0.5, h: 0.3,
    fontSize: 16, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Marginal revolution
  slide.addShape("rect", {
    x: 2.5, y: 2.95, w: 5, h: 0.5,
    fill: { color: theme.secondary, transparency: 80 }
  });
  slide.addText("边际革命（杰文斯、门格尔、瓦尔拉斯）", {
    x: 2.5, y: 2.95, w: 5, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Austrian School box
  slide.addShape("rect", {
    x: 0.5, y: 3.65, w: 4.3, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 2 }
  });
  slide.addText("奥地利学派", {
    x: 0.5, y: 3.7, w: 4.3, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("门格尔→庞巴维克→米塞斯→哈耶克", {
    x: 0.5, y: 4.05, w: 4.3, h: 0.6,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Chicago School box
  slide.addShape("rect", {
    x: 5.2, y: 3.65, w: 4.3, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("芝加哥学派", {
    x: 5.2, y: 3.7, w: 4.3, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("奈特→弗里德曼→科斯→贝克尔→布坎南", {
    x: 5.2, y: 4.05, w: 4.3, h: 0.6,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Arrow pointing to both
  slide.addText("↓", {
    x: 4.75, y: 3.45, w: 0.5, h: 0.2,
    fontSize: 16, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Contemporary
  slide.addShape("rect", {
    x: 2.5, y: 4.85, w: 5, h: 0.6,
    fill: { color: theme.accent, transparency: 20 }
  });
  slide.addText("当代：制度经济学、行为经济学、信息经济学", {
    x: 2.5, y: 4.85, w: 5, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Arrows from schools to contemporary
  slide.addText("↓", {
    x: 2.4, y: 4.7, w: 0.5, h: 0.2,
    fontSize: 14, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("↓", {
    x: 7.1, y: 4.7, w: 0.5, h: 0.2,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("66", {
    x: 9.0, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: "Georgia",
    color: theme.primary, bold: true,
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
  pres.writeFile({ fileName: "slide-66-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
