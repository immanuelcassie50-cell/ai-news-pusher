// slide-95.js - 恶性循环陷阱
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};

const slideConfig = {
  type: "content",
  index: 95,
  title: "恶性循环陷阱"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.bg };

  // Header bar with warning color
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: t.accent }
  });
  slide.addText("恶性循环陷阱", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Warning label
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.0, y: 0.2, w: 1.5, h: 0.4,
    fill: { color: "FFFFFF", transparency: 30 },
    rectRadius: 0.08
  });
  slide.addText("注意", {
    x: 8.0, y: 0.2, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Cycle steps
  const steps = [
    { num: "1", text: "想着“这个案例以后可以讲给别人听”" },
    { num: "2", text: "给建议时偏向更“有故事性”的选择" },
    { num: "3", text: "判断质量悄悄稀释" },
    { num: "4", text: "口碑运营本身变成了目的" }
  ];

  const startY = 1.1;
  const stepHeight = 0.85;

  steps.forEach((step, i) => {
    const y = startY + i * stepHeight;

    // Step card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 5.5, h: 0.7,
      fill: { color: "FFFFFF" },
      line: { color: t.primary, width: 1 },
      rectRadius: 0.1
    });

    // Step number
    slide.addShape(pres.shapes.OVAL, {
      x: 0.65, y: y + 0.1, w: 0.5, h: 0.5,
      fill: { color: t.accent }
    });
    slide.addText(step.num, {
      x: 0.65, y: y + 0.1, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Step text
    slide.addText(step.text, {
      x: 1.3, y: y + 0.1, w: 4.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: t.secondary,
      valign: "middle"
    });

    // Arrow down (except last)
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 3.1, y: y + 0.7, w: 0.04, h: 0.15,
        fill: { color: t.accent }
      });
    }
  });

  // Result arrows pointing right
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.1, y: startY + 1.5, w: 0.6, h: 0.06,
    fill: { color: t.accent }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.1, y: startY + 2.35, w: 0.6, h: 0.06,
    fill: { color: t.accent }
  });

  // Result box - left side
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: startY + 1.0, w: 2.7, h: 1.7,
    fill: { color: "FFFFFF" },
    line: { color: t.accent, width: 2 },
    rectRadius: 0.1
  });

  slide.addText("结果", {
    x: 6.95, y: startY + 1.1, w: 2.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: t.accent, bold: true
  });

  slide.addText([
    { text: "判断质量下滑", options: { breakLine: true } },
    { text: "↓", options: { breakLine: true } },
    { text: "长期侵蚀口碑" }
  ], {
    x: 6.95, y: startY + 1.45, w: 2.4, h: 1.1,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: t.secondary,
    align: "center"
  });

  // Cycle indicator
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.5,
    fill: { color: t.accent, transparency: 15 },
    rectRadius: 0.1
  });
  slide.addText("这是一个自我强化的恶性循环，越追越远", {
    x: 0.7, y: 4.65, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: t.accent, bold: true,
    valign: "middle"
  });

  // Page number badge - bottom left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("95", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  await pres.writeFile({ fileName: "D:/CC/temp/slides/slide-95-preview.pptx" });
  console.log("Created slide-95-preview.pptx");
}

main().catch(console.error);

module.exports = { createSlide, slideConfig };
