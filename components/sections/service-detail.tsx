import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
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
import type { Service } from "@/lib/services"
import Newsletter from "./newsletter"

export default function ServiceDetail({ service }: { service: Service }) {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-8 w-8 text-[#D64B65]" }

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4 text-white">
              <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
              Healthcare Digital Services
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{service.title}</h1>

            <p className="text-xl text-white/90 max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
                Service Overview
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>

              <div className="space-y-6 text-gray-600">
                <p>{service.fullDescription}</p>
              </div>

              <div className="mt-8">
                <Button className="bg-[#D64B65] hover:bg-[#c13a54] text-white rounded-full px-6 py-3">
                  Request This Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg">{getIcon(service.icon)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
              Key Benefits
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">How {service.title} Helps Your Practice</h2>

            <p className="text-gray-600">Discover the advantages of our specialized healthcare digital solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-start"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-[#D64B65]" />
                  </div>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
              Service Features
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>

            <p className="text-gray-600">Comprehensive components of our {service.title} service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-[#D64B65]">{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>

                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Newsletter />
    </>
  )
}

