// slide-130.js - 分析框架总结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 130,
  title: '分析框架总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("分析框架总结", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Five steps
  const steps = [
    { num: "1", title: "映射博弈", desc: "谁是玩家？有哪些策略选择？" },
    { num: "2", title: "计算收益", desc: "用数字或等级量化各方收益" },
    { num: "3", title: "寻找均衡", desc: "找出双方都不愿单方面改变的点" },
    { num: "4", title: "设计干预", desc: "改变收益结构或添加约束机制" },
    { num: "5", title: "实施监控", desc: "执行策略并观察结果，持续调整" }
  ];

  steps.forEach((s, i) => {
    const y = 1.15 + i * 0.82;

    // Number circle
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.1, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(s.num, {
      x: 0.7, y: y + 0.1, w: 0.55, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    // Content card
    slide.addShape("rect", {
      x: 1.5, y: y, w: 8, h: 0.72,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.05 }
    });

    slide.addText(s.title, {
      x: 1.7, y: y + 0.08, w: 2.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    slide.addText(s.desc, {
      x: 1.7, y: y + 0.38, w: 7.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });

    // Arrow between steps
    if (i < 4) {
      slide.addText("↓", {
        x: 0.85, y: y + 0.65, w: 0.25, h: 0.25,
        fontSize: 12, fontFace: "Arial",
        color: theme.light, align: "center"
      });
    }
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("130", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-130-preview.pptx" });
}
