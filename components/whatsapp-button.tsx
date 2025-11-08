"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  message?: string
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export function WhatsAppButton({
  message = "Olá! Gostaria de informações sobre os serviços da BKO.",
  className = "",
  variant = "default",
}: WhatsAppButtonProps) {
  const phoneNumber = "5511982437768"
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <Button className={className} variant={variant as any}>
        <MessageCircle className="w-4 h-4 mr-2" />
        Fale Conosco no WhatsApp
      </Button>
    </a>
  )
}
