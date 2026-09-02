# -*- coding: utf-8 -*-
import os

base_dir = r"D:/新课开发/领导力/一线执行/05-融进手头的活：让AI出现在你本来就在用的地方"
output_file = os.path.join(base_dir, "教学文档_HTML展示版.html")

remaining = '''<!-- MODULE 2: INTEGRATION PATHS -->
<section class="module2" style="background:var(--surface);padding:96px 0">
  <div class="container">
    <div style="margin-bottom:56px">
      <p class="eyebrow reveal">模块二</p>
      <h2 class="serif reveal d1" style="font-family:var(--font-display);font-size:32px;font-weight:400;color:var(--ink);margin:14px 0 12px;line-height:1.35">嵌入路径——在这些界面里直接调用AI的方法</h2>
      <p class="reveal d2" style="font-size:14px;color:var(--gray-50)">本模块结束时，你需要：了解三种主流的AI嵌入方式，能说出每种方式的优缺点和适用场景</p>
    </div>

    <div style="margin-bottom:48px">
      <h3 class="reveal" style="font-size:22px;font-weight:700;color:var(--ink);margin-bottom:32px;text-align:center">三种嵌入路径：你的AI可以出现在哪</h3>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">
        <!-- Type 1 -->
        <div class="reveal" style="background:var(--warm);border-radius:6px;padding:32px;border:1px solid var(--gray-10);position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:4px;background:var(--red)"></div>
          <div style="background:var(--red-wash);width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px">
            <span style="font-size:24px">📊</span>
          </div>
          <h4 style="font-size:16px;font-weight:700;color:var(--ink);margin-bottom:12px">类型一：侧边栏/插件式</h4>
          <p style="font-size:12px;color:var(--gray-50);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px">Sidebar / Plugin</p>
          <p style="font-size:13px;color:var(--gray-70);line-height:1.8;margin-bottom:20px">在现有软件界面旁边增加一个AI助手面板。钉钉、企业微信等主流协同工具都有类似AI插件。</p>
          <div style="border-top:1px solid var(--gray-10);padding-top:16px">
            <p style="font-size:11px;font-weight:700;color:var(--ink);margin-bottom:8px">优点</p>
            <p style="font-size:12px;color:var(--gray-70);line-height:1.7">不需要切换界面，AI就在你旁边；使用门槛低，点一下就能用</p>
          </div>
          <div style="border-top:1px solid var(--gray-10);padding-top:16px;margin-top:12px">
            <p style="font-size:11px;font-weight:700;color:var(--ink);margin-bottom:8px">缺点</p>
            <p style="font-size:12px;color:var(--gray-70);line-height:1.7">功能受限于平台提供的能力；不是所有软件都有这类插件</p>
          </div>
        </div>
        <!-- Type 2 -->
        <div class="reveal d1" style="background:var(--warm);border-radius:6px;padding:32px;border:1px solid var(--gray-10);position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:4px;background:var(--red-hi)"></div>
          <div style="background:var(--red-wash);width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px">
            <span style="font-size:24px">🔘</span>
          </div>
          <h4 style="font-size:16px;font-weight:700;color:var(--ink);margin-bottom:12px">类型二：内嵌按钮式</h4>
          <p style="font-size:12px;color:var(--gray-50);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px">Embedded Button</p>
          <p style="font-size:13px;color:var(--gray-70);line-height:1.8;margin-bottom:20px">把AI功能直接做到现有系统的功能按钮里。比如ERP的"导出报表"旁边加一个"AI解读报表"按钮。</p>
          <div style="border-top:1px solid var(--gray-10);padding-top:16px">
            <p style="font-size:11px;font-weight:700;color:var(--ink);margin-bottom:8px">优点</p>
            <p style="font-size:12px;color:var(--gray-70);line-height:1.7">完全嵌在工作流里，不需要额外操作步骤；员工不需要改变任何使用习惯</p>
          </div>
          <div style="border-top:1px solid var(--gray-10);padding-top:16px;margin-top:12px">
            <p style="font-size:11px;font-weight:700;color:var(--ink);margin-bottom:8px">缺点</p>
            <p style="font-size:12px;color:var(--gray-70);line-height:1.7">需要开发资源；需要IT部门配合；采购的成品软件不一定能定制</p>
          </div>
        </div>
        <!-- Type 3 -->
        <div class="reveal d2" style="background:var(--warm);border-radius:6px;padding:32px;border:1px solid var(--gray-10);position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:4px;background:var(--red-muted)"></div>
          <div style="background:var(--red-wash);width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px">
            <span style="font-size:24px">🧩</span>
          </div>
          <h4 style="font-size:16px;font-weight:700;color:var(--ink);margin-bottom:12px">类型三：浏览器扩展式</h4>
          <p style="font-size:12px;color:var(--gray-50);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px">Browser Extension</p>
          <p style="font-size:13px;color:var(--gray-70);line-height:1.8;margin-bottom:20px">用浏览器扩展程序在特定网页上增加AI功能。可以在任意网页上划词调用AI、增加快捷按钮。</p>
          <div style="border-top:1px solid var(--gray-10);padding-top:16px">
            <p style="font-size:11px;font-weight:700;color:var(--ink);margin-bottom:8px">优点</p>
            <p style="font-size:12px;color:var(--gray-70);line-height:1.7">几乎可以给任何网页增加AI能力；部署简单，员工自己就能装</p>
          </div>
          <div style="border-top:1px solid var(--gray-10);padding-top:16px;margin-top:12px">
            <p style="font-size:11px;font-weight:700;color:var(--ink);margin-bottom:8px">缺点</p>
            <p style="font-size:12px;color:var(--gray-70);line-height:1.7">需要员工自己安装配置；部分企业禁止使用浏览器扩展</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Decision Table -->
    <div class="reveal" style="background:var(--surface);border-radius:6px;border:1px solid var(--gray-10);overflow:hidden;margin-bottom:48px">
      <div style="background:var(--ink);color:#fff;padding:20px 28px">
        <h3 style="font-size:14px;font-weight:700">你适合哪种方式？决策表</h3>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:var(--gray-05);border-bottom:1px solid var(--gray-10)">
            <th style="text-align:left;padding:14px 20px;font-weight:600;color:var(--gray-50)">嵌入方式</th>
            <th style="text-align:left;padding:14px 20px;font-weight:600;color:var(--gray-50)">适合场景</th>
            <th style="text-align:left;padding:14px 20px;font-weight:600;color:var(--gray-50)">不适合场景</th>
            <th style="text-align:left;padding:14px 20px;font-weight:600;color:var(--gray-50)">部署难度</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--gray-10)">
            <td style="padding:16px 20px;color:var(--red);font-weight:600">侧边栏/插件</td>
            <td style="padding:16px 20px">已使用钉钉/企业微信等主流协同工具；IT部门支持；希望快速上线</td>
            <td style="padding:16px 20px">使用小众软件；安全策略严格的企业</td>
            <td style="padding:16px 20px"><span style="color:var(--red)">⭐ 简单</span></td>
          </tr>
          <tr style="border-bottom:1px solid var(--gray-10)">
            <td style="padding:16px 20px;color:var(--red);font-weight:600">内嵌按钮</td>
            <td style="padding:16px 20px">有定制开发能力或采购的软件支持二次开发；场景明确、流程固定</td>
            <td style="padding:16px 20px">纯采购的标准化软件；IT资源不足</td>
            <td style="padding:16px 20px"><span style="color:var(--red)">⭐⭐⭐ 中等</span></td>
          </tr>
          <tr>
            <td style="padding:16px 20px;color:var(--red);font-weight:600">浏览器扩展</td>
            <td style="padding:16px 20px">技术接受度高；使用浏览器访问内部系统；场景灵活多变</td>
            <td style="padding:16px 20px">安全策略严格；员工IT能力弱；Mac/Linux混合环境</td>
            <td style="padding:16px 20px"><span style="color:var(--red)">⭐⭐ 中等偏简单</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Exercise 3 -->
    <div class="reveal" style="background:var(--red-wash);border-radius:6px;padding:32px;border:1px solid rgba(184,16,37,0.15);margin-bottom:48px">
      <h3 style="font-size:15px;font-weight:700;color:var(--ink);margin-bottom:16px">练习3：我的嵌入路径选择</h3>
      <p style="font-size:13px;color:var(--gray-70);margin-bottom:20px">根据你的实际情况，判断你最适合哪种嵌入方式。在"适用程度"列打分（1-5分，5分最适用）。</p>
      <div style="background:var(--surface);border-radius:4px;padding:20px">
        <div style="display:grid;grid-template-columns:150px 1fr 120px 1fr;gap:16px;font-size:13px">
          <div style="font-weight:600;color:var(--gray-50)">嵌入方式</div>
          <div style="font-weight:600;color:var(--gray-50)">我是否在用这种方式？</div>
          <div style="font-weight:600;color:var(--gray-50)">适用程度（1-5）</div>
          <div style="font-weight:600;color:var(--gray-50)">我的理由/顾虑</div>
          <div style="padding:12px 0;border-bottom:1px solid var(--gray-10)">侧边栏/插件</div>
          <div style="padding:12px 0;border-bottom:1px solid var(--gray-10)">□ 是  □ 否</div>
          <div style="padding:12px 0;border-bottom:1px solid var(--gray-10)"></div>
          <div style="padding:12px 0;border-bottom:1px solid var(--gray-10)"></div>
          <div style="padding:12px 0;border-bottom:1px solid var(--gray-10)">内嵌按钮</div>
          <div style="padding:12px 0;border-bottom:1px solid var(--gray-10)">□ 是  □ 否</div>
          <div style="padding:12px 0;border-bottom:1px solid var(--gray-10)"></div>
          <div style="padding:12px 0;border-bottom:1px solid var(--gray-10)"></div>
          <div style="padding:12px 0">浏览器扩展</div>
          <div style="padding:12px 0">□ 是  □ 否</div>
          <div style="padding:12px 0"></div>
          <div style="padding:12px 0"></div>
        </div>
      </div>
    </div>

    <!-- Trap Warning -->
    <div class="reveal" style="background:var(--gray-90);border-radius:6px;padding:32px;color:#fff">
      <p style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--red-light);font-weight:700;margin-bottom:12px">⚠️ 一个常见的陷阱</p>
      <h3 style="font-size:18px;font-weight:700;margin-bottom:16px">不是所有的重复操作都需要AI</h3>
      <p style="font-size:13.5px;color:rgba(255,255,255,0.75);line-height:1.8;margin-bottom:24px">有些操作虽然重复，但它：已经很高效了（三十秒就能搞定）、或者太复杂AI帮不上忙、或者偶尔才做一次不值得专门配置。</p>
      <p style="font-size:13px;font-weight:700;color:#fff;margin-bottom:12px">值得嵌入AI的操作，必须同时满足三个条件：</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
        <div style="background:rgba(255,255,255,0.08);border-radius:4px;padding:20px;text-align:center">
          <p style="font-size:24px;margin-bottom:8px">🔄</p>
          <p style="font-size:12px;font-weight:700;color:#fff;margin-bottom:4px">重复性高</p>
          <p style="font-size:11px;color:rgba(255,255,255,0.6)">一周至少3次以上</p>
        </div>
        <div style="background:rgba(255,255,255,0.08);border-radius:4px;padding:20px;text-align:center">
          <p style="font-size:24px;margin-bottom:8px">⏱️</p>
          <p style="font-size:12px;font-weight:700;color:#fff;margin-bottom:4px">耗时明显</p>
          <p style="font-size:11px;color:rgba(255,255,255,0.6)">做一次至少花5分钟以上</p>
        </div>
        <div style="background:rgba(255,255,255,0.08);border-radius:4px;padding:20px;text-align:center">
          <p style="font-size:24px;margin-bottom:8px">📋</p>
          <p style="font-size:12px;font-weight:700;color:#fff;margin-bottom:4px">步骤固定</p>
          <p style="font-size:11px;color:rgba(255,255,255,0.6)">做法相对固定不会有太大变化</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MODULE 3: SWEET SPOT TASKS -->
<section class="module3" style="background:var(--warm);padding:96px 0">
  <div class="container">
    <div style="margin-bottom:56px">
      <p class="eyebrow reveal">模块三</p>
      <h2 class="serif reveal d1" style="font-family:var(--font-display);font-size:32px;font-weight:400;color:var(--ink);margin:14px 0 12px;line-height:1.35">甜蜜点任务——挑一件"重复又讨厌"的事先切入</h2>
      <p class="reveal d2" style="font-size:14px;color:var(--gray-50)">本模块结束时，你需要：理解什么是"甜蜜点任务"，能从清单里选出最适合作为第一个切入点的任务</p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:48px">
      <div class="reveal" style="background:var(--surface);border-radius:6px;padding:36px;border:1px solid var(--gray-10)">
        <h3 style="font-size:18px;font-weight:700;color:var(--ink);margin-bottom:16px">为什么是"甜蜜点"而不是"最重要"？</h3>
        <p style="font-size:13.5px;color:var(--gray-70);line-height:1.9">很多企业在推进AI落地时，习惯性地从"最重要"的工作开始——觉得既然要推AI，就应该先把最高价值的事情交给AI处理。<br><br>这个逻辑听起来合理，但实际效果往往很差。<strong style="color:var(--red)">原因在于，最重要的工作往往也是最复杂的工作。</strong>越是重要的工作，越涉及到复杂的判断、多方协调、模糊边界——这些事情AI目前还做不好。</p>
      </div>
      <div class="reveal d1" style="background:var(--red);border-radius:6px;padding:36px;color:#fff">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:16px">甜蜜点任务的本质</h3>
        <p style="font-size:28px;font-family:var(--font-display);line-height:1.4;margin-bottom:20px">不是找"最重要"的事，而是找"最容易被AI搞定、搞定之后最有感觉"的事。</p>
        <p style="font-size:13px;color:rgba(255,255,255,0.8);line-height:1.8">用一个比喻：甜蜜点任务是"首胜"——让一个人第一次体验到"AI真的能帮我省时间"，这个体验会变成他继续探索的动力。</p>
      </div>
    </div>

    <!-- Sweet Spot Characteristics -->
    <div class="reveal" style="margin-bottom:48px">
      <h3 style="font-size:20px;font-weight:700;color:var(--ink);margin-bottom:24px;text-align:center">甜蜜点任务的四个特征</h3>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px">
        <div style="background:var(--surface);border-radius:6px;padding:28px;text-align:center;border:1px solid var(--gray-10);position:relative">
          <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--red);color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:10px">特征 1</div>
          <div style="font-size:32px;margin-bottom:16px;margin-top:8px">😤</div>
          <h4 style="font-size:14px;font-weight:700;color:var(--ink);margin-bottom:8px">重复又讨厌</h4>
          <p style="font-size:12px;color:var(--gray-70)">你经常做，做的时候心里烦躁，因为太机械</p>
        </div>
        <div style="background:var(--surface);border-radius:6px;padding:28px;text-align:center;border:1px solid var(--gray-10);position:relative">
          <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--red);color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:10px">特征 2</div>
          <div style="font-size:32px;margin-bottom:16px;margin-top:8px">📊</div>
          <h4 style="font-size:14px;font-weight:700;color:var(--ink);margin-bottom:8px">价值可衡量</h4>
          <p style="font-size:12px;color:var(--gray-70)">用AI省了多少时间，可以算出来</p>
        </div>
        <div style="background:var(--surface);border-radius:6px;padding:28px;text-align:center;border:1px solid var(--gray-10);position:relative">
          <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--red);color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:10px">特征 3</div>
          <div style="font-size:32px;margin-bottom:16px;margin-top:8px">🛡️</div>
          <h4 style="font-size:14px;font-weight:700;color:var(--ink);margin-bottom:8px">失败代价低</h4>
          <p style="font-size:12px;color:var(--gray-70)">就算AI出了点问题，后果不严重</p>
        </div>
        <div style="background:var(--surface);border-radius:6px;padding:28px;text-align:center;border:1px solid var(--gray-10);position:relative">
          <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--red);color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:10px">特征 4</div>
          <div style="font-size:32px;margin-bottom:16px;margin-top:8px">👁️</div>
          <h4 style="font-size:14px;font-weight:700;color:var(--ink);margin-bottom:8px">成果看得见</h4>
          <p style="font-size:12px;color:var(--gray-70)">做完之后效果立竿见影，自己能感受到</p>
        </div>
      </div>
    </div>

    <!-- Exercise 4 -->
    <div class="reveal" style="background:var(--surface);border-radius:6px;border:1px solid var(--gray-10);overflow:hidden;margin-bottom:48px">
      <div style="background:var(--red);color:#fff;padding:20px 28px">
        <h3 style="font-size:14px;font-weight:700;margin-bottom:4px">练习4：甜蜜点任务的筛选评分</h3>
        <p style="font-size:12px;opacity:0.8">针对你在练习2中列出的每个"重复又讨厌"操作，用下面的评分表打分。每一项1-5分，分数越高代表越符合这个特征。</p>
      </div>
      <div style="padding:28px">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="border-bottom:2px solid var(--gray-10)">
              <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">"重复又讨厌"操作</th>
              <th style="text-align:center;padding:12px 16px;color:var(--gray-50);font-weight:600">重复性（1-5）</th>
              <th style="text-align:center;padding:12px 16px;color:var(--gray-50);font-weight:600">讨厌度（1-5）</th>
              <th style="text-align:center;padding:12px 16px;color:var(--gray-50);font-weight:600">可衡量性（1-5）</th>
              <th style="text-align:center;padding:12px 16px;color:var(--gray-50);font-weight:600">失败代价低（1-5）</th>
              <th style="text-align:center;padding:12px 16px;color:var(--gray-50);font-weight:600">总分</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px">操作1：_______________</td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center;font-weight:700;color:var(--red)"></td></tr>
            <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px">操作2：_______________</td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center;font-weight:700;color:var(--red)"></td></tr>
            <tr><td style="padding:16px">操作3：_______________</td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center"></td><td style="padding:16px;text-align:center;font-weight:700;color:var(--red)"></td></tr>
          </tbody>
        </table>
        <div style="margin-top:24px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px">
          <div style="background:var(--red-wash);border-radius:4px;padding:16px;text-align:center">
            <p style="font-size:11px;font-weight:700;color:var(--red);margin-bottom:4px">16-20分</p>
            <p style="font-size:12px;color:var(--ink)">★★★★★ 绝佳切入点</p>
          </div>
          <div style="background:var(--gray-05);border-radius:4px;padding:16px;text-align:center">
            <p style="font-size:11px;font-weight:700;color:var(--gray-70);margin-bottom:4px">11-15分</p>
            <p style="font-size:12px;color:var(--ink)">★★★★ 不错的备选</p>
          </div>
          <div style="background:var(--gray-05);border-radius:4px;padding:16px;text-align:center">
            <p style="font-size:11px;font-weight:700;color:var(--gray-70);margin-bottom:4px">6-10分</p>
            <p style="font-size:12px;color:var(--ink)">★★★ 可以考虑</p>
          </div>
          <div style="background:var(--gray-05);border-radius:4px;padding:16px;text-align:center">
            <p style="font-size:11px;font-weight:700;color:var(--gray-70);margin-bottom:4px">5分以下</p>
            <p style="font-size:12px;color:var(--ink)">★★ 不建议</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Wang Jie Case -->
    <div class="reveal" style="background:var(--surface);border-radius:6px;padding:40px;border:1px solid var(--gray-10)">
      <p style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--red);font-weight:700;margin-bottom:12px">案例：质检员王姐选出的甜蜜点任务</p>
      <h3 style="font-size:20px;font-weight:700;color:var(--ink);margin-bottom:24px">整理质检报表（19分）—— 她的判断逻辑</h3>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px">
        <div style="background:var(--red-wash);border-radius:4px;padding:16px;text-align:center">
          <p style="font-size:24px;font-weight:700;color:var(--red)">5</p>
          <p style="font-size:11px;color:var(--gray-70);margin-top:4px">重复性</p>
        </div>
        <div style="background:var(--red-wash);border-radius:4px;padding:16px;text-align:center">
          <p style="font-size:24px;font-weight:700;color:var(--red)">5</p>
          <p style="font-size:11px;color:var(--gray-70);margin-top:4px">讨厌度</p>
        </div>
        <div style="background:var(--red-wash);border-radius:4px;padding:16px;text-align:center">
          <p style="font-size:24px;font-weight:700;color:var(--red)">5</p>
          <p style="font-size:11px;color:var(--gray-70);margin-top:4px">可衡量性</p>
        </div>
        <div style="background:var(--red-wash);border-radius:4px;padding:16px;text-align:center">
          <p style="font-size:24px;font-weight:700;color:var(--red)">4</p>
          <p style="font-size:11px;color:var(--gray-70);margin-top:4px">失败代价低</p>
        </div>
      </div>
      <p style="font-size:13.5px;color:var(--gray-70);line-height:1.9;padding:20px;background:var(--gray-05);border-radius:4px;border-left:4px solid var(--red)">"每周五都要做，重复性极高。每次做的时候都很烦躁——就是对着模板填数字，有什么难的，但就是烦。省时效果立竿见影——从2小时缩短到20分钟，省了100分钟，一算就知道。搞砸了也没关系——反正周五下班前交就行，AI出问题了自己改也来得及。"</p>
    </div>
  </div>
</section>
'''

with open(output_file, 'a', encoding='utf-8') as f:
    f.write(remaining)

print("Parts 5-6 written: Module 2 and Module 3")
