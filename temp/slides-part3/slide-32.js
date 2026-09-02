// slide-32.js - 完整的SOP生成提示词模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 32,
  title: '完整的SOP生成提示词模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("完整的SOP生成提示词模板", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Instruction text
  slide.addText("把以下模板复制到AI工具里，将括号里的内容替换成你的实际信息", {
    x: 0.5, y: 1.25, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Document container
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 3.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, angle: 135, opacity: 0.12 }
  });

  // Document header
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("SOP生成提示词模板", {
    x: 0.7, y: 1.85, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // Template sections
  const sections = [
    { title: "场景信息", items: ["场景名称", "适用情境", "服务方式", "预计处理时长"] },
    { title: "经验素材", items: ["操作步骤和判断逻辑类素材"] },
    { title: "输出要求", items: ["流程名称", "适用条件", "前置准备", "分步操作", "完成标志", "注意事项"] }
  ];

  let yPos = 2.5;
  sections.forEach((section, idx) => {
    slide.addText(section.title, {
      x: 0.7, y: yPos, w: 2, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    yPos += 0.4;
    section.items.forEach((item, i) => {
      slide.addText("[ ] " + item, {
        x: 0.9 + (idx * 3), y: yPos, w: 2.8, h: 0.35,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.primary
      });
      yPos += 0.35;
    });
    yPos += 0.2;
  });

  // Arrow indicators
  slide.addText("1", {
    x: 2.6, y: 2.5, w: 0.3, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true, align: "center"
  });
  slide.addText("2", {
    x: 5.6, y: 2.5, w: 0.3, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true, align: "center"
  });
  slide.addText("3", {
    x: 8.6, y: 2.5, w: 0.3, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true, align: "center"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("32", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-32-preview.pptx" });
}

module.exports = { createSlide, slideConfig };