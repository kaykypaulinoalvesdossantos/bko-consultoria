"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Target, Eye, Heart, Users, TrendingUp, Award, Zap, Shield, 
  ArrowRight, CheckCircle2, Rocket, Globe, Network, Trophy,
  Calendar, Lightbulb, Star, Building2, ChevronRight, Play
} from "lucide-react"

export default function SobrePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeYear, setActiveYear] = useState(2024)
  const [counters, setCounters] = useState({ clients: 0, uptime: 0, years: 0 })
  const [isCounterVisible, setIsCounterVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  // Função de animação com useCallback para estabilidade
  const animateCounters = useCallback(() => {
    const duration = 1200 // Reduzido de 2000 para 1200ms
    const steps = 40 // Reduzido de 60 para 40 steps
    const increment = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      // Usar easing para animação mais suave
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)

      setCounters({
        clients: Math.floor(500 * easeOutCubic),
        uptime: Math.min(99.9, (99.9 * easeOutCubic)),
        years: Math.floor(20 * easeOutCubic),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        // Garantir valores finais exatos
        setCounters({
          clients: 500,
          uptime: 99.9,
          years: 20,
        })
      }
    }, increment)
  }, [])

  // useEffect para inicialização
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // useEffect para Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          setIsCounterVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [animateCounters])

  const timeline = [
    {
      year: 2003,
      title: "O Início da Jornada",
      description: "Fundação da BKO Consultoria & Gestão com a missão de revolucionar o mercado de telecomunicações no Brasil",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: 2008,
      title: "Expansão Nacional",
      description: "Ampliação da atuação para todo o território brasileiro, estabelecendo presença em todas as regiões",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: 2012,
      title: "Parcerias Estratégicas",
      description: "Consolidação de parcerias com as maiores operadoras: Vivo, Claro, TIM e outras líderes do mercado",
      icon: Network,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: 2016,
      title: "Certificação e Reconhecimento",
      description: "Reconhecimento oficial como consultoria certificada em telecomunicações pela Anatel",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
    {
      year: 2020,
      title: "Era da Transformação Digital",
      description: "Lançamento de soluções cloud, infraestrutura empresarial e tecnologias de ponta",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-600",
    },
    {
      year: 2024,
      title: "Líder em Telecomunicações",
      description: "Mais de 500 empresas conectadas e consolidação como referência nacional em soluções corporativas",
      icon: Star,
      color: "from-purple-600 to-cyan-500",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Fornecer soluções completas e personalizadas em telecomunicações, impulsionando a transformação digital das empresas brasileiras com excelência e inovação",
      color: "from-blue-500 to-cyan-500",
      number: "01",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a referência nacional em consultoria de telecomunicações, reconhecida pela inovação, qualidade técnica e excelência no relacionamento com clientes",
      color: "from-purple-500 to-pink-500",
      number: "02",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Integridade, inovação, excelência, compromisso com o cliente, responsabilidade social e sustentabilidade são os pilares que guiam todas as nossas ações",
      color: "from-green-500 to-emerald-500",
      number: "03",
    },
    {
      icon: Users,
      title: "Equipe",
      description: "Profissionais experientes e certificados, com conhecimento técnico avançado e paixão por conectar empresas ao futuro das telecomunicações",
      color: "from-orange-500 to-red-500",
      number: "04",
    },
  ]

  const achievements = [
    {
      icon: Building2,
      title: "500+ Empresas Atendidas",
      description: "De startups a grandes corporações",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "99.9% Uptime Garantido",
      description: "Máxima disponibilidade para seu negócio",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Suporte 24/7/365",
      description: "Equipe técnica sempre disponível",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Trophy,
      title: "10+ Anos de Mercado",
      description: "Experiência comprovada em telecom",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const differentials = [
    {
      title: "Consultoria Especializada",
      description: "Análise completa das necessidades da sua empresa para encontrar a solução ideal",
      icon: Target,
    },
    {
      title: "Suporte Proativo",
      description: "Monitoramento contínuo e suporte técnico antes que problemas afetem seu negócio",
      icon: Shield,
    },
    {
      title: "Melhores Parceiros",
      description: "Acesso às principais operadoras e provedores do mercado brasileiro",
      icon: Network,
    },
    {
      title: "Transparência Total",
      description: "Sem letras miúdas: contratos claros e comunicação transparente",
      icon: CheckCircle2,
    },
    {
      title: "Tecnologia de Ponta",
      description: "Soluções com as tecnologias mais avançadas: 5G, Fibra, Cloud e IoT",
      icon: Rocket,
    },
    {
      title: "Custo-Benefício",
      description: "Negociação direta com operadoras para garantir os melhores preços",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - ALTURA REDUZIDA */}
      <section className="relative w-full h-[70vh] min-h-[600px] overflow-hidden decorative-bg">
        <div className="decorative-dots" />
        <div className="decorative-circles">
          <div className="circle-1" />
          <div className="circle-2" />
          <div className="circle-3" />
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0369a1 100%)",
          }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

        <div className="relative h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <div className={`text-white z-10 max-w-4xl ${isVisible ? "animate-slide-up" : ""}`}>
              <div className="mb-6 inline-block">
                <div className="px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-sm">
                  <span className="text-cyan-300 text-sm font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    Mais de 20 Anos Conectando Empresas ao Futuro
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance leading-tight">
                Transformando a Conectividade Empresarial do Brasil
              </h1>

              <p className="text-xl text-cyan-300 mb-4 font-semibold">
                Mais que uma consultoria, somos o seu parceiro estratégico em telecomunicações
              </p>
              
              <p className="text-lg text-white/80 mb-8 text-balance max-w-3xl leading-relaxed">
                Desde 2003, a BKO Consultoria & Gestão tem sido pioneira em conectar empresas brasileiras 
                às melhores soluções em telecomunicações, combinando mais de duas décadas de expertise técnica 
                com atendimento humanizado e inovação constante
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria">
                  <button 
                    className="btn-primary-sobre text-lg group"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Fale com Especialista
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <button 
                  className="btn-outline-light-sobre text-lg flex items-center justify-center gap-2 group"
                  style={{ height: '3.5rem', minWidth: '12rem' }}
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Ver Nossa História
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Estatísticas Animadas com Contador */}
      <section ref={counterRef} className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Números que Falam por Si
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Mais de duas décadas de excelência refletida em resultados concretos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 text-center hover-lift group">
              <Building2 className="w-16 h-16 text-cyan-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-6xl font-bold text-white mb-2">{counters.clients}+</p>
              <p className="text-white/90 text-lg font-semibold">Empresas Conectadas</p>
              <p className="text-white/70 text-sm mt-2">De PMEs a grandes corporações</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 text-center hover-lift group">
              <Shield className="w-16 h-16 text-green-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-6xl font-bold text-white mb-2">{counters.uptime.toFixed(1)}%</p>
              <p className="text-white/90 text-lg font-semibold">Uptime Garantido</p>
              <p className="text-white/70 text-sm mt-2">Máxima disponibilidade</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 text-center hover-lift group">
              <Zap className="w-16 h-16 text-yellow-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-6xl font-bold text-white mb-2">24/7</p>
              <p className="text-white/90 text-lg font-semibold">Suporte Técnico</p>
              <p className="text-white/70 text-sm mt-2">Todos os dias do ano</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 text-center hover-lift group">
              <Trophy className="w-16 h-16 text-orange-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-6xl font-bold text-white mb-2">{counters.years}+</p>
              <p className="text-white/90 text-lg font-semibold">Anos de Mercado</p>
              <p className="text-white/70 text-sm mt-2">Mais de 20 anos de experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História com Timeline Interativa */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative decorative-bg">
        <div className="decorative-grid" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block mb-4">
              <div className="px-6 py-2 rounded-full border-2 border-purple-200 bg-purple-50">
                <span className="text-purple-700 text-sm font-bold flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  NOSSA TRAJETÓRIA
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mais de Duas Décadas de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Transformação Digital
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desde 2003 conectando empresas ao futuro: conheça os marcos que nos tornaram referência em consultoria de telecomunicações
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Linha central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 via-cyan-200 to-purple-200 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon
                const isLeft = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
                    onMouseEnter={() => setActiveYear(item.year)}
                  >
                    {/* Conteúdo */}
                    <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className={`
                        bg-white rounded-2xl p-8 border-2 border-gray-100
                        hover:border-purple-300 hover:shadow-2xl
                        transition-all duration-500
                        ${activeYear === item.year ? 'scale-105 border-purple-300 shadow-2xl' : ''}
                      `}>
                        <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                          <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-gray-900">{item.year}</p>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Indicador central */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full z-10 shadow-lg" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Jornada - Seção Criativa */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-6 py-2 rounded-full border-2 border-cyan-400/50 bg-cyan-500/10 backdrop-blur-sm">
                <span className="text-cyan-300 text-sm font-bold flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  NOSSA JORNADA
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Uma História de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Inovação e Excelência
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p className="text-xl md:text-2xl font-semibold text-cyan-300 mb-6">
                  O Grupo BKO nasceu com a missão de revolucionar o mercado de telecomunicações, oferecendo soluções personalizadas e de alta qualidade para empresas de todos os portes.
                </p>
                
                <p className="text-lg md:text-xl">
                  Desde <span className="font-bold text-cyan-400">2003</span>, a <span className="font-bold text-purple-300">BKO Consultoria & Gestão</span> tem sido pioneira em conectar empresas brasileiras às melhores tecnologias de telecomunicações. Com mais de <span className="font-bold text-cyan-400">20 anos de experiência</span> no setor, construímos uma reputação sólida baseada em <span className="font-semibold">confiança, inovação e excelência no atendimento ao cliente</span>.
                </p>

                <p className="text-lg md:text-xl">
                  Nossa trajetória é marcada por <span className="font-semibold">parcerias estratégicas com as maiores operadoras do país</span> - Vivo, Claro, TIM e outras líderes de mercado - permitindo que ofereçamos um <span className="font-bold text-purple-300">portfólio completo de soluções em telecomunicações</span>, sempre com o compromisso de entregar a melhor tecnologia e o melhor suporte aos nossos clientes.
                </p>

                <p className="text-lg md:text-xl">
                  Trabalhamos com <span className="font-bold text-cyan-400">telecomunicações de todos os tipos</span>: desde internet fibra óptica e links dedicados até soluções móveis 5G, PABX em nuvem, cloud computing e energia. Cada projeto é tratado com dedicação única, porque entendemos que <span className="font-semibold">cada empresa tem necessidades específicas</span> e merece uma solução sob medida.
                </p>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-xl md:text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
                    Mais de 20 anos conectando empresas ao futuro das telecomunicações.
                  </p>
                  <p className="text-lg text-center text-white/80 mt-4">
                    Essa é a nossa história. E a sua empresa pode fazer parte dela.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores e Equipe */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Pilares Fundamentais
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os valores e princípios que orientam cada decisão e ação da BKO Consultoria
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="relative group" style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Número de fundo decorativo */}
                  <div className="absolute -top-6 -right-6 text-9xl font-bold text-purple-50 group-hover:text-purple-100 transition-colors pointer-events-none z-0">
                    {value.number}
                  </div>

                  <Card className="relative h-full border-0 shadow-lg overflow-hidden group-hover:shadow-2xl transition-all duration-500 z-10">
                    <div className={`h-40 bg-gradient-to-br ${value.color} relative overflow-hidden flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                      <Icon className="w-20 h-20 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10" />
                    </div>
                    <div className="p-8 bg-white">
                      <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {value.description}
                      </p>
                      
                      {/* Indicador de hover */}
                      <div className="mt-6 flex items-center gap-2 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-semibold">Saiba mais</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais Competitivos */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative decorative-bg">
        <div className="decorative-dots" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por Que Escolher a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                BKO Consultoria
              </span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diferenciais que nos tornam a parceira ideal para a conectividade da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conquistas e Reconhecimentos */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conquistas e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Reconhecimento
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados que comprovam nossa dedicação e excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
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
                <Rocket className="w-4 h-4" />
                FAÇA PARTE DA NOSSA HISTÓRIA
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para Transformar a Conectividade da Sua Empresa?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Junte-se às mais de 500 empresas que confiam na BKO para suas soluções de telecomunicações.
            Vamos juntos construir o futuro digital do seu negócio!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria">
              <button 
                className="btn-primary-cta-sobre text-lg group shadow-2xl"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Users className="w-5 h-5 mr-2" />
                Agendar Consultoria Gratuita
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contato">
              <button 
                className="btn-secondary-light-cta-sobre text-lg group"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Solicitar Proposta Personalizada
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Análise Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Atendimento em 24h</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
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
        }

        .btn-secondary-light:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #5558e3;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        .btn-outline-light {
          background: transparent;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          border: 2px solid rgba(255, 255, 255, 0.4);
          transition: all 0.3s;
        }

        .btn-outline-light:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.6);
        }

        /* Botões da página Sobre - tamanhos idênticos */
        .btn-primary-sobre {
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

        .btn-primary-sobre:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-sobre {
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

        .btn-outline-light-sobre:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.6) !important;
        }

        /* Botões CTA da página Sobre - tamanhos idênticos */
        .btn-primary-cta-sobre {
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

        .btn-primary-cta-sobre:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-secondary-light-cta-sobre {
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

        .btn-secondary-light-cta-sobre:hover {
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
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          bottom: -150px;
          left: -150px;
          animation: float 10s ease-in-out infinite;
          animation-delay: 1s;
        }

        .circle-3 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #10b981, #0ea5e9);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 12s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}
