// slide-21.js - 学习地图
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-table", index: 21, title: "学习地图" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("LEARNING MAP", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("本模块学习地图", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("四个部分的核心问题 + 你将带走的东西。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 表格
  // 表头
  const tableX = 0.5;
  const tableY = 1.85;
  const colWidths = [2.4, 3.3, 3.3];
  const rowHeight = 0.6;

  // 表头
  slide.addShape("rect", {
    x: tableX, y: tableY, w: 9, h: rowHeight,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  const headers = ["部分", "核心问题", "你将带走什么"];
  let xOffset = tableX;
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: xOffset + 0.2, y: tableY + 0.1, w: colWidths[i] - 0.4, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });
    xOffset += colWidths[i];
  });

  // 表格内容
  const rows = [
    { part: "第一部分\n可执行性标准", q: "怎么判断一个任务\n是否真的会被执行？", out: "三条标准\n+ 计划风险清单" },
    { part: "第二部分\nB=MAP 模型", q: "行为为什么会发生？\n什么会阻止它发生？", out: "行为诊断框架" },
    { part: "第三部分\n四个设计工具", q: "如何重新设计任务\n让它更可靠地发生？", out: "四个工具的具体用法" },
    { part: "第四部分\n综合优化", q: "如何把前面所有的内容\n用在自己的计划上？", out: "经过行为设计审视的\n行动计划修订版" }
  ];

  rows.forEach((r, i) => {
    const y = tableY + rowHeight + i * 0.62;
    // 行背景
    slide.addShape("rect", {
      x: tableX, y: y, w: 9, h: 0.6,
      fill: { color: i % 2 === 0 ? theme.paper : theme.paperWarm },
      line: { color: theme.paperLine, width: 0.5 }
    });
    // 部分名
    slide.addText(r.part, {
      x: tableX + 0.2, y: y + 0.05, w: colWidths[0] - 0.4, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, lineSpacing: 15
    });
    // 核心问题
    slide.addText(r.q, {
      x: tableX + colWidths[0] + 0.2, y: y + 0.05, w: colWidths[1] - 0.4, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink, lineSpacing: 15
    });
    // 产出
    slide.addText(r.out, {
      x: tableX + colWidths[0] + colWidths[1] + 0.2, y: y + 0.05, w: colWidths[2] - 0.4, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, lineSpacing: 15
    });
  });

  // 底部说明
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("→ 四个部分彼此不独立：标准告诉你\"识别什么\"，框架告诉你\"为什么会发生\"，\n   工具告诉你\"怎么改\"，综合优化让你\"用起来\"。", {
    x: 0.5, y: 4.99, w: 9, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 14, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
