"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Network, Shield, Zap, Users, TrendingUp, Award, ArrowRight, 
  CheckCircle2, Globe, Signal, Building2, Smartphone, Wifi,
  Cloud, Phone, Server, Radio, Router, Headphones, Target,
  BarChart3, Search, FileCheck, Handshake, Star, Play
} from "lucide-react"

export default function ParceirosPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Parceiros com informações equilibradas e detalhadas
  const partners = [
    {
      name: "Vivo",
      logo: "/Logo/vivo.png",
      gradient: "from-purple-600 to-purple-800",
      description: "Ampla infraestrutura de telecomunicações com foco em soluções corporativas completas",
      founded: "Desde 1998",
      coverage: "Nacional",
      specialties: [
        { icon: Wifi, name: "Internet Fibra Óptica" },
        { icon: Smartphone, name: "Internet Móvel 4G/5G" },
        { icon: Router, name: "Link Dedicado" },
      ],
      strengths: [
        "Infraestrutura robusta em todo território nacional",
        "Soluções integradas de telefonia e dados",
        "Portfólio completo para empresas de todos os portes",
      ],
    },
    {
      name: "Claro",
      logo: "/Logo/claro.png",
      gradient: "from-red-500 to-red-700",
      description: "Tecnologia avançada e soluções convergentes para conectividade empresarial",
      founded: "Desde 2003",
      coverage: "Nacional",
      specialties: [
        { icon: Wifi, name: "Fibra Óptica Empresarial" },
        { icon: Radio, name: "Telefonia Corporativa" },
        { icon: Cloud, name: "Soluções Cloud" },
      ],
      strengths: [
        "Alta cobertura móvel em território nacional",
        "Tecnologia de ponta em telecomunicações",
        "Soluções convergentes fixo-móvel",
      ],
    },
    {
      name: "TIM",
      logo: "/Logo/TIM.png",
      gradient: "from-blue-500 to-blue-700",
      description: "Inovação e conectividade integrada com foco em transformação digital corporativa",
      founded: "Desde 1998",
      coverage: "Nacional",
      specialties: [
        { icon: Smartphone, name: "Internet Móvel" },
        { icon: Wifi, name: "Banda Larga Corporativa" },
        { icon: Network, name: "Soluções IoT" },
      ],
      strengths: [
        "Liderança em infraestrutura 5G",
        "Soluções inovadoras para IoT empresarial",
        "Planos flexíveis e escaláveis",
      ],
    },
    {
      name: "Net2Phone",
      logo: "/Logo/net2phone.png",
      gradient: "from-cyan-500 to-blue-600",
      description: "Especialista global em comunicação unificada e telefonia em nuvem",
      founded: "Desde 1996",
      coverage: "Global",
      specialties: [
        { icon: Phone, name: "PABX Virtual" },
        { icon: Headphones, name: "VoIP Empresarial" },
        { icon: Cloud, name: "Comunicação Unificada" },
      ],
      strengths: [
        "Plataforma de comunicação na nuvem completa",
        "Integrações com principais CRMs do mercado",
        "Escalabilidade e flexibilidade empresarial",
      ],
    },
    {
      name: "Hostfiber",
      logo: "/Logo/hostfiber.png",
      gradient: "from-green-500 to-emerald-700",
      description: "Infraestrutura robusta e soluções de Network as a Service para empresas",
      founded: "Desde 2012",
      coverage: "Regional SP/MG",
      specialties: [
        { icon: Server, name: "Network as a Service" },
        { icon: Cloud, name: "Data Center" },
        { icon: Shield, name: "Backup em Nuvem" },
      ],
      strengths: [
        "Rede própria com mais de 10.000km de fibra óptica",
        "Infraestrutura dedicada para grandes empresas",
        "Suporte técnico especializado 24x7",
      ],
    },
    {
      name: "Algar Telecom",
      logo: "/Logo/algar.png",
      gradient: "from-yellow-500 to-orange-600",
      description: "Tradição e inovação em telecomunicações com atendimento personalizado",
      founded: "Desde 1954",
      coverage: "Regional MG/SP/MS",
      specialties: [
        { icon: Wifi, name: "Internet Fibra" },
        { icon: Router, name: "Link Dedicado" },
        { icon: Cloud, name: "Cloud Computing" },
      ],
      strengths: [
        "Mais de 70 anos de experiência no mercado",
        "Atendimento regionalizado e personalizado",
        "Soluções customizadas para cada cliente",
      ],
    },
  ]

  const analysisProcess = [
    {
      step: "01",
      title: "Análise de Necessidades",
      description: "Identificamos as demandas específicas da sua empresa, considerando porte, localização, tipo de negócio e objetivos de crescimento",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Mapeamento de Soluções",
      description: "Avaliamos a cobertura, tecnologias disponíveis e planos de cada operadora parceira na sua região",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Comparativo Técnico",
      description: "Comparamos SLA, uptime, velocidades, redundância e suporte técnico de forma imparcial e transparente",
      icon: FileCheck,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Recomendação Personalizada",
      description: "Apresentamos as melhores opções baseadas em critérios técnicos e financeiros, sem favoritismos",
      icon: Target,
      color: "from-orange-500 to-red-500",
    },
  ]

  const whyBKO = [
    {
      icon: Shield,
      title: "Imparcialidade Total",
      description: "Analisamos todas as operadoras com os mesmos critérios técnicos, priorizando exclusivamente as necessidades do seu negócio",
    },
    {
      icon: Network,
      title: "Acesso Exclusivo",
      description: "Como consultoria especializada, temos acesso a condições comerciais diferenciadas em todas as operadoras parceiras",
    },
    {
      icon: Handshake,
      title: "Relacionamento Direto",
      description: "Nosso relacionamento estratégico com as operadoras agiliza implementações, suporte e resoluções de problemas",
    },
    {
      icon: Zap,
      title: "Suporte Unificado",
      description: "Um único ponto de contato para gestão de múltiplos fornecedores, simplificando sua operação",
    },
    {
      icon: TrendingUp,
      title: "Negociação Estratégica",
      description: "Negociamos diretamente com as operadoras para garantir os melhores preços e condições contratuais",
    },
    {
      icon: Award,
      title: "Consultoria Contínua",
      description: "Acompanhamento pós-implementação e reavaliação periódica para garantir que sua solução continue ideal",
    },
  ]

  const benefits = [
    { 
      icon: Building2, 
      title: "6 Parceiros Estratégicos", 
      description: "Acesso às principais operadoras do Brasil",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Globe, 
      title: "Cobertura Nacional", 
      description: "Soluções disponíveis em todo território",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: Shield, 
      title: "SLA Garantido 99.9%", 
      description: "Máxima disponibilidade e confiabilidade",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: Headphones, 
      title: "Suporte 24/7/365", 
      description: "Equipe técnica sempre disponível",
      gradient: "from-orange-500 to-red-500"
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
            background: "linear-gradient(135deg, #1a0d5c 0%, #2815A2 50%, #00d4ff 100%)",
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
                    Ecossistema de Parceiros Estratégicos
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance leading-tight">
                O Poder da Escolha Inteligente
              </h1>

              <p className="text-xl text-cyan-300 mb-4 font-semibold">
                Conectando sua empresa aos melhores provedores do Brasil
              </p>
              
              <p className="text-lg text-white/80 mb-8 text-balance max-w-3xl leading-relaxed">
                Trabalhamos com as principais operadoras e provedores de tecnologia do país. 
                Nossa consultoria imparcial analisa cada caso individualmente para recomendar 
                a solução ideal para o seu negócio, sem favoritismos
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria">
                  <button 
                    className="btn-primary-parceiros text-lg group"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Agendar Consultoria Gratuita
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <button 
                  className="btn-outline-light-parceiros text-lg flex items-center justify-center gap-2 group"
                  style={{ height: '3.5rem', minWidth: '12rem' }}
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Como Escolhemos
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

      {/* Nosso Processo de Análise */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative decorative-bg">
        <div className="decorative-grid" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-6 py-2 rounded-full border-2 border-purple-200 bg-purple-50">
                <span className="text-purple-700 text-sm font-bold flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  METODOLOGIA COMPROVADA
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Como Analisamos e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Escolhemos a Melhor Solução
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nosso processo de consultoria é baseado em critérios técnicos objetivos, 
              garantindo que você receba a recomendação mais adequada para sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analysisProcess.map((process, index) => {
              const Icon = process.icon
              return (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Número decorativo */}
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-purple-50 group-hover:text-purple-100 transition-colors pointer-events-none z-0">
                    {process.step}
                  </div>

                  <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 h-full z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {process.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Grid de Parceiros - TOTALMENTE EQUALIZADO */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500">
                Parceiros Estratégicos
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada parceiro foi cuidadosamente selecionado por seu histórico de excelência, 
              infraestrutura robusta e compromisso com a qualidade no atendimento corporativo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => {
              const isHovered = hoveredPartner === index
              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredPartner(index)}
                  onMouseLeave={() => setHoveredPartner(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`
                    h-full bg-white rounded-2xl overflow-hidden
                    border-2 border-gray-100
                    hover:border-purple-300
                    hover:shadow-2xl
                    transition-all duration-500
                    ${isHovered ? 'scale-105 -translate-y-2' : ''}
                  `}>
                    {/* Header com Logo */}
                    <div className={`relative h-40 bg-gradient-to-br ${partner.gradient} flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                      
                      <div className="w-24 h-24 group-hover:scale-110 transition-transform duration-300 relative z-10 flex items-center justify-center">
                        <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg flex items-center justify-center">
                          <Image
                            src={partner.logo}
                            alt={`Logo ${partner.name}`}
                            width={80}
                            height={80}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
                      </div>

                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                          <span className="text-white text-xs font-bold">{partner.founded}</span>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-8">
                      <h3 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {partner.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {partner.description}
                      </p>

                      <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
                        <Globe className="w-4 h-4" />
                        <span>Cobertura: {partner.coverage}</span>
                      </div>

                      {/* Especialidades */}
                      <div className="mb-6">
                        <p className="text-sm font-bold text-gray-700 mb-3">Principais Soluções:</p>
                        <div className="space-y-2">
                          {partner.specialties.map((specialty, i) => {
                            const SpecIcon = specialty.icon
                            return (
                              <div
                                key={i}
                                className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 rounded-lg p-2"
                              >
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <SpecIcon className="w-4 h-4 text-purple-600" />
                                </div>
                                <span>{specialty.name}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Diferenciais */}
                      <div>
                        <p className="text-sm font-bold text-gray-700 mb-3">Diferenciais:</p>
                        <div className="space-y-2">
                          {partner.strengths.map((strength, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-8 pb-8">
                      <div className="w-full py-3 px-4 bg-gradient-to-r from-gray-100 to-gray-50 group-hover:from-purple-600 group-hover:to-cyan-600 text-gray-700 group-hover:text-white rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                        <span>Parceiro Oficial BKO</span>
                        <Star className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Nota de Imparcialidade */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 border-2 border-purple-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Compromisso com a Imparcialidade</h3>
                <p className="text-gray-700 leading-relaxed">
                  Todos os nossos parceiros passam por rigorosos critérios de qualificação. 
                  Nossa consultoria é <strong>100% imparcial</strong> - não recebemos comissões diferenciadas 
                  que possam influenciar nossas recomendações. A escolha é sempre baseada nas suas necessidades 
                  específicas, cobertura da região, e análise técnica objetiva de cada solução.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Trabalhar com a BKO */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative decorative-bg">
        <div className="decorative-dots" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vantagens de Contratar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Através da BKO
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa experiência e relacionamento estratégico trazem benefícios únicos para sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyBKO.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-8 h-8 text-purple-600" />
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

      {/* Benefícios em Números */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resultados que Comprovam Nossa Excelência
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Métricas que demonstram a qualidade do nosso ecossistema de parceiros
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 text-center hover-lift group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block">
            <div className="px-6 py-2 rounded-full border-2 border-purple-200 bg-purple-50">
              <span className="text-purple-700 text-sm font-bold flex items-center gap-2">
                <Handshake className="w-4 h-4" />
                CONSULTORIA GRATUITA E SEM COMPROMISSO
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Descubra Qual Parceiro é Ideal para Sua Empresa
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de especialistas está pronta para analisar suas necessidades e 
            recomendar a solução perfeita entre nossos parceiros estratégicos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria">
              <button 
                className="btn-primary-cta-parceiros text-lg group shadow-2xl"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Users className="w-5 h-5 mr-2" />
                Agendar Análise Gratuita
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contato">
              <button 
                className="btn-secondary-dark-cta-parceiros text-lg group"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Solicitar Proposta Detalhada
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span className="text-sm">Análise Técnica Completa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span className="text-sm">Comparativo Imparcial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span className="text-sm">Sem Compromisso</span>
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
        }

        .btn-outline-light:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.6);
        }

        /* Botões da página Parceiros - tamanhos idênticos */
        .btn-primary-parceiros {
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

        .btn-primary-parceiros:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-parceiros {
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

        .btn-outline-light-parceiros:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.6) !important;
        }

        /* Botões CTA da página Parceiros - tamanhos idênticos */
        .btn-primary-cta-parceiros {
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

        .btn-primary-cta-parceiros:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-secondary-dark-cta-parceiros {
          background: white !important;
          color: #1f2937 !important;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 600 !important;
          border: 2px solid #e5e7eb !important;
          transition: all 0.3s !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          height: 4rem !important;
          min-width: 16rem !important;
        }

        .btn-secondary-dark-cta-parceiros:hover {
          background: #f9fafb !important;
          border-color: #6366f1 !important;
          color: #6366f1 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2) !important;
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
