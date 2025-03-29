import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesCTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="bg-gradient-to-r from-[#D64B65] to-[#e06377] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare Organization?</h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Expert Digi Health to elevate your digital presence and improve patient engagement.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#D64B65] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-bold">
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

