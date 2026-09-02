// 页 155: 表格 - 最终方案组合模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 155,
  title: '最终方案组合模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("最终模板  /  Final Template", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("最终方案组合", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三段式结构卡片
  // 短期
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 9, h: 1.15,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 1.6, h: 1.15,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("短期", {
    x: 0.5, y: 1.55, w: 1.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("3 个月内", {
    x: 0.5, y: 1.95, w: 1.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 2,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("■ 打基础的方案  +  ■ 快速见效的方案", {
    x: 0.5, y: 2.25, w: 1.6, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle", margin: 0
  });
  // 短期 右侧
  slide.addText("[方案名]  →  目的 / 创造条件 / 验证假设", {
    x: 2.3, y: 1.65, w: 7, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("[方案名]  →  目的 / 创造条件 / 验证假设", {
    x: 2.3, y: 2.05, w: 7, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.3, y: 2.5, w: 7, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 中期
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75, w: 9, h: 1.15,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75, w: 1.6, h: 1.15,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("中期", {
    x: 0.5, y: 2.8, w: 1.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("3~12 个月", {
    x: 0.5, y: 3.2, w: 1.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 2,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("■ 依赖积累 + ■ 依赖相关方", {
    x: 0.5, y: 3.5, w: 1.6, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("[方案名]  →  依赖前提 / 立场变化 / 当前策略", {
    x: 2.3, y: 2.9, w: 7, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("[方案名]  →  依赖前提 / 立场变化 / 当前策略", {
    x: 2.3, y: 3.3, w: 7, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.3, y: 3.75, w: 7, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 暂时搁置
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 1.6, h: 1.0,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("暂时", {
    x: 0.5, y: 4.05, w: 1.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("搁置", {
    x: 0.5, y: 4.45, w: 1.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("■ 有效但当前不可行（记录改变条件）  /  ■ 可行但影响有限（保留记录）", {
    x: 2.3, y: 4.0, w: 7, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 底部
  slide.addText("这份组合 = 你进入行动策略阶段的核心输入。", {
    x: 0.5, y: 5.1, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "155", "第四五章 从候选到落地");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 0.5, y: 5.46, w: 5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'left', valign: 'middle', margin: 0
  });
  slide.addText(sectionName, {
    x: 6, y: 5.46, w: 3.5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'right', valign: 'middle', margin: 0
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "6B0F0F",
    secondary: "3D3D3D",
    accent:    "B8232C",
    light:     "D4C5BE",
    bg:        "F5F0EC"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "155_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
