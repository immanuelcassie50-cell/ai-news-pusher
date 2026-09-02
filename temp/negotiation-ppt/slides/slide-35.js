// slide-35.js - 立场固守的心理机制
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 35, title: '立场固守的心理机制' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 立场固守：四个心理根源", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("为什么明知道退一步海阔天空，却还是死守立场？", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 19, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("理解这些机制，是为了：不是被它们操控，而是绕过它们", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 4 cards in 2x2
  const mechs = [
    {
      n: "01",
      t: "承诺升级",
      d: "已经在某条立场上投入了时间、面子、金钱——放弃等于承认之前的投入是错的。",
      e: "例：之前答应老婆今年不换车，现在老婆想买——不退让不是真为了省钱，是为了不承认自己之前定错了"
    },
    {
      n: "02",
      t: "信息茧房",
      d: "只听支持自己立场的证据，对反证视而不见。",
      e: "例：坚信\"这价已经最低\"，听不到任何\"其实可以再低\"的信号"
    },
    {
      n: "03",
      t: "损失厌恶",
      d: "得到 100 的快乐 < 失去 100 的痛苦。",
      e: "例：宁可不谈，也不能接受\"少 5 万\"的方案——因为\"少\"是损失"
    },
    {
      n: "04",
      t: "身份认同",
      d: "立场 = 我是谁。退让 = 我输了。",
      e: "例：\"我是那种不讨价还价的人\"——这种自我叙事让人无法开口"
    }
  ];

  mechs.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 1.7 + row * 1.55;
    slide.addShape("rect", {
      x: x, y: y, w: 4.5, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: y, w: 0.08, h: 1.45,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(m.n, {
      x: x + 0.2, y: y + 0.1, w: 0.6, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(m.t, {
      x: x + 0.85, y: y + 0.1, w: 3.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(m.d, {
      x: x + 0.2, y: y + 0.5, w: 4.2, h: 0.4,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 14
    });
    slide.addShape("rect", {
      x: x + 0.2, y: y + 0.95, w: 4.2, h: 0.4,
      fill: { color: theme.bg }, line: { color: theme.light, width: 0.5 }
    });
    slide.addText(m.e, {
      x: x + 0.3, y: y + 0.95, w: 4.0, h: 0.4,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true, valign: "middle"
    });
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("35", {
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
  pres.writeFile({ fileName: "slide-35-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
