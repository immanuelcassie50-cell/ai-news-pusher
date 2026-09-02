// slide-021.js - 地图对比：叶云 vs 方成
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

  addPartMark(slide, "第一部分 · 地图对比");
  addContentTitle(slide, "地图对比  ·  叶云 vs 方成", "同样几个关键人物  ·  初步印象 vs 实际情况  ·  落差巨大");

  // 表头
  slide.addShape("rect", { x:0.5, y:1.7, w:1.8, h:0.4, fill:{color:THEME.mid}, line:{color:THEME.mid,width:0} });
  slide.addText("人物", { x:0.5, y:1.7, w:1.8, h:0.4, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addShape("rect", { x:2.3, y:1.7, w:3.5, h:0.4, fill:{color:THEME.mid}, line:{color:THEME.mid,width:0} });
  slide.addText("方成的认知  ·  默认判断", { x:2.3, y:1.7, w:3.5, h:0.4, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addShape("rect", { x:5.8, y:1.7, w:3.7, h:0.4, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("叶云分析后的实际情况", { x:5.8, y:1.7, w:3.7, h:0.4, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });

  // 表格内容
  const rows = [
    { p:"大区总经理", l:"领导说推, 肯定支持", r:"表面支持, 内心在观望  ·  其他 KPI 压力, 这个项目无直接贡献" },
    { p:"IT 部负责人", l:"她负责技术, 会配合", r:"真正的 A 级投入支持者  ·  系统能减她的清洗工作量, 她比谁都想推" },
    { p:"财务部经理", l:"与他关系不大", r:"关键阻力方  ·  担心数据准确性影响核算, 18 年前有类似项目创伤" },
    { p:"资深老店长", l:"执行层, 通知下去就做", r:"隐性阻力者  ·  新系统会暴露他门店「操作弹性空间」" }
  ];
  rows.forEach(function (r, i) {
    const y = 2.1 + i * 0.6;
    // 人物列
    slide.addShape("rect", { x:0.5, y:y, w:1.8, h:0.6, fill:{color: i%2===0 ? THEME.white : THEME.highlight}, line:{color:THEME.border,width:0.5} });
    slide.addText(r.p, { x:0.5, y:y, w:1.8, h:0.6, fontSize:11, fontFace:FONT_CN, color:THEME.dark, bold:true, align:"center", valign:"middle" });
    // 方成认知
    slide.addShape("rect", { x:2.3, y:y, w:3.5, h:0.6, fill:{color: i%2===0 ? THEME.white : THEME.highlight}, line:{color:THEME.border,width:0.5} });
    slide.addText(r.l, { x:2.4, y:y, w:3.3, h:0.6, fontSize:10, fontFace:FONT_CN, color:THEME.mid, valign:"middle" });
    // 叶云分析
    slide.addShape("rect", { x:5.8, y:y, w:3.7, h:0.6, fill:{color: i%2===0 ? THEME.white : THEME.highlight}, line:{color:THEME.border,width:0.5} });
    slide.addText(r.r, { x:5.9, y:y, w:3.5, h:0.6, fontSize:10, fontFace:FONT_CN, color:THEME.dark, bold:true, valign:"middle" });
  });

  // 关键认知
  slide.addShape("rect", { x:0.5, y:4.65, w:9, h:0.55, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addShape("rect", { x:0.5, y:4.65, w:0.08, h:0.55, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("关键认知  ·  你对利益相关方的「初步印象」, 几乎一定是不完整的。系统分析的价值, 是把「初步印象」替换成「有依据的判断」。", { x:0.75, y:4.65, w:8.6, h:0.55, fontSize:10, fontFace:FONT_CN, color:THEME.dark, bold:true, valign:"middle" });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
