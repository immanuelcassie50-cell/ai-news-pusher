#!/usr/bin/env python3
with open(r'D:\CC\temp\compile2_out.txt', 'rb') as f:
    content = f.read()
lines = content.split(b'\n')
with open(r'D:\CC\temp\failures.txt', 'wb') as f:
    for line in lines:
        if b'FAILED' in line:
            f.write(line)
            f.write(b'\n')
