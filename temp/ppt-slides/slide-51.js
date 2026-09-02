// slide-51.js - 第三部分预告
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "第三部分预告",
  pageNumber: 51,
  theme: theme
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 预告标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 1.5, h: 0.45,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("预告", {
    x: 0.5, y: 0.3, w: 1.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 标题
  slide.addText("第三部分", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 下一部分内容预告
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.8, w: 9, h: 3.2,
    fill: { color: theme.light },
    rectRadius: 0.12
  });

  slide.addText("即将开启", {
    x: 0.7, y: 2.0, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // 内容列表
  const contents = [
    { icon: "🔍", title: "提示词工程", desc: "怎么问，AI才能给你想要的答案" },
    { icon: "🔄", title: "迭代优化", desc: "如何通过多轮对话获得更好的结果" },
    { icon: "⚡", title: "效率提升", desc: "把AI融入日常工作流的实战技巧" }
  ];

  contents.forEach((item, i) => {
    const y = 2.6 + i * 0.75;

    // 图标
    slide.addText(item.icon, {
      x: 0.9, y: y, w: 0.5, h: 0.5,
      fontSize: 24,
      align: "center", valign: "middle"
    });

    // 标题
    slide.addText(item.title, {
      x: 1.5, y: y, w: 3, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 描述
    slide.addText(item.desc, {
      x: 1.5, y: y + 0.35, w: 7.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 底部总结提示
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 5.1, w: 9, h: 0.45,
    fill: { color: theme.primary },
    rectRadius: 0.06
  });

  slide.addText("从\"会用工具\"到\"用好工具\"，下一步是优化你的提问方式", {
    x: 0.5, y: 5.1, w: 9, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-51-output.pptx" })
    .then(() => console.log("Created: slide-51-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };