const DemoPasswordNotice = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16c-.77.833.192 3 1.732 3z" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-amber-800 text-sm mb-1">Demo App Notice</p>
        <p className="text-amber-700 text-sm">
          Demo app – do not use your real password. This is a student project for educational purposes only.
        </p>
      </div>
    </div>
  )
}

export default DemoPasswordNotice
