// slide-159.js - 练习说明
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "practice", index: 159, title: "综合优化练习" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("PRACTICE / COMPREHENSIVE", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("综合优化练习", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("全量审视你的行动计划", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 练习目的提示
  slide.addShape("rect", {
    x: 0.5, y: 1.8, w: 9, h: 0.45,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.8, w: 0.08, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("产出：经过行为设计审视的修订版计划", {
    x: 0.8, y: 1.8, w: 8.5, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  // 五个步骤
  const steps = [
    { num: "01", title: "全量脆弱点扫描", desc: "快速过所有任务，标出中/高风险" },
    { num: "02", title: "诊断 + 设计", desc: "B=MAP 诊断 → 选工具 → 重新设计" },
    { num: "03", title: "三次对话自检", desc: "清晰度 / 摩擦力 / 触发器" },
    { num: "04", title: "全局负荷检查", desc: "每周投入小时数 + 比例是否合理" },
    { num: "05", title: "伙伴互审", desc: "扮演「普通忙碌执行者」互相反馈" }
  ];

  steps.forEach((s, i) => {
    const y = 2.45 + i * 0.5;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.42,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.7, h: 0.42,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: 0.5, y: y, w: 0.7, h: 0.42,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: 1.35, y: y, w: 2.5, h: 0.42,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, valign: "middle"
    });
    slide.addText(s.desc, {
      x: 3.9, y: y, w: 5.5, h: 0.42,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
  });

  // 底部时间提示
  slide.addText("本模块最长的练习，给自己足够时间；时间有限可先做最关键的 5 条。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
