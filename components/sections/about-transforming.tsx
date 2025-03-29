import Image from "next/image"

export default function AboutTransforming() {
  const stats = [
    { value: "0%", label: "ORGANIC TRAFFIC SURGE IN 4 MONTHS" },
    { value: "9%", label: "HIGHER CONVERSION RATE FROM DIGITAL AD CAMPAIGNS" },
    { value: "27%", label: "BOOST PATIENT RETENTION WITH ENGAGEMENT STRATEGIES" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
              Our Approach
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              TRANSFORMING HEALTHCARE WITH SMART DIGITAL SOLUTIONS
            </h2>

            <div className="space-y-6 text-gray-600">
              <p>
                At Expert Digihealth, we believe healthcare is about people, not just systems. That's why our innovative
                solutions blend AI-driven analytics with a deeply human approach to digital solutions.
              </p>

              <p>
                We understand the unique challenges healthcare professionals face in today's fast-paced digital
                landscape. From creating meaningful online connections to driving measurable growth, we help healthcare
                practices stand out. Our tailored strategies go beyond boosting ROI—they build trust, attract the right
                patients, and ensure your voice is heard in a crowded marketplace.
              </p>

              <p>
                With Expert Digihealth, you gain more than a service—you gain a dedicated partner invested in your
                success. Together, we craft authentic digital presences that reflect the heart of every practice and the
                lives they impact every day.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Healthcare digital transformation"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#D64B65] mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

