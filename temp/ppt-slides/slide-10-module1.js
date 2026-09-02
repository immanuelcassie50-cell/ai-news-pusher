// slide-10.js - 国企改革背景 - "对标世界一流"的硬指标
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 10,
  title: '国企改革背景 - "对标世界一流"的硬指标'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("国企改革背景 - \"对标世界一流\"的硬指标", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 背景说明卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 9, h: 1.1,
    fill: { color: theme.primary, transparency: 92 }
  });

  slide.addText('2020年以来，国资委强力推进"对标世界一流"管理提升行动，要求国企中高层管理者从传统的行政化管理思维转向经营化管理思维，聚焦效益、效率、成本等核心经营指标。', {
    x: 0.7, y: 1.0, w: 8.6, h: 1.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // 四大硬指标
  const indicators = [
    { num: "01", title: "效益效率", desc: "全员劳动生产率、人均利润等核心指标" },
    { num: "02", title: "成本管控", desc: "管理费用率、成本费用率等控制要求" },
    { num: "03", title: "创新驱动", desc: "研发投入占比、技术创新成果转化" },
    { num: "04", title: "风险合规", desc: "内控体系建设、风险预警能力" }
  ];

  const cardWidth = 2.1;
  const cardHeight = 2.5;
  const startX = 0.5;
  const gap = 0.2;
  const startY = 2.2;

  indicators.forEach((item, i) => {
    const x = startX + i * (cardWidth + gap);

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // 顶部强调条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.08,
      fill: { color: theme.accent }
    });

    // 编号
    slide.addText(item.num, {
      x: x, y: startY + 0.2, w: cardWidth, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });

    // 标题
    slide.addText(item.title, {
      x: x + 0.1, y: startY + 0.8, w: cardWidth - 0.2, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });

    // 分隔线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: startY + 1.4, w: cardWidth - 0.6, h: 0.03,
      fill: { color: theme.light }
    });

    // 描述
    slide.addText(item.desc, {
      x: x + 0.1, y: startY + 1.55, w: cardWidth - 0.2, h: 0.85,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false, align: "center", valign: "top"
    });
  });

  // 底部核心信息
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fill: { color: theme.accent }
  });
  slide.addText('核心要求：从"完成任务"到"创造价值"，用经营思维驱动管理行为', {
    x: 0.7, y: 4.85, w: 8.6, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "4a5568",
    accent: "c53030",
    light: "e2e8f0",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/电力/9-中层管理者经营力提升从行政管理到真经营/05-授课PPT/slides/slide-10-preview.pptx" })
    .then(() => console.log("Created: slide-10-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
