import { useParams, Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import DataTable from '../components/DataTable'
import { jibieList } from '../data/mock'

export default function JibieDetailPage() {
  const { id } = useParams()
  const info = jibieList.find(j => j.id === id) || { name: id, desc: '', leader: '', members: [] }

  const columns = [
    { header: '序号', accessor: (_, __, i) => i + 1 },
    { header: '姓名', accessor: 'name' },
    { header: '工作单位及职务', accessor: 'position' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link to="/jibie" className="text-sm text-primary hover:underline mb-4 inline-block">
        ← 返回界别列表
      </Link>
      <SectionTitle badge="界别基本情况" title={info.name} subtitle={`共 ${info.count} 名委员`} />

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-xs text-gray-400 block mb-1">召集人</span>
            <span className="text-sm font-medium text-gray-900">{info.leader || '待定'}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400 block mb-1">界别人数</span>
            <span className="text-sm font-medium text-gray-900">{info.count} 人</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {info.desc || '数据接入后将展示界别详情介绍、联系领导、召集人信息及委员名单。'}
        </p>
      </div>

      {info.members && info.members.length > 0 && (
        <>
          <SectionTitle title="委员名单" />
          <DataTable columns={columns} data={info.members} />
        </>
      )}
    </div>
  )
}
