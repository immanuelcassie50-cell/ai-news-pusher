// slide-070.js - 性格 vs 岗位利益（对比表）
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addCompareTable } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像', theme.primary);
  addContentTitle(slide, '性格 vs 岗位利益：分析起点的选择', '性格是第二层，岗位利益是基础');

  const rows = [
    { left: '「他比较保守」', right: '他的KPI是系统稳定性，新方案会增加故障风险' },
    { left: '「她很强势」', right: '她直线上级是CFO，最怕出现合规问题' },
    { left: '「这人不好打交道」', right: '他的核心目标是把团队从救火型转向规划型' },
    { left: '主观判断，依赖个人印象', right: '客观信息，可通过组织情况推断' },
    { left: '难以预测行为模式', right: '可预判在项目中的真实反应' },
    { left: '沟通风格补充信息', right: '分析的起点和基础' }
  ];
  addCompareTable(slide, rows, {
    x: 0.5, y: 1.75, colW: 4.35, rowH: 0.5,
    leftTitle: '性格描述（参考价值有限）',
    rightTitle: '岗位利益（分析的基础）'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
