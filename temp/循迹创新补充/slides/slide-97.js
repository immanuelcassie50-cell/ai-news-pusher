// slide-97.js - SCAMPER深度: S (Substitute 替代)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 97,
  title: 'SCAMPER | S - 替代'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Title area
  slide.addText("SCAMPER", {
    x: 0.5, y: 0.3, w: 3, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, charSpacing: 4
  });

  slide.addText("S - 替代", {
    x: 0.5, y: 0.7, w: 4, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("什么可以被替代？", {
    x: 0.5, y: 1.25, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Content cards - left column
  const items = [
    { num: "01", title: "原材料替代", desc: "用不同材料实现相同功能" },
    { num: "02", title: "流程替代", desc: "用更高效的方式完成步骤" },
    { num: "03", title: "人员替代", desc: "让更合适的人来做" },
    { num: "04", title: "位置替代", desc: "改变地点或场景" },
    { num: "05", title: "资源替代", desc: "用更易获取的资源代替" }
  ];

  const cardW = 4.2;
  const cardH = 0.72;
  const startY = 1.85;
  const gap = 0.12;

  items.forEach((item, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * (cardW + 0.2);
    const y = startY + row * (cardH + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.5, h: cardH,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: x, y: y, w: 0.5, h: cardH,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title and description
    slide.addText(item.title, {
      x: x + 0.6, y: y + 0.1, w: cardW - 0.7, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(item.desc, {
      x: x + 0.6, y: y + 0.38, w: cardW - 0.7, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Case study box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.55, w: 9, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("案例", {
    x: 0.7, y: 4.62, w: 0.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("共享单车替代传统自行车租赁：无桩借还、扫码开锁、GPS定位，重新定义了城市出行方式", {
    x: 0.7, y: 4.88, w: 8.6, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("97", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };