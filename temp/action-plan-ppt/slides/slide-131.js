// slide-131.js - 转换对比 (1)：表格
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "table", index: 131, title: "转换对比 (1)" };

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
  slide.addText("普通任务描述 vs 执行意图", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("把模糊的\"定期\"\"及时\"转换成具体可识别的执行意图", {
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
  slide.addText("普通任务描述", {
    x: 0.6, y: headerY, w: 4.0, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("转换为执行意图后", {
    x: 4.7, y: headerY, w: 4.8, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 数据
  const rows = [
    { orig: "定期与干系人对齐", new: "每次双周例会结束后，我会向主要干系人发送一条不超过 100 字的进展说明" },
    { orig: "及时处理风险事项", new: "当某个 KPI 连续两周低于阈值时，我会在发现的当天安排一次 15 分钟原因分析" }
  ];

  rows.forEach((r, i) => {
    const y = 2.0 + i * 0.95;
    if (i % 2 === 0) {
      slide.addShape("rect", {
        x: 0.5, y: y, w: 9, h: 0.95,
        fill: { color: theme.paper }, line: { color: theme.paper }
      });
    }
    slide.addText(r.orig, {
      x: 0.6, y: y, w: 4.0, h: 0.95,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkMute, valign: "middle"
    });
    slide.addText(r.new, {
      x: 4.7, y: y, w: 4.8, h: 0.95,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
  });

  // 箭头分隔
  slide.addShape("rect", {
    x: 4.4, y: 2.0, w: 0.04, h: 1.9,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 续提示
  slide.addText("续表见下页 →", {
    x: 0.5, y: 4.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "right"
  });

  // 关键观察
  slide.addShape("rect", {
    x: 0.5, y: 4.3, w: 9, h: 0.55,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("观察：转换后都包含\"触发条件 + 具体动作 + 时间边界\"三要素", {
    x: 0.5, y: 4.3, w: 9, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
