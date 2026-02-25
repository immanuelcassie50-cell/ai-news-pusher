import { Clock, Trash2, Play } from 'lucide-react'
import { WheelTemplate } from '@/lib/wheel'

interface SavedWheelsProps {
  templates: WheelTemplate[]
  onLoad: (template: WheelTemplate) => void
  onDelete: (id: string) => void
}

export function SavedWheels({ templates, onLoad, onDelete }: SavedWheelsProps) {
  if (templates.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
        <p>还没有保存的转盘</p>
        <p className="text-sm mt-1">创建并保存你的第一个转盘吧！</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {templates.map((template) => (
        <div
          key={template.id}
          className="card card-hover p-4 group"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">
                {template.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {template.options.length} 个选项
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {template.options.slice(0, 4).map((opt, i) => (
                  <span 
                    key={i}
                    className="inline-block px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                  >
                    {opt.length > 8 ? opt.substring(0, 7) + '…' : opt}
                  </span>
                ))}
                {template.options.length > 4 && (
                  <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                    +{template.options.length - 4}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onLoad(template)}
                className="btn-icon text-primary hover:bg-primary/20"
                title="使用此转盘"
              >
                <Play size={18} />
              </button>
              <button
                onClick={() => onDelete(template.id)}
                className="btn-icon text-destructive hover:bg-destructive/20"
                title="删除"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
