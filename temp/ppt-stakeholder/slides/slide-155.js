// slide-155.js - 四步法：连锁效应
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

  // 步骤标
  slide.addText("FOUR-STEP  01", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("找连锁效应人物", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("问：谁的状态改变，会带动最多的人跟着改变？", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 中心核心问题
  slide.addShape("rect", {
    x: 0.5, y: 2.25, w: 9, h: 0.7,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("在六到八个核心人物里，有没有某个人，他的转变会产生「一石激起千层浪」的效果？", {
    x: 0.5, y: 2.25, w: 9, h: 0.7,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
  });

  // 两种连锁
  const patterns = [
    {
      head: "群体意见领袖",
      desc: "他是某个群体的意见领袖，他一旦表态，集体态度会跟着转变"
    },
    {
      head: "信息枢纽",
      desc: "他是信息枢纽，他的立场变化让观望者重新校准方向"
    }
  ];
  patterns.forEach(function (p, i) {
    const x = 0.5 + i * 4.55;
    slide.addShape("rect", {
      x: x, y: 3.1, w: 4.35, h: 1.2,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: 3.1, w: 0.08, h: 1.2,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(p.head, {
      x: x + 0.2, y: 3.2, w: 4.0, h: 0.35,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    slide.addText(p.desc, {
      x: x + 0.2, y: 3.55, w: 4.0, h: 0.7,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 16
    });
  });

  // 杠杆金句
  slide.addShape("rect", {
    x: 0.5, y: 4.45, w: 9, h: 0.55,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("★  这类人是杠杆系数最高的破局点 —— 撬动他，等于间接撬动了一大批人。", {
    x: 0.5, y: 4.45, w: 9, h: 0.55,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("★  孙伟 = 撬动 1 人 → 影响 15 家门店长 = 杠杆系数最高。", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.accent, bold: true, italic: true, align: "center", valign: "middle"
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
