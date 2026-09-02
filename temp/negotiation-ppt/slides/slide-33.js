// slide-33.js - 利益的四个维度
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 33, title: '利益的四个维度' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 利益的四个维度", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("任何立场背后都藏着四个维度的利益", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("把每一个维度都问一遍，\"利益地图\"就完整了", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 2x2 grid
  const dims = [
    {
      n: "01",
      t: "实质利益",
      en: "Substantive",
      q: "\"您具体想要什么结果？\"",
      e: "价格、条款、资源、收益分配...",
      key: "最常被关注，但往往不是真正决定因素"
    },
    {
      n: "02",
      t: "程序利益",
      en: "Procedural",
      q: "\"您希望这事怎么被讨论？\"",
      e: "谁先说 / 怎么投票 / 谁最后拍板...",
      key: "程序感对了，再亏也认"
    },
    {
      n: "03",
      t: "关系利益",
      en: "Relational",
      q: "\"您希望我们的关系是怎样的？\"",
      e: "信任 / 长期合作 / 互相尊重 / 平等...",
      key: "关系好，结果差一点也愿意"
    },
    {
      n: "04",
      t: "原则利益",
      en: "Principle",
      q: "\"这件事您觉得应该符合什么原则？\"",
      e: "公平 / 专业 / 体面 / 行业标准 / 道德...",
      key: "触碰原则寸步不让——这是底线"
    }
  ];

  dims.forEach((d, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 1.7 + row * 1.55;
    slide.addShape("rect", {
      x: x, y: y, w: 4.5, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: y, w: 0.7, h: 1.45,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(d.n, {
      x: x, y: y, w: 0.7, h: 1.45,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    slide.addText(d.t, {
      x: x + 0.85, y: y + 0.1, w: 3.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(d.en, {
      x: x + 0.85, y: y + 0.4, w: 3.5, h: 0.25,
      fontSize: 9.5, fontFace: "Arial",
      color: theme.accent, italic: true
    });
    slide.addText(d.q, {
      x: x + 0.85, y: y + 0.65, w: 3.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true
    });
    slide.addText(d.e, {
      x: x + 0.85, y: y + 0.92, w: 3.5, h: 0.3,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 12
    });
    slide.addShape("rect", {
      x: x + 0.85, y: y + 1.18, w: 3.5, h: 0.22,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 0.5 }
    });
    slide.addText(d.key, {
      x: x + 0.9, y: y + 1.18, w: 3.4, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
  });

  // Bottom
  slide.addShape("rect", {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("实 / 程 / 关 / 原——四个维度任何一项被满足，立场都可能松", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("33", {
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
  pres.writeFile({ fileName: "slide-33-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
