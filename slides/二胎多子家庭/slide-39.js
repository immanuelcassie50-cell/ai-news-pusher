// slide-39.js - 各年龄段时间长度参考
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 39,
  title: '各年龄段时间长度参考'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("各年龄段时间长度参考", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Time guidelines table
  const guidelines = [
    { age: "0-3岁", frequency: "每天多次", duration: "10-15分钟/次", note: "可分散在一天中" },
    { age: "3-6岁", frequency: "每天1-2次", duration: "15-20分钟/次", note: "安排在固定时间" },
    { age: "6-12岁", frequency: "每天1次或隔天1次", duration: "20-30分钟/次", note: "可与兴趣结合" },
    { age: "12-18岁", frequency: "每周2-3次", duration: "30-60分钟/次", note: "质量比频率重要" }
  ];

  // Table header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 0.6,
    fill: { color: theme.secondary }
  });

  const headers = ["年龄段", "频率", "时长", "备注"];
  const colWidths = [1.8, 2.2, 2.0, 3.0];
  let xPos = 0.5;

  headers.forEach((header, idx) => {
    slide.addText(header, {
      x: xPos, y: 1.2, w: colWidths[idx], h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    xPos += colWidths[idx];
  });

  // Table rows
  guidelines.forEach((row, idx) => {
    const y = 1.8 + idx * 0.85;
    const bgColor = idx % 2 === 0 ? "FFFFFF" : theme.bg;

    // Row background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: bgColor }
    });

    // Row data
    const values = [row.age, row.frequency, row.duration, row.note];
    let xPos2 = 0.5;

    values.forEach((val, vIdx) => {
      slide.addText(val, {
        x: xPos2, y: y, w: colWidths[vIdx], h: 0.85,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: vIdx === 0 ? theme.primary : theme.secondary,
        bold: vIdx === 0,
        align: "center", valign: "middle"
      });
      xPos2 += colWidths[vIdx];
    });
  });

  // Note at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.light, transparency: 70 }
  });
  slide.addText("提示：这是参考值，根据实际情况调整。关键是持续和用心，而非严格按表执行。", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-39-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
