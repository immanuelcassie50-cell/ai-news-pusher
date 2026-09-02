// slide-009.js - 案例背景：星际零售集团
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

  addPartMark(slide, "第一部分 · 案例背景");
  addContentTitle(slide, "案例背景  ·  星际零售集团", "1200家门店  ·  统一数据上报系统  ·  2024年年初启动");

  // 左侧：项目背景
  slide.addShape("rect", { x:0.5, y:1.75, w:5.5, h:3.3, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:0.5, y:1.75, w:0.08, h:3.3, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("项目背景", { x:0.75, y:1.85, w:5, h:0.3, fontSize:13, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addText("门店运营数据统一上报系统（统报系统）", { x:0.75, y:2.2, w:5, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.dark, bold:true });

  const points = [
    "1200家门店  ·  各用各的 Excel 模板汇报数据",
    "格式混乱  ·  总部战略部每月花大量时间清洗数据",
    "严重影响管理决策效率",
    "解决方案已确定  ·  一套统一数字化系统替代各区域自制模板"
  ];
  points.forEach(function (p, i) {
    const y = 2.6 + i * 0.42;
    slide.addShape("rect", { x:0.85, y:y+0.12, w:0.1, h:0.1, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
    slide.addText(p, { x:1.05, y:y, w:4.85, h:0.35, fontSize:10, fontFace:FONT_CN, color:THEME.secondary });
  });

  // 右侧：派单情况
  slide.addShape("rect", { x:6.2, y:1.75, w:3.3, h:3.3, fill:{color:THEME.highlight}, line:{color:THEME.border,width:0.5} });
  slide.addText("派单情况", { x:6.4, y:1.85, w:3, h:0.3, fontSize:13, fontFace:FONT_CN, color:THEME.primary, bold:true });

  // 大数字 1200
  slide.addText("1200", { x:6.4, y:2.25, w:2.8, h:0.7, fontSize:42, fontFace:FONT_EN, color:THEME.accent, bold:true });
  slide.addText("家门店", { x:6.4, y:2.9, w:2.8, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.mid });

  // 两个区域
  slide.addShape("line", { x:6.4, y:3.3, w:2.8, h:0, line:{color:THEME.border,width:0.5} });
  slide.addText("华北区  ·  叶云", { x:6.4, y:3.4, w:2.8, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.dark, bold:true });
  slide.addText("华南区  ·  方成", { x:6.4, y:3.7, w:2.8, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.dark, bold:true });

  // 关键说明
  slide.addShape("line", { x:6.4, y:4.05, w:2.8, h:0, line:{color:THEME.border,width:0.5} });
  slide.addText("完全相同的资源  ·  完全相同的方案", { x:6.4, y:4.15, w:2.8, h:0.35, fontSize:10, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addText("同一套系统 · 同一份培训材料", { x:6.4, y:4.45, w:2.8, h:0.3, fontSize:9, fontFace:FONT_CN, color:THEME.mid });
  slide.addText("同一个 IT 支持团队 · 同等预算", { x:6.4, y:4.7, w:2.8, h:0.3, fontSize:9, fontFace:FONT_CN, color:THEME.mid });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
