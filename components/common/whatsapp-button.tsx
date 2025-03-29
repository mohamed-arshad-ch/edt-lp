'use client'

import { MessageCirclePlus } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber: string // Format: country code + number (e.g., "919876543210")
  message?: string
}

const WhatsAppButton = ({ 
  phoneNumber = "919876543210", // Replace with your actual number
  message = "Hello! I'm interested in EDT's services." 
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCirclePlus className="text-2xl" />
    </button>
  )
}

export default WhatsAppButton 