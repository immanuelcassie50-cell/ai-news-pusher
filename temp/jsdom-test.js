// 注入 localStorage 初始化代码到主脚本之前
const fs = require('fs');
const { JSDOM } = require('D:/soft/npm/node_modules/jsdom');

const html = fs.readFileSync('D:/Downloads/xinjian/GROW 引导器/action-tracker.html', 'utf8');

// 注入 localStorage 预设（替换为已登录状态）
const presetScript = `
<script>
// 预填充 localStorage（测试用）
localStorage.setItem('al_tracker_profile', JSON.stringify({
  name: '测试用户',
  config: 'standard',
  projectStartDate: '2026-06-01',
  projectEndDate: '2026-08-30',
  firstMeetingDate: '2026-06-01',
  meetingDates: ['2026-06-01','2026-06-15','2026-06-29','2026-07-13','2026-07-27','2026-08-10'],
  createdAt: '2026-06-01T00:00:00Z',
  version: 1
}));
localStorage.setItem('al_tracker_commitments', JSON.stringify([
  { id: 'c1', createdAt: '2026-06-01', meetingNumber: 1, what: '测试承诺A — 与张经理对话', deadline: '2026-06-20', successCriteria: '完成4次', status: 'active', completedAt: null, dropReason: null, dropLearning: null, blockers: [
    { id: 'b1', description: '张总出差', rootCause: '没提前约', needsGroupDiscussion: true, recordedAt: '2026-06-10' }
  ]},
  { id: 'c2', createdAt: '2026-06-01', meetingNumber: 1, what: '测试承诺B — 读完一本书', deadline: '2026-06-15', successCriteria: '前三章', status: 'done', completedAt: '2026-06-10', dropReason: null, dropLearning: null, blockers: []},
  { id: 'c3', createdAt: '2026-06-01', meetingNumber: 1, what: '测试承诺C — 已被放弃', deadline: '2026-06-15', successCriteria: null, status: 'dropped', completedAt: null, dropReason: '目标不切实际', dropLearning: 'SMART 原则很重要', blockers: []}
]));
localStorage.setItem('al_tracker_reflections', JSON.stringify([
  { id: 'r1', date: '2026-06-04', weekNumber: 1, type: 'daily', milestoneLabel: null,
    answers: { q1_action: '今天做了A行动', q2_blocker: '遇到B障碍', q3_discovery: '发现自己C', q4_adjust: '需要调整D' },
    mood: 4, wordCount: 200, createdAt: '2026-06-04' },
  { id: 'r2', date: '2026-06-05', weekNumber: 1, type: 'daily', milestoneLabel: null,
    answers: { q1_action: '第二天做了A2', q2_blocker: '障碍还在', q3_discovery: '更深层发现' },
    mood: 3, wordCount: 150, createdAt: '2026-06-05' }
]));
</script>
`;

// 注入到 <head> 末尾
const injected = html.replace('</head>', presetScript + '</head>');

const dom = new JSDOM(injected, {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  url: 'http://localhost/test.html',
  storageQuota: 10000000
});

const w = dom.window;
const doc = w.document;

let pass = true;
function assert(cond, msg) {
  if (!cond) { pass = false; console.log('  ❌ FAIL: ' + msg); }
  else console.log('  ✅ ' + msg);
}

