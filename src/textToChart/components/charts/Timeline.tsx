// 时间线组件
interface TimelineProps {
  sentences: string[];
  numbers: { value: number; unit: string; context: string }[];
}

export function Timeline({ sentences, numbers }: TimelineProps) {
  // 提取时间信息
  const timePatterns = [
    { regex: /(\d+)年/, format: '$1年' },
    { regex: /(\d+)月/, format: '$1月' },
    { regex: /(\d+)日/, format: '$1日' },
  ];

  const extractTime = (text: string): string | null => {
    for (const pattern of timePatterns) {
      const match = text.match(pattern.regex);
      if (match) {
        return match[0];
      }
    }
    return null;
  };

  // 构建时间线数据
  const timelineData = sentences.slice(0, 6).map((sentence, index) => {
    const time = extractTime(sentence) || `阶段${index + 1}`;
    const relatedNumber = numbers[index];

    return {
      time,
      content: sentence.slice(0, 50) + (sentence.length > 50 ? '...' : ''),
      value: relatedNumber?.value,
      unit: relatedNumber?.unit,
    };
  });

  if (timelineData.length === 0) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center',
        color: '#999',
        backgroundColor: '#fff',
        borderRadius: '12px'
      }}>
        请输入包含时间信息的文字
      </div>
    );
  }

  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        position: 'relative',
        paddingLeft: '30px'
      }}>
        {/* 垂直线 */}
        <div style={{
          position: 'absolute',
          left: '8px',
          top: '0',
          bottom: '0',
          width: '2px',
          backgroundColor: '#4ECDC4'
        }} />

        {timelineData.map((item, index) => (
          <div key={index} style={{
            position: 'relative',
            marginBottom: '24px',
            paddingLeft: '20px'
          }}>
            {/* 圆点 */}
            <div style={{
              position: 'absolute',
              left: '-26px',
              top: '4px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#4ECDC4',
              border: '3px solid #fff',
              boxShadow: '0 0 0 2px #4ECDC4'
            }} />

            {/* 时间标签 */}
            <div style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#4ECDC4',
              marginBottom: '4px'
            }}>
              {item.time}
            </div>

            {/* 内容 */}
            <div style={{
              padding: '12px 16px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#333',
              lineHeight: '1.6'
            }}>
              {item.content}
              {item.value !== undefined && (
                <span style={{
                  marginLeft: '8px',
                  padding: '2px 8px',
                  backgroundColor: '#FF6B6B',
                  color: '#fff',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>
                  {item.value}{item.unit || ''}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
