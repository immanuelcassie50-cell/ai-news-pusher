#!/usr/bin/env python3
"""Fix slide-98.js encoding: GBK -> UTF-8"""
import os

base = r'D:\新课开发\内训师和表达\系列进阶课'
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        slides_dir = os.path.join(base, entry, '授课PPT', 'slides')
        path = os.path.join(slides_dir, 'slide-98.js')

        # Read as GBK (the actual encoding)
        with open(path, 'rb') as f:
            gbk_bytes = f.read()

        # Decode as GBK, re-encode as UTF-8
        try:
            text_gbk = gbk_bytes.decode('gbk')
        except Exception as e:
            print(f'GBK decode failed: {e}')
            break

        # Verify the text looks correct
        print('Decoded text first 80 chars:', repr(text_gbk[:80]))

        # Check for the key Chinese strings
        if '华为' in text_gbk:
            print('Found 华为 in decoded text - GBK decode correct')
        else:
            print('WARNING: 华为 NOT found in decoded text')

        if '讲师荣誉体系' in text_gbk:
            print('Found 讲师荣誉体系 - content looks correct')

        # Save as UTF-8
        utf8_bytes = text_gbk.encode('utf-8')
        with open(path, 'wb') as f:
            f.write(utf8_bytes)

        print(f'Resaved as UTF-8. Original: {len(gbk_bytes)} bytes, New: {len(utf8_bytes)} bytes')
        break
