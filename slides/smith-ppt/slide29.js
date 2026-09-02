const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Deep red header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: theme.primary }
  });

  // Section title
  slide.addText("第二模块", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 16, color: "FFFFFF",
    bold: false
  });

  slide.addText("芝加哥学派的演变", {
    x: 0.5, y: 0.55, w: 9, h: 0.55,
    fontFace: "Microsoft YaHei", fontSize: 32, color: "FFFFFF",
    bold: true
  });

  // Subtitle
  slide.addText("From Vienna to Chicago: The Evolution of Economic Freedom", {
    x: 0.5, y: 1.6, w: 9, h: 0.4,
    fontFace: "Georgia", fontSize: 16, color: theme.secondary,
    italic: true
  });

  // Module overview boxes
  const boxY = 2.3;
  const boxData = [
    { title: "弗里德曼", desc: "货币主义的奠基人", icon: "💰" },
    { title: "科斯", desc: "产权理论的诞生", icon: "⚖️" },
    { title: "贝克尔", desc: "人力资本的开创者", icon: "📚" },
    { title: "布坎南", desc: "公共选择理论之父", icon: "🏛️" }
  ];

  boxData.forEach((item, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: boxY, w: 2.2, h: 1.8,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addText(item.icon, {
      x: x, y: boxY + 0.15, w: 2.2, h: 0.5,
      fontSize: 28, align: "center"
    });
    slide.addText(item.title, {
      x: x, y: boxY + 0.7, w: 2.2, h: 0.4,
      fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary,
      bold: true, align: "center"
    });
    slide.addText(item.desc, {
      x: x, y: boxY + 1.15, w: 2.2, h: 0.5,
      fontFace: "Microsoft YaHei", fontSize: 12, color: theme.secondary,
      align: "center"
    });
  });

  // Connecting line
  slide.addShape(pres.ShapeType.line, {
    x: 1.6, y: boxY + 0.45, w: 7.1, h: 0,
    line: { color: theme.accent, width: 2, dashType: "dash" }
  });

  // Key theme
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: theme.secondary, transparency: 10 }
  });
  slide.addText("核心主题：将斯密的自由市场思想与20世纪现实结合，重塑价格理论", {
    x: 0.6, y: 4.55, w: 8.8, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 14, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("29", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
