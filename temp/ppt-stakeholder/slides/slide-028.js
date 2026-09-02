// slide-028.js - 关键认知：项目失败真相
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

  addPartMark(slide, "第一部分 · 关键认知");
  addContentTitle(slide, "关键认知  ·  项目失败的真相", "这是第一部分留下的最重要的一句话");

  // 大色块 - 引述
  slide.addShape("rect", { x:0.5, y:1.8, w:9, h:2.5, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  // 装饰
  slide.addShape("line", { x:0.5, y:1.8, w:2, h:0, line:{color:THEME.accent, width:2} });

  // 大引号
  slide.addText('"', { x:0.7, y:1.85, w:1.0, h:1.2, fontSize:120, fontFace:"Georgia", color:THEME.accent, bold:true, valign:"top" });

  // 金句
  slide.addText("项目失败  ·  大多不是方案问题", { x:1.7, y:2.05, w:7.5, h:0.55, fontSize:26, fontFace:FONT_CN, color:THEME.white, bold:true });
  slide.addText("是对「人的地图」的无知", { x:1.7, y:2.65, w:7.5, h:0.55, fontSize:26, fontFace:FONT_CN, color:THEME.white, bold:true });
  slide.addShape("rect", { x:1.7, y:3.4, w:0.5, h:0.04, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("—— 第一部分  ·  核心认知", { x:1.7, y:3.55, w:7.5, h:0.4, fontSize:12, fontFace:FONT_CN, color:THEME.light });

  // 下方两个延伸认知
  slide.addShape("rect", { x:0.5, y:4.5, w:4.4, h:0.65, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:0.5, y:4.5, w:0.08, h:0.65, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("方案  ·  是入场券", { x:0.75, y:4.55, w:4, h:0.3, fontSize:12, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addText("没有它, 后面所有分析无从谈起", { x:0.75, y:4.83, w:4, h:0.3, fontSize:9, fontFace:FONT_CN, color:THEME.secondary });

  slide.addShape("rect", { x:5.1, y:4.5, w:4.4, h:0.65, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:5.1, y:4.5, w:0.08, h:0.65, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("人的地图  ·  决定能走多远", { x:5.35, y:4.55, w:4, h:0.3, fontSize:12, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addText("方案再完美, 地图空白也寸步难行", { x:5.35, y:4.83, w:4, h:0.3, fontSize:9, fontFace:FONT_CN, color:THEME.secondary });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
