cd "D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides"
for i in $(seq 1 126); do
  num=$(printf "%03d" $i)
  file="slide-$num.js"
  if [ -f "$file" ]; then
    result=$(node -e "require('./$file')" 2>&1)
    if [ $? -ne 0 ]; then
      echo "=== $file ==="
      echo "$result" | grep -A1 "slide.addText"
      echo ""
    fi
  fi
done
