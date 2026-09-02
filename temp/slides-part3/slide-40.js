// slide-40.js - SOP示例 · 第四步与完成标志
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 40,
  title: 'SOP示例 · 第四步与完成标志'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("SOP示例 · 第四步与完成标志", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // 第四步 card
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("第四步：确认下一步行动", {
    x: 0.7, y: 1.3, w: 8.6, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  slide.addText([
    { text: "做法：\n", options: { bold: true, color: theme.secondary } },
    { text: "确认一件具体的事（约好下次沟通时间，或约好面谈），不要让电话在模糊的\"我再想想\"里结束\n\n", options: { color: theme.primary } },
    { text: "判断节点：\n", options: { bold: true, color: theme.secondary } },
    { text: "客户明确说了下次时间", options: { color: theme.primary } }
  ], {
    x: 0.7, y: 1.95, w: 8.6, h: 1.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    valign: "top"
  });

  // 完成标志 card
  slide.addShape("rect", {
    x: 0.5, y: 3.5, w: 9, h: 1.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.5, w: 9, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("完成标志", {
    x: 0.7, y: 3.5, w: 8.6, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  slide.addText("电话结束时客户语气平稳，且约好了一件具体的后续事项", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.9,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("40", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-40-preview.pptx" });
}

module.exports = { createSlide, slideConfig };