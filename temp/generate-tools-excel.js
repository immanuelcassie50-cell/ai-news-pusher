const ExcelJS = require('exceljs');

const outputPath = 'D:/新课开发/服务和体验/系列课/4.探索提议行动确认：MOT四步法的AI协同版/04_工具表单/MOT四步法AI协同版_工具表单.xlsx';

const wb = new ExcelJS.Workbook();
wb.creator = 'MOT四步法AI协同版';
wb.created = new Date();

// 主题色
const colors = {
  primary: '2b2d42',
  secondary: '8d99ae',
  accent: 'ef233c',
  light: 'edf2f4',
  bg: 'f8f9fa'
};

// ==================== Sheet 1: 探索阶段检查表 ====================
const ws1 = wb.addWorksheet('探索Explore');
ws1.properties.tabColor = { argb: 'FF' + colors.accent };

// 标题行
ws1.mergeCells('A1:E1');
ws1.getCell('A1').value = '阶段一：探索 Explore';
ws1.getCell('A1').style = { font: { bold: true, size: 14, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center', vertical: 'middle' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
ws1.getRow(1).height = 30;

// 表头
const headers1 = ['序号', '检查项', '完成情况', '备注', '责任'];
ws1.addRow(headers1);
ws1.getRow(2).eachCell(cell => {
  cell.style = { font: { bold: true, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
});

// 检查项数据
const exploreData = [
  [1, '客户问题/需求已明确表述', '', '', '人'],
  [2, '三层提问已完成（事实→感受→需求）', '', '', '人'],
  [3, '客户关键信息已记录', '', '', 'AI辅助'],
  [4, '客户期望结果已确认', '', '', '人']
];

exploreData.forEach((row, i) => {
  const r = ws1.addRow(row);
  r.eachCell(cell => {
    cell.style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? 'FFF8F9FA' : 'FFEDf2f4' } } };
  });
  r.getCell(5).style = { font: { color: { argb: 'FF' + colors.accent } } };
});

// 三层提问框架
ws1.mergeCells('A7:E7');
ws1.getCell('A7').value = '三层提问框架';
ws1.getCell('A7').style = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.light } } };

const frameworkData = [
  ['层次', '问题类型', '示例问题', '', ''],
  ['事实层', '发生了什么', '具体是什么情况？', '', ''],
  ['感受层', '您感觉如何', '这对您有什么困扰？', '', ''],
  ['需求层', '您希望怎样', '您希望我们怎么帮您？', '', '']
];
frameworkData.forEach(row => {
  const r = ws1.addRow(row);
  r.eachCell((cell, colNum) => {
    if (colNum <= 3) {
      cell.style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFFFF' } } };
    }
  });
});

// 探索记录区
ws1.mergeCells('A12:E12');
ws1.getCell('A12').value = '探索记录';
ws1.getCell('A12').style = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.light } } };

ws1.mergeCells('A13:E15');
ws1.getCell('A13').value = '客户描述的问题：\n\n\n';
ws1.getCell('A13').style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };

// 设置列宽
ws1.getColumn(1).width = 8;
ws1.getColumn(2).width = 35;
ws1.getColumn(3).width = 12;
ws1.getColumn(4).width = 25;
ws1.getColumn(5).width = 10;

// ==================== Sheet 2: 提议阶段检查表 ====================
const ws2 = wb.addWorksheet('提议Offer');
ws2.properties.tabColor = { argb: 'FF' + colors.secondary };

ws2.mergeCells('A1:E1');
ws2.getCell('A1').value = '阶段二：提议 Offer';
ws2.getCell('A1').style = { font: { bold: true, size: 14, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center', vertical: 'middle' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
ws2.getRow(1).height = 30;

const headers2 = ['序号', '检查项', '完成情况', '备注', '责任'];
ws2.addRow(headers2);
ws2.getRow(2).eachCell(cell => {
  cell.style = { font: { bold: true, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
});

const offerData = [
  [1, '方案已个性化（引用客户语言）', '', '', '人'],
  [2, '方案能解决客户核心问题', '', '', '人'],
  [3, '已说明方案的理由和价值', '', '', '人'],
  [4, '客户已确认理解并同意', '', '', '人']
];

offerData.forEach((row, i) => {
  const r = ws2.addRow(row);
  r.eachCell(cell => {
    cell.style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? 'FFF8F9FA' : 'FFEDf2f4' } } };
  });
  r.getCell(5).style = { font: { color: { argb: 'FF' + colors.accent } } };
});

// 个性化三要素
ws2.mergeCells('A7:E7');
ws2.getCell('A7').value = '个性化三要素';
ws2.getCell('A7').style = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.light } } };

