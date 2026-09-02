// slide-027.js - 六部分学习路径
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

  addPartMark(slide, "第一部分 · 学习路径");
  addContentTitle(slide, "接下来的学习路径", "每一部分给你一个工具  ·  把感性扫描变成系统深度分析");

  // 六个步骤的水平流程
  const parts = [
    { n:"01", t:"六维扫描", d:"穷举所有潜在相关方  ·  建立全景视图" },
    { n:"02", t:"五维画像", d:"理解每个人在岗位上真正在意什么" },
    { n:"03", t:"三阶九梯", d:"把「感觉他支持/反对」变成行为判断" },
    { n:"04", t:"需求映射", d:"我需要什么  ·  我能给什么" },
    { n:"05", t:"破局策略", d:"找到 2~4 个真正有效的杠杆点" }
  ];

  // 横向六列（含起始节点）
  const startX = 0.4, w = 1.5, gap = 0.15;
  parts.forEach(function (p, i) {
    const x = startX + i * (w + gap);
    // 当前节点特殊
    const isCurrent = (i === 0);
    const fill = isCurrent ? THEME.primary : THEME.white;
    const textColor = isCurrent ? THEME.white : THEME.dark;
    const numColor = isCurrent ? THEME.white : THEME.accent;
    // 卡片
    slide.addShape("rect", { x:x, y:1.85, w:w, h:1.8, fill:{color:fill}, line:{color: isCurrent ? THEME.primary : THEME.border, width: isCurrent ? 0 : 0.5} });
    // 编号
    slide.addText(p.n, { x:x, y:1.95, w:w, h:0.5, fontSize:24, fontFace:FONT_EN, color:numColor, bold:true, align:"center" });
    // 标题
    slide.addText(p.t, { x:x+0.1, y:2.5, w:w-0.2, h:0.4, fontSize:13, fontFace:FONT_CN, color:textColor, bold:true, align:"center", valign:"middle" });
    // 描述
    slide.addText(p.d, { x:x+0.1, y:2.95, w:w-0.2, h:0.65, fontSize:9, fontFace:FONT_CN, color: isCurrent ? THEME.light : THEME.mid, align:"center", valign:"top" });
  });

  // 当前节点标注
  slide.addText("已学完", { x:0.4, y:3.7, w:1.5, h:0.3, fontSize:10, fontFace:FONT_CN, color:THEME.primary, bold:true, align:"center" });
  // 后续节点 - 进度
  ["学习中", "待开始", "待开始", "待开始", "待开始"].forEach(function (s, i) {
    const x = 0.4 + (i+1) * (1.5 + 0.15);
    slide.addText(s, { x:x, y:3.7, w:1.5, h:0.3, fontSize:10, fontFace:FONT_CN, color:THEME.mid, align:"center" });
  });

  // 下方说明
  slide.addShape("rect", { x:0.5, y:4.15, w:9, h:0.95, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addShape("rect", { x:0.5, y:4.15, w:0.08, h:0.95, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("每个部分结束时, 你都会完成一个具体的分析产出", { x:0.75, y:4.2, w:8.6, h:0.3, fontSize:12, fontFace:FONT_CN, color:THEME.primary, bold:true });
  slide.addText("六个部分加在一起  ·  就是你的完整策略报告  ·  可以直接带回去推进真实项目", { x:0.75, y:4.55, w:8.6, h:0.5, fontSize:11, fontFace:FONT_CN, color:THEME.secondary });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
