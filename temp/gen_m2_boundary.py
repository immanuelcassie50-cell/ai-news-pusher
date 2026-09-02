# -*- coding: utf-8 -*-
import os

slides_dir = r"D:\新课开发\2026核心课\技控-绩效改进\完整课程包\02-授课PPT\slides"

# slide-41: 边界下移 - 技控疆域扩大
content41 = r'''// slide-41.js - 边界下移：技控疆域扩大
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 41,
  title: '边界下移：技控疆域扩大'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("\u8FB9\u754C\u4E0B\u79FB\uFF1A\u6280\u63A7\u7586\u57DF\u6269\u5927", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Left text area
  slide.addText("\u8FC7\u53BB\u53EA\u80FD\u9760\u4EBA\u63A7\u6162\u6162\u517B\u7684\u4E1C\u897F\u2014\u2014\u660E\u661F\u7684\u7ECF\u9A8C\u3001\u8001\u5E08\u5080\u7684\u624B\u611F\u2014\u2014\u73B0\u5728\u901A\u8FC7\u8323\u53D6\u3001\u8D44\u4EA7\u5316\u3001\u667A\u80FD\u4F53\u5316\uFF0C\u53D8\u5F97\u53EF\u4EE5\u6280\u63A7\u4E86\u3002", {
    x: 0.5, y: 1.2, w: 5, h: 1.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacingMultiple: 1.5
  });

  // Flow diagram: 经验萃取 -> 资产化 -> 智能体化
  const boxY = 3.0;
  const boxH = 0.8;
  const boxW = 2.2;

  // Box 1: 经验萃取
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: boxY, w: boxW, h: boxH,
    fill: { color: theme.primary }
  });
  slide.addText("\u7ECF\u9A8C\u8323\u53D6", {
    x: 0.5, y: boxY, w: boxW, h: boxH,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Arrow 1
  slide.addText("\u2192", {
    x: 2.7, y: boxY, w: 0.5, h: boxH,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent, align: "center", valign: "middle"
  });

  // Box 2: 资产化
  slide.addShape(pres.ShapeType.rect, {
    x: 3.2, y: boxY, w: boxW, h: boxH,
    fill: { color: theme.secondary }
  });
  slide.addText("\u8D44\u4EA7\u5316", {
    x: 3.2, y: boxY, w: boxW, h: boxH,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: center, valign: "middle"
  });

  // Arrow 2
  slide.addText("\u2192", {
    x: 5.4, y: boxY, w: 0.5, h: boxH,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent, align: "center", valign: "middle"
  });

  // Box 3: 智能体化
  slide.addShape(pres.ShapeType.rect, {
    x: 5.9, y: boxY, w: boxW, h: boxH,
    fill: { color: theme.accent }
  });
  slide.addText("\u667A\u80FD\u4F53\u5316", {
    x: 5.9, y: boxY, w: boxW, h: boxH,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Bottom insight box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.2, w: 9, h: 0.8,
    fill: { color: theme.light }
  });
  slide.addText("AI\u8BA9\u539F\u672C\u5B58\u5728\u4E8E\u201C\u4EBA\u201D\u7684\u8111\u5B50\u548C\u7ECF\u9A8C\u91CC\u7684\u4E1C\u897F\uFF0C\u53D8\u6210\u4E86\u53EF\u590D\u5236\u3001\u53EF\u4F18\u5316\u7684\u6280\u63A7\u624B\u6BB5", {
    x: 0.7, y: 4.2, w: 8.6, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("41", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

# slide-42: 边界示意图
content42 = r'''// slide-42.js - 边界示意图
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 42,
  title: '边界示意图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("\u8FB9\u754C\u793A\u610F\u56FE", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Left label
  slide.addText("\u4EBA\u63A7\u533A", {
    x: 0.5, y: 1.5, w: 1.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Right label
  slide.addText("\u6280\u63A7\u533A\u6269\u5927", {
    x: 7.5, y: 1.5, w: 2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Diagonal boundary line (old - dashed)
  slide.addShape(pres.ShapeType.line, {
    x: 1.5, y: 1.8, w: 7, h: 3.2,
    line: { color: theme.primary, width: 2, dashType: "dash", transparency: 50 }
  });

  // Diagonal boundary line (new - solid)
  slide.addShape(pres.ShapeType.line, {
    x: 1.5, y: 2.5, w: 7, h: 2.5,
    line: { color: theme.secondary, width: 3 }
  });

  // Arrow showing shift
  slide.addText("\u2192", {
    x: 4.5, y: 2.0, w: 0.5, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  // Labels
  slide.addText("\u65E7\u8FB9\u754C", {
    x: 4.0, y: 3.5, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addText("\u65B0\u8FB9\u754C", {
    x: 6.0, y: 4.2, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Key point box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.7, w: 9, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("\u6280\u63A7\u548C\u4EBA\u63A7\u7684\u5206\u5DE5\u7EBF\u672C\u8EAB\u53D1\u751F\u4E86\u79FB\u52A8", {
    x: 0.5, y: 4.7, w: 9, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("42", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

# slide-43: 边界下移的核心含义
content43 = r'''// slide-43.js - 边界下移的核心含义
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 43,
  title: '边界下移的核心含义'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("\u8FB9\u754C\u4E0B\u79FB\u7684\u6838\u5FC3\u542B\u4E49", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Two column comparison
  const colW = 4.2;
  const colY = 1.2;
  const colH = 3.5;

  // Left column - before
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: colY, w: colW, h: colH,
    fill: { color: theme.light }
  });
  slide.addText("\u8FC7\u53BB", {
    x: 0.5, y: colY, w: colW, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: colY, w: colW, h: 0.06,
    fill: { color: theme.primary }
  });
  slide.addText("\u201C\u9690\u6027\u7ECF\u9A8C\u201D\u53EA\u80FD\u9760\u4EBA\u6309\u7167\u4F20\u627F", {
    x: 0.7, y: colY + 0.7, w: colW - 0.4, h: 1.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacingMultiple: 1.4
  });
  slide.addText("\u2014\u4E0D\u53EF\u590D\u5236\n\u2014\u96BE\u4EE5\u4F18\u5316\n\u2014\u96BE\u4EE5\u5E73\u8877", {
    x: 0.7, y: colY + 1.8, w: colW - 0.4, h: 1.2,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Right column - after
  slide.addShape(pres.ShapeType.rect, {
    x: 5.3, y: colY, w: colW, h: colH,
    fill: { color: theme.secondary, transparency: 10 }
  });
  slide.addText("\u73B0\u5728", {
    x: 5.3, y: colY, w: colW, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center"
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.3, y: colY, w: colW, h: 0.06,
    fill: { color: theme.secondary }
  });
  slide.addText("\u901A\u8FC7\u8323\u53D6\u628A\u201C\u9690\u6027\u7ECF\u9A8C\u201D\u53D8\u6210\u53EF\u6280\u63A7\u7684\u8D44\u4EA7", {
    x: 5.5, y: colY + 0.7, w: colW - 0.4, h: 1.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacingMultiple: 1.4
  });
  slide.addText("\u2014\u53EF\u590D\u5236\n\u2014\u53EF\u4F18\u5316\n\u2014\u53EF\u5E73\u8877", {
    x: 5.5, y: colY + 1.8, w: colW - 0.4, h: 1.2,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Arrow between columns
  slide.addText("\u2192", {
    x: 4.6, y: colY + 1.5, w: 0.7, h: 0.6,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // Bottom conclusion
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("\u652F\u70B9\u652F\u5728\u6280\u63A7\u4E0A\uFF1A\u5148\u5EFA\u4EBA\u673A\u534F\u540C\u5DE5\u4F5C\u7CFB\u7EDF\uFF0C\u518D\u8C08\u4EBA\u7684\u80FD\u529B\u4E0E\u610F\u613F", {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("43", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

for fname, content in [("slide-41.js", content41), ("slide-42.js", content42), ("slide-43.js", content43)]:
    with open(os.path.join(slides_dir, fname), "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Written {fname}")
