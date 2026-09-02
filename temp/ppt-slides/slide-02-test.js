// slide-02.js - 课程定位
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 2,
  title: '课程定位'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("课程定位", {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Funnel visual - left side (收口课)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 1.5, w: 4, h: 3.5,
    fill: { color: theme.light },
    line: { color: theme.light, width: 1 }
  });

  // Funnel top bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 1.5, w: 4, h: 0.08,
    fill: { color: theme.primary }
  });

  slide.addText("收口课", {
    x: 0.8, y: 1.7, w: 4, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText([
    { text: "整合前四课所学", options: { breakLine: true } },
    { text: "形成完整体系", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "认知重启", options: { breakLine: true } },
    { text: "格式规范", options: { breakLine: true } },
    { text: "内容生成", options: { breakLine: true } },
    { text: "效率工具", options: { breakLine: true } }
  ], {
    x: 1.0, y: 2.4, w: 3.6, h: 2.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "top"
  });

  // Arrow between funnels
  slide.addText("→", {
    x: 4.6, y: 2.8, w: 0.8, h: 0.8,
    fontSize: 48, fontFace: "Arial",
    color: theme.accent, align: "center", valign: "middle"
  });

  // Funnel visual - right side (迁移课)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.5, w: 4, h: 3.5,
    fill: { color: theme.light },
    line: { color: theme.light, width: 1 }
  });

  // Funnel top bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.5, w: 4, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText("迁移课", {
    x: 5.2, y: 1.7, w: 4, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  slide.addText([
    { text: "从学习场景", options: { breakLine: true } },
    { text: "转向实际工作场景", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "知识 → 技能", options: { breakLine: true } },
    { text: "学习 → 实践", options: { breakLine: true } },
    { text: "课堂 → 岗位", options: { breakLine: true } }
  ], {
    x: 5.4, y: 2.4, w: 3.6, h: 2.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "top"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4a4a4a",
    accent: "E8364F",
    light: "c0c0c0",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/公文写作/5、综合实战——高频场景的协同写作与组织迁移/ppt/slides/slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
