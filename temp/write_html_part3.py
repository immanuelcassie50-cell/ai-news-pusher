# -*- coding: utf-8 -*-
import os

base_dir = r"D:/新课开发/领导力/一线执行/05-融进手头的活：让AI出现在你本来就在用的地方"
output_file = os.path.join(base_dir, "教学文档_HTML展示版.html")

part3 = '''<!-- OPENING: WHY INTEGRATION -->
<section class="opening">
  <div class="container">
    <div class="opening-head">
      <p class="eyebrow reveal">课程开场</p>
      <h2 class="serif reveal d1">为什么"融进手头"比"另开新工具"更有效</h2>
      <p class="reveal d2">一个真实场景，揭示AI落地的核心矛盾</p>
    </div>
    <div class="scenario-card reveal">
      <span class="scenario-label">真实场景</span>
      <p class="scenario-text">周一早上九点，某制造业工厂的质检员小王接到一个新任务——写一份上周的质量分析报告。他打开电脑，习惯性地先登录了ERP系统，查到这周的良品率数据，然后打开Excel开始整理数据。<br><br>就在这时，他的班长走过来："小王，公司最近上了个AI系统，你在电脑上能用了，我让信息部给你开了账号。"小王问："怎么用？"班长说："你打开那个新系统，网址是xxxxxx，账号密码我发你。"<br><br>小王打开新系统，登录进去，发现界面完全陌生，找了半天不知道该点什么。最后他放弃了，心想："算了，我还是用老办法吧，反正也习惯了。"<br><br>三个月后，那套AI系统几乎没人用，被信息部下线了。小王还是用老办法干活，偶尔听人提起"AI"就觉得是"又一轮搞形式"。</p>
    </div>
    <div class="insight-dark reveal">
      <p>问题出在哪？出在<strong>"切换"</strong>这两个字上。行为经济学里有一个概念叫<strong>"认知摩擦"</strong>（Cognitive Friction），指的是人在从一个任务切换到另一个任务时，需要消耗的注意力、脑力和意志力。这个摩擦力看起来很小——不过就是"关掉一个页面，打开另一个页面"——但它恰恰是<strong>AI采纳率的最大杀手</strong>。</p>
    </div>
    <div class="key-point reveal">
      <p class="key-point-label">核心认知</p>
      <p>让AI真正落地的关键，不是培训力度够不够，而是嵌入力度够不够。让AI出现在员工本来就在用的地方，是一个<strong>设计问题</strong>，而不是一个培训问题。</p>
    </div>
  </div>
</section>
'''

with open(output_file, 'a', encoding='utf-8') as f:
    f.write(part3)

print("Part 3 written: Opening section")
