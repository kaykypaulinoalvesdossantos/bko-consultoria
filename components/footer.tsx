import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, Send, Zap, ArrowRight, Building2, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const paraVoce = [
    { href: "/para-voce/fibra", label: "Internet Fibra" },
    { href: "/para-voce/movel", label: "Internet Móvel" },
    { href: "/para-voce/combo", label: "Combo Vivo Total" },
    { href: "/para-voce/tv", label: "Vivo Play TV" },
  ]

  const paraEmpresa = [
    { href: "/para-sua-empresa/fibra", label: "Internet Fibra" },
    { href: "/para-sua-empresa/movel", label: "Internet Móvel" },
    { href: "/para-sua-empresa/link-dedicado", label: "Link Dedicado" },
    { href: "/para-sua-empresa/pabx", label: "PABX em Nuvem" },
    { href: "/para-sua-empresa/cloud", label: "Cloud Computing" },
    { href: "/para-sua-empresa/energia", label: "GUD Energia" },
  ]

  const institucional = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/parceiros", label: "Parceiros" },
    { href: "/contato", label: "Contato" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/bkoconsultoria", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/bkoconsultoria", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/bkoconsultoria", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/bkoconsultoria", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/@bkoconsultoria", label: "YouTube" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">
                  Pronto para transformar sua empresa?
                </h3>
                <p className="text-white/90 text-lg">
                  Fale com nossos especialistas e descubra as melhores soluções para o seu negócio
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a
                  href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-6 rounded-xl shadow-lg flex items-center gap-2 text-base group cursor-pointer">
                    <Zap className="w-5 h-5" />
                    Falar no WhatsApp
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 bg-white/10 backdrop-blur-sm p-3">
                <Image
                  src="/Logo/bko-logo-no-branco.png"
                  alt="BKO Consultoria"
                  width={120}
                  height={120}
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <div className="font-black text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Consultoria & Gestão
                </div>
                <div className="text-sm text-gray-400">Soluções Empresariais</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Soluções completas e personalizadas em telecomunicações, energia e tecnologia para empresas de todos os portes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+5511982437768"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Telefone</div>
                  <div className="font-semibold">(11) 98243-7768</div>
                </div>
              </a>

              <a
                href="mailto:contato@bkoconsultoria.com.br"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center group-hover:bg-pink-600/30 transition-colors">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">E-mail</div>
                  <div className="font-semibold text-sm">contato@bkoconsultoria.com.br</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Localização</div>
                  <div className="font-semibold">São Paulo - SP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Para Você */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-lg">Para Você</h3>
            </div>
            <ul className="space-y-3">
              {paraVoce.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Para Empresa */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-5 h-5 text-pink-400" />
              <h3 className="font-bold text-lg">Para Empresa</h3>
            </div>
            <ul className="space-y-3">
              {paraEmpresa.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-bold text-lg mb-6">Institucional</h3>
            <ul className="space-y-3">
              {institucional.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="font-semibold text-white">BKO Consultoria & Gestão</span>. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                CNPJ: 00.000.000/0001-00 | Desenvolvido com 💜 por BKO Tech
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs text-gray-400">Anos de Experiência</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs text-gray-400">Clientes Atendidos</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-gray-400">Satisfação</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-400">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
