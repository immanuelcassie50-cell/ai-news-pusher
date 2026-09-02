// slide-23_第一章_追赶者的机会 - 解释说明
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 23,
  title: '追赶者的机会'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("追赶者的机会", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心观点框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.0,
    fill: { color: theme.primary }, line: { color: theme.accent, width: 2 }
  });
  slide.addText("晚动车的优势：可以借鉴先行者的经验教训，避免重复踩坑", {
    x: 0.7, y: 1.2, w: 8.6, h: 1.0,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 四个机会点
  const opportunities = [
    { icon: "01", title: "学习路径清晰", desc: "先行者的成功与失败都是宝贵的参照" },
    { icon: "02", title: "技术成本下降", desc: "AI技术使用门槛持续降低" },
    { icon: "03", title: "人才市场成熟", desc: "AI人才供给增加，招聘成本下降" },
    { icon: "04", title: "行业解决方案", desc: "垂直行业的最佳实践逐渐成型" }
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.3;
  const startX = 0.5;
  const gapX = 0.35;
  const gapY = 0.25;
  const row1Y = 2.5;
  const row2Y = row1Y + cardHeight + gapY;

  [opportunities.slice(0, 2), opportunities.slice(2, 4)].forEach((row, ri) => {
    const y = ri === 0 ? row1Y : row2Y;
    row.forEach((opp, ci) => {
      const x = startX + ci * (cardWidth + gapX);

      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: y, w: cardWidth, h: cardHeight,
        fill: { color: theme.secondary }, line: { type: 'none' }
      });

      // 编号
      slide.addText(opp.icon, {
        x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.4,
        fontSize: 20, fontFace: "Georgia",
        color: theme.accent, bold: true,
        align: "left", valign: "middle", margin: 0
      });

      // 标题
      slide.addText(opp.title, {
        x: x + 0.7, y: y + 0.2, w: 3.3, h: 0.4,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: "FFFFFF", bold: true,
        align: "left", valign: "middle", margin: 0
      });

      // 描述
      slide.addText(opp.desc, {
        x: x + 0.7, y: y + 0.65, w: 3.3, h: 0.5,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: "90e0ef",
        align: "left", valign: "top", margin: 0
      });
    });
  });

  // 页码
  slide.addText("23", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-23-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
