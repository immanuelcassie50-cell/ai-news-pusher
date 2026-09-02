// slide-134.js - 更大的图景
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 134,
  title: '更大的图景'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("更大的图景", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three big picture insights
  const insights = [
    {
      title: "理解人类互动的透镜",
      desc: "博弈论不只是数学模型，更是理解人际关系的框架——从家庭到国际，每个场景都有博弈的影子"
    },
    {
      title: "合作是进化优势",
      desc: "为什么合作能在进化中胜出？因为它创造了无法通过单干获得的增益——理解这一点，让我们更有信心投资合作"
    },
    {
      title: "建设更好的制度和关系",
      desc: "理解博弈的目的不是操纵，而是设计更好的规则和关系——让合作成为各方的理性选择"
    }
  ];

  insights.forEach((ins, i) => {
    const y = 1.2 + i * 1.35;

    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 1.15,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Top accent bar for each card
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.06,
      fill: { color: i === 0 ? theme.primary : i === 1 ? theme.secondary : theme.accent }
    });

    slide.addText(ins.title, {
      x: 0.7, y: y + 0.15, w: 8.6, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    slide.addText(ins.desc, {
      x: 0.7, y: y + 0.55, w: 8.6, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
  });

  // Bottom quote
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("理解博弈，是为了创造一个合作更容易的世界", {
    x: 0.5, y: 5.0, w: 9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("134", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-134-preview.pptx" });
}
