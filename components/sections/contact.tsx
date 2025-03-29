import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We'd Love To Hear From You!</h2>
          <p className="text-gray-600">Reach out to discuss how we can help transform your healthcare organization</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" className="rounded-lg" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="rounded-lg" />
                </div>
                <div>
                  <Input type="text" placeholder="Subject" className="rounded-lg" />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D64B65] focus:border-transparent"
                    rows={4}
                  ></textarea>
                </div>
                <Button className="w-full bg-[#D64B65] hover:bg-[#c13a54] text-white rounded-lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-bold text-xl mb-6">INDIA</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-[#D64B65]" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Healthcare Street, Mumbai, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-[#D64B65]" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-xl mb-6">UAE</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-[#D64B65]" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">456 Medical Tower, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-[#D64B65]" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+971 50 123 4567</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-bold text-xl mb-6">EMAIL US</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-[#D64B65]" />
                  </div>
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p className="text-gray-600">info@expertdigihealth.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-[#D64B65]" />
                  </div>
                  <div>
                    <p className="font-medium">Support</p>
                    <p className="text-gray-600">support@expertdigihealth.com</p>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-xl mb-6">BUSINESS HOURS</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-gray-600">Closed</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

