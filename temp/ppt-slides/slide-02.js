// slide-02.js - 学习地图
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '学习地图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("学习地图", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 表头背景
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fill: { color: theme.primary }
  });

  // 表头文字
  slide.addText("章节", {
    x: 0.5, y: 1.1, w: 1.8, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("你在做什么", {
    x: 2.3, y: 1.1, w: 3.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("带走什么", {
    x: 5.9, y: 1.1, w: 3.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 数据行
  const rows = [
    { num: "5", title: "为什么用访谈", action: "理解访谈逻辑，做好角色准备", takeaway: "访谈视角和心理准备" },
    { num: "6", title: "访谈提问框架", action: "熟悉提问清单和追问技巧", takeaway: "一套三层经验导向的提问工具" },
    { num: "7", title: "访谈演练", action: "两两相互访谈，全程录音", takeaway: "访谈录音 + 关键经验要点记录" },
    { num: "8", title: "素材整理与方向确认", action: "分类整理素材，锁定工具方向", takeaway: "素材分类清单 + 工具开发优先级" }
  ];

  const startY = 1.6;
  const rowHeight = 0.9;

  rows.forEach((row, i) => {
    const y = startY + i * rowHeight;
    const isEven = i % 2 === 0;

    // 行背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: rowHeight,
      fill: { color: isEven ? theme.light : theme.bg }
    });

    // 章节编号圆形标记
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.25, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(row.num, {
      x: 0.7, y: y + 0.25, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // 章节标题
    slide.addText("第" + row.num + "章 " + row.title, {
      x: 1.2, y: y, w: 1.5, h: rowHeight,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });

    // 你在做什么
    slide.addText(row.action, {
      x: 2.3, y: y, w: 3.6, h: rowHeight,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false, align: "left", valign: "middle"
    });

    // 带走什么
    slide.addText(row.takeaway, {
      x: 5.9, y: y, w: 3.6, h: rowHeight,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false, align: "left", valign: "middle"
    });
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("02", {
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
    primary: "8B2942",
    secondary: "4A4A4A",
    accent: "C75B5B",
    light: "E8D5D5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };