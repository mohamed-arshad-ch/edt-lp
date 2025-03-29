import { Button } from "@/components/ui/button"

export default function AboutCTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="bg-gradient-to-r from-[#D64B65] to-[#e06377] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">INTERESTED TO WORK AND COOPERATE WITH US?</h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join forces with Expert Digi Health to transform your healthcare organization's digital presence and patient
            engagement.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#D64B65] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-bold">
              HIRE US!
            </Button>

            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-bold"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

