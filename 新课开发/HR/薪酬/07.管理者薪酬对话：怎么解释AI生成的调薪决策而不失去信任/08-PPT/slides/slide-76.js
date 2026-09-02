// slide-76.js - 课程全程回顾（总结页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'summary',
  index: 76,
  title: '课程全程回顾'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题区域 ==========
  slide.addText('课程全程回顾', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.7,
    fontSize: 32,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 英文副标题
  slide.addText('COMPLETE COURSE REVIEW', {
    x: 0.5,
    y: 0.95,
    w: 4,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Arial',
    color: theme.secondary,
    align: 'left',
    valign: 'middle',
    charSpacing: 3
  });

  // 标题下装饰线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.3,
    w: 1.5,
    h: 0.04,
    fill: { color: theme.accent }
  });

  // ========== 六模块阶梯布局 ==========
  const moduleData = [
    {
      num: '01',
      title: 'AI时代的薪酬对话新格局',
      details: ['理解AI为什么让薪酬对话变复杂了', '员工担忧的四个类型', '管理者三重角色冲突'],
      color: theme.primary
    },
    {
      num: '02',
      title: '调薪决策的双轨结构',
      details: ['AI数据轨：市场标杆、带宽、绩效关联、潜力评估', '人工判断轨：业务考量、团队平衡、未来潜力、特殊贡献', '双轨说明卡的使用方法'],
      color: theme.accent
    },
    {
      num: '03',
      title: '三步信任重建法',
      details: ['透明披露 → 逻辑呈现 → 情感连接', '每一步的话术模板'],
      color: theme.secondary
    },
    {
      num: '04',
      title: '薪酬对话场景实战',
      details: ['5个常见场景的完整对话模板', '年度调薪、晋升调薪、绩效关联、市场偏低、员工质疑AI'],
      color: theme.primary
    },
    {
      num: '05',
      title: '应对质疑与异议',
      details: ['异议处理四步法：倾听 → 共情 → 解释 → 承诺', '4种典型员工"刺话"的应对策略'],
      color: theme.accent
    },
    {
      num: '06',
      title: '持续信任维护机制',
      details: ['日常沟通的三个原则', '从"解释者"到"共建者"的升级路径', '年度薪酬沟通计划'],
      color: theme.secondary
    }
  ];

  // 左右两列布局
  const col1X = 0.5;
  const col2X = 5.0;
  const startY = 1.55;
  const cardWidth = 4.3;
  const cardGap = 0.18;

  moduleData.forEach((mod, idx) => {
    const col = idx < 3 ? 0 : 1;
    const row = idx % 3;
    const x = col === 0 ? col1X : col2X;
    const y = startY + row * (1.15 + cardGap);

    // 卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: x,
      y: y,
      w: cardWidth,
      h: 1.15,
      fill: { color: 'FFFFFF' },
      line: { color: theme.light, width: 0.8 },
      rectRadius: 0.08,
      shadow: { type: 'outer', blur: 3, offset: 1, angle: 45, color: theme.secondary, opacity: 0.08 }
    });

    // 左侧色块条
    slide.addShape(pres.ShapeType.rect, {
      x: x,
      y: y,
      w: 0.06,
      h: 1.15,
      fill: { color: mod.color }
    });

    // 序号圆圈
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.18,
      y: y + 0.15,
      w: 0.35,
      h: 0.35,
      fill: { color: mod.color }
    });

    slide.addText(mod.num, {
      x: x + 0.18,
      y: y + 0.15,
      w: 0.35,
      h: 0.35,
      fontSize: 11,
      fontFace: 'Arial',
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 模块标题
    slide.addText(mod.title, {
      x: x + 0.6,
      y: y + 0.1,
      w: cardWidth - 0.75,
      h: 0.32,
      fontSize: 12,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // 模块详情（合并为一行，用分隔符）
    const detailsText = mod.details.join(' | ');
    slide.addText(detailsText, {
      x: x + 0.6,
      y: y + 0.45,
      w: cardWidth - 0.75,
      h: 0.6,
      fontSize: 8,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      align: 'left',
      valign: 'top',
      lineSpacingMultiple: 1.3
    });
  });

  // ========== 连接箭头装饰 ==========
  // 左列箭头（向下）
  slide.addText('▼', {
    x: col1X + cardWidth / 2 - 0.15,
    y: startY + 1.15 + 0.02,
    w: 0.3,
    h: 0.2,
    fontSize: 10,
    color: theme.light,
    align: 'center',
    valign: 'middle'
  });

  slide.addText('▼', {
    x: col1X + cardWidth / 2 - 0.15,
    y: startY + 2.3 + 1.15 + 0.02,
    w: 0.3,
    h: 0.2,
    fontSize: 10,
    color: theme.light,
    align: 'center',
    valign: 'middle'
  });

  // 右列箭头（向下）
  slide.addText('▼', {
    x: col2X + cardWidth / 2 - 0.15,
    y: startY + 1.15 + 0.02,
    w: 0.3,
    h: 0.2,
    fontSize: 10,
    color: theme.light,
    align: 'center',
    valign: 'middle'
  });

  slide.addText('▼', {
    x: col2X + cardWidth / 2 - 0.15,
    y: startY + 2.3 + 1.15 + 0.02,
    w: 0.3,
    h: 0.2,
    fontSize: 10,
    color: theme.light,
    align: 'center',
    valign: 'middle'
  });

  // ========== 核心公式区域 ==========
  const formulaY = 4.85;

  // 公式背景框
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: formulaY,
    w: 8.8,
    h: 0.65,
    fill: { color: theme.primary, transparency: 6 },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  // 公式图标背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.65,
    y: formulaY + 0.1,
    w: 0.45,
    h: 0.45,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  // 公式图标文字
  slide.addText('✦', {
    x: 0.65,
    y: formulaY + 0.1,
    w: 0.45,
    h: 0.45,
    fontSize: 18,
    color: 'FFFFFF',
    align: 'center',
    valign: 'middle'
  });

  // 公式标签
  slide.addText('核心公式', {
    x: 1.25,
    y: formulaY + 0.08,
    w: 1.2,
    h: 0.25,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'middle'
  });

  // 公式内容
  slide.addText('薪酬公平 = 透明的双轨说明 + 信任重建三步法 + 持续的日常关系经营', {
    x: 1.25,
    y: formulaY + 0.3,
    w: 7.8,
    h: 0.3,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 底部装饰 ==========
  // 左下角三个小圆点
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.6,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.65,
    y: 5.6,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.8,
    y: 5.6,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.light }
  });

  // 右侧装饰线条
  slide.addShape(pres.ShapeType.rect, {
    x: 8.8,
    y: 5.3,
    w: 0.5,
    h: 0.03,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 9.0,
    y: 5.4,
    w: 0.3,
    h: 0.03,
    fill: { color: theme.accent, transparency: 50 }
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

  const outputPath = 'D:/CC/新课开发/HR/薪酬/07.管理者薪酬对话：怎么解释AI生成的调薪决策而不失去信任/08-PPT/slides/output/slide-76-preview.pptx';
  pres.writeFile({ fileName: outputPath })
    .then(() => {
      console.log('Preview saved:', outputPath);
    })
    .catch(err => {
      console.error('Preview failed:', err.message);
    });
}

module.exports = { createSlide, slideConfig, theme };
