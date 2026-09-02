// slide-99.js - 例子对比 (1)：5行
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "table", index: 99, title: "例子对比 (1)" };

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
  slide.addText("原始任务 vs 最小启动动作", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("把\"开始那一步\"具象化", {
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
    { left: "每月完成团队技能评估报告", right: "打开评估模板文件，填写日期和参与人名单" },
    { left: "每双周与关键干系人对齐进展", right: "发出会议邀请，填好标题和时间" },
    { left: "定期更新风险跟踪清单", right: "打开风险清单，在\"上次更新\"栏填入今天日期" }
  ];

  rows.forEach((r, i) => {
    const y = 2.0 + i * 0.6;
    if (i % 2 === 0) {
      slide.addShape("rect", {
        x: 0.5, y: y, w: 9, h: 0.6,
        fill: { color: theme.paper }, line: { color: theme.paper }
      });
    }
    slide.addText(r.left, {
      x: 0.6, y: y, w: 4.3, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
    slide.addText(r.right, {
      x: 5.0, y: y, w: 4.5, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
  });

  // 箭头分隔
  slide.addShape("rect", {
    x: 4.7, y: 2.0, w: 0.04, h: 1.8,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 3.95, w: 9, h: 0.85,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("注意", {
    x: 0.7, y: 4.05, w: 1, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("最小启动动作不是整件事，它只是那个几乎没有阻力的第一步。", {
    x: 0.7, y: 4.35, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("一旦你做了这一步，继续下去的概率会大幅上升。", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true
  });

  // 续提示
  slide.addText("续表见下页 →", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "right"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
