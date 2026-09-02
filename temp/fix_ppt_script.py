import re

input_file = r"D:\新课开发\保险\5、资产配置实战用组合思维取代单一产品推销\PPT\资产配置实战_完整PPT_生成脚本.js"
output_file = r"D:\新课开发\保险\5、资产配置实战用组合思维取代单一产品推销\PPT\资产配置实战_完整PPT_生成脚本_fixed.js"

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

# The file has been corrupted with escaped quotes
# We need to unescape things that were wrongly escaped

# Step 1: Replace \\" (double backslash quote) with just the Chinese quote character
# Step 2: Replace \" (backslash quote) with just ASCII quote
# Step 3: Replace \\' with just '

# The Chinese quotation marks are:
# " (U+201C) - left double quotation mark
# " (U+201D) - right double quotation mark

# In the corrupted file, they appear as \\" and \\"

# Let's handle this carefully:
# The pattern \\" means: backslash followed by quote
# We want to convert: backslash + Chinese quote → just Chinese quote
# And: backslash + ASCII quote → just ASCII quote

# Use a two-pass approach
# Pass 1: Handle Chinese quotes (they should become the actual Chinese quote characters)
content = content.replace('\\\\"', '“')  # left Chinese quote
content = content.replace('\\\\"', '”')  # right Chinese quote

# Pass 2: Handle ASCII quotes that were wrongly escaped
content = content.replace('\\"', '"')

# Pass 3: Handle single quotes
content = content.replace("\\'", "'")

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Fixed file written to {output_file}')
print(f'File size: {len(content)} characters')
