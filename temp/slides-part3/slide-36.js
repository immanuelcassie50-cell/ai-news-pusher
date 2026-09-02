// slide-36.js - SOP输出要求（下）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 36,
  title: 'SOP输出要求（下）'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("SOP输出要求（下）", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Template card
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Section header
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("分步操作格式", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Step template format
  slide.addText("[步骤编号] [动词开头的步骤名称]", {
    x: 0.7, y: 1.9, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Sub-items
  const subItems = [
    { label: "做法：", desc: "具体可执行的动作描述" },
    { label: "判断节点：", desc: "什么信号说明这步完成，或出现什么情况需要暂停" },
    { label: "常见失误：", desc: "这步最容易犯什么错，为什么" }
  ];

  subItems.forEach((item, i) => {
    slide.addText(item.label, {
      x: 1.0, y: 2.35 + i * 0.55, w: 1.3, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(item.desc, {
      x: 2.3, y: 2.35 + i * 0.55, w: 6.9, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent
    });
  });

  // Additional requirements section
  slide.addShape("rect", {
    x: 0.5, y: 4.45, w: 4.3, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addText("完成标志", {
    x: 0.7, y: 4.55, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("描述如何判断服务被成功处理", {
    x: 0.7, y: 4.95, w: 3.9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  slide.addShape("rect", {
    x: 5.2, y: 4.45, w: 4.3, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addText("注意事项（3-5条）", {
    x: 5.4, y: 4.55, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("关键提醒，含合规相关内容", {
    x: 5.4, y: 4.95, w: 3.9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("36", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-36-preview.pptx" });
}

module.exports = { createSlide, slideConfig };