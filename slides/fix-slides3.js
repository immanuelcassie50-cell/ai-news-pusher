// fix-slides3.js - Fix remaining corrupted slide files
const fs = require('fs');

const slides = {
  'slide-83': `// slide-83.js - 语言重塑练习
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 83, title: '语言重塑练习' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("语言重塑练习", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  slide.addText("把左边的话转换成右边更积极的表达", { x: 0.5, y: 1.1, w: 9, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });

  const exercises = [
    { before: "「你总是这样」", after: "「我看到你这次...」" },
    { before: "「你真笨」", after: "「这件事对你来说有点难」" },
    { before: "「你怎么不听话」", after: "「我理解你想...」" }
  ];

  exercises.forEach((ex, idx) => {
    const y = 1.7 + idx * 1.2;
    slide.addShape("rect", { x: 0.5, y: y, w: 4.2, h: 1.0, fill: { color: theme.accent, transparency: 90 } });
    slide.addText(ex.before, { x: 0.5, y: y, w: 4.2, h: 1.0, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent, bold: true, align: "center", valign: "middle" });
    slide.addText("→", { x: 4.7, y: y, w: 0.6, h: 1.0, fontSize: 24, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
    slide.addShape("rect", { x: 5.3, y: y, w: 4.2, h: 1.0, fill: { color: theme.primary, transparency: 90 } });
    slide.addText(ex.after, { x: 5.3, y: y, w: 4.2, h: 1.0, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-83-preview.pptx" });
}`,

  'slide-85': `// slide-85.js - 语言觉察练习
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 85, title: '语言觉察练习' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("语言觉察练习", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  slide.addText("今天留意你对孩子说的三句话，标记哪些是：", { x: 0.5, y: 1.1, w: 9, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });

  const categories = [
    { label: "描述性语言", color: theme.primary, desc: "描述具体行为的语言" },
    { label: "比较性语言", color: theme.accent, desc: "涉及到与其他人的比较" },
    { label: "评价性语言", color: theme.light, desc: "对孩子品质的评判" }
  ];

  categories.forEach((cat, idx) => {
    const y = 1.7 + idx * 1.1;
    slide.addShape("rect", { x: 0.5, y: y, w: 9, h: 0.9, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 } });
    slide.addShape("rect", { x: 0.5, y: y, w: 0.08, h: 0.9, fill: { color: cat.color } });
    slide.addText(cat.label, { x: 0.8, y: y + 0.1, w: 2.5, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: cat.color, bold: true, align: "left", valign: "middle" });
    slide.addText(cat.desc, { x: 0.8, y: y + 0.5, w: 8.5, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary, bold: false, align: "left", valign: "middle" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-85-preview.pptx" });
}`,

  'slide-87': `// slide-87.js - 语言模式转变
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 87, title: '语言模式转变' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("语言模式转变", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  const transformations = [
    { from: "「你怎么」", to: "「我看到你」", example: "「你怎么不听话」→「我看到你想自己决定」" },
    { from: "「你要像XX一样」", to: "「你有你的特点」", example: "「你要像姐姐一样」→「你有你自己的优点」" },
    { from: "「快点」", to: "「我需要...」", example: "「快点」→「我需要你在5分钟后出门」" }
  ];

  transformations.forEach((t, idx) => {
    const y = 1.2 + idx * 1.35;
    slide.addShape("rect", { x: 0.5, y: y, w: 9, h: 1.2, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 } });
    slide.addText(t.from, { x: 0.7, y: y + 0.15, w: 2.5, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent, bold: true, align: "left", valign: "middle" });
    slide.addText("→", { x: 3.2, y: y + 0.15, w: 0.5, h: 0.45, fontSize: 18, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
    slide.addText(t.to, { x: 3.7, y: y + 0.15, w: 2.5, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "left", valign: "middle" });
    slide.addText(t.example, { x: 0.7, y: y + 0.65, w: 8.5, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.light, bold: false, align: "left", valign: "middle" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-87-preview.pptx" });
}`,

  'slide-94': `// slide-94.js - 日常语言检查
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 94, title: '日常语言检查' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("日常语言检查", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  slide.addText("在开口前问自己三个问题：", { x: 0.5, y: 1.1, w: 9, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });

  const questions = [
    { num: "1", q: "这句话是在描述行为还是在评价人？", tip: "尽量描述具体行为，不给孩子贴标签" },
    { num: "2", q: "这句话会让孩子感到被理解还是被批评？", tip: "先共情，再引导" },
    { num: "3", q: "这句话是在培养竞争还是合作？", tip: "多用「我们」而非「你/他」" }
  ];

  questions.forEach((item, idx) => {
    const y = 1.7 + idx * 1.1;
    slide.addShape("ellipse", { x: 0.5, y: y + 0.15, w: 0.6, h: 0.6, fill: { color: theme.accent } });
    slide.addText(item.num, { x: 0.5, y: y + 0.15, w: 0.6, h: 0.6, fontSize: 18, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addShape("rect", { x: 1.3, y: y, w: 8.2, h: 1.0, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.04 } });
    slide.addText(item.q, { x: 1.5, y: y + 0.1, w: 7.8, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "left", valign: "middle" });
    slide.addText("提示：" + item.tip, { x: 1.5, y: y + 0.55, w: 7.8, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.light, bold: false, align: "left", valign: "middle" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-94-preview.pptx" });
}`,

  'slide-96': `// slide-96.js - 语言建设小结
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 96, title: '语言建设小结' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("语言建设小结", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  const points = [
    { title: "觉察", desc: "注意自己日常语言中的比较和评价" },
    { title: "暂停", desc: "开口前先思考这句话的影响" },
    { title: "转化", desc: "用描述性语言替代评价性语言" },
    { title: "强化", desc: "及时肯定孩子好的行为表现" }
  ];

  points.forEach((p, idx) => {
    const y = 1.2 + idx * 1.0;
    slide.addShape("rect", { x: 0.5, y: y, w: 9, h: 0.85, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 } });
    slide.addShape("rect", { x: 0.5, y: y, w: 1.5, h: 0.85, fill: { color: theme.primary } });
    slide.addText(p.title, { x: 0.5, y: y, w: 1.5, h: 0.85, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(p.desc, { x: 2.2, y: y, w: 7.1, h: 0.85, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: false, align: "left", valign: "middle" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-96-preview.pptx" });
}`,

  'slide-98': `// slide-98.js - 感谢参与
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'ending', index: 98, title: '感谢参与' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addShape("ellipse", { x: -1, y: -1, w: 3, h: 3, fill: { color: theme.accent, transparency: 30 } });
  slide.addShape("ellipse", { x: 8.5, y: 4, w: 2.5, h: 2.5, fill: { color: theme.accent, transparency: 30 } });

  slide.addText("感谢参与", { x: 0.5, y: 1.8, w: 9, h: 1, fontSize: 48, fontFace: "Microsoft YaHei", color: "ffffff", bold: true, align: "center" });
  slide.addText("期待您的家庭从此不同", { x: 0.5, y: 2.9, w: 9, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: "ffffff", align: "center" });

  slide.addShape(pres.shapes.LINE, { x: 3.5, y: 3.7, w: 3, h: 0, line: { color: "ffffff", width: 1.5, transparency: 50 } });
  slide.addText("如有疑问，欢迎与讲师交流", { x: 0.5, y: 4.0, w: 9, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: "ffffff", align: "center" });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-98-preview.pptx" });
}`,

  'slide-103': `// slide-103.js - 常见问题Q4
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 103, title: '常见问题' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.06, fill: { color: theme.accent } });
  slide.addText("常见问题", { x: 0.5, y: 0.35, w: 9, h: 0.65, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });

  slide.addShape("rect", { x: 0.5, y: 1.2, w: 9, h: 1.2, fill: { color: theme.primary } });
  slide.addText("Q4", { x: 0.7, y: 1.35, w: 0.8, h: 0.5, fontSize: 24, fontFace: "Arial", color: "ffffff", bold: true });
  slide.addText("青春期孩子拒绝沟通怎么办？", { x: 1.5, y: 1.35, w: 7.8, h: 0.9, fontSize: 22, fontFace: "Microsoft YaHei", color: "ffffff", bold: true, valign: "middle" });

  slide.addShape("rect", { x: 0.5, y: 2.6, w: 9, h: 2.2, fill: { color: "ffffff" }, shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.06 } });
  slide.addText("A", { x: 0.7, y: 2.8, w: 0.8, h: 0.5, fontSize: 24, fontFace: "Arial", color: theme.accent, bold: true });
  slide.addText("降低姿态，用「顺便」代替「专门」", { x: 1.5, y: 2.8, w: 7.8, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "不要刻意安排「谈话时间」", options: { bullet: true, breakLine: true } },
    { text: "利用日常场景自然交流（开车、做饭、散步）", options: { bullet: true, breakLine: true } },
    { text: "先倾听，不急于给建议", options: { bullet: true, breakLine: true } },
    { text: "尊重沉默，给孩子思考空间", options: { bullet: true } }
  ], { x: 1.5, y: 3.4, w: 7.8, h: 1.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-103-preview.pptx" });
}`,

  'slide-105': `// slide-105.js - 常见问题Q2
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 105, title: '常见问题' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.06, fill: { color: theme.accent } });
  slide.addText("常见问题", { x: 0.5, y: 0.35, w: 9, h: 0.65, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });

  slide.addShape("rect", { x: 0.5, y: 1.2, w: 9, h: 1.2, fill: { color: theme.primary } });
  slide.addText("Q2", { x: 0.7, y: 1.35, w: 0.8, h: 0.5, fontSize: 24, fontFace: "Arial", color: "ffffff", bold: true });
  slide.addText("老人干预比较孩子怎么办？", { x: 1.5, y: 1.35, w: 7.8, h: 0.9, fontSize: 22, fontFace: "Microsoft YaHei", color: "ffffff", bold: true, valign: "middle" });

  slide.addShape("rect", { x: 0.5, y: 2.6, w: 9, h: 2.2, fill: { color: "ffffff" }, shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.06 } });
  slide.addText("A", { x: 0.7, y: 2.8, w: 0.8, h: 0.5, fontSize: 24, fontFace: "Arial", color: theme.accent, bold: true });
  slide.addText("与老人沟通，明确教育边界", { x: 1.5, y: 2.8, w: 7.8, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "私下与老人沟通，表达感激", options: { bullet: true, breakLine: true } },
    { text: "解释比较对孩子的伤害", options: { bullet: true, breakLine: true } },
    { text: "提出具体的替代语言", options: { bullet: true, breakLine: true } },
    { text: "邀请老人成为「表扬者」而非「比较者」", options: { bullet: true } }
  ], { x: 1.5, y: 3.4, w: 7.8, h: 1.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-105-preview.pptx" });
}`
};

Object.entries(slides).forEach(([name, content]) => {
  fs.writeFileSync(name + '.js', content);
  console.log('Written', name + '.js');
});