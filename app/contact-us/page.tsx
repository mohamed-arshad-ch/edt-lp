
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ContactHero from "@/components/sections/contact-hero"
import ContactForm from "@/components/sections/contact-form"
import ContactOffices from "@/components/sections/contact-offices"
import ContactTeam from "@/components/sections/contact-team"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-1 pt-20">
        <ContactHero />
        <ContactForm />
        <ContactOffices />
        <ContactTeam />
      </main>

      <Footer />
    </div>
  )
}

