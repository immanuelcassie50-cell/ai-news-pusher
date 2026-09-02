// slide-038.js - 项目基础信息（模板）
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
  slide.addText("PART 02  ·  全景扫描", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("项目基础信息", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("尽量具体，越具体后面的扫描越准确", {
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

  // 表格式模板
  const rows = [
    { label: "项目名称", placeholder: "把你的项目具体地说出来" },
    { label: "我的角色", placeholder: "我作为这个项目的发起人/负责人/参与方" },
    { label: "核心目标", placeholder: "用一句话说清楚成功是什么样的" },
    { label: "可预见变化", placeholder: "成功后最可见的变化是什么（对谁、什么影响）" },
    { label: "涉及职能域", placeholder: "主要涉及哪些职能/业务领域（决定扫描范围）" }
  ];

  const tableX = 0.6;
  const tableY = 1.85;
  const labelW = 1.8;
  const fieldW = 7.2;
  const rowH = 0.55;

  rows.forEach(function (r, i) {
    const y = tableY + i * (rowH + 0.1);
    // 左侧标签
    slide.addShape("rect", {
      x: tableX, y: y, w: labelW, h: rowH,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(r.label, {
      x: tableX, y: y, w: labelW, h: rowH,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 右侧填写区
    slide.addShape("rect", {
      x: tableX + labelW, y: y, w: fieldW, h: rowH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.placeholder, {
      x: tableX + labelW + 0.2, y: y, w: fieldW - 0.4, h: rowH,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.mid, italic: true, align: "left", valign: "middle"
    });
  });

  // 底部提示
  slide.addShape("rect", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.35,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("填写完毕后，把这张表放在手边——后面的六维扫描都要回到这张表检查", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
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
