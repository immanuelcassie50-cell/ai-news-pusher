// slide-45.js - M3 内容地图
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 45, title: 'M3 内容地图' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 本模块地图", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("谈判前准备 · 五个核心动作", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const items = [
    { n: "01", t: "BATNA", d: "最佳替代方案——决定你议价能力的根源" },
    { n: "02", t: "三个数字", d: "期望值 / 底线 / BATNA 的具体计算" },
    { n: "03", t: "六张牌", d: "时间 / 信息 / 关系 / 退路 / 灵活 / 专业——可交换筹码" },
    { n: "04", t: "八步准备", d: "从接到通知到坐下谈判的完整流程" },
    { n: "05", t: "现场演练", d: "拿一个真实谈判走完全套准备" }
  ];

  items.forEach((it, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 1.55 + row * 1.05;
    slide.addShape("rect", {
      x: x, y: y, w: 4.5, h: 0.95,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: y, w: 0.08, h: 0.95,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(it.n, {
      x: x + 0.2, y: y + 0.1, w: 0.6, h: 0.4,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(it.t, {
      x: x + 0.9, y: y + 0.1, w: 3.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(it.d, {
      x: x + 0.9, y: y + 0.45, w: 3.5, h: 0.5,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, lineSpacing: 13
    });
  });

  // Bottom bar
  slide.addShape("rect", {
    x: 0.4, y: 4.85, w: 9.2, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("时长：2-2.5 小时  |  工具：准备表（每个学员带一份回去）", {
    x: 0.5, y: 4.85, w: 8.5, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("45", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-45-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
