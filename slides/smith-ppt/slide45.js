const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("第二模块小结", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 32, color: "FFFFFF", bold: true
  });
  slide.addText("芝加哥学派：斯密思想的现代守护者", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.light
  });

  // Four key figures summary
  const figures = [
    {
      name: "弗里德曼",
      contribution: "货币理论",
      insight: "通胀是货币现象，自由市场需要稳定的货币环境"
    },
    {
      name: "科斯",
      contribution: "产权理论",
      insight: "交易成本决定企业边界，产权界定是市场的基础"
    },
    {
      name: "贝克尔",
      contribution: "人力资本",
      insight: "人是一种资本，投资于人是最有价值的投资"
    },
    {
      name: "布坎南",
      contribution: "公共选择",
      insight: "政府也是经济人，需要宪法约束权力"
    }
  ];

  figures.forEach((fig, i) => {
    const x = 0.5 + (i % 2) * 4.6;
    const y = 1.3 + Math.floor(i / 2) * 1.45;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.3,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });

    // Name badge
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 1.3, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(fig.name, {
      x: x, y: y, w: 1.3, h: 0.45,
      fontFace: "Microsoft YaHei", fontSize: 13, color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Contribution
    slide.addText(fig.contribution, {
      x: x + 1.4, y: y + 0.05, w: 2.9, h: 0.35,
      fontFace: "Microsoft YaHei", fontSize: 12, color: theme.primary, bold: true
    });

    // Insight
    slide.addText(fig.insight, {
      x: x + 0.1, y: y + 0.5, w: 4.2, h: 0.75,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary
    });
  });

  // Key takeaway
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.3, w: 9, h: 0.7,
    fill: { color: theme.accent }
  });
  slide.addText("核心命题：芝加哥学派用现代经济学工具重新证明了斯密的核心洞见——自由市场是资源配置的最佳方式", {
    x: 0.6, y: 4.4, w: 8.8, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Next module preview
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.1, w: 9, h: 0.45,
    fill: { color: theme.secondary }
  });
  slide.addText("下期预告：第三模块 — 奥地利学派的复兴", {
    x: 0.6, y: 5.15, w: 8.8, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("45", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
