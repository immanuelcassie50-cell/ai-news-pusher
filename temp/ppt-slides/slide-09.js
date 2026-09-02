const theme = {
  primary: "8B2942",
  secondary: "4A4A4A",
  accent: "C75B5B",
  light: "E8D5D5",
  bg: "FAFAFA"
};

const slideConfig = {
  title: "开场提问",
  pageNumber: "09"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("开场提问", {
    x: 0.5, y: 0.3, w: 4, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("定位场景，热身", {
    x: 4.5, y: 0.4, w: 5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Main quote box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 2.6,
    fill: { color: theme.light },
    line: { color: theme.primary, width: 2 }
  });

  // Large quotation mark
  slide.addText('"', {
    x: 0.7, y: 1.1, w: 0.8, h: 0.8,
    fontSize: 60, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Question text
  slide.addText("你在场景定位表里选的是这个场景——[读出场景名称]。你现在遇到这个情况，大概是怎么处理的？给我讲一个你印象比较深刻的真实案例，不用完整，说关键的几步就行。", {
    x: 0.8, y: 1.5, w: 8.4, h: 2.1,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle",
    lineSpaceMult: 1.4
  });

  // Purpose section title
  slide.addText("目的说明", {
    x: 0.5, y: 4.0, w: 2, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Purpose bullet points
  slide.addText([
    { text: "让被访谈者进入具体情境", options: { bullet: true, breakLine: true } },
    { text: "避免一开始就说原则和框架", options: { bullet: true, breakLine: true } },
    { text: "从真实案例切入", options: { bullet: true } }
  ], {
    x: 0.5, y: 4.5, w: 9, h: 1,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number
  slide.addText("09", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, align: "right"
  });
}

module.exports = { createSlide, slideConfig };