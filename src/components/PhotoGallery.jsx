export default function PhotoGallery({ photos, basePath = '' }) {
  if (!photos || photos.length === 0) return null

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {photos.map((photo, i) => {
        const src = typeof photo === 'string' ? photo : `${basePath}/${photo.filename}`
        return (
          <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={src}
              alt={`照片 ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-xs">暂无图片</div>'
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
