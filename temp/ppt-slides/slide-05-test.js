// slide-05.js - 课程主线
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '课程主线'
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
  slide.addText("课程主线", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Main title - 一核四步三迁移
  slide.addText("一核四步三迁移", {
    x: 0.5, y: 1.0, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  // Central core - 任务导向
  slide.addShape(pres.shapes.OVAL, {
    x: 4.1, y: 2.5, w: 1.8, h: 1.8,
    fill: { color: theme.primary }
  });

  slide.addText("任务导向", {
    x: 4.1, y: 2.5, w: 1.8, h: 1.8,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  // 一核 label
  slide.addText("一核", {
    x: 4.1, y: 1.8, w: 1.8, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: true
  });

  // 四步 - surrounding the core
  const steps = ["任务识别", "类型判断", "路径选择", "协同写作"];
  const stepAngles = [225, 315, 45, 135];

  steps.forEach((step, i) => {
    const angle = stepAngles[i] * Math.PI / 180;
    const radius = 2.0;
    const cx = 5.0;
    const cy = 3.4;
    const x = cx + radius * Math.cos(angle) - 0.6;
    const y = cy + radius * Math.sin(angle) - 0.3;

    // Step box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 1.2, h: 0.6,
      fill: { color: theme.light }
    });

    slide.addText(step, {
      x: x, y: y, w: 1.2, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "middle"
    });

    // Arrow from core to step
    slide.addShape(pres.shapes.LINE, {
      x: 5.0, y: 3.4,
      w: (x + 0.6 - 5.0), h: (y + 0.3 - 3.4),
      line: { color: theme.accent, width: 1.5 }
    });
  });

  // 四步 label
  slide.addText("四步", {
    x: 7.3, y: 3.1, w: 0.8, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: true
  });

  // 三迁移 - bottom section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.6, w: 8.4, h: 0.8,
    fill: { color: theme.light }
  });

  slide.addText("三迁移", {
    x: 0.8, y: 4.6, w: 1.0, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle", bold: true
  });

  // Migration items
  const migrations = ["知识迁移", "技能迁移", "习惯迁移"];
  migrations.forEach((m, i) => {
    slide.addText(m, {
      x: 2.0 + i * 2.4, y: 4.6, w: 2.0, h: 0.8,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "middle"
    });

    if (i < 2) {
      slide.addText("→", {
        x: 3.8 + i * 2.4, y: 4.6, w: 0.4, h: 0.8,
        fontSize: 16, fontFace: "Arial",
        color: theme.accent, align: "center", valign: "middle"
      });
    }
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4a4a4a",
    accent: "E8364F",
    light: "c0c0c0",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/公文写作/5、综合实战——高频场景的协同写作与组织迁移/ppt/slides/slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
