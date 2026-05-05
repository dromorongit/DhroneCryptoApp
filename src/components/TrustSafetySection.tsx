const TrustSafetySection = () => {
  const features = [
    {
      title: 'JWT Authentication',
      description: 'Secure token-based authentication for user sessions',
    },
    {
      title: 'MongoDB Backend',
      description: 'Robust database for storing user and crypto data',
    },
    {
      title: 'Protected Profile',
      description: 'User profile routes secured with authentication middleware',
    },
    {
      title: 'REST API Integration',
      description: 'Clean API endpoints for data management',
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Built for Learning
        </h2>
        <p className="text-center text-text-secondary mb-12">
          DhroneCrypto App is a student demo project created for academic assessment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card p-6">
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSafetySection