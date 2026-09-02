// slide-42.js - Feedback Loop Design
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 42,
  title: '反馈循环设计要点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("反馈循环设计要点", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("没有反馈的沟通是独角戏", {
    x: 0.5, y: 1.0, w: 6, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const feedbackLoop = [
    { phase: "收集", desc: "多渠道收集员工反馈：问卷、访谈、匿名渠道" },
    { phase: "分析", desc: "分类整理反馈，识别高频问题和核心关切" },
    { phase: "回应", desc: "对有代表性的问题公开回应，说明处理方式" },
    { phase: "跟进", desc: "反馈的问题要有后续跟进和结果通报" }
  ];

  feedbackLoop.forEach((f, i) => {
    const y = 1.6 + i * 0.95;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.5, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText(f.phase, {
      x: 0.5, y: y + 0.2, w: 1.5, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(f.desc, {
      x: 2.2, y: y + 0.2, w: 7.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("让员工看到"我的声音被听到了"", {
    x: 0.5, y: 5.1, w: 6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left"
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
  pres.writeFile({ fileName: "slide-42-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
