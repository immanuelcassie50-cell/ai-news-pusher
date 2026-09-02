// slide-33.js - 得到大脑的使用场景
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "得到大脑的使用场景",
  pageNumber: 33,
  theme: theme
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 工具标识
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 2.8, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.06
  });

  slide.addText("得到大脑 · 场景", {
    x: 0.5, y: 0.3, w: 2.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // 标题
  slide.addText("得到大脑的使用场景", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.45, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 左侧：使用场景
  slide.addText("使用场景", {
    x: 0.5, y: 1.7, w: 4, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const scenarios = [
    "读完一本书，整理核心知识点",
    "听完一门课，生成学习笔记",
    "研究一个领域，建立知识框架",
    "整理会议纪要，提炼行动项"
  ];

  scenarios.forEach((sc, i) => {
    const y = 2.2 + i * 0.55;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.6, y: y + 0.1, w: 0.25, h: 0.25,
      fill: { color: theme.primary }
    });

    slide.addText(sc, {
      x: 1.0, y: y, w: 4, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 右侧：使用提示
  slide.addShape(pres.ShapeType.roundRect, {
    x: 5.2, y: 1.7, w: 4.3, h: 3.2,
    fill: { color: theme.light },
    rectRadius: 0.1
  });

  slide.addText("使用提示", {
    x: 5.4, y: 1.85, w: 3.9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const tips = [
    "输入越清晰，输出越精准",
    "用它做"消化"而非"记忆"",
    "配合自己的思考框架使用",
    "输出结果要再过一遍大脑"
  ];

  tips.forEach((tip, i) => {
    const y = 2.4 + i * 0.55;

    slide.addText("💡", {
      x: 5.4, y: y, w: 0.4, h: 0.45,
      fontSize: 14,
      align: "center", valign: "middle"
    });

    slide.addText(tip, {
      x: 5.85, y: y, w: 3.5, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 底部提示
  slide.addText("核心价值：帮你把信息变成知识，而不是堆砌信息", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-33-output.pptx" })
    .then(() => console.log("Created: slide-33-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };