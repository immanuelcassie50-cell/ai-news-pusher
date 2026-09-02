const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "晨间工具组合推荐",
  type: "content",
  pageNumber: 78
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
  slide.addText("78", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("晨间工具组合推荐", {
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
      label: "A",
      title: "温和启动型",
      duration: "3分钟",
      tools: ["3分钟呼吸空间", "自我关怀宣言"]
    },
    {
      label: "B",
      title: "感恩启动型",
      duration: "5分钟",
      tools: ["感恩日记", "腹式呼吸"]
    },
    {
      label: "C",
      title: "身体激活型",
      duration: "7分钟",
      tools: ["渐进式肌肉放松", "身体扫描"]
    }
  ];

  options.forEach((opt, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 2.9, h: 3.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Label badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + 1.05, y: 1.4, w: 0.8, h: 0.45,
      fill: { color: theme.primary }
    });
    slide.addText(opt.label, {
      x: x + 1.05, y: 1.4, w: 0.8, h: 0.45,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(opt.title, {
      x: x, y: 2.0, w: 2.9, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Duration
    slide.addText(opt.duration, {
      x: x, y: 2.5, w: 2.9, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.6, y: 3.0, w: 1.7, h: 0.03,
      fill: { color: theme.light }
    });

    // Tools label
    slide.addText("推荐工具", {
      x: x, y: 3.15, w: 2.9, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Tools list
    opt.tools.forEach((tool, j) => {
      const py = 3.55 + j * 0.5;

      // Bullet
      slide.addShape(pres.ShapeType.ellipse, {
        x: x + 0.35, y: py + 0.12, w: 0.1, h: 0.1,
        fill: { color: theme.accent }
      });

      slide.addText(tool, {
        x: x + 0.55, y: py, w: 2.2, h: 0.4,
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
