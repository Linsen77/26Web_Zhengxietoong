import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import DataTable from '../components/DataTable'
import { gongzuoshiList } from '../data/mock'

export default function LvzhiPage() {
  const columns = [
    { header: '序号', accessor: (_, __, i) => i + 1 },
    { header: '委员工作室名称', accessor: 'name' },
    { header: '领衔委员', accessor: 'leader' },
    { header: '地址', accessor: 'address' },
    {
      header: '操作',
      accessor: 'id',
      render: (val) => (
        <Link to={`/lvzhi/${val}`} className="text-xs text-primary hover:underline">
          查看详情
        </Link>
      ),
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle badge="委员履职平台" title="委员工作室" subtitle={`全区共有委员工作室 ${gongzuoshiList.length} 家，实现履职平台街道委员小组全覆盖`} />

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6 shadow-sm">
        <p className="text-sm text-gray-600 leading-relaxed">
          上城区政协按照"向基层延伸覆盖"和"不建机构建机制"工作要求，坚持党建引领，强化委员工作室"三位一体"建设。目前，全区共有委员工作室{gongzuoshiList.length}家，实现履职平台街道委员小组全覆盖。2025年度共认定五星级委员工作室{gongzuoshiList.filter(s => s.star === '5').length}家，四星级委员工作室{gongzuoshiList.filter(s => s.star === '4').length}家，三星级委员工作室{gongzuoshiList.filter(s => s.star === '3').length}家。
        </p>
      </div>

      <DataTable columns={columns} data={gongzuoshiList} />
    </div>
  )
}
