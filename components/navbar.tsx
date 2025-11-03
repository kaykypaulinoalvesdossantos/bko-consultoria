"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Zap, Building2, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setOpenDropdown(null)
  }

  const paraVoceItems = [
    { href: "/para-voce/fibra", label: "Internet Fibra", icon: Zap, desc: "Conexão ultra-rápida para sua casa" },
    { href: "/para-voce/movel", label: "Internet Móvel", icon: Phone, desc: "Planos com internet ilimitada" },
    { href: "/para-voce/combo", label: "Combo Vivo Total", icon: Zap, desc: "Economia com pacotes completos" },
    { href: "/para-voce/tv", label: "Vivo Play TV", icon: Zap, desc: "Entretenimento on demand" },
  ]

  const paraEmpresaItems = [
    { href: "/para-sua-empresa/fibra", label: "Internet Fibra", icon: Zap, desc: "Conexão empresarial de alta performance" },
    { href: "/para-sua-empresa/movel", label: "Internet Móvel", icon: Phone, desc: "Planos corporativos flexíveis" },
    { href: "/para-sua-empresa/link-dedicado", label: "Link Dedicado", icon: Building2, desc: "Conexão exclusiva e simétrica" },
    { href: "/para-sua-empresa/pabx", label: "PABX em Nuvem", icon: Phone, desc: "Telefonia empresarial moderna" },
    { href: "/para-sua-empresa/cloud", label: "Cloud Computing", icon: Building2, desc: "Infraestrutura em nuvem" },
    { href: "/para-sua-empresa/energia", label: "GUD Energia", icon: Zap, desc: "Economia de até 30% em energia" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-6">
              <a href="tel:+5511982437768" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>(11) 98243-7768</span>
              </a>
              <a href="mailto:contato@bkoconsultoria.com.br" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>contato@bkoconsultoria.com.br</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Atendemos todo Brasil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group cursor-pointer" onClick={closeMenu}>
              <div className="relative w-32 h-16 rounded-2xl flex items-center justify-center  transition-all duration-500 group-hover:scale-110  ">
                <Image
                  src="/Logo/logo-BKO.png"
                  alt="BKO Consultoria"
                  width={120}
                  height={60}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 font-medium cursor-pointer"
                >
                  Home
                </Button>
              </Link>

              {/* Para Você Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("paravoce")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 flex items-center gap-1 transition-all duration-300 font-medium cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  Para Você
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredMenu === "paravoce" ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-[420px] bg-white border border-gray-200 rounded-2xl shadow-2xl transition-all duration-300 ${
                    hoveredMenu === "paravoce"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900">Planos Residenciais</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {paraVoceItems.map((item) => {
                        const Icon = item.icon
                        return (
                           <Link
                             key={item.href}
                             href={item.href}
                             className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-transparent hover:border-purple-200 cursor-pointer"
                           >
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-5 h-5 text-purple-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-sm text-gray-500">{item.desc}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Para Empresa Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("paraempresa")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 flex items-center gap-1 transition-all duration-300 font-medium cursor-pointer"
                >
                  <Building2 className="w-4 h-4" />
                  Para Empresa
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredMenu === "paraempresa" ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-[480px] bg-white border border-gray-200 rounded-2xl shadow-2xl transition-all duration-300 ${
                    hoveredMenu === "paraempresa"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900">Soluções Empresariais</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {paraEmpresaItems.map((item) => {
                        const Icon = item.icon
                        return (
                           <Link
                             key={item.href}
                             href={item.href}
                             className="group flex flex-col gap-2 p-4 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-purple-200 cursor-pointer"
                           >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                                {item.label}
                              </div>
                              <div className="text-xs text-gray-500">{item.desc}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/sobre">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 font-medium cursor-pointer"
                >
                  Sobre Nós
                </Button>
              </Link>

              <Link href="/parceiros">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 font-medium cursor-pointer"
                >
                  Parceiros
                </Button>
              </Link>

              <Link href="/contato">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 font-medium cursor-pointer"
                >
                  Contato
                </Button>
              </Link>
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <a href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer">
                  <Phone className="w-4 h-4" />
                  Fale Conosco
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-6 pt-4 space-y-3 animate-slide-down">
              <Link href="/" onClick={closeMenu}>
                <Button variant="ghost" className="w-full justify-start text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600">
                  Home
                </Button>
              </Link>

              {/* Mobile Para Você */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown("paravoce")}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium text-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>Para Você</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openDropdown === "paravoce" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "paravoce" && (
                  <div className="pl-4 space-y-1 animate-slide-down">
                    {paraVoceItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 rounded-lg transition-colors"
                        >
                          <Icon className="w-4 h-4 text-purple-600" />
                          <div>
                            <div className="font-medium text-sm text-gray-900">{item.label}</div>
                            <div className="text-xs text-gray-500">{item.desc}</div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Para Empresa */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown("paraempresa")}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium text-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    <span>Para Empresa</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openDropdown === "paraempresa" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "paraempresa" && (
                  <div className="pl-4 space-y-1 animate-slide-down">
                    {paraEmpresaItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 rounded-lg transition-colors"
                        >
                          <Icon className="w-4 h-4 text-purple-600" />
                          <div>
                            <div className="font-medium text-sm text-gray-900">{item.label}</div>
                            <div className="text-xs text-gray-500">{item.desc}</div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <Link href="/sobre" onClick={closeMenu}>
                <Button variant="ghost" className="w-full justify-start text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600">
                  Sobre Nós
                </Button>
              </Link>

              <Link href="/parceiros" onClick={closeMenu}>
                <Button variant="ghost" className="w-full justify-start text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600">
                  Parceiros
                </Button>
              </Link>

              <Link href="/contato" onClick={closeMenu}>
                <Button variant="ghost" className="w-full justify-start text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600">
                  Contato
                </Button>
              </Link>

              {/* Mobile CTA */}
              <a
                href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold py-6 rounded-xl shadow-lg flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Fale Conosco
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}
