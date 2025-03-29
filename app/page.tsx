import WaveDivider from "@/components/wave-divider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import DigitalSolutions from "@/components/sections/digital-solutions"
import Services from "@/components/sections/services"
import Strategy from "@/components/sections/strategy"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Testimonial from "@/components/sections/testimonial"
import FAQ from "@/components/sections/faq"
import Newsletter from "@/components/sections/newsletter"
import Contact from "@/components/sections/contact"
import Map from "@/components/sections/map"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-1 pt-20">
        <Hero />
        <DigitalSolutions />
        <WaveDivider />
        <Services />
        <WaveDivider invert={true} />
        <Strategy />
        <WaveDivider />
        <WhyChooseUs />
        <WaveDivider invert={true} />
        <Testimonial />
        <FAQ />
        <WaveDivider />
        <Newsletter />
        <Contact />
        <Map />
      </main>

      <Footer />
    </div>
  )
}

