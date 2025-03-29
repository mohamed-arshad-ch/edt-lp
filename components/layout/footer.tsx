import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Mail, Facebook, Twitter, Linkedin } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#D64B65] to-[#e06377] text-white relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-full h-full opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Logo variant="white" />
            </div>
            <p className="text-white/80 mb-6">
              Expert Digi Health (EDT) is a leading digital solutions provider specializing in healthcare technology. We
              help healthcare providers leverage digital innovation to improve patient care and operational efficiency.
            </p>
            <div className="flex items-center space-x-2 mb-3">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm text-white/80">Global Headquarters: 123 Healthcare Street, Mumbai, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm text-white/80">info@expertdigihealth.com</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/website-development"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/telehealth"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Telehealth Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Healthcare Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Newsletter</h3>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex mb-4">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-l-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 focus:border-white"
              />
              <Button className="rounded-r-lg bg-white text-[#D64B65] hover:bg-gray-100">Subscribe</Button>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/80 mb-4 md:mb-0">© 2025 Expert Digi Health. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-white/80 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

