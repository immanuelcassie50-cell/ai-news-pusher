// slide-045.js - 资源相关方：叶云示范
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
  slide.addText("PART 02  ·  全景扫描  ·  维度二示范", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("资源相关方：叶云示范", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("⚡ 列出每个资源方和他掌控的关键资源", {
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

  // 4个人物卡片
  const people = [
    { name: "赵磊", role: "华北区大区总经理", res: "区域授权 / 资源调配", note: "最终授权者" },
    { name: "王建国", role: "财务部华北区经理", res: "配套预算审批", note: "预算落地关键人" },
    { name: "陈静", role: "IT 部华北区负责人", res: "技术资源 / 团队排期", note: "IT 排期决定者" },
    { name: "林峰", role: "集团总部项目负责人", res: "跨区经验 / 总部支持", note: "关键时刻可借力" }
  ];

  const startX = 0.5;
  const startY = 1.7;
  const cardW = 2.18;
  const cardH = 2.4;
  const gapX = 0.1;
  people.forEach(function (p, i) {
    const x = startX + i * (cardW + gapX);
    // 卡片
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部头像区
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.9,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    // 圆形头像占位
    slide.addShape("ellipse", {
      x: x + (cardW - 0.7) / 2, y: startY + 0.1, w: 0.7, h: 0.7,
      fill: { color: theme.light },
      line: { color: theme.white, width: 2 }
    });
    slide.addText(p.name.charAt(0), {
      x: x + (cardW - 0.7) / 2, y: startY + 0.1, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 姓名
    slide.addText(p.name, {
      x: x, y: startY + 0.95, w: cardW, h: 0.4,
      fontSize: 16, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "center", valign: "middle"
    });
    // 职位
    slide.addText(p.role, {
      x: x + 0.1, y: startY + 1.35, w: cardW - 0.2, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.mid, align: "center", valign: "middle"
    });
    // 资源标签
    slide.addShape("rect", {
      x: x + 0.1, y: startY + 1.7, w: cardW - 0.2, h: 0.35,
      fill: { color: theme.highlight },
      line: { color: theme.accent, width: 0.5 }
    });
    slide.addText(p.res, {
      x: x + 0.15, y: startY + 1.7, w: cardW - 0.3, h: 0.35,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
    // 备注
    slide.addText(p.note, {
      x: x + 0.1, y: startY + 2.07, w: cardW - 0.2, h: 0.3,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.secondary, italic: true, align: "center", valign: "middle"
    });
  });

  // 底部要点
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 9, h: 0.6,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 0.08, h: 0.6,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("关键观察：4 人覆盖了预算 / 排期 / 授权 / 借力四条资源线；缺一个，项目都会卡住。", {
    x: 0.75, y: 4.4, w: 8.7, h: 0.6,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: "left", valign: "middle",
    lineSpacing: 18
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
