// slide-100.js - 例子对比 (2)：续表
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "table", index: 100, title: "例子对比 (2)" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具一 · 最小启动动作", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("原始任务 vs 最小启动动作（续）", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("更多例子 · 找规律", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 表头
  const headerY = 1.5;
  slide.addShape("rect", {
    x: 0.5, y: headerY, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("原始任务描述", {
    x: 0.6, y: headerY, w: 4.3, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("可能的最小启动动作", {
    x: 5.0, y: headerY, w: 4.5, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 数据
  const rows = [
    { left: "每周做一对一辅导", right: "在日历上给本周一对一时间块标上\"已确认\"" },
    { left: "每月写项目经验总结", right: "新建一个文档，写下本月你印象最深的一件事" },
    { left: "每天做客户跟进", right: "打开客户列表，把今天能联系的人标红" }
  ];

  rows.forEach((r, i) => {
    const y = 2.0 + i * 0.7;
    if (i % 2 === 0) {
      slide.addShape("rect", {
        x: 0.5, y: y, w: 9, h: 0.7,
        fill: { color: theme.paper }, line: { color: theme.paper }
      });
    }
    slide.addText(r.left, {
      x: 0.6, y: y, w: 4.3, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
    slide.addText(r.right, {
      x: 5.0, y: y, w: 4.5, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
  });

  // 箭头分隔
  slide.addShape("rect", {
    x: 4.7, y: 2.0, w: 0.04, h: 2.1,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 规律提炼
  slide.addShape("rect", {
    x: 0.5, y: 4.3, w: 9, h: 0.85,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("规律", {
    x: 0.7, y: 4.4, w: 1, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const rules = [
    "打开某个文件 · 填入一个字段",
    "发出一个邀请 · 标上一个时间",
    "新建一个文档 · 写下第一个字"
  ];
  rules.forEach((r, i) => {
    slide.addShape("ellipse", {
      x: 0.85 + i * 2.95, y: 4.78, w: 0.08, h: 0.08,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(r, {
      x: 1.0 + i * 2.95, y: 4.7, w: 2.7, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  slide.addText("共同点：都是\"只要打开 / 填一个 / 标一个\"，不超过 30 秒", {
    x: 0.5, y: 5.2, w: 9, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
