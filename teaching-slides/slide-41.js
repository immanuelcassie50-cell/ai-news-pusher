const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("突发状况应对案例", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Three case cards - horizontal layout
  const cases = [
    {
      num: "01",
      situation: "有人主导发言",
      description: "某人一直主导发言，其他人被动附和",
      strategy: [
        "温和打断，肯定贡献",
        "明确感谢参与者的贡献",
        "主动邀请沉默者表达",
        "使用\"还有谁想补充\""
      ]
    },
    {
      num: "02",
      situation: "讨论偏离主题",
      description: "聊到了其他部门的问题，偏离主线",
      strategy: [
        "暂停，确认当前进度",
        "记录偏离话题以备后用",
        "温和拉回\"我们回到原题\"",
        "建议另开专题讨论"
      ]
    },
    {
      num: "03",
      situation: "质疑催化师中立性",
      description: "有人情绪激动，质疑催化师立场",
      strategy: [
        "保持冷静，不防御",
        "认可情绪的合理性",
        "重申催化师角色定位",
        "提议用团队规则检视"
      ]
    }
  ];

  cases.forEach((c, i) => {
    const x = 0.4 + i * 3.15;

    // Card background
    slide.addShape("rect", {
      x: x, y: 1.1, w: 3.0, h: 4.15,
      fill: { color: theme.light }
    });

    // Number badge
    slide.addShape("rect", {
      x: x, y: 1.1, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(c.num, {
      x: x, y: 1.1, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Situation title
    slide.addText(c.situation, {
      x: x + 0.15, y: 1.8, w: 2.7, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(c.description, {
      x: x + 0.15, y: 2.25, w: 2.7, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.15, y: 2.9, w: 2.7, h: 0.02,
      fill: { color: theme.accent }
    });

    // Strategy label
    slide.addText("应对策略", {
      x: x + 0.15, y: 3.0, w: 2.7, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    // Strategy items
    c.strategy.forEach((s, j) => {
      slide.addShape("ellipse", {
        x: x + 0.2, y: 3.35 + j * 0.45, w: 0.12, h: 0.12,
        fill: { color: theme.accent }
      });
      slide.addText(s, {
        x: x + 0.4, y: 3.28 + j * 0.45, w: 2.45, h: 0.4,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.primary,
        valign: "middle"
      });
    });
  });

  // Bottom bar
  slide.addShape("rect", {
    x: 0, y: 5.35, w: 10, h: 0.4,
    fill: { color: theme.primary }
  });

  slide.addText("快速识别 + 冷静应对 + 适时调整", {
    x: 0.5, y: 5.35, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
