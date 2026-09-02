// slide-43.js - 重审苏敏 (3) 跨部门交流
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "diagnosis", index: 43, title: "重审苏敏 (3)：跨部门交流" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("DIAGNOSIS 3/4", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 任务标题
  slide.addText("重审苏敏的任务 ③", {
    x: 0.5, y: 0.6, w: 5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("每双周跨部门交流", {
    x: 0.5, y: 1.1, w: 5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // 右侧风险等级
  slide.addShape("rect", {
    x: 7.5, y: 0.5, w: 2.0, h: 1.0,
    fill: { color: theme.redDeep }, line: { color: theme.redDeep }
  });
  slide.addText("综合风险", {
    x: 7.5, y: 0.6, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });
  slide.addText("极高", {
    x: 7.5, y: 0.85, w: 2.0, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 三条标准评分卡片
  const standards = [
    {
      name: "行动清晰度",
      score: "低",
      desc: "谁来分享？分享什么？什么格式？",
      ratio: 0.3,
      color: theme.primary
    },
    {
      name: "启动摩擦力",
      score: "极高",
      desc: "跨部门协调，涉及人员最多的任务",
      ratio: 0.95,
      color: theme.redDeep
    },
    {
      name: "日常稳健性",
      score: "极低",
      desc: "最先被忙碌挤掉的任务",
      ratio: 0.95,
      color: theme.redDeep
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
    fill: { color: theme.redDeep }, line: { color: theme.redDeep }
  });

  slide.addText("综合判断", {
    x: 0.8, y: 4.2, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true
  });
  slide.addText("极高风险", {
    x: 0.8, y: 4.5, w: 2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true
  });

  slide.addText("三条标准全亮红灯，典型\"会自然消亡\"任务。", {
    x: 3.0, y: 4.2, w: 6.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("苏敏的6个月曲线里，这条任务第一个断掉。", {
    x: 3.0, y: 4.55, w: 6.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("改进方向：要么取消，要么大幅降级为\"月报+季度面对面\"。", {
    x: 3.0, y: 4.9, w: 6.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
