// slide-91.js - 工具 vs B=MAP 对应表
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "table", index: 91, title: "工具 vs B=MAP" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("工具与 B=MAP 的对应关系", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("诊断出弱点之后，对应选择工具", {
    x: 0.5, y: 0.78, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 表头
  const headerY = 1.3;
  const colWidths = [1.2, 2.4, 1.2, 4.7];
  const colX = [0.5, 1.7, 4.1, 5.3];

  slide.addShape("rect", {
    x: 0.5, y: headerY, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  const headers = ["工具", "工具名", "改善", "核心做法"];
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: colX[i] + 0.1, y: headerY, w: colWidths[i] - 0.2, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });
  });

  // 数据行
  const rows = [
    { num: "01", name: "最小启动动作", target: "A", desc: "针对启动阻力高的任务，把开始设计得小到不可拒绝" },
    { num: "02", name: "锚定行为", target: "P", desc: "借用已有可靠触发器为新任务创造提示" },
    { num: "03", name: "降低摩擦", target: "A", desc: "系统性消除执行路径上的物理/认知/协调阻力" },
    { num: "04", name: "执行意图", target: "P", desc: "预先决定 if-then，让大脑在那个时刻无需额外决定" }
  ];

  rows.forEach((r, i) => {
    const y = 1.8 + i * 0.65;
    // 斑马纹
    if (i % 2 === 0) {
      slide.addShape("rect", {
        x: 0.5, y: y, w: 9, h: 0.65,
        fill: { color: theme.paper }, line: { color: theme.paper }
      });
    }
    // 工具号
    slide.addText(r.num, {
      x: colX[0] + 0.1, y: y, w: colWidths[0] - 0.2, h: 0.65,
      fontSize: 18, fontFace: "Arial",
      color: theme.primary, bold: true, valign: "middle"
    });
    // 工具名
    slide.addText(r.name, {
      x: colX[1] + 0.1, y: y, w: colWidths[1] - 0.2, h: 0.65,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, valign: "middle"
    });
    // 字母徽章
    slide.addShape("ellipse", {
      x: colX[2] + 0.3, y: y + 0.15, w: 0.4, h: 0.35,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(r.target, {
      x: colX[2] + 0.3, y: y + 0.15, w: 0.4, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // 描述
    slide.addText(r.desc, {
      x: colX[3] + 0.1, y: y, w: colWidths[3] - 0.2, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.55,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("A 弱（启动难/摩擦大）→ 工具一 + 工具三 · P 弱（缺触发器）→ 工具二 或 工具四", {
    x: 0.5, y: 4.7, w: 9, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
