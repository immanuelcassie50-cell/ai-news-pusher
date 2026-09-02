// slide-37.js - Indicator 3: Diplomatic focus analysis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 37,
  title: '指标三：外交重心分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("指标三：外交重心分析", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Indicator label badge
  slide.addShape("roundRect", {
    x: 8.5, y: 0.2, w: 1.2, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("指标3", {
    x: 8.5, y: 0.2, w: 1.2, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Main content - three aspects
  const aspects = [
    {
      title: "联盟体系",
      subtitle: "海洋联盟 vs 陆陆联盟",
      color: theme.primary,
      items: [
        "海权国家：NATO、五眼联盟",
        "陆权国家：集安组织、CSTO"
      ]
    },
    {
      title: "外交优先方向",
      subtitle: "海上伙伴 vs 陆路邻国",
      color: theme.secondary,
      items: [
        "海权国家：印太、跨大西洋",
        "陆权国家：中亚、欧亚腹地"
      ]
    },
    {
      title: "争端解决模式",
      subtitle: "海军示威 vs 边境谈判",
      color: theme.accent,
      items: [
        "海权国家：航母战斗群施压",
        "陆权国家：边境军演、谈判"
      ]
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.55;
  const gap = 0.35;

  aspects.forEach((asp, idx) => {
    const x = startX + idx * (cardWidth + gap);
    const y = 1.15;
    const cardHeight = 2.8;

    // Card background
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top bar
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: 0.55,
      fill: { color: asp.color }
    });

    slide.addText(asp.title, {
      x: x, y: y, w: cardWidth, h: 0.55,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Subtitle
    slide.addText(asp.subtitle, {
      x: x + 0.15, y: y + 0.65, w: cardWidth - 0.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: asp.color, bold: true,
      align: "center", valign: "middle"
    });

    // Items
    asp.items.forEach((item, iIdx) => {
      const itemY = y + 1.1 + iIdx * 0.7;

      slide.addShape("ellipse", {
        x: x + 0.2, y: itemY + 0.1, w: 0.15, h: 0.15,
        fill: { color: asp.color }
      });

      slide.addText(item, {
        x: x + 0.45, y: itemY, w: cardWidth - 0.65, h: 0.65,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "top"
      });
    });
  });

  // Bottom: Key indicator
  slide.addShape("rect", {
    x: 0.5, y: 4.15, w: 9, h: 0.65,
    fill: { color: theme.light }
  });
  slide.addText("核心指标：外交出访目的地 + 国际组织投票记录 + 军事演习地理分布", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.65,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Insight box
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 9, h: 0.55,
    fill: { color: theme.accent, transparency: 88 }
  });
  slide.addText("关键洞察：盟友选择是战略取向的最清晰信号", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("37", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
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
  pres.writeFile({ fileName: "slide-37-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
