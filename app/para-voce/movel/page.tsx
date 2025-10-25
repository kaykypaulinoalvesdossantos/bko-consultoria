"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Smartphone, Check, ArrowRight, Zap, Globe, Users, Shield,
  Wifi, Signal, Download, Phone, MessageSquare, 
  PlayCircle, Music, Film, Tv, Newspaper, BookOpen, 
  MapPin, Star, Award, Gift, CheckCircle2, Sparkles,
  Radio, Video, Headphones, MonitorPlay
} from "lucide-react"

export default function MovelPessoaFisicaPage() {
  const [planType, setPlanType] = useState<"pos" | "familia">("pos")

  // Planos Pós - REDUZIDO para 5 melhores opções
  const posPlans = [
    {
      name: "Essencial",
      data: "40GB",
      price: 120,
      features: {
        calls: "Ligações e SMS inclusos",
        bonus: "15GB bônus Via dos Pós",
        travel: "Vivo Travel Américas",
        apps: 4,
      },
      popular: false,
      gradient: "from-gray-700 to-gray-900"
    },
    {
      name: "Amazon Prime",
      data: "50GB",
      price: 140,
      features: {
        calls: "Ligações e SMS inclusos",
        bonus: "15GB bônus + Vale Bônus",
        travel: "Vivo Travel Américas",
        apps: 5,
        streaming: "Amazon Prime 1 ano"
      },
      popular: false,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      name: "Spotify Premium",
      data: "50GB",
      price: 155,
      features: {
        calls: "Ligações e SMS inclusos",
        bonus: "15GB bônus + Vale Bônus",
        travel: "Vivo Travel Américas",
        apps: 6,
        streaming: "Amazon Prime + Spotify"
      },
      popular: true,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      name: "Disney+ Padrão",
      data: "50GB",
      price: 170,
      features: {
        calls: "Ligações e SMS inclusos",
        bonus: "15GB bônus + Vale Bônus",
        travel: "Vivo Travel Américas",
        apps: 6,
        streaming: "Amazon Prime + Disney+"
      },
      popular: false,
      gradient: "from-blue-700 to-blue-900"
    },
    {
      name: "Netflix",
      data: "50GB",
      price: 170,
      features: {
        calls: "Ligações e SMS inclusos",
        bonus: "15GB bônus + Vale Bônus",
        travel: "Vivo Travel Américas",
        apps: 5,
        streaming: "Amazon Prime + Netflix"
      },
      popular: false,
      gradient: "from-red-700 to-red-900"
    },
  ]

  // Planos Família - COMPLETO com todos os planos da tabela
  const familiaPlans = [
    {
      name: "Família 2",
      lines: 2,
      dataPerLine: "60GB",
      totalData: "120GB",
      oldData: "60GB",
      price: 240,
      features: {
        calls: "Ligações e SMS inclusos",
        ldi: "100 min LDI (código 15)",
        bonus: "1 linha adicional grátis",
        travel: "Vivo Travel Américas e Europa",
        apps: "Waze e WhatsApp ilimitados",
        additional: "Linha adicional R$ 50/mês"
      },
      popular: false,
      gradient: "from-purple-600 to-purple-800"
    },
    {
      name: "Família 3",
      lines: 3,
      dataPerLine: "60GB",
      totalData: "180GB",
      oldData: "100GB",
      price: 330,
      features: {
        calls: "Ligações e SMS inclusos",
        ldi: "100 min LDI (código 15)",
        bonus: "2 linhas adicionais grátis",
        travel: "Vivo Travel Américas e Europa",
        apps: "Waze e WhatsApp ilimitados",
        additional: "Linha adicional R$ 50/mês"
      },
      popular: false,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      name: "Família 4",
      lines: 4,
      dataPerLine: "60GB",
      totalData: "240GB",
      oldData: "150GB",
      price: 420,
      features: {
        calls: "Ligações e SMS inclusos",
        ldi: "100 min LDI (código 15)",
        bonus: "3 linhas adicionais grátis",
        travel: "Vivo Travel Américas e Europa",
        apps: "Waze e WhatsApp ilimitados",
        additional: "Linha adicional R$ 50/mês"
      },
      popular: true,
      gradient: "from-cyan-600 to-cyan-800"
    },
    {
      name: "Família 5",
      lines: 5,
      dataPerLine: "60GB",
      totalData: "300GB",
      oldData: "200GB",
      price: 520,
      features: {
        calls: "Ligações e SMS inclusos",
        ldi: "100 min LDI (código 15)",
        bonus: "4 linhas adicionais grátis",
        travel: "Vivo Travel Américas e Europa",
        apps: "Waze e WhatsApp ilimitados",
        additional: "Linha adicional R$ 50/mês"
      },
      popular: false,
      gradient: "from-green-600 to-green-800"
    },
    {
      name: "Vivo V",
      lines: 9,
      dataPerLine: "55GB",
      totalData: "500GB",
      oldData: null,
      price: 1200,
      features: {
        calls: "Ligações e SMS inclusos",
        ldi: "1.000 min LDI (código 15)",
        bonus: "8 linhas adicionais grátis",
        travel: "Vivo Travel Mundo",
        apps: "Waze e WhatsApp ilimitados",
        additional: "Linha adicional R$ 50/mês"
      },
      popular: false,
      gradient: "from-orange-600 to-red-600"
    },
  ]

  const benefits = [
    {
      icon: Signal,
      title: "Rede 4G/5G Premium",
      description: "Cobertura nacional com a melhor qualidade de sinal",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Roaming Internacional",
      description: "Conectado em mais de 200 países com Vivo Travel",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Gift,
      title: "Apps Premium Inclusos",
      description: "Streamings, jogos e conteúdo exclusivo sem custo adicional",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Portabilidade Gratuita",
      description: "Traga seu número sem complicação e sem custos",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Download,
      title: "Internet 5G",
      description: "Velocidade ultrarrápida para download e streaming",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Suporte 24/7",
      description: "Atendimento especializado sempre que precisar",
      color: "from-pink-500 to-purple-500"
    },
  ]

  const bonusFeatures = [
    "Portabilidade gratuita mantendo seu número",
    "Sem taxa de adesão ou ativação",
    "Débito automático disponível",
    "Fatura digital e controle pelo app",
    "Velocidade 4G/5G sem redução",
    "Ligações ilimitadas para qualquer operadora",
    "SMS ilimitado para todo Brasil",
    "Bônus válido por 12 meses"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - ESPAÇAMENTO CORRIGIDO */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold">Planos Móveis com Apps Premium Inclusos</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Internet Móvel 4G/5G
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">
                  Para Você e Sua Família
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Planos individuais e familiares com <strong>até 500GB</strong>, streamings premium inclusos,
                roaming internacional e a melhor rede 5G do Brasil
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#planos">
                  <button 
                    className="btn-primary-movel text-lg group"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Ver Planos
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria%20-%20Gostaria%20de%20informações%20sobre%20Planos%20Móveis">
                  <button 
                    className="btn-outline-light-movel text-lg"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Falar com Especialista
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: Smartphone, value: "500GB", label: "Até" },
                  { icon: Gift, value: "8+", label: "Apps Inclusos" },
                  { icon: Award, value: "R$ 120", label: "A partir de" }
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="animate-slide-right">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Benefícios Exclusivos</p>
                    <p className="text-white font-bold text-lg">Apps Premium Inclusos</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: PlayCircle, name: "Amazon Prime Video", desc: "Séries e filmes originais" },
                    { icon: Music, name: "Spotify Premium", desc: "Música ilimitada" },
                    { icon: Tv, name: "Globoplay", desc: "Novelas e séries ao vivo" },
                    { icon: Film, name: "Netflix & Disney+", desc: "Catálogos completos" }
                  ].map((app, index) => {
                    const Icon = app.icon
                    return (
                      <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold">{app.name}</p>
                          <p className="text-white/60 text-sm">{app.desc}</p>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/30">
                  <p className="text-white text-center text-sm">
                    <strong className="text-cyan-400">+ Roaming Internacional</strong> e acesso a mais de 8 apps premium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll - POSICIONAMENTO CORRIGIDO */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#planos" className="block">
            <div className="w-10 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/50 transition-colors">
              <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator" />
            </div>
          </a>
        </div>
      </section>

      {/* Seção de Planos com Tabs - LAYOUT MELHORADO */}
      <section id="planos" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Escolha o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Plano Ideal
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Planos individuais ou familiares com streamings premium inclusos
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-2xl p-2 gap-2 flex-wrap justify-center">
              <button
                onClick={() => setPlanType("pos")}
                className={`
                  px-6 md:px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2
                  ${planType === "pos" 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                <Smartphone className="w-5 h-5" />
                <span className="hidden sm:inline">Planos Pós</span>
                <span className="sm:hidden">Pós</span>
              </button>
              <button
                onClick={() => setPlanType("familia")}
                className={`
                  px-6 md:px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2
                  ${planType === "familia" 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                <Users className="w-5 h-5" />
                <span className="hidden sm:inline">Planos Família</span>
                <span className="sm:hidden">Família</span>
              </button>
            </div>
          </div>

          {/* Planos Pós - LAYOUT RESPONSIVO CORRIGIDO */}
          {planType === "pos" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {posPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`
                    relative bg-white rounded-2xl border-2 transition-all duration-300 h-full
                    ${plan.popular 
                      ? 'border-purple-500 shadow-xl' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                    }
                  `}
                >
                  {/* Badge Popular - CORRIGIDO */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
                        <Star className="w-3 h-3" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  <div className={`h-32 bg-gradient-to-br ${plan.gradient} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10" />
                    <Smartphone className="w-16 h-16 text-white relative z-10" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{plan.name}</h3>
                    
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-gray-900">{plan.data}</div>
                      <div className="text-sm text-gray-500">Internet móvel</div>
                    </div>

                    <div className="text-3xl font-bold text-purple-600 mb-6">
                      R$ {plan.price}
                      <span className="text-sm text-gray-600">/mês</span>
                    </div>

                    {plan.features.streaming && (
                      <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                        <div className="flex items-center gap-2">
                          <PlayCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-xs font-semibold text-blue-700 leading-tight">{plan.features.streaming}</span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex items-start gap-2 text-gray-700">
                        <Phone className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.features.calls}</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <Gift className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.features.bonus}</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.features.travel}</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <Award className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.features.apps}+ Apps Premium</span>
                      </div>
                    </div>

                    <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20plano%20${plan.name}%20por%20R$%20${plan.price}`}>
                      <button className={`w-full plan-button-movel ${plan.popular ? 'btn-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Contratar
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Planos Família - LAYOUT RESPONSIVO CORRIGIDO */}
          {planType === "familia" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {familiaPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`
                    relative bg-white rounded-2xl border-2 transition-all duration-300 h-full
                    ${plan.popular 
                      ? 'border-purple-500 shadow-xl' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                    }
                  `}
                >
                  {/* Badge Popular - CORRIGIDO */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
                        <Star className="w-3 h-3" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  <div className={`h-32 bg-gradient-to-br ${plan.gradient} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10" />
                    <Users className="w-16 h-16 text-white relative z-10" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{plan.name}</h3>
                    
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-gray-900 flex items-center gap-2">
                        {plan.totalData}
                        {plan.oldData && (
                          <span className="text-lg text-gray-400 line-through">{plan.oldData}</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">{plan.dataPerLine} por linha • {plan.lines} {plan.lines === 1 ? 'linha' : 'linhas'}</div>
                      {plan.oldData && (
                        <div className="text-xs text-green-600 font-semibold mt-1">✨ Upgrade de dados!</div>
                      )}
                    </div>

                    <div className="text-3xl font-bold text-purple-600 mb-6">
                      R$ {plan.price}
                      <span className="text-sm text-gray-600">/mês</span>
                    </div>

                    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-semibold text-blue-700 leading-tight">{plan.features.apps}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex items-start gap-2 text-gray-700">
                        <Phone className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.features.calls}</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <Globe className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.features.ldi}</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <Gift className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.features.bonus}</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.features.travel}</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <Users className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.features.additional}</span>
                      </div>
                    </div>

                    <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20plano%20${plan.name}%20por%20R$%20${plan.price}`}>
                      <button className={`w-full plan-button-movel ${plan.popular ? 'btn-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Contratar
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vantagens dos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Nossos Planos
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* O Que Está Incluso */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O Que Está{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Incluso
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-purple-100">
            <div className="grid md:grid-cols-2 gap-4">
              {bonusFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Ficar Sempre Conectado?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contrate agora seu plano móvel com streamings inclusos, roaming internacional 
            e a melhor rede 5G do Brasil
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20contratar%20Plano%20Móvel">
              <button 
                className="btn-primary-cta-movel text-lg group shadow-2xl"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Contratar Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Gostaria%20de%20tirar%20dúvidas%20sobre%20Planos%20Móveis">
              <button 
                className="btn-outline-light-cta-movel text-lg"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Tirar Dúvidas
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Portabilidade Grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Apps Premium Inclusos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Rede 5G Nacional</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
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

        /* Botões da página Móvel - tamanhos idênticos */
        .btn-primary-movel {
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

        .btn-primary-movel:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-movel {
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 600 !important;
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
          transition: all 0.3s !important;
          cursor: pointer !important;
          height: 3.5rem !important;
          min-width: 12rem !important;
          backdrop-filter: blur(12px) !important;
        }

        .btn-outline-light-movel:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página Móvel - tamanhos idênticos */
        .btn-primary-cta-movel {
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

        .btn-primary-cta-movel:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cta-movel {
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 600 !important;
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
          transition: all 0.3s !important;
          cursor: pointer !important;
          height: 4rem !important;
          min-width: 16rem !important;
          backdrop-filter: blur(12px) !important;
        }

        .btn-outline-light-cta-movel:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões dos planos - estilos específicos */
        .plan-button-movel {
          padding: 0.75rem 1.5rem !important;
          border-radius: 0.5rem !important;
          font-weight: 600 !important;
          transition: all 0.3s !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.5rem !important;
          cursor: pointer !important;
        }

        .plan-button-movel:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
