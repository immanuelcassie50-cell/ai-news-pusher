# -*- coding: utf-8 -*-
import os

base_dir = r"D:/新课开发/领导力/一线执行/05-融进手头的活：让AI出现在你本来就在用的地方"
output_file = os.path.join(base_dir, "教学文档_HTML展示版.html")

part7 = '''<!-- MODULE 4: IMPLEMENTATION CHECK -->
<section class="module4" style="background:var(--surface);padding:96px 0">
  <div class="container">
    <div style="margin-bottom:56px">
      <p class="eyebrow reveal">模块四</p>
      <h2 class="serif reveal d1" style="font-family:var(--font-display);font-size:32px;font-weight:400;color:var(--ink);margin:14px 0 12px;line-height:1.35">落地检查——避免"工具切换成本"吃掉所有收益</h2>
      <p class="reveal d2" style="font-size:14px;color:var(--gray-50)">本模块结束时，你需要：理解"工具切换成本"如何悄悄吃掉AI的收益，掌握评估和应对方法</p>
    </div>

    <!-- Section 4.1 Story -->
    <div class="reveal" style="background:var(--gray-05);border-radius:6px;padding:40px;border:1px solid var(--gray-10);margin-bottom:48px;position:relative">
      <div style="position:absolute;top:20px;right:20px;background:var(--red);color:#fff;font-size:10px;font-weight:700;padding:6px 12px;border-radius:10px;text-transform:uppercase;letter-spacing:.1em">场景</div>
      <h3 style="font-size:18px;font-weight:700;color:var(--ink);margin-bottom:16px">一个你可能没注意到的成本：工具切换成本</h3>
      <p style="font-size:13.5px;color:var(--gray-70);line-height:2;margin-bottom:16px">小李是公司的销售内勤，每天要处理大量的客户邮件。他的甜蜜点任务是：写客户回复邮件。他找到了一款AI写作工具，效果确实好——帮他生成邮件草稿，从想半小时缩短到五分钟。<br><br>但三个月后，小李几乎不用那个AI工具了。</p>
      <p style="font-size:13px;font-weight:700;color:var(--red);margin-bottom:12px">为什么？</p>
      <p style="font-size:13px;color:var(--gray-70);line-height:1.9;background:var(--surface);padding:16px;border-radius:4px;border-left:3px solid var(--red)">因为他的工作流是这样的：收到客户邮件 → 复制关键信息 → 打开CRM系统粘贴 → 切换到Excel做统计 → 切换到AI写作工具写回复 → 复制回复内容 → 粘贴回企业邮箱 → 发送<br><br>在这个流程里，用AI写作确实省了15分钟，但切换工具、复制粘贴、重新排版这些操作加起来，又多花了10分钟。<strong style="color:var(--red)">净收益只有5分钟。</strong></p>
    </div>

    <!-- Three Dimensions -->
    <div class="reveal" style="margin-bottom:48px">
      <h3 style="font-size:20px;font-weight:700;color:var(--ink);margin-bottom:24px;text-align:center">切换成本的三个维度</h3>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">
        <div style="background:linear-gradient(135deg,var(--red) 0%,var(--red-hi) 100%);border-radius:6px;padding:32px;color:#fff;text-align:center">
          <div style="width:64px;height:64px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px">
            <span style="font-size:28px">🖱️</span>
          </div>
          <h4 style="font-size:16px;font-weight:700;margin-bottom:12px">物理切换成本</h4>
          <p style="font-size:12px;opacity:0.9;line-height:1.8">切换工具需要做的实际动作：打开新软件、登录账号、找到对应功能、关闭后回到原软件</p>
        </div>
        <div style="background:var(--gray-90);border-radius:6px;padding:32px;color:#fff;text-align:center">
          <div style="width:64px;height:64px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px">
            <span style="font-size:28px">🧠</span>
          </div>
          <h4 style="font-size:16px;font-weight:700;margin-bottom:12px">认知切换成本</h4>
          <p style="font-size:12px;opacity:0.75;line-height:1.8">切换工具时需要重新"加载"新界面的注意力消耗：适应新界面、找按钮、理解功能逻辑</p>
        </div>
        <div style="background:var(--ink);border-radius:6px;padding:32px;color:#fff;text-align:center">
          <div style="width:64px;height:64px;background:rgba(255,255,255,0.08);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px">
            <span style="font-size:28px">💔</span>
          </div>
          <h4 style="font-size:16px;font-weight:700;margin-bottom:12px">情感切换成本</h4>
          <p style="font-size:12px;opacity:0.65;line-height:1.8">切换工具带来的心理障碍和抗拒感："好麻烦""算了吧""用老办法也行"</p>
        </div>
      </div>
      <p class="reveal" style="text-align:center;font-size:14px;color:var(--red);font-weight:600;margin-top:24px;padding:16px;background:var(--red-wash);border-radius:4px">这三个成本里，最可怕的是情感切换成本——它会让人在意识层面就放弃尝试。</p>
    </div>

    <!-- Exercise 5 -->
    <div class="reveal" style="background:var(--surface);border-radius:6px;border:1px solid var(--gray-10);overflow:hidden;margin-bottom:48px">
      <div style="background:var(--ink);color:#fff;padding:20px 28px">
        <h3 style="font-size:14px;font-weight:700;margin-bottom:4px">练习5：切换成本评估表</h3>
        <p style="font-size:12px;opacity:0.7">针对你选定的甜蜜点任务，评估用AI来完成它需要多少切换成本。每一项1-5分，分数越高代表切换成本越高。</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:var(--gray-05);border-bottom:1px solid var(--gray-10)">
            <th style="text-align:left;padding:14px 20px;font-weight:600;color:var(--gray-50)">切换成本维度</th>
            <th style="text-align:left;padding:14px 20px;font-weight:600;color:var(--gray-50)">具体问题</th>
            <th style="text-align:center;padding:14px 20px;font-weight:600;color:var(--gray-50)">得分（1-5）</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px 20px; rowspan:3;color:var(--red);font-weight:600">物理切换</td><td style="padding:16px 20px">用AI需要额外打开软件/网页/标签页吗？</td><td style="padding:16px 20px;text-align:center"></td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px 20px">需要复制粘贴内容到AI工具，再复制回来吗？</td><td style="padding:16px 20px;text-align:center"></td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px 20px">需要登录账号或切换账号吗？</td><td style="padding:16px 20px;text-align:center"></td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px 20px; rowspan:2;color:var(--red);font-weight:600">认知切换</td><td style="padding:16px 20px">AI工具的界面和你平时用的软件差异大吗？</td><td style="padding:16px 20px;text-align:center"></td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px 20px">需要学习新的操作流程吗？</td><td style="padding:16px 20px;text-align:center"></td></tr>
          <tr><td style="padding:16px 20px; rowspan:2;color:var(--red);font-weight:600">情感切换</td><td style="padding:16px 20px">你心里会觉得"有点麻烦"吗？</td><td style="padding:16px 20px;text-align:center"></td></tr>
          <tr><td style="padding:16px 20px">如果AI出了问题，你会有心理负担吗？</td><td style="padding:16px 20px;text-align:center"></td></tr>
        </tbody>
      </table>
      <div style="padding:20px 28px;background:var(--gray-05)">
        <p style="font-size:12px;color:var(--gray-70)"><strong style="color:var(--ink)">得分解读：</strong>7-14分低切换成本可以直接用；15-21分中等切换成本需要优化；22分以上高切换成本需要重新设计</p>
      </div>
    </div>

    <!-- Time Comparison -->
    <div class="reveal" style="background:var(--gray-90);border-radius:6px;padding:40px;color:#fff;margin-bottom:48px">
      <h3 style="font-size:18px;font-weight:700;margin-bottom:24px;text-align:center">切换成本如何悄悄吃掉AI收益</h3>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
        <div style="background:rgba(255,255,255,0.05);border-radius:6px;padding:24px;text-align:center">
          <p style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:12px">方式A：不用AI</p>
          <p style="font-size:28px;font-weight:700;color:#fff;margin-bottom:8px">30分钟</p>
          <p style="font-size:11px;color:rgba(255,255,255,0.5)">纯收益：0分钟（基准线）</p>
        </div>
        <div style="background:rgba(184,16,37,0.3);border-radius:6px;padding:24px;text-align:center;border:1px solid var(--red)">
          <p style="font-size:12px;color:rgba(255,255,255,0.7);margin-bottom:12px">方式B：用AI，但切换成本高</p>
          <p style="font-size:28px;font-weight:700;color:var(--red-light);margin-bottom:8px">25分钟</p>
          <p style="font-size:11px;color:rgba(255,255,255,0.6)">节省：5分钟 | 效率提升：16.7%</p>
        </div>
        <div style="background:rgba(255,255,255,0.1);border-radius:6px;padding:24px;text-align:center">
          <p style="font-size:12px;color:rgba(255,255,255,0.7);margin-bottom:12px">方式C：用AI，切换成本低</p>
          <p style="font-size:28px;font-weight:700;color:#fff;margin-bottom:8px">10分钟</p>
          <p style="font-size:11px;color:rgba(255,255,255,0.6)">节省：20分钟 | 效率提升：66.7%</p>
        </div>
      </div>
      <p style="text-align:center;font-size:13px;color:rgba(255,255,255,0.7);margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.1)">同一个AI功能，切换成本不同，实际价值可以差三四倍。这就是为什么"把AI嵌入员工本来就在用的地方"如此重要。</p>
    </div>

    <!-- Exercise 6: Final Check -->
    <div class="reveal" style="background:var(--surface);border-radius:6px;border:1px solid var(--gray-10);overflow:hidden">
      <div style="background:var(--red);color:#fff;padding:20px 28px">
        <h3 style="font-size:14px;font-weight:700;margin-bottom:4px">练习6：落地可行性最终检查</h3>
        <p style="font-size:12px;opacity:0.8">针对你选定的甜蜜点任务和计划使用的AI工具，逐一确认以下事项。</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <tbody>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:18px 20px;width:60%">1. 这个AI功能是否嵌入在我本来就在用的界面里？</td><td style="padding:18px 20px">□ 是  □ 否</td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:18px 20px">2. 从想用AI到调用AI，需要的点击次数是否不超过3次？</td><td style="padding:18px 20px">□ 是  □ 否</td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:18px 20px">3. 是否不需要额外打开新的软件/网页/标签页？</td><td style="padding:18px 20px">□ 是  □ 否</td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:18px 20px">4. 是否不需要复制粘贴内容？</td><td style="padding:18px 20px">□ 是  □ 否</td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:18px 20px">5. AI输出的结果是否可以直连到我的工作流里？</td><td style="padding:18px 20px">□ 是  □ 否</td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:18px 20px">6. 我是否清楚地知道AI能帮我做什么、不能做什么？</td><td style="padding:18px 20px">□ 是  □ 否</td></tr>
          <tr><td style="padding:18px 20px">7. 如果AI出了问题，我是否有把握自己处理或绕过？</td><td style="padding:18px 20px">□ 是  □ 否</td></tr>
        </tbody>
      </table>
      <div style="padding:20px 28px;background:var(--gray-05)">
        <p style="font-size:12px;color:var(--gray-70)"><strong style="color:var(--ink)">全部是"是"：</strong>★★★★★ 可以开始使用了  |  <strong style="color:var(--ink)">有1-2个"否"：</strong>★★★ 需要解决障碍  |  <strong style="color:var(--ink)">有3个以上"否"：</strong>★★ 建议重新设计</p>
      </div>
    </div>
  </div>
</section>
'''

with open(output_file, 'a', encoding='utf-8') as f:
    f.write(part7)

print("Part 7 written: Module 4")
