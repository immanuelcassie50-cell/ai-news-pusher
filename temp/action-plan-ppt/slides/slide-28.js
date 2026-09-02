// slide-28.js - 简单区分对比
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "compare", index: 28, title: "简单区分" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("从意图到行为", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("一个简单的区分", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧卡片：意图描述
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 4.4, h: 3.0,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 4.4, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("意图描述", {
    x: 0.7, y: 1.78, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("INTENT", {
    x: 3.5, y: 1.78, w: 1.3, h: 0.35,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 3, align: "right"
  });

  slide.addText("\"定期与核心利益相关方保持沟通，", {
    x: 0.7, y: 2.4, w: 4.0, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("确保他们对项目进展的了解。\"", {
    x: 0.7, y: 2.75, w: 4.0, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addText("→ 看起来没问题，但不会发生", {
    x: 0.7, y: 3.6, w: 4.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  slide.addShape("rect", {
    x: 0.7, y: 4.1, w: 4.0, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("状态好时想起 · 忙时被跳过", {
    x: 0.7, y: 4.18, w: 4.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // 中间 VS 分隔
  slide.addShape("ellipse", {
    x: 4.6, y: 2.95, w: 0.8, h: 0.8,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("VS", {
    x: 4.6, y: 3.0, w: 0.8, h: 0.7,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 右侧卡片：行为设计
  slide.addShape("rect", {
    x: 5.1, y: 1.7, w: 4.4, h: 3.0,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.7, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("行为设计", {
    x: 5.3, y: 1.78, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("BEHAVIOR", {
    x: 7.8, y: 1.78, w: 1.6, h: 0.35,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 3, align: "right"
  });

  slide.addText("\"每周三下午 2 点，", {
    x: 5.3, y: 2.4, w: 4.0, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("向项目核心干系人发进展摘要\"", {
    x: 5.3, y: 2.75, w: 4.0, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("→ 看到即可执行，无需思考", {
    x: 5.3, y: 3.6, w: 4.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  slide.addShape("rect", {
    x: 5.3, y: 4.1, w: 4.0, h: 0.5,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });
  slide.addText("时间 · 对象 · 动作 · 完毕标准 全明确", {
    x: 5.3, y: 4.18, w: 4.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, align: "center", bold: true
  });

  // 底部金句
  slide.addText("\"定期\"是意图，\"每周三下午2点发摘要\"，才是任务。", {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
