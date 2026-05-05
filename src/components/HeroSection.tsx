import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
          Trade crypto with confidence.
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Explore digital assets, track market movers, and manage your demo portfolio from one clean student-built platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <input
            type="email"
            placeholder="demo@example.com"
            className="input max-w-xs"
          />
          <Link to="/register" className="btn btn-primary w-full sm:w-auto">
            Create demo account
          </Link>
        </div>
        
        <div className="flex justify-center">
          <Link to="/crypto" className="btn btn-secondary w-full sm:w-auto">
            View markets
          </Link>
        </div>
        
        <p className="text-sm text-text-muted mt-4">
          Student demo only — no real trading or wallet activity.
        </p>

        {/* App preview mockup */}
        <div className="mt-16 relative">
          <div className="bg-bg-card rounded-2xl shadow-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-danger rounded-full"></div>
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <div className="w-3 h-3 bg-success rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-bg-secondary rounded w-1/2"></div>
              <div className="h-32 bg-accent/10 rounded-lg"></div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 bg-bg-secondary rounded"></div>
                <div className="h-16 bg-bg-secondary rounded"></div>
                <div className="h-16 bg-bg-secondary rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection