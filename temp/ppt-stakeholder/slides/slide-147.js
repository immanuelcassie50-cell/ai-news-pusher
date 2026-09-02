// slide-147.js - 关键认知：精准价值
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
  slide.addText("关键认知：精准价值", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("需求映射的核心洞见 —— 把力气花在刀刃上", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 中心金句大色块
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 9, h: 1.6,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("一份精准的价值，胜过十份通用的努力。", {
    x: 0.5, y: 2.1, w: 9, h: 1.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
  });

  // 三组对比
  const contrasts = [
    {
      bad: "我为他做了很多",
      good: "我做的东西，恰好是他真正需要的"
    },
    {
      bad: "通用的努力与示好",
      good: "精准的价值，击中具体的痛点"
    },
    {
      bad: "一视同仁的投入",
      good: "根据匹配度分配精力的优先级"
    }
  ];

  contrasts.forEach(function (c, i) {
    const y = 3.95 + i * 0.45;
    // 错
    slide.addShape("rect", {
      x: 0.5, y: y, w: 4.0, h: 0.4,
      fill: { color: theme.mid },
      line: { color: theme.mid, width: 0 }
    });
    slide.addText("✗  " + c.bad, {
      x: 0.7, y: y, w: 3.8, h: 0.4,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.white, align: "left", valign: "middle"
    });
    // 对
    slide.addShape("rect", {
      x: 5.5, y: y, w: 4.0, h: 0.4,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText("✓  " + c.good, {
      x: 5.7, y: y, w: 3.8, h: 0.4,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "left", valign: "middle"
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
