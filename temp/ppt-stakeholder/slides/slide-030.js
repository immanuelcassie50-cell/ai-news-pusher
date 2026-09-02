// slide-030.js - 本部分核心收获
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

  addPartMark(slide, "第一部分 · 核心收获");
  addContentTitle(slide, "本部分核心收获", "带走三句话  ·  装进行动里");

  const harvests = [
    { t: "乘法不是加法", d: "方案 10 分  ×  对人 0 分  =  0  ·  再好的方案, 在执行的「人」上缺位, 最终也是 0" },
    { t: "看不见的地图在运转", d: "你不看它, 它也在运转  ·  而且正在决定你的项目结果  ·  看见是改变的前提" },
    { t: "初步印象几乎一定不完整", d: "把「初步印象」替换成「有依据的判断」  ·  这是系统分析的全部价值" }
  ];

  harvests.forEach(function (h, i) {
    const y = 1.85 + i * 1.05;
    // 大数字
    slide.addText("0" + (i+1), { x:0.5, y:y, w:1.5, h:1.0, fontSize:60, fontFace:FONT_EN, color:THEME.light, bold:true, valign:"middle" });
    // 标题
    slide.addText(h.t, { x:2.0, y:y+0.05, w:7.5, h:0.4, fontSize:18, fontFace:FONT_CN, color:THEME.primary, bold:true });
    // 描述
    slide.addText(h.d, { x:2.0, y:y+0.5, w:7.5, h:0.5, fontSize:11, fontFace:FONT_CN, color:THEME.secondary, valign:"top" });
    // 分隔线
    if (i < 2) {
      slide.addShape("line", { x:0.5, y:y+1.0, w:9, h:0, line:{color:THEME.border,width:0.3,dashType:"dash"} });
    }
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
