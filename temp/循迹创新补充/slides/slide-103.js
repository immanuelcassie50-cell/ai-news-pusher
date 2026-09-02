// slide-103.js - SCAMPER: R (Rearrange 重组)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 103,
  title: 'SCAMPER | R - 重组'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Corner accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("SCAMPER", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, charSpacing: 4
  });

  slide.addText("R - 重组", {
    x: 0.5, y: 0.55, w: 4, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("重新排列会有什么不同？", {
    x: 0.5, y: 1.05, w: 5, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Four rearrangement types - quadrant layout
  const rearranges = [
    { title: "顺序重组", desc: "改变步骤的先后顺序" },
    { title: "结构重组", desc: "调整组织或产品的架构" },
    { title: "逻辑重组", desc: "重新定义因果关系和推导路径" },
    { title: "关系重组", desc: "改变元素之间的连接和交互方式" }
  ];

  const quadW = 4.35;
  const quadH = 1.45;
  const startX = 0.5;
  const startY = 1.55;
  const gapX = 0.3;
  const gapY = 0.2;

  rearranges.forEach((item, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = startX + col * (quadW + gapX);
    const y = startY + row * (quadH + gapY);

    // Background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: quadW, h: quadH,
      fill: { color: "FFFFFF" }
    });

    // Top color bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: quadW, h: 0.06,
      fill: { color: i % 2 === 0 ? theme.accent : theme.primary }
    });

    // Number
    slide.addText(String(i + 1).padStart(2, '0'), {
      x: x + 0.2, y: y + 0.2, w: 0.6, h: 0.45,
      fontSize: 28, fontFace: "Arial",
      color: theme.light, bold: true
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.9, y: y + 0.25, w: quadW - 1.1, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.9, y: y + 0.65, w: quadW - 1.1, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Case study
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.55, w: 9, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("案例  拼车软件的匹配算法", {
    x: 0.7, y: 4.62, w: 8.6, h: 0.28,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("通过算法重新组合乘客的上车点、下车点和行驶路线，实现多人共乘，大幅提升出行效率", {
    x: 0.7, y: 4.92, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("103", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };