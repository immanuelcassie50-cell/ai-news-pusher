// slide-38.js - 豆包 - 多媒体输出
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "豆包 - 多媒体输出",
  pageNumber: 38,
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

  // 工具图标标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 3.5, h: 0.5,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });

  slide.addText("工具 6/7 · 多媒体输出", {
    x: 0.5, y: 0.3, w: 3.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 工具名称
  slide.addText("豆包", {
    x: 0.5, y: 1.0, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.75, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // 核心功能
  const functions = [
    { icon: "🎨", title: "图片生成", desc: "根据描述生成配图、插画、海报" },
    { icon: "🎬", title: "视频剪辑", desc: "智能剪辑、自动字幕、素材合成" },
    { icon: "🗣", title: "语音合成", desc: "文字转语音，多种音色可选" }
  ];

  const funcStartY = 2.0;
  const funcHeight = 1.0;
  const funcGap = 0.15;

  functions.forEach((func, i) => {
    const y = funcStartY + i * (funcHeight + funcGap);

    // 功能卡片
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 9, h: funcHeight,
      fill: { color: theme.light },
      rectRadius: 0.08
    });

    // 图标
    slide.addText(func.icon, {
      x: 0.7, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 28,
      align: "center", valign: "middle"
    });

    // 功能标题
    slide.addText(func.title, {
      x: 1.5, y: y + 0.15, w: 2, h: 0.35,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 功能描述
    slide.addText(func.desc, {
      x: 1.5, y: y + 0.5, w: 7.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 适用场景
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 5.05, w: 9, h: 0.5,
    fill: { color: theme.secondary },
    rectRadius: 0.06
  });

  slide.addText("适用：需要图片、视频、语音等多形式内容时", {
    x: 0.5, y: 5.05, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-38-output.pptx" })
    .then(() => console.log("Created: slide-38-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };