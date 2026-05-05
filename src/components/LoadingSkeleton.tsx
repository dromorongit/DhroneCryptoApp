const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-6 bg-bg-secondary rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-bg-secondary rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-bg-secondary rounded w-2/3"></div>
    </div>
  )
}

export default LoadingSkeleton