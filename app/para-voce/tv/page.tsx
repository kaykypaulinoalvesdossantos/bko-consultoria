"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Tv, Check, ArrowRight, Zap, Globe, Users, Shield,
  PlayCircle, Film, Star, Award, Gift, CheckCircle2, Sparkles,
  Monitor, Radio, Video, Chrome, Smartphone, Tablet, Laptop,
  Trophy, Target, TrendingUp, Eye, Clock, Wifi
} from "lucide-react"

export default function TVPage() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  // Planos Vivo Play TV baseados na imagem
  const tvPlans = [
    {
      name: "Vivo Play App Inicial",
      channels: "Mais de 40 canais",
      price: 40,
      features: {
        channelCount: "40+ canais ao vivo",
        quality: "Qualidade HD",
        devices: "2 dispositivos simultâneos",
        onDemand: "Conteúdo sob demanda",
        download: "Download de conteúdo",
        ads: "Com anúncios"
      },
      highlights: [
        "Canais abertos e fechados",
        "Assista no app",
        "Gravação na nuvem",
        "Pause e volte"
      ],
      popular: false,
      gradient: "from-pink-600 to-rose-700",
      badge: null
    },
    {
      name: "Vivo Play App Estendido",
      channels: "Mais de 80 canais",
      price: 60,
      features: {
        channelCount: "80+ canais ao vivo",
        quality: "Qualidade Full HD",
        devices: "3 dispositivos simultâneos",
        onDemand: "Conteúdo sob demanda",
        download: "Download ilimitado",
        ads: "Sem anúncios"
      },
      highlights: [
        "Todos os canais premium",
        "Esportes ao vivo",
        "Filmes e séries",
        "Canais infantis"
      ],
      popular: false,
      gradient: "from-purple-600 to-indigo-700",
      badge: null
    },
    {
      name: "Vivo Play TV Avançado",
      channels: "Mais de 120 canais",
      price: 145,
      deviceBonus: "1 Stick por R$ 15 ou 2 por R$ 30",
      features: {
        channelCount: "120+ canais ao vivo",
        quality: "4K Ultra HD",
        devices: "4 dispositivos simultâneos",
        onDemand: "Biblioteca completa",
        download: "Download ilimitado",
        ads: "Sem anúncios",
        stick: "Chromecast incluso"
      },
      highlights: [
        "Canais premium inclusos",
        "Esportes em 4K",
        "HBO, Fox, ESPN",
        "Controle parental"
      ],
      popular: true,
      gradient: "from-blue-600 to-cyan-700",
      badge: "MAIS POPULAR"
    },
    {
      name: "Vivo Play TV Avançado",
      channels: "Mais de 120 canais",
      price: 170,
      deviceBonus: "1 ponto adicional grátis",
      features: {
        channelCount: "120+ canais ao vivo",
        quality: "4K Ultra HD",
        devices: "5 dispositivos simultâneos",
        onDemand: "Biblioteca completa",
        download: "Download ilimitado",
        ads: "Sem anúncios",
        stick: "1 ponto TV adicional"
      },
      highlights: [
        "Ponto adicional grátis",
        "Multiroom incluso",
        "Gravação ilimitada",
        "Replay 7 dias"
      ],
      popular: false,
      gradient: "from-cyan-600 to-teal-700",
      badge: null
    },
    {
      name: "Vivo Play TV Completo",
      channels: "Mais de 140 canais",
      price: 225,
      deviceBonus: "1 Stick por R$ 15 ou 2 por R$ 30",
      features: {
        channelCount: "140+ canais ao vivo",
        quality: "4K Ultra HD Premium",
        devices: "5 dispositivos simultâneos",
        onDemand: "Biblioteca premium completa",
        download: "Download ilimitado",
        ads: "Sem anúncios",
        stick: "Chromecast 4K incluso",
        premium: "Canais premium inclusos"
      },
      highlights: [
        "Telecine completo",
        "Premiere FC",
        "Canais internacionais",
        "Conteúdo 4K exclusivo"
      ],
      popular: false,
      gradient: "from-orange-600 to-red-700",
      badge: null
    },
    {
      name: "Vivo Play TV Completo",
      channels: "Mais de 140 canais",
      price: 295,
      deviceBonus: "3 pontos adicionais grátis",
      features: {
        channelCount: "140+ canais ao vivo",
        quality: "4K Ultra HD Premium",
        devices: "Ilimitados",
        onDemand: "Biblioteca premium completa",
        download: "Download ilimitado",
        ads: "Sem anúncios",
        stick: "3 pontos TV inclusos",
        premium: "Todos os canais premium"
      },
      highlights: [
        "Melhor plano completo",
        "Todos os esportes",
        "Todos os filmes",
        "Casa toda conectada"
      ],
      popular: false,
      gradient: "from-red-600 to-pink-700",
      badge: "PREMIUM"
    },
  ]

  const benefits = [
    {
      icon: Tv,
      title: "140+ Canais ao Vivo",
      description: "Os melhores canais de esportes, filmes, séries, notícias e infantil",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Qualidade 4K",
      description: "Imagem ultra HD com a melhor qualidade disponível",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "Multiplataforma",
      description: "Assista na TV, celular, tablet ou computador",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: PlayCircle,
      title: "Conteúdo On Demand",
      description: "Milhares de filmes e séries disponíveis quando quiser",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Gravação na Nuvem",
      description: "Grave seus programas favoritos e assista depois",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Trophy,
      title: "Esportes ao Vivo",
      description: "Campeonatos, jogos e eventos esportivos em tempo real",
      color: "from-pink-500 to-purple-500"
    },
  ]

  const channels = [
    { category: "Esportes", items: ["ESPN", "Fox Sports", "SporTV", "Premiere FC", "Combate"] },
    { category: "Filmes & Séries", items: ["HBO", "Telecine", "Fox", "Warner", "Universal"] },
    { category: "Infantil", items: ["Cartoon Network", "Disney Channel", "Nickelodeon", "Discovery Kids", "Gloob"] },
    { category: "Notícias", items: ["Globo News", "CNN Brasil", "Band News", "Record News", "Jovem Pan"] },
    { category: "Entretenimento", items: ["Multishow", "GNT", "Comedy Central", "E!", "TLC"] },
    { category: "Documentários", items: ["National Geographic", "Discovery", "History", "Animal Planet", "H2"] }
  ]

  const devices = [
    { icon: Tv, name: "Smart TV", desc: "App nativo" },
    { icon: Smartphone, name: "Smartphone", desc: "iOS e Android" },
    { icon: Tablet, name: "Tablet", desc: "iPad e Android" },
    { icon: Laptop, name: "Computador", desc: "Web browser" },
    { icon: Chrome, name: "Chromecast", desc: "Streaming" },
    { icon: Monitor, name: "Apple TV", desc: "tvOS" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="text-sm font-bold">Vivo Play TV - Streaming + TV por Assinatura</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                TV Por Assinatura
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mt-2">
                  Completa e Digital
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Assista até <strong>140+ canais ao vivo</strong> em qualidade 4K, com milhares 
                de filmes e séries sob demanda. Compatível com <strong>TV, celular, tablet e 
                computador</strong>. Sem instalação, sem parabólica!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#planos">
                  <button 
                    className="btn-primary-tv text-lg group"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Tv className="w-5 h-5 mr-2" />
                    Ver Planos
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria%20-%20Gostaria%20de%20informações%20sobre%20Vivo%20Play%20TV">
                  <button 
                    className="btn-outline-light-tv text-lg"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Falar com Especialista
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: Tv, value: "140+", label: "Canais" },
                  { icon: Video, value: "4K", label: "Ultra HD" },
                  { icon: Award, value: "R$ 40", label: "A partir de" }
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
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
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Assista Onde Quiser</p>
                    <p className="text-white font-bold text-lg">Multiplataforma</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {devices.slice(0, 4).map((device, index) => {
                    const Icon = device.icon
                    return (
                      <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                        <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                        <p className="text-white font-semibold text-sm">{device.name}</p>
                        <p className="text-white/60 text-xs">{device.desc}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-3">
                  {[
                    "Qualidade 4K Ultra HD",
                    "Gravação na nuvem ilimitada",
                    "Pause, volte e avance ao vivo",
                    "Download de conteúdo offline"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#planos" className="block">
            <div className="w-10 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/50 transition-colors">
              <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator" />
            </div>
          </a>
        </div>
      </section>

      {/* Seção de Planos */}
      <section id="planos" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Planos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500">
                Vivo Play TV
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Escolha o plano ideal para sua casa
            </p>
          </div>

          {/* Grid de Planos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {tvPlans.map((plan, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`
                  relative bg-white rounded-2xl border-2 transition-all duration-300 h-full
                  ${plan.popular 
                    ? 'border-purple-500 shadow-xl' 
                    : plan.badge === 'PREMIUM'
                    ? 'border-pink-500 shadow-xl'
                    : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                  }
                `}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`${plan.badge === 'PREMIUM' ? 'bg-gradient-to-r from-pink-600 to-rose-600' : 'bg-gradient-to-r from-purple-600 to-pink-500'} text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg`}>
                      <Star className="w-3 h-3" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className={`h-32 bg-gradient-to-br ${plan.gradient} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" />
                  <Tv className="w-16 h-16 text-white relative z-10" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-4">
                    <div className="text-lg font-bold text-purple-600">{plan.channels}</div>
                    {plan.deviceBonus && (
                      <div className="text-xs text-gray-600 mt-1">{plan.deviceBonus}</div>
                    )}
                  </div>

                  <div className="text-3xl font-bold text-purple-600 mb-6">
                    R$ {plan.price}
                    <span className="text-sm text-gray-600">/mês</span>
                  </div>

                  <div className="space-y-2 mb-6 text-sm">
                    {Object.entries(plan.features).map(([key, value], i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-700">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 p-3 bg-purple-50 rounded-xl">
                    <p className="text-xs font-semibold text-purple-700 mb-2">Destaques:</p>
                    <div className="space-y-1">
                      {plan.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Star className="w-3 h-3 text-purple-600" />
                          <span className="text-xs text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20${plan.name}%20por%20R$%20${plan.price}`}>
                    <button className={`w-full tv-button ${plan.popular || plan.badge === 'PREMIUM' ? 'btn-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Contratar Plano
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canais por Categoria */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Canais por{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500">
                Categoria
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Os melhores canais organizados para você
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <Tv className="w-6 h-6 text-purple-600" />
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.items.map((channel, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <Radio className="w-4 h-4 text-purple-600" />
                      <span>{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vantagens do{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500">
                Vivo Play TV
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

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforme Sua Experiência de TV!
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contrate agora o Vivo Play TV e tenha acesso aos melhores canais, 
            filmes, séries e esportes em qualidade 4K
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20contratar%20Vivo%20Play%20TV">
              <button 
                className="btn-primary-cta-tv text-lg group shadow-2xl"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Tv className="w-5 h-5 mr-2" />
                Contratar Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Gostaria%20de%20tirar%20dúvidas%20sobre%20Vivo%20Play%20TV">
              <button 
                className="btn-outline-light-cta-tv text-lg"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Tirar Dúvidas
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pink-400" />
              <span>Sem Instalação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pink-400" />
              <span>Qualidade 4K</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pink-400" />
              <span>140+ Canais</span>
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

        /* Botões da página TV - tamanhos idênticos */
        .btn-primary-tv {
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

        .btn-primary-tv:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-tv {
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

        .btn-outline-light-tv:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página TV - tamanhos idênticos */
        .btn-primary-cta-tv {
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

        .btn-primary-cta-tv:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cta-tv {
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

        .btn-outline-light-cta-tv:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões dos planos TV - estilos específicos */
        .tv-button {
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

        .tv-button:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
