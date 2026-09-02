// slide-88.js - 行动计划记录表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 88,
  title: '30天记录表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("30天记录表", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Table header
  const colWidths = [1.5, 2.0, 3.0, 2.5];
  const colX = [0.5, 2.0, 4.0, 7.0];
  const headerY = 1.2;
  const rowHeight = 0.5;

  const headers = ["日期", "孩子", "实践内容", "观察与反思"];
  headers.forEach((header, idx) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: colX[idx], y: headerY, w: colWidths[idx], h: rowHeight,
      fill: { color: theme.primary }
    });
    slide.addText(header, {
      x: colX[idx], y: headerY, w: colWidths[idx], h: rowHeight,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Table rows (5 sample rows)
  for (let i = 0; i < 6; i++) {
    const rowY = headerY + rowHeight + i * rowHeight;
    const fillColor = i % 2 === 0 ? "FFFFFF" : theme.light;

    headers.forEach((_, idx) => {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: colX[idx], y: rowY, w: colWidths[idx], h: rowHeight,
        fill: { color: fillColor, transparency: i % 2 === 0 ? 0 : 50 },
        line: { color: theme.light, width: 0.5 }
      });
    });
  }

  // Example text
  slide.addText("示例：8月1日 / 小明 / 专属时间15分钟 / 孩子表现更放松", {
    x: 0.5, y: headerY + rowHeight + 0.1, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Note at bottom
  slide.addText("每天记录，持续观察孩子的变化与成长", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-88-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
