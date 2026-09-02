// slide-32.js - 案例：计算机专业怎么样
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 32,
  title: '案例：计算机专业怎么样'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("案例：计算机专业怎么样", {
    x: 0.6, y: 0.35, w: 8, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Subtitle - the key insight
  slide.addText("时间差思维：今年大一入学，四年后大四毕业", {
    x: 0.4, y: 0.9, w: 9.2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Dialogue section - mother's question
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.35, w: 9.2, h: 0.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  slide.addText("母亲直接问我：", {
    x: 0.55, y: 1.42, w: 1.8, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light
  });
  slide.addText('"计算机专业到底好不好就业？"', {
    x: 0.55, y: 1.68, w: 8.9, h: 0.32,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // My counter-question
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.15, w: 9.2, h: 0.85,
    fill: { color: theme.accent, transparency: 90 },
    rectRadius: 0.1
  });

  slide.addText("我反问：", {
    x: 0.55, y: 2.22, w: 1.5, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent
  });
  slide.addText('"你说的\'这个专业\'，是指今年大一入学，还是四年后大四毕业？"', {
    x: 0.55, y: 2.48, w: 8.9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Reaction
  slide.addText("她愣住了", {
    x: 7.8, y: 2.95, w: 1.8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "right"
  });

  // Timeline section title
  slide.addText('计算机专业的"时间旅行"', {
    x: 0.4, y: 3.4, w: 9.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Timeline - 3 eras
  const eras = [
    {
      year: "十年前",
      title: "移动互联网黄金期",
      desc: "行业高速扩张，人才缺口大",
      color: theme.primary
    },
    {
      year: "五年前",
      title: "行业收缩裁员",
      desc: "移动互联网红利消退",
      color: theme.secondary
    },
    {
      year: "今年进去",
      title: "取决于AI重塑",
      desc: "AI正在重新定义这个行业",
      color: theme.accent
    }
  ];

  const timelineY = 3.9;
  const cardW = 2.85;
  const cardH = 1.35;
  const gap = 0.25;

  // Timeline base line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4 + cardW / 2, y: timelineY + 0.12, w: 8.4, h: 0.04,
    fill: { color: theme.light }
  });

  eras.forEach((era, i) => {
    const x = 0.4 + i * (cardW + gap);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: timelineY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 },
      rectRadius: 0.1
    });

    // Top color bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: timelineY, w: cardW, h: 0.08,
      fill: { color: era.color }
    });

    // Year badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardW / 2 - 0.3, y: timelineY - 0.15, w: 0.6, h: 0.6,
      fill: { color: era.color }
    });
    slide.addText(era.year, {
      x: x + cardW / 2 - 0.3, y: timelineY - 0.15, w: 0.6, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(era.title, {
      x: x + 0.15, y: timelineY + 0.5, w: cardW - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: era.color, bold: true,
      align: "center"
    });

    // Description
    slide.addText(era.desc, {
      x: x + 0.15, y: timelineY + 0.9, w: cardW - 0.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center"
    });
  });

  // Arrow connectors between timeline nodes
  slide.addText("→", {
    x: 0.4 + cardW, y: timelineY - 0.05, w: gap, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: theme.light, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("→", {
    x: 0.4 + cardW * 2 + gap, y: timelineY - 0.05, w: gap, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: theme.light, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge - circle at bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("32", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
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
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-32-preview.pptx" })
    .then(() => console.log("Created: slide-32-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
