import HeroSection from '../components/HeroSection'
import MarketPreviewCard from '../components/MarketPreviewCard'
import TopGainersPreview from '../components/TopGainersPreview'
import NewListingsPreview from '../components/NewListingsPreview'
import AdvancedToolsSection from '../components/AdvancedToolsSection'
import TrustSafetySection from '../components/TrustSafetySection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <MarketPreviewCard />
      <TopGainersPreview />
      <NewListingsPreview />
      <AdvancedToolsSection />
      <TrustSafetySection />
    </>
  )
}

export default Home