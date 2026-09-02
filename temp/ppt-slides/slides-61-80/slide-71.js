// slide-71.js - 投票决策技术
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 71,
  title: '投票决策技术'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("投票决策技术", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Voting methods - cards in 2x3 grid
  const methods = [
    { name: "多数投票", desc: "每个参与者选择N个选项，得票多者胜出",适用: "想法多需要快速筛选" },
    { name: "DOT投票", desc: "每人分发N个圆点，自行贴在想选的项目上",适用: "参与感要求高的场合" },
    { name: "优先级投票", desc: "对选项排序，根据位置计算综合得分",适用: "需要区分优先级" },
    { name: "体感投票", desc: "参与者站到不同区域表达倾向",适用: "快速直观，无需工具" },
    { name: "加权投票", desc: "不同角色有不同票数权重",适用: "决策权不平等的团队" },
    { name: "匿名投票", desc: "书面独立投票，避免公开表态压力",适用: "敏感或有争议议题" }
  ];

  methods.forEach((method, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.5 + col * 3.1;
    const y = 1.25 + row * 2.0;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.95, h: 1.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.05, h: 1.8,
      fill: { color: theme.accent }
    });

    // Method name
    slide.addText(method.name, {
      x: x + 0.2, y: y + 0.1, w: 2.6, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(method.desc, {
      x: x + 0.2, y: y + 0.5, w: 2.6, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Use case badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: y + 1.3, w: 2.6, h: 0.35,
      fill: { color: theme.light }
    });
    slide.addText("适用：" + method.适用, {
      x: x + 0.25, y: y + 1.3, w: 2.5, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("71", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };