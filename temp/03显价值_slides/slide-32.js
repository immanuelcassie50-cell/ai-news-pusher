// slide-32.js - Content: 这一部分做了什么
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 32,
  title: '这一部分做了什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("这一部分做了什么", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Content card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("第三部分 · 完成内容", {
    x: 0.7, y: 1.2, w: 8.5, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const items = [
    "理解了「成本语言」和「业务语言」的本质差别",
    "掌握了3种价值换算公式",
    "完成了「价值损失描述表」（1-2条浪费的量化翻译）"
  ];

  items.forEach((item, i) => {
    const y = 1.75 + i * 0.6;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: y + 0.08, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });
    slide.addText(item, {
      x: 1.0, y: y, w: 8, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  //你现在手上有了
  slide.addText("你现在手上有：", {
    x: 0.5, y: 4.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  const things = ["部门瓶颈初印象（第一部分）", "部门浪费清单（第二部分）", "价值损失描述表（本部分）"];
  things.forEach((thing, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 4.55, w: 2.9, h: 0.55,
      fill: { color: i === 2 ? theme.accent : theme.primary }
    });
    slide.addText(thing, {
      x: x, y: 4.55, w: 2.9, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "center", valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };