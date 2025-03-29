import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactOffices() {
  const offices = [
    {
      id: 1,
      country: "India",
      address: "123 Healthcare Street, Mumbai, India",
      phone: "+91 98765 43210",
      email: "india@expertdigihealth.com",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      country: "UAE",
      address: "456 Medical Tower, Dubai, UAE",
      phone: "+971 50 123 4567",
      email: "uae@expertdigihealth.com",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section id="offices" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
            Our Locations
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Offices</h2>

          <p className="text-gray-600">
            We have offices in multiple locations to better serve our global healthcare clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office) => (
            <div
              key={office.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={office.image || "/placeholder.svg"}
                  alt={`${office.country} Office`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-2xl mb-2">{office.country}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-2 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-[#D64B65]" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-2 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-[#D64B65]" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-2 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-[#D64B65]" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#D64B65] font-medium hover:underline"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

