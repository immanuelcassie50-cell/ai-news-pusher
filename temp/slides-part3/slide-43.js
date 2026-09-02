// slide-43.js - SOP初稿人工验证清单
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 43,
  title: 'SOP初稿人工验证清单'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("SOP初稿人工验证清单", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Checklist items
  const checks = [
    "每步是否以动词开头，说的是具体做什么",
    "每步的判断节点是否清晰（知道什么时候进下一步）",
    "步骤顺序是否和你实际的服务节奏一致",
    "每步的常见失误描述是否和你实际观察到的一致",
    "整个SOP拿给一个新同事，他能照着执行吗",
    "注意事项里是否包含了必要的合规提醒"
  ];

  checks.forEach((item, i) => {
    const y = 1.35 + i * 0.68;

    // Card
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.58,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Checkbox
    slide.addShape("rect", {
      x: 0.7, y: y + 0.14, w: 0.3, h: 0.3,
      fill: { color: theme.bg },
      line: { color: theme.secondary, width: 1.5 }
    });

    // Item text
    slide.addText(item, {
      x: 1.15, y: y, w: 8.2, h: 0.58,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("43", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
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
    primary: "22223b",
    secondary: "c94134",
    accent: "c9ada7",
    light: "f5f5f5",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-43-preview.pptx" });
}

module.exports = { createSlide, slideConfig };