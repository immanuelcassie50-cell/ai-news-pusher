// slide-114.js - 核心原则：铺平道路 vs 强壮腿
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 114, title: "核心原则" };

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
  slide.addText("核心原则：铺平道路 vs 强壮腿", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("当道路足够平坦，普通的腿就够用了", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 两个比喻
  // 左：强壮腿
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.3, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.3, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("✗ 强壮腿", {
    x: 0.7, y: 1.55, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 图示
  slide.addShape("rect", {
    x: 0.7, y: 2.2, w: 4, h: 0.3,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });
  // 山丘
  for (let i = 0; i < 4; i++) {
    slide.addShape("rtTriangle", {
      x: 0.8 + i * 1.0, y: 1.95, w: 0.4, h: 0.3,
      fill: { color: theme.inkMute }, line: { color: theme.inkMute }
    });
  }
  // 人
  slide.addText("🚶", {
    x: 4.0, y: 2.0, w: 0.4, h: 0.3,
    fontSize: 14, fontFace: "Arial"
  });

  slide.addText("大多数人想到的解决方式：", {
    x: 0.7, y: 2.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("\"怎么让人更努力 / 更有意识？\"", {
    x: 0.7, y: 2.95, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  slide.addText("这种方向的盲点：", {
    x: 0.7, y: 3.45, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("人的意志力是有限的资源 · 消耗到一定程度，路线本身就难走", {
    x: 0.7, y: 3.75, w: 4, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 高负荷、低可持续", {
    x: 0.7, y: 4.4, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 右：铺平道路
  slide.addShape("rect", {
    x: 5.1, y: 1.5, w: 4.4, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.5, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓ 铺平道路", {
    x: 5.3, y: 1.55, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 图示
  slide.addShape("rect", {
    x: 5.3, y: 2.2, w: 4, h: 0.3,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });
  // 人
  slide.addText("🚶", {
    x: 8.7, y: 2.0, w: 0.4, h: 0.3,
    fontSize: 14, fontFace: "Arial"
  });

  slide.addText("降低摩擦的方向：", {
    x: 5.3, y: 2.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("\"怎么让这件事本身更容易发生？\"", {
    x: 5.3, y: 2.95, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true
  });

  slide.addText("这种方向的力量：", {
    x: 5.3, y: 3.45, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("道路平坦 → 普通状态下也能走通 → 不依赖意志力", {
    x: 5.3, y: 3.75, w: 4, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 低负荷、高可持续", {
    x: 5.3, y: 4.4, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 底部
  slide.addText("逻辑翻转：从\"提升执行者\"到\"改造执行路径\"", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
