// slide-44.js - 重审苏敏 (4) 季度发展计划
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "diagnosis", index: 44, title: "重审苏敏 (4)：季度发展计划" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("DIAGNOSIS 4/4", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 任务标题
  slide.addText("重审苏敏的任务 ④", {
    x: 0.5, y: 0.6, w: 5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("季度发展计划更新", {
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
      desc: "\"更新\"具体指什么？更新哪些内容？",
      ratio: 0.3,
      color: theme.primary
    },
    {
      name: "启动摩擦力",
      score: "中高",
      desc: "需与每人单独进行深度对话",
      ratio: 0.65,
      color: theme.goldAccent
    },
    {
      name: "日常稳健性",
      score: "中",
      desc: "频率低好记，但每次花费时间长",
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

    slide.addShape("rect", {
      x, y: cardY, w: cardW, h: 2.0,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    slide.addText(s.name, {
      x: x + 0.2, y: cardY + 0.15, w: cardW - 0.4, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

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

  slide.addText("频率低是优势，但\"更新\"的模糊性让启动困难。", {
    x: 3.0, y: 4.2, w: 6.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("季度开始时容易推，季度末又赶不上。", {
    x: 3.0, y: 4.55, w: 6.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("改进方向：固定\"每季度最后一周\"+ 上季度复盘文档作为输入。", {
    x: 3.0, y: 4.9, w: 6.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
