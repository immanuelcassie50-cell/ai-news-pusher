// slide-15.js - Fairness Iceberg Analysis (公平感冰山分析)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 15,
  title: '公平感冰山分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("公平感冰山分析", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Iceberg diagram - 3 layers
  const layers = [
    {
      label: "冰山之上",
      title: "行为表现",
      desc: "争抢、哭闹、打报告",
      color: theme.accent,
      y: 1.3
    },
    {
      label: "冰山之中",
      title: "情绪感受",
      desc: "委屈、嫉妒、恐惧",
      color: theme.primary,
      y: 2.6
    },
    {
      label: "冰山之下",
      title: "核心需求",
      desc: "被看见、被偏爱、安全感",
      color: theme.secondary,
      y: 3.9
    }
  ];

  // Draw iceberg shape (triangle using lines simulated with rectangles)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 3.5, h: 0.6,
    fill: { color: theme.light, transparency: 50 }
  });

  layers.forEach((layer, idx) => {
    // Label badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: layer.y, w: 1.5, h: 0.45,
      fill: { color: layer.color },
      rectRadius: 0.08
    });
    slide.addText(layer.label, {
      x: 0.5, y: layer.y, w: 1.5, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(layer.title, {
      x: 2.2, y: layer.y - 0.05, w: 2, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: layer.color, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(layer.desc, {
      x: 4.3, y: layer.y - 0.05, w: 5.2, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Water line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 3.3, w: 4, h: 0.03,
    fill: { color: theme.light }
  });
  slide.addText("水面", {
    x: 4.1, y: 3.15, w: 0.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.5, y: 1.3, w: 4, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 1.3, w: 4, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("关键洞见", {
    x: 5.7, y: 1.6, w: 3.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("我们常常看到孩子表面的行为，\n却忽略了行为背后的情绪和需求。\n\n当孩子说'不公平'时，\n他真正可能在说：\n'我感觉被忽视了'\n'我需要更多的关注'", {
    x: 5.7, y: 2.2, w: 3.6, h: 2.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-15-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
