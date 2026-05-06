const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      {/* Header skeleton */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl"></div>
        <div className="space-y-3 flex-1">
          <div className="h-6 bg-bg-secondary rounded w-3/4"></div>
          <div className="h-4 bg-bg-secondary rounded w-1/2"></div>
        </div>
      </div>

      {/* Stats cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-bg-secondary rounded-xl"></div>
              <div className="h-4 bg-bg-secondary rounded w-20"></div>
            </div>
            <div className="h-8 bg-bg-secondary rounded w-24 mb-2"></div>
            <div className="h-4 bg-bg-secondary rounded w-16"></div>
          </div>
        ))}
      </div>

      {/* Chart area skeleton */}
      <div className="card p-6">
        <div className="h-6 bg-bg-secondary rounded w-32 mb-4"></div>
        <div className="h-48 bg-bg-secondary rounded"></div>
      </div>

      {/* Recent activity skeleton */}
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-bg-secondary rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-bg-secondary rounded w-3/4"></div>
              <div className="h-3 bg-bg-secondary rounded w-1/2"></div>
            </div>
            <div className="h-4 bg-bg-secondary rounded w-16"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSkeleton
