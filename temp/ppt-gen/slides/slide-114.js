// slide-114.js - Change Success Story Template
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 114,
  title: '变革成功故事模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革成功故事模板", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("一个好故事 = 真实 + 具体 + 可复制 + 有情感", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const storyStructure = [
    { part: "背景", content: "描述变革前的情境和挑战", prompt: "我们的团队/部门当时面临什么问题？" },
    { part: "转折", content: "变革如何开始，为什么要做", prompt: "是什么触发了这次变革？阻力是什么？" },
    { part: "过程", content: "变革中遇到的关键障碍和应对", prompt: "最大的困难是什么？我们是如何克服的？" },
    { part: "成果", content: "变革后的具体改善和量化结果", prompt: "指标发生了什么变化？具体数字是多少？" },
    { part: "感悟", content: "变革心得和对同行的建议", prompt: "如果重来一次，会做什么不一样？" }
  ];

  storyStructure.forEach((s, i) => {
    const y = 1.4 + i * 0.8;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.2, h: 0.7,
      fill: { color: theme.accent }
    });
    slide.addText(s.part, {
      x: 0.5, y: y + 0.2, w: 1.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.7, y: y, w: 3.5, h: 0.7,
      fill: { color: theme.light }
    });
    slide.addText(s.content, {
      x: 1.9, y: y + 0.1, w: 3.1, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addText("引导问题：" + s.prompt, {
      x: 1.9, y: y + 0.38, w: 3.1, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true, align: "left"
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.4, w: 4.3, h: 4.0,
    fill: { color: theme.light }
  });
  slide.addText("讲故事技巧", {
    x: 5.4, y: 1.6, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });
  const tips = [
    "用具体的人名和场景",
    "引用真实的数据",
    "展示"前后对比"",
    "加入困难和挣扎",
    "让故事有情感共鸣",
    "控制在3分钟内"
  ];
  tips.forEach((t, i) => {
    slide.addText("✓ " + t, {
      x: 5.4, y: 2.1 + i * 0.5, w: 3.9, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-114-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
