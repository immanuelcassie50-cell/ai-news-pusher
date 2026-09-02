// slide-40.js - 专属时间设计模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 40,
  title: '专属时间设计模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("专属时间设计模板", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Five elements
  const elements = [
    {
      num: "1",
      title: "频率",
      question: "每周几次？",
      placeholder: "建议：每个孩子每周至少1-2次专属时间"
    },
    {
      num: "2",
      title: "时长",
      question: "每次多少分钟？",
      placeholder: "建议：依年龄调整，学龄前15-20分钟，学龄后30-60分钟"
    },
    {
      num: "3",
      title: "地点",
      question: "家里还是户外？",
      placeholder: "尝试更换场地，新鲜感让孩子更期待"
    },
    {
      num: "4",
      title: "活动",
      question: "孩子选择还是父母建议？",
      placeholder: "核心原则：孩子主导，父母陪伴"
    },
    {
      num: "5",
      title: "规则",
      question: "手机放一边，全心陪伴",
      placeholder: "设立\"无干扰时间\"，建立仪式感"
    }
  ];

  const startY = 1.15;
  const itemHeight = 0.85;
  const gap = 0.08;

  elements.forEach((el, idx) => {
    const y = startY + idx * (itemHeight + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: itemHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.65, y: y + 0.17, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(el.num, {
      x: 0.65, y: y + 0.17, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(el.title, {
      x: 1.3, y: y + 0.08, w: 1.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Question
    slide.addText(el.question, {
      x: 2.5, y: y + 0.08, w: 2.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });

    // Placeholder/suggestion
    slide.addText(el.placeholder, {
      x: 1.3, y: y + 0.45, w: 7.9, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-40-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
