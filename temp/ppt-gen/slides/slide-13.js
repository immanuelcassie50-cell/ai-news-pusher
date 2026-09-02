// slide-13.js - Exercise 1: Change Perception
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise',
  index: 13,
  title: '练习：我的变革感知画像'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("练习：我的变革感知画像", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Exercise instructions
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 3.8,
    fill: { color: theme.light }
  });

  slide.addText("任务：回顾一次你经历过的组织变革，填写以下内容", {
    x: 0.7, y: 1.3, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const questions = [
    "1. 变革启动时，你的第一反应是什么？（震惊/好奇/抵触/担忧…）",
    "2. 当时你最担心的是什么？",
    "3. 变革过程中，什么事情最影响你对变革的态度？",
    "4. 回过头看，什么样的沟通或支持是你当时最需要的？"
  ];

  questions.forEach((q, i) => {
    slide.addText(q, {
      x: 0.7, y: 1.9 + i * 0.7, w: 8.5, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("时间：10分钟  |  形式：个人反思后小组分享（3人一组）", {
    x: 0.7, y: 4.65, w: 8.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-13-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
