"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Wifi, Smartphone, Check, ArrowRight, Zap, Globe, Users, Shield,
  PlayCircle, Music, Film, Tv, Star, Award, Gift, CheckCircle2, Sparkles,
  Home, Signal, Radio, Package, TrendingUp, Target, Rocket, Crown
} from "lucide-react"

export default function CombosPage() {
  const [hoveredCombo, setHoveredCombo] = useState<number | null>(null)

  // Combos baseados na imagem "Vivo Total"
  const combos = [
    {
      name: "Vivo Total Pro",
      fiber: "50GB",
      mobile: "50GB",
      price: 160,
      features: {
        fiberData: "50GB Fibra",
        mobileData: "50GB Móvel",
        calls: "Ligações e SMS inclusos",
        extraLines: "1 Linha adicional grátis",
        travel: "Vivo Travel Américas",
        bonus: "A partir de R$ 150 em Vale Bônus"
      },
      apps: [
        { name: "Whatsapp", icon: Radio },
        { name: "Waze", icon: Globe },
      ],
      fiberApps: [],
      popular: false,
      gradient: "from-purple-600 to-purple-800",
      badge: null
    },
    {
      name: "Vivo Total Ultra",
      fiber: "70GB",
      mobile: "70GB",
      price: 190,
      features: {
        fiberData: "70GB Fibra",
        mobileData: "70GB Móvel",
        calls: "Ligações e SMS inclusos",
        extraLines: "2 Linhas adicionais grátis",
        travel: "Vivo Travel Américas",
        bonus: "A partir de R$ 150 em Vale Bônus"
      },
      apps: [
        { name: "Whatsapp", icon: Radio },
        { name: "Waze", icon: Globe },
      ],
      fiberApps: [],
      popular: false,
      gradient: "from-blue-600 to-cyan-600",
      badge: null
    },
    {
      name: "Vivo Total Família 2",
      fiber: "120GB",
      mobile: "120GB",
      price: 270,
      features: {
        fiberData: "120GB Fibra",
        mobileData: "60GB por linha",
        calls: "100 min LDI",
        extraLines: "3 Linhas adicionais grátis",
        travel: "Vivo Travel Américas e Europa",
        bonus: "A partir de R$ 150 em Vale Bônus"
      },
      apps: [
        { name: "Whatsapp", icon: Radio },
        { name: "Waze", icon: Globe },
      ],
      fiberApps: [
        { name: "Amazon Prime", icon: PlayCircle },
        { name: "Bancah", icon: Package },
      ],
      popular: true,
      gradient: "from-cyan-600 to-blue-700",
      badge: "MAIS VENDIDO"
    },
    {
      name: "Vivo Total Família 3",
      fiber: "180GB",
      mobile: "180GB",
      price: 330,
      features: {
        fiberData: "180GB Fibra",
        mobileData: "60GB por linha",
        calls: "100 min LDI",
        extraLines: "4 Linhas adicionais grátis",
        travel: "Vivo Travel Américas e Europa",
        bonus: "A partir de R$ 150 em Vale Bônus"
      },
      apps: [
        { name: "Whatsapp", icon: Radio },
        { name: "Waze", icon: Globe },
      ],
      fiberApps: [
        { name: "Amazon Prime", icon: PlayCircle },
        { name: "Bancah", icon: Package },
      ],
      popular: false,
      gradient: "from-green-600 to-emerald-700",
      badge: null
    },
    {
      name: "Vivo Total Família 4",
      fiber: "240GB",
      mobile: "240GB",
      price: 420,
      features: {
        fiberData: "240GB Fibra",
        mobileData: "60GB por linha",
        calls: "100 min LDI",
        extraLines: "4 Linhas adicionais grátis",
        travel: "Vivo Travel Américas e Europa",
        bonus: "A partir de R$ 150 em Vale Bônus"
      },
      apps: [
        { name: "Whatsapp", icon: Radio },
        { name: "Waze", icon: Globe },
      ],
      fiberApps: [
        { name: "Amazon Prime", icon: PlayCircle },
        { name: "Bancah", icon: Package },
      ],
      popular: false,
      gradient: "from-orange-600 to-red-600",
      badge: null
    },
    {
      name: "Vivo Total Família 5",
      fiber: "300GB",
      mobile: "300GB",
      price: 520,
      features: {
        fiberData: "300GB Fibra",
        mobileData: "60GB por linha",
        calls: "100 min LDI",
        extraLines: "4 Linhas adicionais grátis",
        travel: "Vivo Travel Américas e Europa",
        bonus: "A partir de R$ 150 em Vale Bônus"
      },
      apps: [
        { name: "Whatsapp", icon: Radio },
        { name: "Waze", icon: Globe },
      ],
      fiberApps: [
        { name: "Amazon Prime", icon: PlayCircle },
        { name: "Bancah", icon: Package },
      ],
      popular: false,
      gradient: "from-pink-600 to-purple-700",
      badge: null
    },
    {
      name: "Vivo V Premium",
      fiber: "600GB",
      mobile: "600GB",
      price: 1200,
      features: {
        fiberData: "600GB Fibra",
        mobileData: "600GB Móvel",
        calls: "1000 min LDI",
        extraLines: "10 Linhas adicionais grátis",
        travel: "Vivo Travel Mundo",
        bonus: "A partir de R$ 150 em Vale Bônus",
        premium: "Vivo Play TV Completo"
      },
      apps: [
        { name: "Whatsapp", icon: Radio },
        { name: "Waze", icon: Globe },
      ],
      fiberApps: [
        { name: "8+ Apps", icon: Crown },
      ],
      popular: false,
      gradient: "from-yellow-600 to-orange-700",
      badge: "PREMIUM"
    },
  ]

  const benefits = [
    {
      icon: Package,
      title: "Tudo em Um Só Plano",
      description: "Fibra ótica + internet móvel + apps premium em uma única conta",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Economia Garantida",
      description: "Desconto especial ao contratar fibra e móvel juntos",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Linhas Extras Grátis",
      description: "De 1 a 10 linhas adicionais sem custo dependendo do plano",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Roaming Internacional",
      description: "Conectado em mais de 200 países com Vivo Travel",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Gift,
      title: "Apps Premium Inclusos",
      description: "Amazon Prime, Bancah e muito mais sem custo adicional",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Suporte Unificado",
      description: "Um único atendimento para todos os seus serviços",
      color: "from-pink-500 to-purple-500"
    },
  ]

  const comboFeatures = [
    "Amazon Prime Video por 1 ano (planos Família)",
    "Vale Bônus a partir de R$ 150",
    "Sem taxa de adesão ou instalação",
    "Modem WiFi 6 incluso",
    "Portabilidade gratuita",
    "Débito automático disponível",
    "Fatura única simplificada",
    "Linhas adicionais grátis"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold">Combos Vivo Total - Fibra + Móvel</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Conectividade Total
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-2">
                  Para Toda Sua Casa
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Combine <strong>Internet Fibra Ótica + Internet Móvel</strong> em um único plano 
                e economize. Até <strong>600GB</strong> de internet, linhas extras grátis, 
                apps premium inclusos e muito mais!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#combos">
                  <button 
                    className="btn-primary-combo text-lg group"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Package className="w-5 h-5 mr-2" />
                    Ver Combos
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria%20-%20Gostaria%20de%20informações%20sobre%20Combos%20Vivo%20Total">
                  <button 
                    className="btn-outline-light-combo text-lg"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Falar com Especialista
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: Wifi, value: "600GB", label: "Fibra" },
                  { icon: Smartphone, value: "600GB", label: "Móvel" },
                  { icon: Award, value: "R$ 160", label: "A partir de" }
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
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
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Combo Completo</p>
                    <p className="text-white font-bold text-lg">Tudo que Você Precisa</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Home, name: "Internet Fibra Ótica", desc: "Até 600GB para casa" },
                    { icon: Signal, name: "Internet Móvel 5G", desc: "Até 600GB para celular" },
                    { icon: Users, name: "Linhas Extras Grátis", desc: "Até 10 linhas incluídas" },
                    { icon: PlayCircle, name: "Apps Premium", desc: "Amazon Prime e mais" }
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold">{item.name}</p>
                          <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                  <p className="text-white text-center text-sm">
                    <strong className="text-purple-400">Economize até R$ 200/mês</strong> contratando juntos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#combos" className="block">
            <div className="w-10 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/50 transition-colors">
              <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator" />
            </div>
          </a>
        </div>
      </section>

      {/* Seção de Combos */}
      <section id="combos" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Combos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Vivo Total
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Fibra Ótica + Internet Móvel + Apps Premium em um único plano
            </p>
            <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-6 py-3 border-2 border-green-200">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-green-700">1 Ano de Cortesia Amazon Prime nos planos Família</span>
            </div>
          </div>

          {/* Grid de Combos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {combos.slice(0, 4).map((combo, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCombo(index)}
                onMouseLeave={() => setHoveredCombo(null)}
                className={`
                  relative bg-white rounded-2xl border-2 transition-all duration-300 h-full
                  ${combo.popular 
                    ? 'border-purple-500 shadow-xl' 
                    : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                  }
                `}
              >
                {/* Badge */}
                {combo.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
                      <Star className="w-3 h-3" />
                      {combo.badge}
                    </div>
                  </div>
                )}

                <div className={`h-32 bg-gradient-to-br ${combo.gradient} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="flex gap-4 relative z-10">
                    <Wifi className="w-12 h-12 text-white" />
                    <Smartphone className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{combo.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center p-2 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{combo.fiber}</div>
                      <div className="text-xs text-gray-600">Fibra</div>
                    </div>
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{combo.mobile}</div>
                      <div className="text-xs text-gray-600">Móvel</div>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-purple-600 mb-6">
                    R$ {combo.price}
                    <span className="text-sm text-gray-600">/mês</span>
                  </div>

                  {combo.fiberApps.length > 0 && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-semibold text-blue-700">1 ano Amazon Prime</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{combo.features.calls}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{combo.features.extraLines}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{combo.features.travel}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{combo.features.bonus}</span>
                    </div>
                  </div>

                  <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20combo%20${combo.name}%20por%20R$%20${combo.price}`}>
                    <button className={`w-full combo-button ${combo.popular ? 'btn-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Contratar Combo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda linha de combos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {combos.slice(4).map((combo, index) => (
              <div
                key={index + 4}
                onMouseEnter={() => setHoveredCombo(index + 4)}
                onMouseLeave={() => setHoveredCombo(null)}
                className={`
                  relative bg-white rounded-2xl border-2 transition-all duration-300 h-full
                  ${combo.badge === 'PREMIUM'
                    ? 'border-yellow-500 shadow-xl' 
                    : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                  }
                `}
              >
                {/* Badge */}
                {combo.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`${combo.badge === 'PREMIUM' ? 'bg-gradient-to-r from-yellow-600 to-orange-600' : 'bg-gradient-to-r from-purple-600 to-pink-500'} text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg`}>
                      {combo.badge === 'PREMIUM' ? <Crown className="w-3 h-3" /> : <Star className="w-3 h-3" />}
                      {combo.badge}
                    </div>
                  </div>
                )}

                <div className={`h-32 bg-gradient-to-br ${combo.gradient} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="flex gap-4 relative z-10">
                    <Wifi className="w-12 h-12 text-white" />
                    <Smartphone className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{combo.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center p-2 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{combo.fiber}</div>
                      <div className="text-xs text-gray-600">Fibra</div>
                    </div>
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{combo.mobile}</div>
                      <div className="text-xs text-gray-600">Móvel</div>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-purple-600 mb-6">
                    R$ {combo.price}
                    <span className="text-sm text-gray-600">/mês</span>
                  </div>

                  {combo.features.premium && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                      <div className="flex items-center gap-2">
                        <Tv className="w-4 h-4 text-yellow-700 flex-shrink-0" />
                        <span className="text-xs font-semibold text-yellow-700">{combo.features.premium}</span>
                      </div>
                    </div>
                  )}

                  {combo.fiberApps.length > 0 && !combo.features.premium && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-semibold text-blue-700">1 ano Amazon Prime</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{combo.features.calls}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{combo.features.extraLines}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{combo.features.travel}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{combo.features.bonus}</span>
                    </div>
                  </div>

                  <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20combo%20${combo.name}%20por%20R$%20${combo.price}`}>
                    <button className={`w-full combo-button ${combo.badge === 'PREMIUM' ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Contratar Combo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vantagens dos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Combos Vivo Total
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Incluso
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-purple-100">
            <div className="grid md:grid-cols-2 gap-4">
              {comboFeatures.map((feature, index) => (
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
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conectividade Completa para Sua Casa!
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contrate agora um Combo Vivo Total e tenha internet fibra + móvel + apps premium 
            com economia garantida e linhas extras grátis
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20contratar%20Combo%20Vivo%20Total">
              <button 
                className="btn-primary-cta-combo text-lg group shadow-2xl"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Package className="w-5 h-5 mr-2" />
                Contratar Combo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Gostaria%20de%20tirar%20dúvidas%20sobre%20Combos">
              <button 
                className="btn-outline-light-cta-combo text-lg"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Tirar Dúvidas
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <span>Economia Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <span>Linhas Extras Grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <span>Amazon Prime Incluso</span>
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

        /* Botões da página Combo - tamanhos idênticos */
        .btn-primary-combo {
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

        .btn-primary-combo:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-combo {
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

        .btn-outline-light-combo:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página Combo - tamanhos idênticos */
        .btn-primary-cta-combo {
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

        .btn-primary-cta-combo:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cta-combo {
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

        .btn-outline-light-cta-combo:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões dos combos - estilos específicos */
        .combo-button {
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

        .combo-button:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
