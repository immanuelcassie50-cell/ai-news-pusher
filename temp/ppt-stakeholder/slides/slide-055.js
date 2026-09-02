// slide-055.js - 维度六：外部相关方
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
  slide.addText("PART 02  ·  全景扫描  ·  维度六", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("06", {
    x: 0.5, y: 0.5, w: 1.3, h: 1.0,
    fontSize: 56, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "left", valign: "middle"
  });
  slide.addText("外部相关方", {
    x: 1.8, y: 0.55, w: 7, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("组织边界外，但对项目有实质影响的人或机构", {
    x: 1.8, y: 1.0, w: 7, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 1.8, y: 1.35, w: 0.5, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 6种外部类型
  const types = [
    { t: "外部客户", e: "项目成果的最终使用者" },
    { t: "合作伙伴", e: "联合推广 / 联合交付" },
    { t: "监管机构", e: "合规要求 / 备案审核" },
    { t: "行业协会", e: "标准制定 / 行业惯例" },
    { t: "上游委托方", e: "集团总部 / 出资方" },
    { t: "下游对接方", e: "外部审计 / 验收机构" }
  ];

  const startX = 0.5;
  const startY = 1.7;
  const cardW = 1.45;
  const cardH = 1.5;
  const gapX = 0.1;
  types.forEach(function (t, i) {
    const x = startX + i * (cardW + gapX);
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.1,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    // 圆形标识
    slide.addShape("ellipse", {
      x: x + (cardW - 0.6) / 2, y: startY + 0.25, w: 0.6, h: 0.6,
      fill: { color: theme.highlight },
      line: { color: theme.primary, width: 1 }
    });
    slide.addText(String(i + 1).padStart(2, '0'), {
      x: x + (cardW - 0.6) / 2, y: startY + 0.25, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: FONT_EN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
    slide.addText(t.t, {
      x: x, y: startY + 0.95, w: cardW, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "center", valign: "middle"
    });
    slide.addText(t.e, {
      x: x + 0.1, y: startY + 1.2, w: cardW - 0.2, h: 0.3,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.secondary, align: "center", valign: "middle"
    });
  });

  // 叶云示范
  slide.addShape("rect", {
    x: 0.5, y: 3.4, w: 9, h: 1.5,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.4, w: 0.1, h: 1.5,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("⚡ 叶云的扫描结果", {
    x: 0.75, y: 3.45, w: 8.5, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("集团总部统报项目负责人  ·  林峰", {
    x: 0.75, y: 3.8, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: "left", valign: "middle"
  });
  slide.addText("他是整个项目的甲方，也是叶云可以在关键时刻借力的上层资源", {
    x: 0.75, y: 4.1, w: 8.5, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });
  slide.addText("华北区某合作的数据分析外包公司", {
    x: 0.75, y: 4.4, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: "left", valign: "middle"
  });
  slide.addText("部分门店数据汇总工作外包给他们，系统切换需要他们调整对接格式", {
    x: 0.75, y: 4.7, w: 8.5, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
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
