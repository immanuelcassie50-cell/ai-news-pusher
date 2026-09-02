// slide-32.js - Why build indicator system (为什么要建立指标体系)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 32,
  title: '为什么要建立指标体系'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("为什么要建立指标体系", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Problem statement
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 9.0, h: 1.0,
    fill: { color: theme.accent, transparency: 92 },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("问题：", {
    x: 0.7, y: 1.3, w: 0.8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("\"俄罗斯是陆权国家还是海权国家？\"——这类问题众说纷纭，缺乏客观评判标准", {
    x: 1.45, y: 1.3, w: 7.8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  slide.addText("\"中国是威胁还是现状维护者？\"——定性分析容易被立场左右", {
    x: 1.45, y: 1.7, w: 7.8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Three benefits
  slide.addText("指标体系的价值", {
    x: 0.5, y: 2.4, w: 9.0, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const benefits = [
    {
      num: "1",
      title: "客观量化",
      desc: "将战略倾向转化为可测量的指标，避免主观臆断"
    },
    {
      num: "2",
      title: "横向比较",
      desc: "不同国家、不同时期的战略倾向可以放在同一维度对比"
    },
    {
      num: "3",
      title: "趋势追踪",
      desc: "通过时间序列数据，观察一国战略重心的动态演变"
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.5;
  const gap = 0.35;

  benefits.forEach((benefit, idx) => {
    const x = startX + idx * (cardWidth + gap);
    const y = 2.9;

    // Card
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: 1.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number
    slide.addShape("ellipse", {
      x: x + cardWidth / 2 - 0.25, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(benefit.num, {
      x: x + cardWidth / 2 - 0.25, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(benefit.title, {
      x: x + 0.15, y: y + 0.75, w: cardWidth - 0.3, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(benefit.desc, {
      x: x + 0.15, y: y + 1.1, w: cardWidth - 0.3, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom quote
  slide.addShape("rect", {
    x: 0.5, y: 4.9, w: 9.0, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("「无法测量就无法管理，无法管理就无法优化」", {
    x: 0.5, y: 4.9, w: 9.0, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false, italic: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("32", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-32-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
