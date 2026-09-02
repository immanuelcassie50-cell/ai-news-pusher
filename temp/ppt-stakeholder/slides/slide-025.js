// slide-025.js - 练习一：识别难点
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
  addContentTitle(slide, "练习一  ·  识别难点", "问题三  ·  哪个人是你目前感觉最难处理的  ·  为什么");

  // 练习标识
  slide.addShape("rect", { x:0.5, y:1.7, w:1.2, h:0.32, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("✋  练习", { x:0.5, y:1.7, w:1.2, h:0.32, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addText("聚焦一个最棘手的人  ·  写具体一点", { x:1.8, y:1.7, w:6, h:0.32, fontSize:10, fontFace:FONT_CN, color:THEME.mid, valign:"middle" });

  // 难点人
  slide.addText("最难处理的那个人", { x:0.5, y:2.2, w:2.5, h:0.32, fontSize:12, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addShape("rect", { x:3.0, y:2.2, w:6.5, h:0.32, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  for (let k = 0; k < 6; k++) {
    slide.addShape("line", { x:3.2+k*1.04, y:2.48, w:1.0, h:0, line:{color:THEME.border,width:0.3,dashType:"dash"} });
  }

  // 难的原因 - 多个候选维度
  slide.addText("为什么觉得他难  ·  可多选  ·  也可自己补充", { x:0.5, y:2.7, w:9, h:0.3, fontSize:12, fontFace:FONT_CN, color:THEME.primary, bold:true });

  const reasons = [
    "他公开表态支持, 但实际不配合",
    "他不表态, 也不阻碍, 但项目卡在他那里",
    "他有正式的反对, 而且他有权否决",
    "他和我的 KPI 没关系, 我没有理由要求他",
    "他是关键人物, 但我跟他没有直接接触渠道",
    "我和他在历史上有过节, 难以直接沟通"
  ];

  reasons.forEach(function (r, i) {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.5 + col * 4.5, y = 3.1 + row * 0.5;
    slide.addShape("rect", { x:x, y:y, w:0.3, h:0.3, fill:{color:THEME.bg}, line:{color:THEME.border,width:0.5} });
    slide.addText(r, { x:x+0.4, y:y, w:3.9, h:0.3, fontSize:10, fontFace:FONT_CN, color:THEME.dark, valign:"middle" });
  });

  // 自己补充
  slide.addText("其他原因  ·  自由补充", { x:0.5, y:4.7, w:9, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addShape("rect", { x:0.5, y:5.0, w:9, h:0.3, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  for (let k = 0; k < 8; k++) {
    slide.addShape("line", { x:0.7+k*1.1, y:5.26, w:1.0, h:0, line:{color:THEME.border,width:0.3,dashType:"dash"} });
  }

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
