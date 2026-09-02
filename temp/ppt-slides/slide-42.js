// slide-42.js - 工具选择的关键判断
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "工具选择的关键判断",
  pageNumber: 42,
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

  // 标题
  slide.addText("工具选择的关键判断", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.9, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 判断框架
  const decisions = [
    {
      question: "你要做什么？",
      options: [
        { choice: "找信息", answer: "秘塔AI" },
        { choice: "理解信息", answer: "得到大脑" },
        { choice: "分析问题", answer: "千问3.7Max" }
      ]
    },
    {
      question: "输出要什么形式？",
      options: [
        { choice: "文档/PPT", answer: "腾讯WorkBuddy" },
        { choice: "数据图表", answer: "办公小浣熊" },
        { choice: "图片/视频", answer: "豆包" },
        { choice: "代码/技术", answer: "DeepSeek" }
      ]
    }
  ];

  const decisionY = 1.2;
  const decisionHeight = 1.9;
  const decisionGap = 0.3;

  decisions.forEach((dec, i) => {
    const y = decisionY + i * (decisionHeight + decisionGap);

    // 决策卡片
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 9, h: decisionHeight,
      fill: { color: theme.light },
      rectRadius: 0.1
    });

    // 问题
    slide.addText(dec.question, {
      x: 0.7, y: y + 0.15, w: 8.6, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 选项
    const optionWidth = 2.1;
    const optionHeight = 1.0;
    const optionStartX = 0.7;
    const optionY = y + 0.7;
    const optionGap = 0.25;

    dec.options.forEach((opt, j) => {
      const optX = optionStartX + j * (optionWidth + optionGap);

      // 选项卡片
      slide.addShape(pres.ShapeType.roundRect, {
        x: optX, y: optionY, w: optionWidth, h: optionHeight,
        fill: { color: "FFFFFF" },
        rectRadius: 0.06
      });

      // 选择标签
      slide.addShape(pres.ShapeType.roundRect, {
        x: optX + 0.1, y: optionY + 0.1, w: 0.9, h: 0.3,
        fill: { color: theme.accent },
        rectRadius: 0.04
      });

      slide.addText(opt.choice, {
        x: optX + 0.1, y: optionY + 0.1, w: 0.9, h: 0.3,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: "FFFFFF",
        align: "center", valign: "middle"
      });

      // 答案
      slide.addText(opt.answer, {
        x: optX + 0.1, y: optionY + 0.5, w: optionWidth - 0.2, h: 0.45,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        align: "center", valign: "middle"
      });
    });
  });

  // 底部提示
  slide.addText("从任务目标出发，而不是从工具能力出发", {
    x: 0.5, y: 5.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-42-output.pptx" })
    .then(() => console.log("Created: slide-42-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };