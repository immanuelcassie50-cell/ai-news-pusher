#!/usr/bin/env python3
"""Create compile.js for PPTX and run it"""

import os

output_dir = r'D:\新课开发\变革管理\12-抵抗信号的早期识别：变革失败之前，组织早就发出过警告\完整课程包\08-成果demo\slides'
output_pptx = os.path.join(output_dir, 'output')
final_pptx = r'D:\新课开发\变革管理\12-抵抗信号的早期识别：变革失败之前，组织早就发出过警告\完整课程包\08-成果demo\05-课程学习成果展示.pptx'

os.makedirs(output_pptx, exist_ok=True)

compile_js = r'''const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

// Theme: 浅底红灰配色
const theme = {
  primary: '2c2c2c',
  secondary: '5a5a5a',
  accent: 'c43c3c',
  light: 'e8e8e8',
  bg: 'ffffff'
};

// ========== Slide 1: Cover ==========
(function() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.15,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.475, w: 10, h: 0.15,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 1.8, w: 0.08, h: 2.0,
    fill: { color: theme.accent }
  });

  slide.addText('课程学习成果展示', {
    x: 1.1, y: 1.8, w: 7.5, h: 1.0,
    fontSize: 40, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true
  });

  slide.addText('抵抗信号的早期识别：变革失败之前，组织早就发出过警告', {
    x: 1.1, y: 2.8, w: 7.5, h: 0.6,
    fontSize: 18, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  slide.addText('变革管理系列课程 · 第12讲', {
    x: 1.1, y: 3.6, w: 7.5, h: 0.5,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: theme.accent
  });

  slide.addText('完整课程包 · 成果demo', {
    x: 1.1, y: 4.8, w: 7.5, h: 0.4,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });
})();

// ========== Slide 2: Table of Contents ==========
(function() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('2', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText('目录', {
    x: 0.7, y: 0.4, w: 3, h: 0.5,
    fontSize: 24, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true
  });

  const tocItems = [
    { num: '01', title: '变革背景', desc: '数字化转型的必然趋势与挑战' },
    { num: '02', title: '抵抗信号识别', desc: '四维度预警指标体系' },
    { num: '03', title: '分析与洞察', desc: '信号背后的深层原因' },
    { num: '04', title: '行动计划', desc: '系统性响应策略' },
    { num: '05', title: '总结', desc: '关键要点回顾' }
  ];

  tocItems.forEach((item, i) => {
    const y = 1.3 + i * 0.8;

    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: 0.7, y: y, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: 'Arial',
      color: 'FFFFFF', bold: true,
      align: 'center', valign: 'middle'
    });

    slide.addText(item.title, {
      x: 1.4, y: y, w: 3, h: 0.3,
      fontSize: 18, fontFace: 'Microsoft YaHei',
      color: theme.primary, bold: true
    });

    slide.addText(item.desc, {
      x: 1.4, y: y + 0.3, w: 6, h: 0.3,
      fontSize: 12, fontFace: 'Microsoft YaHei',
      color: theme.secondary
    });
  });
})();

// ========== Slide 3: 变革背景 ==========
(function() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('3', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText('变革背景', {
    x: 0.7, y: 0.4, w: 4, h: 0.5,
    fontSize: 24, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true
  });

  slide.addText('为什么要变革？', {
    x: 0.5, y: 1.2, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: theme.accent, bold: true
  });

  const leftPoints = [
    '市场竞争加剧，利润空间压缩',
    '客户需求快速迭代',
    '新技术不断涌现',
    '组织效率提升的迫切需要'
  ];
  leftPoints.forEach((p, i) => {
    slide.addText(p, {
      x: 0.5, y: 1.7 + i * 0.5, w: 4.5, h: 0.45,
      fontSize: 14, fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bullet: { type: 'bullet', color: theme.accent }
    });
  });

  slide.addText('为什么会抵抗？', {
    x: 5.2, y: 1.2, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: theme.accent, bold: true
  });

  const rightPoints = [
    '对未知的恐惧和不确定性',
    '既有利益和习惯的惯性',
    '技能过时的担忧',
    '缺乏参与感和认同感'
  ];
  rightPoints.forEach((p, i) => {
    slide.addText(p, {
      x: 5.2, y: 1.7 + i * 0.5, w: 4.5, h: 0.45,
      fontSize: 14, fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bullet: { type: 'bullet', color: theme.accent }
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addText('核心观点：抵抗信号不是变革的敌人，而是改进的机会。识别信号、响应信号，是变革管理者的核心能力。', {
    x: 0.7, y: 4.2, w: 8.6, h: 1.0,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: theme.primary,
    valign: 'middle'
  });
})();

// ========== Slide 4: 抵抗信号识别 ==========
(function() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('4', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText('抵抗信号识别 — 四维度预警体系', {
    x: 0.7, y: 0.4, w: 8, h: 0.5,
    fontSize: 24, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true
  });

  const dimensions = [
    { title: '行为维度', items: ['会议参与度下降', '沟通模式改变', '工作主动性降低'], color: 'c43c3c' },
    { title: '财务维度', items: ['费用执行率低', '审批周期延长', '资源投入不足'], color: 'd46666' },
    { title: '组织维度', items: ['人员流动意向', '协作意愿下降', '培训参与度低'], color: '8b4444' },
    { title: '沟通维度', items: ['反馈质量下降', '非正式渠道活跃', '负面词汇增加'], color: 'aa5555' }
  ];

  dimensions.forEach((dim, i) => {
    const x = 0.5 + i * 2.4;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: 2.2, h: 3.8,
      fill: { color: theme.light }
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: 2.2, h: 0.6,
      fill: { color: dim.color }
    });
    slide.addText(dim.title, {
      x: x, y: 1.2, w: 2.2, h: 0.6,
      fontSize: 14, fontFace: 'Microsoft YaHei',
      color: 'FFFFFF', bold: true,
      align: 'center', valign: 'middle'
    });

    dim.items.forEach((item, j) => {
      slide.addText('• ' + item, {
        x: x + 0.1, y: 2.0 + j * 0.8, w: 2.0, h: 0.7,
        fontSize: 11, fontFace: 'Microsoft YaHei',
        color: theme.secondary,
        valign: 'top'
      });
    });
  });
})();

// ========== Slide 5: 分析与洞察 ==========
(function() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('5', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText('分析与洞察', {
    x: 0.7, y: 0.4, w: 4, h: 0.5,
    fontSize: 24, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true
  });

  const insights = [
    {
      title: '表面是抵触，深层是焦虑',
      content: '员工并非反对变革本身，而是对变革带来的不确定性感到担忧。尤其是技能被替代的恐惧，是变革抵抗的核心情绪。'
    },
    {
      title: '信号聚合效应',
      content: '单一信号可能是偶发，但多维度信号同时出现，则强烈暗示组织正在经历结构性抵抗，需要系统性响应。'
    },
    {
      title: '沉默不是认同',
      content: '会议中的沉默、回避正式反馈，往往意味着员工在观望或有不安全感。建立安全的反馈机制是识别真实声音的关键。'
    }
  ];

  insights.forEach((ins, i) => {
    const y = 1.2 + i * 1.4;

    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: 'Arial',
      color: 'FFFFFF', bold: true,
      align: 'center', valign: 'middle'
    });

    slide.addText(ins.title, {
      x: 1.1, y: y, w: 8, h: 0.4,
      fontSize: 16, fontFace: 'Microsoft YaHei',
      color: theme.primary, bold: true
    });

    slide.addText(ins.content, {
      x: 1.1, y: y + 0.45, w: 8, h: 0.9,
      fontSize: 12, fontFace: 'Microsoft YaHei',
      color: theme.secondary
    });
  });
})();

// ========== Slide 6: 行动计划 ==========
(function() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('6', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText('行动计划 — 系统性响应策略', {
    x: 0.7, y: 0.4, w: 8, h: 0.5,
    fontSize: 24, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true
  });

  const phases = [
    {
      phase: '立即行动',
      timeframe: '0-2周',
      items: ['召开部门负责人专题会', '启动关键人物一对一沟通', '加强联席沟通频率']
    },
    {
      phase: '短期措施',
      timeframe: '1个月内',
      items: ['优化培训方案，增加实操', '建立正向反馈激励机制', '设立过渡期缓冲机制']
    },
    {
      phase: '中长期策略',
      timeframe: '持续',
      items: ['构建持续沟通机制', '培养内部变革大使', '将变革管理纳入绩效考核']
    }
  ];

  phases.forEach((ph, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: 2.9, h: 0.7,
      fill: { color: theme.accent }
    });
    slide.addText(ph.phase + '  |  ' + ph.timeframe, {
      x: x, y: 1.2, w: 2.9, h: 0.7,
      fontSize: 14, fontFace: 'Microsoft YaHei',
      color: 'FFFFFF', bold: true,
      align: 'center', valign: 'middle'
    });

    ph.items.forEach((item, j) => {
      slide.addText('->  ' + item, {
        x: x + 0.1, y: 2.1 + j * 0.7, w: 2.7, h: 0.6,
        fontSize: 12, fontFace: 'Microsoft YaHei',
        color: theme.secondary,
        valign: 'top'
      });
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.9,
    fill: { color: theme.light }
  });
  slide.addText('核心原则：响应抵抗不是为了消除异议，而是为了让变革更具包容性，让组织在变化中保持韧性。', {
    x: 0.7, y: 4.3, w: 8.6, h: 0.9,
    fontSize: 13, fontFace: 'Microsoft YaHei',
    color: theme.primary,
    valign: 'middle'
  });
})();

// ========== Slide 7: 总结 ==========
(function() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('7', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText('总结', {
    x: 0.7, y: 0.4, w: 4, h: 0.5,
    fontSize: 24, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true
  });

  const takeaways = [
    '抵抗信号是组织变革的正常组成部分，不代表失败',
    '四维度预警体系帮助系统性识别信号：行为、财务、组织、沟通',
    '信号聚合效应比单一信号更值得关注',
    '响应抵抗的关键是建立心理安全感，让真实声音被听见',
    '变革管理是持续过程，而非一次性事件'
  ];

  takeaways.forEach((t, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: 1.2 + i * 0.65, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: 1.2 + i * 0.65, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: 'Arial',
      color: 'FFFFFF', bold: true,
      align: 'center', valign: 'middle'
    });
    slide.addText(t, {
      x: 1.0, y: 1.2 + i * 0.65, w: 8, h: 0.5,
      fontSize: 14, fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      valign: 'middle'
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.8,
    fill: { color: theme.accent }
  });
  slide.addText('"领先一步，枪打出头鸟；落后半步，别人牵牛我拔桩；领先半步，吃尽红利"', {
    x: 0.7, y: 4.5, w: 8.6, h: 0.8,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });
})();

pres.writeFile({ fileName: r'%s' })
  .then(() => console.log('Created: %s'))
  .catch(err => { console.error(err); process.exit(1); });
''' % (output_pptx.replace('\\', '\\\\'), final_pptx.replace('\\', '\\\\'))

compile_path = os.path.join(output_dir, 'compile.js')
with open(compile_path, 'w', encoding='utf-8') as f:
    f.write(compile_js)

print(f'Written: {compile_path}')
