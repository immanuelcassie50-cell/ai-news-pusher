// slide-31.js - 写法A vs 写法B 深度解析
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 31,
  title: '写法A vs 写法B 深度解析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("写法A vs 写法B 深度解析", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("写法B明显更好。好在三个地方：", {
    x: 0.5, y: 1.0, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Three advantages - cards
  const advantages = [
    { num: "1", text: "动词开头，行为清晰" },
    { num: "2", text: "给了可执行的判断节点" },
    { num: "3", text: "把\"为什么不能这样做\"说出来" }
  ];

  advantages.forEach((item, i) => {
    const y = 1.6 + i * 0.85;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 4.2, h: 0.7,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.06, h: 0.7,
      fill: { color: theme.secondary }
    });
    slide.addText(item.num, {
      x: 0.7, y: y + 0.15, w: 0.4, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: theme.secondary, bold: true
    });
    slide.addText(item.text, {
      x: 1.15, y: y, w: 3.4, h: 0.7,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Left side - 写法A (problem)
  slide.addShape("rect", {
    x: 5.1, y: 1.2, w: 4.4, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.2, w: 4.4, h: 0.45,
    fill: { color: theme.light }
  });
  slide.addText("写法A（问题版）", {
    x: 5.1, y: 1.2, w: 4.4, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText([
    { text: "注意事项：", options: { bold: true } },
    { text: "客户情绪激动时要冷静，不要急于解释，耐心倾听，了解客户诉求后再说。" }
  ], {
    x: 5.3, y: 1.75, w: 4, h: 1.9,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });

  // Right side - 写法B (good)
  slide.addShape("rect", {
    x: 5.1, y: 3.95, w: 4.4, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 3.95, w: 4.4, h: 0.45,
    fill: { color: theme.secondary }
  });
  slide.addText("写法B（推荐版）", {
    x: 5.1, y: 3.95, w: 4.4, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText([
    { text: "第一步：接住客户情绪", options: { bold: true } },
    { text: "\n做法：保持安静，用开放式问题邀请客户说\n判断节点：客户语速放慢，从质问转向倾诉" }
  ], {
    x: 5.3, y: 4.45, w: 4, h: 0.95,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top"
  });

  // Key insight box at bottom
  slide.addShape("rect", {
    x: 0.5, y: 4.75, w: 4.2, h: 0.7,
    fill: { color: theme.accent },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.1 }
  });
  slide.addText("核心问题：把SOP写成了\"注意事项\"，而不是\"操作步骤\"", {
    x: 0.6, y: 4.75, w: 4, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("31", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "c94134",
    accent: "c9ada7",
    light: "f5f5f5",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-31-preview.pptx" });
}

module.exports = { createSlide, slideConfig };