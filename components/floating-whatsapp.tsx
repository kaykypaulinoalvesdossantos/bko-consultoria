"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const phoneNumber = "5511982437768"
  const message = "Olá! Gostaria de informações sobre os serviços da BKO Consultoria & Gestão."
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
