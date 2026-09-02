// slide-163.js - 叶云最终策略复盘表格
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

  // 标题
  slide.addText("叶云最终策略复盘", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("四个破局点，每个都有具体的路径、行动和结果", {
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
  const headers = ["破局点", "目标人物", "路径", "关键行动", "结果"];
  const colWs = [1.4, 1.6, 1.6, 2.7, 1.7];
  const startX = 0.5;
  let cx = startX;
  headers.forEach(function (h, i) {
    slide.addShape("rect", {
      x: cx, y: 2.05, w: colWs[i], h: 0.4,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(h, {
      x: cx, y: 2.05, w: colWs[i], h: 0.4,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    cx += colWs[i];
  });

  // 数据行
  const dataRows = [
    {
      cells: ["#1 连锁效应点", "孙伟 C2→B2", "直接 + 联盟", "设计历史数据过渡缓冲期；请田中先生非正式传话", "孙伟态度从主动消极变为中立，门店群体情绪好转"]
    },
    {
      cells: ["#2 信号源点", "赵磊 A3→A2", "直接，找到 KPI 连接", "把系统上线做成赵磊年度数字化汇报的可见成果；帮他准备汇报素材", "赵磊在第四个月的全区会议上明确表态，基层立刻响应"]
    },
    {
      cells: ["#3 技术守门人", "陈静（维持 A1）", "持续管理", "每周同步需求稳定性；给 IT 预留合理排期", "技术推进节奏稳定，陈静成为主动解决问题的盟友"]
    },
    {
      cells: ["#4 理性质疑者", "王建国 C1→B1", "逻辑回应", "提供误差率历史数据；设计财务校验层", "王建国停止提出阻断性质疑，预算审批顺利完成"]
    }
  ];

  dataRows.forEach(function (row, i) {
    const y = 2.45 + i * 0.65;
    cx = startX;
    row.cells.forEach(function (cell, c) {
      slide.addShape("rect", {
        x: cx, y: y, w: colWs[c], h: 0.65,
        fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
        line: { color: theme.border, width: 0.5 }
      });
      slide.addText(cell, {
        x: cx + 0.08, y: y, w: colWs[c] - 0.16, h: 0.65,
        fontSize: 9, fontFace: FONT_CN,
        color: c === 0 ? theme.primary : theme.dark,
        bold: c === 0, align: "left", valign: "middle",
        lineSpacing: 13
      });
      cx += colWs[c];
    });
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
