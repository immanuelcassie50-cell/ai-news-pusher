// slide-02.js - 目录页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("目录", {
    x: 0.5, y: 0.4, w: 3, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // 章节数据
  const chapters = [
    { num: "01", title: "多轮对话的底层节奏", sub: "输入 → 生成 → 判断 → 迭代" },
    { num: "02", title: "四种对话模式", sub: "逐步收敛型 / 分步执行型 / 角色锁定型 / 检验驱动型" },
    { num: "03", title: "每个环节，你要做什么", sub: "输入 / 生成 / 判断 / 迭代 / 收尾" },
    { num: "04", title: "常见跑偏与救场话术", sub: "方向偏了 / 信息有误 / 太宽泛 / 太冗长" }
  ];

  const leftChapters = chapters.slice(0, 2);
  const rightChapters = chapters.slice(2);

  leftChapters.forEach((ch, i) => {
    const y = 1.5 + i * 1.6;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.primary },
      rectRadius: 0.08
    });
    slide.addText(ch.num, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(ch.title, {
      x: 1.4, y: y + 0.05, w: 3.5, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(ch.sub, {
      x: 1.4, y: y + 0.45, w: 3.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  rightChapters.forEach((ch, i) => {
    const y = 1.5 + i * 1.6;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.2, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.primary },
      rectRadius: 0.08
    });
    slide.addText(ch.num, {
      x: 5.2, y: y, w: 0.7, h: 0.7,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(ch.title, {
      x: 6.1, y: y + 0.05, w: 3.5, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(ch.sub, {
      x: 6.1, y: y + 0.45, w: 3.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C43C3C",
    secondary: "4A4A4A",
    accent: "C43C3C",
    light: "888888",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };