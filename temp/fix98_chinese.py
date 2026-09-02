#!/usr/bin/env python3
"""Diagnose and fix slide-98.js - preserve raw bytes, re-encode as UTF-8"""
import os

base = r'D:\新课开发\内训师和表达\系列进阶课'
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        slides_dir = os.path.join(base, entry, '授课PPT', 'slides')
        path = os.path.join(slides_dir, 'slide-98.js')

        with open(path, 'rb') as f:
            raw = f.read()

        # Decode as latin-1 (maps each byte 0-255 to Unicode 0-255)
        text = raw.decode('latin-1')

        # Re-encode as UTF-8
        utf8 = text.encode('utf-8')

        # Now test: can Node.js read this as UTF-8?
        test_path = os.path.join(slides_dir, '_test98_utf8.txt')
        with open(test_path, 'w', encoding='utf-8') as f:
            f.write(text)

        # Read back as UTF-8 and show first 80 chars
        with open(test_path, 'r', encoding='utf-8') as f:
            verified = f.read()

        # Find the content lines
        lines = verified.split('\n')

        # Write results to file
        out = []
        out.append('File size: %d' % len(raw))
        out.append('First 5 bytes: %s' % raw[:5].hex())
        out.append('Latin-1 decoded length: %d' % len(text))
        out.append('UTF-8 re-encoded size: %d' % len(utf8))
        out.append('Verified UTF-8 first 80: %s' % repr(verified[:80]))
        out.append('Line 36: %s' % repr(lines[35][:100]))
        out.append('Line 38: %s' % repr(lines[37][:100]))
        out.append('Line 1: %s' % repr(lines[0][:100]))

        # Now overwrite the original
        backup_path = path + '.bak'
        with open(backup_path, 'wb') as f:
            f.write(raw)
        out.append('Backup saved to: %s' % backup_path)

        with open(path, 'w', encoding='utf-8') as f:
            f.write(verified)
        out.append('Original file rewritten as UTF-8')

        with open(r'D:\CC\temp\fix98_result.txt', 'w', encoding='utf-8', errors='replace') as f:
            f.write('\n'.join(out))

        print('Done - results written to fix98_result.txt')
        break
