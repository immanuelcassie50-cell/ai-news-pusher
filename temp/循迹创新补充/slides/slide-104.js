// slide-104.js - SCAMPER应用练习
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 104,
  title: 'SCAMPER应用练习'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });

  slide.addText("练习", {
    x: 0.5, y: 0.18, w: 1, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("SCAMPER应用练习", {
    x: 0.5, y: 0.4, w: 6, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("为你的产品进行SCAMPER分析", {
    x: 5.5, y: 0.5, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, align: "right"
  });

  // Steps section
  const steps = [
    { num: "1", title: "选择产品", desc: "选定一个你想要改进的产品或服务" },
    { num: "2", title: "逐项分析", desc: "针对每个SCAMPER维度提出改进想法" },
    { num: "3", title: "记录想法", desc: "把每个想法写下来，不做评判" },
    { num: "4", title: "筛选优化", desc: "评估可行性，选择最有价值的三个" }
  ];

  const stepW = 2.15;
  const stepH = 2.1;
  const startX = 0.5;
  const startY = 1.35;
  const gap = 0.2;

  steps.forEach((step, i) => {
    const x = startX + i * (stepW + gap);

    // Step box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: stepW, h: stepH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.75, y: startY + 0.2, w: 0.65, h: 0.65,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: x + 0.75, y: startY + 0.2, w: 0.65, h: 0.65,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.15, y: startY + 1, w: stepW - 0.3, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.15, y: startY + 1.4, w: stepW - 0.3, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  // Template section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.65, w: 9, h: 1.2,
    fill: { color: theme.light }
  });

  slide.addText("SCAMPER 分析模板", {
    x: 0.7, y: 3.75, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Mini SCAMPER letters
  const letters = ['S', 'C', 'A', 'M', 'P', 'E', 'R'];
  const letterW = 1.2;
  letters.forEach((letter, i) => {
    const x = 0.7 + i * letterW;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 4.1, w: 1.1, h: 0.6,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 0.5 }
    });
    slide.addText(letter, {
      x: x, y: 4.1, w: 1.1, h: 0.35,
      fontSize: 18, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });
    slide.addText("替代 组合 适应 修改 用途 消除 重组", {
      x: x, y: 4.4, w: 1.1, h: 0.25,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  // Time indicator
  slide.addShape(pres.shapes.OVAL, {
    x: 8.5, y: 3.85, w: 0.8, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("15分钟", {
    x: 8.5, y: 3.85, w: 0.8, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("104", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };