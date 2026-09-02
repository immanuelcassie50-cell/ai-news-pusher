// slide-55.js - 第四模块总结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 55,
  title: '第四模块总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("第四模块总结", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("55", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Module title
  slide.addText("海权与陆权的现代博弈", {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Key cases summary
  const cases = [
    {
      case: "南海争端",
      lesson: "海洋权益的多方博弈",
      icon: "🌊"
    },
    {
      case: "中欧班列",
      lesson: "陆权对海权的战略反击",
      icon: "🚂"
    },
    {
      case: "瓜达尔港",
      lesson: "印度洋支点与能源安全",
      icon: "⚓"
    },
    {
      case: "印度大国梦",
      lesson: "新兴力量的地缘战略",
      icon: "🇮🇳"
    }
  ];

  cases.forEach((c, idx) => {
    const x = 0.5 + idx * 2.35;

    slide.addShape("rect", {
      x: x, y: 1.8, w: 2.15, h: 1.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addText(c.icon, {
      x: x, y: 1.9, w: 2.15, h: 0.5,
      fontSize: 24,
      align: "center", valign: "middle"
    });

    slide.addText(c.case, {
      x: x, y: 2.4, w: 2.15, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(c.lesson, {
      x: x + 0.1, y: 2.8, w: 1.95, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Core insights box
  slide.addShape("rect", {
    x: 0.5, y: 3.6, w: 9, h: 1.75,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.6, w: 0.08, h: 1.75,
    fill: { color: theme.accent }
  });

  slide.addText("核心要点", {
    x: 0.75, y: 3.75, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const insights = [
    "海权与陆权的博弈不是零和游戏，而是相互补充、相互竞争",
    "技术进步正在改变传统地缘政治格局，高铁、港口、管道重塑权力分布",
    "陆权强国通过基础设施建设寻求海上通道的替代方案",
    "沿海国家与内陆国家在全球贸易中各有优势与劣势",
    "未来将是多维度、多主体的复合地缘竞争时代"
  ];

  insights.forEach((ins, idx) => {
    const col = idx < 3 ? 0 : 1;
    const row = idx < 3 ? idx : idx - 3;
    const x = 0.75 + col * 4.5;
    const y = 4.2 + row * 0.38;

    slide.addShape("ellipse", {
      x: x, y: y + 0.06, w: 0.12, h: 0.12,
      fill: { color: idx < 3 ? theme.primary : theme.accent }
    });
    slide.addText(ins, {
      x: x + 0.25, y: y, w: 4.1, h: 0.38,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-55-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
