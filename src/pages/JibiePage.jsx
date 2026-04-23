import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { jibieList } from '../data/mock'

export default function JibiePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle badge="界别基本情况" title="各界别委员构成" subtitle={`共 ${jibieList.length} 个界别 · 点击查看界别详情`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jibieList.map(jibie => (
          <Link
            key={jibie.id}
            to={`/jibie/${jibie.id}`}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {jibie.name}
              </h3>
              <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-medium">
                {jibie.members.length}人
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">{jibie.desc}</p>
            <p className="text-xs text-primary mt-2">点击查看详情 →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
