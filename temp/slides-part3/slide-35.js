// slide-35.js - SOP输出要求（上）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 35,
  title: 'SOP输出要求（上）'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("SOP输出要求（上）", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Item 1
  slide.addShape("rect", {
    x: 0.5, y: 1.35, w: 9, h: 1.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("ellipse", {
    x: 0.7, y: 1.55, w: 0.5, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("1", {
    x: 0.7, y: 1.55, w: 0.5, h: 0.5,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("流程名称（6-10字，以动词开头）", {
    x: 1.4, y: 1.5, w: 7.9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("示例：\"接待市场波动客户来电流程\"", {
    x: 1.4, y: 2.0, w: 7.9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Item 2
  slide.addShape("rect", {
    x: 0.5, y: 2.7, w: 9, h: 1.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("ellipse", {
    x: 0.7, y: 2.9, w: 0.5, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("2", {
    x: 0.7, y: 2.9, w: 0.5, h: 0.5,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("适用条件（2-3句，说清楚什么时候启动）", {
    x: 1.4, y: 2.85, w: 7.9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Item 3
  slide.addShape("rect", {
    x: 0.5, y: 3.85, w: 9, h: 1.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("ellipse", {
    x: 0.7, y: 4.05, w: 0.5, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("3", {
    x: 0.7, y: 4.05, w: 0.5, h: 0.5,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("前置准备（开始前需要确认或准备的事项）", {
    x: 1.4, y: 4.0, w: 7.9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("示例：\"在接通电话前，快速查看客户最近3个月的沟通记录和当前持仓概况\"", {
    x: 1.4, y: 4.5, w: 7.9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("35", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "c94134",
    accent: "c9ada7",
    light: "f5f5f5",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-35-preview.pptx" });
}

module.exports = { createSlide, slideConfig };