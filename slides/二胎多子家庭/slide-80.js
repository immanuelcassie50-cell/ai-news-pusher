// slide-80.js - 模块五小结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 80,
  title: '模块五核心要点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("模块五核心要点", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Key takeaways
  const takeaways = [
    { num: "01", title: "比较性语言伤害孩子", desc: '看似"激励"，实则伤害自尊，挑起竞争' },
    { num: "02", title: "描述性语言替代评判", desc: "描述具体行为，表达信任和支持" },
    { num: "03", title: "合作框架促进关系", desc: '用"我们"代替"你/他"，培养团队精神' },
    { num: "04", title: "语言公约全家遵守", desc: "全家参与制定，共同监督执行" }
  ];

  const cardWidth = 4.4;
  const cardHeight = 1.7;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.3;
  const gapY = 0.25;

  takeaways.forEach((item, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Number badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.2, y: y + 0.25, w: 0.65, h: 0.65,
      fill: { color: theme.primary },
      rectRadius: 0.1
    });
    slide.addText(item.num, {
      x: x + 0.2, y: y + 0.25, w: 0.65, h: 0.65,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 1.0, y: y + 0.3, w: cardWidth - 1.2, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.2, y: y + 1.0, w: cardWidth - 0.4, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "top"
    });
  });

  // Bottom decoration line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.2, w: 9, h: 0.03,
    fill: { color: theme.primary, transparency: 30 }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-80-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
