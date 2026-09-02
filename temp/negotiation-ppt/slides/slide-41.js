// slide-41.js - 把饼做大的 3 个真实场景
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 41, title: '把饼做大的 3 个真实场景' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 真实场景：把饼做大的瞬间", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("当你挖到利益，\"双赢\"的解经常自己冒出来", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("三个真实案例的\"瞬间\"——挖掘利益触发洞察", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  const cases = [
    {
      n: "01",
      ctx: "夫妻买房",
      before: "丈夫要市中心小三居，妻子要郊区大四居",
      turn: "问：你们为什么想买这套？",
      insight: "丈夫要近公司少通勤；妻子要空间养娃+预算更松",
      sol: "买市区小三居 + 郊区租大四居 + 周末郊区住——双方 100% 满足"
    },
    {
      n: "02",
      ctx: "采购谈判",
      before: "供应商要涨价 8%，采购方只接受 2%",
      turn: "问：涨价 8% 之后您打算怎么分配到产品线？",
      insight: "供应商有 70% 库存是 6 个月前低价进的",
      sol: "新进货按 8%，老库存按 2%——既给供应商台阶，又不增加成本"
    },
    {
      n: "03",
      ctx: "应届生谈 offer",
      before: "候选人要 18k，公司给 15k",
      turn: "问：这 3k 对你意味着什么？",
      insight: "不是钱本身，是\"证明自己值得\"的尊严感",
      sol: "16k + 6 个月 review 一次 + 一次海外培训机会——价值远超 3k"
    }
  ];

  cases.forEach((c, i) => {
    const y = 1.7 + i * 1.1;
    slide.addShape("rect", {
      x: 0.4, y: y, w: 9.2, h: 1.0,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // Number
    slide.addShape("rect", {
      x: 0.4, y: y, w: 0.6, h: 1.0,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(c.n, {
      x: 0.4, y: y, w: 0.6, h: 1.0,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    slide.addText(c.ctx, {
      x: 1.1, y: y + 0.08, w: 8.4, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    // Three rows
    slide.addText("立场", {
      x: 1.1, y: y + 0.4, w: 0.6, h: 0.2,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(c.before, {
      x: 1.7, y: y + 0.4, w: 7.7, h: 0.2,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
    slide.addText("提问", {
      x: 1.1, y: y + 0.6, w: 0.6, h: 0.2,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(c.turn + " → 利益：", {
      x: 1.7, y: y + 0.6, w: 2.3, h: 0.2,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
    slide.addText(c.insight, {
      x: 4.0, y: y + 0.6, w: 5.4, h: 0.2,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText("新解", {
      x: 1.1, y: y + 0.8, w: 0.6, h: 0.2,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(c.sol, {
      x: 1.7, y: y + 0.8, w: 7.7, h: 0.2,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true
    });
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("41", {
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
  pres.writeFile({ fileName: "slide-41-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
