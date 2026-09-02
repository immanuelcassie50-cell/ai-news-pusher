// slide-52.js - 坏日子测试
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "quote-test", index: 52, title: "坏日子测试" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("THE BAD DAY TEST", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("\"坏日子测试\"", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("一个可以快速应用的检验方式", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 场景描述卡片
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 1.85,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 0.12, h: 1.85,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("想象一个这样的时刻", {
    x: 0.8, y: 1.95, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("一个普通的星期三下午，开了一上午会，处理了几件紧急事务，", {
    x: 0.8, y: 2.4, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("还有两封邮件没回，现在看到日历提示这件事应该做了。", {
    x: 0.8, y: 2.75, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("→ 那个时候，这件事会发生吗？", {
    x: 0.8, y: 3.2, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 双选项
  const options = [
    {
      tag: "会",
      label: "会发生",
      desc: "任务设计是稳健的",
      bg: theme.primary,
      textColor: "FFFFFF"
    },
    {
      tag: "不会",
      label: "不会发生",
      desc: "不是人的问题，是任务设计需要调整",
      bg: theme.paper,
      textColor: theme.redDeep
    }
  ];

  const cardW = 4.4;
  const startX = 0.5;
  const gap = 0.2;
  const optY = 3.85;

  options.forEach((o, i) => {
    const x = startX + i * (cardW + gap);

    slide.addShape("rect", {
      x, y: optY, w: cardW, h: 1.25,
      fill: { color: o.bg }, line: { color: o.bg === theme.paper ? theme.primary : o.bg, width: 2 }
    });

    slide.addShape("ellipse", {
      x: x + 0.3, y: optY + 0.3, w: 0.65, h: 0.65,
      fill: { color: o.bg === theme.paper ? theme.primary : "FFFFFF" }, line: { color: o.bg === theme.paper ? theme.primary : "FFFFFF" }
    });
    slide.addText(o.tag, {
      x: x + 0.3, y: optY + 0.3, w: 0.65, h: 0.65,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: o.bg === theme.paper ? "FFFFFF" : theme.primary, bold: true, align: "center", valign: "middle"
    });

    slide.addText(o.label, {
      x: x + 1.1, y: optY + 0.2, w: cardW - 1.3, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: o.textColor, bold: true
    });

    slide.addText(o.desc, {
      x: x + 1.1, y: optY + 0.65, w: cardW - 1.3, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: o.textColor
    });
  });

  // 底部金句
  slide.addText("未来那个累了的自己，不是懒惰——只是日常状态的正常人。", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
