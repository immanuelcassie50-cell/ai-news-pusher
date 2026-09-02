#!/usr/bin/env python3
import os
base = r'D:\新课开发\内训师和表达\系列进阶课'
print('Entries in base directory:')
for entry in os.listdir(base):
    if '12' in entry:
        print(f'  {entry}')
