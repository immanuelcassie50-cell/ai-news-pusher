// slide-143.js - 需求-能给对照练习
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
  slide.addText("练习：需求-能给对照表", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("对照深度画像和三阶九梯定位，逐人填写", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 表格
  // 表头
  const headers = ["人物", "当前定位", "目标定位", "我需要他的资源/行为（具体）", "我能给他的价值", "匹配度"];
  const colWs = [0.85, 0.85, 0.85, 2.55, 2.55, 0.85];
  const startX = 0.5;
  let cx = startX;
  headers.forEach(function (h, i) {
    slide.addShape("rect", {
      x: cx, y: 2.0, w: colWs[i], h: 0.4,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(h, {
      x: cx, y: 2.0, w: colWs[i], h: 0.4,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    cx += colWs[i];
  });

  // 数据行
  const rowCount = 6;
  for (let r = 0; r < rowCount; r++) {
    const y = 2.4 + r * 0.4;
    cx = startX;
    for (let c = 0; c < 6; c++) {
      slide.addShape("rect", {
        x: cx, y: y, w: colWs[c], h: 0.4,
        fill: { color: r % 2 === 0 ? theme.white : theme.highlight },
        line: { color: theme.border, width: 0.5 }
      });
      cx += colWs[c];
    }
  }

  // 填写提示
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9, h: 0.35,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("提示：我需要的行为和资源要写具体；我能给的价值要基于画像中「什么能打动他」的分析。", {
    x: 0.5, y: 4.85, w: 9, h: 0.35,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.dark, italic: true, align: "center", valign: "middle"
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
