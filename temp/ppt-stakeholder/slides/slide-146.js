// slide-146.js - 关键验证：别跳过
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
  slide.addText("一个容易被跳过的关键动作", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("这是方成最大的失误 —— 别走他的老路", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 大引述
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 9, h: 1.5,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 0.08, h: 1.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('"', {
    x: 0.7, y: 2.05, w: 0.6, h: 0.7,
    fontSize: 56, fontFace: "Georgia",
    color: theme.light, bold: true, align: "left", valign: "top"
  });
  slide.addText("填完表格后直接进入「制定沟通策略」 —— 但中间还有一个动作被跳过了：", {
    x: 1.3, y: 2.2, w: 7.8, h: 0.4,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addText("验证你的「我能给什么」是否真的是他需要的。", {
    x: 1.3, y: 2.65, w: 7.8, h: 0.5,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("你推断的「他在乎什么」和真实感受之间，可能有偏差。", {
    x: 1.3, y: 3.15, w: 7.8, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle"
  });

  // 验证什么 + 怎么验证
  const checks = [
    {
      title: "验证什么",
      items: ["他表现出来的那个顾虑，是真正的担忧还是表层理由", "你准备给他的那个价值，他实际上会不会在乎"]
    },
    {
      title: "怎么验证",
      items: ["不需要正式场合", "一次午饭闲聊、一个非项目话题的随意沟通", "往往能让你收集到比会议室里更真实的信号"]
    }
  ];

  checks.forEach(function (c, i) {
    const x = 0.5 + i * 4.55;
    slide.addShape("rect", {
      x: x, y: 3.85, w: 4.35, h: 1.3,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: 3.85, w: 4.35, h: 0.4,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(c.title, {
      x: x, y: 3.85, w: 4.35, h: 0.4,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    c.items.forEach(function (it, j) {
      const y = 4.3 + j * 0.28;
      slide.addShape("rect", {
        x: x + 0.2, y: y + 0.1, w: 0.1, h: 0.1,
        fill: { color: theme.accent },
        line: { color: theme.accent, width: 0 }
      });
      slide.addText(it, {
        x: x + 0.4, y: y, w: 3.9, h: 0.3,
        fontSize: 10, fontFace: FONT_CN,
        color: theme.secondary, align: "left", valign: "middle"
      });
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
