import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ServiceDetail from "@/components/sections/service-detail"
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const services = getAllServiceSlugs()
  return services.map((slug) => ({ slug }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-1 pt-20">
        <ServiceDetail service={service} />
      </main>

      <Footer />
    </div>
  )
}

