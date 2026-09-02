"""步骤0：生成参数提取配置模板（首次使用时运行）"""
import json
import argparse
from pathlib import Path


# 针对常见采购品类提供配置模板参考
DEFAULT_TEMPLATE = {
    "parameters": [
        {
            "name": "工作电压",
            "unit": "V",
            "synonyms": ["工作电压", "供电电压", "额定电压", "Operating Voltage",
                         "Supply Voltage", "VCC", "Vcc", "电源电压"]
        },
        {
            "name": "工作温度范围",
            "unit": "℃",
            "synonyms": ["工作温度", "工作温度范围", "Operating Temperature",
                         "Temperature Range", "使用温度", "环境温度"]
        },
        {
            "name": "防护等级",
            "unit": "",
            "synonyms": ["防护等级", "IP等级", "IP Rating", "Protection Class",
                         "Ingress Protection", "防水防尘"]
        },
        {
            "name": "产品认证",
            "unit": "",
            "synonyms": ["认证", "资质", "Certification", "Certificate",
                         "IATF", "ISO", "AEC-Q", "符合标准"]
        },
        {
            "name": "年供应能力",
            "unit": "件/年",
            "synonyms": ["年产能", "年供货量", "产能", "Annual Capacity",
                         "Production Capacity", "供货能力"]
        }
    ],
    "confidence_keywords": {
        "high": ["规格", "额定", "Specification", "Rated", "Nominal", "标准值"],
        "low":  ["约", "大约", "参考", "approximately", "typical", "Typical"]
    },
    "file_naming_hint": "文件名中包含供应商标识（如：供应商A_产品型号_规格书.pdf）",
    "my_requirements": {}
}


def generate_config(output_path=None):
    """生成参数提取配置模板"""
    if output_path is None:
        output_path = Path("param_extract_config.json")
    else:
        output_path = Path(output_path)

    if output_path.exists():
        print(f"配置文件已存在：{output_path}")
        print("如需重新生成，请先删除现有配置文件")
        return output_path

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(DEFAULT_TEMPLATE, f, ensure_ascii=False, indent=2)

    print(f"配置模板已生成：{output_path}")
    print("\n请按照实际采购品类修改 parameters 中的参数名和同义词列表，然后继续")
    print("\n配置说明：")
    print("  - name: 参数的标准名称")
    print("  - unit: 参数单位（可选）")
    print("  - synonyms: 同义词列表，用于匹配文件中可能出现的各种表述")
    print("  - confidence_keywords: 置信度关键词配置")
    print("  - my_requirements: 我方需求基准（可选）")
    return output_path


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="生成参数提取配置模板")
    parser.add_argument("-o", "--output", default="param_extract_config.json",
                        help="输出配置文件路径（默认：param_extract_config.json）")
    args = parser.parse_args()

    generate_config(args.output)