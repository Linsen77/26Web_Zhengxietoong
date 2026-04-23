export default function Timeline({ items }) {
  return (
    <div className="relative">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4 pb-8 last:pb-0">
          {/* Timeline line + dot */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
              {item.month || i + 1}
            </div>
            {i < items.length - 1 && (
              <div className="w-0.5 flex-1 bg-gray-200 mt-1" />
            )}
          </div>
          {/* Content */}
          <div className="flex-1 pb-2">
            {item.title && (
              <h4 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h4>
            )}
            {item.content && (
              <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
