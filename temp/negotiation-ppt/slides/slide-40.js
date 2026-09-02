// slide-40.js - 常见挖利益卡点
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 40, title: '常见挖利益卡点' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 卡点：为什么挖不到利益", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("问出 5 个问题后，对方还在重复立场——怎么办？", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("5 个常见卡点 + 对应的解药", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  const cards = [
    {
      n: "01",
      t: "对方也在想你的利益",
      s: "不停猜你想要什么，所以不肯先亮",
      sol: "\"我先说一句真话：我们的底线是 X。然后您说。\""
    },
    {
      n: "02",
      t: "对方真不知道自己想要什么",
      s: "他没有分清立场和利益——从来没被问过",
      sol: "\"假设今晚必须拍板，您会选哪个？\""
    },
    {
      n: "03",
      t: "对方用立场作表演",
      s: "他需要维护自己的形象（当众不能软）",
      sol: "私下聊 / 给台阶 / 让他\"让\"得合理"
    },
    {
      n: "04",
      t: "对方已经厌倦了",
      s: "反复问让他烦了，敷衍你",
      sol: "暂停提问 / 直接说你的观察 / 让他选 a/b/c"
    },
    {
      n: "05",
      t: "你自己先急了",
      s: "急着想谈成，结果节奏让对方掌控",
      sol: "深呼吸 / 提醒自己\"不急\" / 慢下来反而快"
    }
  ];

  cards.forEach((c, i) => {
    const y = 1.7 + i * 0.65;
    slide.addShape("rect", {
      x: 0.4, y: y, w: 9.2, h: 0.55,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape("rect", {
      x: 0.4, y: y, w: 0.55, h: 0.55,
      fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
    });
    slide.addText(c.n, {
      x: 0.4, y: y, w: 0.55, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(c.t, {
      x: 1.1, y: y, w: 2.4, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(c.s, {
      x: 3.55, y: y, w: 2.5, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
    slide.addText(c.sol, {
      x: 6.1, y: y, w: 3.5, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("40", {
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
  pres.writeFile({ fileName: "slide-40-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
