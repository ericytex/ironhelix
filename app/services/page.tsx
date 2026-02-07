import Header from '@/components/Header'
import ServicesHero from '@/components/ServicesHero'
import ServicePillars from '@/components/ServicePillars'
import BespokeDeployment from '@/components/BespokeDeployment'
import ComplianceStatement from '@/components/ComplianceStatement'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header currentPage="services" />
      <ServicesHero />
      <ServicePillars />
      <BespokeDeployment />
      <ComplianceStatement />
      <Footer />
    </main>
  )
}

