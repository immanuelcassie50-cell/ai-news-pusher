// 页 141: 列表 - 突破性三问
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 141,
  title: '突破性三问'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("判断突破性  /  Three Questions", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("判断突破性的三个问题", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个问题卡片
  const questions = [
    {
      num: "1",
      q: "如果三年前有人想到这个方案，为什么没有做？",
      a: "如果答案是「不知道，可能只是被遗漏了」—— 那这只是个被忽视的常规方案，不是真正突破性的方向。"
    },
    {
      num: "2",
      q: "它改变的是症状，还是产生症状的系统条件？",
      a: "改变系统条件的方案，才是真正有突破性的。改症状是治标，改系统条件才是治本。"
    },
    {
      num: "3",
      q: "做了这个方案，哪些其他问题会顺带被解决？",
      a: "真正有系统性的方案会产生「顺带解决」的效应 —— 它改变的是更底层的条件，而不只是一个表面的问题。"
    }
  ];

  questions.forEach((q, i) => {
    const y = 1.55 + i * 1.18;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.05,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 数字圆
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.2, w: 0.65, h: 0.65,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(q.num, {
      x: 0.7, y: y + 0.2, w: 0.65, h: 0.65,
      fontSize: 24, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 问题
    slide.addText(q.q, {
      x: 1.55, y: y + 0.1, w: 7.8, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 答案
    slide.addText(q.a, {
      x: 1.55, y: y + 0.5, w: 7.8, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "141", "第四五章 从候选到落地");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 0.5, y: 5.46, w: 5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'left', valign: 'middle', margin: 0
  });
  slide.addText(sectionName, {
    x: 6, y: 5.46, w: 3.5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'right', valign: 'middle', margin: 0
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "6B0F0F",
    secondary: "3D3D3D",
    accent:    "B8232C",
    light:     "D4C5BE",
    bg:        "F5F0EC"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "141_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
