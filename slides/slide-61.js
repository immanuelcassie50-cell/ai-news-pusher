// slide-61.js - Build your own analysis framework (建立自己的分析框架)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 61,
  title: '建立自己的分析框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("建立自己的分析框架", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("五步法：构建个人化的地缘政治分析体系", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Five steps in a flow
  const steps = [
    {
      num: "1",
      title: "确定分析对象",
      desc: "国家/地区/组织",
      detail: "明确边界，避免泛化"
    },
    {
      num: "2",
      title: "识别核心利益",
      desc: "安全/经济/意识形态",
      detail: "排序优先级"
    },
    {
      num: "3",
      title: "评估能力投射",
      desc: "军事/经济/软实力",
      detail: "定量+定性"
    },
    {
      num: "4",
      title: "分析盟友网络",
      desc: "正式联盟/合作伙伴",
      detail: "关系强度与深度"
    },
    {
      num: "5",
      title: "预判行动趋势",
      desc: "基于历史规律",
      detail: "识别关键节点"
    }
  ];

  // Flow diagram - connected steps
  const stepWidth = 1.7;
  const stepHeight = 2.4;
  const startX = 0.5;
  const gap = 0.2;

  steps.forEach((step, idx) => {
    const x = startX + idx * (stepWidth + gap);

    // Step card
    slide.addShape("rect", {
      x: x, y: 1.6, w: stepWidth, h: stepHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number circle
    slide.addShape("ellipse", {
      x: x + 0.6, y: 1.75, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: x + 0.6, y: 1.75, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.1, y: 2.4, w: stepWidth - 0.2, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.1, y: 2.85, w: stepWidth - 0.2, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });

    // Detail
    slide.addShape("rect", {
      x: x + 0.15, y: 3.35, w: stepWidth - 0.3, h: 0.5,
      fill: { color: theme.light, transparency: 50 }
    });
    slide.addText(step.detail, {
      x: x + 0.2, y: 3.4, w: stepWidth - 0.4, h: 0.4,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "center", valign: "middle"
    });

    // Arrow between steps (except last)
    if (idx < steps.length - 1) {
      slide.addText("→", {
        x: x + stepWidth, y: 2.5, w: gap + 0.1, h: 0.5,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Bottom - Tools and Resources
  slide.addShape("rect", {
    x: 0.5, y: 4.2, w: 9, h: 0.75,
    fill: { color: theme.primary }
  });

  slide.addText("工具推荐", {
    x: 0.7, y: 4.3, w: 1.5, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const tools = [
    "SIPRI军事数据库",
    "世界银行发展指标",
    "IISS军事力量对比",
    "地缘政治新闻聚合"
  ];

  tools.forEach((tool, idx) => {
    slide.addText("• " + tool, {
      x: 0.7 + idx * 2.25, y: 4.55, w: 2.2, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("61", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-61-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
