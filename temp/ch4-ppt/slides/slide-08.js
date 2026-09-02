// slide-08.js - 判断环节：30秒三问
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 8,
  title: '判断环节：30秒三问'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧红色装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("判断环节：30秒三问", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 核心提示
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("收到AI输出后，花30秒做三件事", {
    x: 0.7, y: 1.3, w: 8.6, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 三个问题
  const questions = [
    { q: "方向对不对？", sub: "确认输出是否符合你的预期方向" },
    { q: "有没有明显遗漏？", sub: "检查关键信息是否缺失" },
    { q: "下一步怎么走？", sub: "深化 / 纠偏 / 收尾" }
  ];

  questions.forEach((item, idx) => {
    const yPos = 2.2 + idx * 1.0;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: yPos, w: 0.7, h: 0.7,
      fill: { color: theme.secondary }
    });
    slide.addText("?", {
      x: 0.7, y: yPos, w: 0.7, h: 0.7,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(item.q, {
      x: 1.6, y: yPos, w: 3, h: 0.45,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(item.sub, {
      x: 1.6, y: yPos + 0.4, w: 5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "left", valign: "middle"
    });
  });

  // 底部警告
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.5, y: 2.4, w: 4, h: 2.4,
    fill: { color: "FFF0F0" },
    rectRadius: 0.1
  });
  slide.addText("不要", {
    x: 5.7, y: 2.55, w: 1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("一收到输出就直接复制粘贴，这30秒的判断防止你把错误的输出带到下一步", {
    x: 5.7, y: 3.0, w: 3.6, h: 1.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };