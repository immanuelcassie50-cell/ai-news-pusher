// slide-119.js - 定位表：六人对比
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
  slide.addText("PART 04 · 定位对比", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("定位表：六人对比", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("把六个人按 A / B / C 阶分组，看清整体格局", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 三列分组
  const groups = [
    {
      title: "A 阶", subtitle: "支持阵营", color: theme.primary,
      names: ["陈静 (A2→A1)"],
      count: "1 人",
      strategy: "可依靠的力量 —— 向其要资源"
    },
    {
      title: "B 阶", subtitle: "中立阵营", color: theme.mid,
      names: ["（无）"],
      count: "0 人",
      strategy: "无 B2 可转化 —— 中立阵营缺位"
    },
    {
      title: "C 阶", subtitle: "反对阵营", color: theme.accent,
      names: ["王建国 (C1)", "孙伟 (C2)", "数据接口 (C2)", "赵磊 (A3 名义)"],
      count: "4 人",
      strategy: "C1 回应数据；C2 处理利益"
    }
  ];

  groups.forEach(function (g, i) {
    const x = 0.5 + i * 3.05;
    // 顶部
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.9, h: 0.5,
      fill: { color: g.color }, line: { color: g.color, width: 0 }
    });
    slide.addText(g.title, {
      x: x, y: 1.85, w: 1.0, h: 0.5,
      fontSize: 18, fontFace: FONT_CN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(g.subtitle, {
      x: x + 1.0, y: 1.85, w: 1.9, h: 0.5,
      fontSize: 12, fontFace: FONT_CN, color: theme.white,
      align: "right", valign: "middle"
    });
    // 计数
    slide.addShape("rect", {
      x: x, y: 2.35, w: 2.9, h: 0.55,
      fill: { color: theme.highlight }, line: { color: theme.border, width: 0.5 }
    });
    slide.addText(g.count, {
      x: x, y: 2.35, w: 2.9, h: 0.55,
      fontSize: 22, fontFace: FONT_EN, color: g.color,
      bold: true, align: "center", valign: "middle"
    });
    // 名单
    slide.addShape("rect", {
      x: x, y: 2.95, w: 2.9, h: 1.4,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    g.names.forEach(function (n, j) {
      const y = 3.0 + j * 0.32;
      slide.addText("· " + n, {
        x: x + 0.15, y: y, w: 2.6, h: 0.3,
        fontSize: 11, fontFace: FONT_CN, color: theme.dark,
        align: "left", valign: "middle"
      });
    });
    // 策略
    slide.addShape("rect", {
      x: x, y: 4.4, w: 2.9, h: 0.45,
      fill: { color: g.color }, line: { color: g.color, width: 0 }
    });
    slide.addText(g.strategy, {
      x: x, y: 4.4, w: 2.9, h: 0.45,
      fontSize: 10, fontFace: FONT_CN, color: theme.white,
      align: "center", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("整体格局：A 阵营薄弱，C 阵营过强 —— 这是叶云需要破的局", {
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
