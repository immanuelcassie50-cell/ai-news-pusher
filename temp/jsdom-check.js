// 使用 jsdom 真实浏览器环境运行测试
const fs = require('fs');
const { JSDOM } = require('D:/soft/npm/node_modules/jsdom');

const html = fs.readFileSync('D:/Downloads/xinjian/GROW 引导器/action-tracker.html', 'utf8');

const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  url: 'http://localhost/'
});

const window = dom.window;
const document = window.document;

function log(msg, val) {
  console.log((val === true || val === undefined || val === null) ? msg : `${msg} = ${val}`);
}

let pass = true;
function assert(cond, msg) {
  if (!cond) { pass = false; console.log('  FAIL: ' + msg); }
  else console.log('  OK: ' + msg);
}

console.log('=== Test 1: 初始 Onboarding 状态 ===');
assert(document.querySelector('#view-onboarding') !== null, 'onboarding 容器存在');
const onboardingHtml = document.querySelector('#view-onboarding').innerHTML;
assert(onboardingHtml.length > 0, `onboarding 有内容 (${onboardingHtml.length} 字符)`);
assert(onboardingHtml.includes('欢迎来到'), 'onboarding 包含欢迎语');
assert(onboardingHtml.includes('config-options'), 'onboarding 包含配置选项');
assert(onboardingHtml.includes('onboard-name'), 'onboarding 包含名字输入框');
const topbarVisible = document.querySelector('#topbar').style.display;
assert(topbarVisible === 'none', 'topbar 初始隐藏');

console.log('\n=== Test 2: localStorage 与 state ===');
window.localStorage.setItem('al_tracker_profile', JSON.stringify({
  name: '测试用户',
  config: 'standard',
  projectStartDate: '2026-06-01',
  projectEndDate: '2026-08-30',
  firstMeetingDate: '2026-06-01',
  meetingDates: ['2026-06-01','2026-06-15','2026-06-29','2026-07-13','2026-07-27','2026-08-10'],
  createdAt: '2026-06-01T00:00:00Z',
  version: 1
}));
window.localStorage.setItem('al_tracker_commitments', JSON.stringify([
  { id: 'c1', createdAt: '2026-06-01', meetingNumber: 1, what: '测试承诺A', deadline: '2026-06-20', successCriteria: '完成4次', status: 'active', completedAt: null, dropReason: null, dropLearning: null, blockers: [] },
  { id: 'c2', createdAt: '2026-06-01', meetingNumber: 1, what: '测试承诺B', deadline: '2026-06-15', successCriteria: '读完', status: 'done', completedAt: '2026-06-10', dropReason: null, dropLearning: null, blockers: [
    { id: 'b1', description: '张总出差', rootCause: '没提前约', needsGroupDiscussion: true, recordedAt: '2026-06-10' }
  ]}
]));
window.localStorage.setItem('al_tracker_reflections', JSON.stringify([
  { id: 'r1', date: '2026-06-04', weekNumber: 1, type: 'daily', milestoneLabel: null,
    answers: { q1_action: '今天做了A', q2_blocker: '遇到B', q3_discovery: '发现C', q4_adjust: '调整D' },
    mood: 4, wordCount: 200, createdAt: '2026-06-04' }
]));

// 重新加载页面以触发 init
const html2 = html.replace('</body>', '<script>window.__test = true;</script></body>');
const dom2 = new JSDOM(html2, { runScripts: 'dangerously', pretendToBeVisual: true, url: 'http://localhost/' });
const w2 = dom2.window;
w2.localStorage.setItem('al_tracker_profile', window.localStorage.getItem('al_tracker_profile'));
w2.localStorage.setItem('al_tracker_commitments', window.localStorage.getItem('al_tracker_commitments'));
w2.localStorage.setItem('al_tracker_reflections', window.localStorage.getItem('al_tracker_reflections'));

