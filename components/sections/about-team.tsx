import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function AboutTeam() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in healthcare technology, Dr. Johnson leads our vision to transform digital healthcare.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael brings expertise in AI and machine learning to develop innovative solutions for healthcare providers.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      name: "Priya Patel",
      role: "Healthcare Strategy Director",
      bio: "Priya's background in hospital administration informs our approach to creating practical digital solutions.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      name: "David Rodriguez",
      role: "Head of Client Success",
      bio: "David ensures our clients receive exceptional support and achieve measurable results from our solutions.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
            Our Leadership
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">MEET OUR TEAM</h2>

          <p className="text-gray-600">Dedicated professionals with expertise in healthcare and digital innovation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#D64B65] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="p-2 bg-gray-200 rounded-full hover:bg-[#D64B65] hover:text-white transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-200 rounded-full hover:bg-[#D64B65] hover:text-white transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-200 rounded-full hover:bg-[#D64B65] hover:text-white transition-colors"
                  >
                    <Mail className="h-4 w-4" />
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

