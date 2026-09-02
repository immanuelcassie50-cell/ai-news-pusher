const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-71.js';

const content = `// slide-71.js - 场景一：情境介绍
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 71,
  title: '场景一：情境'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部场景标识条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.accent }
  });

  slide.addText("场景一", {
    x: 0.5, y: 0.15, w: 2, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("「我不想刷脸」", {
    x: 2.5, y: 0.15, w: 7, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // 人物卡片
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 3.5, h: 2.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.12
  });

  // 人物头像占位圆
  slide.addShape(pres.shapes.OVAL, {
    x: 1.5, y: 1.5, w: 1.5, h: 1.5,
    fill: { color: theme.bg },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("王阿姨", {
    x: 1.5, y: 1.85, w: 1.5, h: 0.8,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  slide.addText("68岁", {
    x: 0.7, y: 3.1, w: 3.1, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText("独居老人 | 3年住户", {
    x: 0.7, y: 3.45, w: 3.1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // 情境描述卡片
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.3, y: 1.2, w: 5.2, h: 2.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1.5 },
    rectRadius: 0.12
  });

  slide.addText("情境描述", {
    x: 4.5, y: 1.35, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });

  slide.addText([
    { text: "王阿姨来物业前台办理门禁卡更新，", options: { breakLine: true } },
    { text: "工作人员告知需要先「刷脸」录入人脸信息。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "王阿姨当场拒绝：", options: { breakLine: true } },
    { text: "「我又不犯法为什么要刷脸？", options: { breakLine: true } },
    { text: "我的脸被你们收去干什么用了？」", options: {} }
  ], {
    x: 4.5, y: 1.8, w: 4.8, h: 2.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 核心担忧
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.9,
    fill: { color: theme.accent, transparency: 10 },
    rectRadius: 0.1
  });

  slide.addText("核心担忧：隐私安全 + 选择权被剥夺感", {
    x: 0.7, y: 4.5, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
`;

fs.writeFileSync(path, content);
try {
  new Function(content);
  console.log('slide-71: OK');
} catch(e) {
  console.log('slide-71: ' + e.message);
}
