"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Wifi, Smartphone, LinkIcon, Cloud, TrendingUp, Users, Zap, Shield, 
  Play, ArrowRight, CheckCircle2, Network, Globe, Award 
} from "lucide-react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slides = [
    {
      title: "Conectando Seu Negócio ao Futuro",
      subtitle: "Internet Fibra Óptica de Alta Performance",
      description: "Velocidade ultrarrápida, estabilidade incomparável e suporte 24/7 para impulsionar sua empresa.",
      image: "/fibra-optica-conexao-internet.jpg",
      badge: "Líder em Soluções Corporativas",
      stats: [
        { value: "500+", label: "Empresas Conectadas" },
        { value: "99.9%", label: "Uptime Garantido" },
        { value: "24/7", label: "Suporte Técnico" },
      ],
      cta1: "Fale Conosco Agora",
      cta2: "Ver Demonstração",
      gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0369a1 100%)",
    },
    {
      title: "Mobilidade Sem Limites",
      subtitle: "Internet Móvel 4G/5G",
      description: "Conectividade de alta velocidade com cobertura nacional para sua equipe em qualquer lugar.",
      image: "/internet-movel-5g.jpg",
      badge: "Tecnologia 5G Disponível",
      stats: [
        { value: "4G/5G", label: "Tecnologia" },
        { value: "99.8%", label: "Cobertura" },
        { value: "Ilimitado", label: "Dados" },
      ],
      cta1: "Conhecer Planos",
      cta2: "Testar Cobertura",
      gradient: "linear-gradient(135deg, #1a0d5c 0%, #2815A2 50%, #00d4ff 100%)",
    },
    {
      title: "Infraestrutura em Nuvem",
      subtitle: "Soluções Cloud Seguras",
      description: "Escalabilidade, segurança e backup automático para sua infraestrutura crítica.",
      image: "/cloud-computing-infraestrutura.jpg",
      badge: "100% Disponibilidade",
      stats: [
        { value: "99.99%", label: "Uptime" },
        { value: "Automático", label: "Backup" },
        { value: "Seguro", label: "Criptografado" },
      ],
      cta1: "Saiba Mais",
      cta2: "Consultar Especialista",
      gradient: "linear-gradient(135deg, #2D2F7C 0%, #2815A2 50%, #1f1a4d 100%)",
    },
  ]

  const technologies = [
    {
      icon: Wifi,
      title: "Internet Fibra Óptica",
      description: "Velocidade ultrarrápida até 1Gbps com estabilidade superior para suas operações críticas",
      link: "/produtos/fibra",
      color: "from-blue-500 to-cyan-500",
      stats: "Até 1Gbps",
      badge: "Mais Popular",
    },
    {
      icon: Smartphone,
      title: "Internet Móvel",
      description: "Conectividade 4G/5G com cobertura nacional e performance garantida em qualquer lugar",
      link: "/produtos/movel",
      color: "from-purple-500 to-pink-500",
      stats: "4G/5G",
      badge: "Novo",
    },
    {
      icon: LinkIcon,
      title: "Link Dedicado",
      description: "Banda exclusiva com SLA garantido, suporte prioritário 24/7 e redundância automática",
      link: "/produtos/link-dedicado",
      color: "from-green-500 to-emerald-500",
      stats: "SLA 99.9%",
      badge: "Premium",
    },
    {
      icon: Cloud,
      title: "Soluções Cloud",
      description: "Infraestrutura em nuvem segura, escalável com backup automático e disaster recovery",
      link: "/produtos/cloud",
      color: "from-orange-500 to-red-500",
      stats: "99.99% Uptime",
      badge: "Enterprise",
    },
  ]

  // Parceiros com tratamento igual - SEM FAVORITISMO
  const partners = [
    {
      name: "Vivo",
      logo: "/Logo/vivo.png",
      gradient: "from-purple-600 to-purple-800",
      description: "Soluções corporativas em conectividade",
      services: ["Fibra Óptica", "Internet Móvel", "Link Dedicado"],
    },
    {
      name: "Claro",
      logo: "/Logo/claro.png",
      gradient: "from-red-500 to-red-700",
      description: "Infraestrutura e comunicação integrada",
      services: ["Internet Fibra", "Telefonia", "Cloud"],
    },
    {
      name: "TIM",
      logo: "/Logo/TIM.png",
      gradient: "from-blue-500 to-blue-700",
      description: "Tecnologia e inovação empresarial",
      services: ["Banda Larga", "4G/5G", "IoT"],
    },
    {
      name: "Net2Phone",
      logo: "/Logo/net2phone.png",
      gradient: "from-cyan-500 to-blue-600",
      description: "Comunicação unificada na nuvem",
      services: ["PABX Virtual", "VoIP", "Integrações"],
    },
    {
      name: "Hostfiber",
      logo: "/Logo/hostfiber.png",
      gradient: "from-green-500 to-emerald-700",
      description: "Infraestrutura e conectividade robusta",
      services: ["Network as a Service", "Backbone", "Data Center"],
    },
    {
      name: "Algar Telecom",
      logo: "/Logo/algar.png",
      gradient: "from-yellow-500 to-orange-600",
      description: "Soluções personalizadas para empresas",
      services: ["Fibra Óptica", "Cloud", "Consultoria"],
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Experiência Comprovada",
      description: "Mais de 10 anos no mercado de telecomunicações com centenas de clientes satisfeitos",
      number: "01",
    },
    {
      icon: Users,
      title: "Parcerias Estratégicas",
      description: "Trabalhamos com os melhores provedores do mercado para oferecer as melhores soluções",
      number: "02",
    },
    {
      icon: Zap,
      title: "Atendimento Personalizado",
      description: "Soluções customizadas para seu negócio com consultoria especializada",
      number: "03",
    },
    {
      icon: Shield,
      title: "Suporte Ágil e Eficaz",
      description: "Equipe técnica disponível 24/7 para resolver qualquer problema rapidamente",
      number: "04",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - ALTURA REDUZIDA (70vh ao invés de 100vh) */}
      <section className="relative w-full h-[70vh] min-h-[600px] overflow-hidden decorative-bg">
        <div className="decorative-dots" />
        <div className="decorative-circles">
          <div className="circle-1" />
          <div className="circle-2" />
          <div className="circle-3" />
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: slide.gradient }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

            <div className="relative h-full flex items-center">
              <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
                <div className={`text-white z-10 ${isVisible && index === currentSlide ? "animate-slide-up" : ""}`}>
                  <div className="mb-6 inline-block">
                    <div className="px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-sm">
                      <span className="text-cyan-300 text-sm font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        {slide.badge}
                      </span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{slide.title}</h1>
                  <p className="text-xl text-cyan-300 mb-2 font-semibold">{slide.subtitle}</p>
                  <p className="text-lg text-white/80 mb-6 text-balance">{slide.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {slide.stats.map((stat, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="text-xl font-bold text-cyan-300">{stat.value}</div>
                        <div className="text-xs text-white/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria">
                      <button 
                        className="btn-primary-carousel text-base w-full sm:w-auto group cursor-pointer"
                        style={{ height: '3.5rem', minWidth: '12rem' }}
                      >
                        {slide.cta1}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    <button 
                      className="btn-outline-light-carousel text-base w-full sm:w-auto flex items-center justify-center gap-2 group cursor-pointer"
                      style={{ height: '3.5rem', minWidth: '12rem' }}
                    >
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      {slide.cta2}
                    </button>
                  </div>
                </div>

                <div className={`relative h-80 md:h-full ${isVisible && index === currentSlide ? "animate-float-slow" : ""}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
                  <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <div className="absolute bottom-6 right-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-4 shadow-2xl animate-bounce-soft">
                      <div className="text-white font-bold text-base">Sistema Online</div>
                      <div className="text-white/90 text-sm">Velocidade Máxima</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Botões do carrossel - lado esquerdo */}
        <div className="absolute bottom-8 left-8 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-cyan-400 w-8 h-3" : "bg-white/40 hover:bg-white/60 w-3 h-3"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Indicador de scroll - centro */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Seção de Tecnologias */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative decorative-bg">
        <div className="decorative-grid" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tecnologia que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Transforma
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em telecomunicações para empresas de todos os portes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <Link key={index} href={tech.link}>
                  <Card className="h-full hover-lift cursor-pointer border-0 shadow-soft overflow-hidden group bg-white transition-all duration-500 hover:shadow-2xl">
                    <div className={`h-40 bg-gradient-to-br ${tech.color} relative overflow-hidden flex items-center justify-center`}>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10" />
                      <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                      <Icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">{tech.title}</h3>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700">
                          {tech.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{tech.description}</p>
                      <div className="text-sm font-semibold text-cyan-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                        {tech.stats}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seção de Parceiros - EQUALIZADO SEM FAVORITISMO */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block mb-4">
              <div className="px-6 py-2 rounded-full border-2 border-purple-200 bg-purple-50">
                <span className="text-purple-700 text-sm font-bold flex items-center gap-2">
                  <Network className="w-4 h-4" />
                  PARCEIROS ESTRATÉGICOS
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conectando Você aos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500">
                Melhores Provedores
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Temos parcerias estratégicas com as principais operadoras e provedores de tecnologia do Brasil,
              garantindo as melhores soluções em conectividade para sua empresa
            </p>
          </div>

          {/* Grid de Parceiros - Todos com o MESMO tratamento */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredPartner(index)}
                  onMouseLeave={() => setHoveredPartner(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                <div className={`
                  h-full bg-white rounded-2xl overflow-hidden
                  border-2 border-gray-100
                  hover:border-purple-200
                  hover:shadow-2xl
                  transition-all duration-500
                  ${hoveredPartner === index ? 'scale-105 -translate-y-2' : ''}
                `}>
                  {/* Header com Logo */}
                  <div className={`
                    relative h-32 bg-gradient-to-br ${partner.gradient}
                    flex items-center justify-center overflow-hidden
                  `}>
                    <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    
                    <div className="w-20 h-20 group-hover:scale-110 transition-transform duration-300 relative z-10 flex items-center justify-center">
                      <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg flex items-center justify-center">
                        <Image
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          width={60}
                          height={60}
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Serviços Oferecidos */}
                    <div className="space-y-2 mb-4">
                      {partner.services.map((service, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pb-6">
                    <div className="w-full py-2 px-4 bg-gradient-to-r from-gray-100 to-gray-50 group-hover:from-purple-600 group-hover:to-cyan-600 text-gray-700 group-hover:text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                      <span>Parceiro Oficial</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer com Informações Gerais */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: Globe, label: "Cobertura", value: "Nacional" },
              { icon: Award, label: "Certificações", value: "Anatel" },
              { icon: Network, label: "Parceiros", value: "6 Principais" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 text-center group hover:shadow-lg cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="font-bold text-2xl text-gray-900 mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria">
                <Button className="btn-primary text-lg group cursor-pointer">
                  Consultar Disponibilidade
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button className="btn-secondary-dark text-lg group cursor-pointer">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Por Que Escolher */}
      <section className="py-24 px-4 bg-white relative decorative-bg">
        <div className="decorative-dots" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por Que Escolher a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">BKO</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diferenciais que fazem da BKO Consultoria a parceira ideal para a transformação digital da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-purple-50 group-hover:text-purple-100 transition-colors pointer-events-none">
                    {benefit.number}
                  </div>

                  <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                      <span className="text-sm font-semibold">Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block">
            <div className="px-6 py-2 rounded-full border-2 border-cyan-400/50 bg-cyan-500/10 backdrop-blur-sm">
              <span className="text-cyan-300 text-sm font-bold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                TRANSFORMAÇÃO DIGITAL COMEÇA AGORA
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para Levar Sua Conectividade ao Próximo Nível?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Entre em contato com nossos especialistas e descubra como podemos impulsionar seu negócio
            com as melhores soluções em telecomunicações do mercado
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria">
              <button 
                className="btn-primary-cta text-lg group shadow-2xl cursor-pointer"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Users className="w-5 h-5 mr-2" />
                Fale com Especialista
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contato">
              <button 
                className="btn-secondary-light-cta text-lg group cursor-pointer"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Solicitar Orçamento Gratuito
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Resposta em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Consultoria Gratuita</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .shadow-soft {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        /* Botões com contraste adequado WCAG 2.2 */
        .btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%);
        }

        .btn-secondary-light {
          background: white;
          color: #6366f1;
          padding: 0.75rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          border: 2px solid white;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .btn-secondary-light:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #5558e3;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary-dark {
          background: white;
          color: #1f2937;
          padding: 0.75rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          border: 2px solid #e5e7eb;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .btn-secondary-dark:hover {
          background: #f9fafb;
          border-color: #6366f1;
          color: #6366f1;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
        }

        .btn-outline-light {
          background: transparent;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          border: 2px solid rgba(255, 255, 255, 0.4);
          transition: all 0.3s;
          cursor: pointer;
        }

        .btn-outline-light:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.6);
        }

        /* Botões do carrossel com tamanhos idênticos - FORÇADO */
        .btn-primary-carousel {
          background: linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%) !important;
          color: white !important;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 600 !important;
          transition: all 0.3s !important;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4) !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          height: 3.5rem !important;
          min-width: 12rem !important;
          border: none !important;
        }

        .btn-primary-carousel:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-carousel {
          background: transparent !important;
          color: white !important;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 600 !important;
          border: 2px solid rgba(255, 255, 255, 0.4) !important;
          transition: all 0.3s !important;
          cursor: pointer !important;
          height: 3.5rem !important;
          min-width: 12rem !important;
        }

        .btn-outline-light-carousel:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.6) !important;
        }

        /* Botões da seção CTA final - tamanhos idênticos */
        .btn-primary-cta {
          background: linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%) !important;
          color: white !important;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 600 !important;
          transition: all 0.3s !important;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4) !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          height: 4rem !important;
          min-width: 16rem !important;
          border: none !important;
        }

        .btn-primary-cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-secondary-light-cta {
          background: white !important;
          color: #6366f1 !important;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 600 !important;
          border: 2px solid white !important;
          transition: all 0.3s !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          height: 4rem !important;
          min-width: 16rem !important;
        }

        .btn-secondary-light-cta:hover {
          background: rgba(255, 255, 255, 0.9) !important;
          color: #5558e3 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3) !important;
        }

        .decorative-bg {
          position: relative;
        }

        .decorative-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.3;
          pointer-events: none;
        }

        .decorative-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(#e5e7eb 1px, transparent 1px),
                            linear-gradient(90deg, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.2;
          pointer-events: none;
        }

        .decorative-circles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .circle-1, .circle-2, .circle-3 {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
        }

        .circle-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          top: -250px;
          right: -250px;
          animation: float-slow 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          bottom: -150px;
          left: -150px;
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 1s;
        }

        .circle-3 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #10b981, #0ea5e9);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float-slow 12s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
