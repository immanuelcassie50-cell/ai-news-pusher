// slide-07.js - Content Page: 斯密的历史坐标（时间线）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '斯密的历史坐标'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page title
  slide.addText("斯密的历史坐标", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("思想传承：从斯密到今天", {
    x: 0.5, y: 0.95, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Timeline - vertical layout on left
  const timelineX = 1.2;
  const startY = 1.5;
  const itemHeight = 0.95;

  const timelineItems = [
    { year: "1723", name: "亚当·斯密出生", loc: "苏格兰格拉斯哥" },
    { year: "1751", name: "任格拉斯哥大学教授", loc: "逻辑学、道德哲学" },
    { year: "1759", name: "《道德情操论》出版", loc: "探讨道德哲学基础" },
    { year: "1776", name: "《国富论》出版", loc: "经济学奠基之作" },
    { year: "1790", name: "斯密去世", loc: "葬于爱丁堡" },
    { year: "19世纪", name: "李嘉图、穆勒发展", loc: "古典经济学体系" },
    { year: "1976", name: "哈耶克《致命的自负》", loc: "新自由主义回潮" }
  ];

  // Draw vertical timeline line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: timelineX + 0.35, y: startY + 0.1, w: 0.04, h: 5.2,
    fill: { color: theme.light }
  });

  timelineItems.forEach((item, i) => {
    const y = startY + i * itemHeight;

    // Circle marker
    slide.addShape(pres.shapes.OVAL, {
      x: timelineX + 0.2, y: y, w: 0.35, h: 0.35,
      fill: { color: i === 2 || i === 3 ? theme.primary : theme.light }
    });

    // Year
    slide.addText(item.year, {
      x: timelineX + 0.7, y: y - 0.05, w: 1.2, h: 0.3,
      fontSize: 13, fontFace: "Georgia",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Event name
    slide.addText(item.name, {
      x: timelineX + 1.9, y: y - 0.05, w: 2.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Location/context
    slide.addText(item.loc, {
      x: timelineX + 1.9, y: y + 0.22, w: 2.5, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right side - context panel
  const panelX = 5.5;
  const panelY = 1.5;
  const panelW = 4.0;
  const panelH = 3.8;

  // Panel background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: panelX, y: panelY, w: panelW, h: panelH,
    fill: { color: theme.secondary }
  });

  // Panel title
  slide.addText("斯密的历史位置", {
    x: panelX + 0.3, y: panelY + 0.3, w: panelW - 0.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: panelX + 0.3, y: panelY + 0.85, w: 1.5, h: 0.03,
    fill: { color: theme.light }
  });

  // Panel content
  const panelContent = [
    { text: "前承", options: { bold: true, breakLine: true } },
    { text: "苏格兰启蒙运动（休谟、弗格森）", options: { breakLine: true } },
    { text: "约翰·洛克、启蒙理性主义", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "横跨", options: { bold: true, breakLine: true } },
    { text: "哲学、经济学、伦理学、法学", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "后启", options: { bold: true, breakLine: true } },
    { text: "古典经济学（李嘉图、穆勒）", options: { breakLine: true } },
    { text: "新古典经济学（马歇尔）", options: { breakLine: true } },
    { text: "奥地利学派（米塞斯、哈耶克）", options: { breakLine: true } },
    { text: "芝加哥学派（弗里德曼）", options: {} }
  ];

  slide.addText(panelContent, {
    x: panelX + 0.3, y: panelY + 1.0, w: panelW - 0.6, h: 2.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "top"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("7", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-07-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
