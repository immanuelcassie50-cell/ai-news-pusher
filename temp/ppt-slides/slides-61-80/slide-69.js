// slide-69.js - 分类整理方法
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 69,
  title: '分类整理方法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("分类整理方法", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Three classification methods
  const methods = [
    {
      title: "相似性聚类",
      desc: "将相似想法归为一组",
      steps: ["快速浏览所有想法", "识别共同主题/关键词", "为每类命名标签", "将想法分配到各类别"]
    },
    {
      title: "矩阵分类",
      desc: "按两个维度进行交叉分类",
      steps: ["确定分类的两个维度", "画出2x2矩阵", "将想法放入对应格子", "识别空白区域机会"]
    },
    {
      title: "优先级排序",
      desc: "按重要性/紧急性排序",
      steps: ["明确排序标准", "两两对比评分", "得出优先级序列", "标注必须vs可选"]
    }
  ];

  methods.forEach((method, i) => {
    const x = 0.5 + i * 3.1;

    // Method card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.25, w: 2.95, h: 3.9,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.25, w: 2.95, h: 0.7,
      fill: { color: i === 0 ? theme.primary : i === 1 ? theme.accent : theme.secondary }
    });

    slide.addText(method.title, {
      x: x, y: 1.3, w: 2.95, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(method.desc, {
      x: x, y: 1.65, w: 2.95, h: 0.28,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center"
    });

    // Steps
    method.steps.forEach((step, j) => {
      const stepY = 2.1 + j * 0.7;

      // Step number
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.2, y: stepY, w: 0.35, h: 0.35,
        fill: { color: theme.light }
      });
      slide.addText(String(j + 1), {
        x: x + 0.2, y: stepY, w: 0.35, h: 0.35,
        fontSize: 12, fontFace: "Arial",
        color: theme.primary, bold: true,
        align: "center", valign: "middle"
      });

      // Step text
      slide.addText(step, {
        x: x + 0.65, y: stepY, w: 2.1, h: 0.5,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, valign: "middle"
      });
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("69", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };