// slide-87.js - 练习说明：B=MAP诊断表
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "exercise", index: 87, title: "练习说明" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部标签
  slide.addText("EXERCISE", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  // 标题
  slide.addText("练习：B=MAP 诊断工作表", {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("对第一部分识别出的高风险任务，用 B=MAP 逐一诊断", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 操作说明
  slide.addShape("rect", {
    x: 0.5, y: 1.75, w: 9, h: 0.55,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("操作：选出 3 个执行风险最高的任务，填入下表", {
    x: 0.5, y: 1.75, w: 9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 表格表头
  const tableY = 2.5;
  const colWidths = [1.7, 1.85, 1.85, 1.85, 1.75];
  const colX = [];
  let cumX = 0.5;
  colWidths.forEach(w => {
    colX.push(cumX);
    cumX += w;
  });

  // 表头
  slide.addShape("rect", {
    x: 0.5, y: tableY, w: 9, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  const headers = ["任务名称", "M（动机）", "A（容易度）", "P（提示）", "最薄弱项"];
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: colX[i], y: tableY, w: colWidths[i], h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
  });

  // 三行空白
  for (let r = 0; r < 3; r++) {
    const y = tableY + 0.45 + r * 0.4;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.4,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
  }

  // 评分说明
  slide.addText("评分标准", {
    x: 0.5, y: 3.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  const ratings = [
    { label: "M", desc: "高：认可意义 / 低：有顾虑或抵触" },
    { label: "A", desc: "高：启动容易 / 低：需要大量准备协调" },
    { label: "P", desc: "有：固定触发机制 / 无：依赖自我记忆" }
  ];

  ratings.forEach((rt, i) => {
    const x = 0.5 + i * 3.1;
    slide.addText(rt.label, {
      x: x, y: 4.3, w: 0.4, h: 0.3,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(rt.desc, {
      x: x + 0.4, y: 4.3, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 进阶练习
  slide.addShape("rect", {
    x: 0.5, y: 4.75, w: 9, h: 0.45,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("进阶：把诊断结果和同学交换，请对方扮演「挑战者」", {
    x: 0.5, y: 4.75, w: 9, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 底部
  slide.addText("这个诊断结果，将直接指导你在第三部分选择对应的设计工具", {
    x: 0.5, y: 5.25, w: 9, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
