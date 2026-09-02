const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("行为经济学的核心发现", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("50", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Four key findings in 2x2 grid
  const findings = [
    {
      title: "损失厌恶",
      desc: "人们对损失的敏感程度是收益的2-2.5倍",
      implication: "「前景理论」：价值函数在损失区间更陡峭"
    },
    {
      title: "锚定效应",
      desc: "初始信息对后续判断产生过度影响",
      implication: "谈判中的起始价决定最终成交区间"
    },
    {
      title: "现状偏差",
      desc: "人们倾向于维持现有状态",
      implication: "默认选项设计显著影响选择率（养老金、器官捐献）"
    },
    {
      title: "社会偏好",
      desc: "人们关注公平、愿意牺牲个人利益惩罚不公平行为",
      implication: "最后通牒博弈中，不公平报价常被拒绝"
    }
  ];

  findings.forEach((finding, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.75;
    const y = 1.1 + row * 2.05;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 4.5, h: 1.85,
      fill: { color: "FFFFFF" }, rectRadius: 0.1,
      line: { color: theme.light, width: 1 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.15, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: x + 0.15, y: y + 0.15, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Georgia", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });

    // Title
    slide.addText(finding.title, {
      x: x + 0.65, y: y + 0.15, w: 3.7, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary,
      bold: true
    });

    // Description
    slide.addText(finding.desc, {
      x: x + 0.15, y: y + 0.65, w: 4.2, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary
    });

    // Implication
    slide.addText(finding.implication, {
      x: x + 0.15, y: y + 1.15, w: 4.2, h: 0.6,
      fontSize: 11, fontFace: "Calibri", color: theme.light,
      italic: true
    });
  });

  return slide;
}

module.exports = { createSlide };
