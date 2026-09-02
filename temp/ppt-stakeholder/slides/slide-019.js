// slide-019.js - 看不见的地图：方成盲区
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

  addPartMark(slide, "第一部分 · 看不见的地图");
  addContentTitle(slide, "看不见的地图  ·  方成的盲区", "方成脑海里的「人的地图」  ·  极度简化  ·  也是大多数人的默认地图");

  // 左侧 - 方成脑海中的地图
  slide.addShape("rect", { x:0.5, y:1.75, w:4.4, h:3.4, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:0.5, y:1.75, w:4.4, h:0.5, fill:{color:THEME.mid}, line:{color:THEME.mid,width:0} });
  slide.addText("方成的地图  ·  默认认知", { x:0.5, y:1.75, w:4.4, h:0.5, fontSize:13, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });

  // 三个圆圈 - 大区总、门店店长、IT部门
  const nodes = [
    { x:1.7, y:2.5, label: "大区总经理", desc: "领导说推\n应该支持", color: THEME.mid },
    { x:3.0, y:3.4, label: "门店店长", desc: "执行层\n通知下去", color: THEME.mid },
    { x:0.7, y:3.7, label: "IT 部门", desc: "负责技术\n会配合", color: THEME.mid }
  ];
  nodes.forEach(function (n) {
    slide.addShape("ellipse", { x:n.x, y:n.y, w:1.2, h:1.2, fill:{color:n.color}, line:{color:n.color,width:0} });
    slide.addText(n.label, { x:n.x, y:n.y+0.3, w:1.2, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center" });
    slide.addText(n.desc, { x:n.x-0.1, y:n.y+0.6, w:1.4, h:0.5, fontSize:8, fontFace:FONT_CN, color:THEME.white, align:"center" });
  });

  // 注释
  slide.addText("一张极度简化的地图  ·  也是大多数人推项目时的默认状态", { x:0.6, y:4.85, w:4.2, h:0.25, fontSize:9, fontFace:FONT_CN, color:THEME.mid, italic:false, align:"center" });

  // 右侧 - 实际存在的地图
  slide.addShape("rect", { x:5.1, y:1.75, w:4.4, h:3.4, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
  slide.addShape("rect", { x:5.1, y:1.75, w:4.4, h:0.5, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
  slide.addText("实际存在的地图  ·  在方成不知道的地方运转", { x:5.1, y:1.75, w:4.4, h:0.5, fontSize:13, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });

  // 实际地图文字描述
  const realItems = [
    "总经理的随口一句话  ·  在中层传成「老板不重视」",
    "数据接口员工的「很忙, 系统对接在排期」",
    "财务部与 IT 部门的历史积怨",
    "资深老店长的「操作弹性空间」会被新系统暴露"
  ];
  realItems.forEach(function (it, i) {
    const y = 2.45 + i * 0.5;
    slide.addShape("rect", { x:5.3, y:y+0.1, w:0.1, h:0.1, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
    slide.addText(it, { x:5.5, y:y, w:3.9, h:0.45, fontSize:10, fontFace:FONT_CN, color:THEME.dark, valign:"middle" });
  });

  // 关键金句
  slide.addShape("rect", { x:5.1, y:4.55, w:4.4, h:0.55, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addText("这张地图不是要你学政治  ·  是要你看见一张本来就存在的网络", { x:5.2, y:4.55, w:4.2, h:0.55, fontSize:10, fontFace:FONT_CN, color:THEME.primary, bold:true, valign:"middle", align:"center" });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
