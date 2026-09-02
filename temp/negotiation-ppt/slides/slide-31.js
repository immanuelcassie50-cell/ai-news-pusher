// slide-31.js - 提问技术总览
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 31, title: '提问技术总览' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 提问技术：挖掘利益的工具箱", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("三件套提问：探询 / 标签 / 假设", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("开放式探索 → 命名情感 → 假设情境——挖到利益的三个动作", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  const techs = [
    {
      n: "01",
      t: "探询式提问",
      en: "Open-ended Inquiry",
      d: "目的是打开信息，不验证自己假设。",
      ex: "\"能多告诉我一些您的想法吗？\"  \n\"您为什么觉得这个特别重要？\"  \n\"如果只能选一个标准，会是什么？\"",
      pitfall: "常见错误：把\"探询\"做成\"诱导\"——一开始就奔向自己的答案。"
    },
    {
      n: "02",
      t: "标签式提问",
      en: "Labeling",
      d: "把你猜测到的对方情绪/动机命名出来，请对方纠正。",
      ex: "\"听起来您担心的是交付质量？\"  \n\"我猜您其实是希望被看见，对吗？\"",
      pitfall: "猜对对方会放松；猜错对方会纠正——都是好事。"
    },
    {
      n: "03",
      t: "假设式提问",
      en: "Hypothetical",
      d: "用假设场景把对方从立场拉到利益。",
      ex: "\"如果预算不是问题，您理想中的方案是什么？\"  \n\"假如这周必须拍板，您会选哪个？\"",
      pitfall: "假设要具体——空泛的\"如果\"只是浪费口水。"
    }
  ];

  techs.forEach((t, i) => {
    const y = 1.75 + i * 1.1;
    // Card
    slide.addShape("rect", {
      x: 0.4, y: y, w: 9.2, h: 1.0,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // Number column
    slide.addShape("rect", {
      x: 0.4, y: y, w: 0.7, h: 1.0,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(t.n, {
      x: 0.4, y: y, w: 0.7, h: 1.0,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    // Title
    slide.addText(t.t, {
      x: 1.25, y: y + 0.1, w: 3.0, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(t.en, {
      x: 1.25, y: y + 0.45, w: 3.0, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.accent, italic: true
    });
    slide.addText(t.d, {
      x: 1.25, y: y + 0.7, w: 3.0, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    // Examples
    slide.addShape("rect", {
      x: 4.4, y: y + 0.1, w: 5.2, h: 0.55,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 0.5 }
    });
    slide.addText("示例：" + t.ex, {
      x: 4.5, y: y + 0.12, w: 5.0, h: 0.5,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 13
    });
    slide.addText("注意：" + t.pitfall, {
      x: 4.5, y: y + 0.7, w: 5.0, h: 0.3,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true
    });
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("31", {
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
  pres.writeFile({ fileName: "slide-31-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
