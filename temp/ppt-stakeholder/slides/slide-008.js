// slide-008.js - 开场：同一套方案 两种结局
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

  addPartMark(slide, "第一部分 · 认知激活 · 开场");
  addContentTitle(slide, "开场  ·  同一套方案  ·  两种结局", "叶云 vs 方成  ·  资源相同  ·  结果相反");

  // 左侧 - 叶云
  slide.addShape("rect", { x:0.5, y:1.75, w:4.4, h:3.3, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:0.5, y:1.75, w:4.4, h:0.55, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("叶云  ·  华北区", { x:0.5, y:1.75, w:4.4, h:0.55, fontSize:14, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  // 大数字
  slide.addText("98%", { x:0.5, y:2.4, w:4.4, h:1.2, fontSize:84, fontFace:FONT_EN, color:THEME.accent, bold:true, align:"center", valign:"middle" });
  slide.addText("项目完成率", { x:0.5, y:3.55, w:4.4, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.mid, align:"center" });
  slide.addShape("line", { x:1, y:3.95, w:3.4, h:0, line:{color:THEME.border,width:0.5} });
  slide.addText("被集团评为「最佳实践区域」", { x:0.5, y:4.05, w:4.4, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.dark, align:"center" });
  slide.addText("受邀到总部年会做经验分享", { x:0.5, y:4.4, w:4.4, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.dark, align:"center" });
  slide.addText("区域运营总监  ·  34岁", { x:0.5, y:4.75, w:4.4, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.mid, align:"center" });

  // 右侧 - 方成
  slide.addShape("rect", { x:5.1, y:1.75, w:4.4, h:3.3, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:5.1, y:1.75, w:4.4, h:0.55, fill:{color:THEME.mid}, line:{color:THEME.mid,width:0} });
  slide.addText("方成  ·  华南区", { x:5.1, y:1.75, w:4.4, h:0.55, fontSize:14, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addText("28%", { x:5.1, y:2.4, w:4.4, h:1.2, fontSize:84, fontFace:FONT_EN, color:THEME.mid, bold:true, align:"center", valign:"middle" });
  slide.addText("项目完成率", { x:5.1, y:3.55, w:4.4, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.mid, align:"center" });
  slide.addShape("line", { x:5.6, y:3.95, w:3.4, h:0, line:{color:THEME.border,width:0.5} });
  slide.addText("项目暂停  ·  等待重新规划", { x:5.1, y:4.05, w:4.4, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.dark, align:"center" });
  slide.addText("内部复盘会上的一句话被很多人记住", { x:5.1, y:4.4, w:4.4, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.dark, align:"center" });
  slide.addText("区域运营总监  ·  36岁", { x:5.1, y:4.75, w:4.4, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.mid, align:"center" });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
