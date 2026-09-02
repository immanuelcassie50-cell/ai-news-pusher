#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
import os

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Step 1: Unescape all \" to "
    content = content.replace('\\"', '"')
    
    # Step 2: Now we have raw quotes. We need to find Chinese quotes that were
    # originally " or " (U+201C/U+201D) and need escaping.
    # These are quotes that appear INSIDE a string, i.e., between two ASCII quotes
    
    # Strategy: Find all string content (between ASCII quotes) and check if they
    # contain text that looks like Chinese quoted text
    
    # Look for patterns like: "text"围剿"more text" or "text" followed by Chinese
    # We need to find where Chinese quote PAIRS appear and escape them
    
    # Pattern: ASCII quote followed by Chinese characters, then Chinese quote, then more Chinese/text
    # This is a heuristic approach
    
    # Replace Chinese left quote (") with escaped version
    # But first we need to find them - they should appear in context like:
    # "text"content"more" where the inner quotes are Chinese
    
    # Let's use a different approach: in the original correct file,
    # the Chinese quotes were " and " (U+201C and U+201D)
    # When the user's sed command ran 's/\\"/"/g', it converted \" to "
    # but if the original had " (Chinese), it stayed as "
    # Then my fix_quotes.py replaced ALL " with \"
    
    # So the original file should have had:
    # - Regular ASCII " for string delimiters
    # - " and " (Chinese) for quoted Chinese text inside strings
    
    # Now after my scripts, everything is \"
    # We need to find the Chinese text that was quoted and properly escape ONLY those
    
    # Find all instances of \" followed by Chinese characters or preceded by Chinese
    # These need to stay escaped. But that's all of them now!
    
    # Actually, let's check if the Chinese characters are still there
    # If they are, then the pattern \"Chinese\" means we should keep escaping
    
    # Pattern: \" followed by Chinese text OR preceded by Chinese text
    # These are the Chinese-quote cases that should be escaped
    
    # Use regex to find \" followed by Chinese char
    def escape_chinese_quotes(match):
        prefix = match.group(1)  # any leading content
        quote = match.group(2)  # the quote char (if any)
        chinese_text = match.group(3)  # Chinese text
        suffix = match.group(4)
        return prefix + '\\"' + chinese_text + '\\"' + suffix
    
    # Actually let's just unescape everything and re-escape properly
    # by finding Chinese quote pairs
    
    result = []
    i = 0
    n = len(content)
    
    while i < n:
        c = content[i]
        if c == '"':
            # Check if this quote is surrounded by Chinese characters
            # i.e., preceded by Chinese and followed by Chinese (with possible chars between)
            # This would indicate it's a Chinese quote character, not ASCII
            
            # Look at surrounding context
            prev_non_space = ''
            next_non_space = ''
            
            # Find previous non-whitespace char
            j = i - 1
            while j >= 0 and content[j] in ' \t':
                j -= 1
            if j >= 0:
                prev_non_space = content[j]
            
            # Find next non-whitespace char  
            j = i + 1
            while j < n and content[j] in ' \t':
                j += 1
            if j < n:
                next_non_space = content[j]
            
            # If previous char is Chinese, this quote needs escaping
            # (it's closing a Chinese quoted section)
            if ord(prev_non_space) > 0x4E00:
                result.append('\')
                result.append('"')
                i += 1
                continue
            
            # If next char is Chinese, this quote needs escaping
            # (it's opening a Chinese quoted section)
            if ord(next_non_space) > 0x4E00:
                result.append('\')
                result.append('"')
                i += 1
                continue
        
        result.append(c)
        i += 1
    
    content = ''.join(result)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Fix all target files
target_dir = r"D:/新课开发/专精特新/03核心技术人才招募与保留对抗大厂虹吸效应/03演示文稿/slides/"
files = [
    "slide-07.js", "slide-08.js", "slide-09.js", "slide-10.js", "slide-11.js", "slide-12.js",
    "slide-18.js", "slide-20.js", "slide-21.js", "slide-23.js", "slide-24.js", "slide-25.js",
    "slide-29.js", "slide-30.js", "slide-31.js", "slide-32.js", "slide-37.js", "slide-39.js",
    "slide-42.js", "slide-43.js", "slide-45.js", "slide-49.js", "slide-60.js", "slide-62.js"
]

for f in files:
    filepath = os.path.join(target_dir, f)
    if os.path.exists(filepath):
        fixed = fix_file(filepath)
        print(f"Fixed: {f}" if fixed else f"No changes: {f}")
    else:
        print(f"Missing: {f}")
