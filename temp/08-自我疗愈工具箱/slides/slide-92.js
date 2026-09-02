const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "工具选择决策卡",
  type: "content",
  pageNumber: 92
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("92", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("工具选择决策卡", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Decision factors
  const factors = [
    { factor: "时间", options: ["1-2分钟", "3-5分钟", "5-10分钟"], tools: ["深呼吸", "3分钟呼吸空间", "PMR/身体扫描"] },
    { factor: "能量", options: ["高能量", "中能量", "低能量/疲惫"], tools: ["身体激活型", "温和启动型", "呼吸/扫描"] },
    { factor: "场景", options: ["晨间床边", "工作场所", "家中夜晚"], tools: ["感恩+呼吸", "隐蔽练习", "卧床练习"] },
    { factor: "需求", options: ["需要能量", "需要平静", "需要释放"], tools: ["PMR/身体激活", "呼吸/冥想", "书写/情绪释放"] }
  ];

  factors.forEach((f, i) => {
    const x = 0.5 + i * 2.35;

    // Factor header
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.2, w: 2.2, h: 0.5,
      fill: { color: theme.primary }
    });

    slide.addText(f.factor, {
      x: x, y: 1.2, w: 2.2, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Options
    f.options.forEach((opt, j) => {
      const y = 1.85 + j * 0.55;

      slide.addShape(pres.ShapeType.rect, {
        x: x, y: y, w: 2.2, h: 0.45,
        fill: { color: "FFFFFF" },
        line: { color: theme.light, width: 0.5 }
      });

      slide.addText(opt, {
        x: x, y: y, w: 2.2, h: 0.45,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        align: "center", valign: "middle"
      });
    });

    // Arrow
    slide.addText("↓", {
      x: x, y: 3.5, w: 2.2, h: 0.35,
      fontSize: 16, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    // Recommended tools
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.9, w: 2.2, h: 1.0,
      fill: { color: theme.accent }
    });

    slide.addText(f.tools.join(" / "), {
      x: x, y: 3.9, w: 2.2, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
