// slide-122.js - 练习二：支持度分布图
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 04 · 练习 2 / 2", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 顶部标志
  slide.addShape("rect", {
    x: 8.5, y: 0.22, w: 1.1, h: 0.32,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("5 分钟", {
    x: 8.5, y: 0.22, w: 1.1, h: 0.32,
    fontSize: 9, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });

  // 标题
  slide.addText("练习二：绘制支持度分布图", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("把所有人标注在分布图上，形成对当前「人的环境」的整体感知", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 3x3 网格
  const cellW = 1.85;
  const cellH = 0.85;
  const startX = 1.85;
  const startY = 1.9;
  const cells = [
    [
      { code: "A1", name: "投入", color: theme.primary },
      { code: "A2", name: "接受", color: theme.primary },
      { code: "A3", name: "顺从", color: theme.primary }
    ],
    [
      { code: "B1", name: "无感", color: theme.mid },
      { code: "B2", name: "犹豫", color: theme.mid },
      { code: "B3", name: "冷漠", color: theme.mid }
    ],
    [
      { code: "C1", name: "怀疑", color: theme.accent },
      { code: "C2", name: "抗拒", color: theme.accent },
      { code: "C3", name: "破坏", color: theme.accent }
    ]
  ];

  cells.forEach(function (row, ri) {
    row.forEach(function (c, ci) {
      const x = startX + ci * (cellW + 0.05);
      const y = startY + ri * (cellH + 0.05);
      // 顶部色条
      slide.addShape("rect", {
        x: x, y: y, w: cellW, h: 0.25,
        fill: { color: c.color }, line: { color: c.color, width: 0 }
      });
      slide.addText(c.code, {
        x: x + 0.1, y: y, w: 0.6, h: 0.25,
        fontSize: 12, fontFace: FONT_EN, color: theme.white,
        bold: true, align: "left", valign: "middle"
      });
      slide.addText(c.name, {
        x: x + 0.6, y: y, w: cellW - 0.7, h: 0.25,
        fontSize: 11, fontFace: FONT_CN, color: theme.white,
        align: "right", valign: "middle"
      });
      // 主体 - 填写区
      slide.addShape("rect", {
        x: x, y: y + 0.25, w: cellW, h: cellH - 0.25,
        fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
      });
    });
  });

  // 左侧纵轴标签（A / B / C）
  const labelX = 0.5;
  const labelW = 1.3;
  const labels = ["A 阶 · 支持", "B 阶 · 中立", "C 阶 · 反对"];
  const labelColors = [theme.primary, theme.mid, theme.accent];
  labels.forEach(function (l, i) {
    const y = startY + i * (cellH + 0.05);
    slide.addShape("rect", {
      x: labelX, y: y, w: labelW, h: cellH,
      fill: { color: labelColors[i] }, line: { color: labelColors[i], width: 0 }
    });
    slide.addText(l, {
      x: labelX, y: y, w: labelW, h: cellH,
      fontSize: 13, fontFace: FONT_CN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
  });

  // 右侧提示
  slide.addShape("rect", {
    x: 7.6, y: startY, w: 1.9, h: 2.65,
    fill: { color: theme.highlight }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("填写方法", {
    x: 7.7, y: startY + 0.1, w: 1.7, h: 0.3,
    fontSize: 11, fontFace: FONT_CN, color: theme.accent,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("在每个格子里", {
    x: 7.7, y: startY + 0.4, w: 1.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN, color: theme.dark,
    align: "left", valign: "middle"
  });
  slide.addText("写上人物", {
    x: 7.7, y: startY + 0.65, w: 1.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN, color: theme.dark,
    align: "left", valign: "middle"
  });
  slide.addText("的姓名或简称", {
    x: 7.7, y: startY + 0.9, w: 1.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN, color: theme.dark,
    align: "left", valign: "middle"
  });
  slide.addShape("line", {
    x: 7.7, y: startY + 1.25, w: 1.7, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("形成整体感知：", {
    x: 7.7, y: startY + 1.3, w: 1.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    italic: true, align: "left", valign: "middle"
  });
  slide.addText("A 阵营有多厚", {
    x: 7.7, y: startY + 1.55, w: 1.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
    align: "left", valign: "middle"
  });
  slide.addText("B 阵营有多薄", {
    x: 7.7, y: startY + 1.8, w: 1.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
    align: "left", valign: "middle"
  });
  slide.addText("C 阵营在何处", {
    x: 7.7, y: startY + 2.05, w: 1.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
    align: "left", valign: "middle"
  });
  slide.addText("谁是关键节点", {
    x: 7.7, y: startY + 2.3, w: 1.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
    align: "left", valign: "middle"
  });

  // 底部金句
  slide.addText("一张分布图 ≈ 一张「人的战场地图」", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.accent,
    bold: true, italic: true, align: "center", valign: "middle"
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN, color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN, color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
