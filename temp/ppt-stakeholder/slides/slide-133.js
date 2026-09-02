// slide-133.js - 成功标志与必要条件
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
  slide.addText("成功标志 vs 必要条件", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("区分「必须」和「锦上添花」，让精力分配有据可依", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 左侧：成功标志
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 4.4, h: 3.0,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 4.4, h: 0.45,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("成功标志", {
    x: 0.5, y: 2.1, w: 4.4, h: 0.45,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("最可见的、可验证的结果", {
    x: 0.65, y: 2.65, w: 4.1, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });
  // 示例条目
  const successItems = [
    "系统按期上线，门店数据可见",
    "覆盖率达到设计目标",
    "关键相关方达到预期支持层级"
  ];
  successItems.forEach(function (s, i) {
    const y = 3.05 + i * 0.55;
    slide.addShape("rect", {
      x: 0.7, y: y + 0.15, w: 0.1, h: 0.1,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(s, {
      x: 0.95, y: y, w: 3.85, h: 0.45,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "top",
      lineSpacing: 16
    });
  });

  // 右侧：必要 vs 锦上添花
  slide.addShape("rect", {
    x: 5.1, y: 2.1, w: 4.4, h: 3.0,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.1, w: 4.4, h: 0.45,
    fill: { color: theme.dark },
    line: { color: theme.dark, width: 0 }
  });
  slide.addText("条件分级", {
    x: 5.1, y: 2.1, w: 4.4, h: 0.45,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  // 不可缺少
  slide.addShape("rect", {
    x: 5.25, y: 2.7, w: 0.4, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("缺", {
    x: 5.25, y: 2.7, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("不可缺少的条件", {
    x: 5.75, y: 2.7, w: 3.5, h: 0.4,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("没有它，项目失败 / 无法继续。", {
    x: 5.4, y: 3.15, w: 4.0, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });
  // 分隔线
  slide.addShape("line", {
    x: 5.25, y: 3.55, w: 4.1, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  // 有更好
  slide.addShape("rect", {
    x: 5.25, y: 3.7, w: 0.4, h: 0.4,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("添", {
    x: 5.25, y: 3.7, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("有更好但没有也还行", {
    x: 5.75, y: 3.7, w: 3.5, h: 0.4,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.mid, bold: true, align: "left", valign: "middle"
  });
  slide.addText("属于加分项，不影响项目生存。", {
    x: 5.4, y: 4.15, w: 4.0, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });
  // 金句
  slide.addText("明确这两层，决定了你在每张沟通策略上的投入强度。", {
    x: 5.25, y: 4.55, w: 4.1, h: 0.45,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, italic: true, align: "left", valign: "top",
    lineSpacing: 16
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
