// slide-130.js - 正反例子：模糊 vs 具体
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "contrast", index: 130, title: "正反例子" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具四 · 执行意图", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("正反例子：模糊 vs 具体", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("4 组对比 · 看清\"具体\"和\"模糊\"的差距", {
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
  slide.addText("✗ 模糊", {
    x: 0.6, y: headerY, w: 4.3, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("✓ 具体", {
    x: 5.0, y: headerY, w: 4.5, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 数据
  const rows = [
    { vague: "当我有空的时候", specific: "当周三进展会议结束后的 10 分钟内" },
    { vague: "当我有需要时", specific: "当某 KPI 连续两周低于阈值时，在发现当天" },
    { vague: "记得要做", specific: "每个月第一个工作日 9 点" },
    { vague: "处理重要的事", specific: "每次汇报日期前两天，打开模板填写" }
  ];

  rows.forEach((r, i) => {
    const y = 2.0 + i * 0.65;
    if (i % 2 === 0) {
      slide.addShape("rect", {
        x: 0.5, y: y, w: 9, h: 0.65,
        fill: { color: theme.paper }, line: { color: theme.paper }
      });
    }
    slide.addText(r.vague, {
      x: 0.6, y: y, w: 4.3, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkMute, valign: "middle"
    });
    slide.addText(r.specific, {
      x: 5.0, y: y, w: 4.5, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
  });

  // 箭头分隔
  slide.addShape("rect", {
    x: 4.7, y: 2.0, w: 0.04, h: 2.6,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 底部
  slide.addShape("rect", {
    x: 0.5, y: 4.75, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("模糊 = 大脑在执行时仍要决策 · 具体 = 现场无需决策直接行动", {
    x: 0.5, y: 4.75, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
