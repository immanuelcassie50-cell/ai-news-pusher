// slide-105.js - A阶对比：误判陷阱
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
  slide.addText("PART 04 · A 阶对比", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("A 阶对比：误判陷阱", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("同样是「支持」，看哪些行为信号能帮你区分 A1 / A2 / A3", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 对比表
  const rows = [
    {
      item: "你不在场时的表现",
      a1: "主动帮你说话，捍卫项目",
      a2: "不会说坏话，也不会主动推广",
      a3: "不会说，但也不帮你说话"
    },
    {
      item: "需要额外资源时",
      a1: "主动协调，甚至把自己的资源让出来",
      a2: "你提要求他做，但不主动加码",
      a3: "以「忙」「排期」规避"
    },
    {
      item: "遇到阻碍的反应",
      a1: "不等你，自己先想办法解决",
      a2: "等你给方向，你给就动",
      a3: "借阻碍合理化拖延"
    },
    {
      item: "主动反馈问题",
      a1: "主动告诉你可能的风险",
      a2: "你问才答",
      a3: "不主动，不透明，不报问题"
    }
  ];

  // 表头
  const colX = [0.5, 2.55, 4.6, 6.7, 8.75];
  const colW = [2.05, 2.05, 2.1, 2.05, 0.7];
  const headers = ["观察维度", "A1 投入", "A2 接受", "A3 顺从"];
  const headerColors = [theme.mid, theme.primary, theme.accent, theme.mid];
  // 特殊：观察维度用 mid，A1 用 primary(深)，A2 用 accent(中)，A3 用 mid(浅)

  // 渲染表头
  for (let h = 0; h < 4; h++) {
    slide.addShape("rect", {
      x: colX[h], y: 1.85, w: colW[h], h: 0.45,
      fill: { color: headerColors[h] }, line: { color: headerColors[h], width: 0 }
    });
    slide.addText(headers[h], {
      x: colX[h], y: 1.85, w: colW[h], h: 0.45,
      fontSize: 12, fontFace: FONT_CN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
  }

  // 数据行
  rows.forEach(function (r, i) {
    const y = 2.3 + i * 0.55;
    const cells = [r.item, r.a1, r.a2, r.a3];
    for (let c = 0; c < 4; c++) {
      slide.addShape("rect", {
        x: colX[c], y: y, w: colW[c], h: 0.55,
        fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
        line: { color: theme.border, width: 0.5 }
      });
      slide.addText(cells[c], {
        x: colX[c] + 0.1, y: y, w: colW[c] - 0.2, h: 0.55,
        fontSize: 10, fontFace: FONT_CN, color: theme.dark,
        bold: c === 0, align: "left", valign: "middle"
      });
    }
  });

  // 底部核心提示
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("判断依据是行为，不是表态 —— 一张支持的举手 ≠ A2", {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
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
