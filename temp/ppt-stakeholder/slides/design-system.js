// Design System: Stakeholder Analysis PPT
// 红灰配色 / 浅底 / 极致美学
// 中文: Microsoft YaHei | 英文: Arial

const THEME = {
  // 红灰核心色
  primary:   "8B1A1A",  // 深酒红 - 主色，标题/重点
  secondary: "3A3A3A",  // 深炭灰 - 正文
  accent:    "C53030",  // 亮红 - 强调/数字
  light:     "D4A5A0",  // 浅红褐 - 装饰
  bg:        "F5F0EA",  // 暖米浅底 - 背景
  // 辅助色
  dark:      "2A2A2A",  // 近黑
  mid:       "6B6B6B",  // 中灰
  border:    "B89A92",  // 边框褐
  highlight: "F2E1D9",  // 高亮米色
  white:     "FFFFFF"
};

const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

// 通用装饰：左上角色条（标识本页所属部分）
function addPartMark(slide, partLabel, partColor) {
  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: partColor || THEME.primary },
    line: { color: partColor || THEME.primary, width: 0 }
  });
  // 左侧部分标识
  if (partLabel) {
    slide.addText(partLabel, {
      x: 0.4, y: 0.22, w: 4, h: 0.32,
      fontSize: 10, fontFace: FONT_CN,
      color: THEME.mid, bold: false, align: "left", valign: "middle",
      charSpacing: 4
    });
  }
}

// 通用装饰：底部品牌条
function addBottomBrand(slide, pageNum, totalPages) {
  // 底部细线
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: THEME.border, width: 0.5 }
  });
  // 左下角品牌
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN,
    color: THEME.mid, align: "left", valign: "middle"
  });
  // 右下角页码（按用户要求：仅文字页码，不使用徽章）
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: THEME.mid, align: "right", valign: "middle"
  });
}

// 通用：内容页大标题
function addContentTitle(slide, title, subtitle) {
  slide.addText(title, {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: THEME.primary, bold: true, align: "left", valign: "middle"
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5, y: 1.05, w: 9, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: THEME.mid, italic: false, align: "left", valign: "middle",
      charSpacing: 2
    });
  }
  // 标题下装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: THEME.accent },
    line: { color: THEME.accent, width: 0 }
  });
}

