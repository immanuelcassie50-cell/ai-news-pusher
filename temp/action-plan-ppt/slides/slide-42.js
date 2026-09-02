// slide-42.js - 重审苏敏 (2) 月度复盘
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "diagnosis", index: 42, title: "重审苏敏 (2)：月度复盘" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("DIAGNOSIS 2/4", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 任务标题
  slide.addText("重审苏敏的任务 ②", {
    x: 0.5, y: 0.6, w: 5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("每月团队复盘", {
    x: 0.5, y: 1.1, w: 5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // 右侧风险等级
  slide.addShape("rect", {
    x: 7.5, y: 0.5, w: 2.0, h: 1.0,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });
  slide.addText("综合风险", {
    x: 7.5, y: 0.6, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });
  slide.addText("中", {
    x: 7.5, y: 0.85, w: 2.0, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 三条标准评分卡片
  const standards = [
    {
      name: "行动清晰度",
      score: "低",
      desc: "复盘什么？谁组织？用什么格式？未定义",
      ratio: 0.3,
      color: theme.primary
    },
    {
      name: "启动摩擦力",
      score: "高",
      desc: "协调多人日历、提前准备议题、安排会议室",
      ratio: 0.85,
      color: theme.primary
    },
    {
      name: "日常稳健性",
      score: "中",
      desc: "频率低相对好坚持，但每次执行成本高",
      ratio: 0.5,
      color: theme.goldAccent
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
      x: x + 0.2, y: cardY + 0.6, w: (cardW - 0.4) * s.ratio, h: 0.4,
      fill: { color: s.color }, line: { color: s.color }
    });
    slide.addText(s.score, {
      x: x + 0.2, y: cardY + 0.6, w: cardW - 0.4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });

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
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });

  slide.addText("综合判断", {
    x: 0.8, y: 4.2, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.goldAccent, bold: true
  });
  slide.addText("中等风险", {
    x: 0.8, y: 4.5, w: 2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.goldAccent, bold: true
  });

  slide.addText("中等风险，但执行质量不稳定。", {
    x: 3.0, y: 4.2, w: 6.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("开了，但每次\"质量\"差异大——有时聊得深入，有时草草收场。", {
    x: 3.0, y: 4.55, w: 6.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("改进方向：固定议程模板 + 5分钟文档总结强制产出。", {
    x: 3.0, y: 4.9, w: 6.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
