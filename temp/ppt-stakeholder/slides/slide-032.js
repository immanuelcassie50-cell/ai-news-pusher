// slide-032.js - 翻到第二部分
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

const THEME = {
  primary:"8B1A1A", secondary:"3A3A3A", accent:"C53030", light:"D4A5A0",
  bg:"F5F0EA", dark:"2A2A2A", mid:"6B6B6B", border:"B89A92", highlight:"F2E1D9", white:"FFFFFF"
};

function addPartMark(slide, partLabel) {
  slide.addShape("rect", { x:0, y:0, w:10, h:0.12, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  if (partLabel) slide.addText(partLabel, { x:0.4, y:0.22, w:4, h:0.32, fontSize:10, fontFace:FONT_CN, color:THEME.mid, charSpacing:4 });
}
function addBottomBrand(slide, pageNum, totalPages) {
  slide.addShape("line", { x:0.4, y:5.35, w:9.2, h:0, line:{color:THEME.border,width:0.5} });
  slide.addText("利益相关方深度实战 · 授课PPT", { x:0.4, y:5.4, w:6, h:0.2, fontSize:8, fontFace:FONT_CN, color:THEME.mid });
  slide.addText(String(pageNum).padStart(2,'0') + " / " + String(totalPages).padStart(3,'0'), { x:8.0, y:5.4, w:1.6, h:0.2, fontSize:8, fontFace:FONT_EN, color:THEME.mid, align:"right" });
}
function addContentTitle(slide, title, subtitle) {
  slide.addText(title, { x:0.5, y:0.5, w:9, h:0.6, fontSize:28, fontFace:FONT_CN, color:THEME.primary, bold:true });
  if (subtitle) slide.addText(subtitle, { x:0.5, y:1.05, w:9, h:0.3, fontSize:12, fontFace:FONT_CN, color:THEME.mid, charSpacing:2 });
  slide.addShape("rect", { x:0.5, y:1.4, w:0.6, h:0.04, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
}

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addPartMark(slide, "第一部分  ·  结束  →  第二部分");
  addContentTitle(slide, "翻到第二部分", "从「看见地图」到「走遍地图」  ·  全景扫描开始");

  // 中央大色块
  slide.addShape("rect", { x:0.5, y:1.8, w:9, h:3.0, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });

  // 装饰斜线
  slide.addShape("line", { x:0.5, y:1.8, w:2, h:0, line:{color:THEME.accent, width:2} });

  // 巨大箭头
  slide.addText("→", { x:0.5, y:2.0, w:1.5, h:2.5, fontSize:120, fontFace:FONT_EN, color:THEME.accent, bold:true, align:"center", valign:"middle" });

  // 右侧文字
  slide.addText("第二部分", { x:2.0, y:2.0, w:7, h:0.4, fontSize:14, fontFace:FONT_CN, color:THEME.light, charSpacing:4 });
  slide.addText("全景扫描", { x:2.0, y:2.4, w:7, h:0.9, fontSize:48, fontFace:FONT_CN, color:THEME.white, bold:true });
  slide.addShape("rect", { x:2.0, y:3.3, w:0.5, h:0.05, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("你的项目里  ·  到底有哪些人", { x:2.0, y:3.45, w:7, h:0.4, fontSize:18, fontFace:FONT_CN, color:THEME.white });
  slide.addText("六维扫描  ·  全景穷举  ·  不再遗漏", { x:2.0, y:3.9, w:7, h:0.4, fontSize:13, fontFace:FONT_CN, color:THEME.light });
  slide.addText("Six-Dimension Stakeholder Mapping", { x:2.0, y:4.3, w:7, h:0.4, fontSize:11, fontFace:FONT_EN, color:THEME.light, charSpacing:2 });

  // 底部
  slide.addText("工具  ·  六维扫描  ·  走遍每一类相关方  ·  建立全景视图", { x:0.5, y:4.95, w:9, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.mid, italic:false, align:"center", charSpacing:2 });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
