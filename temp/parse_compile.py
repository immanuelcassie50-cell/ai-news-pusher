#!/usr/bin/env python3
with open(r'D:\CC\temp\compile_out.txt','rb') as f:
    content = f.read()

lines = content.split(b'\n')
failed = [l for l in lines if b'FAILED' in l]
with open(r'D:\CC\temp\failed.txt','wb') as f:
    for l in failed:
        f.write(l)
        f.write(b'\n')
print(f'Found {len(failed)} failures')
