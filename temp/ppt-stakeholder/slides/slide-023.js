// slide-023.js - 练习一：扫描人的因素
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
  addContentTitle(slide, "练习一  ·  扫描「人的因素」", "把真实项目带入  ·  凭第一感觉勾选  ·  草稿式记录即可");

  // 练习标识
  slide.addShape("rect", { x:0.5, y:1.7, w:1.2, h:0.32, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("✋  练习", { x:0.5, y:1.7, w:1.2, h:0.32, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  slide.addText("预计 5~8 分钟  ·  问题一  ·  6 个常见症状", { x:1.8, y:1.7, w:6, h:0.32, fontSize:10, fontFace:FONT_CN, color:THEME.mid, valign:"middle" });

  // 我的项目
  slide.addText("我的项目", { x:0.5, y:2.15, w:1.5, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addShape("rect", { x:2.0, y:2.15, w:7.5, h:0.3, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  for (let k = 0; k < 6; k++) {
    slide.addShape("line", { x:2.2+k*1.2, y:2.42, w:1.1, h:0, line:{color:THEME.border,width:0.3,dashType:"dash"} });
  }

  // 六个症状
  const items = [
    "某个人当面说支持, 但实际行动很慢",
    "某个部门始终不配合, 但说不出明确原因",
    "觉得某个人和项目没关系, 但他总是「冒出来」",
    "领导说推, 下面就是动不起来",
    "某个环节卡了很久, 找不到真正的堵点",
    "好像缺少一个关键的「入局者」, 但不知道是谁"
  ];

  items.forEach(function (it, i) {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.5 + col * 4.5, y = 2.6 + row * 0.6;
    // 背景
    slide.addShape("rect", { x:x, y:y, w:4.3, h:0.55, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
    // 编号
    slide.addText(String(i+1).padStart(2,'0'), { x:x+0.1, y:y, w:0.45, h:0.55, fontSize:13, fontFace:FONT_EN, color:THEME.primary, bold:true, align:"center", valign:"middle" });
    // 内容
    slide.addText(it, { x:x+0.6, y:y, w:2.9, h:0.55, fontSize:10, fontFace:FONT_CN, color:THEME.dark, valign:"middle" });
    // 复选框
    slide.addShape("rect", { x:x+3.55, y:y+0.13, w:0.3, h:0.3, fill:{color:THEME.bg}, line:{color:THEME.border,width:0.5} });
    slide.addText("是", { x:x+3.55, y:y+0.13, w:0.3, h:0.3, fontSize:9, fontFace:FONT_CN, color:THEME.mid, align:"center", valign:"middle" });
    slide.addShape("rect", { x:x+3.9, y:y+0.13, w:0.3, h:0.3, fill:{color:THEME.bg}, line:{color:THEME.border,width:0.5} });
    slide.addText("否", { x:x+3.9, y:y+0.13, w:0.3, h:0.3, fontSize:9, fontFace:FONT_CN, color:THEME.mid, align:"center", valign:"middle" });
  });

  // 底部
  slide.addText("凭第一感觉勾选  ·  这份草稿是后面所有分析的起点", { x:0.5, y:5.0, w:9, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.mid, italic:false, align:"center" });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
