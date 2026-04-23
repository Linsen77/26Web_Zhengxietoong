export default function DataTable({ columns, data, onRowClick }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {columns.map((col, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              onClick={() => onRowClick?.(row)}
              className={`border-b border-gray-100 last:border-0 ${
                onRowClick ? 'cursor-pointer hover:bg-primary/5' : ''
              }`}
            >
              {columns.map((col, j) => (
                <td key={j} className="px-4 py-3 text-gray-700">
                  {col.render
                    ? col.render(typeof col.accessor === 'function' ? col.accessor(row, i) : row[col.accessor], row, i)
                    : typeof col.accessor === 'function'
                      ? col.accessor(row, i)
                      : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-gray-400">
                暂无数据
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
