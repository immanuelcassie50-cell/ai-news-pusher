// slide-11.js - 管理者的三重角色冲突（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 11,
  title: '管理者的三重角色冲突'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('管理者的三重角色冲突', {
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
  slide.addText('THREE CONFLICTING ROLES OF MANAGERS', {
    x: 0.5,
    y: 0.95,
    w: 9,
    h: 0.35,
    fontSize: 11,
    fontFace: 'Arial',
    color: theme.secondary,
    align: 'left',
    valign: 'middle',
    charSpacing: 2
  });

  // ========== 装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.35,
    w: 1.0,
    h: 0.035,
    fill: { color: theme.accent }
  });

  // ========== 三个角色区域 ==========
  const circleY = 2.0;
  const circleHeight = 1.9;
  const overlapX = 0.15; // overlap amount

  // Role 1: 效率执行者 (左侧 - System/HR side)
  const role1X = 0.5;

  // Role 1 背景椭圆
  slide.addShape(pres.ShapeType.ellipse, {
    x: role1X,
    y: circleY,
    w: 3.0,
    h: circleHeight,
    fill: { color: theme.primary, transparency: 12 },
    line: { color: theme.primary, width: 1.5 }
  });

  // Role 1 标题
  slide.addText('效率执行者', {
    x: role1X,
    y: circleY + 0.15,
    w: 3.0,
    h: 0.45,
    fontSize: 16,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // Role 1 副标题
  slide.addText('System / HR 立场', {
    x: role1X,
    y: circleY + 0.55,
    w: 3.0,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'center',
    valign: 'middle'
  });

  // Role 1 引用语
  slide.addText('"用AI提效，我负责执行就行"', {
    x: role1X + 0.15,
    y: circleY + 0.9,
    w: 2.7,
    h: 0.4,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    italic: true,
    align: 'center',
    valign: 'middle'
  });

  // Role 1 说明
  slide.addText('这是HR和系统希望你承担的', {
    x: role1X + 0.15,
    y: circleY + 1.3,
    w: 2.7,
    h: 0.35,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    align: 'center',
    valign: 'middle'
  });

  // Role 2: 为薪酬结果负责 (中间 - 核心角色)
  const role2X = 3.35 - overlapX;

  // Role 2 背景椭圆（稍大，视觉中心）
  slide.addShape(pres.ShapeType.ellipse, {
    x: role2X,
    y: circleY - 0.1,
    w: 3.3,
    h: circleHeight + 0.2,
    fill: { color: theme.accent, transparency: 15 },
    line: { color: theme.accent, width: 2 }
  });

  // Role 2 标题
  slide.addText('为薪酬结果负责', {
    x: role2X,
    y: circleY + 0.1,
    w: 3.3,
    h: 0.5,
    fontSize: 17,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // Role 2 副标题
  slide.addText('Manager 核心职责', {
    x: role2X,
    y: circleY + 0.55,
    w: 3.3,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'center',
    valign: 'middle'
  });

  // Role 2 引用语
  slide.addText('"我为薪酬结果向员工负责"', {
    x: role2X + 0.15,
    y: circleY + 0.95,
    w: 3.0,
    h: 0.4,
    fontSize: 12,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    italic: true,
    align: 'center',
    valign: 'middle'
  });

  // Role 2 说明
  slide.addText('这是你自己需要主动承担的', {
    x: role2X + 0.15,
    y: circleY + 1.4,
    w: 3.0,
    h: 0.35,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // Role 3: 信任守门人 (右侧 - Employee side)
  const role3X = 6.5 - overlapX * 2;

  // Role 3 背景椭圆
  slide.addShape(pres.ShapeType.ellipse, {
    x: role3X,
    y: circleY,
    w: 3.0,
    h: circleHeight,
    fill: { color: theme.secondary, transparency: 12 },
    line: { color: theme.secondary, width: 1.5 }
  });

  // Role 3 标题
  slide.addText('信任守门人', {
    x: role3X,
    y: circleY + 0.15,
    w: 3.0,
    h: 0.45,
    fontSize: 16,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // Role 3 副标题
  slide.addText('Employee 立场', {
    x: role3X,
    y: circleY + 0.55,
    w: 3.0,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'center',
    valign: 'middle'
  });

  // Role 3 引用语
  slide.addText('"我要让员工理解并接受这个决定"', {
    x: role3X + 0.15,
    y: circleY + 0.9,
    w: 2.7,
    h: 0.4,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    italic: true,
    align: 'center',
    valign: 'middle'
  });

  // Role 3 说明
  slide.addText('这是员工希望你承担的', {
    x: role3X + 0.15,
    y: circleY + 1.3,
    w: 2.7,
    h: 0.35,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    align: 'center',
    valign: 'middle'
  });

  // ========== 关键张力陈述 ==========
  const tensionY = 4.15;

  // 张力区域背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: tensionY,
    w: 9,
    h: 1.15,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 0 },
    rectRadius: 0.1
  });

  // 左侧强调标记
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: tensionY,
    w: 0.1,
    h: 1.15,
    fill: { color: theme.accent }
  });

  // 张力标题
  slide.addText('三个角色之间存在天然张力：', {
    x: 0.8,
    y: tensionY + 0.08,
    w: 8.5,
    h: 0.35,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 张力内容 - 三行
  slide.addText([
    { text: '• 你想快点完成流程（效率）', options: { color: theme.secondary } },
    { text: '  vs  ', options: { color: theme.accent } },
    { text: '员工想多聊几句（信任）', options: { color: theme.secondary } }
  ], {
    x: 0.8,
    y: tensionY + 0.38,
    w: 8.5,
    h: 0.25,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    align: 'left',
    valign: 'middle'
  });

  slide.addText([
    { text: '• 系统希望你"按建议执行"', options: { color: theme.secondary } },
    { text: '  vs  ', options: { color: theme.accent } },
    { text: '员工希望你"为他争取"', options: { color: theme.secondary } }
  ], {
    x: 0.8,
    y: tensionY + 0.6,
    w: 8.5,
    h: 0.25,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    align: 'left',
    valign: 'middle'
  });

  slide.addText([
    { text: '• 你觉得自己"只是个传达者"', options: { color: theme.secondary } },
    { text: '  vs  ', options: { color: theme.accent } },
    { text: '员工觉得"你就是决策者"', options: { color: theme.secondary } }
  ], {
    x: 0.8,
    y: tensionY + 0.82,
    w: 8.5,
    h: 0.25,
    fontSize: 11,
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
