// slide-98.js - SCAMPER: C (Combine 组合)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 98,
  title: 'SCAMPER | C - 组合'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });

  slide.addText("SCAMPER", {
    x: 0.5, y: 0.2, w: 3, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: theme.light, charSpacing: 4
  });

  slide.addText("C - 组合", {
    x: 0.5, y: 0.5, w: 4, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("什么可以组合在一起？", {
    x: 4.5, y: 0.55, w: 5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, align: "right"
  });

  // Four combination types - 2x2 grid
  const combinations = [
    { title: "产品组合", desc: "将多个产品融合为一个整体", icon: "■" },
    { title: "功能组合", desc: "在一个解决方案中叠加多重功能", icon: "■" },
    { title: "用户组合", desc: "连接不同用户群体实现价值交换", icon: "■" },
    { title: "渠道组合", desc: "打通线上线下多触点", icon: "■" }
  ];

  const boxW = 4.3;
  const boxH = 1.5;
  const startX = 0.5;
  const startY = 1.4;
  const gapX = 0.4;
  const gapY = 0.3;

  combinations.forEach((item, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = startX + col * (boxW + gapX);
    const y = startY + row * (boxH + gapY);

    // Box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: boxW, h: boxH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });

    // Accent left edge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: boxH,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.25, y: y + 0.2, w: boxW - 0.4, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.25, y: y + 0.7, w: boxW - 0.4, h: 0.65,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Case study section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.65, w: 9, h: 0.75,
    fill: { color: theme.light }
  });

  slide.addText("经典案例", {
    x: 0.7, y: 4.72, w: 1, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("手机 + 相机 + 音乐播放器 = 智能手机", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("98", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };