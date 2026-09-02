#!/usr/bin/env python3
"""Fix card_05 JSON by reconstructing lines 98 and 99 byte-exactly."""
import json

with open('D:/新课开发/管理者的AI课/管理者AI实战课制造业版教学文档/完整课程包/10_可打印工具卡/工具卡_05_对话准备_content.json', 'rb') as f:
    data = f.read()

lines = data.split(b'\n')

# Line 98 raw bytes:
# "title": "表达：用"我感受"而非"你问题"",
# Title string content (unescaped in source): 表达：用"我感受"而非"你问题"
# Correct JSON value: "表达：用\"我感受\"而非\"你问题\""
# UTF-8 bytes for "表达：用":
#   表 \xe8\xa1\xa8  (3 bytes)
#   达 \xe8\xbe\xbe  (3 bytes)
#   ： \xef\xbc\x9a  (3 bytes)
#   用 \xe7\x94\xa8  (3 bytes)

# Correct line 98:
# 12 spaces + "title": " + 表达：用\"我感受\"而非\"你问题\" + ",
line98_prefix = b'            "title": "'
line98_content = '\xe8\xa1\xa8\xe8\xbe\xbe\xef\xbc\x9a\xe7\x94\xa8\\"\xe6\x88\x91\xe6\x84\x9f\xe5\x8f\x97\\"\xe8\x80\x8c\xe9\x9d\x9e\\"\xe4\xbd\xa0\xe9\x97\xae\xe9\xa2\x98'
line98_suffix = b'",'
line98 = line98_prefix + line98_content.encode('utf-8') + line98_suffix

# Line 99 raw bytes:
# "desc": "避免指责性语言，多用"我观察到..."、"我感受到..."
# UTF-8 bytes for "避免指责性语言，多用":
#   避 \xe9\x81\xbf (3 bytes)
#   免 \xe5\x85\x8d (3 bytes)
#   指 \xe6\x8c\x87 (3 bytes)
#   责 \xe8\xb4\xa3 (3 bytes)
#   性 \xe6\x80\xa7 (3 bytes)
#   语 \xe8\xaf\xad (3 bytes)
#   言 \xe8\xa8\x80 (3 bytes)
#   ， \xef\xbc\x8c (3 bytes)
#   多 \xe5\xa4\x9a (3 bytes)
#   用 \xe7\x94\xa8 (3 bytes)

# Correct line 99:
line99_prefix = b'            "desc": "'
line99_content = '\xe9\x81\xbf\xe5\x85\x8d\xe6\x8c\x87\xe8\xb4\xa3\xe6\x80\xa7\xe8\xaf\xad\xe8\xa8\x80\xef\xbc\x8c\xe5\xa4\x9a\xe7\x94\xa8\\"\xe6\x88\x91\xe8\xa7\x82\xe5\xaf\x9f\xe5\x88\xb0...\\"\xe3\x80\x81\\"\xe6\x88\x91\xe6\x84\x9f\xe5\x8f\x97\xe5\x88\xb0...'
line99_suffix = b'"'
line99 = line99_prefix + line99_content.encode('utf-8') + line99_suffix

print('New line 98:', line98)
print('New line 99:', line99)

lines[97] = line98
lines[98] = line99

new_data = b'\n'.join(lines)

try:
    json.loads(new_data.decode('utf-8'))
    print('JSON OK!')
    with open('D:/新课开发/管理者的AI课/管理者AI实战课制造业版教学文档/完整课程包/10_可打印工具卡/工具卡_05_对话准备_content.json', 'wb') as f:
        f.write(new_data)
    print('Written successfully')
except json.JSONDecodeError as e:
    print('Error:', e)
    print('Line 98:', lines[97])
    print('Line 99:', lines[98])