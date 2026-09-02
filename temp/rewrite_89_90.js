const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

// slide-89
const content89 = `// slide-89.js - 常见误区
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 89,
  title: '常见误区'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText("常见误区", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("处理老年业主质疑时的4种错误方式", {
    x: 0.5, y: 0.85, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  const mistakes = [
    { title: "直接反驳", desc: "「不会的，AI很准的」——否定业主感受，加剧抵触", color: theme.accent },
    { title: "过度解释", desc: "长篇大论技术原理，业主听不懂反而觉得在敷衍", color: theme.secondary },
    { title: "忽视担忧", desc: "「您想太多了，不会泄露的」——轻描淡写令业主更不信任", color: theme.primary },
    { title: "强制推销", desc: "「必须开通，不然无法享受服务」——剥夺选择权引发愤怒", color: theme.light }
  ];

  mistakes.forEach((m, i) => {
    const y = 1.4 + i * 1.0;
    
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: "FFFFFF" },
      line: { color: m.color, width: 2 },
      rectRadius: 0.1
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.15, h: 0.85,
      fill: { color: m.color }
    });

    slide.addText(m.title, {
      x: 0.85, y: y + 0.1, w: 2, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: m.color, bold: true
    });

    slide.addText(m.desc, {
      x: 0.85, y: y + 0.45, w: 8.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
`;

fs.writeFileSync(path + 'slide-89.js', content89);
try {
  new Function(content89);
  console.log('slide-89: OK');
} catch(e) {
  console.log('slide-89: ' + e.message);
}

// slide-90
const content90 = `// slide-90.js - 成功关键因素
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 90,
  title: '成功关键因素'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText("成功关键因素", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("让老年业主接受AI服务的4个核心要素", {
    x: 0.5, y: 0.85, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  const factors = [
    { num: "01", title: "先听后说", desc: "让业主充分表达担忧，再针对性回应" },
    { num: "02", title: "承认局限", desc: "不夸大AI能力，承诺人工兜底" },
    { num: "03", title: "提供选择", desc: "保留传统方式，让业主自己决定" },
    { num: "04", title: "持续关怀", desc: "定期回访，逐步建立信任" }
  ];

  factors.forEach((f, i) => {
    const x = 0.5 + (i % 2) * 4.6;
    const y = 1.4 + Math.floor(i / 2) * 1.9;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.7,
      fill: { color: "FFFFFF" },
      shadow: { type: 'outer', blur: 4, offset: 2, color: 'rgba(0,0,0,0.06)' },
      rectRadius: 0.1
    });

    slide.addText(f.num, {
      x: x + 0.2, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 24, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    slide.addText(f.title, {
      x: x + 0.9, y: y + 0.25, w: 3.2, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(f.desc, {
      x: x + 0.2, y: y + 0.9, w: 4, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
`;

fs.writeFileSync(path + 'slide-90.js', content90);
try {
  new Function(content90);
  console.log('slide-90: OK');
} catch(e) {
  console.log('slide-90: ' + e.message);
}
