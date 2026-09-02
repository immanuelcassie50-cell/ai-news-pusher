const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("芝加哥学派对自由市场的辩护", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Main argument flow
  slide.addText("核心论证链条", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });

  // Flow diagram
  const flowSteps = [
    { text: "价格机制\n高效配置", color: theme.secondary },
    { text: "自由竞争\n激励创新", color: theme.light },
    { text: "自愿交易\n互利共赢", color: theme.accent }
  ];

  flowSteps.forEach((step, i) => {
    const x = 0.7 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.45, w: 2.8, h: 0.8,
      fill: { color: step.color }
    });
    slide.addText(step.text, {
      x: x, y: 1.5, w: 2.8, h: 0.7,
      fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    if (i < 2) {
      slide.addText("→", {
        x: x + 2.65, y: 1.55, w: 0.6, h: 0.6,
        fontFace: "Arial", fontSize: 24, color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Three defense pillars
  slide.addText("自由市场的三大支柱", {
    x: 0.5, y: 2.45, w: 9, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });

  const pillars = [
    {
      title: "信息功能",
      points: ["价格传递信息", "无需中央计划", "信息分散化"]
    },
    {
      title: "激励功能",
      points: ["利润驱动效率", "亏损惩罚浪费", "竞争淘汰低效"]
    },
    {
      title: "配置功能",
      points: ["资源流向高价值用途", "自动纠错机制", "无需政府干预"]
    }
  ];

  pillars.forEach((pillar, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.85, w: 2.95, h: 1.55,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.85, w: 2.95, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(pillar.title, {
      x: x, y: 2.88, w: 2.95, h: 0.35,
      fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF", bold: true,
      align: "center"
    });
    slide.addText(
      pillar.points.map((p, j) => ({
        text: p,
        options: { bullet: true, breakLine: j < pillar.points.length - 1 }
      })),
      {
        x: x + 0.1, y: 3.3, w: 2.75, h: 1,
        fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary
      }
    );
  });

  // Connection to Smith
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.55, w: 9, h: 0.9,
    fill: { color: theme.secondary }
  });
  slide.addText("与斯密的关联", {
    x: 0.6, y: 4.6, w: 8.8, h: 0.3,
    fontFace: "Microsoft YaHei", fontSize: 12, color: theme.light, bold: true
  });
  slide.addText("芝加哥学派用现代价格理论重新证明了斯密的核心论断：自由市场是迄今为止最有效的资源配置方式", {
    x: 0.6, y: 4.9, w: 8.8, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 11, color: "FFFFFF"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("44", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
