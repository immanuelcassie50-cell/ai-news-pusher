const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "呼吸练习注意事项",
  type: "content",
  pageNumber: 29
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

  // Title
  slide.addText("呼吸练习注意事项", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Two columns - Do's and Don'ts
  // Do's column
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.25, w: 4.3, h: 3.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.25, w: 4.3, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("应该这样做", {
    x: 0.6, y: 1.25, w: 4.3, h: 0.55,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const dos = [
    "选择一个安静、舒适的环境",
    "穿着宽松的衣物",
    "练习前先清空膀胱",
    "循序渐进，开始时每次2-3分钟即可",
    "感到头晕时立即停止",
    "坚持每天练习，形成习惯"
  ];

  slide.addText(
    dos.map((d, i) => ({
      text: d,
      options: { bullet: true, breakLine: i < dos.length - 1 }
    })),
    {
      x: 0.8, y: 1.95, w: 3.9, h: 3.0,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top",
      paraSpaceAfter: 10
    }
  );

  // Don'ts column
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.25, w: 4.3, h: 3.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.25, w: 4.3, h: 0.55,
    fill: { color: theme.light }
  });
  slide.addText("避免这样做", {
    x: 5.1, y: 1.25, w: 4.3, h: 0.55,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const donts = [
    "不要在空气不流通的地方练习",
    "不要憋气到不舒服的程度",
    "不要勉强自己延长练习时间",
    "不要在饭后立即进行",
    "不要在开车或操作机械时深度练习",
    "不要追求完美的呼吸节奏"
  ];

  slide.addText(
    donts.map((d, i) => ({
      text: d,
      options: { bullet: true, breakLine: i < donts.length - 1 }
    })),
    {
      x: 5.3, y: 1.95, w: 3.9, h: 3.0,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top",
      paraSpaceAfter: 10
    }
  );

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("29", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
