// slide-27.js - 信息进来的节点
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "信息进来的节点",
  pageNumber: 27,
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

  // 章节标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 2.2, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.06
  });

  slide.addText("第一节 · 信息流框架", {
    x: 0.5, y: 0.3, w: 2.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // 标题
  slide.addText("信息进来的节点", {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 信息来源类型
  const sources = [
    { icon: "📧", title: "邮件", desc: "客户邮件、通知邮件" },
    { icon: "💬", title: "聊天记录", desc: "微信、企业微信、钉钉" },
    { icon: "📄", title: "文档资料", desc: "Word、PDF、PPT、图片" },
    { icon: "🌐", title: "网页内容", desc: "新闻、报告、攻略" },
    { icon: "🎙", title: "录音转写", desc: "会议、访谈、语音备忘" },
    { icon: "📱", title: "截图/照片", desc: "屏幕截图、名片、纸质材料" }
  ];

  const itemWidth = 2.8;
  const itemHeight = 1.0;
  const gridStartX = 0.5;
  const gridStartY = 1.8;
  const gapX = 0.35;
  const gapY = 0.25;

  sources.forEach((item, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = gridStartX + col * (itemWidth + gapX);
    const y = gridStartY + row * (itemHeight + gapY);

    // 项目卡片
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: y, w: itemWidth, h: itemHeight,
      fill: { color: theme.light },
      rectRadius: 0.08
    });

    // 图标
    slide.addText(item.icon, {
      x: x + 0.15, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 24,
      align: "center", valign: "middle"
    });

    // 标题
    slide.addText(item.title, {
      x: x + 0.8, y: y + 0.2, w: 1.8, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 描述
    slide.addText(item.desc, {
      x: x + 0.8, y: y + 0.55, w: 1.8, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 痛点提示
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 4.35, w: 9, h: 0.9,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("痛点：信息散落在各处，格式不统一，查找耗时，整理困难", {
    x: 0.5, y: 4.35, w: 9, h: 0.9,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-27-output.pptx" })
    .then(() => console.log("Created: slide-27-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };