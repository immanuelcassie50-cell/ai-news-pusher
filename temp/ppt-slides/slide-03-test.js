// slide-03.js - 课程学习路径
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '课程学习路径'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("课程学习路径", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("5课系列总览", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Path line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.2, y: 2.9, w: 7.6, h: 0.04,
    fill: { color: theme.light }
  });

  // Course items
  const courses = [
    { num: "第1课", title: "认知重启", sub: "公文写作的AI思维" },
    { num: "第2课", title: "格式规范", sub: "9类公文的格式密码" },
    { num: "第3课", title: "内容生成", sub: "AI写作的提示词工程" },
    { num: "第4课", title: "效率工具", sub: "人机协作的工作流设计" },
    { num: "第5课", title: "综合实战", sub: "高频场景的协同写作与组织迁移" }
  ];

  const startX = 0.7;
  const stepX = 1.85;

  courses.forEach((course, i) => {
    const x = startX + i * stepX;

    // Circle node
    const isLast = i === 4;
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.55, y: 2.7, w: 0.4, h: 0.4,
      fill: { color: isLast ? theme.accent : theme.primary }
    });

    // Number in circle
    slide.addText(String(i + 1), {
      x: x + 0.55, y: 2.7, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });

    // Course label
    slide.addText(course.num, {
      x: x, y: 1.7, w: 1.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });

    // Course title
    slide.addText(course.title, {
      x: x, y: 2.1, w: 1.5, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", bold: true
    });

    // Course subtitle
    slide.addText(course.sub, {
      x: x - 0.15, y: 3.3, w: 1.8, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "top"
    });
  });

  // Highlight box for current course
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.55, y: 1.55, w: 2, h: 1.0,
    fill: { color: theme.accent, transparency: 15 },
    line: { color: theme.accent, width: 1 }
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4a4a4a",
    accent: "E8364F",
    light: "c0c0c0",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/公文写作/5、综合实战——高频场景的协同写作与组织迁移/ppt/slides/slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