setTimeout(() => {
  console.log('=== Test 1: 主界面进入 ===');
  assert(doc.querySelector('#topbar').style.display === 'flex', 'topbar 显示');
  assert(doc.querySelector('#status-bar').style.display === 'grid', 'status-bar 显示');
  assert(doc.querySelector('#today-zone').style.display === 'block', 'today-zone 显示');
  assert(doc.querySelector('#tabs').style.display === 'flex', 'tabs 显示');
  assert(doc.querySelector('#view-onboarding').style.display === 'none', 'onboarding 隐藏');

  console.log('\n=== Test 2: 顶栏内容 ===');
  const topbarTitle = doc.querySelector('#topbar-title').textContent;
  assert(topbarTitle.includes('测试用户'), `topbar-title 包含用户名: "${topbarTitle}"`);
  const userStamp = doc.querySelector('#topbar-user-stamp').textContent;
  assert(userStamp.includes('测试用户'), `user-stamp 包含用户名: "${userStamp}"`);

  console.log('\n=== Test 3: 状态条 ===');
  const progressPct = doc.querySelector('#stat-progress-pct').textContent;
  assert(parseInt(progressPct) >= 0, `进度百分比已计算: ${progressPct}%`);
  const progressDesc = doc.querySelector('#stat-progress-desc').textContent;
  assert(progressDesc.includes('第'), `进度描述: "${progressDesc}"`);

  console.log('\n=== Test 4: 今日区域 ===');
  const todayTitle = doc.querySelector('#today-title').textContent;
  assert(todayTitle.length > 0, `今日标题: "${todayTitle}"`);

  console.log('\n=== Test 5: 承诺面板 ===');
  const commitPanel = doc.querySelector('#panel-commitments');
  const cards = commitPanel.querySelectorAll('.commitment-card');
  assert(cards.length === 3, `承诺卡片数 = 3 (实际: ${cards.length})`);
  const groups = commitPanel.querySelectorAll('.commitment-group');
  assert(groups.length === 3, `分组数 = 3 (进行中+已完成+放弃) (实际: ${groups.length})`);
  const blockers = commitPanel.querySelectorAll('.blocker-item');
  assert(blockers.length >= 1, `障碍记录可见 (实际: ${blockers.length})`);
  const blockerTag = commitPanel.querySelector('.blocker-tag');
  assert(blockerTag && blockerTag.textContent.includes('小组'), `"带到小组"标签存在`);

  console.log('\n=== Test 6: 反思面板 ===');
  const refPanel = doc.querySelector('#panel-reflections');
  const entries = refPanel.querySelectorAll('.reflection-entry');
  assert(entries.length === 2, `反思条目数 = 2 (实际: ${entries.length})`);
  const moods = refPanel.querySelectorAll('.reflection-mood');
  assert(moods.length === 2, `情绪显示数 = 2`);

  console.log('\n=== Test 7: 切换到图表面板 ===');
  doc.querySelectorAll('.tab')[2].click();
  setTimeout(() => {
    const cp = doc.querySelector('#panel-charts');
    assert(cp.classList.contains('active'), 'charts 面板 active');
    const stats = cp.querySelectorAll('.stat-card');
    assert(stats.length === 5, `统计卡片数 = 5 (实际: ${stats.length})`);
    const gauge = cp.querySelector('.gauge-svg');
    assert(gauge !== null, '仪表盘 SVG 存在');
    assert(gauge.querySelector('path') !== null, '仪表盘有 SVG path');
    const heatmap = cp.querySelector('.heatmap-svg');
    assert(heatmap !== null, '热力图 SVG 存在');
    const heatRects = heatmap.querySelectorAll('rect');
    assert(heatRects.length > 30, `热力图格子数 > 30 (实际: ${heatRects.length})`);
    const moodChart = cp.querySelector('.mood-chart-svg');
    assert(moodChart !== null, '情绪折线图 SVG 存在');
    const moodCircles = moodChart.querySelectorAll('circle');
    assert(moodCircles.length === 2, `情绪点 = 2 (实际: ${moodCircles.length})`);

    console.log('\n=== Test 8: 切换到报告面板 ===');
    doc.querySelectorAll('.tab')[3].click();
    setTimeout(() => {
      const ep = doc.querySelector('#panel-export');
      assert(ep.classList.contains('active'), 'export 面板 active');
      const report = ep.querySelector('.report-section');
      assert(report !== null, '报告区存在');
      const blocks = ep.querySelectorAll('.report-block');
      assert(blocks.length >= 4, `报告块 >= 4 (实际: ${blocks.length})`);
      const reportText = report.textContent;
      assert(reportText.includes('测试用户'), '报告包含用户名');
      assert(reportText.includes('测试承诺A'), '报告包含承诺A');
      assert(reportText.includes('张总出差'), '报告包含障碍');

      console.log('\n=== Test 9: 子 Tab 切换 (备份) ===');
      const rtabs = ep.querySelectorAll('.report-tab');
      rtabs[1].click();
      setTimeout(() => {
        const backup = ep.querySelector('[data-rpanel="backup"]');
        assert(!backup.classList.contains('hidden'), '备份面板显示');
        const dangerBtn = backup.querySelector('.btn');
        assert(dangerBtn !== null, '备份按钮存在');

        console.log('\n=== Test 10: 回到承诺 Tab，测试标记完成 ===');
        doc.querySelectorAll('.tab')[0].click();
        setTimeout(() => {
          const cp2 = doc.querySelector('#panel-commitments');
          const firstCard = cp2.querySelector('.commitment-card');
          const doneBtn = firstCard.querySelector('.commitment-actions .btn');
          doneBtn.click();
          setTimeout(() => {
            const saved = JSON.parse(w.localStorage.getItem('al_tracker_commitments'));
            const c1 = saved.find(c => c.id === 'c1');
            assert(c1.status === 'done', `c1 已标记为 done (实际: ${c1.status})`);
            assert(c1.completedAt !== null, `c1.completedAt 已设置: ${c1.completedAt}`);

            console.log('\n=== Test 11: 测试新增承诺模态框 ===');
            const addBtn = cp2.querySelector('.section-head .btn-primary');
            addBtn.click();
            setTimeout(() => {
              const modal = doc.querySelector('#modal-backdrop');
              assert(modal.classList.contains('active'), '模态框打开');
              const title = doc.querySelector('#modal-title').textContent;
              assert(title.includes('新增') || title.includes('承诺'), `模态框标题: "${title}"`);
              const body = doc.querySelector('#modal-body');
              assert(body.querySelector('#nc-what') !== null, '包含"我要做什么"输入框');
              assert(body.querySelector('#nc-deadline') !== null, '包含截止日期');
              assert(body.querySelector('#nc-success') !== null, '包含成功标准');
              doc.querySelector('.modal-close').click();
              setTimeout(() => {
                console.log('\n=== Test 12: 测试障碍模态框 ===');
                // 找一个进行中的承诺
                const activeCard = Array.from(cp2.querySelectorAll('.commitment-card')).find(c => c.querySelector('.btn') && !c.classList.contains('done'));
                if (activeCard) {
                  // 找"遇到障碍"按钮（第3个）
                  const actBtns = activeCard.querySelectorAll('.commitment-actions .btn');
                  let obstacleBtn = null;
                  actBtns.forEach(b => { if (b.textContent.includes('障碍')) obstacleBtn = b; });
                  if (obstacleBtn) {
                    obstacleBtn.click();
                    setTimeout(() => {
                      const m2 = doc.querySelector('#modal-backdrop');
                      assert(m2.classList.contains('active'), '障碍模态框打开');
                      assert(doc.querySelector('#ob-desc') !== null, '包含障碍描述框');
                      assert(doc.querySelector('#ob-root') !== null, '包含根因输入框');
                      assert(doc.querySelector('#ob-group') !== null, '包含"带到小组"复选框');
                      console.log('\n' + (pass ? '🎉 全部测试通过' : '⚠️ 有测试失败'));
                      process.exit(pass ? 0 : 1);
                    }, 100);
                  }
                } else {
                  console.log('\n' + (pass ? '🎉 全部测试通过' : '⚠️ 有测试失败'));
                  process.exit(pass ? 0 : 1);
                }
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 200);
  }, 200);
}, 500);
