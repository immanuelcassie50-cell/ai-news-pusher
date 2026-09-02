// slide-109.js - Change Fatigue Symptoms and Treatment
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 109,
  title: '变革疲劳症状与疗法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革疲劳症状与疗法", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const symptoms = [
    { symptom: "情绪耗竭", description: "感到疲惫、无力，对工作失去热情" },
    { symptom: "去人格化", description: "对同事冷漠，用讽刺或嘲讽对待变革" },
    { symptom: "成就感低", description: "觉得自己做的事没有意义，缺乏成就感" }
  ];

  slide.addText("早期症状（躯体信号）：", {
    x: 0.5, y: 1.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  symptoms.forEach((s, i) => {
    slide.addText("• " + s.symptom + "：" + s.description, {
      x: 0.5, y: 1.4 + i * 0.5, w: 9, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  const treatments = [
    { treatment: "休息与恢复", detail: "强制变革休息期，给员工恢复时间" },
    { treatment: "意义重塑", detail: "帮助员工重新连接工作与个人价值" },
    { treatment: "小胜利庆祝", detail: "设置可实现的小目标，及时认可" },
    { treatment: "社会支持", detail: "建立互助小组，分享感受和应对策略" }
  ];

  slide.addText("干预方法：", {
    x: 0.5, y: 3.1, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  treatments.forEach((t, i) => {
    const y = 3.5 + i * 0.5;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.4,
      fill: { color: "28A745" }
    });
    slide.addText(t.treatment, {
      x: 0.7, y: y, w: 2, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(t.detail, {
      x: 2.7, y: y, w: 6.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-109-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
