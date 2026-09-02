#!/usr/bin/env python3
"""Fix unescaped double quotes in card_05 JSON by direct byte manipulation."""
import json

with open('D:/新课开发/管理者的AI课/管理者AI实战课制造业版教学文档/完整课程包/10_可打印工具卡/工具卡_05_对话准备_content.json', 'rb') as f:
    data = f.read()

lines = data.split(b'\n')
print('BEFORE Line 98:', lines[97])
print('BEFORE Line 99:', lines[98])

# Line 98: "title": "表达：用"我感受"而非"你问题"",
# Line 99: "desc": "避免指责性语言，多用"我观察到..."、"我感受到...""

# The Chinese text "表达：用"我感受"而非"你问题"" in UTF-8 bytes:
# 表达 = \xe8\xa1\xa8\xe8\xbe\xbe
# ： = \xef\xbc\x9a
# 用 = \xe7\x94\xa8
# then the first interior " = 0x22
# 我感受 = \xe6\x88\x91\xe6\x84\x9f\xe5\x8f\x97
# then second interior " = 0x22
# 而非 = \xe8\x80\x8c\xe9\x9d\x9e
# then third interior " = 0x22
# 你问题 = \xe4\xbd\xa0\xe9\x97\xae\xe9\xa2\x98
# then ending " = 0x22

# The correct line 98 value part: "\xe8\xa1\xa8\xe8\xbe\xbe\xef\xbc\x9a\xe7\x94\xa8\\"\xe6\x88\x91\xe6\x84\x9f\xe5\x8f\x97\\"\xe8\x80\x8c\xe9\x9d\x9e\\"\xe4\xbd\xa0\xe9\x97\xae\xe9\xa2\x98\""
# Note: in JSON string, interior " must be escaped as \"

new_line98 = b'            "title": "\xe8\xa1\xa8\xe8\xbe\xbe\xef\xbc\x9a\xe7\x94\xa8\\"\xe6\x88\x91\xe6\x84\x9f\xe5\x8f\x97\\"\xe8\x80\x8c\xe9\x9d\x9e\\"\xe4\xbd\xa0\xe9\x97\xae\xe9\xa2\x98"",'

# For line 99: "避免指责性语言，多用"我观察到..."、"我感受到..."
# 避免指责性语言，多用 = \xe9\x81\xbf\xe5\x85\x8d\xe6\x8c\x87\xe8\xb4\xa3\xe6\x80\xa7\xe8\xaf\xad\xe8\xa8\x80\xef\xbc\x8c\xe5\xa4\x9a\xe7\x94\xa8
# " = 0x22 (interior)
# 我观察到... = \xe6\x88\x91\xe8\xa7\x82\xe5\xaf\x9f\xe5\x88\xb0...
# " = 0x22 (interior)
# 、 = \xe3\x80\x81
# " = 0x22 (interior)
# 我感受到... = \xe6\x88\x91\xe6\x84\x9f\xe5\x8f\x97\xe5\x88\xb0...

new_line99 = b'            "desc": "\xe9\x81\xbf\xe5\x85\x8d\xe6\x8c\x87\xe8\xb4\xa3\xe6\x80\xa7\xe8\xaf\xad\xe8\xa8\x80\xef\xbc\x8c\xe5\xa4\x9a\xe7\x94\xa8\\"\xe6\x88\x91\xe8\xa7\x82\xe5\xaf\x9f\xe5\x88\xb0...\\"\xe3\x80\x81\\"\xe6\x88\x91\xe6\x84\x9f\xe5\x8f\x97\xe5\x88\xb0...""'

lines[97] = new_line98
lines[98] = new_line99

print('AFTER Line 98:', lines[97])
print('AFTER Line 99:', lines[98])

new_data = b'\n'.join(lines)

try:
    json.loads(new_data.decode('utf-8'))
    print('JSON OK!')
    with open('D:/新课开发/管理者的AI课/管理者AI实战课制造业版教学文档/完整课程包/10_可打印工具卡/工具卡_05_对话准备_content.json', 'wb') as f:
        f.write(new_data)
    print('Written successfully')
except Exception as e:
    print('Error:', e)