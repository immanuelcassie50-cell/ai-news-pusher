// slide-06.js - AI参与薪酬决策的四个层级（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 6,
  title: 'AI参与薪酬决策的四个层级'
};

const levels = [
  {
    level: 'L1',
    name: '人工主导',
    aiRole: '提供数据报表（被动）',
    managerRole: '决策并与员工对话',
    employeeFeeling: '"老板定的"'
  },
  {
    level: 'L2',
    name: 'AI辅助建议',
    aiRole: '生成调薪区间建议',
    managerRole: '管理者选择并决策',
    employeeFeeling: '"老板参考了数据"'
  },
  {
    level: 'L3',
    name: 'AI生成+人工审批',
    aiRole: '生成完整调薪建议',
    managerRole: '审批通过/退回/调整',
    employeeFeeling: '"数字是系统算的"'
  },
  {
    level: 'L4',
    name: 'AI主导+人工执行',
    aiRole: '生成最终决策',
    managerRole: '执行通知和对话',
    employeeFeeling: '"系统说了算"'
  }
];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('AI参与薪酬决策的四个层级', {
    x: 0.5,
    y: 0.35,
    w: 9,
    h: 0.7,
    fontSize: 32,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 英文副标题 ==========
  slide.addText('FOUR LEVELS OF AI INVOLVEMENT', {
    x: 0.5,
    y: 0.95,
    w: 9,
    h: 0.35,
    fontSize: 11,
    fontFace: 'Arial',
    color: theme.secondary,
    align: 'left',
    valign: 'middle',
    charSpacing: 3
  });

  // ========== 装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.35,
    w: 1.0,
    h: 0.035,
    fill: { color: theme.accent }
  });

  // ========== 四个层级卡片布局 ==========
  const cardStartY = 1.7;
  const cardWidth = 2.1;
  const cardHeight = 2.9;
  const cardGap = 0.2;
  const startX = 0.5;

  // 表头配置
  const headers = ['层级', '名称', 'AI做什么', '管理者做什么', '员工感受'];
  const colWidths = [0.6, 1.0, 1.6, 1.6, 1.5];
  const headerY = cardStartY;
  const headerHeight = 0.45;

  // 表头背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: startX,
    y: headerY,
    w: cardWidth * 4 + cardGap * 3,
    h: headerHeight,
    fill: { color: theme.primary, transparency: 8 },
    line: { color: theme.primary, width: 0 },
    rectRadius: 0.08
  });

  // 表头文字
  let headerX = startX + 0.15;
  headers.forEach((header, idx) => {
    slide.addText(header, {
      x: headerX,
      y: headerY,
      w: colWidths[idx] - 0.1,
      h: headerHeight,
      fontSize: 12,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'center',
      valign: 'middle'
    });
    headerX += colWidths[idx] + (idx < headers.length - 1 ? cardGap : 0);
  });

  // ========== 数据行 ==========
  const rowStartY = headerY + headerHeight + 0.12;
  const rowHeight = 0.55;
  const rowGap = 0.08;

  levels.forEach((item, rowIdx) => {
    const rowY = rowStartY + rowIdx * (rowHeight + rowGap);
    const isEven = rowIdx % 2 === 0;

    // 整行背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: startX,
      y: rowY,
      w: cardWidth * 4 + cardGap * 3,
      h: rowHeight,
      fill: { color: isEven ? theme.light : theme.bg, transparency: isEven ? 70 : 0 },
      line: { color: theme.light, width: 0.5 },
      rectRadius: 0.06
    });

    // L层标识 - 特殊样式
    const levelColors = [theme.primary, theme.accent, theme.secondary, theme.primary];
    slide.addShape(pres.ShapeType.roundRect, {
      x: startX + 0.1,
      y: rowY + 0.08,
      w: 0.5,
      h: rowHeight - 0.16,
      fill: { color: levelColors[rowIdx], transparency: 15 },
      line: { color: levelColors[rowIdx], width: 1 },
      rectRadius: 0.05
    });

    slide.addText(item.level, {
      x: startX + 0.1,
      y: rowY,
      w: 0.5,
      h: rowHeight,
      fontSize: 14,
      fontFace: 'Arial',
      color: levelColors[rowIdx],
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 名称
    slide.addText(item.name, {
      x: startX + 0.7,
      y: rowY,
      w: colWidths[1] - 0.1,
      h: rowHeight,
      fontSize: 13,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // AI角色
    slide.addText(item.aiRole, {
      x: startX + colWidths[1] + cardGap + 0.6,
      y: rowY,
      w: colWidths[2] - 0.1,
      h: rowHeight,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      align: 'center',
      valign: 'middle'
    });

    // 管理者角色
    slide.addText(item.managerRole, {
      x: startX + colWidths[1] + colWidths[2] + cardGap * 2 + 0.5,
      y: rowY,
      w: colWidths[3] - 0.1,
      h: rowHeight,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      align: 'center',
      valign: 'middle'
    });

    // 员工感受
    slide.addText(item.employeeFeeling, {
      x: startX + colWidths[1] + colWidths[2] + colWidths[3] + cardGap * 3 + 0.4,
      y: rowY,
      w: colWidths[4] - 0.1,
      h: rowHeight,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.accent,
      italic: true,
      align: 'center',
      valign: 'middle'
    });
  });

  // ========== 关键洞察底部卡片 ==========
  const calloutY = 4.65;

  // 背景条
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: calloutY,
    w: 9,
    h: 0.6,
    fill: { color: theme.accent, transparency: 88 },
    line: { color: theme.accent, width: 1.5 },
    rectRadius: 0.08
  });

  // 左侧强调标记
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: calloutY,
    w: 0.12,
    h: 0.6,
    fill: { color: theme.accent }
  });

  // 关键洞察文字
  slide.addText([
    { text: '关键洞察  ', options: { bold: true, color: theme.accent } },
    { text: '绝大多数企业目前处于 L2-L3 之间', options: { bold: false, color: theme.secondary } }
  ], {
    x: 0.8,
    y: calloutY,
    w: 8.5,
    h: 0.6,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    align: 'left',
    valign: 'middle'
  });

  // ========== 底部装饰点 ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.4,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.68,
    y: 5.4,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.86,
    y: 5.4,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.light }
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig
};
