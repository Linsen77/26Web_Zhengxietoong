import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

const centers = [
  {
    key: 'pengbu',
    name: '上城区（彭埠）新时代协商民主实践中心',
    location: '彭埠街道罗家老宅',
    desc: '2023年3月正式授牌成立。按照"一园一堂一馆两站"布局，集成果展示、政策宣传、理论宣讲、民主议事、读书交流、协商议政等功能于一体。',
    color: 'border-l-primary',
  },
  {
    key: 'ziyang',
    name: '上城区（紫阳）新时代协商民主实践中心',
    location: '紫阳西泠书房',
    desc: '2025年底正式启动建设。按照"一家七景"功能布局，形成"多元协同、闭环落实、效能提升"三大工作机制，打造集协商议事、文化浸润、委员履职、公共服务于一体的基层协商民主阵地。',
    color: 'border-l-secondary',
  },
]

export default function FenzhongxinPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle badge="协商民主实践中心" title="上城区分中心" subtitle="一南一北两大分中心" />
      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        上城区政协将委员一线履职、政协工作延伸、基层社会治理三者有机结合，"三位一体"建设协商民主实践平台，推动"一南一北"两大分中心建立常态化运营机制。
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {centers.map(center => (
          <Link
            key={center.key}
            to={`/fenzhongxin/${center.key}`}
            className={`bg-white rounded-xl border border-gray-100 border-l-4 ${center.color} p-6 shadow-sm hover:shadow-lg transition-all duration-300 group`}
          >
            <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {center.name}
            </h3>
            <p className="text-xs text-gray-400 mb-3">📍 {center.location}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{center.desc}</p>
            <p className="text-xs text-primary mt-4 font-medium">查看详情与活动计划 →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
