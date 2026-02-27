import Hero from '@/components/Hero'
import ProductOverview from '@/components/ProductOverview'
import HowItWorks from '@/components/HowItWorks'
import UseCases from '@/components/UseCases'
import Features from '@/components/Features'
import FeatureComparison from '@/components/FeatureComparison'
import SecurityGovernance from '@/components/SecurityGovernance'
import InstitutionalScale from '@/components/InstitutionalScale'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductOverview />
      <HowItWorks />
      <UseCases />
      <Features />
      <FeatureComparison />
      <SecurityGovernance />
      <InstitutionalScale />
    </>
  )
}
