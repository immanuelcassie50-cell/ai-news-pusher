// slide-012.js - 答案揭晓：全部是错
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

  addPartMark(slide, "第一部分 · 答案揭晓");
  addContentTitle(slide, "答案揭晓  ·  全部是错", "八个说法  ·  没有一个是对的");

  // 中央巨型文字
  slide.addShape("rect", { x:0.5, y:1.75, w:9, h:1.6, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("全  部  是  错", { x:0.5, y:1.75, w:9, h:1.6, fontSize:80, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle", charSpacing:15 });

  // 解释
  slide.addText("如果你有 4 个以上填了「✓对」, 不用担心 —— 这是大多数人的直觉反应。", { x:0.5, y:3.55, w:9, h:0.35, fontSize:13, fontFace:FONT_CN, color:THEME.dark, bold:true, align:"center" });
  slide.addText("这正是为什么很多有能力的人在项目推进中会翻车", { x:0.5, y:3.9, w:9, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.mid, align:"center" });
  slide.addText("我们对「人的逻辑」有一套本能的、但经常失效的判断系统。", { x:0.5, y:4.18, w:9, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.mid, align:"center" });

  // 关键认知块
  slide.addShape("rect", { x:0.5, y:4.6, w:9, h:0.55, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addShape("rect", { x:0.5, y:4.6, w:0.08, h:0.55, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("关键认知  ·  项目失败, 大多不是方案问题, 是对「人的地图」的无知。", { x:0.75, y:4.6, w:8.6, h:0.55, fontSize:12, fontFace:FONT_CN, color:THEME.dark, bold:true, valign:"middle" });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
