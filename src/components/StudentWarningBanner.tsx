const StudentWarningBanner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center py-2.5 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgMEw0MCA0MEw0MCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPgo=')]" />
      <div className="container flex items-center justify-center gap-2 relative z-10">
        <svg className="w-4 h-4 flex-shrink-0 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="text-sm font-medium tracking-wide">
          Student Project Demo — DhroneCrypto App is built for academic purposes only and is not affiliated with Coinbase. Do not enter real personal, financial, wallet, or payment information.
        </p>
      </div>
    </div>
  )
}

export default StudentWarningBanner
