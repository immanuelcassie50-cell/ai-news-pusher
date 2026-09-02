// slide-005.js - 你将产出的成果
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
function addCircleMetric(slide, x, y, size, value, label, color) {
  const c = color || THEME.primary;
  slide.addShape("ellipse", { x:x, y:y, w:size, h:size, fill:{color:c}, line:{color:c,width:0} });
  slide.addText(value, { x:x, y:y, w:size, h:size, fontSize:Math.floor(size*32), fontFace:FONT_EN, color:THEME.white, bold:true, align:"center", valign:"middle" });
  if (label) slide.addText(label, { x:x-0.3, y:y+size+0.05, w:size+0.6, h:0.3, fontSize:10, fontFace:FONT_CN, color:THEME.secondary, align:"center" });
}

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addPartMark(slide, "导引 · 课程产出");
  addContentTitle(slide, "你将产出的成果", "不是课堂练习  ·  是真实项目的策略底稿");

  // 五个圆形指标 + 文字
  const items = [
    { num: "01", title: "全景穷举清单", desc: "覆盖所有潜在相关方\n第二部分产出" },
    { num: "06~08", title: "核心人物深度画像卡", desc: "五维框架 · 行为可预测\n第三部分产出" },
    { num: "01", title: "支持度分布图", desc: "标注每个人当前位置\n第四部分产出" },
    { num: "01", title: "需求-价值对照表", desc: "需求 vs 能给 价值交换\n第五部分产出" },
    { num: "2~4", title: "破局策略方案", desc: "具体到第一步怎么做\n第六部分产出" }
  ];

  // 上下两行布局
  const startY = 1.85;
  const cardW = 1.78, cardH = 1.5, gap = 0.07;
  items.forEach(function (it, i) {
    const x = 0.55 + i * (cardW + gap);
    // 卡片背景
    slide.addShape("rect", { x:x, y:startY, w:cardW, h:cardH, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
    // 顶部色条
    slide.addShape("rect", { x:x, y:startY, w:cardW, h:0.08, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
    // 编号
    slide.addText(it.num, { x:x, y:startY+0.18, w:cardW, h:0.45, fontSize:24, fontFace:FONT_EN, color:THEME.primary, bold:true, align:"center" });
    // 标题
    slide.addText(it.title, { x:x+0.1, y:startY+0.65, w:cardW-0.2, h:0.4, fontSize:11, fontFace:FONT_CN, color:THEME.dark, bold:true, align:"center", valign:"middle" });
    // 描述
    slide.addText(it.desc, { x:x+0.1, y:startY+1.05, w:cardW-0.2, h:0.42, fontSize:9, fontFace:FONT_CN, color:THEME.mid, align:"center", valign:"top" });
  });

  // 下方：关键认知
  slide.addShape("rect", { x:0.55, y:3.65, w:9, h:1.5, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addShape("rect", { x:0.55, y:3.65, w:0.08, h:1.5, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("关键认知", { x:0.8, y:3.75, w:2, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.accent, bold:true, charSpacing:3 });
  slide.addText("这套成果不是课堂练习  ·  是你真实项目的分析底稿", { x:0.8, y:4.05, w:8.5, h:0.4, fontSize:14, fontFace:FONT_CN, color:THEME.dark, bold:true });
  slide.addText("完成全程学习后, 你手里这份文档就是一份真实可用的利益相关方策略报告, 拿回去可以直接用来推进项目。", { x:0.8, y:4.45, w:8.5, h:0.6, fontSize:11, fontFace:FONT_CN, color:THEME.secondary });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
