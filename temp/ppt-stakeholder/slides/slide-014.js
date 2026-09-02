// slide-014.js - 解析二：反对者与沉默者
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

  addPartMark(slide, "第一部分 · 解析二");
  addContentTitle(slide, "解析二  ·  反对者与沉默者", "认知误区 3 & 4  ·  反对者要避开正面  ·  沉默者要警惕");

  addCompareTable(slide, [
    { left: "说法③  ·  最该花时间沟通的, 是最强烈反对你的人", right: "错  ·  正面强攻成本最高、成功率最低  ·  应先稳盟友、转化犹豫者" },
    { left: "说法④  ·  不发声、不表态的人, 通常是中立的", right: "错  ·  「刻意保持距离」者会在关键节点消极配合  ·  沉默不等于支持" }
  ], { y: 1.75, rowH: 1.0 });

  // 关键认知
  slide.addShape("rect", { x:0.5, y:4.0, w:9, h:1.1, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addShape("rect", { x:0.5, y:4.0, w:0.08, h:1.1, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("正确的破局次序", { x:0.75, y:4.1, w:2, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.accent, bold:true, charSpacing:3 });
  slide.addText("先稳盟友  →  转化犹豫者  →  形成势头  →  让顽固阻力者感受到压力", { x:0.75, y:4.4, w:8.5, h:0.32, fontSize:13, fontFace:FONT_CN, color:THEME.dark, bold:true });
  slide.addText("「沉默者」比「公开反对者」更危险  ·  反对可以回应, 沉默只能预判。", { x:0.75, y:4.72, w:8.5, h:0.4, fontSize:10, fontFace:FONT_CN, color:THEME.secondary });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
