// slide-057.js - 辅助工具：权力-利益矩阵
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
  slide.addText("PART 02  ·  全景扫描  ·  辅助工具", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("权力-利益矩阵", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("面对清单上的一大堆名字，用矩阵快速排序", {
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

  // 矩阵主体
  const mx = 2.5;
  const my = 1.8;
  const mw = 4.8;
  const mh = 3.0;

  // Y轴标签
  slide.addText("权力", {
    x: 0.5, y: 1.7, w: 0.8, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "right", valign: "middle"
  });
  slide.addText("影响力", {
    x: 0.5, y: 2.05, w: 0.8, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "right", valign: "middle"
  });
  slide.addText("高", {
    x: 1.4, y: 1.8, w: 0.3, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("低", {
    x: 1.4, y: 4.5, w: 0.3, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });

  // X轴标签
  slide.addText("利益关联度", {
    x: mx, y: my + mh + 0.1, w: mw, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "center", valign: "middle"
  });
  slide.addText("低", {
    x: mx - 0.3, y: my + mh + 0.1, w: 0.3, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, align: "right", valign: "middle"
  });
  slide.addText("高", {
    x: mx + mw, y: my + mh + 0.1, w: 0.3, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 矩阵边框
  slide.addShape("rect", {
    x: mx, y: my, w: mw, h: mh,
    fill: { color: theme.white },
    line: { color: theme.border, width: 1 }
  });
  // 十字虚线
  slide.addShape("line", {
    x: mx + mw / 2, y: my, w: 0, h: mh,
    line: { color: theme.border, width: 0.5, dashType: "dash" }
  });
  slide.addShape("line", {
    x: mx, y: my + mh / 2, w: mw, h: 0,
    line: { color: theme.border, width: 0.5, dashType: "dash" }
  });

  // 四象限内容
  // 左上 ★
  slide.addText("★ 高权力·低利益", {
    x: mx + 0.1, y: my + 0.1, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "top"
  });
  slide.addText("定期知会", {
    x: mx + 0.1, y: my + 0.45, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top"
  });
  slide.addText("保持基本关系", {
    x: mx + 0.1, y: my + 0.7, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "top"
  });

  // 右上 ★
  slide.addText("★ 高权力·高利益", {
    x: mx + mw / 2 + 0.1, y: my + 0.1, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "top"
  });
  slide.addText("重点管理", {
    x: mx + mw / 2 + 0.1, y: my + 0.45, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: "left", valign: "top"
  });
  slide.addText("深度分析", {
    x: mx + mw / 2 + 0.1, y: my + 0.7, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "top"
  });

  // 左下
  slide.addText("○ 低权力·低利益", {
    x: mx + 0.1, y: my + mh / 2 + 0.1, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, bold: true, align: "left", valign: "top"
  });
  slide.addText("基本告知", {
    x: mx + 0.1, y: my + mh / 2 + 0.45, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top"
  });
  slide.addText("暂缓投入", {
    x: mx + 0.1, y: my + mh / 2 + 0.7, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "top"
  });

  // 右下
  slide.addText("● 低权力·高利益", {
    x: mx + mw / 2 + 0.1, y: my + mh / 2 + 0.1, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "top"
  });
  slide.addText("保持沟通", {
    x: mx + mw / 2 + 0.1, y: my + mh / 2 + 0.45, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top"
  });
  slide.addText("防止低估", {
    x: mx + mw / 2 + 0.1, y: my + mh / 2 + 0.7, w: mw / 2 - 0.2, h: 0.3,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "top"
  });

  // 右侧说明
  slide.addText("横轴：利益关联度", {
    x: 7.6, y: 1.8, w: 2.2, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("项目成败对TA的影响（受益+受损都算）", {
    x: 7.6, y: 2.1, w: 2.2, h: 0.6,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "top",
    lineSpacing: 14
  });

  slide.addShape("rect", {
    x: 7.6, y: 2.85, w: 0.3, h: 0.03,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  slide.addText("纵轴：权力/影响力", {
    x: 7.6, y: 3.05, w: 2.2, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("能调动多少资源？表态会影响多少人？", {
    x: 7.6, y: 3.35, w: 2.2, h: 0.6,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "top",
    lineSpacing: 14
  });

  // 底部金句
  slide.addText("⚠️ 这里的「权力」指对这个项目的实际影响力，不是职级高低", {
    x: 0.5, y: 5.05, w: 9, h: 0.25,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
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
