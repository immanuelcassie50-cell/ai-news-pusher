import os

path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/'

# Slide 6 - Section Divider
slide6 = '''// slide-06.js - Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 6,
  title: '开篇：为什么AI客服用不起来'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.2, h: 5.625,
    fill: { color: theme.accent }
  });

  // Section number
  slide.addText("00", {
    x: 0.4, y: 1.6, w: 2.4, h: 1.0,
    fontSize: 96, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("SECTION", {
    x: 0.4, y: 2.65, w: 2.4, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", charSpacing: 6
  });

  // Duration badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fill: { color: "FFFFFF", transparency: 20 },
    rectRadius: 0.16
  });

  slide.addText("30分钟", {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  // Main title
  slide.addText("开篇：为什么AI客服用不起来", {
    x: 3.6, y: 2.0, w: 5.6, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  // Subtitle
  slide.addText("AI落地绕不开的人情关", {
    x: 3.6, y: 2.8, w: 5.6, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.6, y: 3.4, w: 0.8, h: 0.04,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(path + 'slide-06.js', 'w', encoding='utf-8') as f:
    f.write(slide6)
print('slide-06 written')

# Slide 7 - Section Divider
slide7 = '''// slide-07.js - Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 7,
  title: '第一部分：信任的四个维度'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.2, h: 5.625,
    fill: { color: theme.accent }
  });

  slide.addText("01", {
    x: 0.4, y: 1.6, w: 2.4, h: 1.0,
    fontSize: 96, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("SECTION", {
    x: 0.4, y: 2.65, w: 2.4, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", charSpacing: 6
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fill: { color: "FFFFFF", transparency: 20 },
    rectRadius: 0.16
  });

  slide.addText("20分钟", {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addText("第一部分：信任的四个维度", {
    x: 3.6, y: 2.0, w: 5.6, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  slide.addText("理解老年业主的信任基础", {
    x: 3.6, y: 2.8, w: 5.6, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.6, y: 3.4, w: 0.8, h: 0.04,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(path + 'slide-07.js', 'w', encoding='utf-8') as f:
    f.write(slide7)
print('slide-07 written')

# Slide 8 - Section Divider
slide8 = '''// slide-08.js - Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 8,
  title: '第二部分：AI落地三步法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.2, h: 5.625,
    fill: { color: theme.accent }
  });

  slide.addText("02", {
    x: 0.4, y: 1.6, w: 2.4, h: 1.0,
    fontSize: 96, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("SECTION", {
    x: 0.4, y: 2.65, w: 2.4, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", charSpacing: 6
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fill: { color: "FFFFFF", transparency: 20 },
    rectRadius: 0.16
  });

  slide.addText("25分钟", {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addText("第二部分：AI落地三步法", {
    x: 3.6, y: 2.0, w: 5.6, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  slide.addText("让老年业主逐步接受AI服务", {
    x: 3.6, y: 2.8, w: 5.6, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.6, y: 3.4, w: 0.8, h: 0.04,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(path + 'slide-08.js', 'w', encoding='utf-8') as f:
    f.write(slide8)
print('slide-08 written')

# Slide 9 - Section Divider
slide9 = '''// slide-09.js - Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 9,
  title: '第三部分：场景话术指南'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.2, h: 5.625,
    fill: { color: theme.accent }
  });

  slide.addText("03", {
    x: 0.4, y: 1.6, w: 2.4, h: 1.0,
    fontSize: 96, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("SECTION", {
    x: 0.4, y: 2.65, w: 2.4, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", charSpacing: 6
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fill: { color: "FFFFFF", transparency: 20 },
    rectRadius: 0.16
  });

  slide.addText("20分钟", {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addText("第三部分：场景话术指南", {
    x: 3.6, y: 2.0, w: 5.6, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  slide.addText("把技术语言翻译成人话", {
    x: 3.6, y: 2.8, w: 5.6, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.6, y: 3.4, w: 0.8, h: 0.04,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(path + 'slide-09.js', 'w', encoding='utf-8') as f:
    f.write(slide9)
print('slide-09 written')

print('Done!')