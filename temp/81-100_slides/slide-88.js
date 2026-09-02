// slide-88.js - 资源推荐：工具模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 88,
  title: '资源推荐：工具模板'
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
  slide.addText("资源推荐：工具模板", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Templates - 3 columns
  const templates = [
    {
      icon: "📋",
      title: "课件模板",
      items: ["PPT标准模板", "讲师手册模板", "学员手册模板", "课后作业模板"]
    },
    {
      icon: "📚",
      title: "案例库",
      items: ["成功案例模板", "失败案例模板", "情景模拟脚本", "案例分析表格"]
    },
    {
      icon: "📝",
      title: "评估问卷",
      items: ["课前调研问卷", "课后评估问卷", "满意度调查表", "行为改变追踪表"]
    }
  ];

  templates.forEach((tpl, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: 2.95, h: 3.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Icon
    slide.addText(tpl.icon, {
      x: x, y: 1.35, w: 2.95, h: 0.6,
      fontSize: 32, fontFace: "Arial",
      align: "center", valign: "middle", margin: 0
    });

    // Title
    slide.addText(tpl.title, {
      x: x, y: 1.95, w: 2.95, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", margin: 0
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.8, y: 2.45, w: 1.35, h: 0.03,
      fill: { color: theme.accent }
    });

    // Items
    tpl.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.2, y: 2.6 + j * 0.55, w: 2.55, h: 0.5,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, valign: "top", margin: 0
      });
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("88", {
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
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-88-preview.pptx" });
}

module.exports = { createSlide, slideConfig };