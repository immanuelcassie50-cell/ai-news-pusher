// slide-127.js - 学习资源推荐
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 127,
  title: '学习资源推荐'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("学习资源推荐", {
    x: 0.5, y: 0.35, w: 5, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("深入学习的路径", {
    x: 0.5, y: 0.85, w: 5, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.25, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // 4 resource categories - vertical list with icons
  const resources = [
    {
      title: "推荐书籍",
      icon: "📚",
      items: ["《设计思维》- IDEO", "《创新者的窘境》- 克里斯坦森", "《用户故事地图》- Jeff Patton"]
    },
    {
      title: "在线课程",
      icon: "💻",
      items: ["IDEO U设计思维系列", "Coursera创新管理专项", "斯坦福d.school公开课"]
    },
    {
      title: "工具资源",
      icon: "🛠️",
      items: ["Miro协作白板", "Figma原型设计", "Notion知识管理"]
    },
    {
      title: "实践平台",
      icon: "🚀",
      items: ["创新工作坊社群", "设计冲刺俱乐部", "创业孵化平台"]
    }
  ];

  const itemH = 0.95;
  const startY = 1.5;
  const colW = 4.5;

  resources.forEach((res, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * colW;
    const y = startY + row * (itemH + 0.15);

    // Item background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: colW - 0.2, h: itemH,
      fill: { color: "FFFFFF" }
    });

    // Title with icon
    slide.addText(res.title, {
      x: x + 0.15, y: y + 0.08, w: colW - 0.4, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    // Items list
    slide.addText(res.items.join(" | "), {
      x: x + 0.15, y: y + 0.4, w: colW - 0.4, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom banner
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fill: { color: theme.light }
  });

  slide.addText("持续学习，实践为本", {
    x: 0.5, y: 4.92, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("127", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
