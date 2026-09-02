// slide-62.js - Course summary (课程总结)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 62,
  title: '课程总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程总结", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("海权与陆权：两大地缘范式的现代演变", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Three part summary
  const summaryParts = [
    {
      part: "PART 1",
      title: "理论根基",
      color: theme.primary,
      points: ["马汉的海权论", "麦金德的陆权论", "地缘政治的演变"]
    },
    {
      part: "PART 2",
      title: "现代演变",
      color: theme.accent,
      points: ["核时代的均衡", "全球化与技术变革", "新地缘博弈"]
    },
    {
      part: "PART 3",
      title: "应用实践",
      color: theme.secondary,
      points: ["预判战略意图", "投资与职业决策", "个人分析框架"]
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.5;
  const gap = 0.25;

  summaryParts.forEach((part, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card
    slide.addShape("rect", {
      x: x, y: 1.55, w: cardWidth, h: 2.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Top accent bar
    slide.addShape("rect", {
      x: x, y: 1.55, w: cardWidth, h: 0.12,
      fill: { color: part.color }
    });

    // Part label
    slide.addText(part.part, {
      x: x + 0.15, y: 1.75, w: cardWidth - 0.3, h: 0.35,
      fontSize: 10, fontFace: "Arial",
      color: part.color, bold: true,
      align: "left", valign: "middle"
    });

    // Title
    slide.addText(part.title, {
      x: x + 0.15, y: 2.1, w: cardWidth - 0.3, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Points
    part.points.forEach((point, pIdx) => {
      slide.addShape("ellipse", {
        x: x + 0.25, y: 2.75 + pIdx * 0.45, w: 0.12, h: 0.12,
        fill: { color: part.color }
      });
      slide.addText(point, {
        x: x + 0.5, y: 2.65 + pIdx * 0.45, w: cardWidth - 0.65, h: 0.4,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });
  });

  // Key takeaways
  slide.addShape("rect", {
    x: 0.5, y: 4.3, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });

  slide.addText("核心收获", {
    x: 0.7, y: 4.4, w: 1.5, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const takeaways = [
    "海权与陆权并非对立，而是相互补充的地缘视角",
    "技术变革正在重塑传统地缘政治格局",
    "分析框架比结论更重要"
  ];

  takeaways.forEach((ta, idx) => {
    slide.addText("→ " + ta, {
      x: 0.7 + idx * 3.0, y: 4.65, w: 2.9, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("62", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
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
  pres.writeFile({ fileName: "D:/CC/slides/slide-62-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
