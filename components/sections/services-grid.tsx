"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Palette,
  Code,
  Search,
  Share2,
  User,
  CreditCard,
  FileText,
  Shield,
  Mail,
  Users,
  BarChart,
  Phone,
} from "lucide-react"
import { getAllServices } from "@/lib/services"

export default function ServicesGrid() {
  const [filter, setFilter] = useState("all")
  const services = getAllServices()

  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6 text-[#D64B65]" }

    switch (iconName) {
      case "palette":
        return <Palette {...iconProps} />
      case "code":
        return <Code {...iconProps} />
      case "search":
        return <Search {...iconProps} />
      case "share2":
        return <Share2 {...iconProps} />
      case "user":
        return <User {...iconProps} />
      case "creditCard":
        return <CreditCard {...iconProps} />
      case "fileText":
        return <FileText {...iconProps} />
      case "shield":
        return <Shield {...iconProps} />
      case "mail":
        return <Mail {...iconProps} />
      case "users":
        return <Users {...iconProps} />
      case "barChart":
        return <BarChart {...iconProps} />
      case "phone":
        return <Phone {...iconProps} />
      default:
        return <ArrowRight {...iconProps} />
    }
  }

  const filteredServices = filter === "all" ? services : services.filter((service) => service.category === filter)

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
            Our Expertise
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Healthcare Digital Solutions</h2>

          <p className="text-gray-600 mb-8">
            We offer a wide range of digital services tailored specifically for healthcare providers
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              className={filter === "all" ? "bg-[#D64B65] hover:bg-[#c13a54]" : ""}
              onClick={() => setFilter("all")}
            >
              All Services
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  {getIcon(service.icon)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
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
      </div>
    </section>
  )
}

