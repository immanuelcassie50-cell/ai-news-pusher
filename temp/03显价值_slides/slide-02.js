// slide-02.js - TOC: 目录
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });

  slide.addText("目录", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // TOC items
  const tocItems = [
    { num: "01", title: "两种说法：感受语言 vs 业务语言" },
    { num: "02", title: "为什么支持部门说不清楚自己的价值" },
    { num: "03", title: "三种价值换算公式" },
    { num: "04", title: "演示案例：研发团队的价值损失翻译" },
    { num: "05", title: "练习：价值损失描述表" }
  ];

  tocItems.forEach((item, idx) => {
    const yPos = 1.2 + idx * 0.85;
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: yPos, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: 0.8, y: yPos, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    // Title text
    slide.addText(item.title, {
      x: 1.5, y: yPos, w: 7.5, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };