import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AboutHero from "@/components/sections/about-hero"
import AboutTransforming from "@/components/sections/about-transforming"
import AboutWhyChooseUs from "@/components/sections/about-why-choose-us"
import AboutCTA from "@/components/sections/about-cta"
import AboutTeam from "@/components/sections/about-team"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-1 pt-20">
        <AboutHero />
        <AboutTransforming />
        <AboutWhyChooseUs />
        <AboutTeam />
        <AboutCTA />
      </main>

      <Footer />
    </div>
  )
}

