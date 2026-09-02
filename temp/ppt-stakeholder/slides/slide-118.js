// slide-118.js - 叶云完整定位复盘
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
  slide.addText("PART 04 · 案例复盘", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("叶云的完整定位复盘", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("项目启动两个月后，对六个核心人物的完整定位", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 定位表 - 6人
  const colX = [0.5, 2.2, 3.6, 4.95, 6.3];
  const colW = [1.7, 1.4, 1.35, 1.35, 3.2];
  const headers = ["人物", "初始直觉", "分析后定位", "变化方向", "定位依据（行为）"];
  const colors = [theme.mid, theme.light, theme.primary, theme.accent, theme.mid];
  for (let h = 0; h < 5; h++) {
    slide.addShape("rect", {
      x: colX[h], y: 1.85, w: colW[h], h: 0.4,
      fill: { color: colors[h] }, line: { color: colors[h], width: 0 }
    });
    slide.addText(headers[h], {
      x: colX[h], y: 1.85, w: colW[h], h: 0.4,
      fontSize: 10, fontFace: FONT_CN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
  }

  const rows = [
    { name: "赵磊（大区总）", init: "A2 支持", pos: "A3 顺从", dir: "↓", reason: "协调资源总是「改天」；店长投诉时态度模糊" },
    { name: "陈静（IT负责人）", init: "B2 犹豫", pos: "A2 接受→A1", dir: "↑", reason: "主动来问需求；IT 内部排期主动提前项目" },
    { name: "王建国（财务经理）", init: "B1 无感", pos: "C1 怀疑", dir: "↓", reason: "提出三个数据准确性具体质疑；要求历史误差率" },
    { name: "孙伟（老店长）", init: "A2 接受", pos: "C2 抗拒", dir: "↓↓", reason: "非正式场合说「别急着改」；接口以「IT 排期」拖延" },
    { name: "老张（运营经理）", init: "A2 接受", pos: "A3 顺从", dir: "↓", reason: "启动会举手（大区总在场）；执行极慢；不报问题" },
    { name: "数据接口中层员工", init: "未纳入", pos: "C2 抗拒", dir: "↓", reason: "「在排期」永远没确定时间线；方成完全漏掉" }
  ];

  rows.forEach(function (r, i) {
    const y = 2.25 + i * 0.42;
    const cells = [r.name, r.init, r.pos, r.dir, r.reason];
    for (let c = 0; c < 5; c++) {
      slide.addShape("rect", {
        x: colX[c], y: y, w: colW[c], h: 0.42,
        fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
        line: { color: theme.border, width: 0.5 }
      });
    }
    // 名称
    slide.addText(cells[0], {
      x: colX[0] + 0.1, y: y, w: colW[0] - 0.2, h: 0.42,
      fontSize: 10, fontFace: FONT_CN, color: theme.dark,
      bold: true, align: "left", valign: "middle"
    });
    // 初始
    slide.addText(cells[1], {
      x: colX[1] + 0.05, y: y, w: colW[1] - 0.1, h: 0.42,
      fontSize: 10, fontFace: FONT_CN, color: theme.mid,
      align: "center", valign: "middle"
    });
    // 定位
    slide.addText(cells[2], {
      x: colX[2] + 0.05, y: y, w: colW[2] - 0.1, h: 0.42,
      fontSize: 10, fontFace: FONT_CN, color: theme.accent,
      bold: true, align: "center", valign: "middle"
    });
    // 方向
    slide.addText(cells[3], {
      x: colX[3] + 0.05, y: y, w: colW[3] - 0.1, h: 0.42,
      fontSize: 14, fontFace: FONT_EN, color: r.dir.indexOf("↑") >= 0 ? theme.accent : theme.primary,
      bold: true, align: "center", valign: "middle"
    });
    // 依据
    slide.addText(cells[4], {
      x: colX[4] + 0.1, y: y, w: colW[4] - 0.2, h: 0.42,
      fontSize: 9, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("最关键的发现：直觉和实际差距越大，越要警觉", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.primary,
    bold: true, italic: true, align: "center", valign: "middle"
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
