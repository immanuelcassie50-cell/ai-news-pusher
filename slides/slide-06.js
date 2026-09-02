// slide-06.js - Interaction 1: Attention Self-Assessment
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '互动环节一：注意力自我检测'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("互动环节一：注意力自我检测", {
    x: 0.5, y: 0.2, w: 9, h: 0.45,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Instruction text
  slide.addText("请根据自己的实际情况打分（1-5分，5分最高）", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // Assessment questions - 2x2 grid
  const questions = [
    { num: "1", text: "工作时，你平均多久查看一次手机/消息？" },
    { num: "2", text: "同时处理多项任务时，你的效率下降程度？" },
    { num: "3", text: "长时间会议后，你还能保持专注吗？" },
    { num: "4", text: "面对多个项目时，你能清晰区分优先级吗？" }
  ];

  const cardW = 4.4;
  const cardH = 0.9;
  const startX = 0.5;
  const startY = 1.45;
  const gapX = 0.2;
  const gapY = 0.15;

  questions.forEach((q, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape("roundRect", {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number circle
    slide.addShape("ellipse", {
      x: x + 0.15, y: y + 0.25, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(q.num, {
      x: x + 0.15, y: y + 0.25, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question text
    slide.addText(q.text, {
      x: x + 0.65, y: y + 0.1, w: cardW - 0.85, h: 0.7,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Scoring guide section
  const guideY = 3.55;

  // Section title
  slide.addText("评分参考", {
    x: 0.5, y: guideY, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Scoring tiers - horizontal layout
  const tiers = [
    { range: "18-20分", label: "注意力管理高手", color: theme.primary },
    { range: "13-17分", label: "需要提升", color: theme.secondary },
    { range: "8-12分", label: "亟需改善", color: theme.accent },
    { range: "8分以下", label: "系统学习刻不容缓", color: "e76f51" }
  ];

  const tierStartX = 0.5;
  const tierY = guideY + 0.45;
  const tierW = 2.2;
  const tierH = 0.95;
  const tierGap = 0.15;

  tiers.forEach((tier, idx) => {
    const x = tierStartX + idx * (tierW + tierGap);

    // Tier card
    slide.addShape("roundRect", {
      x: x, y: tierY, w: tierW, h: tierH,
      fill: { color: tier.color, transparency: 85 },
      rectRadius: 0.06,
      line: { color: tier.color, width: 1.5 }
    });

    // Range number
    slide.addText(tier.range, {
      x: x, y: tierY + 0.1, w: tierW, h: 0.35,
      fontSize: 16, fontFace: "Arial",
      color: tier.color, bold: true,
      align: "center", valign: "middle"
    });

    // Label
    slide.addText(tier.label, {
      x: x, y: tierY + 0.45, w: tierW, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: tier.color, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("6", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "4a4e69",
    accent: "9a8c98",
    light: "c9ada7",
    bg: "f2e9e4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
