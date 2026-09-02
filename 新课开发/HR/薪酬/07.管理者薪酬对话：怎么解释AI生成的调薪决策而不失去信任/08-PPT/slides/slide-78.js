// slide-78.js - 结束页：谢谢
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'closing',
  index: 78,
  title: '谢谢'
};

/**
 * 创建结束页幻灯片
 * @param {pptxgen} pres - PPTxGenJS 实例
 * @param {Object} theme - 主题配色
 */
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // 设置暖白背景
  slide.background = { color: theme.bg };

  // ==================== 装饰几何图形 ====================

  // 左上角大型深红色矩形块
  slide.addShape(pres.ShapeType.rect, {
    x: -0.5,
    y: -0.4,
    w: 3.2,
    h: 2.5,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  // 左上角浅粉灰矩形点缀
  slide.addShape(pres.ShapeType.rect, {
    x: 0.3,
    y: 1.8,
    w: 1.8,
    h: 1.2,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  // 右下角大型深红色矩形块
  slide.addShape(pres.ShapeType.rect, {
    x: 7.8,
    y: 3.8,
    w: 2.8,
    h: 2.3,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  // 右下角暖红矩形点缀
  slide.addShape(pres.ShapeType.rect, {
    x: 6.8,
    y: 4.2,
    w: 1.5,
    h: 1.2,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  // 右上角细长水平线装饰
  slide.addShape(pres.ShapeType.rect, {
    x: 7.5,
    y: 1.0,
    w: 2.0,
    h: 0.05,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 8.0,
    y: 1.2,
    w: 1.4,
    h: 0.03,
    fill: { color: theme.light }
  });

  // 中间装饰小方块
  slide.addShape(pres.ShapeType.rect, {
    x: 4.6,
    y: 0.5,
    w: 0.5,
    h: 0.5,
    fill: { color: theme.light },
    rectRadius: 0.05
  });

  // ==================== 主标题：谢谢 ====================

  slide.addText('谢谢', {
    x: 0,
    y: 1.4,
    w: 10,
    h: 1.4,
    fontSize: 80,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'center'
  });

  // 标题下方强调线
  slide.addShape(pres.ShapeType.rect, {
    x: 4.0,
    y: 2.75,
    w: 2.0,
    h: 0.06,
    fill: { color: theme.accent }
  });

  // ==================== 核心信息区域 ====================

  // 主信息卡片背景
  slide.addShape(pres.ShapeType.rect, {
    x: 1.5,
    y: 3.1,
    w: 7.0,
    h: 1.3,
    fill: { color: theme.light },
    rectRadius: 0.1
  });

  // 主信息文字
  slide.addText('薪酬公平最终要靠管理者讲清楚道理', {
    x: 1.5,
    y: 3.2,
    w: 7.0,
    h: 0.6,
    fontSize: 22,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'center'
  });

  // 副标题
  slide.addText('让每一次薪酬对话，都成为一次信任的存款', {
    x: 1.5,
    y: 3.75,
    w: 7.0,
    h: 0.5,
    fontSize: 16,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'center'
  });

  // ==================== 行动号召区域 ====================

  // CTA 背景条
  slide.addShape(pres.ShapeType.rect, {
    x: 1.2,
    y: 4.55,
    w: 7.6,
    h: 0.75,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  // CTA 文字
  slide.addText([
    { text: '下次调薪季，主动坐下来，花十五分钟', options: { breakLine: true } },
    { text: '把决策背后的逻辑、你对员工的个人认可，以及对未来发展的期待，完整地传递出去' }
  ], {
    x: 1.4,
    y: 4.6,
    w: 7.2,
    h: 0.65,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    align: 'center',
    valign: 'middle'
  });

  // ==================== 底部联系信息 ====================

  // 底部细线
  slide.addShape(pres.ShapeType.rect, {
    x: 3.0,
    y: 5.45,
    w: 4.0,
    h: 0.012,
    fill: { color: theme.light }
  });

  // 联系信息
  slide.addText('如有更多问题，欢迎与培训团队联系', {
    x: 0,
    y: 5.55,
    w: 10,
    h: 0.4,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'center'
  });

  return slide;
}

// 单独预览模式
if (require.main === module) {
  const pptxgen = require('pptxgenjs');
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';

  const theme = {
    primary: "8B2635",
    secondary: "4A4A4A",
    accent: "C45C3E",
    light: "D4C5C5",
    bg: "FAF8F7"
  };

  createSlide(pres, theme);

  const outputPath = 'D:/CC/新课开发/HR/薪酬/07.管理者薪酬对话：怎么解释AI生成的调薪决策而不失去信任/08-PPT/slides/output/slide-78-preview.pptx';
  pres.writeFile({ fileName: outputPath })
    .then(() => {
      console.log('Preview saved:', outputPath);
    })
    .catch(err => {
      console.error('Preview failed:', err.message);
    });
}

module.exports = { createSlide, slideConfig };
