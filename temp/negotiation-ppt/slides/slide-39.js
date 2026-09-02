// slide-39.js - 角色扮演脚本
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 39, title: '角色扮演脚本' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 演练：现场角色扮演", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("15 分钟 · 3 轮演练", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("找一个真实场景，找一个搭档，用 15 分钟把\"立场 → 利益\"走一遍", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 3 rounds
  const rounds = [
    {
      n: "Round 1",
      t: "5 分钟 · 立场陈述",
      role: "A 说自己场景的诉求；B 听完后复述一遍，问：\"您为什么想要这个？\"",
      output: "复述对了 = 你听懂了"
    },
    {
      n: "Round 2",
      t: "5 分钟 · 利益挖掘",
      role: "B 用三件套提问，把 A 的利益挖到实/程/关/原四层；A 故意藏着两层",
      output: "挖到越多 = 你越会问"
    },
    {
      n: "Round 3",
      t: "5 分钟 · 共同方案",
      role: "基于挖到的利益，A 和 B 一起想 3 个新方案，看哪个能同时满足双方",
      output: "方案越多 = 你越能把饼做大"
    }
  ];

  rounds.forEach((r, i) => {
    const y = 1.7 + i * 1.05;
    slide.addShape("rect", {
      x: 0.4, y: y, w: 9.2, h: 0.95,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // Left strip
    slide.addShape("rect", {
      x: 0.4, y: y, w: 1.6, h: 0.95,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(r.n, {
      x: 0.4, y: y + 0.1, w: 1.6, h: 0.35,
      fontSize: 13, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center"
    });
    slide.addText(r.t.split(" · ")[0], {
      x: 0.4, y: y + 0.5, w: 1.6, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // Body
    slide.addText(r.t.split(" · ")[1] || "", {
      x: 2.1, y: y + 0.08, w: 7.3, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(r.role, {
      x: 2.1, y: y + 0.35, w: 7.3, h: 0.35,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 13
    });
    slide.addShape("rect", {
      x: 2.1, y: y + 0.7, w: 7.3, h: 0.22,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 0.5 }
    });
    slide.addText(r.output, {
      x: 2.2, y: y + 0.7, w: 7.1, h: 0.22,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("39", {
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
  pres.writeFile({ fileName: "slide-39-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
