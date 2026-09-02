// slide-020.js - 三个隐形事件
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

  addPartMark(slide, "第一部分 · 三个隐形事件");
  addContentTitle(slide, "三个隐形事件  ·  在方成不知道的情况下发生", "单独看都不严重  ·  叠加在一起  ·  活活拖死一个好方案");

  const events = [
    {
      n: "事件一",
      title: "总经理的一句话",
      desc: "华南区大区总经理收到启动通知后, 对秘书说「跟进一下, 但别影响我们年底指标。」\n→ 这句话传到各中层, 大家解读为: 老板对这个项目其实没那么重视。"
    },
    {
      n: "事件二",
      title: "数据接口员工的「沉默」",
      desc: "一名管理 20 家重点门店数据接口的中层员工, 方成从未将其列为相关方。\n他长期用自己的数据模板与总部对接, 新系统一旦落地, 他的整套体系直接废掉。\n他没有任何配合的动力, 但也没有公开反对  ·  只是「很忙, 系统对接一直在排期」。"
    },
    {
      n: "事件三",
      title: "财务部与 IT 部门的历史积怨",
      desc: "方成推进时先找了财务部确认预算, IT 部门听说后觉得「被跳过了」。\n原本态度平稳的 IT 负责人开始以各种技术理由拖延系统部署节点。"
    }
  ];

  events.forEach(function (e, i) {
    const y = 1.75 + i * 1.1;
    // 背景卡
    slide.addShape("rect", { x:0.5, y:y, w:9, h:1.0, fill:{color:THEME.white}, line:{color:THEME.border,width:0.5} });
    // 左侧色块
    slide.addShape("rect", { x:0.5, y:y, w:1.4, h:1.0, fill:{color:THEME.primary}, line:{color:THEME.primary,width:0} });
    slide.addText(e.n, { x:0.5, y:y+0.1, w:1.4, h:0.3, fontSize:11, fontFace:FONT_CN, color:THEME.light, align:"center", valign:"middle" });
    slide.addText(String(i+1), { x:0.5, y:y+0.4, w:1.4, h:0.55, fontSize:32, fontFace:FONT_EN, color:THEME.white, bold:true, align:"center", valign:"middle" });

    // 内容
    slide.addText(e.title, { x:2.1, y:y+0.1, w:7.2, h:0.3, fontSize:13, fontFace:FONT_CN, color:THEME.primary, bold:true });
    slide.addText(e.desc, { x:2.1, y:y+0.4, w:7.2, h:0.6, fontSize:9.5, fontFace:FONT_CN, color:THEME.secondary, valign:"top", lineSpacing:15 });
  });

  // 底部金句
  slide.addText("三件事单独看都不严重  ·  叠加在一起  ·  就把好方案活活拖死了", { x:0.5, y:5.0, w:9, h:0.25, fontSize:10, fontFace:FONT_CN, color:THEME.accent, italic:false, align:"center", charSpacing:2 });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
