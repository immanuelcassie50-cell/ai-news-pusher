// slide-09.js - Key Sea Power Element: 咽喉要道（海峡）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '关键海权要素：咽喉要道'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("关键海权要素：咽喉要道（海峡）", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Definition box
  slide.addShape("roundRect", {
    x: 0.5, y: 1.05, w: 9, h: 0.8,
    fill: { color: theme.light },
    rectRadius: 0.08
  });
  slide.addText("咽喉要道（Chokepoint）：连接两大海域的狭窄通道，是全球航运的关键节点。其战略价值极高，往往成为大国博弈的焦点。", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });

  // 4 major straits in 2x2 grid
  const straits = [
    {
      name: "马六甲海峡",
      loc: "东南亚",
      desc: "连接印度洋与太平洋\n全球最繁忙航道\n每年超过 16 万艘船通过",
      stat: "16 万艘/年"
    },
    {
      name: "霍尔木兹海峡",
      loc: "波斯湾",
      desc: "世界石油运输生命线\n全球 20% 石油经此\n伊朗控制水域",
      stat: "20% 石油"
    },
    {
      name: "苏伊士运河",
      loc: "埃及",
      desc: "连接地中海与红海\n亚欧贸易最短航路\n年收入超 50 亿美元",
      stat: "50 亿美元/年"
    },
    {
      name: "巴拿马运河",
      loc: "中美洲",
      desc: "连接太平洋与大西洋\n年通航量 13 万艘\n美国建成后移交巴拿马",
      stat: "13 万艘/年"
    }
  ];

  const cardW = 4.3, cardH = 1.65, startX = 0.5, startY = 2.0, gapX = 0.2, gapY = 0.2;

  straits.forEach((strait, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card
    slide.addShape("roundRect", {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Left accent
    slide.addShape("rect", {
      x: x, y: y, w: 0.08, h: cardH,
      fill: { color: theme.accent }
    });

    // Name
    slide.addText(strait.name, {
      x: x + 0.2, y: y + 0.1, w: 2.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Location badge
    slide.addShape("roundRect", {
      x: x + 2.7, y: y + 0.15, w: 1.4, h: 0.35,
      fill: { color: theme.light },
      rectRadius: 0.05
    });
    slide.addText(strait.loc, {
      x: 2.7, y: 0.15, w: 1.4, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(strait.desc, {
      x: x + 0.2, y: y + 0.55, w: 2.8, h: 0.85,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });

    // Stat highlight
    slide.addShape("roundRect", {
      x: x + 3.1, y: y + 0.6, w: 1.1, h: 0.9,
      fill: { color: theme.accent },
      rectRadius: 0.06
    });
    slide.addText(strait.stat, {
      x: x + 3.1, y: y + 0.8, w: 1.1, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Bottom insight
  slide.addText("控制咽喉要道 = 掌握谈判筹码 = 地缘政治杠杆", {
    x: 0.5, y: 5.3, w: 8.5, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("9", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
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
  pres.writeFile({ fileName: "D:/CC/slides/slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
