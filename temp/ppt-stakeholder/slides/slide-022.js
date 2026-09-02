// slide-022.js - 直觉判断为何不可靠
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
  slide.addText(text, { x:x+0.7, y:y+0.15, w:w-0.9, h:h-0.3, fontSize:14, fontFace:FONT_CN, color:THEME.dark, valign:"middle", lineSpacing:22 });
}

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addPartMark(slide, "第一部分 · 直觉不可靠");
  addContentTitle(slide, "直觉判断为何不可靠", "人对「人的逻辑」有一套本能的  ·  但经常失效的判断系统");

  addQuote(slide,
    "这不是你的错, 这是所有人的默认状态。系统分析的价值, 就是把「初步印象」替换成「有依据的判断」。",
    { y: 1.75, h: 1.3 }
  );

  // 三个不可靠的原因
  const reasons = [
    { n:"01", t:"信息不对称", d:"你只能看到对方愿意让你看到的部分  ·  真实立场藏在日常行为里" },
    { n:"02", t:"利益结构隐藏", d:"岗位利益、KPI 压力、历史积怨都不会主动告诉你  ·  只能主动探查" },
    { n:"03", t:"沉默者会误导", d:"不发声的人既不站你这边, 也不站反对那边  ·  但关键时刻会用拖延表态" }
  ];
  reasons.forEach(function (r, i) {
    const y = 3.2 + i * 0.55;
    slide.addShape("ellipse", { x:0.6, y:y, w:0.5, h:0.5, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
    slide.addText(r.n, { x:0.6, y:y, w:0.5, h:0.5, fontSize:12, fontFace:FONT_EN, color:THEME.white, bold:true, align:"center", valign:"middle" });
    slide.addText(r.t, { x:1.3, y:y, w:2.5, h:0.5, fontSize:12, fontFace:FONT_CN, color:THEME.dark, bold:true, valign:"middle" });
    slide.addText(r.d, { x:3.9, y:y, w:5.6, h:0.5, fontSize:10, fontFace:FONT_CN, color:THEME.secondary, valign:"middle" });
  });

  // 结尾
  slide.addText("所以  ·  后面五个部分都在用工具  ·  把直觉替换成可验证的判断", { x:0.5, y:5.0, w:9, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.accent, italic:false, align:"center", charSpacing:2 });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
