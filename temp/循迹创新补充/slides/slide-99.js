// slide-99.js - SCAMPER: A (Adapt 适应)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 99,
  title: 'SCAMPER | A - 适应'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Side accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.88, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("SCAMPER", {
    x: 0.5, y: 0.35, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, charSpacing: 4
  });

  slide.addText("A - 适应", {
    x: 0.5, y: 0.6, w: 4, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("如何适应不同场景？", {
    x: 0.5, y: 1.1, w: 4, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Four adaptation types - vertical list with icons
  const adaptations = [
    { title: "场景适应", desc: "同一个产品在不同使用场景下的调整", color: theme.accent },
    { title: "用户适应", desc: "针对不同用户群体的定制化", color: theme.primary },
    { title: "环境适应", desc: "适应温度、湿度、空间等外部条件", color: theme.secondary },
    { title: "文化适应", desc: "符合当地习惯、审美、价值观", color: theme.light }
  ];

  const itemH = 0.85;
  const startY = 1.65;
  const startX = 0.5;
  const itemW = 8.8;

  adaptations.forEach((item, i) => {
    const y = startY + i * (itemH + 0.1);

    // Background bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: itemW, h: itemH,
      fill: { color: "FFFFFF" }
    });

    // Color indicator circle
    slide.addShape(pres.shapes.OVAL, {
      x: startX + 0.2, y: y + 0.2, w: 0.45, h: 0.45,
      fill: { color: item.color }
    });

    // Number
    slide.addText(String(i + 1).padStart(2, '0'), {
      x: startX + 0.2, y: y + 0.2, w: 0.45, h: 0.45,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: startX + 0.85, y: y + 0.12, w: 2, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: startX + 0.85, y: y + 0.45, w: 7.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Case study box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fill: { color: theme.primary }
  });

  slide.addText("案例  咖啡馆适应远程办公场景：提供WiFi、电源插座、安静环境，变成移动办公室", {
    x: 0.7, y: 4.92, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("99", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };