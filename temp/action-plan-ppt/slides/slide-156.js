// slide-156.js - 修订3：移除决策
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case-removal", index: 156, title: "修订3 移除决策" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("REVISION 03 / 04", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("修订 3：移除「双周跨部门经验交流」", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("有时候，移除一条任务比保留它更有价值。", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 诊断决策
  slide.addText("诊断后决策：", {
    x: 0.5, y: 1.85, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 三条原因
  const reasons = [
    {
      tag: "01",
      title: "协调摩擦极高",
      desc: "涉及多个部门时间协调，每次都需要发起约定"
    },
    {
      tag: "02",
      title: "当前阶段优先级不高",
      desc: "相比一对一和复盘，对苏敏来说更次要"
    },
    {
      tag: "03",
      title: "无法稳定执行",
      desc: "预测大概率会断掉，不如干脆不放在计划里"
    }
  ];

  reasons.forEach((r, i) => {
    const x = 0.5 + i * 3.07;
    slide.addShape("rect", {
      x: x, y: 2.3, w: 2.95, h: 1.55,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: 2.3, w: 2.95, h: 0.06,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(r.tag, {
      x: x + 0.15, y: 2.4, w: 0.6, h: 0.32,
      fontSize: 13, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    slide.addText(r.title, {
      x: x + 0.15, y: 2.75, w: 2.65, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    slide.addText(r.desc, {
      x: x + 0.15, y: 3.15, w: 2.65, h: 0.65,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 16
    });
  });

  // 关键决策
  slide.addShape("rect", {
    x: 0.5, y: 4.05, w: 9, h: 0.95,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.05, w: 0.1, h: 0.95,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("苏敏决定暂时从计划里移除这条任务，把精力集中在更关键的一对一和复盘上。", {
    x: 0.8, y: 4.15, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("移除一条不可靠的任务，比保留一条「看起来有但实际没执行」的任务，对计划的整体执行率更有价值。", {
    x: 0.8, y: 4.55, w: 8.5, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true, lineSpacing: 18
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
