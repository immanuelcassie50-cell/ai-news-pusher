// fix-slides.js - Fix corrupted slide files
const fs = require('fs');

const slides = {
  'slide-72': `// slide-72.js - 参考答案
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 72, title: '参考答案' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("参考答案", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  const answers = [
    { num: "1", before: "「你弟弟都比你强」", after: "「我看到你在努力，这次比上次进步了3分」" },
    { num: "2", before: "「你怎么不学学姐姐」", after: "「你也有自己的长处，比如画画时很专注」" },
    { num: "3", before: "「他们都能做到，你为什么不行」", after: "「这件事对你来说有点难，我们一起想办法」" }
  ];

  const cardWidth = 9, cardHeight = 1.2, startX = 0.5, startY = 1.1, gap = 0.15;

  answers.forEach((item, idx) => {
    const y = startY + idx * (cardHeight + gap);
    slide.addShape("rect", { x: startX, y: y, w: cardWidth, h: cardHeight, fill: { color: "FFFFFF" }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 } });
    slide.addShape("ellipse", { x: startX + 0.2, y: y + 0.35, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(item.num, { x: startX + 0.2, y: y + 0.35, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText("Before: " + item.before, { x: startX + 0.9, y: y + 0.15, w: cardWidth - 1.1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: false, align: "left", valign: "middle" });
    slide.addText("After: " + item.after, { x: startX + 0.9, y: y + 0.55, w: cardWidth - 1.1, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "left", valign: "middle" });
  });

  slide.addShape("rect", { x: 0.5, y: 4.7, w: 9, h: 0.7, fill: { color: theme.primary, transparency: 90 } });
  slide.addText("核心原则：描述具体行为，表达信任和支持", { x: 0.5, y: 4.7, w: 9, h: 0.7, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-72-preview.pptx" });
}`,

  'slide-73': `// slide-73.js - 合作性框架
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 73, title: '合作性框架' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("合作性框架", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  const concepts = [
    { icon: "→", title: "从竞争到合作", desc: "不再是「你输我赢」，而是「共赢思维」" },
    { icon: "＆", title: "「我们」vs「你/他」", desc: "用「我们」代替「你」和「他」，增强归属感" },
    { icon: "◎", title: "共同目标", desc: "设立全家共同目标，促进团队协作" }
  ];

  const cardWidth = 2.9, cardHeight = 3.5, startX = 0.5, cardY = 1.2, gap = 0.35;

  concepts.forEach((concept, idx) => {
    const x = startX + idx * (cardWidth + gap);
    slide.addShape("rect", { x: x, y: cardY, w: cardWidth, h: cardHeight, fill: { color: "FFFFFF" }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 } });
    slide.addShape("rect", { x: x, y: cardY, w: cardWidth, h: 0.08, fill: { color: theme.accent } });
    slide.addShape("ellipse", { x: x + (cardWidth - 0.9) / 2, y: cardY + 0.4, w: 0.9, h: 0.9, fill: { color: theme.primary } });
    slide.addText(concept.icon, { x: x + (cardWidth - 0.9) / 2, y: cardY + 0.4, w: 0.9, h: 0.9, fontSize: 28, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(concept.title, { x: x + 0.15, y: cardY + 1.5, w: cardWidth - 0.3, h: 0.7, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "center", valign: "middle" });
    slide.addText(concept.desc, { x: x + 0.15, y: cardY + 2.2, w: cardWidth - 0.3, h: 1.1, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.light, bold: false, align: "center", valign: "top" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-73-preview.pptx" });
}`,

  'slide-74': `// slide-74.js - 合作性语言示例
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 74, title: '合作性语言示例' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("合作性语言示例", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });
  slide.addText("用「我们」开始，让每个孩子感受到团队归属感", { x: 0.5, y: 1.1, w: 9, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });

  const examples = [
    { phrase: "「我们可以怎么一起玩？」", scenario: "争抢玩具时" },
    { phrase: "「谁来照顾玩具熊？」", scenario: "分配责任时" },
    { phrase: "「怎么分配零食让每个人都开心？」", scenario: "分享食物时" },
    { phrase: "「我们一起想办法解决这个问题吧」", scenario: "发生冲突时" }
  ];

  const cardWidth = 4.4, cardHeight = 1.3, startX = 0.5, startY = 1.65, gapX = 0.3, gapY = 0.2;

  examples.forEach((ex, idx) => {
    const col = idx % 2, row = Math.floor(idx / 2), x = startX + col * (cardWidth + gapX), y = startY + row * (cardHeight + gapY);
    slide.addShape("rect", { x: x, y: y, w: cardWidth, h: cardHeight, fill: { color: "FFFFFF" }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 } });
    slide.addShape("rect", { x: x, y: y, w: 0.08, h: cardHeight, fill: { color: theme.primary } });
    slide.addText(ex.phrase, { x: x + 0.2, y: y + 0.2, w: cardWidth - 0.4, h: 0.7, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });
    slide.addShape("roundRect", { x: x + 0.2, y: y + 0.9, w: 1.8, h: 0.3, fill: { color: theme.accent, transparency: 80 }, rectRadius: 0.05 });
    slide.addText(ex.scenario, { x: x + 0.2, y: y + 0.9, w: 1.8, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.accent, bold: false, align: "center", valign: "middle" });
  });

  slide.addShape("rect", { x: 0.5, y: 4.9, w: 9, h: 0.5, fill: { color: theme.primary, transparency: 92 } });
  slide.addText("合作性语言让孩子学会思考「我们」而非「我」，培养团队精神", { x: 0.5, y: 4.9, w: 9, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: false, align: "center", valign: "middle" });
  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-74-preview.pptx" });
}`,

  'slide-75': `// slide-75.js - 竞争vs合作框架
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 75, title: '竞争vs合作框架' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("竞争vs合作框架", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  slide.addShape("ellipse", { x: 4.5, y: 2.5, w: 1, h: 1, fill: { color: theme.accent } });
  slide.addText("VS", { x: 4.5, y: 2.5, w: 1, h: 1, fontSize: 18, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  slide.addShape("rect", { x: 0.5, y: 1.2, w: 3.8, h: 3.8, fill: { color: "FFFFFF" }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 } });
  slide.addShape("rect", { x: 0.5, y: 1.2, w: 3.8, h: 0.6, fill: { color: theme.accent } });
  slide.addText("竞争框架", { x: 0.5, y: 1.2, w: 3.8, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const competitionItems = ["你输我赢的思维", "「你要超过他」", "「你怎么不如别人」", "比较和排名", "嫉妒和怨恨"];
  competitionItems.forEach((item, idx) => {
    slide.addText("• " + item, { x: 0.7, y: 1.95 + idx * 0.55, w: 3.4, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: false, align: "left", valign: "middle" });
  });

  slide.addShape("rect", { x: 5.7, y: 1.2, w: 3.8, h: 3.8, fill: { color: "FFFFFF" }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 } });
  slide.addShape("rect", { x: 5.7, y: 1.2, w: 3.8, h: 0.6, fill: { color: theme.primary } });
  slide.addText("合作框架", { x: 5.7, y: 1.2, w: 3.8, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const cooperationItems = ["共赢的思维", "「我们一起」", "「你能帮帮他吗」", "互相支持和鼓励", "团队荣誉感"];
  cooperationItems.forEach((item, idx) => {
    slide.addText("• " + item, { x: 5.9, y: 1.95 + idx * 0.55, w: 3.4, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: false, align: "left", valign: "middle" });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C41E3A", secondary: "2b2d42", accent: "ef233c", light: "8d99ae", bg: "f8f9fa" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-75-preview.pptx" });
}`
};

Object.entries(slides).forEach(([name, content]) => {
  fs.writeFileSync(name + '.js', content);
  console.log('Written', name + '.js');
});