import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: '首页' },
  { path: '/weiyuan', label: '委员之家' },
  { path: '/jiedao', label: '街道委员小组' },
  { path: '/jibie', label: '界别基本情况' },
  { path: '/fenzhongxin', label: '协商民主实践中心' },
  { path: '/lvzhi', label: '委员履职平台' },
  { path: '/xingji', label: '星级委员工作室' },
  { path: '/jihua', label: '2026年履职计划' },
]

export default function Layout({ children }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary-dark shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-base whitespace-nowrap">
              <span>🏛</span>
              <span className="hidden sm:inline">政协委员通</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <nav className="lg:hidden pb-3 flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 text-sm rounded-md ${
                    location.pathname === item.path
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-xs">
        <p>© 2026 中国人民政治协商会议杭州市委员会 · 上城区政协</p>
      </footer>
    </div>
  )
}
