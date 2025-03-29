import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "white"
  className?: string
}

export default function Logo({ variant = "default", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {variant === "white" ? (
        <div className="relative h-10 w-20">
          <Image src="/edt-logo.png" alt="EDT Logo" fill className="object-contain brightness-0 invert" />
        </div>
      ) : (
        <div className="relative h-10 w-20">
          <Image src="/edt-logo.png" alt="EDT Logo" fill className="object-contain" />
        </div>
      )}
    </Link>
  )
}

