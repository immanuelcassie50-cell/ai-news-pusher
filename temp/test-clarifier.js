const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('D:/Downloads/xinjian/problem-clarifier.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
const script = scriptMatch[1];

const mockEl = () => ({
  value: '', textContent: '', innerHTML: '',
  classList: { add(){}, remove(){}, toggle(){}, contains:()=>false },
  style: {},
  onclick: null,
  addEventListener(){},
  appendChild(){},
  removeChild(){},
  select(){},
  click(){},
  dataset: {},
});

const ctx = vm.createContext({
  console,
  document: {
    getElementById: () => mockEl(),
    querySelectorAll: () => [],
    querySelector: () => mockEl(),
    addEventListener(){},
    createElement: () => mockEl(),
    body: { appendChild(){}, removeChild(){} },
    execCommand(){},
  },
  window: { scrollTo(){}, print(){} },
  localStorage: { _s:{}, getItem(k){return this._s[k]||null}, setItem(k,v){this._s[k]=v}, removeItem(k){delete this._s[k]} },
  navigator: { clipboard: { writeText: async () => {} } },
  URL: { createObjectURL: () => '', revokeObjectURL: () => {} },
  Blob: function(){},
  confirm: () => false,
  alert: () => {},
  setTimeout, clearTimeout, setInterval, clearInterval,
  Date, JSON, String, Number, Array, Object, Math, Boolean, Error, RegExp, parseInt, parseFloat,
});

const testCode = `

console.log('--- classifyProblem ---');
const c1 = classifyProblem('我怎么让员工更努力');
const c2 = classifyProblem('我作为管理者很失败');
const c3 = classifyProblem('领导太无理了');
const c4 = classifyProblem('我怎么提升领导力');
const c5 = classifyProblem('开会大家都沉默，气氛很尴尬');
console.log('  让员工更努力 →', c1, c1==='pseudoproblem'?'✓':'✗');
console.log('  管理者很失败 →', c2, c2==='vague'?'✓':'✗');
console.log('  领导太无理 →', c3, c3==='emotional'?'✓':'✗');
console.log('  提升领导力 →', c4, c4==='broad'?'✓':'✗');

console.log('');
console.log('--- generateStatements: vague ---');
const s1 = generateStatements({
  originalProblem: '开会大家都沉默',
  problemType: 'vague',
  context: { when: '每周一例会', where: '会议室', who: '团队成员', role: 'new_manager' },
  scenario: { type:'', custom:'', lastTime:'', detail:'' },
  reframe: { did:'', expect:'', control:'' },
  emotion: { types:[], intensity:5, fact:'', feeling:'' },
  unclear: { when:'', color:'', first:'', want:'' },
  currentActions: '发议程', desiredOutcome: '有人回应',
});
console.log('A:', s1.A);
console.log('B:', s1.B);
console.log('C:', s1.C);

console.log('');
console.log('--- generateStatements: emotional ---');
const s2 = generateStatements({
  originalProblem: '领导太无理',
  problemType: 'emotional',
  context: { when:'', where:'', who:'', role:'' },
  scenario: { type:'', custom:'', lastTime:'', detail:'' },
  reframe: { did:'', expect:'', control:'' },
  emotion: { types:['frustrated','anxious'], intensity:8, fact:'会上沉默了2分钟', feeling:'被忽视' },
  unclear: { when:'', color:'', first:'', want:'' },
  currentActions: '', desiredOutcome: '',
});
console.log('A:', s2.A);
console.log('C:', s2.C);

console.log('');
console.log('--- generateStatements: pseudoproblem ---');
const s3 = generateStatements({
  originalProblem: '我怎么让员工更努力',
  problemType: 'pseudoproblem',
  context: { when:'', where:'', who:'', role:'senior_manager' },
  scenario: { type:'', custom:'', lastTime:'', detail:'' },
  reframe: { did:'开过两次会', expect:'员工主动汇报', control:'我能控制沟通方式' },
  emotion: { types:[], intensity:5, fact:'', feeling:'' },
  unclear: { when:'', color:'', first:'', want:'' },
  currentActions: '', desiredOutcome: '员工主动思考',
});
console.log('A:', s3.A);
console.log('C:', s3.C);

console.log('');
console.log('--- generateStatements: unclear ---');
const s4 = generateStatements({
  originalProblem: '',
  problemType: 'unclear',
  context: { when:'', where:'', who:'', role:'' },
  scenario: { type:'', custom:'', lastTime:'', detail:'' },
  reframe: { did:'', expect:'', control:'' },
  emotion: { types:[], intensity:5, fact:'', feeling:'' },
  unclear: { when:'每周一早上', color:'灰蒙蒙', first:'三个月前晋升后', want:'想被认可' },
  currentActions: '', desiredOutcome: '',
});
console.log('A:', s4.A);
console.log('C:', s4.C);

console.log('');
console.log('--- generateStatements: broad ---');
const s5 = generateStatements({
  originalProblem: '我怎么提升领导力',
  problemType: 'broad',
  context: { when:'', where:'', who:'', role:'' },
  scenario: { type:'meeting_silence', custom:'', lastTime:'2026-05-30', detail:'会议沉默' },
  reframe: { did:'', expect:'', control:'' },
  emotion: { types:[], intensity:5, fact:'', feeling:'' },
  unclear: { when:'', color:'', first:'', want:'' },
  currentActions: '', desiredOutcome: '',
});
console.log('A:', s5.A);
console.log('B:', s5.B);

console.log('');
console.log('--- escapeHtml ---');
const e1 = escapeHtml('<script>alert("x")</script>');
console.log('Result:', e1);
console.log('Safe:', !e1.includes('<script>') ? '✓' : '✗');

console.log('');
console.log('✓ All tests complete');
`;

try {
  vm.runInNewContext(script + testCode, ctx);
} catch(e) {
  console.error('✗ Execution error:', e.message);
  console.error(e.stack);
}
