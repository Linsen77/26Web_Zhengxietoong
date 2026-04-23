import { useState, useMemo } from 'react'
import SectionTitle from '../components/SectionTitle'
import TabSwitch from '../components/TabSwitch'
import DataTable from '../components/DataTable'

const tabs = [
  { key: 'jibie', label: '按界别' },
  { key: 'jiedao', label: '按街道' },
  { key: 'zhuanweihui', label: '按专委会' },
]

export default function WeiyuanPage() {
  const [activeTab, setActiveTab] = useState('jibie')
  const [search, setSearch] = useState('')

  // 模拟完整委员数据
  const allMembers = [
    { id: 1, name: '张建国', group: '中共界别', groupType: 'jibie', gender: '男', party: '中共', position: '杭州某集团党委书记、董事长' },
    { id: 2, name: '李明华', group: '中共界别', groupType: 'jibie', gender: '男', party: '中共', position: '上城区人民政府办公室副主任' },
    { id: 3, name: '王晓红', group: '无党派界别', groupType: 'jibie', gender: '女', party: '无党派', position: '杭州某科技公司总经理' },
    { id: 4, name: '陈志远', group: '共青团、青联界别', groupType: 'jibie', gender: '男', party: '中共', position: '上城区团委书记' },
    { id: 5, name: '刘婷婷', group: '妇联界别', groupType: 'jibie', gender: '女', party: '中共', position: '上城区妇联主席' },
    { id: 6, name: '赵文强', group: '科技科协界别', groupType: 'jibie', gender: '男', party: '九三学社', position: '浙江大学教授、博导' },
    { id: 7, name: '孙丽萍', group: '教育界别', groupType: 'jibie', gender: '女', party: '民进', position: '杭州某中学校长' },
    { id: 8, name: '周大勇', group: '医卫界别', groupType: 'jibie', gender: '男', party: '农工党', position: '上城区人民医院副院长' },
    { id: 9, name: '吴秀英', group: '文学艺术界别', groupType: 'jibie', gender: '女', party: '无党派', position: '杭州画院副院长' },
    { id: 10, name: '郑伟民', group: '工商联界别', groupType: 'jibie', gender: '男', party: '民建', position: '浙江某控股集团总裁' },
    { id: 11, name: '黄海波', group: '经济界别', groupType: 'jibie', gender: '男', party: '中共', position: '杭州银行上城支行行长' },
    { id: 12, name: '林雪芬', group: '社会福利和保障界别', groupType: 'jibie', gender: '女', party: '中共', position: '上城区民政局副局长' },
    { id: 13, name: '杨建国', group: '特邀界别', groupType: 'jibie', gender: '男', party: '中共', position: '上城区住建局局长' },
    { id: 14, name: '马丽华', group: '体育界别', groupType: 'jibie', gender: '女', party: '中共', position: '上城区文广旅体局副局长' },
    { id: 15, name: '钱志明', group: '新闻文体界别', groupType: 'jibie', gender: '男', party: '中共', position: '上城区融媒体中心主任' },
    { id: 16, name: '徐晓峰', group: '湖滨街道', groupType: 'jiedao', gender: '男', party: '中共', position: '湖滨街道办事处副主任' },
    { id: 17, name: '何雪琴', group: '清波街道', groupType: 'jiedao', gender: '女', party: '民盟', position: '清波街道社区卫生服务中心主任' },
    { id: 18, name: '朱国强', group: '紫阳街道', groupType: 'jiedao', gender: '男', party: '中共', position: '紫阳街道党工委委员' },
    { id: 19, name: '胡建华', group: '小营街道', groupType: 'jiedao', gender: '男', party: '中共', position: '小营街道城管科科长' },
    { id: 20, name: '高秀珍', group: '望江街道', groupType: 'jiedao', gender: '女', party: '致公党', position: '望江小学副校长' },
    { id: 21, name: '罗文斌', group: '南星街道', groupType: 'jiedao', gender: '男', party: '中共', position: '南星街道人大工委主任' },
    { id: 22, name: '谢丽华', group: '闸弄口街道', groupType: 'jiedao', gender: '女', party: '九三学社', position: '杭州某建筑设计院高级工程师' },
    { id: 23, name: '韩志刚', group: '采荷街道', groupType: 'jiedao', gender: '男', party: '中共', position: '采荷街道综治办主任' },
    { id: 24, name: '唐美玲', group: '四季青街道', groupType: 'jiedao', gender: '女', party: '民革', position: '四季青街道文化站站长' },
    { id: 25, name: '冯志远', group: '凯旋街道', groupType: 'jiedao', gender: '男', party: '中共', position: '凯旋街道经济发展科科长' },
    { id: 26, name: '曹秀兰', group: '笕桥街道', groupType: 'jiedao', gender: '女', party: '农工党', position: '笕桥社区卫生服务中心副主任' },
    { id: 27, name: '邓国平', group: '彭埠街道', groupType: 'jiedao', gender: '男', party: '中共', position: '彭埠街道城市建设科科长' },
    { id: 28, name: '彭晓燕', group: '九堡街道', groupType: 'jiedao', gender: '女', party: '民进', position: '九堡街道社会事务科科长' },
    { id: 29, name: '潘志强', group: '丁兰街道', groupType: 'jiedao', gender: '男', party: '中共', position: '丁兰街道人大工委副主任' },
    { id: 30, name: '蒋美华', group: '提案委员会', groupType: 'zhuanweihui', gender: '女', party: '中共', position: '上城区政协提案委主任' },
  ]

  const columns = [
    { header: '序号', accessor: (row, i) => i + 1 },
    { header: '姓名', accessor: 'name' },
    { header: '界别/街道/专委会', accessor: 'group' },
    { header: '性别', accessor: 'gender' },
    { header: '党派', accessor: 'party' },
    { header: '工作单位及职务', accessor: 'position' },
  ]

  const data = useMemo(() => {
    let filtered = allMembers
    if (activeTab !== 'jibie') {
      filtered = filtered.filter(m => m.groupType === activeTab)
    }
    if (search.trim()) {
      const kw = search.trim().toLowerCase()
      filtered = filtered.filter(m =>
        m.name.includes(kw) || m.group.includes(kw) || m.party.includes(kw) || m.position.toLowerCase().includes(kw)
      )
    }
    return filtered
  }, [activeTab, search])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle badge="委员之家" title="上城区一届政协委员" subtitle={`2026年上城区一届政协委员名单 · 共 ${allMembers.length} 名委员`} />
      <TabSwitch tabs={tabs} active={activeTab} onChange={setActiveTab} />
      <div className="mb-4">
        <input
          type="text"
          placeholder="搜索委员姓名、界别、街道..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full sm:w-80 px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
      </div>
      <DataTable columns={columns} data={data} />
      {data.length > 0 && (
        <p className="text-xs text-gray-400 mt-3 text-right">共 {data.length} 条记录</p>
      )}
    </div>
  )
}
