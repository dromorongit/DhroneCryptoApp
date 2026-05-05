interface EmptyStateProps {
  title: string
  description?: string
  action?: React.ReactNode
}

const EmptyState = ({ title, description, action }: EmptyStateProps) => {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0h-2M4 13h2m12 0v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-text mb-2">{title}</h3>
      {description && (
        <p className="text-text-secondary mb-4">{description}</p>
      )}
      {action}
    </div>
  )
}

export default EmptyState