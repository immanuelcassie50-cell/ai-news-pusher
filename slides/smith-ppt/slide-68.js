// slide-68.js - Content: 建立你的经济思想史坐标系
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 68,
  title: '建立你的经济思想史坐标系'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("建立你的经济思想史坐标系", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Four steps in horizontal layout
  const stepW = 2.15;
  const stepH = 2.6;
  const stepY = 1.25;
  const stepGap = 0.2;

  const steps = [
    {
      num: "01",
      title: "选取坐标轴",
      points: ["时间维度", "学派维度", "问题导向维度"]
    },
    {
      num: "02",
      title: "标注关键节点",
      points: ["斯密：古典经济学起点", "凯恩斯：宏观革命", "哈耶克：市场秩序"]
    },
    {
      num: "03",
      title: "理解思想关系",
      points: ["继承关系", "批判关系", "融合关系"]
    },
    {
      num: "04",
      title: "建立个人视角",
      points: ["你的立场是什么？", "斯密的位置在哪里？", "你的坐标系在哪里？"]
    }
  ];

  steps.forEach((step, i) => {
    const x = 0.5 + i * (stepW + stepGap);

    // Step card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: stepY, w: stepW, h: stepH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.1, y: stepY + 0.1, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });

    slide.addText(step.num, {
      x: x + 0.1, y: stepY + 0.1, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.1, y: stepY + 0.7, w: stepW - 0.2, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Points
    slide.addText(step.points.map((p, idx) => ({
      text: p,
      options: { bullet: true, breakLine: idx < step.points.length - 1 }
    })), {
      x: x + 0.1, y: stepY + 1.15, w: stepW - 0.2, h: 1.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      paraSpaceAfter: 4
    });

    // Arrow connector (except last)
    if (i < steps.length - 1) {
      slide.addText("→", {
        x: x + stepW - 0.05, y: stepY + stepH / 2 - 0.2, w: 0.4, h: 0.4,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Bottom insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.05, w: 9, h: 1.15,
    fill: { color: theme.secondary }
  });

  slide.addText("核心行动", {
    x: 0.7, y: 4.15, w: 1.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });

  slide.addText("不要被动接受任何思想家的观点。通过建立自己的坐标系，你才能真正理解每种思想的适用范围与局限性。", {
    x: 0.7, y: 4.5, w: 8.6, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("68", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-68-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
