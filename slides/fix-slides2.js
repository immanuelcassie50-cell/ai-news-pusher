// fix-slides2.js - Fix more corrupted slide files
const fs = require('fs');

const slides = {
  'slide-76': `// slide-76.js - 家庭语言公约（第1页）
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 76, title: '家庭语言公约' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("家庭语言公约（第1页）", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  slide.addText("这些语言要避免", { x: 0.5, y: 1.1, w: 9, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.accent, bold: true, align: "left", valign: "middle" });

  const avoidItems = [
    "「你看看你哥哥」——比较性语言",
    "「你是哥哥/姐姐，应该让着」——角色绑架",
    "「你怎么不如XX」——否定性语言",
    "「你不听话我就不喜欢你了」——威胁性语言"
  ];

  avoidItems.forEach((item, idx) => {
    const y = 1.8 + idx * 0.85;
    slide.addShape("rect", { x: 0.5, y: y, w: 9, h: 0.7, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 } });
    slide.addShape("rect", { x: 0.5, y: y, w: 0.08, h: 0.7, fill: { color: theme.accent } });
    slide.addText(item, { x: 0.8, y: y, w: 8.5, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: false, align: "left", valign: "middle" });
  });

  slide.addShape("rect", { x: 0.5, y: 5.0, w: 9, h: 0.45, fill: { color: theme.accent, transparency: 90 } });
  slide.addText("下一页：我们可以用的语言", { x: 0.5, y: 5.0, w: 9, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true, align: "center", valign: "middle" });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-76-preview.pptx" });
}`,

  'slide-77': `// slide-77.js - 家庭语言公约（第2页）
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 77, title: '家庭语言公约' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("家庭语言公约（第2页）", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  slide.addText("我们可以用的语言", { x: 0.5, y: 1.1, w: 9, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "left", valign: "middle" });

  const useItems = [
    "「我看到你...」——描述具体行为",
    "「我理解你的感受」——表达共情",
    "「我们一起想办法」——合作思维",
    "「我爱你，因为你是你」——无条件的爱"
  ];

  useItems.forEach((item, idx) => {
    const y = 1.8 + idx * 0.85;
    slide.addShape("rect", { x: 0.5, y: y, w: 9, h: 0.7, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 } });
    slide.addShape("rect", { x: 0.5, y: y, w: 0.08, h: 0.7, fill: { color: theme.primary } });
    slide.addText(item, { x: 0.8, y: y, w: 8.5, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: false, align: "left", valign: "middle" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-77-preview.pptx" });
}`,

  'slide-78': `// slide-78.js - 制定家庭语言公约
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 78, title: '制定家庭语言公约' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("制定家庭语言公约", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  const steps = [
    { num: "1", title: "全家讨论", desc: "一起讨论哪些语言让我们不舒服" },
    { num: "2", title: "共同制定", desc: "每个人都提出自己希望的表达方式" },
    { num: "3", title: "书面记录", desc: "把公约写下来，贴在显眼处" },
    { num: "4", title: "互相提醒", desc: "违反时温和提醒，不批评指责" },
    { num: "5", title: "定期回顾", desc: "每月回顾，根据情况调整" }
  ];

  const cardWidth = 9, cardHeight = 0.75, startX = 0.5, startY = 1.15, gap = 0.15;

  steps.forEach((step, idx) => {
    const y = startY + idx * (cardHeight + gap);
    slide.addShape("ellipse", { x: startX + 0.15, y: y + 0.12, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(step.num, { x: startX + 0.15, y: y + 0.12, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addShape("rect", { x: startX + 0.85, y: y, w: 2.2, h: cardHeight, fill: { color: theme.primary } });
    slide.addText(step.title, { x: startX + 0.85, y: y, w: 2.2, h: cardHeight, fontSize: 15, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addShape("rect", { x: startX + 3.2, y: y, w: cardWidth - 3.35, h: cardHeight, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.04 } });
    slide.addText(step.desc, { x: startX + 3.4, y: y, w: cardWidth - 3.55, h: cardHeight, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, bold: false, align: "left", valign: "middle" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-78-preview.pptx" });
}`,

  'slide-79': `// slide-79.js - 练习：创建语言公约
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'exercise', index: 79, title: '练习：创建语言公约' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("练习：创建语言公约", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  slide.addText("和家人一起制定你们的家庭语言公约", { x: 0.5, y: 1.1, w: 9, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });

  const sections = [
    { title: "我们避免说...", lines: 3 },
    { title: "我们更喜欢说...", lines: 3 },
    { title: "我们的约定是...", lines: 3 }
  ];

  sections.forEach((section, idx) => {
    const y = 1.7 + idx * 1.15;
    slide.addShape("rect", { x: 0.5, y: y, w: 9, h: 1.0, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 } });
    slide.addShape("rect", { x: 0.5, y: y, w: 0.08, h: 1.0, fill: { color: theme.accent } });
    slide.addText(section.title, { x: 0.8, y: y + 0.1, w: 8.5, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "left", valign: "middle" });
    for (let i = 0; i < section.lines; i++) {
      slide.addShape("rect", { x: 0.8, y: y + 0.55 + i * 0.12, w: 8.4, h: 0.02, fill: { color: theme.light, transparency: 50 } });
    }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-79-preview.pptx" });
}`,

  'slide-80': `// slide-80.js - 模块五核心要点
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 80, title: '模块五核心要点' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("模块五核心要点", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  const takeaways = [
    { num: "1", title: "觉察语言", desc: "注意自己日常使用的语言是否有比较性" },
    { num: "2", title: "替换表达", desc: "用描述性语言替代评价性语言" },
    { num: "3", title: "合作思维", desc: "用「我们」替代「你/他」，培养团队感" },
    { num: "4", title: "家庭公约", desc: "全家人共同制定并遵守语言约定" }
  ];

  const cardWidth = 4.4, cardHeight = 1.6, startX = 0.5, startY = 1.2, gapX = 0.3, gapY = 0.25;

  takeaways.forEach((item, idx) => {
    const col = idx % 2, row = Math.floor(idx / 2), x = startX + col * (cardWidth + gapX), y = startY + row * (cardHeight + gapY);
    slide.addShape("rect", { x: x, y: y, w: cardWidth, h: cardHeight, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 } });
    slide.addShape("ellipse", { x: x + 0.2, y: y + 0.2, w: 0.6, h: 0.6, fill: { color: theme.accent } });
    slide.addText(item.num, { x: x + 0.2, y: y + 0.2, w: 0.6, h: 0.6, fontSize: 18, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(item.title, { x: x + 1.0, y: y + 0.25, w: 3.2, h: 0.5, fontSize: 17, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "left", valign: "middle" });
    slide.addText(item.desc, { x: x + 0.2, y: y + 0.9, w: 4, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary, bold: false, align: "left", valign: "top" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-80-preview.pptx" });
}`
};

Object.entries(slides).forEach(([name, content]) => {
  fs.writeFileSync(name + '.js', content);
  console.log('Written', name + '.js');
});