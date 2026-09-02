// slide-122.js - 苏敏摩擦分析：案例
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case", index: 122, title: "苏敏摩擦分析" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具三 · 降低摩擦", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("案例：苏敏的\"每月团队复盘\"为什么难以执行", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("摩擦清单 + 改进方向", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧：摩擦清单
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.5, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.5, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("摩擦清单（为什么做不下去）", {
    x: 0.7, y: 1.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  const frictions = [
    { type: "协调摩擦", desc: "需要协调 6 个人的日历", high: true },
    { type: "认知摩擦", desc: "没有固定格式，每次重新设计", high: true },
    { type: "物理摩擦", desc: "需要提前收集议题", high: false }
  ];

  frictions.forEach((f, i) => {
    const y = 2.05 + i * 0.85;
    // 类型徽章
    slide.addShape("rect", {
      x: 0.7, y: y, w: 1.2, h: 0.3,
      fill: { color: f.high ? theme.redBright : theme.inkMute }, line: { color: f.high ? theme.redBright : theme.inkMute }
    });
    slide.addText(f.type, {
      x: 0.7, y: y, w: 1.2, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // 描述
    slide.addText(f.desc, {
      x: 2.0, y: y, w: 2.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink, valign: "middle"
    });
    // 副说明
    slide.addText(f.high ? "极高" : "中", {
      x: 0.7, y: y + 0.35, w: 4.1, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: f.high ? theme.redBright : theme.inkMute, italic: true
    });
  });

  // 右侧：改进方向
  slide.addShape("rect", {
    x: 5.2, y: 1.5, w: 4.3, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.2, y: 1.5, w: 4.3, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("改进方向（怎么铺平道路）", {
    x: 5.4, y: 1.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  const solutions = [
    { num: "1", desc: "把复盘日期预先固定在每月第二个周五 → 消除协调摩擦" },
    { num: "2", desc: "制作一份固定的复盘模板 → 消除认知摩擦" },
    { num: "3", desc: "每人提前填 1-2 个复盘话题 → 降低启动时认知负荷" }
  ];

  solutions.forEach((s, i) => {
    const y = 2.05 + i * 0.85;
    // 序号
    slide.addShape("ellipse", {
      x: 5.4, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(s.num, {
      x: 5.4, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // 描述
    slide.addText(s.desc, {
      x: 5.95, y: y - 0.05, w: 3.4, h: 0.85,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
  });

  // 底部
  slide.addText("一次完整的摩擦分析：识别 → 归类 → 改进", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
