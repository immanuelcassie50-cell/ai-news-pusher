// slide-38.js - SOP示例 · 前置准备与第一步
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 38,
  title: 'SOP示例 · 前置准备与第一步'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("SOP示例 · 前置准备与第一步", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // 前置准备 card
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 1.5, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("前置准备", {
    x: 0.5, y: 1.3, w: 1.5, h: 1.1,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("在接通电话前，快速查看客户最近3个月的沟通记录和当前持仓概况", {
    x: 2.2, y: 1.3, w: 7.1, h: 1.1,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // 第一步 card
  slide.addShape("rect", {
    x: 0.5, y: 2.55, w: 9, h: 2.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.55, w: 9, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("第一步：接住客户情绪", {
    x: 0.7, y: 2.55, w: 8.6, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // Step details
  const stepDetails = [
    { label: "做法", value: "主动关注 + 开放式问题邀请客户表达顾虑 + 保持安静不打断" },
    { label: "判断节点", value: "客户语速放慢，语气从质问转向倾诉" },
    { label: "常见失误", value: "客户话还没说完就开始解释市场" }
  ];

  stepDetails.forEach((detail, i) => {
    const y = 3.2 + i * 0.65;
    slide.addText(detail.label, {
      x: 0.7, y: y, w: 1.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true, valign: "middle"
    });
    slide.addText(detail.value, {
      x: 2.3, y: y, w: 7, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("38", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-38-preview.pptx" });
}

module.exports = { createSlide, slideConfig };