// 通用：左右栏内容容器
function addTwoColumn(slide, leftItems, rightItems, options) {
  const opt = options || {};
  const leftX = opt.leftX || 0.5;
  const rightX = opt.rightX || 5.15;
  const colW = opt.colW || 4.35;
  const startY = opt.startY || 1.7;
  const itemH = opt.itemH || 0.55;
  const gap = opt.gap || 0.15;
  // 左栏
  leftItems.forEach(function (it, i) {
    const y = startY + i * (itemH + gap);
    // 数字圆点
    slide.addShape("ellipse", {
      x: leftX, y: y + 0.05, w: 0.4, h: 0.4,
      fill: { color: THEME.primary },
      line: { color: THEME.primary, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: leftX, y: y + 0.05, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: FONT_EN,
      color: THEME.white, bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(it.title, {
      x: leftX + 0.5, y: y, w: colW - 0.5, h: 0.25,
      fontSize: 13, fontFace: FONT_CN,
      color: THEME.dark, bold: true, align: "left", valign: "top"
    });
    // 描述
    if (it.desc) {
      slide.addText(it.desc, {
        x: leftX + 0.5, y: y + 0.25, w: colW - 0.5, h: itemH - 0.25,
        fontSize: 10, fontFace: FONT_CN,
        color: THEME.secondary, align: "left", valign: "top"
      });
    }
  });
  // 右栏
  rightItems.forEach(function (it, i) {
    const y = startY + i * (itemH + gap);
    slide.addShape("ellipse", {
      x: rightX, y: y + 0.05, w: 0.4, h: 0.4,
      fill: { color: THEME.accent },
      line: { color: THEME.accent, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: rightX, y: y + 0.05, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: FONT_EN,
      color: THEME.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(it.title, {
      x: rightX + 0.5, y: y, w: colW - 0.5, h: 0.25,
      fontSize: 13, fontFace: FONT_CN,
      color: THEME.dark, bold: true, align: "left", valign: "top"
    });
    if (it.desc) {
      slide.addText(it.desc, {
        x: rightX + 0.5, y: y + 0.25, w: colW - 0.5, h: itemH - 0.25,
        fontSize: 10, fontFace: FONT_CN,
        color: THEME.secondary, align: "left", valign: "top"
      });
    }
  });
}

// 通用：要点卡片（一行一个）
function addBulletList(slide, items, options) {
  const opt = options || {};
  const startX = opt.x || 0.6;
  const startY = opt.y || 1.7;
  const itemH = opt.itemH || 0.45;
  const gap = opt.gap || 0.1;
  const maxW = opt.w || 8.8;
  items.forEach(function (it, i) {
    const y = startY + i * (itemH + gap);
    // 左侧小红方块
    slide.addShape("rect", {
      x: startX, y: y + 0.13, w: 0.12, h: 0.12,
      fill: { color: THEME.accent },
      line: { color: THEME.accent, width: 0 }
    });
    slide.addText(it.title, {
      x: startX + 0.3, y: y, w: maxW - 0.3, h: 0.25,
      fontSize: 13, fontFace: FONT_CN,
      color: THEME.dark, bold: true, align: "left", valign: "top"
    });
    if (it.desc) {
      slide.addText(it.desc, {
        x: startX + 0.3, y: y + 0.24, w: maxW - 0.3, h: itemH - 0.24,
        fontSize: 10, fontFace: FONT_CN,
        color: THEME.secondary, align: "left", valign: "top"
      });
    }
  });
}

// 通用：引述块（带左侧粗色条）
function addQuote(slide, text, options) {
  const opt = options || {};
  const x = opt.x || 0.6;
  const y = opt.y || 1.8;
  const w = opt.w || 8.8;
  const h = opt.h || 1.5;
  // 背景高亮
  slide.addShape("rect", {
    x: x, y: y, w: w, h: h,
    fill: { color: THEME.highlight },
    line: { color: THEME.highlight, width: 0 }
  });
  // 左侧粗色条
  slide.addShape("rect", {
    x: x, y: y, w: 0.08, h: h,
    fill: { color: THEME.primary },
    line: { color: THEME.primary, width: 0 }
  });
  // 引号符号
  slide.addText('"', {
    x: x + 0.2, y: y + 0.05, w: 0.6, h: 0.7,
    fontSize: 56, fontFace: "Georgia",
    color: THEME.light, bold: true, align: "left", valign: "top"
  });
  // 引文
  slide.addText(text, {
    x: x + 0.7, y: y + 0.15, w: w - 0.9, h: h - 0.3,
    fontSize: 14, fontFace: FONT_CN,
    color: THEME.dark, italic: false, align: "left", valign: "middle",
    lineSpacing: 22
  });
}

// 通用：对比表（两列：错 vs 对）
function addCompareTable(slide, rows, options) {
  const opt = options || {};
  const startX = opt.x || 0.5;
  const startY = opt.y || 1.8;
  const colW = opt.colW || 4.35;
  const rowH = opt.rowH || 0.5;
  // 标题行
  slide.addShape("rect", {
    x: startX, y: startY, w: colW, h: 0.4,
    fill: { color: THEME.mid },
    line: { color: THEME.mid, width: 0 }
  });
  slide.addText(opt.leftTitle || "常见误区", {
    x: startX, y: startY, w: colW, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: THEME.white, bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: startX + colW + 0.3, y: startY, w: colW, h: 0.4,
    fill: { color: THEME.primary },
    line: { color: THEME.primary, width: 0 }
  });
  slide.addText(opt.rightTitle || "正确做法", {
    x: startX + colW + 0.3, y: startY, w: colW, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: THEME.white, bold: true, align: "center", valign: "middle"
  });
  // 数据行
  rows.forEach(function (r, i) {
    const y = startY + 0.4 + i * rowH;
    // 左
    slide.addShape("rect", {
      x: startX, y: y, w: colW, h: rowH,
      fill: { color: i % 2 === 0 ? THEME.white : THEME.highlight },
      line: { color: THEME.border, width: 0.5 }
    });
    slide.addText(r.left, {
      x: startX + 0.15, y: y, w: colW - 0.3, h: rowH,
      fontSize: 11, fontFace: FONT_CN,
      color: THEME.dark, align: "left", valign: "middle"
    });
    // 右
    slide.addShape("rect", {
      x: startX + colW + 0.3, y: y, w: colW, h: rowH,
      fill: { color: i % 2 === 0 ? THEME.white : THEME.highlight },
      line: { color: THEME.border, width: 0.5 }
    });
    slide.addText(r.right, {
      x: startX + colW + 0.45, y: y, w: colW - 0.3, h: rowH,
      fontSize: 11, fontFace: FONT_CN,
      color: THEME.dark, align: "left", valign: "middle"
    });
  });
}

// 通用：圆形指标
function addCircleMetric(slide, x, y, size, value, label, color) {
  const c = color || THEME.primary;
  slide.addShape("ellipse", {
    x: x, y: y, w: size, h: size,
    fill: { color: c },
    line: { color: c, width: 0 }
  });
  slide.addText(value, {
    x: x, y: y, w: size, h: size,
    fontSize: Math.floor(size * 28), fontFace: FONT_EN,
    color: THEME.white, bold: true, align: "center", valign: "middle"
  });
  if (label) {
    slide.addText(label, {
      x: x - 0.2, y: y + size + 0.05, w: size + 0.4, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: THEME.secondary, align: "center", valign: "top"
    });
  }
}

// 通用：象限图
function addQuadrant(slide, x, y, w, h, labels) {
  // 边框
  slide.addShape("rect", {
    x: x, y: y, w: w, h: h,
    fill: { color: THEME.white },
    line: { color: THEME.border, width: 1 }
  });
  // 中间十字
  slide.addShape("line", {
    x: x + w / 2, y: y, w: 0, h: h,
    line: { color: THEME.border, width: 0.5, dashType: "dash" }
  });
  slide.addShape("line", {
    x: x, y: y + h / 2, w: w, h: 0,
    line: { color: THEME.border, width: 0.5, dashType: "dash" }
  });
  // 四个象限标签
  if (labels) {
    // 左上
    slide.addText(labels.tl || "", {
      x: x + 0.1, y: y + 0.1, w: w / 2 - 0.2, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: THEME.mid, align: "left", valign: "top"
    });
    // 右上
    slide.addText(labels.tr || "", {
      x: x + w / 2 + 0.1, y: y + 0.1, w: w / 2 - 0.2, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: THEME.primary, bold: true, align: "left", valign: "top"
    });
    // 左下
    slide.addText(labels.bl || "", {
      x: x + 0.1, y: y + h / 2 + 0.1, w: w / 2 - 0.2, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: THEME.mid, align: "left", valign: "top"
    });
    // 右下
    slide.addText(labels.br || "", {
      x: x + w / 2 + 0.1, y: y + h / 2 + 0.1, w: w / 2 - 0.2, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: THEME.mid, align: "left", valign: "top"
    });
  }
  // 坐标轴标签
  // X轴
  slide.addText("利益关联度", {
    x: x, y: y + h + 0.05, w: w, h: 0.25,
    fontSize: 10, fontFace: FONT_CN,
    color: THEME.mid, align: "center", valign: "top"
  });
  // Y轴
  slide.addText("权力 / 影响力", {
    x: x - 0.85, y: y + h / 2 - 0.15, w: 0.8, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: THEME.mid, align: "right", valign: "middle"
  });
}

// 通用：色块标题卡
function addSectionHeader(slide, kicker, title, desc) {
  // 背景大色块
  slide.addShape("rect", {
    x: 0, y: 1.8, w: 10, h: 2,
    fill: { color: THEME.primary },
    line: { color: THEME.primary, width: 0 }
  });
  // 装饰斜线
  slide.addShape("line", {
    x: 0, y: 0, w: 4, h: 1.8,
    line: { color: THEME.accent, width: 1.5 }
  });
  if (kicker) {
    slide.addText(kicker, {
      x: 0.6, y: 1.95, w: 8.8, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: THEME.light, bold: false, align: "left", valign: "middle",
      charSpacing: 6
    });
  }
  slide.addText(title, {
    x: 0.6, y: 2.25, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: THEME.white, bold: true, align: "left", valign: "middle"
  });
  if (desc) {
    slide.addText(desc, {
      x: 0.6, y: 3.0, w: 8.8, h: 0.6,
      fontSize: 13, fontFace: FONT_CN,
      color: THEME.white, align: "left", valign: "middle"
    });
  }
}

module.exports = {
  THEME,
  FONT_CN,
  FONT_EN,
  addPartMark,
  addBottomBrand,
  addContentTitle,
  addTwoColumn,
  addBulletList,
  addQuote,
  addCompareTable,
  addCircleMetric,
  addQuadrant,
  addSectionHeader
};
