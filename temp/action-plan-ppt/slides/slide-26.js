// slide-26.js - 自查练习
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "exercise", index: 26, title: "自查练习" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("EXERCISE 01", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("开场自查练习", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("执行脆弱点初判 — 在进入具体工具之前，先对自己的计划做一次直觉性的风险扫描。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 表格
  const tableX = 0.5;
  const tableY = 1.7;
  const colWidths = [2.6, 2.2, 1.6, 2.6];
  const rowH = 0.5;

  // 表头
  slide.addShape("rect", {
    x: tableX, y: tableY, w: 9, h: rowH,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  const headers = ["任务名称", "日常会主动做吗？", "启动困难吗？", "特别忙时还会发生吗？"];
  let xOff = tableX;
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: xOff + 0.1, y: tableY + 0.05, w: colWidths[i] - 0.2, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    xOff += colWidths[i];
  });

  // 5行空白
  for (let i = 0; i < 5; i++) {
    const y = tableY + rowH + i * rowH;
    slide.addShape("rect", {
      x: tableX, y: y, w: 9, h: rowH,
      fill: { color: i % 2 === 0 ? theme.paper : theme.paperWarm },
      line: { color: theme.paperLine, width: 0.5 }
    });
    // 行号
    slide.addText(String(i + 1), {
      x: tableX + 0.1, y: y + 0.1, w: 0.3, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: theme.inkMute, bold: true
    });
  }

  // 操作说明
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 4.4, h: 0.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 0.08, h: 0.9,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("操作", {
    x: 0.7, y: 4.45, w: 4, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("从你的行动计划中选 5 个任务，\n凭直觉打分，不需要仔细分析。", {
    x: 0.7, y: 4.7, w: 4.1, h: 0.6,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 14
  });

  // 评估标准
  slide.addShape("rect", {
    x: 5.2, y: 4.4, w: 4.3, h: 0.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 5.2, y: 4.4, w: 0.08, h: 0.9,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("评分参考", {
    x: 5.4, y: 4.45, w: 4, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("会 / 容易 / 会 → 稳健\n可能 / 一般 / 可能 → 有风险\n不会 / 困难 / 不会 → 脆弱点", {
    x: 5.4, y: 4.7, w: 4.1, h: 0.6,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 14
  });

  // 底部金句
  slide.addText("圈出三列里出现\"不会/困难\"的任务 — 那就是计划最脆弱的地方。", {
    x: 0.5, y: 5.35, w: 9, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
