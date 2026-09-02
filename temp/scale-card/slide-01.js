// slide-01.js - 阻力五级量表教具
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 1,
  title: '阻力信号量表'
};

function createSlide(pres, theme) {
  // A4 landscape style: 13.33" x 7.5" (wide format)
  pres.layout = 'LAYOUT_WIDE';

  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // --- Header bar ---
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.33, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("阻力信号量表", {
    x: 0.5, y: 0.15, w: 12, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // --- Level data ---
  const levels = [
    {
      level: 1,
      name: "完全支持",
      emoji: "热情洋溢",
      bgColor: "4CAF50",
      behaviors: ["主动宣传项目价值", "积极配合各项工作", "主动投入资源人力", "愿意帮助克服困难"],
      strategies: ["充分发挥其影响力", "邀请参与关键决策", "给予适当认可"]
    },
    {
      level: 2,
      name: "策略性观望",
      emoji: "观望等待",
      bgColor: "FFC107",
      behaviors: ["不明确表态支持或反对", "不主动投入资源", "观望项目进展和风向", "收集信息做判断"],
      strategies: ["主动沟通了解顾虑", "提供更多信息和数据", "邀请参与部分工作"]
    },
    {
      level: 3,
      name: "小声抱怨",
      emoji: "私下议论",
      bgColor: "FF9800",
      behaviors: ["私下表达不满和质疑", "散布负面消息和谣言", "行动上拖延、敷衍", "不主动配合需求"],
      strategies: ["私下一对一沟通", "倾听不满原因", "解决合理诉求", "明确表达期望"]
    },
    {
      level: 4,
      name: "公开反对",
      emoji: "强烈抵制",
      bgColor: "F44336",
      behaviors: ["公开质疑项目必要性", "拒绝参与相关会议", "向上级告状或投诉", "散布项目负面信息"],
      strategies: ["高层介入沟通", "明确风险和责任", "寻求上级支持", "考虑更换对接人"]
    },
    {
      level: 5,
      name: "暗中破坏",
      emoji: "暗中作梗",
      bgColor: "B71C1C",
      behaviors: ["暗中操作项目走向", "故意制造障碍困难", "隐瞒关键信息", "破坏进度和成果"],
      strategies: ["立即上报高层", "收集证据记录", "评估替换可行性", "做最坏打算"]
    }
  ];

  // Layout constants
  const startY = 1.1;
  const bandHeight = 1.15;
  const bandGap = 0.08;
  const leftColW = 0.7;    // Level number column
  const midColW = 3.8;     // Behaviors column
  const rightColW = 4.2;   // Strategies column
  const colorBarW = 0.12;

  // Column positions
  const leftColX = 0.4;
  const midColX = leftColX + leftColW + 0.2;
  const rightColX = midColX + midColW + 0.3;

  // --- Draw each level band ---
  levels.forEach((lvl, idx) => {
    const bandY = startY + idx * (bandHeight + bandGap);

    // Background band
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.3, y: bandY, w: 12.73, h: bandHeight,
      fill: { color: "F5F5F5" },
      line: { color: "E0E0E0", width: 0.5 }
    });

    // Left color indicator bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.3, y: bandY, w: colorBarW, h: bandHeight,
      fill: { color: lvl.bgColor }
    });

    // Level number circle
    slide.addShape(pres.shapes.OVAL, {
      x: leftColX, y: bandY + 0.25, w: 0.65, h: 0.65,
      fill: { color: lvl.bgColor }
    });
    slide.addText(String(lvl.level), {
      x: leftColX, y: bandY + 0.25, w: 0.65, h: 0.65,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Level name and emoji
    slide.addText([
      { text: lvl.name, options: { bold: true, fontSize: 16, breakLine: true } },
      { text: lvl.emoji, options: { fontSize: 11 } }
    ], {
      x: leftColX + 0.75, y: bandY + 0.2, w: 1.4, h: 0.75,
      fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });

    // Divider line between left and mid
    slide.addShape(pres.shapes.LINE, {
      x: midColX - 0.1, y: bandY + 0.15, w: 0, h: bandHeight - 0.3,
      line: { color: "D0D0D0", width: 0.5 }
    });

    // Behaviors (typical signs)
    slide.addText("典型表现", {
      x: midColX, y: bandY + 0.08, w: midColW, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "666666", bold: true
    });

    const behaviorText = lvl.behaviors.map((b, i) => ({
      text: "• " + b,
      options: { fontSize: 10, breakLine: i < lvl.behaviors.length - 1 }
    }));
    slide.addText(behaviorText, {
      x: midColX, y: bandY + 0.32, w: midColW, h: 0.78,
      fontFace: "Microsoft YaHei",
      color: "333333", valign: "top"
    });

    // Divider line between mid and right
    slide.addShape(pres.shapes.LINE, {
      x: rightColX - 0.1, y: bandY + 0.15, w: 0, h: bandHeight - 0.3,
      line: { color: "D0D0D0", width: 0.5 }
    });

    // Strategies (response)
    slide.addText("应对策略", {
      x: rightColX, y: bandY + 0.08, w: rightColW, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "666666", bold: true
    });

    const strategyText = lvl.strategies.map((s, i) => ({
      text: "✓ " + s,
      options: { fontSize: 10, breakLine: i < lvl.strategies.length - 1 }
    }));
    slide.addText(strategyText, {
      x: rightColX, y: bandY + 0.32, w: rightColW, h: 0.78,
      fontFace: "Microsoft YaHei",
      color: "333333", valign: "top"
    });
  });

  // --- Footer ---
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 7.2, w: 13.33, h: 0.3,
    fill: { color: theme.secondary }
  });
  slide.addText("变革管理 · 组织风险预警", {
    x: 0.5, y: 7.2, w: 12, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // --- Page number badge ---
  slide.addShape(pres.shapes.OVAL, {
    x: 12.7, y: 6.9, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("1", {
    x: 12.7, y: 6.9, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE';
  const theme = {
    primary: "C41E3A",
    secondary: "8B0000",
    accent: "FFD700",
    light: "F5F5F5",
    bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: __dirname + "/output/阻力信号量表.pptx" })
    .then(() => console.log("Created: " + __dirname + "/output/阻力信号量表.pptx"));
}

module.exports = { createSlide, slideConfig };
