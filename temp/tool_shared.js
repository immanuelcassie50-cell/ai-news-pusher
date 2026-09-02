// ============ Tab 切换 ============
function initTabs(root) {
  const tabs = root.querySelectorAll('.tab');
  const panels = root.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.dataset.tab === target));
    });
  });
}

// ============ localStorage 持久化 ============
function initStorage(root, key) {
  const STORAGE_KEY = 'flawless_tool_' + key;
  const blankPanel = root.querySelector('.blank-panel');
  if (!blankPanel) return;
  const inputs = blankPanel.querySelectorAll('.inp, .ta');
  const status = root.querySelector('.save-status');

  // 恢复
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    inputs.forEach((el, i) => {
      if (saved[i] !== undefined) el.value = saved[i];
    });
    if (Object.keys(saved).length) {
      status.textContent = '✓ 已恢复上次填写';
      setTimeout(() => status.textContent = '', 2000);
    }
  } catch(e) {}

  // 自动保存
  let saveTimer = null;
  const save = () => {
    status.textContent = '保存中…';
    status.className = 'save-status saving';
    const data = {};
    inputs.forEach((el, i) => data[i] = el.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      status.textContent = '✓ 已保存到本地';
      status.className = 'save-status';
      setTimeout(() => status.textContent = '', 1500);
    }, 400);
  };
  inputs.forEach(el => el.addEventListener('input', save));

  // 清空
  const clearBtn = root.querySelector('.btn-clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('确定要清空所有填写吗？此操作不可恢复。')) {
        inputs.forEach(el => el.value = '');
        localStorage.removeItem(STORAGE_KEY);
        status.textContent = '已清空';
        setTimeout(() => status.textContent = '', 1500);
      }
    });
  }
}

// ============ 打印 ============
function initPrint(root) {
  const btn = root.querySelector('.btn-print');
  if (btn) btn.addEventListener('click', () => {
    const filledTab = root.querySelector('.tab[data-tab="filled"]');
    if (filledTab) filledTab.click();
    setTimeout(() => window.print(), 200);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.root').forEach(root => {
    initTabs(root);
    const key = root.dataset.key || 'default';
    initStorage(root, key);
    initPrint(root);
  });
});
