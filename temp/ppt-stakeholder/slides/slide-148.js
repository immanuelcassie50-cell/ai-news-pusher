// slide-148.js - 第五部分小结
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
  slide.addText("PART 05  /  需求映射 · 小结", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 标题
  slide.addText("第五部分小结", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("从「我需要什么」到「我能给什么」一张地图", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三个核心要点
  const points = [
    {
      num: "01",
      title: "底层逻辑",
      desc: "不是说服，是价值交换；你的工作是把交换的地图画清楚"
    },
    {
      num: "02",
      title: "两张表",
      desc: "我需要：资源 / 行为 / 层级；我能给：信息 / 利益 / 情感 / 关系"
    },
    {
      num: "03",
      title: "别跳过验证",
      desc: "填完表格后，先验证你给的「价值」是否真的是他需要的"
    }
  ];

  points.forEach(function (p, i) {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 2.1, w: 2.95, h: 2.0,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 数字大色块
    slide.addShape("rect", {
      x: x, y: 2.1, w: 2.95, h: 0.8,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(p.num, {
      x: x, y: 2.1, w: 2.95, h: 0.8,
      fontSize: 40, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(p.title, {
      x: x + 0.15, y: 3.0, w: 2.65, h: 0.4,
      fontSize: 16, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
    slide.addText(p.desc, {
      x: x + 0.2, y: 3.4, w: 2.55, h: 0.65,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 16
    });
  });

  // 翻页提示
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 9, h: 0.75,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("→  翻到第六部分，找到你的破局点", {
    x: 0.5, y: 4.4, w: 9, h: 0.75,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle",
    charSpacing: 4
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
