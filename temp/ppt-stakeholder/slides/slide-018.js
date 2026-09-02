// slide-018.js - 乘法关系：不可偏废
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

  addPartMark(slide, "第一部分 · 乘法关系");
  addContentTitle(slide, "乘法关系  ·  不可偏废", "任何一项为零  ·  最终结果都为零");

  // 四个数据演示乘法效果
  const cases = [
    { left: "方案", lScore: "10", op: "×", right: "对人", rScore: "0",  total: "0",   note: "方成的现实  ·  满分方案归零",       color: THEME.mid },
    { left: "方案", lScore: "8",  op: "×", right: "对人", rScore: "3",  total: "24",  note: "方案好, 但对人理解薄弱",            color: THEME.accent },
    { left: "方案", lScore: "5",  op: "×", right: "对人", rScore: "8",  total: "40",  note: "方案一般, 但人脉深  ·  仍可推进",   color: THEME.primary },
    { left: "方案", lScore: "9",  op: "×", right: "对人", rScore: "9",  total: "81",  note: "叶云的状态  ·  两者均强, 倍数效应", color: THEME.primary }
  ];

  cases.forEach(function (c, i) {
    const y = 1.75 + i * 0.78;
    // 背景
    slide.addShape("rect", { x:0.5, y:y, w:9, h:0.68, fill:{color: i%2===0 ? THEME.white : THEME.highlight}, line:{color:THEME.border,width:0.5} });
    // 左侧色条
    slide.addShape("rect", { x:0.5, y:y, w:0.1, h:0.68, fill:{color:c.color}, line:{color:c.color,width:0} });

    // 公式展示
    slide.addText(c.left, { x:0.75, y:y+0.15, w:0.9, h:0.4, fontSize:12, fontFace:FONT_CN, color:THEME.mid, valign:"middle" });
    slide.addText(c.lScore, { x:1.6, y:y+0.1, w:0.7, h:0.5, fontSize:26, fontFace:FONT_EN, color:THEME.dark, bold:true, align:"center", valign:"middle" });
    slide.addText(c.op, { x:2.3, y:y+0.1, w:0.5, h:0.5, fontSize:24, fontFace:FONT_EN, color:THEME.accent, bold:true, align:"center", valign:"middle" });
    slide.addText(c.right, { x:2.8, y:y+0.15, w:0.9, h:0.4, fontSize:12, fontFace:FONT_CN, color:THEME.mid, valign:"middle" });
    slide.addText(c.rScore, { x:3.65, y:y+0.1, w:0.7, h:0.5, fontSize:26, fontFace:FONT_EN, color:THEME.dark, bold:true, align:"center", valign:"middle" });
    slide.addText("=", { x:4.35, y:y+0.1, w:0.5, h:0.5, fontSize:24, fontFace:FONT_EN, color:THEME.accent, bold:true, align:"center", valign:"middle" });
    slide.addText(c.total, { x:4.85, y:y+0.1, w:0.9, h:0.5, fontSize:26, fontFace:FONT_EN, color: c.total === "0" ? THEME.mid : THEME.accent, bold:true, align:"center", valign:"middle" });

    // 注释
    slide.addText(c.note, { x:6, y:y+0.1, w:3.4, h:0.5, fontSize:10, fontFace:FONT_CN, color:THEME.secondary, valign:"middle" });
  });

  // 底部结论
  slide.addText("课程专注后半部分  ·  在已有基本方案的前提下  ·  系统分析背后人的格局", { x:0.5, y:5.0, w:9, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.mid, italic:false, align:"center" });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
