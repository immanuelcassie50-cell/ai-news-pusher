// slide-41.js - 重审苏敏 (1) 一对一辅导
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "diagnosis", index: 41, title: "重审苏敏 (1)：一对一辅导" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("DIAGNOSIS 1/4", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 任务标题
  slide.addText("重审苏敏的任务 ①", {
    x: 0.5, y: 0.6, w: 5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("每周一次一对一辅导", {
    x: 0.5, y: 1.1, w: 5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // 右侧风险等级
  slide.addShape("rect", {
    x: 7.5, y: 0.5, w: 2.0, h: 1.0,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("综合风险", {
    x: 7.5, y: 0.6, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });
  slide.addText("高", {
    x: 7.5, y: 0.85, w: 2.0, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 三条标准评分卡片
  const standards = [
    {
      name: "行动清晰度",
      score: "中",
      desc: "谈什么？用什么方式？多长时间？未明确",
      color: theme.goldAccent
    },
    {
      name: "启动摩擦力",
      score: "中",
      desc: "需协调双方时间，想好谈什么，找空间",
      color: theme.goldAccent
    },
    {
      name: "日常稳健性",
      score: "低",
      desc: "项目忙时最容易被\"向后推\"",
      color: theme.primary
    }
  ];

  const cardW = 2.95;
  const startX = 0.5;
  const gap = 0.15;
  const cardY = 1.85;

  standards.forEach((s, i) => {
    const x = startX + i * (cardW + gap);

    // 卡片
    slide.addShape("rect", {
      x, y: cardY, w: cardW, h: 2.0,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 标题
    slide.addText(s.name, {
      x: x + 0.2, y: cardY + 0.15, w: cardW - 0.4, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 评分条
    slide.addShape("rect", {
      x: x + 0.2, y: cardY + 0.6, w: cardW - 0.4, h: 0.4,
      fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
    });
    slide.addShape("rect", {
      x: x + 0.2, y: cardY + 0.6, w: (cardW - 0.4) * (s.score === "高" || s.score === "低" ? (s.color === theme.primary ? 0.85 : 0.6) : 0.4), h: 0.4,
      fill: { color: s.color }, line: { color: s.color }
    });
    slide.addText(s.score, {
      x: x + 0.2, y: cardY + 0.6, w: cardW - 0.4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });

    // 描述
    slide.addText(s.desc, {
      x: x + 0.2, y: cardY + 1.15, w: cardW - 0.4, h: 0.75,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 综合判断
  slide.addShape("rect", {
    x: 0.5, y: 4.1, w: 9, h: 1.2,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.1, w: 0.12, h: 1.2,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("综合判断", {
    x: 0.8, y: 4.2, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("高风险", {
    x: 0.8, y: 4.5, w: 2, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("最关键的失败点：日常稳健性低。", {
    x: 3.0, y: 4.2, w: 6.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("\"等忙完这阵再约\"——项目永远忙，这事永远推。", {
    x: 3.0, y: 4.55, w: 6.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("改进方向：固定时间槽（每周三上午）+ 议程模板（每月重点）。", {
    x: 3.0, y: 4.9, w: 6.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
