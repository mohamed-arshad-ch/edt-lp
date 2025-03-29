import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function Strategy() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Healthcare Solutions</h2>
          <p className="text-gray-600">
            We combine healthcare expertise with digital innovation to deliver results-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden border-none shadow-xl">
            <div className="relative h-[250px]">
              <Image
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Healthcare data analysis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl mb-2">DATA-DRIVEN STRATEGIES</h3>
                <p className="text-white/90 text-sm">
                  We leverage healthcare analytics to develop targeted digital strategies that deliver measurable
                  results.
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Predictive analytics for patient trends</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Performance metrics and KPIs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Data-informed decision making</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-xl">
            <div className="relative h-[250px]">
              <Image
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Doctor using tablet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl mb-2">FOCUSED ON YOUR GROWTH</h3>
                <p className="text-white/90 text-sm">
                  Our solutions are designed to help healthcare providers expand their patient base and improve
                  retention.
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Patient acquisition strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Retention and engagement tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Scalable growth solutions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-xl">
            <div className="relative h-[250px]">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                alt="VR in healthcare"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl mb-2">CONTINUOUS IMPROVEMENT</h3>
                <p className="text-white/90 text-sm">
                  We constantly refine our solutions based on performance data and emerging healthcare technologies.
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular performance reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Emerging technology integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Iterative enhancement process</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

