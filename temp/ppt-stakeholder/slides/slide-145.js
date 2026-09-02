// slide-145.js - 匹配度低时三种处理
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 05  /  需求映射", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 标题
  slide.addText("匹配度低时，三种处理方向", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("匹配度是「低」时，先别放弃 —— 三种处理路径", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三种处理方式
  const ways = [
    {
      num: "01",
      title: "重新审视画像",
      desc: "匹配度低，有时是因为你对他的了解还不够深",
      action: "把画像的维度 ② ③ 再挖深一层，看看有没有被忽略的诉求"
    },
    {
      num: "02",
      title: "借助第三方",
      desc: "你自己无法直接给他的价值，也许可以借助他信任的人来传递",
      action: "如果某个 A1 级支持者和他关系良好，请他帮忙传递价值"
    },
    {
      num: "03",
      title: "调整目标定位",
      desc: "也许你原来设定的「目标层级」过高了",
      action: "重新评估：是否从 C2 到 C1 就够了？降低目标，匹配度可能从低变中"
    }
  ];

  ways.forEach(function (w, i) {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 2.1, w: 2.95, h: 3.0,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部数字
    slide.addShape("rect", {
      x: x, y: 2.1, w: 2.95, h: 0.7,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(w.num, {
      x: x, y: 2.1, w: 2.95, h: 0.7,
      fontSize: 36, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(w.title, {
      x: x + 0.15, y: 2.95, w: 2.65, h: 0.4,
      fontSize: 15, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
    // 描述
    slide.addText(w.desc, {
      x: x + 0.2, y: 3.4, w: 2.55, h: 0.7,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "top",
      lineSpacing: 16
    });
    // 行动
    slide.addShape("rect", {
      x: x + 0.2, y: 4.15, w: 2.55, h: 0.85,
      fill: { color: theme.highlight },
      line: { color: theme.highlight, width: 0 }
    });
    slide.addText("→ " + w.action, {
      x: x + 0.3, y: 4.2, w: 2.4, h: 0.8,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.primary, bold: true, italic: true, align: "left", valign: "middle",
      lineSpacing: 14
    });
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
