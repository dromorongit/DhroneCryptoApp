interface ErrorStateProps {
  title?: string
  message?: string
  onRetry?: () => void
}

const ErrorState = ({ title = 'Something went wrong', message, onRetry }: ErrorStateProps) => {
  return (
    <div className="text-center py-16 px-4">
      <div className="w-16 h-16 bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/5">
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-text mb-3">
        {title}
      </h3>
      {message && (
        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto leading-relaxed">
          {message}
        </p>
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
