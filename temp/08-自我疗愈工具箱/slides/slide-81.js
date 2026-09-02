const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "工作间隙3分钟版本",
  type: "content",
  pageNumber: 81
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("81", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("工作间隙3分钟版本", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Three options
  const options = [
    {
      title: "3分钟呼吸空间",
      steps: ["觉知：停顿，留意当下", "聚焦：注意呼吸节奏", "扩展：感受身体整体"]
    },
    {
      title: "2分钟简易版",
      steps: ["深呼吸3次", "站立伸展（肩颈背）", "眨眼放松"]
    },
    {
      title: "隐形版PMR",
      steps: ["坐着完成", "收紧-放松各肌群", "表情放松技巧"]
    }
  ];

  options.forEach((opt, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 2.9, h: 3.7,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 2.9, h: 0.08,
      fill: { color: theme.primary }
    });

    // Title
    slide.addText(opt.title, {
      x: x, y: 1.5, w: 2.9, h: 0.6,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Steps
    opt.steps.forEach((step, j) => {
      const py = 2.25 + j * 0.75;

      // Step number
      slide.addShape(pres.ShapeType.ellipse, {
        x: x + 0.2, y: py + 0.1, w: 0.3, h: 0.3,
        fill: { color: theme.accent }
      });
      slide.addText(String(j + 1), {
        x: x + 0.2, y: py + 0.1, w: 0.3, h: 0.3,
        fontSize: 11, fontFace: "Arial",
        color: "FFFFFF", bold: true,
        align: "center", valign: "middle"
      });

      // Step text
      slide.addText(step, {
        x: x + 0.6, y: py, w: 2.1, h: 0.65,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        align: "left", valign: "middle"
      });
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
