import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#D64B65] to-[#e06377] text-white relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-full h-full opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
            Stay Updated
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">NEWSLETTER</h2>
          <p className="mb-8">
            Subscribe to our newsletter for the latest healthcare digital transformation insights and trends.
          </p>

          <div className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="rounded-l-full bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 focus:border-white"
            />
            <Button className="rounded-r-full bg-white text-[#D64B65] hover:bg-gray-100">SUBMIT</Button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <Link
              href="#"
              aria-label="Facebook"
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

