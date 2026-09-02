// slide-010.js - 叶云与方成：六个月后
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

  addPartMark(slide, "第一部分 · 案例复盘");
  addContentTitle(slide, "叶云与方成  ·  六个月后", "同一套方案  ·  同一组资源  ·  截然不同的两个结果");

  // 左侧：方成的反思
  slide.addShape("rect", { x:0.5, y:1.75, w:5.2, h:3.4, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addText("方成  ·  复盘会上的那句话", { x:0.7, y:1.85, w:4.8, h:0.35, fontSize:13, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addShape("rect", { x:0.7, y:2.25, w:0.3, h:0.04, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText('"', { x:0.6, y:2.4, w:0.7, h:0.8, fontSize:60, fontFace:"Georgia", color:THEME.light, bold:true });
  slide.addText(
    "我不是没能力。是我完全没想到, 推这个项目不是『把方案做好』的问题, 而是『搞清楚背后有哪些人, 在哪些点上会卡我』的问题。我从头到尾都在解决技术问题, 从来没有认真分析过人的问题。",
    { x:1.3, y:2.4, w:4.3, h:2.4, fontSize:12, fontFace:FONT_CN, color:THEME.dark, valign:"top", lineSpacing:22 }
  );

  // 右侧：方成反思的三个关键
  slide.addText("方成反思中的三个关键", { x:6, y:1.85, w:3.5, h:0.35, fontSize:13, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addShape("rect", { x:6, y:2.25, w:0.3, h:0.04, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });

  const ks = [
    { n: "01", t: "不是没能力", d: "方法缺位  ·  不是智商问题" },
    { n: "02", t: "不是把方案做好", d: "关键不在方案  ·  在背后的人" },
    { n: "03", t: "从来没有认真分析过", d: "技术问题 vs 人的问题  ·  缺位后者" }
  ];
  ks.forEach(function (k, i) {
    const y = 2.5 + i * 0.85;
    slide.addShape("ellipse", { x:6, y:y, w:0.5, h:0.5, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
    slide.addText(k.n, { x:6, y:y, w:0.5, h:0.5, fontSize:12, fontFace:FONT_EN, color:THEME.white, bold:true, align:"center", valign:"middle" });
    slide.addText(k.t, { x:6.6, y:y, w:3, h:0.3, fontSize:12, fontFace:FONT_CN, color:THEME.dark, bold:true });
    slide.addText(k.d, { x:6.6, y:y+0.3, w:3, h:0.45, fontSize:9, fontFace:FONT_CN, color:THEME.secondary });
  });

  // 底部金句
  slide.addText("这句话  ·  是今天整个课程的起点", { x:0.5, y:5.0, w:9, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.accent, italic:false, charSpacing:2 });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