// 触发 init（通过 DOMContentLoaded 已经触发）
setTimeout(() => {
  const doc2 = w2.document;

  console.log('\n=== Test 3: 主界面渲染 ===');
  const topbar = doc2.querySelector('#topbar');
  const topbarDisp = topbar.style.display;
  assert(topbarDisp === 'flex', `topbar 显示 (display: ${topbarDisp})`);
  const topbarText = topbar.textContent;
  assert(topbarText.includes('测试用户'), 'topbar 包含用户名');

  const statusBar = doc2.querySelector('#status-bar');
  assert(statusBar.style.display === 'grid', 'status-bar 显示');
  const progress = doc2.querySelector('#stat-progress-pct');
  assert(progress !== null, '进度百分比元素存在');
  log('  进度值:', progress.textContent);

  const today = doc2.querySelector('#today-zone');
  assert(today.style.display === 'block', 'today-zone 显示');
  assert(today.textContent.length > 0, `今日区域有内容 (${today.textContent.length} 字符)`);

  const tabs = doc2.querySelector('#tabs');
  assert(tabs.style.display === 'flex', 'tabs 显示');
  const tabEls = doc2.querySelectorAll('.tab');
  assert(tabEls.length === 4, `有 4 个 tab (实际: ${tabEls.length})`);

  console.log('\n=== Test 4: 承诺面板 ===');
  const commitPanel = doc2.querySelector('#panel-commitments');
  const commitCards = commitPanel.querySelectorAll('.commitment-card');
  assert(commitCards.length === 2, `有 2 个承诺卡片 (实际: ${commitCards.length})`);
  const groups = commitPanel.querySelectorAll('.commitment-group');
  assert(groups.length === 2, `有 2 个分组 (进行中+已完成) (实际: ${groups.length})`);
  const blockers = commitPanel.querySelectorAll('.blocker-item');
  assert(blockers.length >= 1, `障碍记录可见 (实际: ${blockers.length})`);

  console.log('\n=== Test 5: 反思面板 ===');
  const refPanel = doc2.querySelector('#panel-reflections');
  const refEntries = refPanel.querySelectorAll('.reflection-entry');
  assert(refEntries.length === 1, `有 1 条反思 (实际: ${refEntries.length})`);

  console.log('\n=== Test 6: 图表面板 ===');
  // 切换到图表 tab
  const chartsTab = doc2.querySelectorAll('.tab')[2];
  chartsTab.click();
  setTimeout(() => {
    const chartsPanel = doc2.querySelector('#panel-charts');
    assert(chartsPanel.classList.contains('active'), 'charts 面板 active');
    const stats = chartsPanel.querySelectorAll('.stat-card');
    assert(stats.length === 5, `有 5 个统计卡片 (实际: ${stats.length})`);
    const gauge = chartsPanel.querySelector('.gauge-svg');
    assert(gauge !== null, '仪表盘 SVG 存在');
    const heatmap = chartsPanel.querySelector('.heatmap-svg');
    assert(heatmap !== null, '热力图 SVG 存在');
    const moodChart = chartsPanel.querySelector('.mood-chart-svg');
    assert(moodChart !== null, '情绪折线图 SVG 存在');

    console.log('\n=== Test 7: 报告面板 ===');
    const exportTab = doc2.querySelectorAll('.tab')[3];
    exportTab.click();
    setTimeout(() => {
      const exportPanel = doc2.querySelector('#panel-export');
      assert(exportPanel.classList.contains('active'), 'export 面板 active');
      const report = exportPanel.querySelector('.report-section');
      assert(report !== null, '报告区存在');
      const blocks = exportPanel.querySelectorAll('.report-block');
      assert(blocks.length >= 4, `有 4 个报告块 (实际: ${blocks.length})`);
      const reportText = report.textContent;
      assert(reportText.includes('测试用户'), '报告包含用户名');
      assert(reportText.includes('测试承诺A'), '报告包含承诺A');

      console.log('\n=== Test 8: Tab 切换 ===');
      const commitTab = doc2.querySelectorAll('.tab')[0];
      commitTab.click();
      setTimeout(() => {
        const cp = doc2.querySelector('#panel-commitments');
        assert(cp.classList.contains('active'), '承诺面板重新 active');

        console.log('\n=== Test 9: 模态框 ===');
        // 通过点击新增承诺按钮触发
        const addBtn = cp.querySelector('.btn-primary');
        if (addBtn) {
          addBtn.click();
          setTimeout(() => {
            const modal = doc2.querySelector('#modal-backdrop');
            assert(modal.classList.contains('active'), '模态框打开');
            const modalTitle = doc2.querySelector('#modal-title');
            assert(modalTitle.textContent.length > 0, `模态框有标题 (${modalTitle.textContent})`);

            console.log('\n=== Test 10: 标记完成 ===');
            // 关闭模态框
            doc2.querySelector('.modal-close').click();
            setTimeout(() => {
              // 找第一个 markDone 按钮
              const doneBtn = cp.querySelector('.commitment-actions .btn');
              if (doneBtn) {
                doneBtn.click();
                setTimeout(() => {
                  const saved = JSON.parse(w2.localStorage.getItem('al_tracker_commitments'));
                  const c1 = saved.find(c => c.id === 'c1');
                  assert(c1.status === 'done', `c1 已标记为 done (实际: ${c1.status})`);
                  assert(c1.completedAt !== null, 'c1.completedAt 已设置');

                  console.log('\n=== Test 11: JSON 导出 ===');
                  const beforeLen = w2.localStorage.length;
                  // 模拟导出（不实际触发下载）
                  const data = {
                    profile: JSON.parse(w2.localStorage.getItem('al_tracker_profile')),
                    commitments: JSON.parse(w2.localStorage.getItem('al_tracker_commitments')),
                    reflections: JSON.parse(w2.localStorage.getItem('al_tracker_reflections'))
                  };
                  assert(data.profile.name === '测试用户', 'JSON 导出包含 profile');
                  assert(data.commitments.length === 2, 'JSON 导出包含 2 个承诺');
                  assert(data.reflections.length === 1, 'JSON 导出包含 1 条反思');

                  console.log('\n=== Test 12: 切换不同配置 ===');
                  // 测试每个配置的问题集
                  const sets = ['simple', 'standard', 'deep'];
                  sets.forEach(s => {
                    const qs = w2.QUESTIONS[s];
                    assert(qs.length > 0, `${s} 问题集存在 (${qs.length} 题)`);
                  });

                  console.log('\n=== 总结 ===');
                  console.log(pass ? '✅ 全部测试通过' : '❌ 有测试失败');
                  process.exit(pass ? 0 : 1);
                }, 100);
              }
            }, 100);
          }, 100);
        }
      }, 100);
    }, 100);
  }, 200);
}, 300);
