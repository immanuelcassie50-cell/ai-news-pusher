# -*- coding: utf-8 -*-
slides_dir = r"D:\新课开发\2026核心课\技控-绩效改进\完整课程包\02-授课PPT\slides"

content = r"""// slide-106.js - M6金句页: 资产不嵌入工作流就是摆设
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'quote',
  index: 106,
  title: 'M6金句:资产不嵌入工作流就是摆设'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Top accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  // Large decorative quote mark
  slide.addText("\u201C", {
    x: 0.8, y: 0.6, w: 1.5, h: 1.5,
    fontSize: 160, fontFace: "Georgia",
    color: theme.secondary, bold: true, transparency: 60
  });

  // Main quote text
  slide.addText("\u8D44\u4EA7\u4E0D\u5D4E\u5165\u5DE5\u4F5C\u6D41\u5C31\u662F\u6446\u8BBE", {
    x: 1, y: 2.0, w: 8, h: 1.0,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Emphasis line
  slide.addShape(pres.ShapeType.rect, {
    x: 1, y: 3.1, w: 2.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("\u518D\u597D\u7684AI\u8D44\u4EA7,\u4E0D\u878D\u5165\u65E5\u5E38\u5DE5\u4F5C\u6D41\u5C31\u6BEB\u65E0\u4EF7\u503C", {
    x: 1, y: 3.4, w: 8, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Three key points
  const points = ["\u75DB\u70B9\u9A71\u52A8", "\u914D\u5957\u6D41\u7A0B", "\u6301\u7EED\u8FED\u4EE3"];
  points.forEach((point, i) => {
    const x = 1.5 + i * 2.5;
    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: 4.3, w: 1.8, h: 0.7,
      fill: { color: theme.secondary, transparency: 30 }
    });
    slide.addText(point, {
      x: x, y: 4.3, w: 1.8, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
  });

  // Bottom accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.545, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("106", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
"""

with open(slides_dir + "\\slide-106.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Written slide-106.js")
