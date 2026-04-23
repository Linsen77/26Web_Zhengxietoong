import { useParams, Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import DataTable from '../components/DataTable'
import { jiedaoList } from '../data/mock'

export default function JiedaoDetailPage() {
  const { id } = useParams()
  const info = jiedaoList.find(s => s.id === id) || { name: id, leader: '', members: [], description: '' }

  const columns = [
    { header: '序号', accessor: (row, i) => i + 1 },
    { header: '姓名', accessor: 'name' },
    { header: '党派', accessor: 'party' },
    { header: '性别', accessor: 'gender' },
    { header: '工作单位及职务', accessor: 'position' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link to="/jiedao" className="text-sm text-primary hover:underline mb-4 inline-block">
        ← 返回街道委员小组列表
      </Link>
      <SectionTitle badge="街道委员小组" title={info.name} subtitle={`共 ${info.count} 名委员`} />

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <span className="text-xs text-gray-400 block mb-1">组长</span>
            <span className="text-sm font-medium text-gray-900">{info.leader || '待定'}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400 block mb-1">联系电话</span>
            <span className="text-sm font-medium text-gray-900">{info.phone || '待定'}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400 block mb-1">地址</span>
            <span className="text-sm font-medium text-gray-900">{info.address || '待定'}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {info.desc || '数据接入后将展示街道详情介绍。'}
        </p>
      </div>

      <SectionTitle title="委员名单" subtitle={`共 ${info.members?.length || 0} 名委员`} />
      <DataTable columns={columns} data={info.members || []} />
    </div>
  )
}
