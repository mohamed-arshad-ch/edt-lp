import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100/50 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Healthcare digital figure"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
              Common Questions
            </div>
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="text-left font-medium px-6 py-4 hover:bg-gray-50">
                  How can digital health solutions benefit my practice?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <p className="text-gray-600">
                    Digital health solutions can streamline operations, improve patient engagement, enhance care
                    delivery, and increase revenue through optimized workflows and better patient experiences.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="text-left font-medium px-6 py-4 hover:bg-gray-50">
                  How do you ensure compliance with healthcare regulations?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <p className="text-gray-600">
                    We build HIPAA compliance into every solution from the ground up, with regular security audits, data
                    encryption, and privacy-by-design principles.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="text-left font-medium px-6 py-4 hover:bg-gray-50">
                  How do you measure the success of digital initiatives?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <p className="text-gray-600">
                    We establish clear KPIs aligned with your business goals and provide regular reporting on metrics
                    like patient acquisition, engagement, satisfaction, and operational efficiency.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="text-left font-medium px-6 py-4 hover:bg-gray-50">
                  What should I look for in a healthcare digital partner?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <p className="text-gray-600">
                    Look for healthcare industry expertise, HIPAA compliance knowledge, a proven track record with
                    similar organizations, and a commitment to ongoing support and optimization.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

