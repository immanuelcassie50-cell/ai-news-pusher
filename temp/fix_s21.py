# -*- coding: utf-8 -*-
import os

slides_dir = r"D:\新课开发\2026核心课\技控-绩效改进\完整课程包\02-授课PPT\slides"

# Fix slide-21.js - line 37: "扣题" needs to use Chinese brackets instead
content21 = '''// slide-21.js - 三张表的诊断逻辑
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 21,
  title: '三张表的诊断逻辑'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("\u4E09\u5F20\u8868\u7684\u8BCA\u65AD\u903B\u8F91", {
    x: 0.6, y: 0.25, w: 8, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Three cards layout
  const cardWidth = 2.8;
  const cardHeight = 2.8;
  const startX = 0.7;
  const cardY = 1.5;
  const gap = 0.3;

  const cards = [
    { num: "\u7B2C\u4E00\u5F20", title: "\u4E2A\u4EBA\u6210\u7EE9\u8868", desc: "\u5B9A\u4F4D\u5230\u4E2A\u4EBA", color: theme.secondary },
    { num: "\u7B2C\u4E8C\u5F20", title: "\u5168\u73ED\u9519\u8BEF\u7EDF\u8BA1\u8868", desc: "\u5B9A\u4F4D\u5230\u73ED\u7EA7\u5171\u6027", color: theme.secondary },
    { num: "\u7B2C\u4E09\u5F20", title: "\u77E5\u8BC6\u70B9\u9519\u8BEF\u7EDF\u8BA1\u8868", desc: "\u5B9A\u4F4D\u5230\u300C\u6263\u9898\u300D\u8FD9\u4E00\u4E2A\u5177\u4F53\u95EE\u9898", color: theme.accent }
  ];

  cards.forEach((card, i) => {
    const x = startX + i * (cardWidth + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: theme.light },
      line: { color: card.color, width: 2 }
    });

    // Card header
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: cardY, w: cardWidth, h: 0.6,
      fill: { color: card.color }
    });

    // Card number
    slide.addText(card.num, {
      x: x, y: cardY, w: cardWidth, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Card title
    slide.addText(card.title, {
      x: x + 0.15, y: cardY + 0.8, w: cardWidth - 0.3, h: 0.8,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });

    // Arrow pointing down
    slide.addText("\u2193", {
      x: x, y: cardY + 1.6, w: cardWidth, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: card.color, align: "center", valign: "middle"
    });

    // Card description
    slide.addText(card.desc, {
      x: x + 0.15, y: cardY + 2.1, w: cardWidth - 0.3, h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", valign: "top"
    });
  });

  // Key insight box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.7, y: 4.6, w: 8.6, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("\u5173\u952E\u6D1E\u5BDF: \u4E09\u5F20\u8868\u90FD\u662F\u8001\u5E08\u624B\u5DE5\u7EDF\u8BA1\u51FA\u6765\u7684", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("21", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(slides_dir + "\\slide-21.js", "w", encoding="utf-8") as f:
    f.write(content21)
print("Written slide-21.js")

# Fix slide-76.js
content76 = '''// slide-76.js - 萃取的要点复盘页 (Content page)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 76,
  title: '萃取的要点复盘'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("\u8323\u53D6\u7684\u8981\u70B9\u590D\u76D8", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0.9, w: 0.12, h: 4.725,
    fill: { color: theme.secondary }
  });

  // Three key points layout
  const points = [
    {
      num: "01",
      title: "\u7ECF\u9A8C\u5728\u4EBA\u7684\u8111\u5B50\u91CC",
      desc: "\u4E13\u5BB6\u65E5\u7528\u800C\u4E0D\u77E5,\u8BF4\u4E0D\u6E05\u695A\u81EA\u5DF1\u7684\u300C\u9690\u6027\u7ECF\u9A8C\u300D",
      highlight: "\u8323\u53D6\u662F\u8BA9\u9690\u6027\u7ECF\u9A8C\u663E\u6027\u5316"
    },
    {
      num: "02",
      title: "\u8323\u53D6\u4E0D\u662F\u7F16\u6559\u6750",
      desc: "\u4E0D\u662F\u628A\u4E13\u5BB6\u7684\u8BDD\u539F\u5C01\u4E0D\u52A8\u8BB0\u4E0B\u6765,\u800C\u662F\u63D0\u53D6\u53EF\u590D\u7528\u7684\u6A21\u5F0F",
      highlight: "\u8323\u53D6\u662F\u627E\u5230\u300C\u5957\u8DEF\u300D\u800C\u975E\u300C\u8BF4\u6CD5\u300D"
    },
    {
      num: "03",
      title: "AI\u662F\u8D85\u7EA7\u8323\u53D6\u52A9\u624B",
      desc: "\u53EF\u4EE5\u5E2E\u4E13\u5BB6\u6574\u7406\u3001\u5F52\u7EB3\u3001\u751F\u6210\u7ED3\u6784\u5316\u7684\u8323\u53D6\u7ED3\u679C",
      highlight: "\u7ECF\u9A8C\u653E\u8FDBAI\u91CC\u624D\u4F1A\u5E72\u6D3B"
    }
  ];

  const startY = 1.2;
  const cardHeight = 1.25;
  const cardGap = 0.2;

  points.forEach((point, i) => {
    const y = startY + i * (cardHeight + cardGap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: cardHeight,
      fill: { color: theme.light },
      shadow: { type: "outer", blur: 3, offset: 2, angle: 135, color: "000000", opacity: 0.06 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y + 0.35, w: 0.55, h: 0.55,
      fill: { color: theme.secondary }
    });
    slide.addText(point.num, {
      x: 0.7, y: y + 0.35, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Title
    slide.addText(point.title, {
      x: 1.4, y: y + 0.15, w: 3, h: 0.4,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    // Description
    slide.addText(point.desc, {
      x: 1.4, y: y + 0.55, w: 4.5, h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, margin: 0
    });

    // Highlight box on right
    slide.addShape(pres.ShapeType.rect, {
      x: 6.1, y: y + 0.2, w: 3.2, h: 0.85,
      fill: { color: theme.accent, transparency: 15 }
    });
    slide.addText(point.highlight, {
      x: 6.2, y: y + 0.2, w: 3, h: 0.85,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("76", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(slides_dir + "\\slide-76.js", "w", encoding="utf-8") as f:
    f.write(content76)
print("Written slide-76.js")
