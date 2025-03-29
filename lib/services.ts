export type Service = {
  id: number
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  image: string
  icon: string
  benefits: string[]
  features: {
    title: string
    description: string
  }[]
}

export const services: Service[] = [
  {
    id: 1,
    title: "Brand Building and Establishment",
    slug: "brand-building",
    shortDescription:
      "We create compelling brand identities that resonate with healthcare audiences and establish trust.",
    fullDescription:
      "Our brand building services help healthcare organizations establish a strong, recognizable presence in the market. We develop comprehensive brand strategies that communicate your unique value proposition and connect with your target audience on a deeper level. From logo design and visual identity to brand messaging and positioning, we create a cohesive brand experience that builds trust and loyalty.",
    image:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "palette",
    benefits: [
      "Establish a distinctive presence in the healthcare market",
      "Build trust and credibility with patients and partners",
      "Create consistent brand experiences across all touchpoints",
      "Develop messaging that resonates with your target audience",
    ],
    features: [
      {
        title: "Brand Strategy Development",
        description: "Comprehensive analysis and strategic planning to position your healthcare brand effectively.",
      },
      {
        title: "Visual Identity Creation",
        description: "Professional design of logos, color schemes, and visual elements that reflect your brand values.",
      },
      {
        title: "Brand Messaging Framework",
        description:
          "Development of key messages and communication guidelines that convey your unique value proposition.",
      },
      {
        title: "Brand Guidelines Documentation",
        description: "Detailed documentation to ensure consistent application of your brand across all channels.",
      },
    ],
  },
  {
    id: 2,
    title: "Website Development & Optimization",
    slug: "website-development",
    shortDescription: "We build responsive, patient-centered websites optimized for conversion and engagement.",
    fullDescription:
      "Our website development team creates custom healthcare websites designed to engage patients and drive conversions. We focus on creating intuitive user experiences with responsive designs that work seamlessly across all devices. Our development process incorporates healthcare best practices, accessibility standards, and performance optimization to ensure your site delivers results.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    icon: "code",
    benefits: [
      "Improve patient engagement with intuitive user experiences",
      "Increase conversion rates with strategic design and calls-to-action",
      "Enhance credibility with professional, modern web presence",
      "Ensure accessibility for all users, including those with disabilities",
    ],
    features: [
      {
        title: "Custom Healthcare Website Design",
        description: "Tailored designs that reflect your brand and meet the specific needs of healthcare providers.",
      },
      {
        title: "Responsive Development",
        description: "Websites that provide optimal viewing experiences across all devices and screen sizes.",
      },
      {
        title: "Performance Optimization",
        description: "Technical improvements to ensure fast loading times and smooth user experiences.",
      },
      {
        title: "HIPAA-Compliant Forms & Features",
        description: "Secure patient intake forms and appointment scheduling that meet healthcare regulations.",
      },
    ],
  },
  {
    id: 3,
    title: "Search Engine Optimization (SEO)",
    slug: "seo",
    shortDescription: "We improve your visibility in search results to help patients find your healthcare services.",
    fullDescription:
      "Our healthcare SEO services are designed to increase your visibility in search engine results and drive qualified traffic to your website. We implement proven strategies tailored to the healthcare industry, focusing on local SEO, medical keyword optimization, and content development that addresses patient search intent. Our approach combines technical expertise with healthcare knowledge to deliver sustainable results.",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    icon: "search",
    benefits: [
      "Increase organic traffic from patients searching for your services",
      "Improve local visibility for nearby patients seeking care",
      "Build authority in your medical specialty through content",
      "Reduce dependency on paid advertising for patient acquisition",
    ],
    features: [
      {
        title: "Healthcare Keyword Research",
        description: "Identification of relevant search terms used by patients looking for your services.",
      },
      {
        title: "On-Page SEO Optimization",
        description: "Strategic improvements to website content and structure to improve search rankings.",
      },
      {
        title: "Local SEO for Healthcare",
        description: "Optimization for local search results to attract patients in your service area.",
      },
      {
        title: "Medical Content Strategy",
        description: "Development of authoritative healthcare content that addresses patient questions and concerns.",
      },
    ],
  },
  {
    id: 4,
    title: "AI-Powered Social Media Marketing",
    slug: "social-media-marketing",
    shortDescription:
      "We leverage AI to create engaging social media strategies that connect with healthcare audiences.",
    fullDescription:
      "Our AI-powered social media marketing services help healthcare organizations build meaningful connections with patients and communities. We use advanced AI tools to develop content strategies, optimize posting schedules, and analyze performance data. Our approach combines technology with human expertise to create authentic social media presences that educate, engage, and convert followers into patients.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    icon: "share2",
    benefits: [
      "Build community around your healthcare brand",
      "Educate patients about health conditions and treatments",
      "Showcase your expertise and unique approach to care",
      "Drive appointment bookings through strategic social campaigns",
    ],
    features: [
      {
        title: "AI-Driven Content Creation",
        description:
          "Intelligent content development that resonates with healthcare audiences while maintaining compliance.",
      },
      {
        title: "Strategic Platform Selection",
        description: "Focused approach on the social platforms where your target patients are most active.",
      },
      {
        title: "Community Management",
        description: "Proactive engagement with followers to build relationships and address questions.",
      },
      {
        title: "Performance Analytics",
        description: "Comprehensive reporting on social media metrics and conversion tracking.",
      },
    ],
  },
  {
    id: 5,
    title: "Personal Brand Building",
    slug: "personal-brand-building",
    shortDescription: "We help healthcare professionals establish personal brands that showcase their expertise.",
    fullDescription:
      "Our personal brand building services help healthcare professionals establish themselves as thought leaders and trusted experts. We develop comprehensive strategies to showcase your unique expertise, values, and approach to care. From professional photography and bio development to content creation and speaking opportunities, we help you build a personal brand that attracts patients and opens doors to new opportunities.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "user",
    benefits: [
      "Establish yourself as an authority in your medical specialty",
      "Attract patients who connect with your approach to care",
      "Create opportunities for media appearances and speaking engagements",
      "Differentiate yourself from other healthcare providers",
    ],
    features: [
      {
        title: "Personal Brand Strategy",
        description: "Development of a unique positioning strategy that highlights your expertise and values.",
      },
      {
        title: "Professional Image Development",
        description: "Coordination of professional photography and visual elements that represent your brand.",
      },
      {
        title: "Thought Leadership Content",
        description: "Creation of articles, videos, and presentations that showcase your knowledge.",
      },
      {
        title: "Online Presence Management",
        description: "Optimization of profiles across professional networks and healthcare platforms.",
      },
    ],
  },
  {
    id: 6,
    title: "Paid Ads (PPC)",
    slug: "paid-ads",
    shortDescription: "We create targeted advertising campaigns that reach potential patients at the right moment.",
    fullDescription:
      "Our paid advertising services help healthcare organizations reach potential patients at the moment they're searching for care. We develop strategic campaigns across search engines, social media, and display networks, with a focus on healthcare compliance and ROI. Our approach includes careful audience targeting, compelling ad creation, and continuous optimization to ensure your advertising budget delivers maximum results.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    icon: "creditCard",
    benefits: [
      "Generate immediate visibility for your healthcare services",
      "Target specific patient demographics and conditions",
      "Control your budget with flexible spending options",
      "Measure direct ROI from advertising to patient conversion",
    ],
    features: [
      {
        title: "Healthcare PPC Campaign Management",
        description: "Strategic development and management of paid search campaigns on Google and Bing.",
      },
      {
        title: "Social Media Advertising",
        description: "Targeted campaigns on platforms like Facebook, Instagram, and LinkedIn.",
      },
      {
        title: "Display & Retargeting",
        description: "Visual advertising across relevant websites and retargeting to previous website visitors.",
      },
      {
        title: "Conversion Tracking",
        description: "Implementation of tracking systems to measure appointment requests and patient acquisition.",
      },
    ],
  },
  {
    id: 7,
    title: "Content Marketing",
    slug: "content-marketing",
    shortDescription: "We develop educational healthcare content that builds trust and drives patient engagement.",
    fullDescription:
      "Our healthcare content marketing services focus on creating valuable, educational content that addresses patient questions and concerns. We develop comprehensive content strategies that position your organization as a trusted resource while improving your search visibility. From blog articles and patient guides to videos and infographics, we create content that engages your audience and supports your business goals.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "fileText",
    benefits: [
      "Establish your organization as a trusted healthcare resource",
      "Improve search engine rankings with valuable content",
      "Educate patients about conditions and treatment options",
      "Support the patient journey from awareness to decision",
    ],
    features: [
      {
        title: "Healthcare Content Strategy",
        description: "Development of comprehensive content plans aligned with patient needs and business goals.",
      },
      {
        title: "Medical Content Creation",
        description: "Production of accurate, engaging healthcare content by experienced medical writers.",
      },
      {
        title: "Multi-Format Content",
        description: "Development of diverse content types including articles, videos, infographics, and guides.",
      },
      {
        title: "Content Distribution",
        description: "Strategic promotion of content across owned, earned, and paid channels.",
      },
    ],
  },
  {
    id: 8,
    title: "Reputation Management",
    slug: "reputation-management",
    shortDescription: "We help monitor and improve your online reputation to build patient trust and confidence.",
    fullDescription:
      "Our reputation management services help healthcare organizations monitor, protect, and enhance their online reputation. We implement proactive strategies to generate positive reviews, address negative feedback constructively, and showcase patient satisfaction. Our comprehensive approach includes review monitoring, response management, and reputation marketing to ensure your online presence builds trust with potential patients.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "shield",
    benefits: [
      "Build trust with potential patients through positive reviews",
      "Address negative feedback professionally and constructively",
      "Showcase patient satisfaction across review platforms",
      "Improve star ratings on Google, Healthgrades, and other sites",
    ],
    features: [
      {
        title: "Review Monitoring",
        description: "Continuous tracking of reviews across healthcare platforms and general review sites.",
      },
      {
        title: "Response Management",
        description: "Professional, HIPAA-compliant responses to both positive and negative reviews.",
      },
      {
        title: "Review Generation",
        description: "Implementation of systems to encourage satisfied patients to share their experiences.",
      },
      {
        title: "Reputation Marketing",
        description: "Strategic promotion of positive reviews and testimonials across marketing channels.",
      },
    ],
  },
  {
    id: 9,
    title: "Email Marketing",
    slug: "email-marketing",
    shortDescription: "We create targeted email campaigns that nurture patient relationships and drive engagement.",
    fullDescription:
      "Our healthcare email marketing services help you build and maintain meaningful relationships with patients through personalized, relevant communications. We develop strategic email campaigns that educate patients, promote services, and encourage preventive care. Our approach combines healthcare expertise with email marketing best practices to create campaigns that drive engagement while maintaining compliance with healthcare regulations.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    icon: "mail",
    benefits: [
      "Nurture ongoing relationships with existing patients",
      "Educate patients about relevant health topics and services",
      "Encourage preventive care and regular appointments",
      "Reactivate relationships with lapsed patients",
    ],
    features: [
      {
        title: "Healthcare Email Strategy",
        description: "Development of targeted email plans aligned with patient needs and practice goals.",
      },
      {
        title: "HIPAA-Compliant Campaigns",
        description: "Creation of email content and systems that maintain patient privacy and regulatory compliance.",
      },
      {
        title: "Automated Patient Journeys",
        description: "Implementation of triggered email sequences for new patients, appointment follow-ups, and more.",
      },
      {
        title: "Performance Analytics",
        description: "Detailed reporting on email engagement metrics and conversion tracking.",
      },
    ],
  },
  {
    id: 10,
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    shortDescription: "We connect healthcare brands with relevant influencers to expand reach and build credibility.",
    fullDescription:
      "Our healthcare influencer marketing services help you partner with relevant, trusted voices to expand your reach and build credibility. We identify and vet healthcare influencers who align with your values and can authentically promote your services. Our comprehensive approach includes influencer identification, campaign development, content creation, and performance measurement to ensure your influencer partnerships deliver meaningful results.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    icon: "users",
    benefits: [
      "Expand reach to new patient audiences through trusted voices",
      "Build credibility through third-party endorsements",
      "Create authentic content that resonates with potential patients",
      "Increase brand awareness in targeted communities",
    ],
    features: [
      {
        title: "Healthcare Influencer Identification",
        description: "Research and vetting of relevant influencers who align with your healthcare brand.",
      },
      {
        title: "Compliant Campaign Development",
        description: "Creation of influencer programs that maintain healthcare regulatory compliance.",
      },
      {
        title: "Content Collaboration",
        description: "Facilitation of authentic content creation that effectively communicates your key messages.",
      },
      {
        title: "Performance Measurement",
        description: "Comprehensive tracking of influencer campaign results and patient acquisition.",
      },
    ],
  },
  {
    id: 11,
    title: "Analytics and Reporting",
    slug: "analytics-reporting",
    shortDescription: "We provide comprehensive data analysis to measure performance and guide strategic decisions.",
    fullDescription:
      "Our healthcare analytics and reporting services provide the insights you need to measure performance and make data-driven decisions. We implement comprehensive tracking systems, develop custom dashboards, and deliver regular reports that translate complex data into actionable insights. Our approach focuses on the metrics that matter most to healthcare organizations, from patient acquisition costs to treatment conversion rates.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "barChart",
    benefits: [
      "Make informed decisions based on accurate data",
      "Measure the ROI of your marketing investments",
      "Identify opportunities for optimization and growth",
      "Track patient acquisition from first touch to appointment",
    ],
    features: [
      {
        title: "Healthcare KPI Tracking",
        description: "Implementation of tracking systems for key performance indicators specific to healthcare.",
      },
      {
        title: "Custom Dashboard Development",
        description: "Creation of visual dashboards that provide at-a-glance performance insights.",
      },
      {
        title: "Regular Performance Reporting",
        description: "Delivery of comprehensive reports with analysis and recommendations.",
      },
      {
        title: "Conversion Path Analysis",
        description: "Detailed tracking of patient journeys from initial awareness to appointment booking.",
      },
    ],
  },
  {
    id: 12,
    title: "Tele-Calling Services",
    slug: "tele-calling-services",
    shortDescription:
      "We provide professional telecalling services to support patient outreach and appointment scheduling.",
    fullDescription:
      "Our healthcare tele-calling services provide professional patient outreach and appointment management support. Our trained specialists handle appointment scheduling, follow-up calls, and patient inquiries with empathy and professionalism. We implement HIPAA-compliant systems and protocols to ensure patient privacy while helping your practice maintain strong patient relationships and optimize scheduling efficiency.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    icon: "phone",
    benefits: [
      "Improve appointment scheduling efficiency",
      "Reduce no-shows with reminder calls",
      "Maintain patient relationships with follow-up calls",
      "Free up staff time for in-office patient care",
    ],
    features: [
      {
        title: "Appointment Scheduling",
        description: "Professional handling of incoming calls and outbound scheduling.",
      },
      {
        title: "Reminder Call Systems",
        description: "Systematic outreach to confirm appointments and reduce no-shows.",
      },
      {
        title: "Patient Follow-up Calls",
        description: "Post-appointment check-ins to ensure patient satisfaction and care plan adherence.",
      },
      {
        title: "HIPAA-Compliant Protocols",
        description: "Strict adherence to healthcare privacy regulations in all patient communications.",
      },
    ],
  },
]

export function getAllServices(): Service[] {
  return services
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

