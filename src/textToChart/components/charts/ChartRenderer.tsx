import { PieChart } from './PieChart';
import { BarChart } from './BarChart';
import { FlowChart } from './FlowChart';
import { MindMap } from './MindMap';
import { Timeline } from './Timeline';
import { RadarChart } from './RadarChart';
import { TextAnalysisResult, generateChartData } from '../lib/textAnalyzer';

interface ChartRendererProps {
  type: 'pie' | 'bar' | 'flowchart' | 'mindmap' | 'timeline' | 'radar';
  analysis: TextAnalysisResult;
}

// 图表渲染器 - 根据类型选择对应的图表组件
export function ChartRenderer({ type, analysis }: ChartRendererProps) {
  // 生成图表数据
  const chartData = generateChartData(analysis);

  switch (type) {
    case 'pie':
      return (
        <PieChart
          data={chartData.data}
          width={400}
          height={400}
        />
      );

    case 'bar':
      return (
        <BarChart
          data={chartData.data}
          width={500}
          height={350}
        />
      );

    case 'flowchart':
      return (
        <FlowChart
          data={analysis.relations}
        />
      );

    case 'mindmap':
      return (
        <MindMap
          keywords={analysis.keywords}
        />
      );

    case 'timeline':
      return (
        <Timeline
          sentences={analysis.sentences}
          numbers={analysis.numbers}
        />
      );

    case 'radar':
      // 为雷达图准备数据
      const radarData = analysis.keywords.slice(0, 6).map((keyword, i) => ({
        name: keyword,
        value: analysis.numbers[i]?.value || Math.floor(Math.random() * 100) + 20,
      }));
      return (
        <RadarChart
          data={radarData}
          width={400}
          height={400}
        />
      );

    default:
      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          color: '#999'
        }}>
          暂不支持该图表类型
        </div>
      );
  }
}
