// slide-41.js - 第五章 倒推路径图
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 41,
  title: '倒推路径图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("倒推路径图", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Direction indicator
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.5, y: 0.35, w: 2.0, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("← 倒推方向", {
    x: 7.5, y: 0.35, w: 2.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Flow diagram - vertical reverse path
  // Step 1 - top (starting point)
  const step1X = 4.0;
  const stepY1 = 1.1;
  const boxW = 3.5;
  const boxH = 0.8;
  const arrowH = 0.5;

  // Step 1: 十年后想过什么日子
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: step1X, y: stepY1, w: boxW, h: boxH,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("十年后想过什么日子", {
    x: step1X, y: stepY1, w: boxW, h: boxH,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Arrow 1
  const arrow1Y = stepY1 + boxH;
  slide.addText("↓", {
    x: step1X, y: arrow1Y, w: boxW, h: arrowH,
    fontSize: 28, fontFace: "Arial",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Step 2: 工作领域
  const step2Y = arrow1Y + arrowH;
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: step1X, y: step2Y, w: boxW, h: boxH,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });
  slide.addText("工作领域", {
    x: step1X, y: step2Y, w: boxW, h: boxH * 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "bottom"
  });
  slide.addText("（数据分析/工业设计/系统整理类管理岗位）", {
    x: step1X, y: step2Y + boxH * 0.5, w: boxW, h: boxH * 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "top"
  });

  // Arrow 2
  const arrow2Y = step2Y + boxH;
  slide.addText("↓", {
    x: step1X, y: arrow2Y, w: boxW, h: arrowH,
    fontSize: 28, fontFace: "Arial",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Step 3: 专业方向
  const step3Y = arrow2Y + arrowH;
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: step1X, y: step3Y, w: boxW, h: boxH,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });
  slide.addText("专业方向", {
    x: step1X, y: step3Y, w: boxW, h: boxH,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Arrow 3
  const arrow3Y = step3Y + boxH;
  slide.addText("↓", {
    x: step1X, y: arrow3Y, w: boxW, h: arrowH,
    fontSize: 28, fontFace: "Arial",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Step 4: 分数能够到的学校
  const step4Y = arrow3Y + arrowH;
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: step1X, y: step4Y, w: boxW, h: boxH,
    fill: { color: theme.light },
    rectRadius: 0.1
  });
  slide.addText("分数能够到的学校", {
    x: step1X, y: step4Y, w: boxW, h: boxH,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Left side - forward path comparison
  const leftX = 0.5;
  const leftBoxW = 2.8;

  slide.addText("正向推演", {
    x: leftX, y: 1.1, w: leftBoxW, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  const forwardSteps = ["分数", "学校", "专业", "工作"];
  const forwardStartY = 1.6;
  const forwardBoxH = 0.55;
  const forwardGap = 0.35;

  forwardSteps.forEach((step, i) => {
    const y = forwardStartY + i * (forwardBoxH + forwardGap);
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: leftX + 0.4, y: y, w: 2.0, h: forwardBoxH,
      fill: { color: theme.light },
      rectRadius: 0.08
    });
    slide.addText(step, {
      x: leftX + 0.4, y: y, w: 2.0, h: forwardBoxH,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });
    if (i < forwardSteps.length - 1) {
      slide.addText("↓", {
        x: leftX + 0.4, y: y + forwardBoxH, w: 2.0, h: forwardGap,
        fontSize: 14, fontFace: "Arial",
        color: theme.secondary,
        align: "center", valign: "middle"
      });
    }
  });

  // VS in the middle
  slide.addText("VS", {
    x: 3.4, y: 2.8, w: 0.6, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Right side - reverse arrow indicator
  slide.addText("→", {
    x: 8.0, y: 2.8, w: 0.5, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Bottom note
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("从终点往回算，答案更贴合这个人", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style - bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("41", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-41-preview.pptx" })
    .then(() => console.log("Preview saved: slide-41-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
