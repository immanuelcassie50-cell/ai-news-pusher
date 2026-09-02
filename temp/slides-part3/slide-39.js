// slide-39.js - SOP示例 · 第二步与第三步
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 39,
  title: 'SOP示例 · 第二步与第三步'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("SOP示例 · 第二步与第三步", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Left column - 第二步
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 4.3, h: 3.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 4.3, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("第二步：重建问题框架", {
    x: 0.5, y: 1.3, w: 4.3, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "做法：\n", options: { bold: true, color: theme.secondary } },
    { text: "概括客户核心顾虑，确认理解无误后，将话题从\"今天涨跌了多少\"转移到\"我们当时讨论的配置逻辑是什么\"\n\n", options: { color: theme.primary } },
    { text: "判断节点：\n", options: { bold: true, color: theme.secondary } },
    { text: "客户确认你的理解是对的，并且愿意听你继续说", options: { color: theme.primary } }
  ], {
    x: 0.7, y: 2.0, w: 3.9, h: 3.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    valign: "top"
  });

  // Right column - 第三步
  slide.addShape("rect", {
    x: 5.2, y: 1.3, w: 4.3, h: 3.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape("rect", {
    x: 5.2, y: 1.3, w: 4.3, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("第三步：提供有限可选路径", {
    x: 5.2, y: 1.3, w: 4.3, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "做法：\n", options: { bold: true, color: theme.secondary } },
    { text: "提供2-3个明确的行动选项，每个选项说清楚前提和后果，让客户自己做选择\n\n", options: { color: theme.primary } },
    { text: "判断节点：\n", options: { bold: true, color: theme.secondary } },
    { text: "客户表示需要时间考虑，或明确选择了某个方向", options: { color: theme.primary } }
  ], {
    x: 5.4, y: 2.0, w: 3.9, h: 3.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    valign: "top"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("39", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-39-preview.pptx" });
}

module.exports = { createSlide, slideConfig };