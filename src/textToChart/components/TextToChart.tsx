import { useState } from 'react';
import { analyzeText, TextAnalysisResult } from '../lib/textAnalyzer';
import { recommendChart, getChartTypeName, chartTypes, ChartRecommendation } from '../lib/chartRecommender';
import { ChartRenderer } from './charts/ChartRenderer';

export function TextToChart() {
  const [inputText, setInputText] = useState('');
  const [analysis, setAnalysis] = useState<TextAnalysisResult | null>(null);
  const [recommendation, setRecommendation] = useState<ChartRecommendation | null>(null);
  const [selectedType, setSelectedType] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // 处理文本分析
  const handleAnalyze = () => {
    if (!inputText.trim()) return;

    setIsAnalyzing(true);

    // 模拟分析延迟（让用户看到动画效果）
    setTimeout(() => {
      // 1. 分析文本
      const result = analyzeText(inputText);
      setAnalysis(result);

      // 2. 推荐图表
      const rec = recommendChart(result);
      setRecommendation(rec);
      setSelectedType(rec.type);

      setIsAnalyzing(false);
    }, 500);
  };

  // 处理图表类型切换
  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  // 清空
  const handleClear = () => {
    setInputText('');
    setAnalysis(null);
    setRecommendation(null);
    setSelectedType('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* 头部 */}
        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '8px'
          }}>
            文字一键生成图表
          </h1>
          <p style={{
            color: '#666',
            fontSize: '16px'
          }}>
            输入文字，AI 自动提炼关键信息并生成可视化图表
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: selectedType ? '1fr 1fr' : '1fr',
          gap: '24px',
          alignItems: 'start'
        }}>
          {/* 左侧：输入区域 */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
          }}>
            {/* 输入框 */}
            <div style={{
              marginBottom: '20px'
            }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                输入文字内容
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="请输入大段文字，系统将自动分析并生成图表...

例如：
2024年第一季度，公司营收达到1000万元，同比增长25%。其中：
- 产品A销售300万元，占比30%
- 产品B销售500万元，占比50%
- 产品C销售200万元，占比20%

公司计划：第一步研发新产品，第二步进行市场推广，第三步扩大销售渠道。"
                style={{
                  width: '100%',
                  height: '250px',
                  padding: '16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '12px',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#4ECDC4';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                }}
              />
            </div>

            {/* 按钮 */}
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <button
                onClick={handleAnalyze}
                disabled={!inputText.trim() || isAnalyzing}
                style={{
                  flex: 1,
                  padding: '14px 24px',
                  backgroundColor: inputText.trim() && !isAnalyzing ? '#4ECDC4' : '#ccc',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: inputText.trim() && !isAnalyzing ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s'
                }}
              >
                {isAnalyzing ? '分析中...' : '生成图表'}
              </button>
              <button
                onClick={handleClear}
                style={{
                  padding: '14px 24px',
                  backgroundColor: '#fff',
                  color: '#666',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                清空
              </button>
            </div>

            {/* 分析结果摘要 */}
            {analysis && (
              <div style={{
                marginTop: '24px',
                padding: '16px',
                backgroundColor: '#f8f9fa',
                borderRadius: '10px'
              }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '12px'
                }}>
                  📊 分析结果
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                  fontSize: '13px'
                }}>
                  <div>
                    <span style={{ color: '#666' }}>关键词：</span>
                    <span style={{ color: '#333' }}>
                      {analysis.keywords.slice(0, 5).join('、')}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: '#666' }}>提取数值：</span>
                    <span style={{ color: '#333' }}>{analysis.numbers.length} 个</span>
                  </div>
                  <div>
                    <span style={{ color: '#666' }}>识别关系：</span>
                    <span style={{ color: '#333' }}>{analysis.relations.length} 个</span>
                  </div>
                  <div>
                    <span style={{ color: '#666' }}>文本结构：</span>
                    <span style={{ color: '#333' }}>
                      {analysis.structure === 'ratio' && '比例结构'}
                      {analysis.structure === 'comparison' && '对比结构'}
                      {analysis.structure === 'linear' && '流程结构'}
                      {analysis.structure === 'hierarchical' && '层级结构'}
                      {analysis.structure === 'unknown' && '一般文本'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 右侧：图表展示 */}
          {selectedType && analysis && (
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
            }}>
              {/* 图表类型选择 */}
              <div style={{
                marginBottom: '20px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '12px'
                }}>
                  选择图表类型
                </label>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {chartTypes.map((chart) => (
                    <button
                      key={chart.type}
                      onClick={() => handleTypeChange(chart.type)}
                      style={{
                        padding: '10px 16px',
                        backgroundColor: selectedType === chart.type ? '#4ECDC4' : '#f5f7fa',
                        color: selectedType === chart.type ? '#fff' : '#666',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>{chart.icon}</span>
                      <span>{chart.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 推荐信息 */}
              {recommendation && selectedType === recommendation.type && (
                <div style={{
                  padding: '12px 16px',
                  backgroundColor: '#e8f8f5',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  fontSize: '13px',
                  color: '#2d8a6e'
                }}>
                  <strong>💡 推荐理由：</strong>{recommendation.reason}
                </div>
              )}

              {/* 图表渲染 */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '400px'
              }}>
                <ChartRenderer
                  type={selectedType as any}
                  analysis={analysis}
                />
              </div>
            </div>
          )}

          {/* 空状态 */}
          {!selectedType && (
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '64px',
                marginBottom: '16px'
              }}>
                📈
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                等待生成图表
              </h3>
              <p style={{
                color: '#999',
                fontSize: '14px'
              }}>
                请在左侧输入文字内容<br />
                系统将自动分析并生成合适的图表
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
