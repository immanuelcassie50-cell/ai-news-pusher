// slide-07.js - 输入环节：你给AI什么
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '输入环节：你给AI什么'
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
  slide.addText("输入环节：你给AI什么", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 三个要素卡片
  const elements = [
    { title: "背景信息", desc: "谁的任务、用在哪里、什么场合", color: "FFF0F0" },
    { title: "要求", desc: "这一轮只做一件事，不要贪心", color: "F0FFF0" },
    { title: "格式要求", desc: "表格还是段落？中文还是中英对照？长度？", color: "F0F0FF" }
  ];

  elements.forEach((el, idx) => {
    const xPos = 0.5 + idx * 3.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 1.3, w: 2.9, h: 2.2,
      fill: { color: el.color },
      rectRadius: 0.1
    });
    slide.addShape(pres.shapes.OVAL, {
      x: xPos + 1.15, y: 1.5, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(String(idx + 1), {
      x: xPos + 1.15, y: 1.5, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(el.title, {
      x: xPos + 0.2, y: 2.2, w: 2.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(el.desc, {
      x: xPos + 0.2, y: 2.7, w: 2.5, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });
  });

  // 底部提示
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addText("缺一不可", {
    x: 0.7, y: 4.15, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText([
    { text: "要求清楚但没有背景：", options: { bold: true } },
    { text: "AI按通用理解来做，可能不是你想要的", options: { breakLine: true } },
    { text: "有背景但没有格式要求：", options: { bold: true } },
    { text: "AI给你的输出可能你根本用不上" }
  ], {
    x: 0.7, y: 4.55, w: 8.6, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "./output/slide-07-preview.pptx" });
}

module.exports = { createSlide, slideConfig };