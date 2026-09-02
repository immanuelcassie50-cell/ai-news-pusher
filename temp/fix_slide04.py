#!/usr/bin/env python3
SLIDES = "D:/新课开发/变革管理/08-向上管理与高层说服术：让决策层理解容错的成本逻辑/完整课程包/06-授课PPT/slides"

with open(f"{SLIDES}/slide-04.js", "w", encoding="utf-8") as f:
    f.write(r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "section", index: 4, title: "模块二：分析决策者心理" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addText("02", { x: 0.5, y: 1.5, w: 9, h: 1.2, fontSize: 72, fontFace: "Arial", color: theme.accent, bold: true });
  slide.addText("模块二", { x: 0.5, y: 2.7, w: 9, h: 0.6, fontSize: 24, fontFace: "Microsoft YaHei", color: theme.light });
  slide.addText("分析决策者心理", { x: 0.5, y: 3.3, w: 9, h: 0.8, fontSize: 36, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.2, w: 2.0, h: 0.06, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("4", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-04-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')
print("slide-04.js written")