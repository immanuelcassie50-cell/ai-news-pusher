// slide-23.js - Content: 章节回顾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 23,
  title: '章节回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("章节回顾", {
    x: 0.5, y: 0.3, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Chapter summary cards
  const chapters = [
    { num: "第一章", title: "工具体系", focus: "5个工具的能力边界" },
    { num: "第二章", title: "场景定位", focus: "判断什么场景用AI" },
    { num: "第三章", title: "任务分解链", focus: "把任务拆解成步骤" },
    { num: "第四章", title: "多轮对话", focus: "用对话深挖任务" },
    { num: "第五章", title: "工具协同与格式", focus: "工具间如何流转" }
  ];

  chapters.forEach((ch, i) => {
    const xPos = 0.5 + i * 1.85;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 0.9, w: 1.7, h: 2.2,
      fill: { color: i === 4 ? theme.primary : "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number
    slide.addText(ch.num, {
      x: xPos, y: 1.0, w: 1.7, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: i === 4 ? "FFFFFF" : theme.secondary,
      align: "center"
    });

    // Title
    slide.addText(ch.title, {
      x: xPos, y: 1.45, w: 1.7, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: i === 4 ? "FFFFFF" : theme.primary, bold: true,
      align: "center"
    });

    // Focus
    slide.addText(ch.focus, {
      x: xPos + 0.1, y: 2.0, w: 1.5, h: 0.9,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: i === 4 ? "FFFFFF" : theme.secondary,
      align: "center"
    });
  });

  // Highlight box for this chapter
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.3, w: 9.0, h: 2.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("第五章解决了什么问题", {
    x: 0.7, y: 3.4, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "当一个任务需要不止一个工具来完成时，工具之间怎么交接", options: { bullet: true, breakLine: true } },
    { text: "格式怎么处理，信息怎么不丢失", options: { bullet: true, breakLine: true } },
    { text: "任务分解链补全[工具路由]这一列", options: { bullet: true } }
  ], {
    x: 0.7, y: 3.95, w: 8.6, h: 1.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };