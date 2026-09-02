const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("芝加哥学派的特征", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Six characteristic cards in 2x3 grid
  const characteristics = [
    {
      title: "价格理论核心",
      desc: "以价格机制为核心分析工具，强调相对价格而非绝对价格",
      num: "01"
    },
    {
      title: "方法论个人主义",
      desc: "所有经济现象都应从个体行为出发解释，拒绝整体主义",
      num: "02"
    },
    {
      title: "实证主义立场",
      desc: "\"好经济学的标准：它管用\"（弗里德曼）",
      num: "03"
    },
    {
      title: "市场过程视角",
      desc: "关注市场如何运作，而非仅关注均衡状态",
      num: "04"
    },
    {
      title: "跨学科方法",
      desc: "将经济学分析扩展到非市场领域（犯罪、家庭、法律）",
      num: "05"
    },
    {
      title: "自由放任倾向",
      desc: "对政府干预持怀疑态度，相信市场自我调节能力",
      num: "06"
    }
  ];

  characteristics.forEach((char, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.2 + row * 1.85;

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 2.95, h: 1.7,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(char.num, {
      x: x, y: y, w: 0.5, h: 0.5,
      fontFace: "Georgia", fontSize: 14, color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(char.title, {
      x: x + 0.6, y: y + 0.1, w: 2.25, h: 0.4,
      fontFace: "Microsoft YaHei", fontSize: 13, color: theme.primary, bold: true
    });

    // Description
    slide.addText(char.desc, {
      x: x + 0.1, y: y + 0.6, w: 2.75, h: 1,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary
    });
  });

  // Connection to Smith
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("与斯密的关联：坚持\"看不见的手\"的核心洞见，用现代经济学工具重新证明", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("31", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
