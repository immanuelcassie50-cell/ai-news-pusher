// slide-100.js - Negotiation Structure
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 100,
  title: '谈判的博弈结构'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("谈判的博弈结构", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three key questions
  const questions = [
    {
      q: "这是什么样的博弈？",
      sub: "识别游戏类型"
    },
    {
      q: "是零和还是正和？",
      sub: "蛋糕大小是否固定"
    },
    {
      q: "能否改变博弈规则？",
      sub: "创造新的游戏"
    }
  ];

  questions.forEach((item, idx) => {
    const y = 1.3 + idx * 1.25;

    // Number circle
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.15, w: 0.7, h: 0.7,
      fill: { color: idx === 0 ? theme.primary : idx === 1 ? theme.accent : theme.secondary }
    });
    slide.addText((idx + 1).toString(), {
      x: 0.7, y: y + 0.15, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question
    slide.addText(item.q, {
      x: 1.6, y: y, w: 7.5, h: 0.55,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Subtitle
    slide.addText(item.sub, {
      x: 1.6, y: y + 0.55, w: 7.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Visual diagram - zero-sum vs positive-sum
  // Left box - Zero-sum
  slide.addShape("roundRect", {
    x: 0.7, y: 4.3, w: 4.0, h: 1.1,
    fill: { color: theme.primary, transparency: 88 },
    rectRadius: 0.08
  });
  slide.addText("零和博弈", {
    x: 0.7, y: 4.35, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("你赢我输，蛋糕固定", {
    x: 0.7, y: 4.75, w: 4.0, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Right box - Positive-sum
  slide.addShape("roundRect", {
    x: 5.0, y: 4.3, w: 4.0, h: 1.1,
    fill: { color: theme.accent, transparency: 80 },
    rectRadius: 0.08
  });
  slide.addText("正和博弈", {
    x: 5.0, y: 4.35, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("合作共赢，蛋糕变大", {
    x: 5.0, y: 4.75, w: 4.0, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("100", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "slide-100-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
