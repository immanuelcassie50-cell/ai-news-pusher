// slide-101.js - Chapter 14 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 101,
  title: '本章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("本章小结", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Summary cards - 4 key takeaways
  const takeaways = [
    {
      num: "01",
      text: "问\"职业还能不能干\"是问错了问题"
    },
    {
      num: "02",
      text: "只会AI能做的事 → 被替代"
    },
    {
      num: "03",
      text: "真正投入判断力 → 门槛抬高，活得更好"
    },
    {
      num: "04",
      text: "对新人：尽早投入判断力训练，不要死记硬背"
    }
  ];

  const cardStartY = 1.35;
  const cardHeight = 0.72;
  const cardGap = 0.12;

  takeaways.forEach((item, index) => {
    const yPos = cardStartY + index * (cardHeight + cardGap);

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: yPos, w: 9, h: cardHeight,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1,
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: yPos + 0.16, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: 0.7, y: yPos + 0.16, w: 0.4, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Checkmark indicator
    slide.addText("✓", {
      x: 1.25, y: yPos + 0.16, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Text content
    slide.addText(item.text, {
      x: 1.7, y: yPos, w: 7.6, h: cardHeight,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      valign: "middle", margin: 0
    });
  });

  // Bottom highlight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.75, w: 9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("AI工具接管基础计算 → 省下时间投入真正需要人的判断环节", {
    x: 0.5, y: 4.75, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge - circle style at bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("101", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
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
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-101-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
