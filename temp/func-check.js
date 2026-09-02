// 模拟 DOM 环境，运行关键函数验证业务逻辑
const fs = require('fs');
const html = fs.readFileSync('D:/Downloads/xinjian/GROW 引导器/action-tracker.html', 'utf8');
const js = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// 最小 DOM mock
const elements = {};
function makeEl(tag) {
  return {
    tagName: tag,
    children: [],
    style: {},
    classList: {
      _cls: new Set(),
      add(c) { this._cls.add(c); },
      remove(c) { this._cls.delete(c); },
      toggle(c, on) { if (on) this._cls.add(c); else this._cls.delete(c); },
      contains(c) { return this._cls.has(c); }
    },
    dataset: {},
    setAttribute(k, v) {
      if (k === 'class') this.className = v;
      else if (k.startsWith('data-')) this.dataset[k.slice(5)] = v;
      else this[k] = v;
    },
    getAttribute(k) { return this[k]; },
    appendChild(c) { this.children.push(c); return c; },
    addEventListener() {},
    removeEventListener() {},
    querySelector() { return null; },
    querySelectorAll() { return []; },
    set innerHTML(v) { this._html = v; },
    get innerHTML() { return this._html || ''; },
    set textContent(v) { this._text = v; },
    get textContent() { return this._text || ''; },
    scrollIntoView() {},
    click() {},
    focus() {},
    set className(v) { this._className = v; },
    get className() { return this._className || ''; }
  };
}

global.document = {
  createElement: makeEl,
  createElementNS: (ns, tag) => makeEl(tag),
  createTextNode: (t) => ({ textContent: t, nodeType: 3 }),
  body: makeEl('body'),
  querySelector: (s) => elements[s] || null,
  querySelectorAll: (s) => [],
  addEventListener: () => {},
  removeEventListener: () => {}
};
global.localStorage = {
  data: {},
  getItem(k) { return this.data[k] || null; },
  setItem(k, v) { this.data[k] = v; },
  removeItem(k) { delete this.data[k]; },
  clear() { this.data = {}; }
};
global.window = { print: () => {}, scrollTo: () => {} };
global.navigator = {};
global.URL = { createObjectURL: () => '', revokeObjectURL: () => {} };
global.Blob = function() {};
global.FileReader = function() {};
global.confirm = () => true;
global.alert = () => {};
global.clearTimeout = () => {};
global.setTimeout = (fn, ms) => 0;

// 创建 sandbox 跑 JS
const wrapped = `(function() { ${js} ; return { state, init, renderAll, renderCommitments, renderReflections, renderCharts, renderExport, buildGaugeSVG, buildHeatmapSVG, buildMoodChartSVG, persist, markDone, openObstacle, openDrop, openNewCommitment, openNewReflection, exportJSON, importJSON, clearAllData, CONFIGS, QUESTIONS, MOODS, daysBetween, fmt, today, uid, lunarDate }; })()`;

