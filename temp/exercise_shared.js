// ============ Quiz answer feedback ============
function initQuiz(root) {
  root.querySelectorAll('.q').forEach(q => {
    const correct = q.dataset.correct;
    const submitted = q.querySelector('.q-submit');
    const feedback = q.querySelector('.q-feedback');
    const opts = q.querySelectorAll('.q-opts li');
    let sel = null;
    opts.forEach(li => {
      li.addEventListener('click', () => {
        if (q.classList.contains('done')) return;
        opts.forEach(o => o.classList.remove('sel'));
        li.classList.add('sel');
        sel = li.dataset.key;
      });
    });
    if (submitted) {
      submitted.addEventListener('click', () => {
        if (!sel) { alert('请先选择一个选项'); return; }
        q.classList.add('done');
        opts.forEach(li => {
          li.classList.add('disabled');
          if (li.dataset.key === correct) li.classList.add('correct');
          if (li.dataset.key === sel && sel !== correct) li.classList.add('wrong');
        });
        feedback.classList.add('show');
        if (sel === correct) feedback.classList.add('correct');
        else feedback.classList.add('wrong');
        updateProgress(root);
      });
    }
  });
}

function updateProgress(root) {
  const total = root.querySelectorAll('.q').length;
  const done = root.querySelectorAll('.q.done').length;
  const correct = root.querySelectorAll('.q-feedback.correct').length;
  const fill = root.querySelector('.progress-bar .fill');
  const stats = root.querySelector('.progress-bar .stats');
  if (fill) fill.style.width = (done / total * 100) + '%';
  if (stats) stats.textContent = '已完成 ' + done + ' / ' + total + ' · 答对 ' + correct;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.root').forEach(root => {
    if (root.classList.contains('quiz')) initQuiz(root);
  });
});

// ============ Answer card collapse ============
document.addEventListener('click', e => {
  if (e.target.classList && e.target.classList.contains('ans-toggle')) {
    const card = e.target.closest('.ans-card');
    card.classList.toggle('collapsible');
    card.classList.toggle('show');
    e.target.textContent = card.classList.contains('show') ? '收起' : '展开';
  }
});

// ============ Simulation tabs + 5-node progress ============
function initSimulation(root) {
  // Tabs
  const tabs = root.querySelectorAll('.sim-tab');
  const panels = root.querySelectorAll('.sim-panel');
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach((p, j) => p.classList.toggle('active', i === j));
    });
  });
  // Each panel: 5-node progress + choice selection
  panels.forEach(panel => {
    const nodes = panel.querySelectorAll('.node-bar li');
    const contents = panel.querySelectorAll('.node-content > div');
    const showNode = (idx) => {
      nodes.forEach((n, j) => {
        n.classList.toggle('active', j === idx);
        n.classList.toggle('done', j < idx);
      });
      contents.forEach((c, j) => c.style.display = j === idx ? 'block' : 'none');
    };
    showNode(0);
    nodes.forEach((node, i) => {
      node.addEventListener('click', () => showNode(i));
    });
    // Choice selection
    panel.querySelectorAll('.choice').forEach(ch => {
      ch.addEventListener('click', () => {
        const wrap = ch.closest('.node-content') || ch.closest('.node-content-wrap') || panel;
        wrap.querySelectorAll('.choice').forEach(c => c.classList.remove('sel'));
        ch.classList.add('sel');
        const fb = ch.parentElement.querySelector('.choice-feedback');
        if (fb) {
          panel.querySelectorAll('.choice-feedback').forEach(f => f.classList.remove('show'));
          fb.classList.add('show');
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.root.simulation').forEach(root => initSimulation(root));
});
