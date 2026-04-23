import SectionTitle from '../components/SectionTitle'
import DataTable from '../components/DataTable'
import { jihuaData } from '../data/mock'

export default function JihuaPage() {
  const planColumns = [
    { header: '界别', accessor: 'jibie' },
    { header: '活动名称', accessor: 'name' },
    { header: '活动类型', accessor: 'type' },
    { header: '时间', accessor: 'time' },
  ]

  const yishitangColumns = [
    { header: '责任部门', accessor: 'dept' },
    { header: '协商课题', accessor: 'topic' },
    { header: '时间', accessor: 'time' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle badge="2026年履职计划" title="年度履职计划" subtitle="各界别及街道民生议事堂2026年度计划安排" />

      <div className="space-y-8">
        <div>
          <SectionTitle title={`各界别履职计划 · ${jihuaData.jibiePlan.length} 项`} />
          <DataTable columns={planColumns} data={jihuaData.jibiePlan} />
        </div>

        <div>
          <SectionTitle title={`各街道"民生议事堂"议事计划 · ${jihuaData.yishitangPlan.length} 项`} />
          <DataTable columns={yishitangColumns} data={jihuaData.yishitangPlan} />
        </div>
      </div>
    </div>
  )
}
