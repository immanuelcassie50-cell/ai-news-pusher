// slide-029.js - 本部分小结
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

  addPartMark(slide, "第一部分 · 本部分小结");
  addContentTitle(slide, "本部分小结", "第一部分  ·  我们走过的认知路径");

  // 五个关键节点
  const milestones = [
    { n:"01", t:"案例引入", d:"叶云 vs 方成  ·  同一方案  ·  两种结局  ·  起点是方成的反思" },
    { n:"02", t:"直觉自测", d:"八个常见说法  ·  全部是错  ·  直觉不可靠" },
    { n:"03", t:"真实公式", d:"项目成功率 = 方案质量 × 对人的格局理解  ·  乘法关系" },
    { n:"04", t:"看不见的地图", d:"三个隐形事件  ·  单独看都不严重  ·  叠加拖死好方案" },
    { n:"05", t:"感性扫描", d:"练习一  ·  把真实项目带入  ·  完成第一份「人的因素」盘点" }
  ];

  // 垂直时间线
  const lineX = 1.0, startY = 1.85;
  slide.addShape("line", { x:lineX, y:startY, w:0, h:milestones.length * 0.62 - 0.1, line:{color:THEME.border, width:1.5, dashType:"dash"} });

  milestones.forEach(function (m, i) {
    const y = startY + i * 0.62;
    // 节点圆
    slide.addShape("ellipse", { x:lineX-0.25, y:y, w:0.5, h:0.5, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
    slide.addText(m.n, { x:lineX-0.25, y:y, w:0.5, h:0.5, fontSize:11, fontFace:FONT_EN, color:THEME.white, bold:true, align:"center", valign:"middle" });
    // 标题
    slide.addText(m.t, { x:lineX+0.4, y:y, w:2.5, h:0.5, fontSize:12, fontFace:FONT_CN, color:THEME.primary, bold:true, valign:"middle" });
    // 描述
    slide.addText(m.d, { x:lineX+3.0, y:y, w:5.7, h:0.5, fontSize:10, fontFace:FONT_CN, color:THEME.dark, valign:"middle" });
  });

  // 底部
  slide.addShape("rect", { x:0.5, y:5.0, w:9, h:0.25, fill:{color:THEME.highlight}, line:{color:THEME.highlight,width:0} });
  slide.addText("从「我感觉……」到「我看见一张地图」  ·  这是第一部分给你的最大变化", { x:0.7, y:5.0, w:8.6, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.dark, bold:true, valign:"middle", align:"center" });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
