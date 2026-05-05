import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <span className="font-bold text-xl">DhroneCrypto</span>
            </div>
            <p className="text-text-secondary text-sm">
              A student-built crypto dashboard for academic demonstration purposes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text-secondary hover:text-accent text-sm">Home</Link></li>
              <li><Link to="/crypto" className="text-text-secondary hover:text-accent text-sm">Markets</Link></li>
              <li><Link to="/crypto/gainers" className="text-text-secondary hover:text-accent text-sm">Top Gainers</Link></li>
              <li><Link to="/crypto/new" className="text-text-secondary hover:text-accent text-sm">New Listings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-text-secondary hover:text-accent text-sm">Login</Link></li>
              <li><Link to="/register" className="text-text-secondary hover:text-accent text-sm">Sign up</Link></li>
              <li><Link to="/profile" className="text-text-secondary hover:text-accent text-sm">Profile</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-accent text-sm">Privacy</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent text-sm">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-text-secondary text-sm">
            DhroneCrypto App is a student demo project created for academic assessment. 
            It is not a real cryptocurrency exchange and is not affiliated with Coinbase or any financial institution. 
            All market data shown is for demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer