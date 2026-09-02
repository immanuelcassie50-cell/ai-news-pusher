// D-17 可复制性论证
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 14,
  title: '可复制性论证'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("为什么这套方法能被复制", {
    x: 0.6, y: 0.4, w: 8, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("5 维可复制性 · 从示范到全公司推广的可行性", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  const points = [
    { t: "方法论通用", d: "业务问题诊断 → AI 方案 → 提示词 → 效果对比 → 点评，5 步可复用到任何 AI 场景" },
    { t: "提示词可换皮", d: "四段式（角色/背景/目标/约束）结构不变，岗位和工具变量可替换" },
    { t: "工具无依赖", d: "提示词不依赖数智小西特定功能，换工具也能跑" },
    { t: "安全内置", d: "脱敏规则+红黄绿灯写进约束条，不靠人记" },
    { t: "评分可量化", d: "5 档 25 分制 + 5 维 5 类评委，避免主观评分争议" }
  ];
  points.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.6 + col * 4.5;
    const y = 1.9 + row * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.3, h: 0.9,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(String(i + 1), {
      x: x + 0.15, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(p.t, {
      x: x + 0.75, y: y + 0.1, w: 3.5, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(p.d, {
      x: x + 0.75, y: y + 0.45, w: 3.5, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.85, w: 8.8, h: 0.4,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("评的不是「这堂课好不好」，是「这个方法能不能被复制」", {
    x: 0.6, y: 4.85, w: 8.8, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("14", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "003D7A", secondary: "333333", accent: "00A0E9",
    light: "F4F6F9", bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-14-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
