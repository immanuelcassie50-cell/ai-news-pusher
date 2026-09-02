const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';

// Rewrite slide-45 with properly escaped content
const content = `// slide-45.js - Question 1 Response: 机器哪有真人靠谱？
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 45,
  title: '质疑回应1：机器哪有真人靠谱？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Question badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 0.3, w: 1.4, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("质疑1", {
    x: 0.5, y: 0.3, w: 1.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title - the question itself
  slide.addText("「机器哪有真人靠谱？」", {
    x: 2.0, y: 0.25, w: 7.5, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Response structure
  // Left side - the response card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 5.8, h: 3.4,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, color: '000000', opacity: 0.08 }
  });

  // Response header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 5.8, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("标准回应话术", {
    x: 0.7, y: 1.1, w: 2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  // Response text
  const responseText = "AI是帮您快速找到人、减少等待的。复杂问题、情绪激动的情况，我们客服会第一时间人工接入，不会让您对着机器干着急。";

  slide.addText(responseText, {
    x: 0.7, y: 1.75, w: 5.4, h: 1.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Response breakdown label
  slide.addText("话术拆解", {
    x: 0.7, y: 3.0, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Breakdown points
  const breakdown = [
    { part: "开场认同", text: "「AI是帮您快速找到人、减少等待的」" },
    { part: "承认局限", text: "「复杂问题、情绪激动的情况」" },
    { part: "人工兜底", text: "「我们客服会第一时间人工接入」" },
    { part: "消除焦虑", text: "「不会让您对着机器干着急」" }
  ];

  breakdown.forEach((item, i) => {
    const y = 3.4 + i * 0.26;
    slide.addText("·", {
      x: 0.7, y: y, w: 0.2, h: 0.26,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent
    });
    slide.addText(item.part + "：", {
      x: 0.9, y: y, w: 0.9, h: 0.26,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(item.text, {
      x: 1.8, y: y, w: 4.3, h: 0.26,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right side - key principles
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.5, y: 1.1, w: 3.0, h: 3.4,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("回应原则", {
    x: 6.7, y: 1.3, w: 2.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.7, y: 1.75, w: 2.6, h: 0.02,
    fill: { color: theme.light }
  });

  const principles = [
    { num: "1", text: "承认AI的局限性，不夸大其词" },
    { num: "2", text: "明确人工兜底的机制和时效" },
    { num: "3", text: "把焦虑转化为期待（快速响应）" },
    { num: "4", text: "用「我们」而非「系统」拉近距离" }
  ];

  principles.forEach((p, i) => {
    const y = 1.95 + i * 0.6;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 6.7, y: y, w: 0.3, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(p.num, {
      x: 6.7, y: y, w: 0.3, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Principle text
    slide.addText(p.text, {
      x: 7.1, y: y, w: 2.2, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF"
    });
  });

  // Bottom tip box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.65, w: 9, h: 0.65,
    fill: { color: theme.bg },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  slide.addText("核心心法", {
    x: 0.7, y: 4.72, w: 1.2, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("不要否定业主的顾虑，也不要夸大AI能力。承认局限、承诺兜底，才是建立信任的正确方式。", {
    x: 0.7, y: 4.97, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2D2D2D",
    secondary: "5A5A5A",
    accent: "C41E3A",
    light: "E8364F",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-45-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
`;

fs.writeFileSync(path, content);
console.log('Written slide-45.js');

// Verify
try {
  new Function(content);
  console.log('Syntax OK');
} catch(e) {
  console.log('Error:', e.message);
}
