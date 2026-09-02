// slide-41.js - 通话注意事项
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 41,
  title: '通话注意事项'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("通话注意事项", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Three key points as cards
  const points = [
    {
      num: "1",
      title: "不承诺收益走势或账户回本的时间",
      content: "标准回应：\"市场走势我无法预判，但我可以帮您分析当前配置的逻辑是否依然适合您的情况\""
    },
    {
      num: "2",
      title: "如果客户明确要求赎回，不要立刻反对",
      content: "先了解背后的原因（需要流动性/对市场失去信心/对我失去信任——三种情况处理方式完全不同）"
    },
    {
      num: "3",
      title: "通话结束后24小时内，发一条简短的服务跟进消息",
      content: ""
    }
  ];

  points.forEach((point, i) => {
    const y = 1.3 + i * 1.35;

    // Card
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 1.2,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number circle
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.35, w: 0.5, h: 0.5,
      fill: { color: theme.secondary }
    });
    slide.addText(point.num, {
      x: 0.7, y: y + 0.35, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Title
    slide.addText(point.title, {
      x: 1.4, y: y + 0.15, w: 7.9, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    // Content if exists
    if (point.content) {
      slide.addText(point.content, {
        x: 1.4, y: y + 0.6, w: 7.9, h: 0.5,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.accent, valign: "top"
      });
    }
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("41", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-41-preview.pptx" });
}

module.exports = { createSlide, slideConfig };