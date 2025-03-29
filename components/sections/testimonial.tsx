import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Testimonial() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#D64B65] to-[#e06377] text-white relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-full h-full opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
          Success Stories
        </div>
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          "WE'VE WORKED FOR HEALTHCARE PRACTICES JUST LIKE YOURS THAT CREATE THEIR SUCCESS STORY. YOU'RE NEXT."
        </blockquote>
        <p className="text-xl">- Team EDT</p>

        <div className="flex justify-center mt-12">
          <Button className="bg-white text-[#D64B65] hover:bg-gray-100 rounded-full px-6">
            View Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

