#!/usr/bin/env python3
import os

# Find the correct path
base = r'D:\新课开发\内训师和表达\系列进阶课'
target_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        target_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

if not target_dir or not os.path.exists(target_dir):
    print('Path not found')
    exit(1)

fpath = os.path.join(target_dir, 'slide-98.js')
with open(fpath, 'rb') as f:
    data = f.read()

lines = data.split(b'\n')

# The problem: in line 36, after the fix, we have \xe7\xb3\xbb\\",  which is:
# 体系\\",  where \\" is now an escaped backslash followed by an UNESCAPED quote
# This breaks the string. The content should end with 体系" where the " closes the string

# Current (after my fix): ...\xe7\xb3\xbb\\",\xe5\x86\x85...
# Should be: ...\xe7\xb3\xbb"\xe5\x86\x85...
# Fix: remove the backslash before the quote at pos where \\", becomes ",

# Line 36 content ends with: 体系\\", -> should be: 体系",
BS = b'\x5c'
QUOTE = b'\x22'
COMMA = b'\x2c'

line36 = lines[35]
print('Line 36 before fix:')
print(repr(line36[-100:]))

# Find the pattern: \xe7\xb3\xbb\\",  (体系\\",)
# Current: \xe7\xb3\xbb (体系) + \\ (backslash) + " + , + \xe5
# Should be: \xe7\xb3\xbb (体系) + " + , + \xe5
# Fix: remove one backslash

# The pattern \xe7\xb3\xbb5c225c2c (体系\",) should become \xe7\xb3\xbb225c2c (体系",)
# In the file we have: ...\xe7\xb3\xbb\\",\xe5... which is bytes:
# \xe7 \xb3 \xbb 5c 22 2c e5...
# We want: \xe7 \xb3 \xbb 22 2c e5...
# So remove the 5c at that position

# Find: \xe7\xb3\xbb\\",  (bytes: e7 b3 bb 5c 22 2c)
# Replace with: \xe7\xb3\xbb",  (bytes: e7 b3 bb 22 2c)
old_pattern = b'\xe7\xb3\xbb\x5c\x22\x2c'
new_pattern = b'\xe7\xb3\xbb\x22\x2c'

if old_pattern in line36:
    line36 = line36.replace(old_pattern, new_pattern, 1)
    print('Fixed line 36')
    print('Line 36 after fix:')
    print(repr(line36[-100:]))
else:
    print('Pattern not found in line 36')
    # Search for the position
    idx = line36.find(b'\xe7\xb3\xbb')
    if idx >= 0:
        print(f'Found 体系 at pos {idx}, next 10 bytes: {line36[idx:idx+10].hex()}')

lines[35] = line36

# Similarly fix line 38: 盛典\\",  -> 盛典",
line38 = lines[37]
old38 = b'\xe7\x9b\x9b\xe5\x85\xb8\x5c\x22\x2c'
new38 = b'\xe7\x9b\x9b\xe5\x85\xb8\x22\x2c'
if old38 in line38:
    line38 = line38.replace(old38, new38, 1)
    lines[37] = line38
    print('Fixed line 38')
else:
    print('Pattern not found in line 38')
    idx = line38.find(b'\xe7\x9b\x9b\xe5\x85\xb8')
    if idx >= 0:
        print(f'Found 盛典 at pos {idx}, next 10 bytes: {line38[idx:idx+10].hex()}')

# Line 39: 机会\\" } -> 机会" }
line39 = lines[38]
old39 = b'\xe6\x9c\xba\xe4\xbc\x9a\x5c\x22\x20\x7d'
new39 = b'\xe6\x9c\xba\xe4\xbc\x9a\x22\x20\x7d'
if old39 in line39:
    line39 = line39.replace(old39, new39, 1)
    lines[38] = line39
    print('Fixed line 39')
else:
    print('Pattern not found in line 39')
    idx = line39.find(b'\xe6\x9c\xba\xe4\xbc\x9a')
    if idx >= 0:
        print(f'Found 机会 at pos {idx}, next 10 bytes: {line39[idx:idx+10].hex()}')

data_new = b'\n'.join(lines)
with open(fpath, 'wb') as f:
    f.write(data_new)
print('Wrote file')
