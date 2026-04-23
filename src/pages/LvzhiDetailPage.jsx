import { useParams, Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { gongzuoshiList } from '../data/mock'

export default function LvzhiDetailPage() {
  const { id } = useParams()
  const studio = gongzuoshiList.find(s => s.id === Number(id))

  const starLabel = { '5': '五星级', '4': '四星级', '3': '三星级' }
  const starColor = { '5': 'text-amber-500', '4': 'text-blue-500', '3': 'text-green-500' }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link to="/lvzhi" className="text-sm text-primary hover:underline mb-4 inline-block">
        ← 返回委员履职平台
      </Link>
      {studio ? (
        <>
          <SectionTitle badge="委员工作室" title={studio.name} />
          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <span className="text-xs text-gray-400 block mb-1">领衔委员</span>
                <span className="text-sm font-medium text-gray-900">{studio.leader}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-1">星级评定</span>
                <span className={`text-sm font-bold ${starColor[studio.star] || ''}`}>
                  {starLabel[studio.star] || studio.star + '星级'}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-1">地址</span>
                <span className="text-sm font-medium text-gray-900">{studio.address}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {studio.name}由{studio.leader}委员领衔，位于{studio.address}。
              工作室积极开展委员履职活动，围绕辖区民生热点问题组织协商议事，收集社情民意，服务基层治理。
              2025年度被评定为{starLabel[studio.star]}委员工作室。
            </p>
          </div>

          <SectionTitle title="近期活动" />
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-4 border-b border-gray-50">
                <span className="shrink-0 w-20 text-xs text-gray-400">2026-04</span>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">委员接待日活动</h4>
                  <p className="text-xs text-gray-500 mt-1">面向辖区居民收集社情民意，协商解决民生问题</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-4 border-b border-gray-50">
                <span className="shrink-0 w-20 text-xs text-gray-400">2026-03</span>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">专题协商议事会</h4>
                  <p className="text-xs text-gray-500 mt-1">围绕社区治理提升开展协商议事</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-20 text-xs text-gray-400">2026-02</span>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">春节走访慰问</h4>
                  <p className="text-xs text-gray-500 mt-1">走访慰问辖区困难群众和老年群体</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <SectionTitle badge="委员工作室" title="工作室详情" />
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <p className="text-sm text-gray-600 leading-relaxed">
              未找到对应的工作室信息。
            </p>
          </div>
        </>
      )}
    </div>
  )
}
