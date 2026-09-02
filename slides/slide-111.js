// slide-111.js - Self Assessment
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 111,
  title: '自我评估：你在哪种博弈中？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("自我评估：你在哪种博弈中？", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Intro
  slide.addText("反思问题", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Three reflection questions
  const questions = [
    {
      q: "你目前处于哪些博弈中？",
      sub: "工作、家庭、商业、社会关系中\n有哪些具体的囚徒困境？"
    },
    {
      q: "是单次还是重复博弈？",
      sub: "这个关系会持续多久？\n下次还会遇到对方吗？"
    },
    {
      q: "你的声誉值多少？",
      sub: "在这个圈子里，背叛的长期成本有多大？\n声誉对你有多重要？"
    }
  ];

  questions.forEach((q, idx) => {
    const y = 1.55 + idx * 1.2;

    // Question card
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.08
    });

    // Left accent
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.08, h: 1.0,
      fill: { color: idx === 0 ? theme.primary : idx === 1 ? theme.accent : theme.secondary }
    });

    // Question number
    slide.addText((idx + 1).toString(), {
      x: 0.75, y: y + 0.1, w: 0.5, h: 0.35,
      fontSize: 18, fontFace: "Arial",
      color: idx === 0 ? theme.primary : idx === 1 ? theme.accent : theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Question
    slide.addText(q.q, {
      x: 1.3, y: y + 0.08, w: 7.8, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Sub question
    slide.addText(q.sub, {
      x: 1.3, y: y + 0.5, w: 7.8, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Bottom note
  slide.addShape("roundRect", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("认知是改变的第一步 — 先看清游戏，才能改变游戏", {
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
  slide.addText("111", {
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
  pres.writeFile({ fileName: "slide-111-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
