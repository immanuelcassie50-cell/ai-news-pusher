// 页 147: 表格 - 候选方案评估表模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 147,
  title: '候选方案评估表模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("工作表  /  Worksheet", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("候选方案评估表", {
    x: 0.5, y: 0.85, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 表头
  const headers = ["方案简述", "可行性", "受限需谁改", "有效性", "突破性", "评级"];
  const colWidths = [2.5, 1.0, 1.6, 1.0, 1.0, 1.1];
  const startX = 0.5;
  let cx = startX;

  // 表头行
  headers.forEach((h, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: 1.6, w: colWidths[i], h: 0.45,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(h, {
      x: cx, y: 1.6, w: colWidths[i], h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    cx += colWidths[i];
  });

  // 6 行空白
  for (let r = 0; r < 6; r++) {
    cx = startX;
    for (let c = 0; c < headers.length; c++) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: cx, y: 2.05 + r * 0.42, w: colWidths[c], h: 0.42,
        fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
      });
      cx += colWidths[c];
    }
  }

  // 底部说明
  slide.addText("📌  示例行参考：见下一页（账单异常自动检测）。", {
    x: 0.5, y: 4.7, w: 9, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("可行性「受限」≠ 直接划掉：记录需要谁改变立场、什么策略推动。", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "147", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "147_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
