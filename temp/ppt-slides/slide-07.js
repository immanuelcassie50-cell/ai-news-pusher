const theme = {
  primary: "8B2942",
  secondary: "4A4A4A",
  accent: "C75B5B",
  light: "E8D5D5",
  bg: "FAFAFA"
};

const slideConfig = {
  title: "你在访谈里的两个角色",
  pageNumber: "07"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("你在访谈里的两个角色", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Left column - 被访谈者
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: theme.primary }
  });

  slide.addText("被访谈者", {
    x: 0.7, y: 1.4, w: 3.9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText([
    { text: "围绕自己的场景定位表", options: { bullet: true, breakLine: true } },
    { text: "说出自己的真实处理方式", options: { bullet: true, breakLine: true } },
    { text: "不要整理语言", options: { bullet: true, breakLine: true } },
    { text: "就像和信任的老同事聊天", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.2, w: 3.9, h: 2.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "top",
    paraSpaceAfter: 12
  });

  // Right column - 访谈者
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: theme.accent }
  });

  slide.addText("访谈者", {
    x: 5.4, y: 1.4, w: 3.9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText([
    { text: "按提问清单提问", options: { bullet: true, breakLine: true } },
    { text: "在说不清楚的地方追问", options: { bullet: true, breakLine: true } },
    { text: "帮助对方把模糊的直觉变成具体语言", options: { bullet: true, breakLine: true } },
    { text: "记录关键信息", options: { bullet: true } }
  ], {
    x: 5.4, y: 2.2, w: 3.9, h: 2.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "top",
    paraSpaceAfter: 12
  });

  // Page number
  slide.addText("07", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, align: "right"
  });
}

module.exports = { createSlide, slideConfig };