// slide-44.js - 四类不能输入AI的信息
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "四类不能输入AI的信息",
  pageNumber: 44,
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

  // 标题
  slide.addText("四类不能输入AI的信息", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.9, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 四类禁忌信息
  const prohibitions = [
    {
      icon: "🔐",
      title: "个人隐私",
      examples: "身份证号、银行卡号、密码、家庭住址",
      severity: "高"
    },
    {
      icon: "🏢",
      title: "商业机密",
      examples: "客户名单、定价策略、内部数据、未公开方案",
      severity: "高"
    },
    {
      icon: "👥",
      title: "他人隐私",
      examples: "同事个人信息、客户资料、聊天记录",
      severity: "中"
    },
    {
      icon: "📵",
      title: "违规内容",
      examples: "版权内容、政治敏感内容、不当言论",
      severity: "中"
    }
  ];

  const cardWidth = 4.25;
  const cardHeight = 1.9;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.35;
  const gapY = 0.3;

  prohibitions.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // 卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      line: { color: theme.accent, width: 2 },
      rectRadius: 0.1
    });

    // 左侧色条
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.1, h: cardHeight,
      fill: { color: theme.accent }
    });

    // 图标和标题行
    slide.addText(item.icon, {
      x: x + 0.25, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 24,
      align: "center", valign: "middle"
    });

    slide.addText(item.title, {
      x: x + 0.85, y: y + 0.25, w: 2.5, h: 0.4,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 严重程度标签
    const severityColor = item.severity === "高" ? theme.accent : theme.secondary;
    slide.addShape(pres.ShapeType.roundRect, {
      x: x + 3.3, y: y + 0.25, w: 0.7, h: 0.35,
      fill: { color: severityColor },
      rectRadius: 0.05
    });

    slide.addText(item.severity, {
      x: x + 3.3, y: y + 0.25, w: 0.7, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // 示例内容
    slide.addText("典型例子：", {
      x: x + 0.25, y: y + 0.75, w: 3.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    slide.addText(item.examples, {
      x: x + 0.25, y: y + 1.05, w: 3.8, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 底部警告
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.06
  });

  slide.addText("输入前先问自己：这条信息泄露了会怎样？", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-44-output.pptx" })
    .then(() => console.log("Created: slide-44-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };