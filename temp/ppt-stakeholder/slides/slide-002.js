// slide-002.js - 课程导引：如何使用
// 极致美学 · 红灰浅底
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

const THEME = {
  primary:   "8B1A1A", secondary: "3A3A3A", accent:    "C53030",
  light:     "D4A5A0", bg:        "F5F0EA", dark:      "2A2A2A",
  mid:       "6B6B6B", border:    "B89A92", highlight: "F2E1D9",
  white:     "FFFFFF"
};

function addPartMark(slide, partLabel) {
  slide.addShape("rect", { x:0, y:0, w:10, h:0.12, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  if (partLabel) {
    slide.addText(partLabel, { x:0.4, y:0.22, w:4, h:0.32, fontSize:10, fontFace:FONT_CN, color:THEME.mid, charSpacing:4 });
  }
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
function addBulletList(slide, items, opt) {
  opt = opt || {};
  const startX = opt.x || 0.6, startY = opt.y || 1.7, itemH = opt.itemH || 0.55, gap = opt.gap || 0.12, maxW = opt.w || 8.8;
  items.forEach(function (it, i) {
    const y = startY + i * (itemH + gap);
    slide.addShape("rect", { x:startX, y:y+0.13, w:0.12, h:0.12, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
    slide.addText(it.title, { x:startX+0.3, y:y, w:maxW-0.3, h:0.28, fontSize:13, fontFace:FONT_CN, color:THEME.dark, bold:true });
    if (it.desc) slide.addText(it.desc, { x:startX+0.3, y:y+0.26, w:maxW-0.3, h:itemH-0.26, fontSize:10, fontFace:FONT_CN, color:THEME.secondary });
  });
}

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addPartMark(slide, "导引 · 课程使用方式");
  addContentTitle(slide, "课程导引：如何使用", "一套共读型文档  ·  讲到哪里翻到哪里  ·  遇到练习就填写");

  // 中央引述块
  slide.addShape("rect", { x:0.6, y:1.7, w:8.8, h:0.95, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addShape("rect", { x:0.6, y:1.7, w:0.08, h:0.95, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("这份文档是共读型的  ·  课程结束时, 你填完的文档就是一份真实可用的「利益相关方策略报告」", {
    x:0.85, y:1.78, w:8.4, h:0.8, fontSize:13, fontFace:FONT_CN, color:THEME.dark, valign:"middle"
  });

  addBulletList(slide, [
    { title: "共读型结构", desc: "六个部分前后呼应, 前一节的输出是后一节的输入" },
    { title: "讲到哪里翻到哪里", desc: "不要求预习, 课堂同步推进, 实时形成可用的策略底稿" },
    { title: "遇到练习直接填写", desc: "凡是标有「✋ 练习」的页面, 请认真作答, 哪怕只是草稿" },
    { title: "结尾产出可带走", desc: "六部分完成后, 你手上是一份完整、可直接用于项目推进的分析报告" }
  ], { startY: 2.85, itemH: 0.5, gap: 0.1 });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
