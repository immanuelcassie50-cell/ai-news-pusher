// slide-152.js - 原则一：向支持者要资源
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
  slide.addText("PART 06  /  破局策略", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 原则编号
  slide.addText("PRINCIPLE  01", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("向支持者要资源", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("针对 A 级人群 —— 他们是你已经拥有的资产，要主动使用", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三个层级
  const tiers = [
    {
      level: "A1 投入",
      action: "让他们知道，他们的行动在哪里最有效",
      detail: "A1 已经在主动帮你 —— 让他们打最该打的仗，不用你亲自上。"
    },
    {
      level: "A2 接受",
      action: "主动告诉他们「我需要你在 X 件事上帮我」",
      detail: "A2 愿意配合，但需要你推；他不知道你最需要他在哪里发力。"
    },
    {
      level: "A3 顺从",
      action: "重点投入的「低垂果实」 —— 顾虑被解决，可转化为 A2",
      detail: "A3 是当前最值得重点投入的层级；转化成本低、杠杆大。"
    }
  ];

  tiers.forEach(function (t, i) {
    const y = 2.25 + i * 0.95;
    // 等级色块
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.7, h: 0.85,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(t.level, {
      x: 0.5, y: y, w: 1.7, h: 0.85,
      fontSize: 18, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 内容
    slide.addShape("rect", {
      x: 2.3, y: y, w: 7.2, h: 0.85,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(t.action, {
      x: 2.5, y: y + 0.05, w: 6.8, h: 0.35,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    slide.addText(t.detail, {
      x: 2.5, y: y + 0.4, w: 6.8, h: 0.4,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 14
    });
  });

  // 底部金句
  slide.addText("大多数人犯的错：只是感谢他们的支持，而没有主动使用这些支持的力量。", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: "center", valign: "middle"
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
