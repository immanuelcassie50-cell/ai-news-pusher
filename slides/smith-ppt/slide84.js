const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("方法论", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("思想史研究方法", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Four methodologies
  const methods = [
    {
      title: "原典阅读",
      desc: "回到一手文献，追问'斯密实际说了什么'，而非'别人说他说了什么'",
      icon: "1"
    },
    {
      title: "语境还原",
      desc: "将思想放回18世纪苏格兰的独特语境，理解其针对性问题",
      icon: "2"
    },
    {
      title: "概念考古",
      desc: "追踪核心范畴（如'看不见的手'）在后世的流变与借用",
      icon: "3"
    },
    {
      title: "批判继承",
      desc: "区分斯密哪些分析仍有效，哪些已被证伪或需要修正",
      icon: "4"
    }
  ];

  methods.forEach((m, i) => {
    const x = 0.5 + (i % 2) * 4.7;
    const y = 1.95 + Math.floor(i / 2) * 1.55;

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.35,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.15 }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(m.icon, {
      x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Calibri",
      color: "FFFFFF", align: "center", valign: "middle"
    });

    // Title
    slide.addText(m.title, {
      x: x + 0.75, y: y + 0.15, w: 3.5, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(m.desc, {
      x: x + 0.2, y: y + 0.65, w: 4, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.light },
    transparency: 30
  });
  slide.addText("'思想史不是供奉偶像，而是与伟大的心灵对话'", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle", italic: true
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("84", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
