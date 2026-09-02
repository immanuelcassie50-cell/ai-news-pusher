// slide-054.js - 方成对维度五的盲区
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 02  ·  全景扫描  ·  维度五对比", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("方成对维度五的盲区", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("方成对这整个维度完全没有分析——这是他失败的根因之一", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 对比表
  const rows = [
    {
      left: "只想到「谁能帮我」",
      right: "主动扫描「谁会因此受损」"
    },
    {
      left: "假设阻力是「保守」「不配合」",
      right: "追问「为什么不配合」的真实原因"
    },
    {
      left: "把不配合当态度问题",
      right: "把不配合当利益问题"
    },
    {
      left: "寻找支持者以加强推动",
      right: "识别受损方以设计补偿方案"
    },
    {
      left: "六个月后失去支持",
      right: "把受损方变成「损失最小化」的伙伴"
    }
  ];

  const startX = 0.5;
  const startY = 1.7;
  const colW = 4.35;
  const rowH = 0.5;

  // 标题行
  slide.addShape("rect", {
    x: startX, y: startY, w: colW, h: 0.4,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("方成的盲区", {
    x: startX, y: startY, w: colW, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: startX + colW + 0.3, y: startY, w: colW, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("叶云的解法", {
    x: startX + colW + 0.3, y: startY, w: colW, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  rows.forEach(function (r, i) {
    const y = startY + 0.4 + i * rowH;
    const bg = i % 2 === 0 ? theme.white : theme.highlight;
    // 左
    slide.addShape("rect", {
      x: startX, y: y, w: colW, h: rowH,
      fill: { color: bg },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.left, {
      x: startX + 0.15, y: y, w: colW - 0.3, h: rowH,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.mid, align: "left", valign: "middle"
    });
    // 右
    slide.addShape("rect", {
      x: startX + colW + 0.3, y: y, w: colW, h: rowH,
      fill: { color: bg },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.right, {
      x: startX + colW + 0.45, y: y, w: colW - 0.3, h: rowH,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9, h: 0.45,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 0.08, h: 0.45,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("⚠️ 受损方往往是沉默的阻力——他们不说反对，只是不行动、拖时间、「排期很满」", {
    x: 0.75, y: 4.85, w: 8.7, h: 0.45,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
