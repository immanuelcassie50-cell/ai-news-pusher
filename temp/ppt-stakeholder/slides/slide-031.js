// slide-031.js - 本部分行动建议
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

  addPartMark(slide, "第一部分 · 行动建议");
  addContentTitle(slide, "本部分行动建议", "进入第二部分之前  ·  请先完成这三件事");

  // 三个行动卡
  const actions = [
    { n: "01", t: "保存好练习一的草稿", d: "把它放在桌面上能看到的地方  ·  后面五个部分会反复回到它", icon: "草稿" },
    { n: "02", t: "确认你带的项目是真实的", d: "如果是假设性项目, 现在就换成一个你真正在推进的项目", icon: "项目" },
    { n: "03", t: "带着「人的地图」意识进入第二部分", d: "从现在开始, 每看到一个人, 都先想: 他和我的项目有什么关系", icon: "意识" }
  ];

  actions.forEach(function (a, i) {
    const x = 0.5 + i * 3.07;
    // 卡片
    slide.addShape("rect", { x:x, y:1.85, w:2.95, h:2.6, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
    // 顶部色条
    slide.addShape("rect", { x:x, y:1.85, w:2.95, h:0.5, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
    slide.addText(a.n, { x:x, y:1.85, w:2.95, h:0.5, fontSize:14, fontFace:FONT_EN, color:THEME.white, bold:true, align:"center", valign:"middle" });
    // 标签
    slide.addShape("rect", { x:x+1.0, y:2.5, w:0.95, h:0.3, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
    slide.addText(a.icon, { x:x+1.0, y:2.5, w:0.95, h:0.3, fontSize:10, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
    // 标题
    slide.addText(a.t, { x:x+0.15, y:2.95, w:2.65, h:0.7, fontSize:12, fontFace:FONT_CN, color:THEME.dark, bold:true, align:"center", valign:"middle" });
    // 描述
    slide.addText(a.d, { x:x+0.15, y:3.65, w:2.65, h:0.75, fontSize:10, fontFace:FONT_CN, color:THEME.secondary, align:"left", valign:"top", lineSpacing:14 });
  });

  // 底部
  slide.addShape("rect", { x:0.5, y:4.7, w:9, h:0.45, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addShape("rect", { x:0.5, y:4.7, w:0.08, h:0.45, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("完成这三件事  ·  准备好后  ·  翻到第二部分", { x:0.75, y:4.7, w:8.6, h:0.45, fontSize:11, fontFace:FONT_CN, color:THEME.dark, bold:true, valign:"middle" });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
