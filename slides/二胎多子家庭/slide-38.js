// slide-38.js - 各年龄段专属时间形式
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 38,
  title: '不同年龄的专属时间形式'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("不同年龄的专属时间形式", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Age-appropriate activities
  const activities = [
    {
      age: "0-3岁",
      forms: ["肌肤接触", "游戏互动", "绘本共读"]
    },
    {
      age: "3-6岁",
      forms: ["角色扮演", "绘本共读", "手工创作"]
    },
    {
      age: "6-12岁",
      forms: ["运动陪伴", "兴趣探索", "共同完成任务"]
    },
    {
      age: "12-18岁",
      forms: ["对话", "咖啡厅闲聊", "外出散步"]
    }
  ];

  const colWidth = 2.25;
  const startX = 0.5;
  const gap = 0.25;

  activities.forEach((act, idx) => {
    const x = startX + idx * (colWidth + gap);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: colWidth, h: 4.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Age badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.3, y: 1.4, w: colWidth - 0.6, h: 0.55,
      fill: { color: theme.primary },
      rectRadius: 0.1
    });
    slide.addText(act.age, {
      x: x + 0.3, y: 1.4, w: colWidth - 0.6, h: 0.55,
      fontSize: 17, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Activities
    act.forms.forEach((form, fIdx) => {
      const y = 2.2 + fIdx * 0.9;

      // Card item
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.1, y: y, w: colWidth - 0.2, h: 0.75,
        fill: { color: theme.bg }
      });

      // Bullet
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.2, y: y + 0.27, w: 0.2, h: 0.2,
        fill: { color: theme.accent }
      });

      // Form text
      slide.addText(form, {
        x: x + 0.5, y: y, w: colWidth - 0.6, h: 0.75,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-38-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
