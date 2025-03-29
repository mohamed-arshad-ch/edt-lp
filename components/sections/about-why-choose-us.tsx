import { Target, Briefcase, HeadsetIcon, Brain, ShieldCheck, BarChart3 } from "lucide-react"

export default function AboutWhyChooseUs() {
  const reasons = [
    {
      icon: <Target className="h-8 w-8 text-[#D64B65]" />,
      title: "STRATEGIES BUILT FOR YOU",
      description:
        "Your goals, our focus. We craft personalized marketing plans tailored to your unique challenges and objectives, ensuring every step aligns with your vision.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[#D64B65]" />,
      title: "INDUSTRY-SPECIFIC EXPERTISE",
      description:
        "We understand healthcare inside and out. Our team brings deep healthcare industry knowledge to create marketing strategies that deliver real results.",
    },
    {
      icon: <HeadsetIcon className="h-8 w-8 text-[#D64B65]" />,
      title: "DEDICATED SUPPORT",
      description:
        "A team that's always by your side. Consistent communication with experts working exclusively on their account, providing personalized attention and support.",
    },
    {
      icon: <Brain className="h-8 w-8 text-[#D64B65]" />,
      title: "AI-POWERED SOLUTIONS",
      description:
        "Reach more patients, smarter. Leveraging advanced AI tools to expand your marketing and connect with the right audience at the right time.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#D64B65]" />,
      title: "TRANSPARENCY & COMPLIANCE",
      description:
        "Trust and accountability at every step. We prioritize ethical practices, ensuring your marketing is effective and fully compliant with healthcare regulations.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#D64B65]" />,
      title: "PROVEN RESULTS",
      description:
        "Measured by the outcomes that matter. With a track record of success, we've helped countless healthcare organizations achieve measurable growth and success.",
    },
  ]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>

              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

