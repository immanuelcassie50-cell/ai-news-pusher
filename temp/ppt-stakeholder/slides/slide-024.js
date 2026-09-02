// slide-024.js - 练习一：列相关方
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

  addPartMark(slide, "第一部分 · 练习一");
  addContentTitle(slide, "练习一  ·  列相关方", "问题二  ·  你目前能想到的「和这个项目有关的人」");

  // 练习标识
  slide.addShape("rect", { x:0.5, y:1.7, w:1.2, h:0.32, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("✋  练习", { x:0.5, y:1.7, w:1.2, h:0.32, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addText("随手列出  ·  不用完整  ·  想到就写", { x:1.8, y:1.7, w:6, h:0.32, fontSize:10, fontFace:FONT_CN, color:THEME.mid, valign:"middle" });

  // 提示
  slide.addShape("rect", { x:0.5, y:2.15, w:9, h:0.45, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addText("提示  ·  包括直接接触的人 + 间接影响项目的人  ·  想到谁就写谁  ·  暂时不要判断重要性", { x:0.7, y:2.15, w:8.6, h:0.45, fontSize:10, fontFace:FONT_CN, color:THEME.dark, valign:"middle" });

  // 五个空行
  for (let i = 0; i < 5; i++) {
    const y = 2.75 + i * 0.42;
    // 编号
    slide.addShape("ellipse", { x:0.5, y:y, w:0.4, h:0.4, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
    slide.addText(String(i+1), { x:0.5, y:y, w:0.4, h:0.4, fontSize:13, fontFace:FONT_EN, color:THEME.white, bold:true, align:"center", valign:"middle" });
    // 填写区域
    slide.addShape("rect", { x:1.0, y:y, w:8.5, h:0.4, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
    // 内部下划线
    for (let k = 0; k < 7; k++) {
      slide.addShape("line", { x:1.2+k*1.18, y:y+0.36, w:1.1, h:0, line:{color:THEME.border,width:0.3,dashType:"dash"} });
    }
  }

  // 底部
  slide.addText("这里列出来的  ·  只是「能想到的」  ·  后面第二部分会做系统性穷举", { x:0.5, y:5.0, w:9, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.mid, italic:false, align:"center" });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
