"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin } from "lucide-react"

export default function ContactTeam() {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null)

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      email: "sarah@expertdigihealth.com",
      phone: "+91 98765 43210",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      email: "michael@expertdigihealth.com",
      phone: "+91 98765 43211",
      linkedin: "https://linkedin.com/in/michaelchen",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Healthcare Strategy Director",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      email: "priya@expertdigihealth.com",
      phone: "+971 50 123 4567",
      linkedin: "https://linkedin.com/in/priyapatel",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Head of Client Success",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      email: "david@expertdigihealth.com",
      phone: "+971 50 123 4568",
      linkedin: "https://linkedin.com/in/davidrodriguez",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
            Our Team
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>

          <p className="text-gray-600">Connect directly with our team of healthcare digital experts</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div
                className="relative h-64 cursor-pointer"
                onClick={() => setActiveTeamMember(activeTeamMember === member.id ? null : member.id)}
              >
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${activeTeamMember === member.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                ></div>

                {activeTeamMember === member.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  >
                    <div className="space-y-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-2 hover:text-[#D64B65] transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{member.email}</span>
                      </a>

                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center space-x-2 hover:text-[#D64B65] transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{member.phone}</span>
                      </a>

                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:text-[#D64B65] transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#D64B65] font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-500">Click on photo to view contact details</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

