import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Target, Eye } from "lucide-react"

export default function DigitalSolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital Solutions Custom-Made For Healthcare Providers
          </h2>
          <p className="text-gray-600">
            We help healthcare providers leverage digital technology to improve patient care, streamline operations, and
            drive growth through innovative solutions tailored to their specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Healthcare professionals in a meeting"
              width={600}
              height={450}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-white to-pink-50 border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-[#D64B65]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">OUR MISSION</h3>
                  <p className="text-gray-600">
                    To empower healthcare providers with innovative digital solutions that enhance patient care and
                    operational efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-pink-50 border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-[#D64B65]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">OUR VISION</h3>
                  <p className="text-gray-600">
                    To be the leading digital transformation partner for healthcare organizations, driving innovation
                    and excellence in patient care.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65]" />
                </div>
                <div>
                  <h4 className="font-medium">HIPAA Compliant Solutions</h4>
                  <p className="text-sm text-gray-600">Secure and compliant with healthcare regulations</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65]" />
                </div>
                <div>
                  <h4 className="font-medium">Patient-Centered Design</h4>
                  <p className="text-sm text-gray-600">Intuitive interfaces that enhance the patient experience</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-[#D64B65]" />
                </div>
                <div>
                  <h4 className="font-medium">EHR Integration</h4>
                  <p className="text-sm text-gray-600">Seamless connection with existing healthcare systems</p>
                </div>
              </div>
            </div>

            <Button className="rounded-full bg-[#D64B65] hover:bg-[#c13a54] text-white">
              Learn more about our approach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

