"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Wifi, Check, ArrowRight, Zap, Shield, Users, Tv, Star,
  Play, Music, Film, Smartphone, Youtube, MonitorPlay, CheckCircle2,
  Gift, TrendingUp, Clock, Award, Download, Upload, Sparkles
} from "lucide-react"

export default function FibraPessoaFisicaPage() {
  const [selectedSpeed, setSelectedSpeed] = useState("600 MEGA")

  // Planos organizados de forma mais clara
  const speedPlans = {
    "500 MEGA": {
      speed: "500 MB",
      description: "Ideal para casas com 2-3 pessoas",
      appsIncluded: ["Vivo Fibra", "Amazon Prime (1 ano)"],
      plans: [
        { name: "Sem Streaming", price: 100, apps: [] },
        { name: "Amazon Prime", price: 100, apps: ["Amazon Prime"], popular: false },
        { name: "Globoplay", price: 147.90, apps: ["Globoplay"] },
        { name: "Disney+", price: 163.90, apps: ["Disney+"] },
        { name: "Netflix", price: 164.90, apps: ["Netflix"] },
        { name: "Netflix Premium", price: 179.90, apps: ["Netflix Premium"] },
      ]
    },
    "600 MEGA": {
      speed: "600 MB",
      description: "Perfeito para famílias com 4-5 pessoas",
      appsIncluded: ["Vivo Fibra", "Amazon Prime (1 ano)", "Paramount+", "Skeelo"],
      plans: [
        { name: "Sem Streaming", price: 120, apps: [] },
        { name: "Amazon Prime", price: 120, apps: ["Amazon Prime"] },
        { name: "Fibra Gamer", price: 140, apps: ["Exit Lag"], popular: true },
        { name: "Globoplay", price: 147.90, apps: ["Globoplay"] },
        { name: "Disney+", price: 163.90, apps: ["Disney+"] },
        { name: "Netflix", price: 164.90, apps: ["Netflix"] },
        { name: "Netflix Premium", price: 179.90, apps: ["Netflix Premium"] },
      ]
    },
    "700 MEGA": {
      speed: "700 MB",
      description: "Ótimo para casas conectadas",
      appsIncluded: ["Vivo Fibra", "Amazon Prime (1 ano)", "Paramount+", "Skeelo", "Deezer"],
      plans: [
        { name: "Sem Streaming", price: 150, apps: [] },
        { name: "Amazon Prime", price: 150, apps: ["Amazon Prime"] },
        { name: "Fibra Gamer", price: 170, apps: ["Exit Lag"], popular: true },
        { name: "Globoplay", price: 165, apps: ["Globoplay"] },
        { name: "Disney+", price: 175, apps: ["Disney+"] },
        { name: "Netflix", price: 180, apps: ["Netflix"] },
        { name: "Netflix Premium", price: 190, apps: ["Netflix Premium"] },
      ]
    },
    "1 GIGA": {
      speed: "1 GB",
      description: "Máxima velocidade para sua casa",
      appsIncluded: ["Vivo Fibra", "Amazon Prime (1 ano)", "Paramount+", "Skeelo", "Deezer", "Bancah"],
      plans: [
        { name: "Sem Streaming", price: 300, apps: [] },
        { name: "Amazon Prime", price: 300, apps: ["Amazon Prime"] },
        { name: "Globoplay", price: 315, apps: ["Globoplay"] },
        { name: "Fibra Gamer", price: 320, apps: ["Exit Lag"] },
        { name: "Disney+", price: 325, apps: ["Disney+"], popular: true },
        { name: "Netflix", price: 330, apps: ["Netflix"] },
        { name: "Netflix Premium", price: 340, apps: ["Netflix Premium"] },
      ]
    },
  }

  const streamingBenefits = [
    {
      name: "Amazon Prime Video",
      icon: "🎬",
      description: "Séries e filmes originais + Amazon Prime Grátis",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Globoplay",
      icon: "📺",
      description: "Novelas, séries e conteúdo ao vivo da Globo",
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Disney+",
      icon: "✨",
      description: "Marvel, Star Wars, Pixar e muito mais",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      name: "Netflix",
      icon: "🎥",
      description: "Catálogo completo de séries e filmes",
      gradient: "from-red-600 to-red-700"
    },
    {
      name: "Paramount+",
      icon: "⭐",
      description: "Filmes, séries e esportes ao vivo",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Deezer",
      icon: "🎵",
      description: "Música ilimitada sem anúncios",
      gradient: "from-purple-500 to-pink-500"
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Velocidade Real",
      description: "Velocidade garantida via fibra óptica, sem oscilações",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "99.9% de Disponibilidade",
      description: "Conexão estável e confiável o tempo todo",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Download,
      title: "Download Ilimitado",
      description: "Sem limite de franquia para downloads",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Gift,
      title: "Apps Inclusos",
      description: "Streamings e apps premium sem custo adicional",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wifi,
      title: "WiFi 6 Gratuito",
      description: "Modem moderno com a melhor tecnologia",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Suporte 24/7",
      description: "Atendimento técnico sempre que precisar",
      color: "from-orange-500 to-red-500",
    },
  ]

  const features = [
    "Instalação gratuita em até 48 horas",
    "Modem WiFi 6 incluso (valor de R$ 400)",
    "Sem taxa de adesão ou fidelidade",
    "Velocidade simétrica (download = upload)",
    "Suporte técnico 24 horas por dia",
    "Garantia de estabilidade",
    "Apps de streaming inclusos nos planos",
    "Migração gratuita de operadora"
  ]

  const currentPlan = speedPlans[selectedSpeed as keyof typeof speedPlans]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold">Planos Residenciais com Streamings Inclusos</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Internet Fibra Ótica
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Para Sua Casa
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Velocidades de <strong>500 MB a 1 GB</strong> com streamings premium inclusos. 
                Escolha o plano perfeito para sua família e aproveite Netflix, Disney+, Amazon Prime e muito mais!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#planos">
                  <button 
                    className="btn-primary-fibra text-lg group"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Wifi className="w-5 h-5 mr-2" />
                    Ver Planos
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria%20-%20Gostaria%20de%20informações%20sobre%20Fibra%20Residencial">
                  <button 
                    className="btn-outline-light-fibra text-lg"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Falar com Especialista
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: Zap, value: "1 GB", label: "Velocidade" },
                  { icon: Star, value: "6+", label: "Apps Inclusos" },
                  { icon: Award, value: "R$ 100", label: "A partir de" }
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
                    <p className="text-white/60 text-sm">Oferta Especial</p>
                    <p className="text-white font-bold text-lg">Streamings Inclusos</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {streamingBenefits.slice(0, 4).map((streaming, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-3xl">{streaming.icon}</div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">{streaming.name}</p>
                        <p className="text-white/60 text-sm">{streaming.description}</p>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/30">
                  <p className="text-white text-center">
                    <strong className="text-cyan-400">+ Mais apps inclusos</strong> dependendo do plano escolhido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Streamings */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apps de Streaming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Inclusos
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Aproveite seus streamings favoritos sem custo adicional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streamingBenefits.map((streaming, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${streaming.gradient} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {streaming.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{streaming.name}</h3>
                <p className="text-gray-600">{streaming.description}</p>
                <div className="mt-4 flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-semibold">Incluso nos planos</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO DE PLANOS - REDESENHADA */}
      <section id="planos" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Escolha Sua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Velocidade
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Selecione a velocidade ideal e depois escolha o streaming que preferir
            </p>
          </div>

          {/* Tabs de Velocidade */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-2xl p-2 gap-2">
              {Object.keys(speedPlans).map((speed) => (
                <button
                  key={speed}
                  onClick={() => setSelectedSpeed(speed)}
                  className={`
                    px-6 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer
                    ${selectedSpeed === speed 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  {speed}
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Plano Selecionado */}
          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-3xl p-8 mb-12 border-2 border-purple-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Wifi className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{currentPlan.speed}</h3>
                  <p className="text-gray-600">{currentPlan.description}</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm font-semibold text-gray-700 mb-2">Apps já inclusos:</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                  {currentPlan.appsIncluded.map((app, index) => (
                    <span key={index} className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-purple-700 border border-purple-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cards dos Planos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentPlan.plans.map((plan, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl p-6 border-2 transition-all duration-300
                  ${plan.popular 
                    ? 'border-purple-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Tv className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">
                    {plan.name}
                  </h4>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    R$ {plan.price.toFixed(2).replace('.', ',')}
                  </div>
                  <div className="text-sm text-gray-600">por mês</div>
                </div>

                {plan.apps.length > 0 && (
                  <div className="mb-6 p-3 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">
                        + {plan.apps[0]} incluso
                      </span>
                    </div>
                  </div>
                )}

                <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20${selectedSpeed}%20${plan.name}%20por%20R$%20${plan.price}`}>
                  <button className={`w-full plan-button ${plan.popular ? 'btn-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                    <ArrowRight className="w-5 h-5" />
                    Contratar Agora
                  </button>
                </Link>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Instalação grátis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>WiFi 6 incluso</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Sem fidelidade</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Observação */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              * Todos os planos incluem Vivo Fibra + Amazon Prime (1 ano). Apps adicionais variam por velocidade.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vantagens da{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Nossa Fibra
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
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Turbinar Sua Internet?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contrate agora e ganhe instalação gratuita + modem WiFi 6 + streamings inclusos.
            Aproveite essa oferta especial!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20contratar%20Fibra%20Ótica%20Residencial">
              <button 
                className="btn-primary-cta-fibra text-lg group shadow-2xl"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Wifi className="w-5 h-5 mr-2" />
                Contratar Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Gostaria%20de%20tirar%20dúvidas%20sobre%20Fibra%20Residencial">
              <button 
                className="btn-outline-light-cta-fibra text-lg"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Tirar Dúvidas
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Instalação Grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Sem Taxa de Adesão</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Modem WiFi 6 Incluso</span>
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

        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
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
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%);
        }

        /* Botões da página Fibra - tamanhos idênticos */
        .btn-primary-fibra {
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

        .btn-primary-fibra:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-fibra {
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

        .btn-outline-light-fibra:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página Fibra - tamanhos idênticos */
        .btn-primary-cta-fibra {
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

        .btn-primary-cta-fibra:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cta-fibra {
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

        .btn-outline-light-cta-fibra:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões dos planos - estilos específicos */
        .plan-button {
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

        .plan-button:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
