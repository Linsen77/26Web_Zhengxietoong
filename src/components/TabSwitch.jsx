export default function TabSwitch({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
            active === tab.key
              ? 'bg-primary text-white shadow-sm'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
