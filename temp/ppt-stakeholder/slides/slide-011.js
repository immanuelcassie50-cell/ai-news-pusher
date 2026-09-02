// slide-011.js - 认知自测：八个说法
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

  addPartMark(slide, "第一部分 · 认知自测");
  addContentTitle(slide, "认知自测  ·  八个说法", "凭第一反应勾选  ·  不要往下看答案");

  // 练习标识
  slide.addShape("rect", { x:0.5, y:1.7, w:1.2, h:0.32, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("✋  练习", { x:0.5, y:1.7, w:1.2, h:0.32, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addText("预计 3~5 分钟  ·  直觉先选", { x:1.8, y:1.7, w:4, h:0.32, fontSize:10, fontFace:FONT_CN, color:THEME.mid, valign:"middle" });

  // 8个说法 - 两列四行
  const items = [
    "只要方案足够完善, 项目就能推动起来",
    "在项目里说「支持」的人, 基本上是真的支持",
    "最应该花时间沟通的, 是最强烈反对你的人",
    "那些不发声、不表态的人, 通常是中立的",
    "一个项目的关键利益相关方, 大多数是职级最高的人",
    "如果某人的 KPI 和你的项目无关, 他通常不会阻碍你",
    "对方反对你, 大多数时候是因为他不够理解你的方案",
    "搞定直接汇报给你的执行团队, 项目就有推进基础了"
  ];

  const colW = 4.35, rowH = 0.6, startY = 2.2;
  items.forEach(function (it, i) {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.5 + col * (colW + 0.3);
    const y = startY + row * (rowH + 0.1);

    // 背景
    slide.addShape("rect", { x:x, y:y, w:colW, h:rowH, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
    // 编号
    slide.addShape("rect", { x:x, y:y, w:0.4, h:rowH, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
    slide.addText(String(i+1), { x:x, y:y, w:0.4, h:rowH, fontSize:14, fontFace:FONT_EN, color:THEME.white, bold:true, align:"center", valign:"middle" });
    // 内容
    slide.addText(it, { x:x+0.5, y:y, w:colW-1.4, h:rowH, fontSize:10.5, fontFace:FONT_CN, color:THEME.dark, valign:"middle" });
    // 判断框
    slide.addShape("rect", { x:x+colW-0.85, y:y+0.15, w:0.35, h:0.3, fill:{color:THEME.bg}, line:{color:THEME.border,width:0.5} });
    slide.addText("✓对", { x:x+colW-0.85, y:y+0.15, w:0.35, h:0.3, fontSize:8, fontFace:FONT_CN, color:THEME.mid, align:"center", valign:"middle" });
    slide.addShape("rect", { x:x+colW-0.45, y:y+0.15, w:0.35, h:0.3, fill:{color:THEME.bg}, line:{color:THEME.border,width:0.5} });
    slide.addText("✗错", { x:x+colW-0.45, y:y+0.15, w:0.35, h:0.3, fontSize:8, fontFace:FONT_CN, color:THEME.mid, align:"center", valign:"middle" });
  });

  // 底部
  slide.addText("请凭第一反应勾选  ·  不要往下看答案", { x:0.5, y:5.0, w:9, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.mid, italic:false });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
