const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "模块六导览",
  type: "content",
  pageNumber: 76
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
  slide.addText("76", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("模块六导览", {
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

  // Four scenario cards
  const scenarios = [
    { num: "01", title: "晨间激活", subtitle: "Morning activation", desc: "温和唤醒，专注当下" },
    { num: "02", title: "工作间隙", subtitle: "Work breaks", desc: "快速重启，恢复能量" },
    { num: "03", title: "情绪低落时", subtitle: "When feeling down", desc: "急救工具，即时支持" },
    { num: "04", title: "睡前放松", subtitle: "Pre-sleep relaxation", desc: "过渡转换，安眠准备" }
  ];

  scenarios.forEach((s, i) => {
    const x = 0.5 + i * 2.35;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: 2.2, h: 3.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top colored bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: 2.2, h: 0.08,
      fill: { color: theme.primary }
    });

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.7, y: 1.6, w: 0.8, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: x + 0.7, y: 1.6, w: 0.8, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(s.title, {
      x: x, y: 2.25, w: 2.2, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // English subtitle
    slide.addText(s.subtitle, {
      x: x, y: 2.8, w: 2.2, h: 0.4,
      fontSize: 10, fontFace: "Arial",
      color: theme.accent,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(s.desc, {
      x: x, y: 3.3, w: 2.2, h: 1.2,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "top"
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