const offerFramework = [
  ['要素', '说明', '示例', '', ''],
  ['引客户言', '引用客户说过的具体话', '"您刚才说账户异常..."', '', ''],
  ['解问题', '针对性地解决客户问题', '开通账户安全锁功能', '', ''],
  ['给理由', '说明方案的价值和原因', '因为这样可以避免...', '', '']
];
offerFramework.forEach(row => {
  const r = ws2.addRow(row);
  r.eachCell((cell, colNum) => {
    if (colNum <= 3) {
      cell.style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFFFF' } } };
    }
  });
});

// 提议方案区
ws2.mergeCells('A12:E12');
ws2.getCell('A12').value = '提议方案';
ws2.getCell('A12').style = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.light } } };

ws2.mergeCells('A13:E15');
ws2.getCell('A13').value = '方案内容：\n\n\n';
ws2.getCell('A13').style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };

ws2.getColumn(1).width = 8;
ws2.getColumn(2).width = 35;
ws2.getColumn(3).width = 12;
ws2.getColumn(4).width = 25;
ws2.getColumn(5).width = 10;

// ==================== Sheet 3: 行动阶段检查表 ====================
const ws3 = wb.addWorksheet('行动Act');
ws3.properties.tabColor = { argb: 'FF' + colors.accent };

ws3.mergeCells('A1:E1');
ws3.getCell('A1').value = '阶段三：行动 Act';
ws3.getCell('A1').style = { font: { bold: true, size: 14, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center', vertical: 'middle' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
ws3.getRow(1).height = 30;

const headers3 = ['时间节点', '承诺内容', '完成情况', '备注', '责任'];
ws3.addRow(headers3);
ws3.getRow(2).eachCell(cell => {
  cell.style = { font: { bold: true, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
});

const actData = [
  ['承诺确认时', '具体、可达成、有时限', '', '', '人'],
  ['进展中间点', '主动告知进度', '', '', 'AI辅助'],
  ['行动完成时', '结果已交付', '', '', '人'],
  ['回访确认时', '客户满意确认', '', '', '人']
];

actData.forEach((row, i) => {
  const r = ws3.addRow(row);
  r.eachCell(cell => {
    cell.style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? 'FFF8F9FA' : 'FFEDf2f4' } } };
  });
  r.getCell(5).style = { font: { color: { argb: 'FF' + colors.accent } } };
});

// 问题处理三步法
ws3.mergeCells('A7:E7');
ws3.getCell('A7').value = '问题处理三步法';
ws3.getCell('A7').style = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.light } } };

const problemSolving = [
  ['步骤', '方法', '说明', '', ''],
  ['1. 承认', '不推卸责任', '直面问题，不找借口', '', ''],
  ['2. 解决', '提供方案', '快速给出解决方案', '', ''],
  ['3. 预防', '避免复发', '分析原因，防止再发生', '', '']
];
problemSolving.forEach(row => {
  const r = ws3.addRow(row);
  r.eachCell((cell, colNum) => {
    if (colNum <= 3) {
      cell.style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFFFF' } } };
    }
  });
});

// 本次承诺区
ws3.mergeCells('A12:E12');
ws3.getCell('A12').value = '本次承诺';
ws3.getCell('A12').style = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.light } } };

ws3.mergeCells('A13:E15');
ws3.getCell('A13').value = '时间：                    内容：\n\n\n';
ws3.getCell('A13').style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };

ws3.getColumn(1).width = 15;
ws3.getColumn(2).width = 25;
ws3.getColumn(3).width = 12;
ws3.getColumn(4).width = 25;
ws3.getColumn(5).width = 10;

// ==================== Sheet 4: 确认阶段检查表 ====================
const ws4 = wb.addWorksheet('确认Confirm');
ws4.properties.tabColor = { argb: 'FF' + colors.accent };

