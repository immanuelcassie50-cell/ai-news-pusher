// slide-017.js - 核心框架：真实公式
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

  addPartMark(slide, "第一部分 · 核心框架");
  addContentTitle(slide, "核心框架  ·  真实公式", "叶云与方成的差距  ·  用一个公式说清楚");

  // 中央公式
  slide.addShape("rect", { x:0.5, y:1.8, w:9, h:2.0, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("项目推进的真实成功率", { x:0.5, y:1.9, w:9, h:0.4, fontSize:13, fontFace:FONT_CN, color:THEME.light, align:"center", valign:"middle", charSpacing:4 });

  // 公式 = 方案质量 × 对人的格局理解
  slide.addText("方案质量", { x:0.7, y:2.4, w:2.6, h:0.6, fontSize:24, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addText("×", { x:3.4, y:2.35, w:1.2, h:0.7, fontSize:48, fontFace:FONT_EN, color:THEME.accent, bold:true, align:"center", valign:"middle" });
  slide.addText("对人的格局理解", { x:4.7, y:2.4, w:2.6, h:0.6, fontSize:24, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addText("=", { x:7.4, y:2.35, w:0.6, h:0.7, fontSize:48, fontFace:FONT_EN, color:THEME.accent, bold:true, align:"center", valign:"middle" });
  slide.addText("真实成功率", { x:8.0, y:2.4, w:1.7, h:0.6, fontSize:18, fontFace:FONT_CN, color:THEME.light, align:"center", valign:"middle" });

  // 公式下注释
  slide.addText("这是乘法关系  ·  不是加法  ·  缺一不可", { x:0.5, y:3.4, w:9, h:0.3, fontSize:12, fontFace:FONT_CN, color:THEME.white, align:"center" });

  // 下方两个解读
  slide.addShape("rect", { x:0.5, y:4.0, w:4.4, h:1.1, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:0.5, y:4.0, w:0.08, h:1.1, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("方成的困境", { x:0.75, y:4.1, w:4, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.accent, bold:true });
  slide.addText("方案 10 分  ·  对人 0 分", { x:0.75, y:4.4, w:4, h:0.3, fontSize:13, fontFace:FONT_CN, color:THEME.dark, bold:true });
  slide.addText("结果 = 0  ·  好方案被一步步稀释、拖延、搁置", { x:0.75, y:4.7, w:4, h:0.35, fontSize:10, fontFace:FONT_CN, color:THEME.secondary });

  slide.addShape("rect", { x:5.1, y:4.0, w:4.4, h:1.1, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:5.1, y:4.0, w:0.08, h:1.1, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("叶云的优势", { x:5.35, y:4.1, w:4, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addText("方案 8 分  ·  对人 9 分", { x:5.35, y:4.4, w:4, h:0.3, fontSize:13, fontFace:FONT_CN, color:THEME.dark, bold:true });
  slide.addText("结果 = 72  ·  在执行层面被极大放大", { x:5.35, y:4.7, w:4, h:0.35, fontSize:10, fontFace:FONT_CN, color:THEME.secondary });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
