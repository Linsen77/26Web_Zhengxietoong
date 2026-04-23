import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { jiedaoList } from '../data/mock'

export default function JiedaoPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle badge="街道委员小组" title={`${jiedaoList.length}个街道委员小组`} subtitle="点击查看街道详情" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jiedaoList.map(street => (
          <Link
            key={street.id}
            to={`/jiedao/${street.id}`}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {street.name}
              </h3>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                {street.members.length}人
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{street.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
