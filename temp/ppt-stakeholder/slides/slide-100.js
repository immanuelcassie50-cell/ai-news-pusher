// slide-100.js - 三阶九梯：总览
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
  slide.addText("PART 04 · 三阶九梯定位", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("三阶九梯：总览", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("三个大阶，每阶三个层次，共九个精确位置", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 三阶色块
  const stages = [
    { x: 0.5, color: theme.primary, label: "A 阶 · 支持", items: [
      { code: "A1", name: "投入" },
      { code: "A2", name: "接受" },
      { code: "A3", name: "顺从" }
    ]},
    { x: 3.65, color: theme.mid, label: "B 阶 · 中立", items: [
      { code: "B1", name: "无感" },
      { code: "B2", name: "犹豫" },
      { code: "B3", name: "冷漠" }
    ]},
    { x: 6.8, color: theme.accent, label: "C 阶 · 反对", items: [
      { code: "C1", name: "怀疑" },
      { code: "C2", name: "抗拒" },
      { code: "C3", name: "破坏" }
    ]}
  ];

  stages.forEach(function (st) {
    // 大色块标题
    slide.addShape("rect", {
      x: st.x, y: 1.85, w: 2.7, h: 0.5,
      fill: { color: st.color }, line: { color: st.color, width: 0 }
    });
    slide.addText(st.label, {
      x: st.x, y: 1.85, w: 2.7, h: 0.5,
      fontSize: 16, fontFace: FONT_CN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    // 三个层次
    st.items.forEach(function (it, i) {
      const y = 2.5 + i * 0.85;
      // 编号
      slide.addShape("rect", {
        x: st.x, y: y, w: 0.8, h: 0.75,
        fill: { color: theme.white }, line: { color: st.color, width: 1.5 }
      });
      slide.addText(it.code, {
        x: st.x, y: y, w: 0.8, h: 0.75,
        fontSize: 24, fontFace: FONT_EN, color: st.color,
        bold: true, align: "center", valign: "middle"
      });
      // 名称
      slide.addShape("rect", {
        x: st.x + 0.85, y: y, w: 1.85, h: 0.75,
        fill: { color: theme.highlight }, line: { color: theme.border, width: 0.5 }
      });
      slide.addText(it.name, {
        x: st.x + 0.85, y: y, w: 1.85, h: 0.75,
        fontSize: 16, fontFace: FONT_CN, color: theme.dark,
        bold: true, align: "center", valign: "middle"
      });
    });
  });

  // 底部说明
  slide.addText("判断依据是行为，不是表态", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.primary,
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
