// slide-98.js - 营造学习氛围
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'backup',
  index: 98,
  title: '营造学习氛围'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("营造学习氛围", {
    x: 0.5, y: 0.35, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Backup label
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("备用", {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // Two columns: Physical and Psychological
  // Left - Physical Environment
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.4, h: 4.05,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.4, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("物理环境", {
    x: 0.5, y: 1.0, w: 4.4, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  const physicalItems = [
    { title: "座位安排", desc: "U型或鱼骨型便于互动，避免影院式" },
    { title: "光线温度", desc: "充足自然光，室温22-26度适宜" },
    { title: "设备检查", desc: "投影、音响、白板提前测试" },
    { title: "茶歇休息", desc: "安排适当休息，提供茶水咖啡" },
    { title: "空间布置", desc: "墙上贴海报，桌上放文具" }
  ];

  physicalItems.forEach((item, i) => {
    slide.addText(item.title, {
      x: 0.7, y: 1.75 + i * 0.62, w: 1.3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });
    slide.addText(item.desc, {
      x: 2.0, y: 1.75 + i * 0.62, w: 2.7, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });
  });

  // Right - Psychological Environment
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.0, w: 4.4, h: 4.05,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Right header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.0, w: 4.4, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("心理环境", {
    x: 5.1, y: 1.0, w: 4.4, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  const psychologicalItems = [
    { title: "建立信任", desc: "自我介绍，真诚分享，承诺保密" },
    { title: "鼓励提问", desc: "强调没有蠢问题，及时肯定" },
    { title: "允许犯错", desc: "强调学习是探索，错误是财富" },
    { title: "尊重差异", desc: "接纳不同观点，不批评指责" },
    { title: "积极反馈", desc: "及时认可，看到每个人的进步" }
  ];

  psychologicalItems.forEach((item, i) => {
    slide.addText(item.title, {
      x: 5.3, y: 1.75 + i * 0.62, w: 1.3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, margin: 0
    });
    slide.addText(item.desc, {
      x: 6.6, y: 1.75 + i * 0.62, w: 2.7, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("98", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-98-preview.pptx" });
}

module.exports = { createSlide, slideConfig };