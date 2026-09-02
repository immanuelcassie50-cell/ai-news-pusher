// P0/P1/P2 功能完整性对照 RPD 检查
const fs = require('fs');
const html = fs.readFileSync('D:/Downloads/xinjian/GROW 引导器/action-tracker.html', 'utf8');

const checks = [
  // P0 - 必须有
  ['P0', 'Onboarding 流程 (设置 + 首次承诺录入)', ['renderOnboarding', 'renderInitialCommitments', 'onboard-name', 'config-options']],
  ['P0', '主界面今日状态区 4 种情况', ['今天是个不错的时间点', '会议即将开始', '会议当日', '里程碑']],
  ['P0', 'Tab 1: 承诺管理 (增/改状态/障碍/放弃)', ['openNewCommitment', 'markDone', 'markPartial', 'openObstacle', 'openDrop', 'commitment-card']],
  ['P0', 'Tab 2: 反思录入 + 历史列表', ['openNewReflection', 'showReflectionForm', 'reflection-entry', 'QUESTIONS']],
  ['P0', 'Tab 4: 会议准备报告导出 PDF', ['renderMeetingReport', 'window.print', '@media print', '打印 / 导出 PDF']],
  ['P0', 'localStorage 自动保存', ['al_tracker_profile', 'al_tracker_commitments', 'al_tracker_reflections', 'persist()']],
  // P1
  ['P1', 'Tab 3: 完成率仪表盘 SVG', ['buildGaugeSVG', 'gauge-svg']],
  ['P1', 'Tab 4: 导出完整 JSON 备份', ['exportJSON', 'Blob', 'createObjectURL']],
  ['P1', 'Tab 2: 历史反思可编辑', ['editReflection', 'state.editingReflectionId']],
  ['P1', 'Tab 4: 导入 JSON 恢复', ['importJSON', 'FileReader']],
  ['P1', '反思记录字数统计', ['wordCount', '字数']],
  // P2
  ['P2', 'Tab 3: 反思频率热力图 SVG', ['buildHeatmapSVG', 'heatmap-svg', 'heatmap-legend-cell']],
  ['P2', 'Tab 3: 情绪趋势折线图 SVG', ['buildMoodChartSVG', 'mood-chart-svg']],
  ['P2', '里程碑复盘流程', ['openMilestoneReflection', 'milestoneLabel', 'isMilestone', 'q5_summary']],
  ['P2', '数据清空 (危险区)', ['clearAllData', '清空所有数据']],
  // 设计要素
  ['Design', '东方美学 - 印章 (stamp)', ['class="stamp"', '印章']],
  ['Design', '东方美学 - 卷轴 (border + line)', ['border-bottom: 1px solid', 'serif-cn']],
  ['Design', '东方美学 - 楷书字体 (Noto Serif SC)', ['Noto Serif SC']],
  ['Design', '主色 #0a1929 (墨蓝)', ['#0a1929']],
  ['Design', '强调色 #c43e2c (朱砂)', ['#c43e2c']],
  ['Design', '背景 #f5f0e8 (宣纸)', ['#f5f0e8']],
  ['Design', '点缀 #d4af37 (金箔)', ['#d4af37']],
  ['Design', '情绪 emoji', ['😔', '😐', '🙂', '😊', '🔥']],
  // 响应式
  ['Responsive', '桌面三栏/平板两栏/手机单栏', ['@media (max-width: 960px)', '@media (max-width: 600px)']],
  // 4 种配置
  ['Config', '冲刺版 sprint', ['sprint:', '冲刺版']],
  ['Config', '月度版 monthly', ['monthly:', '月度版']],
  ['Config', '标准版 standard', ['standard:', '标准版']],
  ['Config', '长期版 long', ['long:', '长期版']],
  // 问题集
  ['Question', 'simple 2 题', ['simple:', '"这段时间你做了什么行动？"']],
  ['Question', 'standard 4 题', ['standard:', '"下一步你要调整什么？"']],
  ['Question', 'deep 5 题', ['deep:', '"如果用一句话总结']],
  // 关键业务功能
  ['Logic', '日期工具 daysBetween', ['daysBetween']],
  ['Logic', 'ID 生成器 uid', ['uid(']],
  ['Logic', '农历日期 lunarDate', ['lunarDate']],
  ['Logic', 'Toast 通知', ['toast(']],
  ['Logic', '会议日期自动生成', ['generateMeetingDates']],
  ['Logic', '报告 Markdown 导出', ['serializeReportHTML', '复制为 Markdown']],
  ['Logic', 'PDF 打印样式', ['@page', 'page-break-inside']]
];

let pass = 0, fail = 0;
const missing = [];
checks.forEach(([cat, desc, keywords]) => {
  const allFound = keywords.every(k => html.includes(k));
  if (allFound) {
    pass++;
    console.log(`✅ [${cat}] ${desc}`);
  } else {
    fail++;
    const missingKw = keywords.filter(k => !html.includes(k));
    missing.push({cat, desc, missing: missingKw});
    console.log(`❌ [${cat}] ${desc} — 缺失: ${missingKw.join(', ')}`);
  }
});

console.log(`\n=== 总结 ===`);
console.log(`通过: ${pass} / ${checks.length}`);
console.log(`失败: ${fail}`);

if (missing.length) {
  console.log('\n缺失详情:');
  missing.forEach(m => console.log(`  - [${m.cat}] ${m.desc}: ${m.missing.join(', ')}`));
}
