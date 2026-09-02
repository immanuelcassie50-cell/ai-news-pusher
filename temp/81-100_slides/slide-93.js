// slide-93.js - 破冰活动库
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'backup',
  index: 93,
  title: '破冰活动库'
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
  slide.addText("破冰活动库", {
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

  // Activities - 2 rows x 3 columns
  const activities = [
    { name: "两真一假", desc: "每人说三句话，两句真一句假，其他人猜哪句是假的", time: "10分钟" },
    { name: "画像自我介绍", desc: "用简笔画出自己的特点或工作，讲解让其他人猜", time: "15分钟" },
    { name: "图片联想", desc: "每人选一张图片，用它来介绍自己，其他人自由联想", time: "10分钟" },
    { name: "工作坐标", desc: "在白纸上画XY轴，横轴是兴趣，纵轴是专长，标记自己的位置", time: "15分钟" },
    { name: "快速问答", desc: "两人一组，在3分钟内尽可能多地了解对方，然后介绍给对方", time: "10分钟" }
  ];

  activities.forEach((act, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.5 + col * 3.1;
    const y = 1.1 + row * 2.15;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.95, h: 2,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.1, y: y + 0.1, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: x + 0.1, y: y + 0.1, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Activity name
    slide.addText(act.name, {
      x: x + 0.55, y: y + 0.15, w: 2.25, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    // Description
    slide.addText(act.desc, {
      x: x + 0.15, y: y + 0.6, w: 2.65, h: 1,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });

    // Time badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: y + 1.65, w: 0.9, h: 0.28,
      fill: { color: theme.light }
    });
    slide.addText(act.time, {
      x: x + 0.15, y: y + 1.65, w: 0.9, h: 0.28,
      fontSize: 10, fontFace: "Arial",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("93", {
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
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-93-preview.pptx" });
}

module.exports = { createSlide, slideConfig };