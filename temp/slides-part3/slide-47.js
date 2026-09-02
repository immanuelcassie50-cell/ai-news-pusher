// slide-47.js - 本部分核心收获
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 47,
  title: '本部分核心收获'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("本部分核心收获", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Four key takeaways
  const takeaways = [
    {
      num: "1",
      text: "AI是\"高效整理员\"——负责效率，你负责准确"
    },
    {
      num: "2",
      text: "好的话术 = 场景触发明确 + 表达自然 + 覆盖变体和雷区"
    },
    {
      num: "3",
      text: "好的SOP = 动词开头 + 判断节点 + 覆盖常见失误"
    },
    {
      num: "4",
      text: "所有AI生成内容 = 待验证的草稿"
    }
  ];

  takeaways.forEach((item, i) => {
    const y = 1.35 + i * 1.0;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.175, w: 0.5, h: 0.5,
      fill: { color: theme.secondary }
    });
    slide.addText(item.num, {
      x: 0.7, y: y + 0.175, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Text
    slide.addText(item.text, {
      x: 1.4, y: y, w: 7.9, h: 0.85,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("47", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-47-preview.pptx" });
}

module.exports = { createSlide, slideConfig };