// slide-48.js - AI Over-Confidence Trap
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 48,
  title: 'AI工具过度自信陷阱'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with warning style
  slide.addText("AI工具过度自信陷阱", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Warning banner
  slide.addShape("roundRect", {
    x: 0.5, y: 0.95, w: 9, h: 0.65,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("工具给出的建议听起来越流畅、越像模像样，越要多留心眼", {
    x: 0.7, y: 0.95, w: 8.6, h: 0.65,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Trap insights - vertical cards
  const insights = [
    {
      title: "工具不知道自己哪里可能错",
      desc: "也不会主动说\"这条建议我没把握\'
    },
    {
      title: "工具永远用同样确定的语气输出",
      desc: "不管信息扎不扎实，它给每条建议的语气都一样自信"
    },
    {
      title: "人在判断时至少能感觉到\"这块不太确定\',
      desc: "工具目前做不到这一点"
    }
  ];

  insights.forEach((item, i) => {
    const y = 1.8 + i * 1.0;

    // Card with left accent bar
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.1
    });

    // Left accent bar (warning color)
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.08, h: 0.85,
      fill: { color: theme.accent }
    });

    // Number
    slide.addShape("ellipse", {
      x: 0.75, y: y + 0.175, w: 0.5, h: 0.5,
      fill: { color: theme.secondary }
    });
    slide.addText(String(i + 1), {
      x: 0.75, y: y + 0.175, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 1.45, y: y + 0.1, w: 7.85, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 1.45, y: y + 0.45, w: 7.85, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Key takeaway
  slide.addShape("roundRect", {
    x: 0.5, y: 4.9, w: 9, h: 0.6,
    fill: { color: theme.light, transparency: 60 },
    rectRadius: 0.08
  });
  slide.addText("用户很难分辨哪部分可靠，哪部分只是统计规律拼凑", {
    x: 0.7, y: 4.9, w: 8.6, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("48", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-48-preview.pptx" })
    .then(() => console.log("Preview saved: slide-48-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
