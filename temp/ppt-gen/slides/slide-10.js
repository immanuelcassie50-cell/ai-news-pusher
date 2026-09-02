// slide-10.js - Change Curve
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 10,
  title: '变革曲线与应对策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革曲线与应对策略", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Curve stages - horizontal timeline
  const stages = [
    { name: "震惊期", desc: "收到变革消息", action: "及时沟通\n提供安全感", color: theme.accent, w: 1.8 },
    { name: "抵触期", desc: "消极应对", action: "倾听理解\n答疑解惑", color: theme.secondary, w: 2.2 },
    { name: "探索期", desc: "开始尝试", action: "提供支持\n允许试错", color: theme.primary, w: 2.2 },
    { name: "适应期", desc: "逐步接受", action: "肯定进步\n强化意义", color: theme.accent, w: 2.2 },
    { name: "内化期", desc: "成为常态", action: "赋能授权\n表彰激励", color: theme.primary, w: 1.8 }
  ];

  let x = 0.5;
  stages.forEach((s, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: s.w, h: 1.0,
      fill: { color: s.color }
    });
    slide.addText(s.name, {
      x: x, y: 1.35, w: s.w, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(s.desc, {
      x: x, y: 1.75, w: s.w, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center"
    });
    x += s.w;
  });

  // Arrows between stages
  x = 0.5;
  stages.forEach((s, i) => {
    if (i < stages.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: x + s.w, y: 1.7, w: stages[i + 1].w * 0.1, h: 0,
        line: { color: theme.secondary, width: 2 }
      });
    }
  });

  // Bottom: strategies
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.4, w: 9, h: 2.8,
    fill: { color: theme.light }
  });

  slide.addText("各阶段领导力应对要点", {
    x: 0.7, y: 2.6, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const strategies = [
    { stage: "震惊期", strategy: "一对一沟通，了解担忧，提供明确的时间表和预期" },
    { stage: "抵触期", strategy: "不打压情绪，允许表达，用数据和案例说话" },
    { stage: "探索期", strategy: "提供培训和资源，允许失败，鼓励创新" },
    { stage: "适应期", strategy: "认可进步，分享成功案例，强化新的工作方式" },
    { stage: "内化期", strategy: "充分授权，表彰标杆，纳入绩效考核" }
  ];

  strategies.forEach((s, i) => {
    slide.addText(s.stage + "：", {
      x: 0.7, y: 3.1 + i * 0.42, w: 1.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, align: "left"
    });
    slide.addText(s.strategy, {
      x: 1.9, y: 3.1 + i * 0.42, w: 7.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-10-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
