// slide-85.js - 自我反思表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 85,
  title: '自我反思表'
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
  slide.addText("自我反思表", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Three columns
  const columns = [
    {
      title: "做得好的",
      color: theme.primary,
      items: ["开场引人入胜", "案例生动贴切", "节奏把控得当", "学员参与度高"]
    },
    {
      title: "需要改进的",
      color: theme.accent,
      items: ["时间稍微超了", "某个例子不够贴近", "与学员眼神交流不够", "互动环节可以更丰富"]
    },
    {
      title: "下一步行动",
      color: theme.secondary,
      items: ["优化开场3分钟", "收集更多实际案例", "练习眼神环视技巧", "设计更多互动游戏"]
    }
  ];

  columns.forEach((col, i) => {
    const x = 0.5 + i * 3.1;

    // Column card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: 2.95, h: 3.9,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: 2.95, h: 0.6,
      fill: { color: col.color }
    });
    slide.addText(col.title, {
      x: x, y: 1.2, w: 2.95, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Items
    col.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.15, y: 1.95 + j * 0.65, w: 2.65, h: 0.55,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: theme.secondary, valign: "top", margin: 0
      });
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("85", {
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
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-85-preview.pptx" });
}

module.exports = { createSlide, slideConfig };