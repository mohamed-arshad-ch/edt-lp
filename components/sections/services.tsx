import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getAllServices } from "@/lib/services"

export default function Services() {
  // Get the first 6 services from the services data
  const services = getAllServices().slice(0, 6)

  // Define color classes for different service categories
  const colorClasses = [
    "from-blue-500/20 to-purple-500/20",
    "from-emerald-500/20 to-teal-500/20",
    "from-orange-500/20 to-amber-500/20",
    "from-cyan-500/20 to-blue-500/20",
    "from-violet-500/20 to-purple-500/20",
    "from-pink-500/20 to-rose-500/20",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
          <p className="text-gray-600">
            Comprehensive digital solutions designed specifically for healthcare providers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              <div className="relative h-56 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colorClasses[index % colorClasses.length]} opacity-30 z-10`}
                ></div>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 z-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                </div>
              </div>

              <div className="p-6 relative z-20">
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>

                <div className="flex justify-between items-center">
                  <Link href={`/services/${service.slug}`}>
                    <Button className="bg-[#D64B65] hover:bg-[#c13a54] text-white rounded-full px-5 py-2 text-sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <span className="text-sm text-gray-400 group-hover:text-[#D64B65] transition-colors">
                    Healthcare Solutions
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services">
            <Button className="bg-[#D64B65] hover:bg-[#c13a54] text-white rounded-full px-8 py-6 text-lg">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

