#!/usr/bin/env python3
# -*- coding: utf-8 -*-
strings = [
    '时段', '环节', '讲师动作', '学员动作', '互动形式', '备注',
    '0-5分钟', '开场', '讲师自我介绍 + 课程目标', '学员听', '讲解', '',
    '5-15分钟', '导入', '问你有没有发现每次关系里总是重复同样的模式', '学员思考+分享', '全班分享', '',
    '15-25分钟', '理论1', '依恋理论4种类型简介', '学员听+记', '讲解', '',
    '25-40分钟', '自我评估', '发评估表+学员自测', '个人填写评估表', '个人思考', '',
    '40-55分钟', '分类讲解', '安全型特征', '学员听+对照', '讲解', '',
    '55-70分钟', '分类讲解', '焦虑型特征', '学员听+对照', '讲解', '',
    '70-85分钟', '分类讲解', '回避型特征', '学员听+对照', '讲解', '',
    '85-95分钟', '分类讲解', '混乱型特征', '学员听+对照', '讲解', '',
    '95-110分钟', '留白引导案例', '讲案例到关键点停下', '学员2人组讨论30秒后6种回应', '两人讨论', '核心15分钟',
    '110-120分钟', '案例分析', '6种回应分类讲解', '学员听+问', '讲解', '',
    '120-125分钟', '行动层', '学员写我的典型反应模式', '个人写', '个人思考', '',
    '125-130分钟', '收尾', '3件事总结+1句承诺', '学员听', '讲解', '',
    '130-135分钟', '答疑+反馈', '学员提问+填反馈表', '学员提问+填写', '全班分享+填写', '',
    '时间分配统计', '分类', '时长', '占比', '互动形式', '次数',
    '总时长', '135分钟', '讲解', '45分钟', '44%',
    '学员互动', '60分钟', '两人讨论', '2次',
    '个人思考', '20分钟', '全班分享', '2次',
    '答疑', '10分钟', '个人思考', '3次',
]

seen = []
unique = []
for s in strings:
    if s not in seen:
        seen.append(s)
        unique.append(s)

total_count = len(strings)
unique_count = len(unique)

lines = [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{total_count}" uniqueCount="{unique_count}">'
]
for s in unique:
    escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')
    lines.append(f'  <si><t>{escaped}</t></si>')
lines.append('</sst>')

with open('/tmp/xlsx_flow/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f'Written {unique_count} unique strings, total count={total_count}')
