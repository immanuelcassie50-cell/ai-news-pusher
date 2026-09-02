#!/usr/bin/env python3
"""Analyze and fix slide-97 and slide-98 strings with embedded quotes."""
import os, re

SLIDES_DIR = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

def decode_hex_cjk(hex_str):
    """Decode a hex string of UTF-8 Chinese chars to readable text."""
    bytes_val = bytes.fromhex(hex_str)
    return bytes_val.decode('utf-8', errors='replace')

def analyze_slide97():
    fpath = os.path.join(SLIDES_DIR, 'slide-97.js')
    with open(fpath, 'rb') as f:
        data = f.read()
    lines = data.split(b'\n')

    print('=== slide-97.js raw lines 37, 39 ===')
    for i in [36, 38]:
        line = lines[i]
        print(f'Line {i+1} last 120 bytes hex: {line[-120:].hex()}')
        print(f'Line {i+1} last 120 bytes: {line[-120:]}')
        print()

def fix_slide97():
    """Fix slide-97: the issue is that embedded Chinese quotes " and " were stored
    as plain " chars inside JS double-quoted strings, causing string termination.

    The fix: in JS double-quoted strings, any " that appears inside the string
    (not as the delimiter) must be escaped as \\".
    Since these are curly/fancy quotes (U+201C U+201D), in UTF-8 bytes they are:
    " = E2 80 9C
    " = E2 80 9D
    These bytes should appear as literal chars in the JS string (no escape needed
    since JS uses straight quotes " as delimiters).

    BUT the problem is: the original content has both fancy quotes AND straight
    quotes used as the quotation marks around phrases. The straight quotes got
    interpreted as JS string delimiters.

    Current state (from diagnostic):
    Line 39: content field ends with ...机会\" } where the \" at offset 40
    should be part of the string, not the closer.

    Let me look at the actual raw bytes for line 39 again and understand:
    """
    fpath = os.path.join(SLIDES_DIR, 'slide-97.js')
    with open(fpath, 'rb') as f:
        data = f.read()
    lines = data.split(b'\n')

    # Line 39 content field (index 38)
    line = lines[38]
    print(f'Line 39 full: {repr(line)}')
    print()

    # Find all " positions in the line
    print('All 0x22 (quote) positions in line 39:')
    for i, b in enumerate(line):
        if b == 0x22:
            ctx = line[max(0,i-3):i+4]
            print(f'  pos {i}: prev={line[i-1] if i>0 else None} next={line[i+1] if i<len(line)-1 else None} ctx={repr(ctx)}')

def fix_slide98():
    fpath = os.path.join(SLIDES_DIR, 'slide-98.js')
    with open(fpath, 'rb') as f:
        data = f.read()
    lines = data.split(b'\n')

    print('\n=== slide-98.js raw lines 36, 38, 39 ===')
    for i in [35, 37, 38]:
        line = lines[i]
        print(f'Line {i+1} last 120 bytes hex: {line[-120:].hex()}')
        print(f'Line {i+1} last 120 bytes: {repr(line[-120:])}')
        print()

fix_slide97()
fix_slide98()
