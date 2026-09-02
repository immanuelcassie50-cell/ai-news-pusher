// slide-65.js - 斯密与当代中国的关系
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 65,
  title: '斯密与当代中国的关系'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("斯密与当代中国的关系", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Left card - 斯密对中国的影响
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.3, h: 3.8,
    fill: { color: theme.primary, transparency: 10 },
    line: { color: theme.primary, width: 2 }
  });

  slide.addText("斯密对中国的影响", {
    x: 0.5, y: 1.3, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  const leftItems = [
    "严复翻译《原富》，将斯密引入中国",
    "改革开放时期斯密再度受关注",
    "社会主义市场经济讨论中的斯密"
  ];

  leftItems.forEach((item, idx) => {
    slide.addShape("ellipse", {
      x: 0.8, y: 2.0 + idx * 0.9, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });
    slide.addText(item, {
      x: 1.1, y: 1.85 + idx * 0.9, w: 3.5, h: 0.85,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right card - 反思性问题
  slide.addShape("rect", {
    x: 5.2, y: 1.15, w: 4.3, h: 3.8,
    fill: { color: theme.accent, transparency: 10 },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("反思性问题", {
    x: 5.2, y: 1.3, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  const rightItems = [
    "中国能直接从斯密学到什么？",
    "制度转轨的复杂性",
    "市场发育与制度建设的关系"
  ];

  rightItems.forEach((item, idx) => {
    slide.addShape("ellipse", {
      x: 5.5, y: 2.0 + idx * 0.9, w: 0.12, h: 0.12,
      fill: { color: theme.primary }
    });
    slide.addText(item, {
      x: 5.8, y: 1.85 + idx * 0.9, w: 3.5, h: 0.85,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addText("65", {
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
  pres.writeFile({ fileName: "slide-65-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
