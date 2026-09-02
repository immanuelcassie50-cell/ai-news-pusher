#!/usr/bin/env python3
fname = 'slide-67.js'
with open(fname, 'rb') as f:
    data = f.read()

content = data.decode('utf-8', errors='replace')

# Fix: "接受"不"的可能性" -> "接受「不」的可能性"
# Strategy: within string values that contain Chinese text sandwiched by quotes,
# replace inner quotes with corner brackets

# Known problematic patterns in this file:
# "接受"不"的可能性" -> "接受「不」的可能性"
# We need to fix all such patterns

# Simple string replacement
content = content.replace('接受"不"的可能性', '接受「不」的可能性')

with open(fname, 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed slide-67.js')
