import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Award, Brain, BarChart3, HeadsetIcon } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
            Our Advantages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHY CHOOSE US</h2>
          <p className="text-gray-600">What sets us apart in healthcare digital transformation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-[#D64B65]" />
              </div>
              <h3 className="font-bold text-xl mb-4">INDUSTRY-SPECIFIC EXPERTISE</h3>
              <p className="text-gray-600 mb-6">
                Our team has deep knowledge of the healthcare industry and its unique digital requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Healthcare compliance knowledge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Patient journey optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Provider workflow understanding</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-[#D64B65]" />
              </div>
              <h3 className="font-bold text-xl mb-4">AI-POWERED SOLUTIONS</h3>
              <p className="text-gray-600 mb-6">
                We leverage artificial intelligence to enhance healthcare digital experiences and operational
                efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Intelligent automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Natural language processing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-[#D64B65]" />
              </div>
              <h3 className="font-bold text-xl mb-4">STRATEGIES BUILT FOR YOU</h3>
              <p className="text-gray-600 mb-6">
                We develop customized digital strategies aligned with your healthcare organization's specific goals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tailored implementation plans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Scalable growth strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>ROI-focused approach</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <HeadsetIcon className="h-8 w-8 text-[#D64B65]" />
              </div>
              <h3 className="font-bold text-xl mb-4">DEDICATED SUPPORT</h3>
              <p className="text-gray-600 mb-6">
                Our team provides ongoing support and optimization to ensure your digital solutions continue to deliver
                value.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>24/7 technical assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular performance reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Continuous optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

