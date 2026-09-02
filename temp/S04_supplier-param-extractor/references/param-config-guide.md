# 参数配置详细指南

本指南说明如何正确配置 `param_extract_config.json`，确保参数提取的准确率和覆盖率。

## parameters 数组字段说明

每个参数对象包含以下字段：

| 字段 | 必填 | 说明 | 示例 |
|------|------|------|------|
| `name` | 是 | 参数的标准名称，用于输出表列名 | `"工作电压"` |
| `unit` | 否 | 参数单位，输出时跟在值后面 | `"V"`、`"℃"`、`"mm"` |
| `synonyms` | 是 | 同义词列表，文件匹配时使用 | `["电压", "VCC", "Supply Voltage"]` |

### synonyms 同义词扩展方法

同义词是提升提取覆盖率的关键。扩展原则：

**1. 中英文对照**
```json
{
    "name": "防护等级",
    "synonyms": ["防护等级", "IP等级", "IP Rating", "Protection Class", "Ingress Protection"]
}
```

**2. 缩写与全称**
```json
{
    "name": "工作电压",
    "synonyms": ["工作电压", "VCC", "Vcc", "Supply Voltage"]
}
```

**3. 常见表述变体**
```json
{
    "name": "存储温度",
    "synonyms": ["存储温度", "存放温度", "Storage Temperature", "Storage Temp", "保存温度"]
}
```

**4. 数值单位变体**
```json
{
    "name": "功耗",
    "synonyms": ["功耗", "功率消耗", "Power Consumption", "Power Dissipation", "供电电流"]
}
```

## 常见采购品类参数示例

### 电子元器件类

```json
{
    "parameters": [
        {"name": "工作电压", "unit": "V", "synonyms": ["工作电压", "额定电压", "Operating Voltage", "VCC"]},
        {"name": "工作温度范围", "unit": "℃", "synonyms": ["工作温度", "工作温度范围", "Operating Temperature", "Temp Range"]},
        {"name": "封装形式", "unit": "", "synonyms": ["封装", "Package", "Footprint", "封装尺寸"]},
        {"name": "环保认证", "unit": "", "synonyms": ["RoHS", "REACH", "环保", "Environmental"]}
    ]
}
```

### 结构件类

```json
{
    "parameters": [
        {"name": "材质", "unit": "", "synonyms": ["材质", "材料", "Material", "成分"]},
        {"name": "尺寸", "unit": "mm", "synonyms": ["尺寸", "规格", "Dimension", "长宽高"]},
        {"name": "表面处理", "unit": "", "synonyms": ["表面处理", "涂层", "Finish", "Plating"]},
        {"name": "承重能力", "unit": "kg", "synonyms": ["承重", "负载", "Load Capacity", "额定负载"]}
    ]
}
```

### 化学品/原材料类

```json
{
    "parameters": [
        {"name": "外观", "unit": "", "synonyms": ["外观", "颜色", "Appearance", "Color"]},
        {"name": "密度", "unit": "g/cm³", "synonyms": ["密度", "相对密度", "Density", "Specific Gravity"]},
        {"name": "保质期", "unit": "月", "synonyms": ["保质期", "有效期", "Shelf Life", "Validity"]},
        {"name": "存储条件", "unit": "", "synonyms": ["存储条件", "存放条件", "Storage", "保存条件"]}
    ]
}
```

## 同义词库持续维护建议

1. **首次使用后补充**：运行提取后，检查"待人工确认"Sheet，将遗漏的表述加入同义词列表
2. **按供应商维护**：不同供应商可能使用不同表述，可为每个供应商创建独立的参数配置
3. **版本记录**：同义词库更新时记录版本号，便于追溯和对比
4. **批量处理前验证**：修改配置后，用一份已知内容的文件测试，确认能正确提取后再批量处理

## 高级配置：my_requirements

```json
{
    "my_requirements": {
        "工作电压": "9-16V",
        "工作温度范围": "-40~85℃",
        "防护等级": "IP67"
    }
}
```

设置我方需求后，主表会自动标注每个供应商是否满足需求（仅作参考，精确判断须人工）。