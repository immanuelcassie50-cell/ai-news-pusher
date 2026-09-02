// slide-01.js - 封面页：管理者薪酬对话
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '管理者薪酬对话'
};

/**
 * 创建封面页幻灯片
 * @param {pptxgen} pres - PPTxGenJS 实例
 * @param {Object} theme - 主题配色
 */
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // 设置暖白背景
  slide.background = { color: theme.bg };

  // ==================== 右侧装饰几何图形 ====================

  // 大型深红色矩形块 - 右上角
  slide.addShape(pres.ShapeType.rect, {
    x: 6.8,
    y: -0.3,
    w: 3.8,
    h: 2.8,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  // 中等暖红矩形 - 右侧中部
  slide.addShape(pres.ShapeType.rect, {
    x: 7.5,
    y: 2.6,
    w: 2.5,
    h: 1.8,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });

  // 浅粉灰矩形 - 右下角装饰
  slide.addShape(pres.ShapeType.rect, {
    x: 8.2,
    y: 4.5,
    w: 2.2,
    h: 1.5,
    fill: { color: theme.light },
    rectRadius: 0.12
  });

  // 小型深红方块 - 点缀
  slide.addShape(pres.ShapeType.rect, {
    x: 6.2,
    y: 3.8,
    w: 0.8,
    h: 0.8,
    fill: { color: theme.primary },
    rectRadius: 0.05
  });

  // 细长水平线条装饰 - 右上方
  slide.addShape(pres.ShapeType.rect, {
    x: 5.5,
    y: 1.2,
    w: 1.2,
    h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 6.0,
    y: 1.45,
    w: 0.7,
    h: 0.04,
    fill: { color: theme.light }
  });

  // 垂直线条装饰 - 右侧
  slide.addShape(pres.ShapeType.rect, {
    x: 5.8,
    y: 2.0,
    w: 0.05,
    h: 1.5,
    fill: { color: theme.accent }
  });

  // ==================== 左侧标题区域 ====================

  // 主标题
  slide.addText('管理者薪酬对话', {
    x: 0.6,
    y: 1.6,
    w: 5.5,
    h: 1.2,
    fontSize: 60,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true
  });

  // 水平强调线 - 标题下方
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 2.85,
    w: 2.0,
    h: 0.08,
    fill: { color: theme.accent }
  });

  // 副标题
  slide.addText('怎么解释AI生成的调薪决策而不失去信任', {
    x: 0.6,
    y: 3.15,
    w: 5.5,
    h: 0.8,
    fontSize: 28,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // ==================== 底部信息区域 ====================

  // 底部细线分隔
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 5.0,
    w: 4.5,
    h: 0.015,
    fill: { color: theme.light }
  });

  // 课程信息
  slide.addText('HR薪酬管理精品课', {
    x: 0.6,
    y: 5.15,
    w: 3,
    h: 0.35,
    fontSize: 16,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // 年份
  slide.addText('2026', {
    x: 3.8,
    y: 5.15,
    w: 0.8,
    h: 0.35,
    fontSize: 16,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left'
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

  const outputPath = 'D:/CC/新课开发/HR/薪酬/07.管理者薪酬对话：怎么解释AI生成的调薪决策而不失去信任/08-PPT/slides/output/slide-01-preview.pptx';
  pres.writeFile({ fileName: outputPath })
    .then(() => {
      console.log('Preview saved:', outputPath);
    })
    .catch(err => {
      console.error('Preview failed:', err.message);
    });
}

module.exports = { createSlide, slideConfig };
