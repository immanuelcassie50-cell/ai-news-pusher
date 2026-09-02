// slide-013.js - 解析一：方案与表态
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
function addCompareTable(slide, rows, opt) {
  opt = opt || {};
  const startX = opt.x || 0.5, startY = opt.y || 1.7, colW = opt.colW || 4.35, rowH = opt.rowH || 0.55;
  slide.addShape("rect", { x:startX, y:startY, w:colW, h:0.4, fill:{color:THEME.mid}, line:{color:THEME.mid,width:0} });
  slide.addText(opt.leftTitle || "常见直觉", { x:startX, y:startY, w:colW, h:0.4, fontSize:12, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addShape("rect", { x:startX+colW+0.3, y:startY, w:colW, h:0.4, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText(opt.rightTitle || "实际真相", { x:startX+colW+0.3, y:startY, w:colW, h:0.4, fontSize:12, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  rows.forEach(function (r, i) {
    const y = startY + 0.4 + i * rowH;
    slide.addShape("rect", { x:startX, y:y, w:colW, h:rowH, fill:{color: i%2===0 ? THEME.white : THEME.highlight}, line:{color:THEME.border,width:0.5} });
    slide.addText(r.left, { x:startX+0.15, y:y, w:colW-0.3, h:rowH, fontSize:11, fontFace:FONT_CN, color:THEME.dark, valign:"middle" });
    slide.addShape("rect", { x:startX+colW+0.3, y:y, w:colW, h:rowH, fill:{color: i%2===0 ? THEME.white : THEME.highlight}, line:{color:THEME.border,width:0.5} });
    slide.addText(r.right, { x:startX+colW+0.45, y:y, w:colW-0.3, h:rowH, fontSize:11, fontFace:FONT_CN, color:THEME.dark, valign:"middle" });
  });
}

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addPartMark(slide, "第一部分 · 解析一");
  addContentTitle(slide, "解析一  ·  方案与表态", "认知误区 1 & 2  ·  揭开两个最常见也最致命的直觉");

  addCompareTable(slide, [
    { left: "说法①  ·  只要方案足够完善, 项目就能推动起来", right: "错  ·  叶云和方成拿到的方案完全相同  ·  方案质量不是变量" },
    { left: "说法②  ·  在项目里说「支持」的人, 基本上是真的支持", right: "错  ·  「表态支持」和「真实配合行动」之间的距离, 往往比你想象的远" }
  ], { y: 1.75, rowH: 1.0 });

  // 关键认知
  slide.addShape("rect", { x:0.5, y:4.0, w:9, h:1.1, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addShape("rect", { x:0.5, y:4.0, w:0.08, h:1.1, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("深层逻辑", { x:0.75, y:4.1, w:2, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.accent, bold:true, charSpacing:3 });
  slide.addText("好方案是必要条件  ·  但从来不是充分条件", { x:0.75, y:4.4, w:8.5, h:0.32, fontSize:13, fontFace:FONT_CN, color:THEME.dark, bold:true });
  slide.addText("表态是组织的最低成本动作  ·  真正消耗资源的是「行动」  ·  两者之间隔着组织政治、个人利益、KPI博弈等无数道墙。", { x:0.75, y:4.72, w:8.5, h:0.4, fontSize:10, fontFace:FONT_CN, color:THEME.secondary });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
