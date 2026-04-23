import { useParams, Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import Timeline from '../components/Timeline'
import { fenzhongxinData } from '../data/mock'

export default function FenzhongxinDetailPage() {
  const { center } = useParams()
  const centerData = fenzhongxinData[center]

  if (!centerData) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link to="/fenzhongxin" className="text-sm text-primary hover:underline mb-4 inline-block">
          ← 返回协商民主实践中心
        </Link>
        <SectionTitle badge="协商民主实践中心" title="未找到该分中心" />
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <p className="text-sm text-gray-600">请从列表中选择一个分中心查看详情。</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link to="/fenzhongxin" className="text-sm text-primary hover:underline mb-4 inline-block">
        ← 返回协商民主实践中心
      </Link>
      <SectionTitle badge="协商民主实践中心" title={centerData.name} />

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-xs text-gray-400 block mb-1">📍 地址</span>
            <span className="text-sm font-medium text-gray-900">{centerData.location}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{centerData.desc}</p>
      </div>

      <SectionTitle title="年度活动计划" subtitle={`共 ${centerData.activities.length} 项活动安排`} />
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <Timeline items={centerData.activities} />
      </div>
    </div>
  )
}
