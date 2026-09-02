const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("催化方案要素详解", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Six detailed explanation cards (2 rows x 3 columns)
  const details = [
    {
      title: "问题定义",
      subtitle: "SMART原则",
      points: ["S - Specific 具体的", "M - Measurable 可衡量的", "A - Achievable 可实现的", "R - Relevant 相关的", "T - Time-bound 有时限的"]
    },
    {
      title: "目标设定",
      subtitle: "具体可衡量",
      points: ["量化目标指标", "设定验收标准", "明确责任归属", "制定检查节点"]
    },
    {
      title: "利益相关方",
      subtitle: "影响力-关注度矩阵",
      points: ["高影响力+高关注度: 重点管理", "高影响力+低关注度: 保持满意", "低影响力+高关注度: 随时告知", "低影响力+低关注度: 监督"]
    },
    {
      title: "工具选择",
      subtitle: "根据问题类型选择",
      points: ["简单问题: 头脑风暴", "复合问题: 团队共创", "复杂问题: 世界咖啡", "混乱问题: 深度汇谈"]
    },
    {
      title: "时间规划",
      subtitle: "建议时间分配",
      points: ["开场介绍: 10%", "静默书写: 15%", "集体讨论: 50%", "总结共识: 25%"]
    },
    {
      title: "应急预案",
      subtitle: "常见状况及应对",
      points: ["沉默型: 点名开放式提问", "主导型: 温和打断并邀请他人", "冲突型: 暂停并重申规则", "偏离型: 记录并拉回主题"]
    }
  ];

  const cardW = 3.0;
  const cardH = 1.95;
  const startX = 0.45;
  const startY = 1.05;
  const gapX = 0.2;
  const gapY = 0.15;

  details.forEach((d, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.light }
    });

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.08, h: cardH,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(d.title, {
      x: x + 0.18, y: y + 0.1, w: 1.8, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Subtitle
    slide.addText(d.subtitle, {
      x: x + 0.18, y: y + 0.38, w: 2.7, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.18, y: y + 0.62, w: cardW - 0.36, h: 0.015,
      fill: { color: theme.secondary, transparency: 60 }
    });

    // Points
    d.points.forEach((p, j) => {
      slide.addShape(pres.ShapeType.ellipse, {
        x: x + 0.22, y: y + 0.72 + j * 0.26, w: 0.08, h: 0.08,
        fill: { color: theme.accent }
      });
      slide.addText(p, {
        x: x + 0.38, y: y + 0.68 + j * 0.26, w: 2.5, h: 0.25,
        fontSize: 8, fontFace: "Microsoft YaHei",
        color: theme.primary,
        valign: "middle"
      });
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.5, w: 10, h: 0.25,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide };
