// slide-135.js - 资源-行为-层级
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
  slide.addText("资源 · 行为 · 层级", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("把「我需要」拆成三个具体维度，避免泛泛而谈", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三列对比示例
  const cols = [
    {
      head: "资源",
      sub: "我能从他那里拿到什么",
      bad: "我需要他的支持",
      good: "他需要在 6 月前批准 80 万元项目预算"
    },
    {
      head: "行为",
      sub: "我需要他做什么动作",
      bad: "配合推进",
      good: "他在第 3 周完成门店端数据接口配置"
    },
    {
      head: "层级",
      sub: "他需要达到哪个位置",
      bad: "让他变成支持者",
      good: "B1 无感者 维持现状即可 / C2 必须降到 B2"
    }
  ];

  cols.forEach(function (c, i) {
    const x = 0.5 + i * 3.1;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 2.1, w: 2.95, h: 3.0,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部色块
    slide.addShape("rect", {
      x: x, y: 2.1, w: 2.95, h: 0.6,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(c.head, {
      x: x, y: 2.1, w: 2.95, h: 0.6,
      fontSize: 22, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 副标
    slide.addText(c.sub, {
      x: x + 0.15, y: 2.8, w: 2.65, h: 0.4,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.mid, align: "center", valign: "middle"
    });
    // 错误示例
    slide.addText("泛泛的说法", {
      x: x + 0.15, y: 3.3, w: 2.65, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.mid, bold: true, align: "left", valign: "middle"
    });
    slide.addShape("rect", {
      x: x + 0.15, y: 3.6, w: 2.65, h: 0.45,
      fill: { color: theme.highlight },
      line: { color: theme.border, width: 0.3 }
    });
    slide.addText(c.bad, {
      x: x + 0.2, y: 3.6, w: 2.55, h: 0.45,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, italic: true, align: "center", valign: "middle"
    });
    // 正确示例
    slide.addText("具体的说法", {
      x: x + 0.15, y: 4.15, w: 2.65, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    slide.addShape("rect", {
      x: x + 0.15, y: 4.45, w: 2.65, h: 0.55,
      fill: { color: theme.white },
      line: { color: theme.accent, width: 1 }
    });
    slide.addText(c.good, {
      x: x + 0.2, y: 4.45, w: 2.55, h: 0.55,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
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
