// slide-25.js - Content: 价值损失描述表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 25,
  title: '价值损失描述表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("价值损失描述表", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.7, w: 1.2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Table
  const rows = [
    { label: "选的是哪条浪费（从清单里复制）？", placeholder: "" },
    { label: "对应哪个公式？", sub: "时间→流失 / 重复→人力 / 断点→机会" },
    { label: "计算过程（把每一步写出来）：", placeholder: "" },
    { label: "月度损失估算：", prefix: "约" },
    { label: "年度损失估算：", prefix: "约" },
    { label: "这个损失主要影响了谁？", placeholder: "" },
    { label: "如果这个问题解决了，谁最先感受到变化？", placeholder: "" }
  ];

  rows.forEach((row, i) => {
    const y = 0.95 + i * 0.6;

    // Row background
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.light;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.55,
      fill: { color: bgColor }
    });

    // Label
    slide.addText(row.label, {
      x: 0.7, y: y, w: 4.5, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });

    // Input area
    if (row.sub) {
      slide.addText(row.sub, {
        x: 5.3, y: y, w: 4, h: 0.55,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        valign: "middle"
      });
    } else if (row.prefix) {
      slide.addText(row.prefix, {
        x: 5.3, y: y, w: 0.5, h: 0.55,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.primary,
        valign: "middle"
      });
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 5.8, y: y + 0.15, w: 2, h: 0.25,
        fill: { color: theme.bg },
        line: { color: theme.secondary, width: 1 }
      });
      slide.addText("元", {
        x: 7.85, y: y, w: 0.5, h: 0.55,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.primary,
        valign: "middle"
      });
    } else {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 5.3, y: y + 0.1, w: 4, h: 0.35,
        fill: { color: theme.bg },
        line: { color: theme.secondary, width: 1 }
      });
    }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };