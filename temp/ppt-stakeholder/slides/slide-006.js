// slide-006.js - 开始前：锁定项目
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

  addPartMark(slide, "导引 · 锁定项目");
  addContentTitle(slide, "开始前  ·  锁定项目", "整套方法只对真实项目有效  ·  请带上你正在推的项目");

  // 练习标识
  slide.addShape("rect", { x:0.5, y:1.7, w:1.2, h:0.32, fill:{color:THEME.accent}, line:{color:THEME.accent,width:0} });
  slide.addText("✋  练习", { x:0.5, y:1.7, w:1.2, h:0.32, fontSize:11, fontFace:FONT_CN, color:THEME.white, bold:true, align:"center", valign:"middle" });

  // 三个填空区域
  const fields = [
    { label: "项目名称或简要描述", hint: "你正在推进或即将启动的真实项目" },
    { label: "目前最大的卡点或阻力", hint: "推进过程中最难突破的地方" },
    { label: "最希望今天搞清楚的问题", hint: "你最希望从这套方法里得到答案的具体问题" }
  ];
  const startY = 2.2;
  fields.forEach(function (f, i) {
    const y = startY + i * 0.95;
    // 标签
    slide.addText(f.label, { x:0.6, y:y, w:9, h:0.3, fontSize:12, fontFace:FONT_CN, color:THEME.primary, bold:true });
    // 提示
    slide.addText(f.hint, { x:0.6, y:y+0.28, w:9, h:0.22, fontSize:9, fontFace:FONT_CN, color:THEME.mid, italic:false });
    // 填写横线区域
    slide.addShape("rect", { x:0.6, y:y+0.55, w:9, h:0.32, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
    // 内部下划线
    for (let k = 0; k < 8; k++) {
      slide.addShape("line", { x:0.8 + k*1.1, y:y+0.83, w:1.0, h:0, line:{color:THEME.border,width:0.3,dashType:"dash"} });
    }
  });

  // 底部关键提示
  slide.addText("关键认知  ·  空洞的假设性练习很难产生真正的洞察。越是你真实关心、真实在推进的项目, 今天的收获就越大。", {
    x:0.5, y:5.0, w:9, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.mid, italic:false
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
