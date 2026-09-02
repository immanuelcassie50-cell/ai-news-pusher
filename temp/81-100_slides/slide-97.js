// slide-97.js - 不同学习风格应对
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'backup',
  index: 97,
  title: '不同学习风格应对'
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
  slide.addText("不同学习风格应对", {
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

  // Three learning styles
  const styles = [
    {
      type: "视觉型",
      icon: "👁",
      characteristics: ["喜欢看图表、PPT", "善于观察肢体语言", "记笔记有助于记忆"],
      methods: ["多用图表和流程图", "配合肢体语言讲解", "提供书面资料"],
      color: theme.primary
    },
    {
      type: "听觉型",
      icon: "👂",
      characteristics: ["喜欢听讲解和讨论", "善于理解语言信息", "口头表达比书写流畅"],
      methods: ["多讲解多讨论", "案例配合音频视频", "允许录音复习"],
      color: theme.accent
    },
    {
      type: "动觉型",
      icon: "✋",
      characteristics: ["喜欢动手操作", "善于从实践中学习", "容易感到无聊"],
      methods: ["多设计实操环节", "让学员站立活动", "角色扮演和模拟"],
      color: theme.secondary
    }
  ];

  styles.forEach((style, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.0, w: 2.95, h: 4.15,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.0, w: 2.95, h: 0.9,
      fill: { color: style.color }
    });
    slide.addText(style.icon, {
      x: x, y: 1.0, w: 2.95, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(style.type, {
      x: x, y: 1.45, w: 2.95, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Characteristics section
    slide.addText("特征", {
      x: x + 0.15, y: 1.05, w: 2.65, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, margin: 0
    });

    // Characteristics
    style.characteristics.forEach((c, j) => {
      slide.addText("• " + c, {
        x: x + 0.15, y: 2.0 + j * 0.4, w: 2.65, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, margin: 0
      });
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: 3.25, w: 2.35, h: 0.02,
      fill: { color: theme.light }
    });

    // Methods label
    slide.addText("应对方法", {
      x: x + 0.15, y: 3.35, w: 2.65, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: style.color, bold: true, margin: 0
    });

    // Methods
    style.methods.forEach((m, j) => {
      slide.addText("✓ " + m, {
        x: x + 0.15, y: 3.7 + j * 0.45, w: 2.65, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, margin: 0
      });
    });
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.2, w: 9, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("提示：最好的教学是结合多种风格，让所有学员都能吸收", {
    x: 0.5, y: 5.2, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle", margin: 0
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("97", {
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
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-97-preview.pptx" });
}

module.exports = { createSlide, slideConfig };