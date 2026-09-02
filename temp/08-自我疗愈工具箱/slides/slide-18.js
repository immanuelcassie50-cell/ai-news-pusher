const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "身体扫描原理",
  type: "content",
  pageNumber: 18
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
  slide.addText("身体扫描原理", {
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

  // What is body scan section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.3, w: 4.3, h: 1.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("什么是身体扫描", {
    x: 0.8, y: 1.4, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("身体扫描（Body Scan）是正念减压疗法（MBSR）的核心练习之一。通过有意识地关注身体各部位的感受，建立身心连接。", {
    x: 0.8, y: 1.85, w: 3.9, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Why it works section
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.3, w: 4.3, h: 1.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("为什么有效", {
    x: 5.3, y: 1.4, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const mechanisms = [
    '中断"战斗或逃跑"反应',
    "增加身体觉知敏感性",
    "促进身心整合"
  ];

  slide.addText(
    mechanisms.map((m, i) => ({
      text: m,
      options: { bullet: true, breakLine: i < mechanisms.length - 1 }
    })),
    {
      x: 5.3, y: 1.85, w: 3.9, h: 1.0,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top"
    }
  );

  // Research support section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 3.2, w: 8.8, h: 1.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("研究支持", {
    x: 0.8, y: 3.3, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Research cards
  const research = [
    { source: "Harvard Medical School", finding: "身体扫描可显著降低皮质醇水平" },
    { source: "UC San Diego", finding: "有效改善焦虑和抑郁症状" },
    { source: "NIH", finding: "增强前额叶皮层对身体的感知" }
  ];

  const rCardWidth = 2.7;
  const rGap = 0.25;
  const rStartX = 0.9;

  research.forEach((r, i) => {
    const x = rStartX + i * (rCardWidth + rGap);

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.75, w: rCardWidth, h: 1.15,
      fill: { color: theme.bg },
      line: { color: theme.accent, width: 1 }
    });

    slide.addText(r.source, {
      x: x + 0.1, y: 3.85, w: rCardWidth - 0.2, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(r.finding, {
      x: x + 0.1, y: 4.2, w: rCardWidth - 0.2, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top"
    });
  });

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
  slide.addText("18", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
