// slide-71.js - 非货币让步
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 71, title: '非货币让步' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M4 · 非货币让步：低成本高回报", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("不一定要让钱——非货币让步有时更值", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("6 种几乎\"零成本\"的让步方式——对方却觉得很值", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 6 types in grid
  const nonM = [
    { t: "时间让步", d: "提前交付 / 延长售后 / 加窗口期", v: "对你成本：低  /  对方感觉：高" },
    { t: "灵活让步", d: "支付方式 / 验收标准 / 条款细节", v: "对你成本：低  /  对方感觉：高" },
    { t: "信息让步", d: "分享行业洞察 / 帮对方做参考", v: "对你成本：低  /  对方感觉：高" },
    { t: "关系让步", d: "升级到主管接待 / 主动引荐资源", v: "对你成本：低  /  对方感觉：高" },
    { t: "形式让步", d: "仪式感 / 联合署名 / 礼品", v: "对你成本：低  /  对方感觉：高" },
    { t: "未来让步", d: "承诺下次优先 / 长期合作优惠", v: "对你成本：低  /  对方感觉：高" }
  ];

  nonM.forEach((m, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.4 + col * 3.1;
    const y = 1.7 + row * 1.5;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.4,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 1.4,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(m.t, {
      x: x + 0.2, y: y + 0.1, w: 2.65, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(m.d, {
      x: x + 0.2, y: y + 0.5, w: 2.65, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 13
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: y + 0.95, w: 2.65, h: 0.4,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 0.5 }
    });
    slide.addText(m.v, {
      x: x + 0.3, y: y + 0.95, w: 2.45, h: 0.4,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("71", {
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
  pres.writeFile({ fileName: "slide-71-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
