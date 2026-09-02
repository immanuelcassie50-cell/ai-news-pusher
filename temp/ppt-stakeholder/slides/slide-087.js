// slide-087.js - 陈静：维度二岗位利益
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addBulletList } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  示范  /  维度②', theme.primary);
  addContentTitle(slide, '陈静  /  维度② 岗位利益分析', '四个问题逐个回答，画像立刻变得可预测');

  // 四个核心问题
  const items = [
    { title: '问题一：KPI与绩效压力', desc: '系统稳定性（故障率）+ 重点项目按期交付率。人手不足被业务"插队"，统报系统直接符合她"减少数据重复处理"的年度目标。' },
    { title: '问题二：汇报链', desc: '直线上级是集团CTO；横向汇报大区总经理赵磊。赵磊的态度会大大减少其他部门在"IT排期"上给她的压力。' },
    { title: '问题三：核心工作目标', desc: '未来两年推动华北区IT从"救火型"向"规划型"转变。统报系统是她推动这个转变的可见成果之一。' },
    { title: '问题四：项目对她的影响', desc: '成功 = 年度汇报亮点 + 数据清洗减少 + 集团IT体系留痕；失败 = 团队白消耗 + 年终缺拿得出手的项目。' }
  ];
  addBulletList(slide, items, { x: 0.6, y: 1.7, itemH: 0.78, gap: 0.1, w: 8.8 });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 5.0, w: 9, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('画像的核心：把"她会不会支持"变成"她的KPI和这个项目的关系是什么"。', {
    x: 0.7, y: 5.0, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
