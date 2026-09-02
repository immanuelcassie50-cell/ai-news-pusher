// slide-004.js - 全程学习地图
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

  addPartMark(slide, "导引 · 学习地图");
  addContentTitle(slide, "全程学习地图", "六部分环环相扣  ·  前一节产出是后一节输入");

  // 表头
  const colXs = [0.5, 2.2, 4.4, 6.4, 8.3];
  const colWs = [1.7,  2.2, 2.0, 1.9, 1.2];
  const headers = ["阶段", "核心问题", "你会经历什么", "你会带走什么", "页码"];
  slide.addShape("rect", { x:0.5, y:1.7, w:9, h:0.4, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  headers.forEach(function (h, i) {
    slide.addText(h, { x:colXs[i], y:1.7, w:colWs[i], h:0.4, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, valign:"middle", align: i===1 || i===2 || i===3 ? "left" : "center" });
  });

  const rows = [
    ["第一部分  认知激活", "为什么看清人比做好事更关键", "认知冲击 + 盲区自测", "人的因素盘点", "01~32"],
    ["第二部分  全景扫描", "你的项目里到底有哪些人", "六维扫描 + 全景穷举", "利益相关方全景清单", "33~64"],
    ["第三部分  深度画像", "这些人真正在意什么", "五维画像 + 6~8张卡片", "核心人物深度画像", "65~96"],
    ["第四部分  三阶九梯", "他们现在到底是什么立场", "精准定位 + 可视化", "支持度分布图", "97~126"],
    ["第五部分  需求映射", "我需要什么 · 我能给什么", "需求梳理 + 价值交换", "需求-能给对照表", "127~148"],
    ["第六部分  破局策略", "从哪里下手 怎么突破", "杠杆点 + 可执行策略", "2~4个破局方案", "149~164"]
  ];
  rows.forEach(function (r, i) {
    const y = 2.15 + i * 0.42;
    slide.addShape("rect", { x:0.5, y:y, w:9, h:0.42, fill:{color: i % 2 === 0 ? THEME.white : THEME.highlight}, line:{color:THEME.border,width:0.5} });
    // 阶段列特殊着色
    if (i === 0) {
      slide.addShape("rect", { x:0.5, y:y, w:0.1, h:0.42, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
    }
    r.forEach(function (c, j) {
      slide.addText(c, { x:colXs[j], y:y, w:colWs[j], h:0.42, fontSize:10, fontFace:FONT_CN, color: j===0 ? THEME.primary : THEME.dark, bold: j===0, valign:"middle", align: j===1 || j===2 || j===3 ? "left" : "center" });
    });
  });

  // 底部小结
  slide.addText("六个部分加起来  ·  就是一份完整的利益相关方策略报告", {
    x:0.5, y:4.8, w:9, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.mid, italic:false, charSpacing:2
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
