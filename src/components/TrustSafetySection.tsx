const TrustSafetySection = () => {
  const features = [
    {
      title: 'JWT Authentication',
      description: 'Secure token-based authentication for user sessions',
      icon: 'Shield'
    },
    {
      title: 'MongoDB Backend',
      description: 'Robust database for storing user and crypto data',
      icon: 'Database'
    },
    {
      title: 'Protected Profile',
      description: 'User profile routes secured with authentication middleware',
      icon: 'Lock'
    },
    {
      title: 'REST API Integration',
      description: 'Clean API endpoints for data management',
      icon: 'Server'
    },
  ]

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Shield':
        return <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      case 'Database':
        return <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      case 'Lock':
        return <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      case 'Server':
        return <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      default:
        return <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-600">Built for Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-4 tracking-tight">
            Secure & Reliable Architecture
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            DhroneCrypto App is a student demo project created for academic assessment, featuring enterprise-grade security patterns and clean API design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card card-elevated p-6 group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bg-secondary to-bg-secondary flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {getIcon(feature.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text text-lg mb-2 group-hover:text-cyan-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-2xl border border-border/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-text">Important Notice</p>
              <p className="text-sm text-text-secondary">
                This is a demo application for educational purposes. All data is simulated and no real cryptocurrency transactions occur. Do not enter real personal or financial information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSafetySection
