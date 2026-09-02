// slide-22.js - Island Chain blockade strategy (岛链封锁战略)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 22,
  title: '岛链封锁战略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("岛链封锁战略", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three island chains visualization
  const chains = [
    {
      num: "第一岛链",
      range: "北起日本群岛、琉球群岛",
      countries: "日本、韩国、台湾、菲律宾",
      color: theme.accent
    },
    {
      num: "第二岛链",
      range: "起自日本群岛，经小笠原诸岛",
      countries: "马里亚纳群岛、关岛",
      color: theme.primary
    },
    {
      num: "第三岛链",
      range: "从阿留申群岛至夏威夷",
      countries: "夏威夷、阿拉斯加",
      color: theme.secondary
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.55;
  const gap = 0.35;

  chains.forEach((chain, idx) => {
    const x = startX + idx * (cardWidth + gap);
    const y = 1.2;
    const cardHeight = 3.0;

    // Card background
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top colored bar
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: 0.6,
      fill: { color: chain.color }
    });

    // Chain number
    slide.addText(chain.num, {
      x: x, y: y, w: cardWidth, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Range
    slide.addText("范围", {
      x: x + 0.2, y: y + 0.75, w: 2.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(chain.range, {
      x: x + 0.2, y: y + 1.0, w: 2.5, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });

    // Key locations
    slide.addText("关键节点", {
      x: x + 0.2, y: y + 1.55, w: 2.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(chain.countries, {
      x: x + 0.2, y: y + 1.8, w: 2.5, h: 0.8,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "left", valign: "top"
    });

    // Arrow
    if (idx < 2) {
      slide.addText("→", {
        x: x + cardWidth - 0.05, y: y + cardHeight / 2 - 0.3, w: 0.45, h: 0.6,
        fontSize: 28, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Strategic purpose box
  slide.addShape("rect", {
    x: 0.55, y: 4.4, w: 8.9, h: 0.7,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 1 }
  });

  slide.addText("战略目的：", {
    x: 0.75, y: 4.5, w: 1.2, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("封锁中国海军进入太平洋深水海域，限制反舰弹道导弹射程外投射力量", {
    x: 1.9, y: 4.5, w: 7.3, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("22", {
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
  pres.writeFile({ fileName: "slide-22-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
