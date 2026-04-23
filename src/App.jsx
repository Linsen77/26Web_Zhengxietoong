import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import WeiyuanPage from './pages/WeiyuanPage'
import JiedaoPage from './pages/JiedaoPage'
import JiedaoDetailPage from './pages/JiedaoDetailPage'
import JibiePage from './pages/JibiePage'
import JibieDetailPage from './pages/JibieDetailPage'
import FenzhongxinPage from './pages/FenzhongxinPage'
import FenzhongxinDetailPage from './pages/FenzhongxinDetailPage'
import LvzhiPage from './pages/LvzhiPage'
import LvzhiDetailPage from './pages/LvzhiDetailPage'
import XingjiPage from './pages/XingjiPage'
import JihuaPage from './pages/JihuaPage'

const basename = import.meta.env.BASE_URL

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weiyuan" element={<WeiyuanPage />} />
          <Route path="/jiedao" element={<JiedaoPage />} />
          <Route path="/jiedao/:id" element={<JiedaoDetailPage />} />
          <Route path="/jibie" element={<JibiePage />} />
          <Route path="/jibie/:id" element={<JibieDetailPage />} />
          <Route path="/fenzhongxin" element={<FenzhongxinPage />} />
          <Route path="/fenzhongxin/:center" element={<FenzhongxinDetailPage />} />
          <Route path="/lvzhi" element={<LvzhiPage />} />
          <Route path="/lvzhi/:id" element={<LvzhiDetailPage />} />
          <Route path="/xingji" element={<XingjiPage />} />
          <Route path="/jihua" element={<JihuaPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
