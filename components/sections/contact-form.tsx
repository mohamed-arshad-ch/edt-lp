"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check, Send, Phone, Mail, Clock } from "lucide-react"

export default function ContactForm() {
  const [formStep, setFormStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log(formData)
    setIsSubmitted(true)
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-[#D64B65] text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-[#D64B65] mr-2"></span>
              Contact Us
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">We'd Love to Hear From You</h2>

            <p className="text-gray-600 mb-8">
              Whether you have a question about our services, pricing, or anything else, our team is ready to answer all
              your questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-[#D64B65]" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 98765 43210 (India)</p>
                  <p className="text-gray-600">+971 50 123 4567 (UAE)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-[#D64B65]" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@expertdigihealth.com</p>
                  <p className="text-gray-600">support@expertdigihealth.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg mr-4">
                  <Clock className="h-5 w-5 text-[#D64B65]" />
                </div>
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {isSubmitted ? (
              <motion.div initial="hidden" animate="visible" variants={formVariants} className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormStep(0)
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      organization: "",
                      interest: "",
                      message: "",
                    })
                  }}
                  className="bg-[#D64B65] hover:bg-[#c13a54] text-white"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    {[0, 1, 2].map((step) => (
                      <div
                        key={step}
                        className={`relative flex-1 ${step < formStep ? "border-[#D64B65]" : "border-gray-300"}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step < formStep
                              ? "bg-[#D64B65] text-white"
                              : step === formStep
                                ? "bg-white border-2 border-[#D64B65] text-[#D64B65]"
                                : "bg-white border-2 border-gray-300 text-gray-400"
                          }`}
                        >
                          {step < formStep ? <Check className="h-4 w-4" /> : step + 1}
                        </div>
                        {step < 2 && (
                          <div
                            className={`absolute top-4 left-8 right-0 h-0.5 ${
                              step < formStep ? "bg-[#D64B65]" : "bg-gray-300"
                            }`}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={formStep >= 0 ? "text-[#D64B65] font-medium" : "text-gray-500"}>
                      Personal Info
                    </span>
                    <span className={formStep >= 1 ? "text-[#D64B65] font-medium" : "text-gray-500"}>
                      Service Interest
                    </span>
                    <span className={formStep >= 2 ? "text-[#D64B65] font-medium" : "text-gray-500"}>Message</span>
                  </div>
                </div>

                {formStep === 0 && (
                  <motion.div
                    key="step1"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={formVariants}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        placeholder="Your organization"
                        value={formData.organization}
                        onChange={(e) => updateFormData("organization", e.target.value)}
                      />
                    </div>
                    <div className="pt-4">
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-[#D64B65] hover:bg-[#c13a54] text-white"
                      >
                        Next Step
                      </Button>
                    </div>
                  </motion.div>
                )}

                {formStep === 1 && (
                  <motion.div
                    key="step2"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={formVariants}
                    className="space-y-6"
                  >
                    <div>
                      <Label className="text-base font-medium mb-4 block">What service are you interested in?</Label>
                      <RadioGroup
                        value={formData.interest}
                        onValueChange={(value) => updateFormData("interest", value)}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="website-development" id="website" />
                          <Label htmlFor="website">Website Development</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="seo" id="seo" />
                          <Label htmlFor="seo">Search Engine Optimization</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="social-media" id="social" />
                          <Label htmlFor="social">Social Media Marketing</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="content-marketing" id="content" />
                          <Label htmlFor="content">Content Marketing</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="branding" id="branding" />
                          <Label htmlFor="branding">Branding & Design</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other Services</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button type="button" onClick={prevStep} variant="outline" className="w-1/2">
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="w-1/2 bg-[#D64B65] hover:bg-[#c13a54] text-white"
                      >
                        Next Step
                      </Button>
                    </div>
                  </motion.div>
                )}

                {formStep === 2 && (
                  <motion.div
                    key="step3"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={formVariants}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button type="button" onClick={prevStep} variant="outline" className="w-1/2">
                        Back
                      </Button>
                      <Button type="submit" className="w-1/2 bg-[#D64B65] hover:bg-[#c13a54] text-white">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

