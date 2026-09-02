// slide-37.js - SOP示例 · 接待市场大跌客户来电
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 37,
  title: 'SOP示例 · 接待市场大跌客户来电'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("SOP示例 · 接待市场大跌客户来电", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Main document card
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 3.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, angle: 135, opacity: 0.12 }
  });

  // Document header with red accent
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 0.6,
    fill: { color: theme.secondary }
  });
  slide.addText("流程名称", {
    x: 0.7, y: 1.35, w: 1.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });
  slide.addText("接待市场大跌时存量高净值客户来电流程", {
    x: 2.3, y: 1.35, w: 7, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 适用条件 section
  slide.addShape("rect", {
    x: 0.7, y: 2.1, w: 8.6, h: 0.4,
    fill: { color: theme.light }
  });
  slide.addText("适用条件", {
    x: 0.8, y: 2.1, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  slide.addText("市场单日跌幅超2%，且客户持仓出现明显浮亏，客户主动来电，语气中有情绪波动的迹象", {
    x: 0.8, y: 2.55, w: 8.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Preview indicator - steps preview
  slide.addShape("rect", {
    x: 0.7, y: 3.2, w: 8.6, h: 1.8,
    fill: { color: theme.bg }
  });

  slide.addText("预览：四步完整流程", {
    x: 0.8, y: 3.3, w: 8.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const steps = ["第一步：接住客户情绪", "第二步：重建问题框架", "第三步：提供有限可选路径", "第四步：确认下一步行动"];
  steps.forEach((step, i) => {
    slide.addShape("ellipse", {
      x: 0.9 + (i * 2.1), y: 3.85, w: 0.35, h: 0.35,
      fill: { color: theme.secondary }
    });
    slide.addText(String(i + 1), {
      x: 0.9 + (i * 2.1), y: 3.85, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(step, {
      x: 1.3 + (i * 2.1), y: 3.8, w: 1.8, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("37", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-37-preview.pptx" });
}

module.exports = { createSlide, slideConfig };