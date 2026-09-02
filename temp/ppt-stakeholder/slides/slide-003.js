// slide-003.js - 一个问题贯穿全程
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
function addQuote(slide, text, opt) {
  opt = opt || {};
  const x = opt.x || 0.6, y = opt.y || 1.8, w = opt.w || 8.8, h = opt.h || 1.6;
  slide.addShape("rect", { x:x, y:y, w:w, h:h, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addShape("rect", { x:x, y:y, w:0.08, h:h, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText('"', { x:x+0.2, y:y+0.05, w:0.6, h:0.7, fontSize:56, fontFace:"Georgia", color:THEME.light, bold:true });
  slide.addText(text, { x:x+0.7, y:y+0.15, w:w-0.9, h:h-0.3, fontSize:15, fontFace:FONT_CN, color:THEME.dark, valign:"middle", lineSpacing:24 });
}

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addPartMark(slide, "导引 · 核心问题");
  addContentTitle(slide, "一个问题  ·  贯穿全程", "在开始所有分析之前, 先问自己一个问题");

  addQuote(slide,
    "你是否遇到过 ——\n一个你认为很好的方案, 就是批不下来；\n一个你觉得很正常的诉求, 就是得不到支持；\n一个明明是多方受益的项目, 就是推不动？",
    { y: 1.75, h: 1.85 }
  );

  // 下方两个判断分支
  slide.addShape("rect", { x:0.6, y:3.85, w:4.3, h:1.3, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:0.6, y:3.85, w:0.08, h:1.3, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("回答: 是的, 我遇到过", { x:0.85, y:3.95, w:3.9, h:0.3, fontSize:13, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addText("那么, 今天这套方法就是为你准备的。请继续往下看。", { x:0.85, y:4.3, w:3.9, h:0.8, fontSize:11, fontFace:FONT_CN, color:THEME.dark });

  slide.addShape("rect", { x:5.1, y:3.85, w:4.3, h:1.3, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:5.1, y:3.85, w:0.08, h:1.3, fill:{color:THEME.mid}, line:{color:THEME.mid,width:0} });
  slide.addText("回答: 还没有", { x:5.35, y:3.95, w:3.9, h:0.3, fontSize:13, fontFace:FONT_CN, color:THEME.mid, bold:true });
  slide.addText("那继续推项目, 你迟早会遇到。建议先学方法, 再遇事时才能用得上。", { x:5.35, y:4.3, w:3.9, h:0.8, fontSize:11, fontFace:FONT_CN, color:THEME.dark });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