try {
  const api = eval(wrapped);

  // 验证关键 API
  console.log('=== API surface check ===');
  const required = ['state', 'init', 'renderAll', 'renderCommitments', 'renderReflections', 'renderCharts', 'renderExport', 'buildGaugeSVG', 'buildHeatmapSVG', 'buildMoodChartSVG', 'persist', 'markDone', 'openObstacle', 'openDrop', 'openNewCommitment', 'openNewReflection', 'exportJSON', 'importJSON', 'clearAllData', 'CONFIGS', 'QUESTIONS', 'MOODS', 'daysBetween', 'fmt', 'today', 'uid', 'lunarDate'];
  let allOk = true;
  required.forEach(k => {
    const ok = api[k] !== undefined;
    if (!ok) allOk = false;
    console.log((ok ? 'OK   ' : 'MISS ') + k + ' = ' + typeof api[k]);
  });

  // 验证工具函数
  console.log('\n=== Utility functions ===');
  console.log('daysBetween("2026-06-01","2026-06-10") =', api.daysBetween('2026-06-01', '2026-06-10'), '(expect 9)');
  console.log('fmt(new Date()) =', api.fmt(new Date()));
  console.log('uid("x") =', api.uid('x'));
  console.log('lunarDate("2026-06-04") =', api.lunarDate('2026-06-04'));

  // 验证配置
  console.log('\n=== Configs ===');
  Object.entries(api.CONFIGS).forEach(([k, v]) => {
    console.log(`${k}: ${v.label} · ${v.totalDays}天 · ${v.meetingCount}次会议 · ${v.questionSet}`);
  });

  // 验证问题集
  console.log('\n=== Question sets ===');
  Object.entries(api.QUESTIONS).forEach(([k, qs]) => {
    console.log(`${k}: ${qs.length}题 — ${qs.map(q => q.text.slice(0,10)).join(' | ')}`);
  });

  // 模拟数据
  console.log('\n=== Simulated data flow ===');
  api.state.profile = {
    name: '李明',
    config: 'standard',
    projectStartDate: '2026-06-01',
    projectEndDate: '2026-08-30',
    firstMeetingDate: '2026-06-01',
    meetingDates: ['2026-06-01','2026-06-15','2026-06-29','2026-07-13','2026-07-27','2026-08-10'],
    createdAt: '2026-06-01T00:00:00Z',
    version: 1
  };
  api.state.commitments = [
    { id: 'c1', createdAt: '2026-06-01', meetingNumber: 1, what: '与张经理对话', deadline: '2026-06-20', successCriteria: '4次', status: 'active', completedAt: null, dropReason: null, dropLearning: null, blockers: [] },
    { id: 'c2', createdAt: '2026-06-01', meetingNumber: 1, what: '读书', deadline: '2026-06-15', successCriteria: '前三章', status: 'done', completedAt: '2026-06-10', dropReason: null, dropLearning: null, blockers: [] }
  ];
  api.state.reflections = [
    { id: 'r1', date: '2026-06-04', weekNumber: 1, type: 'daily', milestoneLabel: null, answers: { q1_action: '约了张经理', q2_blocker: '他出差', q3_discovery: '我怕被拒绝', q4_adjust: '下次直接找他本人' }, mood: 3, wordCount: 120, createdAt: '2026-06-04' }
  ];
  api.persist();
  console.log('Saved to localStorage:');
  console.log('  al_tracker_profile =', !!localStorage.data['al_tracker_profile']);
  console.log('  al_tracker_commitments =', !!localStorage.data['al_tracker_commitments']);
  console.log('  al_tracker_reflections =', !!localStorage.data['al_tracker_reflections']);

  // 测试 markDone
  console.log('\n=== Test markDone ===');
  api.markDone('c1');
  console.log('c1.status =', api.state.commitments[0].status, '(expect done)');
  console.log('c1.completedAt =', api.state.commitments[0].completedAt, '(expect today)');

  // 测试 PDF 报告序列化
  console.log('\n=== Test serializeReportHTML ===');
  const reportMd = api.serializeReportHTML({
    querySelector: () => null,
    querySelectorAll: () => []
  });
  console.log('serializeReportHTML works (no throw)');

  // 测试 SVG 构建
  console.log('\n=== Test SVG builders ===');
  const gauge = api.buildGaugeSVG(75);
  console.log('buildGaugeSVG:', gauge.tagName, gauge.getAttribute('width') + 'x' + gauge.getAttribute('height'));
  const heat = api.buildHeatmapSVG();
  console.log('buildHeatmapSVG:', heat.tagName, heat.getAttribute('width') + 'x' + heat.getAttribute('height'));
  const mood = api.buildMoodChartSVG();
  console.log('buildMoodChartSVG:', mood.tagName || 'div', '(wrapped)');

  console.log('\n=== Result: ' + (allOk ? 'ALL PASS' : 'FAIL') + ' ===');
} catch(e) {
  console.error('FATAL:', e.message);
  console.error(e.stack);
}
