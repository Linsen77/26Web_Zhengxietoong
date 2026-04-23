import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import TabSwitch from '../components/TabSwitch'
import { xingjiData } from '../data/mock'

const tabs = [
  { key: '5', label: '⭐⭐⭐⭐⭐ 五星级（25家）' },
  { key: '4', label: '⭐⭐⭐⭐ 四星级（17家）' },
  { key: '3', label: '⭐⭐⭐ 三星级（0家）' },
]

export default function XingjiPage() {
  const [activeTab, setActiveTab] = useState('5')
  const studios = xingjiData[activeTab] || []

  const starLabel = { '5': '五星级', '4': '四星级', '3': '三星级' }
  const starBadgeColor = { '5': 'bg-amber-100 text-amber-700', '4': 'bg-blue-100 text-blue-700', '3': 'bg-green-100 text-green-700' }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle badge="星级委员工作室" title="星级委员工作室风采" subtitle="2025年度星级委员工作室认定结果" />
      <TabSwitch tabs={tabs} active={activeTab} onChange={setActiveTab} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {studios.map(studio => (
          <div
            key={studio.id}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                {studio.name}
              </h3>
              <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${starBadgeColor[activeTab]}`}>
                {starLabel[activeTab]}
              </span>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs text-gray-500">
                <span className="text-gray-400">领衔委员：</span>{studio.leader}
              </p>
              <p className="text-xs text-gray-500">
                <span className="text-gray-400">地址：</span>{studio.address}
              </p>
            </div>
          </div>
        ))}
        {studios.length === 0 && (
          <p className="text-sm text-gray-400 col-span-full py-8 text-center">
            暂无该星级的委员工作室。
          </p>
        )}
      </div>
    </div>
  )
}
