const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("突发状况应对", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Four common situations
  const situations = [
    {
      icon: "🎤",
      situation: "有人主导讨论",
      problem: "某人频繁发言，控制全场",
      solution: "温和打断，感谢贡献，邀请其他人分享"
    },
    {
      icon: "🔄",
      situation: "偏离主题",
      problem: "讨论方向逐渐跑偏",
      solution: "暂停，确认关键点，将话题拉回主线"
    },
    {
      icon: "🤐",
      situation: "沉默不语",
      problem: "参与者不发言，气氛冷场",
      solution: "点名提问开放式问题，或分成小组讨论"
    },
    {
      icon: "⚡",
      situation: "激烈争吵",
      problem: "情绪激动，观点对立升级",
      solution: "立即暂停，重申规则，分别沟通后再合议"
    }
  ];

  // 2x2 grid layout
  situations.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.75;
    const y = 1.15 + row * 2.1;

    // Main card
    slide.addShape("rect", {
      x: x, y: y, w: 4.5, h: 1.95,
      fill: { color: theme.light }
    });

    // Icon badge
    slide.addShape("ellipse", {
      x: x + 0.25, y: y + 0.25, w: 0.8, h: 0.8,
      fill: { color: theme.accent }
    });
    slide.addText(s.icon, {
      x: x + 0.25, y: y + 0.25, w: 0.8, h: 0.8,
      fontSize: 26,
      align: "center", valign: "middle"
    });

    // Situation title
    slide.addText(s.situation, {
      x: x + 1.2, y: y + 0.25, w: 3.1, h: 0.45,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Problem description
    slide.addText("问题：" + s.problem, {
      x: x + 1.2, y: y + 0.7, w: 3.1, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.25, y: y + 1.15, w: 4.0, h: 0.03,
      fill: { color: theme.secondary, transparency: 60 }
    });

    // Solution
    slide.addShape("rect", {
      x: x + 0.25, y: y + 1.25, w: 4.0, h: 0.55,
      fill: { color: theme.accent, transparency: 90 }
    });

    slide.addText("✓ " + s.solution, {
      x: x + 0.35, y: y + 1.25, w: 3.8, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Bottom reminder
  slide.addShape("rect", {
    x: 0, y: 5.25, w: 10, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("保持冷静，正确引导，让团队回到正轨", {
    x: 0.5, y: 5.25, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
