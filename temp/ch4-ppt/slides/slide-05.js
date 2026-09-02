// slide-05.js - 多轮对话的正确节奏
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '多轮对话的正确节奏'
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
  slide.addText("多轮对话的正确节奏", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 三轮循环图示
  const rounds = [
    { num: "第1轮", title: "给背景和方向", desc: "获取初步框架\n确认方向没跑偏" },
    { num: "第2轮", title: "针对某一部分深化", desc: "补充更具体的信息\n扩展内容" },
    { num: "第3轮", title: "修正问题", desc: "调整格式和语言\n收尾" }
  ];

  rounds.forEach((round, idx) => {
    const xPos = 0.8 + idx * 3.2;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 1.4, w: 2.8, h: 2.8,
      fill: { color: "FFFFFF" },
      rectRadius: 0.12
    });

    slide.addShape(pres.shapes.OVAL, {
      x: xPos + 1, y: 1.6, w: 0.8, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText(round.num, {
      x: xPos + 1, y: 1.6, w: 0.8, h: 0.8,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(round.title, {
      x: xPos + 0.2, y: 2.5, w: 2.4, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(round.desc, {
      x: xPos + 0.2, y: 3.1, w: 2.4, h: 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });

    if (idx < 2) {
      slide.addText("→", {
        x: xPos + 2.85, y: 2.5, w: 0.4, h: 0.5,
        fontSize: 28, fontFace: "Arial",
        color: theme.primary, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // 底部说明
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.9,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("这三轮不是三次重新开始，是同一条线上的推进", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.7,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "./output/slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };