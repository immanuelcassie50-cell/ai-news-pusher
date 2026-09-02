#!/usr/bin/env python3
"""Fix slide-67.js and slide-98.js by byte-level analysis."""
import re, os

SLIDES_DIR = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

def decode_utf8_cjk(byte_seq):
    """Decode a UTF-8 byte sequence to Chinese text for readability."""
    try:
        return byte_seq.decode('utf-8')
    except:
        return repr(byte_seq)

def fix_slide67():
    """slide-67 has title and addText with embedded inner quotes.
    The string should read: 为什么"学会了"不等于"会用了"
    Currently: "为什么\"学会了\"不等于\"会用了\""
    But the parsing is broken because of extra " chars."""
    fpath = os.path.join(SLIDES_DIR, 'slide-67.js')
    with open(fpath, 'rb') as f:
        content = f.read()

    original = content

    # The title string content in JS should be: 为什么"学会了"不等于"会用了"
    # The bytes (JS source): "\xe4\xb8\xba\xe4\xbb\x80\xe4\xb9\x88\\"\xe5\xad\xa6\xe4\xbc\x9a\xe4\xba\x86\\"\xe4\xb8\x8d\xe7\xad\x89\xe4\xba\x8e\\"\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86"
    # = "为什么\"学会了\"不等于\"会用了\""
    # JS interprets \\ as literal \ and \" as literal "
    # So: "为什么"学会了"不等于"会用了" (inner quotes = literal chars)
    # But there's no closing " after "会用了" before the ; -- syntax error

    # The intended string value is: 为什么"学会了"不等于"会用了"
    # In JS source with proper escaping: "为什么\"学会了\"不等于\"会用了\""
    # = bytes: "\xe4\xb8\xba\xe4\xbb\x80\xe4\xb9\x88\\\xe2\x80\x9c\xe5\xad\xa6\xe4\xbc\x9a\xe4\xba\x86\\\xe2\x80\x9d\xe4\xb8\x8d\xe7\xad\x89\xe4\xba\x8e\\\xe2\x80\x9c\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86"
    # Wait no - the inner quotes don't need backslash if they're inside the string

    # Actually: the intended content is the Chinese text with embedded quotes.
    # As JS string literal: "为什么"学会了"不等于"会用了"
    # = "\xe4\xb8\xba\xe4\xbb\x80\xe4\xb9\x88\xe2\x80\x9c\xe5\xad\xa6\xe4\xbc\x9a\xe4\xba\x86\xe2\x80\x9d\xe4\xb8\x8d\xe7\xad\x89\xe4\xba\x8e\xe2\x80\x9c\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86"
    # But that's not valid because the " chars break the string.

    # The correct JS source should use \" for inner quotes:
    # "为什么\"学会了\"不等于\"会用了\""
    # Bytes: "\xe4\xb8\xba\xe4\xbb\x80\xe4\xb9\x88\\\xe2\x80\x9c\xe5\xad\xa6\xe4\xbc\x9a\xe4\xba\x86\\\xe2\x80\x9d\xe4\xb8\x8d\xe7\xad\x89\xe4\xba\x8e\\\xe2\x80\x9c\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86"

    # Current state: we have \" in the source for inner quotes.
    # But there's also an EXTRA " after "会用了" making it: ...会用了""

    # Let's find and fix by finding the exact broken pattern
    # Pattern: \" followed by Chinese chars followed by \" followed by "" (extra quote)
    # Replace: "xxx\"yyy\"zzz"" -> "xxx\"yyy\"zzz"
    # The extra " before ; or , or } is the problem

    # First let's just find all the problem spots
    lines = content.split(b'\n')
    for i, line in enumerate(lines):
        if b'\\"' in line:
            print(f'Line {i+1}: {repr(line[:100])}...')

    # Strategy: for line 3, find the title value and fix the extra quote
    # title: "为什么\"学会了\"不等于\"会用了\""
    # After fixing: title: "为什么\"学会了\"不等于\"会用了\""
    # The difference is: in the current broken version, there's " after the last "

    # The broken line 3 ends: ...\xe4\xba\x86"" };'
    # That should be: ...\xe4\xba\x86"" };' where the last two "" are the closing

    # Actually let me just do targeted replacements

    # For line 3: replace the title value
    # Find: title: "\xe4\xb8\xba\xe4\xbb\x80\xe4\xb9\x88\\"\xe5\xad\xa6\xe4\xbc\x9a\xe4\xba\x86\\"\xe4\xb8\x8d\xe7\xad\x89\xe4\xba\x8e\\"\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86""
    # With: title: "\xe4\xb8\xba\xe4\xbb\x80\xe4\xb9\x88\\"\xe5\xad\xa6\xe4\xbc\x9a\xe4\xba\x86\\"\xe4\xb8\x8d\xe7\xad\x89\xe4\xba\x8e\\"\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86"

    # The pattern to remove: one extra " before ;}
    old_title_end = b'\\"\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86"" }'
    new_title_end = b'\\"\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86" }'
    content = content.replace(old_title_end, new_title_end)

    # For line 16 (addText): same fix
    old_addtext_end = b'\\"\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86"", '
    new_addtext_end = b'\\"\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86"", '
    content = content.replace(old_addtext_end, new_addtext_end)

    if content != original:
        with open(fpath, 'wb') as f:
            f.write(content)
        print('slide-67: Fixed')
    else:
        print('slide-67: No change - checking pattern')
        # Print the exact bytes around the problem area
        idx = content.find(b'\xe4\xbc\x9a\xe7\x94\xa8\xe4\xba\x86')
        if idx >= 0:
            print(f'Context around "会用了": {repr(content[idx-5:idx+20])}')

def fix_slide98():
    """slide-98 has content values with embedded inner quotes."""
    fpath = os.path.join(SLIDES_DIR, 'slide-98.js')
    with open(fpath, 'rb') as f:
        content = f.read()

    original = content

    # Problem lines 36, 38, 39 have similar issues with extra quotes
    # For content: 华为什么完善的"讲师荣誉体系",内训师被称为"内部专家"
    # For content: 每月"讲师沙龙",每季"课程发布会",每年"讲师盛会"
    # For content: 激励需要仪式感,让内训师有"被看见"的机会

    # Current broken patterns - extra " chars
    # Let's find all occurrences of "" (two consecutive quotes)
    # and see if they're extra closing quotes

    lines = content.split(b'\n')
    for i, line in enumerate(lines):
        if b'""' in line:
            print(f'Line {i+1} has "": {repr(line[:80])}')

    # Strategy: for each content value that ends with "" }, find the extra quote
    # and remove it

    # Line 36: content ends with: ..."荣誉体系",...被称为"内部专家""
    # Should be: ..."荣誉体系",...被称为"内部专家"
    old36 = b'\xe5\xae\x8c\xe5\x96\x84\xe7\x9a\x84\\"\xe8\xae\xb2\xe5\xb8\x88\xe8\x8d\xa3\xe8\xaa\x89\xe4\xbd\x93\xe7\xb3\xbb",\xe5\x86\x85\xe8\xae\xad\xe5\xb8\x88\xe8\xa2\xab\xe7\xa7\xb0\xe4\xb8\xba"\xe5\x86\x85\xe9\x83\xa8\xe4\xb8\x93\xe5\xae\xb6"" }'
    new36 = b'\xe5\xae\x8c\xe5\x96\x84\xe7\x9a\x84\\"\xe8\xae\xb2\xe5\xb8\x88\xe8\x8d\xa3\xe8\xaa\x89\xe4\xbd\x93\xe7\xb3\xbb",\xe5\x86\x85\xe8\xae\xad\xe5\xb8\x88\xe8\xa2\xab\xe7\xa7\xb0\xe4\xb8\xba"\xe5\x86\x85\xe9\x83\xa8\xe4\xb8\x93\xe5\xae\xb6" }'
    content = content.replace(old36, new36)

    # Line 38: content ends with: ..."沙龙",每季"课程发布会",每年"讲师盛会""
    old38 = b'\\"\xe8\xae\xb2\xe5\xb8\x88\xe6\xb2\x99\xe9\xbe\x99",\xe6\xaf\x8f\xe5\xad\xa3"\xe8\xaf\xbe\xe7\xa8\x8b\xe5\x8f\x91\xe5\xb8\x83\xe4\xbc\x9a",\xe6\xaf\x8f\xe5\xb9\xb4"\xe8\xae\xb2\xe5\xb8\x88\xe7\x9b\x9b\xe5\x85\xb8"" }'
    new38 = b'\\"\xe8\xae\xb2\xe5\xb8\x88\xe6\xb2\x99\xe9\xbe\x99",\xe6\xaf\x8f\xe5\xad\xa3"\xe8\xaf\xbe\xe7\xa8\x8b\xe5\x8f\x91\xe5\xb8\x83\xe4\xbc\x9a",\xe6\xaf\x8f\xe5\xb9\xb4"\xe8\xae\xb2\xe5\xb8\x88\xe7\x9b\x9b\xe5\x85\xb8" }'
    content = content.replace(old38, new38)

    if content != original:
        with open(fpath, 'wb') as f:
            f.write(content)
        print('slide-98: Fixed')
    else:
        print('slide-98: No change')

fix_slide67()
fix_slide98()
print('Done')
