import os

output_dir = "D:/新课开发/自然科学/15.AI大模型底层原理/授课PPT/slides/output"
os.makedirs(output_dir, exist_ok=True)

compile_js = r'''const pptxgen = require('pptxgenjs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: "1A1A1A",
  secondary: "2D2D2D",
  accent: "B81025",
  light: "E8E4DF",
  bg: "F6F3EF"
};

// ========== SLIDE 1: Section Divider - 训练与对齐 ==========
const slide1 = pres.addSlide();
slide1.background = { color: theme.primary };

slide1.addText("03", {
  x: 0.8, y: 1.2, w: 3.5, h: 2.5,
  fontSize: 120, fontFace: "Arial",
  color: theme.accent, bold: true,
  align: "left", valign: "middle"
});

slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 3.8, w: 1.2, h: 0.08,
  fill: { color: theme.accent }
});

slide1.addText("训练与对齐", {
  x: 0.8, y: 4.0, w: 6, h: 0.8,
  fontSize: 44, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "left", valign: "middle"
});

slide1.addText("预训练/微调/RLHF", {
  x: 0.8, y: 4.75, w: 6, h: 0.5,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: theme.light,
  align: "left", valign: "middle"
});

slide1.addShape(pres.shapes.RECTANGLE, {
  x: 7.5, y: 0, w: 2.5, h: 5.625,
  fill: { color: theme.secondary, transparency: 30 }
});

slide1.addShape(pres.shapes.OVAL, {
  x: 8.0, y: 1.5, w: 1.5, h: 1.5,
  fill: { color: theme.accent, transparency: 20 }
});

slide1.addShape(pres.shapes.OVAL, {
  x: 7.8, y: 3.5, w: 0.8, h: 0.8,
  fill: { color: theme.light, transparency: 40 }
});

// ========== SLIDE 2: 大模型是如何训练的？ ==========
const slide2 = pres.addSlide();
slide2.background = { color: theme.bg };

slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.9,
  fill: { color: theme.primary }
});

slide2.addText("大模型是如何训练的？", {
  x: 0.5, y: 0, w: 9, h: 0.9,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "left", valign: "middle"
});

slide2.addText("三阶段训练流程", {
  x: 0.5, y: 1.1, w: 9, h: 0.5,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "left", valign: "middle"
});

const boxWidth = 2.4, boxHeight = 2.0, startX = 0.8, boxY = 2.0, gap = 0.6;

// Box 1: Pretraining
slide2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: startX, y: boxY, w: boxWidth, h: boxHeight,
  fill: { color: theme.primary }, rectRadius: 0.1
});
slide2.addText("01", {
  x: startX, y: boxY + 0.2, w: boxWidth, h: 0.5,
  fontSize: 24, fontFace: "Arial",
  color: theme.accent, bold: true,
  align: "center", valign: "middle"
});
slide2.addText("预训练", {
  x: startX, y: boxY + 0.7, w: boxWidth, h: 0.5,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});
slide2.addText("Pretraining", {
  x: startX, y: boxY + 1.15, w: boxWidth, h: 0.35,
  fontSize: 11, fontFace: "Arial",
  color: theme.light,
  align: "center", valign: "middle"
});

// Arrow 1
slide2.addShape(pres.shapes.RECTANGLE, {
  x: startX + boxWidth + 0.1, y: boxY + boxHeight / 2 - 0.04, w: gap - 0.2, h: 0.08,
  fill: { color: theme.accent }
});
slide2.addText(">", {
  x: startX + boxWidth + gap - 0.25, y: boxY + boxHeight / 2 - 0.2, w: 0.3, h: 0.4,
  fontSize: 18, fontFace: "Arial",
  color: theme.accent, bold: true,
  align: "center", valign: "middle"
});

// Box 2: Fine-tuning
const box2X = startX + boxWidth + gap;
slide2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: box2X, y: boxY, w: boxWidth, h: boxHeight,
  fill: { color: theme.secondary }, rectRadius: 0.1
});
slide2.addText("02", {
  x: box2X, y: boxY + 0.2, w: boxWidth, h: 0.5,
  fontSize: 24, fontFace: "Arial",
  color: theme.accent, bold: true,
  align: "center", valign: "middle"
});
slide2.addText("微调", {
  x: box2X, y: boxY + 0.7, w: boxWidth, h: 0.5,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});
slide2.addText("Fine-tuning", {
  x: box2X, y: boxY + 1.15, w: boxWidth, h: 0.35,
  fontSize: 11, fontFace: "Arial",
  color: theme.light,
  align: "center", valign: "middle"
});

// Arrow 2
slide2.addShape(pres.shapes.RECTANGLE, {
  x: box2X + boxWidth + 0.1, y: boxY + boxHeight / 2 - 0.04, w: gap - 0.2, h: 0.08,
  fill: { color: theme.accent }
});
slide2.addText(">", {
  x: box2X + boxWidth + gap - 0.25, y: boxY + boxHeight / 2 - 0.2, w: 0.3, h: 0.4,
  fontSize: 18, fontFace: "Arial",
  color: theme.accent, bold: true,
  align: "center", valign: "middle"
});

// Box 3: Alignment
const box3X = box2X + boxWidth + gap;
slide2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: box3X, y: boxY, w: boxWidth, h: boxHeight,
  fill: { color: theme.accent }, rectRadius: 0.1
});
slide2.addText("03", {
  x: box3X, y: boxY + 0.2, w: boxWidth, h: 0.5,
  fontSize: 24, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});
slide2.addText("对齐", {
  x: box3X, y: boxY + 0.7, w: boxWidth, h: 0.5,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});
slide2.addText("Alignment", {
  x: box3X, y: boxY + 1.15, w: boxWidth, h: 0.35,
  fontSize: 11, fontFace: "Arial",
  color: "FFFFFF",
  align: "center", valign: "middle"
});

// Descriptions
slide2.addText("学习通用能力\n海量文本", {
  x: startX, y: boxY + boxHeight + 0.15, w: boxWidth, h: 0.7,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "center", valign: "top"
});
slide2.addText("适应特定任务\n少量数据", {
  x: box2X, y: boxY + boxHeight + 0.15, w: boxWidth, h: 0.7,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "center", valign: "top"
});
slide2.addText("符合人类价值观\n安全可靠", {
  x: box3X, y: boxY + boxHeight + 0.15, w: boxWidth, h: 0.7,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "center", valign: "top"
});

// Page badge 2
slide2.addShape(pres.shapes.OVAL, {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fill: { color: theme.accent }
});
slide2.addText("2", {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fontSize: 12, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

// ========== SLIDE 3: 预训练：学习通用能力 ==========
const slide3 = pres.addSlide();
slide3.background = { color: theme.bg };

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.9,
  fill: { color: theme.primary }
});

slide3.addText("预训练：学习通用能力", {
  x: 0.5, y: 0, w: 9, h: 0.9,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "left", valign: "middle"
});

// Stacked books
slide3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 1.6, w: 2.8, h: 0.5,
  fill: { color: theme.accent }, rectRadius: 0.05
});
slide3.addText("语言能力", {
  x: 0.6, y: 1.6, w: 2.8, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

slide3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.8, y: 2.2, w: 2.8, h: 0.5,
  fill: { color: theme.secondary }, rectRadius: 0.05
});
slide3.addText("世界知识", {
  x: 0.8, y: 2.2, w: 2.8, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

slide3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 2.8, w: 3.1, h: 0.5,
  fill: { color: theme.primary }, rectRadius: 0.05
});
slide3.addText("推理能力", {
  x: 0.5, y: 2.8, w: 3.1, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

slide3.addText("Pretraining Objectives", {
  x: 0.6, y: 3.5, w: 2.8, h: 0.35,
  fontSize: 10, fontFace: "Arial",
  color: theme.secondary,
  align: "center", valign: "middle"
});

// Description cards
const cardX = 4.2, cardWidth = 5.3, cardHeight = 1.0, cardGap = 0.2;

// Card 1
slide3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: cardX, y: 1.3, w: cardWidth, h: cardHeight,
  fill: { color: "FFFFFF" }, rectRadius: 0.08,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 }
});
slide3.addShape(pres.shapes.RECTANGLE, {
  x: cardX, y: 1.3, w: 0.08, h: cardHeight,
  fill: { color: theme.accent }
});
slide3.addText("语言理解", {
  x: cardX + 0.25, y: 1.35, w: 2, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  align: "left", valign: "middle"
});
slide3.addText("掌握语法、语义、上下文关系", {
  x: cardX + 0.25, y: 1.72, w: 4.8, h: 0.4,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "left", valign: "middle"
});

// Card 2
slide3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: cardX, y: 1.3 + cardHeight + cardGap, w: cardWidth, h: cardHeight,
  fill: { color: "FFFFFF" }, rectRadius: 0.08,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 }
});
slide3.addShape(pres.shapes.RECTANGLE, {
  x: cardX, y: 1.3 + cardHeight + cardGap, w: 0.08, h: cardHeight,
  fill: { color: theme.secondary }
});
slide3.addText("世界知识", {
  x: cardX + 0.25, y: 1.35 + cardHeight + cardGap, w: 2, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  align: "left", valign: "middle"
});
slide3.addText("学习事实、概念、常识", {
  x: cardX + 0.25, y: 1.72 + cardHeight + cardGap, w: 4.8, h: 0.4,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "left", valign: "middle"
});

// Card 3
slide3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: cardX, y: 1.3 + 2 * (cardHeight + cardGap), w: cardWidth, h: cardHeight,
  fill: { color: "FFFFFF" }, rectRadius: 0.08,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 }
});
slide3.addShape(pres.shapes.RECTANGLE, {
  x: cardX, y: 1.3 + 2 * (cardHeight + cardGap), w: 0.08, h: cardHeight,
  fill: { color: theme.primary }
});
slide3.addText("推理能力", {
  x: cardX + 0.25, y: 1.35 + 2 * (cardHeight + cardGap), w: 2, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  align: "left", valign: "middle"
});
slide3.addText("逻辑推导、问题解决能力", {
  x: cardX + 0.25, y: 1.72 + 2 * (cardHeight + cardGap), w: 4.8, h: 0.4,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "left", valign: "middle"
});

slide3.addText("目标：通过大规模无监督学习，建立通用的语言和知识表示能力", {
  x: 0.5, y: 4.9, w: 9, h: 0.4,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: theme.secondary, italic: true,
  align: "left", valign: "middle"
});

// Page badge 3
slide3.addShape(pres.shapes.OVAL, {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fill: { color: theme.accent }
});
slide3.addText("3", {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fontSize: 12, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

// ========== SLIDE 4: 预训练数据：从哪里来？ ==========
const slide4 = pres.addSlide();
slide4.background = { color: theme.bg };

slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.9,
  fill: { color: theme.primary }
});

slide4.addText("预训练数据：从哪里来？", {
  x: 0.5, y: 0, w: 9, h: 0.9,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "left", valign: "middle"
});

// Data source cards - 2x2 grid
const cW = 2.1, cH = 1.8, sX = 0.6, sY = 1.2, gX = 0.25, gY = 0.25;

// Card 1: Books
slide4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: sX, y: sY, w: cW, h: cH,
  fill: { color: "FFFFFF" }, rectRadius: 0.1,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
});
slide4.addShape(pres.shapes.RECTANGLE, {
  x: sX + 0.7, y: sY + 0.25, w: 0.7, h: 0.9,
  fill: { color: theme.accent }
});
slide4.addShape(pres.shapes.RECTANGLE, {
  x: sX + 0.85, y: sY + 0.35, w: 0.4, h: 0.08,
  fill: { color: "FFFFFF" }
});
slide4.addShape(pres.shapes.RECTANGLE, {
  x: sX + 0.85, y: sY + 0.5, w: 0.3, h: 0.08,
  fill: { color: "FFFFFF" }
});
slide4.addShape(pres.shapes.RECTANGLE, {
  x: sX + 0.85, y: sY + 0.65, w: 0.35, h: 0.08,
  fill: { color: "FFFFFF" }
});
slide4.addText("书籍", {
  x: sX, y: sY + 1.2, w: cW, h: 0.35,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  align: "center", valign: "middle"
});
slide4.addText("Books", {
  x: sX, y: sY + 1.5, w: cW, h: 0.25,
  fontSize: 10, fontFace: "Arial",
  color: theme.secondary,
  align: "center", valign: "middle"
});

// Card 2: Websites
const c2X = sX + cW + gX;
slide4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: c2X, y: sY, w: cW, h: cH,
  fill: { color: "FFFFFF" }, rectRadius: 0.1,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
});
slide4.addShape(pres.shapes.OVAL, {
  x: c2X + 0.65, y: sY + 0.25, w: 0.8, h: 0.8,
  fill: { color: theme.secondary }
});
slide4.addShape(pres.shapes.OVAL, {
  x: c2X + 0.85, y: sY + 0.35, w: 0.4, h: 0.6,
  line: { color: "FFFFFF", width: 1.5 }
});
slide4.addShape(pres.shapes.LINE, {
  x: c2X + 0.65, y: sY + 0.65, w: 0.8, h: 0,
  line: { color: "FFFFFF", width: 1.5 }
});
slide4.addText("网站", {
  x: c2X, y: sY + 1.2, w: cW, h: 0.35,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  align: "center", valign: "middle"
});
slide4.addText("Websites", {
  x: c2X, y: sY + 1.5, w: cW, h: 0.25,
  fontSize: 10, fontFace: "Arial",
  color: theme.secondary,
  align: "center", valign: "middle"
});

// Card 3: Articles
const c3X = sX;
const c3Y = sY + cH + gY;
slide4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: c3X, y: c3Y, w: cW, h: cH,
  fill: { color: "FFFFFF" }, rectRadius: 0.1,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
});
slide4.addShape(pres.shapes.RECTANGLE, {
  x: c3X + 0.7, y: c3Y + 0.2, w: 0.7, h: 0.95,
  fill: { color: theme.primary }
});
slide4.addShape(pres.shapes.RECTANGLE, {
  x: c3X + 0.8, y: c3Y + 0.4, w: 0.5, h: 0.08,
  fill: { color: theme.light }
});
slide4.addShape(pres.shapes.RECTANGLE, {
  x: c3X + 0.8, y: c3Y + 0.55, w: 0.4, h: 0.08,
  fill: { color: theme.light }
});
slide4.addShape(pres.shapes.RECTANGLE, {
  x: c3X + 0.8, y: c3Y + 0.7, w: 0.45, h: 0.08,
  fill: { color: theme.light }
});
slide4.addText("文章", {
  x: c3X, y: c3Y + 1.2, w: cW, h: 0.35,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  align: "center", valign: "middle"
});
slide4.addText("Articles", {
  x: c3X, y: c3Y + 1.5, w: cW, h: 0.25,
  fontSize: 10, fontFace: "Arial",
  color: theme.secondary,
  align: "center", valign: "middle"
});

// Card 4: Code
const c4X = sX + cW + gX;
const c4Y = sY + cH + gY;
slide4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: c4X, y: c4Y, w: cW, h: cH,
  fill: { color: "FFFFFF" }, rectRadius: 0.1,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
});
slide4.addText("< >", {
  x: c4X, y: c4Y + 0.3, w: cW, h: 0.7,
  fontSize: 32, fontFace: "Consolas",
  color: theme.accent, bold: true,
  align: "center", valign: "middle"
});
slide4.addText("代码", {
  x: c4X, y: c4Y + 1.2, w: cW, h: 0.35,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  align: "center", valign: "middle"
});
slide4.addText("Code", {
  x: c4X, y: c4Y + 1.5, w: cW, h: 0.25,
  fontSize: 10, fontFace: "Arial",
  color: theme.secondary,
  align: "center", valign: "middle"
});

// Scale callout
slide4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 5.1, y: 1.2, w: 4.4, h: 3.65,
  fill: { color: theme.primary }, rectRadius: 0.12
});

slide4.addText("数据规模", {
  x: 5.1, y: 1.5, w: 4.4, h: 0.5,
  fontSize: 18, fontFace: "Microsoft YaHei",
  color: theme.light,
  align: "center", valign: "middle"
});

slide4.addText("万亿级", {
  x: 5.1, y: 2.1, w: 4.4, h: 1.0,
  fontSize: 56, fontFace: "Arial",
  color: theme.accent, bold: true,
  align: "center", valign: "middle"
});

slide4.addText("Tokens", {
  x: 5.1, y: 3.0, w: 4.4, h: 0.5,
  fontSize: 24, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

slide4.addText("预训练需要海量的文本数据\n规模越大，能力越强", {
  x: 5.3, y: 3.7, w: 4.0, h: 0.8,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: theme.light,
  align: "center", valign: "middle"
});

// Page badge 4
slide4.addShape(pres.shapes.OVAL, {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fill: { color: theme.accent }
});
slide4.addText("4", {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fontSize: 12, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

// ========== SLIDE 5: 预训练任务：预测下一个词 ==========
const slide5 = pres.addSlide();
slide5.background = { color: theme.bg };

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.9,
  fill: { color: theme.primary }
});

slide5.addText("预训练任务：预测下一个词", {
  x: 0.5, y: 0, w: 9, h: 0.9,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "left", valign: "middle"
});

// Input phrase box
slide5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.4, w: 5.5, h: 1.2,
  fill: { color: "FFFFFF" }, rectRadius: 0.1,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 }
});

slide5.addText("The cat sat on the", {
  x: 0.7, y: 1.5, w: 5.1, h: 1.0,
  fontSize: 28, fontFace: "Arial",
  color: theme.primary, bold: true,
  align: "left", valign: "middle"
});

// Arrow down
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 3.0, y: 2.7, w: 0.1, h: 0.5,
  fill: { color: theme.accent }
});
slide5.addText("v", {
  x: 2.85, y: 3.1, w: 0.4, h: 0.4,
  fontSize: 20, fontFace: "Arial",
  color: theme.accent, bold: true,
  align: "center", valign: "middle"
});

// Output prediction box
slide5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 3.5, w: 5.5, h: 1.2,
  fill: { color: theme.accent }, rectRadius: 0.1
});

slide5.addText("mat", {
  x: 0.7, y: 3.6, w: 3.0, h: 1.0,
  fontSize: 36, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "left", valign: "middle"
});

slide5.addText("98%", {
  x: 4.0, y: 3.6, w: 1.8, h: 1.0,
  fontSize: 24, fontFace: "Arial",
  color: "FFFFFF",
  align: "right", valign: "middle"
});

// Right side explanation
slide5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 6.3, y: 1.4, w: 3.3, h: 3.5,
  fill: { color: "FFFFFF" }, rectRadius: 0.1,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
});

slide5.addText("Next Token\nPrediction", {
  x: 6.3, y: 1.6, w: 3.3, h: 0.8,
  fontSize: 16, fontFace: "Arial",
  color: theme.primary, bold: true,
  align: "center", valign: "middle"
});

slide5.addShape(pres.shapes.LINE, {
  x: 6.6, y: 2.5, w: 2.7, h: 0,
  line: { color: theme.light, width: 1 }
});

slide5.addText([
  { text: "给定前文", options: { breakLine: true } },
  { text: "预测下一个词", options: { breakLine: true } },
  { text: "", options: { breakLine: true } },
  { text: "通过海量文本学习", options: { breakLine: true } },
  { text: "语言规律和模式", options: { breakLine: true } },
  { text: "", options: { breakLine: true } },
  { text: "这被称为", options: { breakLine: true } },
  { text: "\"语言建模\"", options: { bold: true, color: theme.accent } }
], {
  x: 6.5, y: 2.7, w: 3.0, h: 2.0,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "left", valign: "top"
});

slide5.addText("Objective: Minimize prediction error across all tokens in training data", {
  x: 0.5, y: 5.0, w: 9, h: 0.35,
  fontSize: 11, fontFace: "Arial",
  color: theme.secondary, italic: true,
  align: "left", valign: "middle"
});

// Page badge 5
slide5.addShape(pres.shapes.OVAL, {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fill: { color: theme.accent }
});
slide5.addText("5", {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fontSize: 12, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

// ========== SLIDE 6: 预训练中的涌现现象 ==========
const slide6 = pres.addSlide();
slide6.background = { color: theme.bg };

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.9,
  fill: { color: theme.primary }
});

slide6.addText("预训练中的涌现现象", {
  x: 0.5, y: 0, w: 9, h: 0.9,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "left", valign: "middle"
});

// Y-axis
slide6.addShape(pres.shapes.LINE, {
  x: 1.0, y: 1.4, w: 0, h: 2.8,
  line: { color: theme.secondary, width: 1.5 }
});
slide6.addText("能力", {
  x: 0.5, y: 1.2, w: 0.5, h: 0.3,
  fontSize: 10, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "center", valign: "middle"
});

// X-axis
slide6.addShape(pres.shapes.LINE, {
  x: 1.0, y: 4.2, w: 4.5, h: 0,
  line: { color: theme.secondary, width: 1.5 }
});
slide6.addText("模型规模 (参数数量)", {
  x: 2.5, y: 4.35, w: 2.5, h: 0.3,
  fontSize: 10, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "center", valign: "middle"
});

// Emergence threshold line (dashed)
slide6.addShape(pres.shapes.LINE, {
  x: 3.5, y: 1.5, w: 0, h: 2.6,
  line: { color: theme.accent, width: 1.5, dashType: "dash" }
});

slide6.addText("涌现点", {
  x: 3.2, y: 1.3, w: 0.8, h: 0.25,
  fontSize: 9, fontFace: "Microsoft YaHei",
  color: theme.accent, bold: true,
  align: "center", valign: "middle"
});

// Flat line before threshold
slide6.addShape(pres.shapes.LINE, {
  x: 1.0, y: 3.8, w: 2.5, h: 0,
  line: { color: theme.secondary, width: 2 }
});

// Rising line after threshold
slide6.addShape(pres.shapes.LINE, {
  x: 3.5, y: 3.8, w: 2.0, h: -2.0,
  line: { color: theme.accent, width: 2 }
});

// Right side: explanation cards
const ecX = 6.0, ecW = 3.6, ecH = 1.35, ecG = 0.2;

// Card 1
slide6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: ecX, y: 1.2, w: ecW, h: ecH,
  fill: { color: "FFFFFF" }, rectRadius: 0.08,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
});
slide6.addShape(pres.shapes.OVAL, {
  x: ecX + 0.15, y: 1.35, w: 0.35, h: 0.35,
  fill: { color: theme.accent }
});
slide6.addText("1", {
  x: ecX + 0.15, y: 1.35, w: 0.35, h: 0.35,
  fontSize: 12, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});
slide6.addText("涌现能力", {
  x: ecX + 0.6, y: 1.35, w: 2.8, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  align: "left", valign: "middle"
});
slide6.addText("在小模型中不存在\n在大模型中突然出现的能力", {
  x: ecX + 0.6, y: 1.75, w: 2.8, h: 0.7,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "left", valign: "top"
});

// Card 2
slide6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: ecX, y: 1.2 + ecH + ecG, w: ecW, h: ecH,
  fill: { color: "FFFFFF" }, rectRadius: 0.08,
  shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
});
slide6.addShape(pres.shapes.OVAL, {
  x: ecX + 0.15, y: 1.35 + ecH + ecG, w: 0.35, h: 0.35,
  fill: { color: theme.secondary }
});
slide6.addText("2", {
  x: ecX + 0.15, y: 1.35 + ecH + ecG, w: 0.35, h: 0.35,
  fontSize: 12, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});
slide6.addText("典型例子", {
  x: ecX + 0.6, y: 1.35 + ecH + ecG, w: 2.8, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  align: "left", valign: "middle"
});
slide6.addText("数学推理、代码生成\n多步推理、常识问答", {
  x: ecX + 0.6, y: 1.75 + ecH + ecG, w: 2.8, h: 0.7,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: theme.secondary,
  align: "left", valign: "top"
});

// Card 3
slide6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: ecX, y: 1.2 + 2 * (ecH + ecG), w: ecW, h: ecH,
  fill: { color: theme.primary }, rectRadius: 0.08
});
slide6.addShape(pres.shapes.OVAL, {
  x: ecX + 0.15, y: 1.35 + 2 * (ecH + ecG), w: 0.35, h: 0.35,
  fill: { color: theme.accent }
});
slide6.addText("3", {
  x: ecX + 0.15, y: 1.35 + 2 * (ecH + ecG), w: 0.35, h: 0.35,
  fontSize: 12, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});
slide6.addText("规模定律", {
  x: ecX + 0.6, y: 1.35 + 2 * (ecH + ecG), w: 2.8, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: "FFFFFF", bold: true,
  align: "left", valign: "middle"
});
slide6.addText("模型越大\n能力提升越明显", {
  x: ecX + 0.6, y: 1.75 + 2 * (ecH + ecG), w: 2.8, h: 0.7,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: theme.light,
  align: "left", valign: "top"
});

// Page badge 6
slide6.addShape(pres.shapes.OVAL, {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fill: { color: theme.accent }
});
slide6.addText("6", {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fontSize: 12, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

// Write the file
pres.writeFile({ fileName: './section-03.pptx' })
  .then(() => console.log('Created: section-03.pptx with 6 slides'))
  .catch(err => console.error(err));
'''

with open(os.path.join(output_dir, "compile-section03.js"), "w", encoding="utf-8") as f:
    f.write(compile_js)

print(f"Compile script written to: {output_dir}/compile-section03.js")
