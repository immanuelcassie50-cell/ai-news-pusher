#!/bin/bash
cd "D:/新课开发/HR/薪酬/10.全面薪酬新叙事：弹性福利与非物质回报的AI个性化设计/授课PPT/slides"

# Count total slides
total=$(ls slide-*.js 2>/dev/null | wc -l)
echo "Total slide JS files: $total"

# Compile each slide
count=0
for file in slide-*.js; do
    count=$((count + 1))
    echo "[$count/$total] Compiling $file..."
    node "$file" 2>&1 | tail -1
done

echo "Compilation complete"
