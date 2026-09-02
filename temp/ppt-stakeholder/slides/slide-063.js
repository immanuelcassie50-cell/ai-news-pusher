// slide-063.js - 陷阱一：只列认识的人
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 02  ·  全景扫描  ·  陷阱一", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("陷阱一：只列进「我认识的人」", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 26, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("「不认识」不等于「不存在于你的项目影响网络里」", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 对比表
  const rows = [
    {
      left: "我的熟人网络是有限的",
      right: "真正的关键人可能完全在你视野之外"
    },
    {
      left: "我认识的人 = 我的常识范围",
      right: "项目里需要分析的人远超常识范围"
    },
    {
      left: "找不到 = 我不熟悉",
      right: "找不到 = 我还没问对人"
    }
  ];
  const startX = 0.5;
  const startY = 1.7;
  const colW = 4.35;
  const rowH = 0.7;

  // 标题行
  slide.addShape("rect", {
    x: startX, y: startY, w: colW, h: 0.4,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("直觉反应", {
    x: startX, y: startY, w: colW, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: startX + colW + 0.3, y: startY, w: colW, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("应该有的认知", {
    x: startX + colW + 0.3, y: startY, w: colW, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  rows.forEach(function (r, i) {
    const y = startY + 0.4 + i * rowH;
    const bg = i % 2 === 0 ? theme.white : theme.highlight;
    slide.addShape("rect", {
      x: startX, y: y, w: colW, h: rowH,
      fill: { color: bg },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.left, {
      x: startX + 0.15, y: y, w: colW - 0.3, h: rowH,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.mid, align: "left", valign: "middle"
    });
    slide.addShape("rect", {
      x: startX + colW + 0.3, y: y, w: colW, h: rowH,
      fill: { color: bg },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.right, {
      x: startX + colW + 0.45, y: y, w: colW - 0.3, h: rowH,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
  });

  // 解决方案
  slide.addShape("rect", {
    x: 0.5, y: 4.1, w: 9, h: 0.95,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("解决方法", {
    x: 0.75, y: 4.15, w: 8.5, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.light, bold: true, align: "left", valign: "middle"
  });
  slide.addText("主动问那些了解组织内部生态的人：", {
    x: 0.75, y: 4.45, w: 8.5, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, align: "left", valign: "middle"
  });
  slide.addText("「你觉得这个项目推进，还有哪些人可能会受影响？」", {
    x: 0.75, y: 4.7, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });

  // 底部金句
  slide.addText("方成复盘中提到的那位「管理华南区 20 家重点门店数据接口的中层员工」——正是这种「不认识」的人", {
    x: 0.5, y: 5.05, w: 9, h: 0.25,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.accent, italic: true, align: "center", valign: "middle"
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