ws4.mergeCells('A1:E1');
ws4.getCell('A1').value = '阶段四：确认 Confirm';
ws4.getCell('A1').style = { font: { bold: true, size: 14, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center', vertical: 'middle' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
ws4.getRow(1).height = 30;

const headers4 = ['序号', '四要素', '内容', '完成情况', '责任'];
ws4.addRow(headers4);
ws4.getRow(2).eachCell(cell => {
  cell.style = { font: { bold: true, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
});

const confirmData = [
  [1, '回顾', '回顾本次讨论要点', '', '人'],
  [2, '感受', '询问客户感受', '', '人'],
  [3, '展望', '说明后续安排', '', '人'],
  [4, '邀请', '邀请继续联系', '', '人']
];

confirmData.forEach((row, i) => {
  const r = ws4.addRow(row);
  r.eachCell(cell => {
    cell.style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? 'FFF8F9FA' : 'FFEDf2f4' } } };
  });
  r.getCell(5).style = { font: { color: { argb: 'FF' + colors.accent } } };
});

// 确认话术
ws4.mergeCells('A7:E7');
ws4.getCell('A7').value = '确认话术模板';
ws4.getCell('A7').style = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.light } } };

ws4.mergeCells('A8:E10');
ws4.getCell('A8').value = '「王女士，今天我们讨论了您的账户问题并找到了解决方案。接下来，我们会在24小时内为您开通安全锁功能。以后有任何问题，欢迎随时联系我...」';
ws4.getCell('A8').style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, font: { italic: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF9F9' } } };

// 确认记录区
ws4.mergeCells('A12:E12');
ws4.getCell('A12').value = '确认记录';
ws4.getCell('A12').style = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.light } } };

ws4.mergeCells('A13:E15');
ws4.getCell('A13').value = '客户反馈：\n\n\n';
ws4.getCell('A13').style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };

ws4.getColumn(1).width = 8;
ws4.getColumn(2).width = 12;
ws4.getColumn(3).width = 30;
ws4.getColumn(4).width = 12;
ws4.getColumn(5).width = 10;

// ==================== Sheet 5: AI协同检查表 ====================
const ws5 = wb.addWorksheet('AI协同检查');
ws5.properties.tabColor = { argb: 'FF' + colors.secondary };

ws5.mergeCells('A1:D1');
ws5.getCell('A1').value = 'AI协同检查表';
ws5.getCell('A1').style = { font: { bold: true, size: 14, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center', vertical: 'middle' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
ws5.getRow(1).height = 30;

const headers5 = ['任务类型', '建议', '实际执行', '备注'];
ws5.addRow(headers5);
ws5.getRow(2).eachCell(cell => {
  cell.style = { font: { bold: true, color: { argb: 'FFFFFFFF' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.primary } }, align: { horizontal: 'center' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };
});

const aiData = [
  ['客户信息录入', 'AI', '', ''],
  ['方案/报价计算', 'AI', '', ''],
  ['进度提醒通知', 'AI', '', ''],
  ['满意度调查发送', 'AI', '', ''],
  ['客户需求探索', '人', '', ''],
  ['个性化方案提议', '人', '', ''],
  ['承诺交付执行', '人', '', ''],
  ['真诚情感确认', '人', '', '']
];

aiData.forEach((row, i) => {
  const r = ws5.addRow(row);
  r.eachCell(cell => {
    cell.style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? 'FFF8F9FA' : 'FFEDf2f4' } } };
  });
  if (r.getCell(2)) {
    r.getCell(2).style = { font: { color: { argb: 'FF2E7D32' } }, align: { horizontal: 'center' } };
  }
});

// 人机分工说明
ws5.mergeCells('A11:D11');
ws5.getCell('A11').value = '人机分工原则';
ws5.getCell('A11').style = { font: { bold: true }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colors.light } } };

ws5.mergeCells('A12:D15');
ws5.getCell('A12').value = '交给AI：数据收集、文档生成、提醒通知、问题分类、数据分析\n必须人做：情感连接、关系深化、危机处理、复杂决策、关键时刻\n人机协同：AI辅助决策、人做最终判断、信息共享、流程自动化\n持续优化：人机共同探索新协作模式、流程改进、能力提升';
ws5.getCell('A12').style = { border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } };

ws5.getColumn(1).width = 25;
ws5.getColumn(2).width = 12;
ws5.getColumn(3).width = 12;
ws5.getColumn(4).width = 30;

// 保存
wb.xlsx.writeFile(outputPath).then(() => {
  console.log('Excel工具表单已生成: ' + outputPath);
}).catch(err => {
  console.error('生成失败:', err);
});
