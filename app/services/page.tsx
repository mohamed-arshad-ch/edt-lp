import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ServicesHero from "@/components/sections/services-hero"
import ServicesGrid from "@/components/sections/services-grid"
import ServicesCTA from "@/components/sections/services-cta"
import Newsletter from "@/components/sections/newsletter"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-1 pt-20">
        <ServicesHero />
        <ServicesGrid />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}

