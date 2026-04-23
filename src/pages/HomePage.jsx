import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { navCards, newsItems } from '../data/mock'

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-wide">政协工作一站式平台</h1>
          <div className="w-16 h-0.5 bg-white/50 mx-auto mb-4" />
          <p className="text-base sm:text-lg opacity-90">
            中国人民政治协商会议杭州市委员会 · 上城区政协工作平台
          </p>
        </div>
      </section>

      {/* Card Grid Navigation */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle badge="快捷入口" title="核心功能板块" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {navCards.map(card => (
            <Link
              key={card.key}
              to={card.path}
              className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.color} mx-auto mb-3 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 leading-snug">{card.title}</h3>
              <p className="text-xs text-gray-400 mt-1.5">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-primary to-secondary opacity-10" />

      {/* Latest News */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle badge="工作动态" title="最新资讯" badgeColor="bg-secondary" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className={`inline-block text-xs px-2.5 py-0.5 rounded-full font-semibold mb-3 ${item.tagColor}`}>
                {item.tag}
              </span>
              <h4 className="text-sm font-semibold text-gray-900 mb-2 leading-relaxed">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{item.content}</p>
              <p className="text-xs text-gray-300 mt-3">{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
