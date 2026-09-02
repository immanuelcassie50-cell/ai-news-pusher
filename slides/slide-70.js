// slide-70.js - 方向二：增加未来合作价值
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 70,
  title: '方向二：增加未来合作价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("方向二：增加未来合作价值", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Main content card
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 9, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }
  });

  // Left accent bar
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.12, h: 2.8,
    fill: { color: theme.accent }
  });

  // Key message
  slide.addText("Make the long-term relationship more valuable than short-term gain.", {
    x: 0.8, y: 1.4, w: 8.5, h: 0.6,
    fontSize: 18, fontFace: "Georgia",
    color: theme.primary, bold: false, italic: true,
    align: "left", valign: "middle"
  });

  // Explanation
  slide.addText("通过让长期合作关系的收益高于短期背叛的收益，使合作成为最优策略。", {
    x: 0.8, y: 2.1, w: 8.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Two boxes showing comparison
  // Box 1 - Short term (bad)
  slide.addShape("rect", {
    x: 0.9, y: 2.8, w: 4, h: 1.0,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addText("短期收益", {
    x: 0.9, y: 2.85, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("背叛的一时快感", {
    x: 0.9, y: 3.25, w: 4, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Box 2 - Long term (good)
  slide.addShape("rect", {
    x: 5.1, y: 2.8, w: 4, h: 1.0,
    fill: { color: theme.accent, transparency: 80 }
  });
  slide.addText("长期价值", {
    x: 5.1, y: 2.85, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("持续合作带来的收益", {
    x: 5.1, y: 3.25, w: 4, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Arrow between boxes
  slide.addText(">", {
    x: 4.6, y: 2.8, w: 0.5, h: 1.0,
    fontSize: 24, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Bottom insight
  slide.addShape("rect", {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 90 }
  });
  slide.addText("核心思路：将重复博弈转化为合作激励", {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("70", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
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
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-70-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
