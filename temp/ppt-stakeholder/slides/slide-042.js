// slide-042.js - 直接相关方：叶云示范
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
  slide.addText("PART 02  ·  全景扫描  ·  维度一示范", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("叶云的扫描结果", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("⚡ 直接相关方——星际零售集团华北区数字化项目", {
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

  // 表格 - 4行
  const rows = [
    { who: "叶云团队 4 名成员", role: "核心执行", detail: "项目团队本身，负责协调与推进" },
    { who: "IT 部门系统部署团队", role: "技术执行", detail: "系统落地的技术实现者" },
    { who: "各门店店长", role: "最终使用", detail: "新系统的最终使用者，使用质量决定数据准确性" },
    { who: "门店运营经理", role: "数据填报", detail: "数据填报的实际操作者，每日接触系统" }
  ];

  const tableX = 0.5;
  const tableY = 1.7;
  const tableW = 9.0;

  // 表头
  slide.addShape("rect", {
    x: tableX, y: tableY, w: tableW, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("人员", {
    x: tableX + 0.2, y: tableY, w: 2.8, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("角色", {
    x: tableX + 3.0, y: tableY, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("关键说明", {
    x: tableX + 4.5, y: tableY, w: tableW - 4.7, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });

  // 数据行
  const colW1 = 2.8;
  const colW2 = 1.5;
  rows.forEach(function (r, i) {
    const y = tableY + 0.4 + i * 0.5;
    const bg = i % 2 === 0 ? theme.white : theme.highlight;
    slide.addShape("rect", {
      x: tableX, y: y, w: tableW, h: 0.5,
      fill: { color: bg },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.who, {
      x: tableX + 0.2, y: y, w: colW1 - 0.2, h: 0.5,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    slide.addText(r.role, {
      x: tableX + 3.0, y: y, w: colW2 - 0.1, h: 0.5,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.accent, align: "left", valign: "middle"
    });
    slide.addText(r.detail, {
      x: tableX + 4.5, y: y, w: tableW - 4.7, h: 0.5,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // 关键差异
  slide.addShape("rect", {
    x: 0.5, y: 4.1, w: 9, h: 0.85,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.1, w: 0.08, h: 0.85,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("叶云 vs 方成的第一个差异", {
    x: 0.75, y: 4.15, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("方成把「门店店长」视为被动执行对象；叶云把他们视为需要主动管理的关键群体——他们的配合意愿直接决定数据质量。", {
    x: 0.75, y: 4.45, w: 8.5, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top",
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
