// 模拟完整 DOM 环境，运行关键函数验证业务逻辑
const fs = require('fs');
const html = fs.readFileSync('D:/Downloads/xinjian/GROW 引导器/action-tracker.html', 'utf8');
const js = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// 构造一个真实可用的 DOM mock：所有元素都注册到 elements 表中
const elements = {};
function makeEl(tag) {
  const e = {
    tagName: tag.toUpperCase(),
    children: [],
    style: {},
    dataset: {},
    attributes: {},
    _listeners: {},
    _innerHTML: '',
    _textContent: '',
    _value: '',
    classList: {
      _set: new Set(),
      add(c) { this._set.add(c); },
      remove(c) { this._set.delete(c); },
      toggle(c, on) { if (on === undefined ? !this._set.has(c) : on) this._set.add(c); else this._set.delete(c); },
      contains(c) { return this._set.has(c); }
    },
    setAttribute(k, v) {
      this.attributes[k] = v;
      if (k === 'class') this.className = v;
      else if (k === 'style' && typeof v === 'string') Object.assign(this.style, v.split(';').filter(Boolean).reduce((a, p) => { const [k,v] = p.split(':'); if (k) a[k.trim()] = v && v.trim(); return a; }, {}));
      else if (k.startsWith('data-')) this.dataset[k.slice(5).replace(/-/g, '_')] = v;
      else this.attributes[k] = v;
    },
    getAttribute(k) { return this.attributes[k]; },
    appendChild(c) {
      if (typeof c === 'string') c = { nodeType: 3, textContent: c };
      this.children.push(c);
      c.parentNode = this;
      return c;
    },
    addEventListener(ev, fn) { (this._listeners[ev] = this._listeners[ev] || []).push(fn); },
    removeEventListener() {},
    dispatchEvent(ev) { (this._listeners[ev.type] || []).forEach(fn => fn(ev)); },
    querySelector(sel) {
      // 简化：返回 elements 表中第一个匹配
      const id = sel.match(/#([\w-]+)/);
      if (id) return elements[id[1]] || makeEl('div');
      return makeEl('div');
    },
    querySelectorAll(sel) {
      // 简化：返回 children 中所有匹配的元素
      const cls = sel.match(/\.([\w-]+)/);
      if (cls) {
        const c = cls[1];
        const result = [];
        const walk = (node) => {
          if (node._set && node._set.has(c)) result.push(node);
          (node.children || []).forEach(walk);
        };
        walk(this);
        return result;
      }
      return [];
    },
    set innerHTML(v) { this._innerHTML = v; this.children = []; },
    get innerHTML() { return this._innerHTML; },
    set textContent(v) { this._textContent = v; },
    get textContent() { return this._textContent; },
    set value(v) { this._value = v; },
    get value() { return this._value; },
    set className(v) { this._className = v; },
    get className() { return this._className || ''; },
    set onclick(v) { this._onclick = v; },
    get onclick() { return this._onclick; },
    set oninput(v) { this._oninput = v; },
    get oninput() { return this._oninput; },
    set onchange(v) { this._onchange = v; },
    get onchange() { return this._onchange; },
    click() { if (this._onclick) this._onclick(); },
    focus() {},
    blur() {},
    scrollIntoView() {},
    parentNode: null
  };
  return e;
}

// 注册所有被代码 query 的 ID
const ids = [
  'app','topbar','view-onboarding','status-bar','today-zone','tabs',
  'panel-commitments','panel-reflections','panel-charts','panel-export',
  'modal-backdrop','modal','modal-title','modal-sub','modal-body','modal-foot',
  'toast','topbar-title','topbar-subtitle','topbar-date-greg','topbar-date-cn',
  'topbar-user-stamp','stat-progress-pct','stat-progress-desc','stat-progress-bar',
  'stat-next-meeting-days','stat-next-meeting-date','stat-days-left','stat-end-date',
  'today-eyebrow','today-title','today-meta','today-actions',
  'config-options','onboard-name','onboard-start','onboard-firstmeet',
  'initial-commit-list','reflection-form-wrap','reflection-list','reflection-new-btn',
  'mood-picker','import-file','meeting-help'
];
ids.forEach(id => { elements[id] = makeEl('div'); elements[id].id = id; });

global.document = {
  createElement: makeEl,
  createElementNS: (ns, tag) => makeEl(tag),
  createTextNode: (t) => ({ nodeType: 3, textContent: t, parentNode: null }),
  body: makeEl('body'),
  querySelector: (s) => {
    const id = s.replace('#','');
    return elements[id] || null;
  },
  querySelectorAll: (s) => {
    const tabMatch = s.match(/\.tab(?![-\w])/);
    if (tabMatch) {
      // 模拟：返回 4 个 tab
      return [makeEl('div'), makeEl('div'), makeEl('div'), makeEl('div')];
    }
    return [];
  },
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
global.navigator = { clipboard: { writeText: () => Promise.resolve() } };
global.URL = { createObjectURL: () => '', revokeObjectURL: () => {} };
global.Blob = function() {};
global.FileReader = function() {};
global.confirm = () => true;
global.alert = () => {};
global.clearTimeout = () => {};
global.setTimeout = (fn, ms) => 0;
global.console = console;

const wrapped = `(function() { ${js} ; return { state, init, renderAll, renderCommitments, renderReflections, renderCharts, renderExport, buildGaugeSVG, buildHeatmapSVG, buildMoodChartSVG, persist, markDone, openObstacle, openDrop, openNewCommitment, openNewReflection, exportJSON, importJSON, clearAllData, serializeReportHTML, showModal, closeModal, setActiveTab, CONFIGS, QUESTIONS, MOODS, daysBetween, fmt, today, uid, lunarDate }; })()`;

try {
  const api = eval(wrapped);
  console.log('=== 1. Init() with no profile (onboarding) ===');
  api.state = { profile: null, commitments: [], reflections: [], currentTab: 'commitments', editingReflectionId: null, draftReflection: null };
  api.init();
  console.log('  onboarding view exists:', !!elements['view-onboarding']);
  console.log('  onboarding innerHTML length:', elements['view-onboarding'].innerHTML.length);

  console.log('\n=== 2. Init() with profile (main app) ===');
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
  api.init();
  console.log('  topbar.innerHTML length:', elements['topbar'].innerHTML.length);
  console.log('  status-bar text contains 进度:', elements['status-bar'].textContent.includes('项目进度'));
  console.log('  today-zone text contains 今日:', elements['today-zone'].textContent.length > 0);
  console.log('  panel-commitments has', elements['panel-commitments'].children.length, 'children');
  console.log('  panel-reflections has', elements['panel-reflections'].children.length, 'children');
  console.log('  panel-charts has', elements['panel-charts'].children.length, 'children');
  console.log('  panel-export has', elements['panel-export'].children.length, 'children');

  console.log('\n=== 3. markDone test ===');
  api.markDone('c1');
  console.log('  c1.status =', api.state.commitments[0].status, '(expect done)');
  console.log('  c1.completedAt =', api.state.commitments[0].completedAt);

  console.log('\n=== 4. SVG builders ===');
  const g = api.buildGaugeSVG(75);
  console.log('  gauge:', g.tagName, g.getAttribute('width') + 'x' + g.getAttribute('height'));
  const h = api.buildHeatmapSVG();
  console.log('  heatmap:', h.tagName, h.getAttribute('width') + 'x' + h.getAttribute('height'));
  const m = api.buildMoodChartSVG();
  console.log('  mood chart: tag =', m.tagName, '(wrapped in div)');

  console.log('\n=== 5. Set active tab ===');
  api.setActiveTab('charts');
  console.log('  switched to charts');

  console.log('\n=== 6. Render export panel ===');
  api.renderExport();
  console.log('  export panel children:', elements['panel-export'].children.length);

  console.log('\n=== 7. Persist & restore ===');
  api.persist();
  console.log('  localStorage keys:', Object.keys(localStorage.data));
  const saved = localStorage.data['al_tracker_commitments'];
  console.log('  commitments saved length:', JSON.parse(saved).length);

  console.log('\n=== ALL CHECKS PASSED ===');
} catch(e) {
  console.error('FATAL:', e.message);
  console.error(e.stack);
}
