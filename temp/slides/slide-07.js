// slide-07.js - Content: 类比模型
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 7,
  title: 'demo04: 类比模型识别'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("类比模型识别清单", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Models grid - 2x3
  const models = [
    { name: "冰山模型", desc: "表面现象 vs 深层原因", example: "员工流失 → 钱少只是表象" },
    { name: "GPS模型", desc: "Goal-Pattern-Startup", example: "市场进入：先定目标，再找规律" },
    { name: "乐队模型", desc: "不同乐器协同演奏", example: "跨部门协作：谁是指挥？" },
    { name: "倒酒模型", desc: "杯子满了要换瓶", example: "产品升级：新瓶装新酒" },
    { name: "种子模型", desc: "播种-发芽-开花-结果", example: "人才培养：时机与周期" },
    { name: "拼图模型", desc: "碎片完整后才清晰", example: "战略制定：完整图景是什么" }
  ];

  models.forEach((model, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.1 + row * 1.65;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.5,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });

    // Name
    slide.addText(model.name, {
      x: x + 0.1, y: y + 0.1, w: 2.7, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    // Desc
    slide.addText(model.desc, {
      x: x + 0.1, y: y + 0.5, w: 2.7, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Example
    slide.addText(model.example, {
      x: x + 0.1, y: y + 0.9, w: 2.7, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("7", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-07-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
