import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ResponsibleTechnology from '@/components/ResponsibleTechnology'
import InstitutionalScale from '@/components/InstitutionalScale'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header currentPage="home" />
      <Hero />
      <Features />
      <ResponsibleTechnology />
      <InstitutionalScale />
      <Footer />
    </main>
  )
}

