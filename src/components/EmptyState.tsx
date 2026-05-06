interface EmptyStateProps {
  title: string
  description?: string
  action?: React.ReactNode
}

const EmptyState = ({ title, description, action }: EmptyStateProps) => {
  return (
    <div className="text-center py-16 px-4">
      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/5">
        <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0h-2M4 13h2m12 0v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7" />
        </svg>
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-text mb-3">
        {title}
      </h3>
      {description && (
        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {action && (
        <div className="inline-block">
          {action}
        </div>
      )}
    </div>
  )
}

export default EmptyState
