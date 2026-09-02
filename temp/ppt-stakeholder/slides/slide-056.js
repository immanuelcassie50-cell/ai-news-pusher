// slide-056.js - 第三步：汇总清单
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
  slide.addText("PART 02  ·  全景扫描  ·  第三步", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("第三步：汇总全景清单", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("把六个维度的扫描结果汇总到一张表——先不筛选，先列全", {
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

  // 练习标识
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 1.5, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("✋ 练习", {
    x: 0.5, y: 1.7, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("预计 5 分钟", {
    x: 2.1, y: 1.7, w: 3, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });

  // 表格
  const tableX = 0.5;
  const tableY = 2.25;
  const tableW = 9.0;

  // 表头
  slide.addShape("rect", {
    x: tableX, y: tableY, w: tableW, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  const headers = [
    { x: 0.0, w: 0.7, t: "#" },
    { x: 0.7, w: 2.6, t: "姓名/称呼/群体" },
    { x: 3.3, w: 1.5, t: "所属维度" },
    { x: 4.8, w: 2.0, t: "部门/角色" },
    { x: 6.8, w: 2.2, t: "初步印象" }
  ];
  headers.forEach(function (h) {
    slide.addText(h.t, {
      x: tableX + h.x + 0.1, y: tableY, w: h.w - 0.1, h: 0.35,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "left", valign: "middle"
    });
  });

  // 12行示例
  for (let i = 0; i < 6; i++) {
    const y = tableY + 0.35 + i * 0.4;
    const bg = i % 2 === 0 ? theme.white : theme.highlight;
    slide.addShape("rect", {
      x: tableX, y: y, w: tableW, h: 0.4,
      fill: { color: bg },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(String(i + 1) + ".", {
      x: tableX + 0.1, y: y, w: 0.6, h: 0.4,
      fontSize: 10, fontFace: FONT_EN,
      color: theme.mid, align: "left", valign: "middle"
    });
    // 占位线
    [2.6, 3.3, 4.8, 6.8].forEach(function (xx, idx) {
      const w = [2.6, 1.5, 2.0, 2.2][idx];
      slide.addShape("line", {
        x: tableX + xx + 0.1, y: y + 0.25, w: w - 0.3, h: 0,
        line: { color: theme.light, width: 0.5, dashType: "dash" }
      });
    });
  }

  // 底部要点
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
  slide.addText("⚠️ 此刻只罗列，不评价——评价与筛选是下一步的事", {
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
