import { Link } from 'react-router-dom'

const AdvancedToolsSection = () => {
  return (
    <section className="py-20 px-4 bg-bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful tools for smarter crypto decisions.
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              Track prices, compare market movements, and review demo asset performance through a clean, responsive dashboard experience.
            </p>
            <Link to="/crypto" className="btn btn-primary">
              Start exploring
            </Link>
          </div>
          
          <div className="card p-6">
            <div className="space-y-4">
              <div className="h-4 bg-bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-bg-secondary rounded w-1/2"></div>
              <div className="h-40 bg-accent/5 rounded-lg"></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-12 bg-bg-secondary rounded"></div>
                <div className="h-12 bg-bg-secondary rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvancedToolsSection