# -*- coding: utf-8 -*-
import os

base_dir = r"D:/新课开发/领导力/一线执行/05-融进手头的活：让AI出现在你本来就在用的地方"
output_file = os.path.join(base_dir, "教学文档_HTML展示版.html")

part8 = '''<!-- COURSE CLOSING -->
<section class="closing" style="background:var(--warm);padding:96px 0">
  <div class="container">
    <div style="margin-bottom:56px">
      <p class="eyebrow reveal">课程收尾</p>
      <h2 class="serif reveal d1" style="font-family:var(--font-display);font-size:32px;font-weight:400;color:var(--ink);margin:14px 0 12px;line-height:1.35">我的AI嵌入方案</h2>
      <p class="reveal d2" style="font-size:14px;color:var(--gray-50)">90分钟课程的完整产出——把你在前面所有练习中填写的内容，整合成一份完整的方案</p>
    </div>

    <!-- Exercise 7: Final Output -->
    <div class="reveal" style="background:var(--surface);border-radius:6px;border:1px solid var(--gray-10);overflow:hidden;margin-bottom:48px">
      <div style="background:var(--red);color:#fff;padding:24px 28px">
        <h3 style="font-size:16px;font-weight:700;margin-bottom:4px">练习7：我的AI嵌入方案（最终产出）</h3>
        <p style="font-size:12px;opacity:0.8">这是本课程的最终产出。请根据你在前面六个练习中填写的内容，完成下面的方案框架。</p>
      </div>
      <div style="padding:32px">
        <!-- Part 1 -->
        <div style="margin-bottom:40px">
          <h4 style="font-size:14px;font-weight:700;color:var(--red);margin-bottom:16px;text-transform:uppercase;letter-spacing:.1em">第一部分：我的高频工作界面</h4>
          <table style="width:100%;border-collapse:collapse;font-size:13px">
            <thead>
              <tr style="border-bottom:2px solid var(--gray-10)">
                <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">序号</th>
                <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">系统/界面名称</th>
                <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">每天打开次数</th>
                <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">主要用途</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:14px;color:var(--gray-50)">1</td><td style="padding:14px"></td><td style="padding:14px"></td><td style="padding:14px"></td></tr>
              <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:14px;color:var(--gray-50)">2</td><td style="padding:14px"></td><td style="padding:14px"></td><td style="padding:14px"></td></tr>
              <tr><td style="padding:14px;color:var(--gray-50)">3</td><td style="padding:14px"></td><td style="padding:14px"></td><td style="padding:14px"></td></tr>
            </tbody>
          </table>
          <div style="margin-top:20px">
            <p style="font-size:13px;font-weight:700;color:var(--ink);margin-bottom:12px">我的"重复又讨厌"清单：</p>
            <table style="width:100%;border-collapse:collapse;font-size:13px">
              <thead>
                <tr style="border-bottom:2px solid var(--gray-10)">
                  <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">序号</th>
                  <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">操作名称</th>
                  <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">所属界面</th>
                  <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">每次耗时</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:14px;color:var(--gray-50)">1</td><td style="padding:14px"></td><td style="padding:14px"></td><td style="padding:14px"></td></tr>
                <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:14px;color:var(--gray-50)">2</td><td style="padding:14px"></td><td style="padding:14px"></td><td style="padding:14px"></td></tr>
                <tr><td style="padding:14px;color:var(--gray-50)">3</td><td style="padding:14px"></td><td style="padding:14px"></td><td style="padding:14px"></td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Part 2 -->
        <div style="margin-bottom:40px">
          <h4 style="font-size:14px;font-weight:700;color:var(--red);margin-bottom:16px;text-transform:uppercase;letter-spacing:.1em">第二部分：我的第一个甜蜜点任务</h4>
          <div style="background:var(--gray-05);border-radius:4px;padding:20px;margin-bottom:16px">
            <p style="font-size:12px;color:var(--gray-50);margin-bottom:8px">我选定的甜蜜点任务：</p>
            <p style="font-size:14px;font-weight:600;color:var(--ink)">_______________</p>
          </div>
          <div style="background:var(--gray-05);border-radius:4px;padding:20px">
            <p style="font-size:12px;color:var(--gray-50);margin-bottom:8px">为什么选它？（至少3条）</p>
            <p style="font-size:13px;color:var(--gray-70);line-height:2">1. _________________________________________________<br>2. _________________________________________________<br>3. _________________________________________________</p>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:16px">
            <div style="background:var(--red-wash);border-radius:4px;padding:14px;text-align:center"><p style="font-size:11px;color:var(--gray-50);margin-bottom:4px">重复性</p><p style="font-size:16px;font-weight:700;color:var(--red)">___</p></div>
            <div style="background:var(--red-wash);border-radius:4px;padding:14px;text-align:center"><p style="font-size:11px;color:var(--gray-50);margin-bottom:4px">讨厌度</p><p style="font-size:16px;font-weight:700;color:var(--red)">___</p></div>
            <div style="background:var(--red-wash);border-radius:4px;padding:14px;text-align:center"><p style="font-size:11px;color:var(--gray-50);margin-bottom:4px">可衡量性</p><p style="font-size:16px;font-weight:700;color:var(--red)">___</p></div>
            <div style="background:var(--red-wash);border-radius:4px;padding:14px;text-align:center"><p style="font-size:11px;color:var(--gray-50);margin-bottom:4px">失败代价低</p><p style="font-size:16px;font-weight:700;color:var(--red)">___</p></div>
          </div>
        </div>
        <!-- Part 3 -->
        <div style="margin-bottom:40px">
          <h4 style="font-size:14px;font-weight:700;color:var(--red);margin-bottom:16px;text-transform:uppercase;letter-spacing:.1em">第三部分：我的AI嵌入路径</h4>
          <div style="display:flex;gap:24px;margin-bottom:16px">
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer"><input type="checkbox"> 侧边栏/插件式</label>
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer"><input type="checkbox"> 内嵌按钮式</label>
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer"><input type="checkbox"> 浏览器扩展式</label>
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer"><input type="checkbox"> 其他：_______________</label>
          </div>
          <div style="background:var(--gray-05);border-radius:4px;padding:20px">
            <p style="font-size:12px;color:var(--gray-50);margin-bottom:8px">选择的理由：</p>
            <p style="font-size:13px;height:40px;color:var(--gray-70)">_________________________________________________</p>
          </div>
        </div>
        <!-- Part 4 -->
        <div style="margin-bottom:40px">
          <h4 style="font-size:14px;font-weight:700;color:var(--red);margin-bottom:16px;text-transform:uppercase;letter-spacing:.1em">第四部分：切换成本评估</h4>
          <div style="display:flex;gap:32px;align-items:center;margin-bottom:16px">
            <div style="background:var(--gray-05);border-radius:4px;padding:14px 20px">
              <p style="font-size:11px;color:var(--gray-50);margin-bottom:4px">切换成本得分</p>
              <p style="font-size:24px;font-weight:700;color:var(--red)">___分</p>
            </div>
            <div style="font-size:12px;color:var(--gray-70)">
              <p>7-14分：低切换成本，可以直接用</p>
              <p>15-21分：中等切换成本，需要优化</p>
              <p>22分以上：高切换成本，需要重新设计</p>
            </div>
          </div>
          <div style="background:var(--gray-05);border-radius:4px;padding:20px">
            <p style="font-size:12px;color:var(--gray-50);margin-bottom:8px">如果切换成本偏高，我计划这样优化：</p>
            <p style="font-size:13px;height:60px;color:var(--gray-70)">1. _________________________________________________<br>2. _________________________________________________<br>3. _________________________________________________</p>
          </div>
        </div>
        <!-- Part 5 & 6 combined -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px">
          <div>
            <h4 style="font-size:14px;font-weight:700;color:var(--red);margin-bottom:16px;text-transform:uppercase;letter-spacing:.1em">第五部分：落地可行性最终确认</h4>
            <div style="background:var(--gray-05);border-radius:4px;padding:16px;font-size:12px">
              <p style="margin-bottom:8px">□ AI功能嵌入在本来就在用的界面里</p>
              <p style="margin-bottom:8px">□ 调用AI的点击次数不超过3次</p>
              <p style="margin-bottom:8px">□ 不需要额外打开新软件</p>
              <p style="margin-bottom:8px">□ 不需要复制粘贴</p>
              <p style="margin-bottom:8px">□ AI输出可以直连工作流</p>
              <p style="margin-bottom:8px">□ 清楚知道AI能做什么、不能做什么</p>
              <p>□ 有把握处理AI出问题的情况</p>
            </div>
          </div>
          <div>
            <h4 style="font-size:14px;font-weight:700;color:var(--red);margin-bottom:16px;text-transform:uppercase;letter-spacing:.1em">第六部分：预期收益与时间投资</h4>
            <div style="background:var(--gray-05);border-radius:4px;padding:16px;font-size:12px;color:var(--gray-70);line-height:2">
              <p>甜蜜点任务原来每次花：<strong style="color:var(--ink)">___分钟</strong></p>
              <p>用AI之后预计每次花：<strong style="color:var(--ink)">___分钟</strong></p>
              <p>预计节省：<strong style="color:var(--red)">___分钟/次</strong></p>
              <p>预计使用频率：<strong style="color:var(--ink)">___次/周</strong></p>
              <p>每周累计节省：<strong style="color:var(--red)">___分钟</strong></p>
              <p>每月累计节省：<strong style="color:var(--red)">___分钟</strong></p>
              <p>时间投资：<strong style="color:var(--ink)">___分钟</strong></p>
              <p>投资回报比：<strong style="color:var(--red)">___</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Process Flow -->
    <div class="reveal" style="background:var(--gray-90);border-radius:6px;padding:48px;color:#fff;margin-bottom:48px;text-align:center">
      <h3 style="font-size:20px;font-weight:700;margin-bottom:32px">甜蜜点任务的完整路径</h3>
      <div style="display:flex;justify-content:center;align-items:center;gap:0;font-size:13px">
        <div style="background:rgba(255,255,255,0.08);border-radius:4px;padding:20px 24px;min-width:140px">
          <p style="font-size:20px;margin-bottom:8px">1️⃣</p>
          <p style="font-weight:700">系统扫描</p>
          <p style="font-size:11px;opacity:0.6;margin-top:4px">找到高频工作界面</p>
        </div>
        <div style="width:40px;height:2px;background:var(--red)"></div>
        <div style="background:rgba(255,255,255,0.08);border-radius:4px;padding:20px 24px;min-width:140px">
          <p style="font-size:20px;margin-bottom:8px">2️⃣</p>
          <p style="font-weight:700">识别甜蜜点</p>
          <p style="font-size:11px;opacity:0.6;margin-top:4px">找出重复又讨厌的操作</p>
        </div>
        <div style="width:40px;height:2px;background:var(--red)"></div>
        <div style="background:rgba(255,255,255,0.08);border-radius:4px;padding:20px 24px;min-width:140px">
          <p style="font-size:20px;margin-bottom:8px">3️⃣</p>
          <p style="font-weight:700">评估切换成本</p>
          <p style="font-size:11px;opacity:0.6;margin-top:4px">确保嵌入方式足够顺畅</p>
        </div>
        <div style="width:40px;height:2px;background:var(--red)"></div>
        <div style="background:rgba(255,255,255,0.08);border-radius:4px;padding:20px 24px;min-width:140px">
          <p style="font-size:20px;margin-bottom:8px">4️⃣</p>
          <p style="font-weight:700">第一次使用</p>
          <p style="font-size:11px;opacity:0.6;margin-top:4px">体验"1小时→10分钟"</p>
        </div>
        <div style="width:40px;height:2px;background:var(--red)"></div>
        <div style="background:rgba(184,16,37,0.4);border-radius:4px;padding:20px 24px;min-width:140px;border:1px solid var(--red)">
          <p style="font-size:20px;margin-bottom:8px">5️⃣</p>
          <p style="font-weight:700">延伸扩展</p>
          <p style="font-size:11px;opacity:0.8;margin-top:4px">顺藤摸瓜找下一个</p>
        </div>
      </div>
    </div>

    <!-- Key Reminders -->
    <div class="reveal" style="background:var(--red);border-radius:6px;padding:40px;color:#fff">
      <h3 style="font-size:20px;font-weight:700;margin-bottom:24px;text-align:center">最后的提醒：AI嵌入是一个持续过程</h3>
      <p style="font-size:14px;opacity:0.9;margin-bottom:24px;text-align:center">完成这份方案，不是结束，而是开始。AI嵌入不是一个"一次性的项目"，而是一个持续的过程。</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
        <div style="background:rgba(255,255,255,0.1);border-radius:4px;padding:24px">
          <p style="font-size:28px;margin-bottom:12px">💡</p>
          <p style="font-size:13px;font-weight:700;margin-bottom:8px">第一句</p>
          <p style="font-size:12px;opacity:0.85;line-height:1.7">不要等到"完全准备好了"才开始用AI。先完成，比完美重要。</p>
        </div>
        <div style="background:rgba(255,255,255,0.1);border-radius:4px;padding:24px">
          <p style="font-size:28px;margin-bottom:12px">🔄</p>
          <p style="font-size:13px;font-weight:700;margin-bottom:8px">第二句</p>
          <p style="font-size:12px;opacity:0.85;line-height:1.7">如果一个AI功能用了三次之后你还是觉得麻烦，它就不是一个好嵌入。放弃它，去找更顺手的。</p>
        </div>
        <div style="background:rgba(255,255,255,0.1);border-radius:4px;padding:24px">
          <p style="font-size:28px;margin-bottom:12px">🤝</p>
          <p style="font-size:13px;font-weight:700;margin-bottom:8px">第三句</p>
          <p style="font-size:12px;opacity:0.85;line-height:1.7">你的经验比你自己以为的更值钱。当你找到一个好用的AI用法，不要只是自己用——告诉你的同事。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- APPENDIX -->
<section class="appendix" style="background:var(--surface);padding:96px 0">
  <div class="container">
    <div style="margin-bottom:56px">
      <p class="eyebrow reveal">附录</p>
      <h2 class="serif reveal d1" style="font-family:var(--font-display);font-size:32px;font-weight:400;color:var(--ink);margin:14px 0 12px;line-height:1.35">常见问题与应对</h2>
    </div>

    <div style="display:flex;flex-direction:column;gap:24px">
      <div class="reveal" style="background:var(--warm);border-radius:6px;padding:32px;border:1px solid var(--gray-10)">
        <h4 style="font-size:15px;font-weight:700;color:var(--ink);margin-bottom:12px">Q1：我们公司的系统是老的，IT资源又不够，怎么办？</h4>
        <p style="font-size:13px;color:var(--gray-70);line-height:1.9"><strong style="color:var(--red)">A：</strong>这种情况建议从浏览器扩展开始。浏览器扩展几乎不需要IT支持，员工自己装就行。另一个思路是：找你们部门里"IT能力强一点的年轻人"，让他先探索出一个可行的方案，再分享给其他人。种子选手机制在AI落地中非常有效。</p>
      </div>
      <div class="reveal" style="background:var(--warm);border-radius:6px;padding:32px;border:1px solid var(--gray-10)">
        <h4 style="font-size:15px;font-weight:700;color:var(--ink);margin-bottom:12px">Q2：如果我的工作需要用公司的保密数据，不能用外部AI工具，怎么办？</h4>
        <p style="font-size:13px;color:var(--gray-70);line-height:1.9"><strong style="color:var(--red)">A：</strong>你们的AI嵌入方案一定要跟IT部门和安全部门一起制定，确保：1. 使用的AI工具通过了公司的安全审计；2. 数据不会传到外部服务器；3. 有明确的数据使用规范。如果公司的AI工具暂时跟不上，可以先从"不涉及保密数据"的场景开始用。</p>
      </div>
      <div class="reveal" style="background:var(--warm);border-radius:6px;padding:32px;border:1px solid var(--gray-10)">
        <h4 style="font-size:15px;font-weight:700;color:var(--ink);margin-bottom:12px">Q3：同事都觉得用AI是"偷懒"，我该怎么办？</h4>
        <p style="font-size:13px;color:var(--gray-70);line-height:1.9"><strong style="color:var(--red)">A：</strong>这个问题需要用行动来解决，而不是用辩论。当你用AI把工作做得更快、更好，别人自然会注意到。关键是：不要在同事面前强调"AI帮我省了多久"，而是让他们看到"我用AI把这件事做得更好了"。另一个方法是：主动分享你的好用提示词和使用技巧。</p>
      </div>
      <div class="reveal" style="background:var(--warm);border-radius:6px;padding:32px;border:1px solid var(--gray-10)">
        <h4 style="font-size:15px;font-weight:700;color:var(--ink);margin-bottom:12px">Q4：如果AI嵌入之后，领导觉得"既然AI能做了，那你的工作量应该翻倍"怎么办？</h4>
        <p style="font-size:13px;color:var(--gray-70);line-height:1.9"><strong style="color:var(--red)">A：</strong>应对这个问题的关键在于：1. 不要单独行动——如果整个部门一起上AI，整体效率提升可以被用来争取更合理的工作安排；2. 用效率提升的成果为自己争取空间——AI节省出来的时间，应该用来做更有价值的事情；3. 让成果被看见——把AI帮你解决的问题记录下来，在汇报时展示出来。</p>
      </div>
    </div>

    <!-- Feedback Form -->
    <div class="reveal" style="margin-top:64px;background:var(--red-wash);border-radius:6px;padding:40px;border:1px solid rgba(184,16,37,0.15)">
      <h3 style="font-size:18px;font-weight:700;color:var(--ink);margin-bottom:8px">课程反馈表</h3>
      <p style="font-size:13px;color:var(--gray-70);margin-bottom:24px">帮助我们改进这门课程：请花两分钟填写以下反馈表，你的意见会直接影响下一期课程的设计。</p>
      <table style="width:100%;border-collapse:collapse;font-size:13px;background:var(--surface);border-radius:4px;overflow:hidden">
        <thead>
          <tr style="background:var(--ink);color:#fff">
            <th style="text-align:left;padding:14px 16px;font-weight:600">反馈项目</th>
            <th style="text-align:center;padding:14px 16px;font-weight:600">评分（1-5）</th>
            <th style="text-align:left;padding:14px 16px;font-weight:600">具体意见</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px">课程内容对实际工作有帮助</td><td style="padding:16px;text-align:center">___</td><td style="padding:16px"></td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px">练习和表单的设计合理</td><td style="padding:16px;text-align:center">___</td><td style="padding:16px"></td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px">课程节奏适中</td><td style="padding:16px;text-align:center">___</td><td style="padding:16px"></td></tr>
          <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px">案例和场景接地气</td><td style="padding:16px;text-align:center">___</td><td style="padding:16px"></td></tr>
          <tr><td style="padding:16px">讲师讲解清晰</td><td style="padding:16px;text-align:center">___</td><td style="padding:16px"></td></tr>
        </tbody>
      </table>
      <div style="margin-top:20px">
        <p style="font-size:13px;font-weight:600;color:var(--ink);margin-bottom:8px">你最印象深刻的1-2个知识点是什么？</p>
        <div style="background:var(--surface);border-radius:4px;padding:16px;height:60px;border:1px solid var(--gray-10)"></div>
      </div>
      <div style="margin-top:16px">
        <p style="font-size:13px;font-weight:600;color:var(--ink);margin-bottom:8px">你认为最需要改进的地方是什么？</p>
        <div style="background:var(--surface);border-radius:4px;padding:16px;height:60px;border:1px solid var(--gray-10)"></div>
      </div>
    </div>
  </div>
</section>
'''

with open(output_file, 'a', encoding='utf-8') as f:
    f.write(part8)

print("Part 8 written: Course Closing and Appendix")
