// slide-133.js - 工具模板 | SCAMPER检核表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 133,
  title: '工具模板 | SCAMPER检核表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("工具模板 | SCAMPER检核表", {
    x: 0.5, y: 0.3, w: 7, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("附录参考资料", {
    x: 0.5, y: 0.75, w: 4, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // SCAMPER items in two columns
  const scapmerItems = [
    { letter: "S", title: "Substitute 替代", questions: ["什么可以替代？", "谁可以替代？", "在哪里替代？"] },
    { letter: "C", title: "Combine 组合", questions: ["可以和什么组合？", "功能可以叠加吗？", "用户可以连接吗？"] },
    { letter: "A", title: "Adapt 适应", questions: ["哪里可以适应？", "有什么相似？", "能借鉴什么？"] },
    { letter: "M", title: "Modify 改变", questions: ["可以改变什么？", "大小/颜色/形状？", "可以夸张吗？"] },
    { letter: "P", title: "Put to other use 其他用途", questions: ["还有其他用途吗？", "可以用在别处吗？", "有新的用户群吗？"] },
    { letter: "E", title: "Eliminate 消除", questions: ["可以消除什么？", "可以简化吗？", "可以删除吗？"] },
    { letter: "R", title: "Reverse 反向", questions: ["可以反向吗？", "可以颠覆吗？", "能逆向思考吗？"] }
  ];

  const colW = 4.5;
  const itemH = 0.55;
  const startY = 1.1;

  scapmerItems.forEach((item, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i < 4 ? i : i - 4;
    const x = 0.5 + col * colW;
    const y = startY + row * (itemH * 3 + 0.1);

    // Letter badge
    slide.addShape(pres.shapes.OVAL, {
      x: x, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });

    slide.addText(item.letter, {
      x: x, y: y, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.6, y: y + 0.05, w: 3.8, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Questions
    slide.addText(item.questions.map((q, qi) => `${qi + 1}. ${q}`).join("\n"), {
      x: x + 0.6, y: y + 0.45, w: 3.8, h: 0.8,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Usage guide
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.light }
  });

  slide.addText("使用方法：针对每个维度，逐一检核你的产品/服务/流程，记录创新想法", {
    x: 0.6, y: 5.08, w: 8.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("133", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
