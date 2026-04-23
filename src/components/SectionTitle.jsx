export default function SectionTitle({ badge, badgeColor = 'bg-primary', title, subtitle }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {badge && (
        <span className={`${badgeColor} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
          {badge}
        </span>
      )}
      <div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  )
}
