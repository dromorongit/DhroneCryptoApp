interface ErrorStateProps {
  title?: string
  message?: string
  onRetry?: () => void
}

const ErrorState = ({ title = 'Something went wrong', message, onRetry }: ErrorStateProps) => {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-text mb-2">{title}</h3>
      {message && (
        <p className="text-text-secondary mb-4">{message}</p>
      )}
      {onRetry && (
        <button onClick={onRetry} className="btn btn-primary">
          Try again
        </button>
      )}
    </div>
  )
}

export default ErrorState