import { useState, useCallback, useEffect } from 'react'
import { Plus, X, RotateCw, Save, Sparkles, Dices } from 'lucide-react'
import { SpinWheel } from '@/components/SpinWheel'
import { WinnerModal } from '@/components/WinnerModal'
import { SavedWheels } from '@/components/SavedWheels'
import { useSound } from '@/hooks/useSound'
import { 
  WheelTemplate, 
  loadTemplates, 
  saveTemplates, 
  generateId 
} from '@/lib/wheel'

const DEFAULT_OPTIONS = ['选项 1', '选项 2', '选项 3', '选项 4']
const MIN_OPTIONS = 2
const MAX_OPTIONS = 10

export default function WheelApp() {
  const [options, setOptions] = useState<string[]>(DEFAULT_OPTIONS)
  const [newOption, setNewOption] = useState('')
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [winner, setWinner] = useState<string | null>(null)
  const [templates, setTemplates] = useState<WheelTemplate[]>([])
  const [templateName, setTemplateName] = useState('')
  const [showSaveInput, setShowSaveInput] = useState(false)

  const { playStart, playWin } = useSound()

  // 加载保存的模板
  useEffect(() => {
    setTemplates(loadTemplates())
  }, [])

  // 添加选项
  const handleAddOption = useCallback(() => {
    const trimmed = newOption.trim()
    if (trimmed && options.length < MAX_OPTIONS) {
      setOptions(prev => [...prev, trimmed])
      setNewOption('')
    }
  }, [newOption, options.length])

  // 删除选项
  const handleRemoveOption = useCallback((index: number) => {
    if (options.length > MIN_OPTIONS) {
      setOptions(prev => prev.filter((_, i) => i !== index))
    }
  }, [options.length])

  // 旋转转盘
  const handleSpin = useCallback(() => {
    if (isSpinning || options.length < MIN_OPTIONS) return

    playStart()
    setIsSpinning(true)
    
    // 随机旋转角度 (5-10圈 + 随机位置)
    const spins = 5 + Math.random() * 5
    const randomAngle = Math.random() * 360
    const totalRotation = spins * 360 + randomAngle
    
    setRotation(totalRotation)
  }, [isSpinning, options.length, playStart])

  // 旋转结束
  const handleSpinEnd = useCallback(() => {
    setIsSpinning(false)
    
    // 计算获胜者
    const finalAngle = rotation % 360
    const sliceAngle = 360 / options.length
    // 指针在顶部（270度位置），计算指向的扇区
    const winnerIndex = Math.floor((360 - finalAngle + sliceAngle / 2) % 360 / sliceAngle) % options.length
    
    playWin()
    setWinner(options[winnerIndex])
  }, [rotation, options, playWin])

  // 保存模板
  const handleSaveTemplate = useCallback(() => {
    const name = templateName.trim()
    if (!name) return

    const newTemplate: WheelTemplate = {
      id: generateId(),
      name,
      options: [...options],
      createdAt: Date.now(),
    }

    const updated = [newTemplate, ...templates]
    setTemplates(updated)
    saveTemplates(updated)
    setTemplateName('')
    setShowSaveInput(false)
  }, [templateName, options, templates])

  // 加载模板
  const handleLoadTemplate = useCallback((template: WheelTemplate) => {
    setOptions([...template.options])
  }, [])

  // 删除模板
  const handleDeleteTemplate = useCallback((id: string) => {
    const updated = templates.filter(t => t.id !== id)
    setTemplates(updated)
    saveTemplates(updated)
  }, [templates])

  // 随机打乱选项
  const handleShuffle = useCallback(() => {
    setOptions(prev => [...prev].sort(() => Math.random() - 0.5))
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* 标题 */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <Dices className="w-10 h-10 text-primary animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              命运转盘
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            让转盘替你做决定 ✨
          </p>
        </header>

        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
          {/* 左侧：转盘 */}
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <SpinWheel
                options={options}
                isSpinning={isSpinning}
                rotation={rotation}
                onSpinEnd={handleSpinEnd}
              />
            </div>

            <button
              onClick={handleSpin}
              disabled={isSpinning || options.length < MIN_OPTIONS}
              className="btn-primary text-xl px-12 py-5 animate-pulse-glow disabled:animate-none"
            >
              {isSpinning ? (
                <>
                  <RotateCw className="animate-spin" size={24} />
                  旋转中...
                </>
              ) : (
                <>
                  <Sparkles size={24} />
                  旋转！
                </>
              )}
            </button>
          </div>

          {/* 右侧：选项管理 */}
          <div className="space-y-6">
            {/* 选项列表 */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">
                  选项 ({options.length}/{MAX_OPTIONS})
                </h2>
                <button
                  onClick={handleShuffle}
                  className="btn-ghost text-sm"
                  title="随机打乱"
                >
                  <Dices size={16} />
                  打乱
                </button>
              </div>

              {/* 选项输入 */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddOption()}
                  placeholder="输入新选项..."
                  className="input-field flex-1"
                  maxLength={30}
                  disabled={options.length >= MAX_OPTIONS}
                />
                <button
                  onClick={handleAddOption}
                  disabled={!newOption.trim() || options.length >= MAX_OPTIONS}
                  className="btn-primary px-4"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* 选项列表 */}
              <div className="space-y-2 max-h-[280px] overflow-y-auto pr-2">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 group hover:bg-muted/50 transition-colors"
                  >
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{
                        background: `hsl(${[0, 25, 45, 140, 180, 210, 260, 290, 330, 15][index % 10]}, 75%, 60%)`
                      }}
                    />
                    <span className="flex-1 truncate text-foreground">
                      {option}
                    </span>
                    <button
                      onClick={() => handleRemoveOption(index)}
                      disabled={options.length <= MIN_OPTIONS}
                      className="opacity-0 group-hover:opacity-100 btn-icon w-8 h-8 text-muted-foreground hover:text-destructive disabled:opacity-30"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {options.length < MIN_OPTIONS && (
                <p className="text-sm text-destructive mt-2">
                  至少需要 {MIN_OPTIONS} 个选项
                </p>
              )}
            </div>

            {/* 保存转盘 */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                保存转盘
              </h2>
              
              {showSaveInput ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveTemplate()}
                    placeholder="输入模板名称..."
                    className="input-field flex-1"
                    maxLength={20}
                    autoFocus
                  />
                  <button
                    onClick={handleSaveTemplate}
                    disabled={!templateName.trim()}
                    className="btn-primary px-4"
                  >
                    <Save size={18} />
                  </button>
                  <button
                    onClick={() => {
                      setShowSaveInput(false)
                      setTemplateName('')
                    }}
                    className="btn-ghost px-3"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSaveInput(true)}
                  className="btn-secondary w-full"
                >
                  <Save size={18} />
                  保存当前转盘
                </button>
              )}
            </div>

            {/* 已保存的转盘 */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                已保存的转盘
              </h2>
              <SavedWheels
                templates={templates}
                onLoad={handleLoadTemplate}
                onDelete={handleDeleteTemplate}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 获胜者弹窗 */}
      {winner && (
        <WinnerModal
          winner={winner}
          onClose={() => setWinner(null)}
        />
      )}
    </div>
  )
}
