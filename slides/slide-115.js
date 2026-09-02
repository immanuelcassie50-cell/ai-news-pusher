// slide-115.js - Case Discussion 2: Partner Betrayal
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 115,
  title: '案例讨论：合作伙伴背叛'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例讨论：合作伙伴背叛", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Scenario box
  slide.addShape("roundRect", {
    x: 0.5, y: 1.1, w: 9, h: 1.2,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });

  slide.addText("场景", {
    x: 0.7, y: 1.15, w: 1.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("你发现合作伙伴一直在秘密与竞争对手合作，背着你获取额外利益。", {
    x: 0.7, y: 1.45, w: 8.6, h: 0.75,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "top"
  });

  // Two discussion questions
  slide.addText("讨论问题", {
    x: 0.5, y: 2.45, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  const questions = [
    {
      q: "应该有什么机制来预防这种情况发生？",
      sub: "合同条款？监督机制？惩罚条款？"
    },
    {
      q: "现在发现了背叛，你的应对策略是什么？",
      sub: "直接摊牌？隐忍观察？反制报复？"
    }
  ];

  questions.forEach((q, idx) => {
    const y = 2.9 + idx * 1.1;

    // Question card
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 9, h: 0.95,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.08
    });

    // Left accent
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.08, h: 0.95,
      fill: { color: idx === 0 ? theme.accent : theme.primary }
    });

    // Question
    slide.addText(q.q, {
      x: 0.75, y: y + 0.1, w: 8.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Sub
    slide.addText(q.sub, {
      x: 0.75, y: y + 0.5, w: 8.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape("roundRect", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("背叛的代价 = 短期收益 - 长期声誉损失 - 法律后果", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("115", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-115-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
