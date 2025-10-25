"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Smartphone, Check, ArrowRight, Zap, Users, TrendingUp, Shield,
  Building2, Briefcase, Globe, Headphones, Lock, BarChart3,
  CheckCircle2, Sparkles, Target, Award, FileCheck, Settings,
  Phone, Wifi, Signal, Clock, CreditCard, ChevronRight,
  Star
} from "lucide-react"

export default function EmpresaMovelPage() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  // Planos baseados na imagem (10GB + 3GB bônus)
  const mobilePlans = [
    {
      name: "Controle 6GB",
      totalData: "9GB",
      baseData: "6GB",
      bonusData: "+ 3GB",
      price: 39.99,
      lines: "Até 10 linhas",
      features: {
        data: "6GB + 3GB bônus débito",
        calls: "Ligações ilimitadas",
        sms: "SMS ilimitado",
        apps: "WhatsApp e Waze ilimitados",
        roaming: "Roaming nacional",
        management: "Painel de gestão básico",
        support: "Suporte 24/7",
        portability: "Portabilidade grátis"
      },
      highlights: [
        "Ideal para pequenos negócios",
        "Apps sociais ilimitados",
        "Fatura unificada"
      ],
      popular: false,
      gradient: "from-green-600 to-emerald-700"
    },
    {
      name: "Controle 15GB",
      totalData: "18GB",
      baseData: "15GB",
      bonusData: "+ 3GB",
      price: 54.99,
      lines: "Até 25 linhas",
      features: {
        data: "15GB + 3GB bônus débito",
        calls: "Ligações ilimitadas",
        sms: "SMS ilimitado",
        apps: "Redes sociais ilimitadas",
        roaming: "Roaming nacional",
        management: "Painel de gestão avançado",
        support: "Suporte prioritário",
        portability: "Portabilidade grátis",
        extras: "Bônus de dados adicional"
      },
      highlights: [
        "Ótimo custo-benefício",
        "Gestão centralizada",
        "Relatórios de consumo"
      ],
      popular: true,
      gradient: "from-blue-600 to-cyan-700"
    },
    {
      name: "Controle 20GB",
      totalData: "23GB",
      baseData: "20GB",
      bonusData: "+ 3GB",
      price: 59.99,
      lines: "Até 50 linhas",
      features: {
        data: "20GB + 3GB bônus débito",
        calls: "Ligações ilimitadas Brasil",
        sms: "SMS ilimitado",
        apps: "Apps premium ilimitados",
        roaming: "Roaming nacional + América",
        management: "Gestão enterprise",
        support: "Suporte VIP 24/7",
        portability: "Migração assistida",
        extras: "Linha backup inclusa"
      },
      highlights: [
        "Melhor para médias empresas",
        "Roaming internacional",
        "Consultoria inclusa"
      ],
      popular: false,
      gradient: "from-purple-600 to-pink-700"
    },
    {
      name: "Controle 30GB",
      totalData: "33GB",
      baseData: "30GB",
      bonusData: "+ 3GB",
      price: 69.99,
      lines: "Até 100 linhas",
      features: {
        data: "30GB + 3GB bônus débito",
        calls: "Ligações ilimitadas Brasil",
        sms: "SMS ilimitado",
        apps: "Todos os apps ilimitados",
        roaming: "Roaming América do Sul",
        management: "Plataforma corporativa",
        support: "Gerente de conta dedicado",
        portability: "Migração sem custo",
        extras: "5 linhas backup",
        priority: "Rede prioritária 5G"
      },
      highlights: [
        "Ideal para grandes equipes",
        "Gerente dedicado",
        "Prioridade 5G"
      ],
      popular: false,
      gradient: "from-orange-600 to-red-700"
    },
    {
      name: "Controle 40GB",
      totalData: "43GB",
      baseData: "40GB",
      bonusData: "+ 3GB",
      price: 79.99,
      lines: "Ilimitadas",
      features: {
        data: "40GB + 3GB bônus débito",
        calls: "Ligações internacionais",
        sms: "SMS global ilimitado",
        apps: "Todos os apps sem limite",
        roaming: "Roaming mundial",
        management: "Suite completa de gestão",
        support: "Suporte VIP exclusivo",
        portability: "Migração premium",
        extras: "10 linhas backup",
        priority: "5G prioritário nacional",
        consulting: "Consultoria mensal"
      },
      highlights: [
        "Solução corporativa completa",
        "Roaming global",
        "Suite enterprise"
      ],
      popular: false,
      gradient: "from-indigo-600 to-purple-700"
    },
  ]

  const benefits = [
    {
      icon: Signal,
      title: "Cobertura 5G Nacional",
      description: "Rede de última geração com cobertura em todas as capitais e principais cidades",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Gestão Centralizada",
      description: "Plataforma web para gerenciar todas as linhas, consumo e custos em tempo real",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Segurança Corporativa",
      description: "Proteção avançada com VPN, controle de acesso e políticas de segurança",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade Total",
      description: "Adicione ou remova linhas conforme necessário sem burocracia",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada com atendimento prioritário para empresas",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Análises completas de consumo, custos e produtividade por colaborador",
      color: "from-pink-500 to-purple-500"
    },
  ]

  const features = [
    {
      icon: CreditCard,
      title: "Débito Automático",
      description: "+3GB de bônus ao ativar",
      highlight: true
    },
    {
      icon: Globe,
      title: "Roaming Nacional",
      description: "Use em todo Brasil"
    },
    {
      icon: Smartphone,
      title: "Apps Ilimitados",
      description: "WhatsApp, Waze e mais"
    },
    {
      icon: Lock,
      title: "VPN Corporativa",
      description: "Acesso seguro incluso"
    },
    {
      icon: FileCheck,
      title: "Fatura Unificada",
      description: "Uma conta para todas as linhas"
    },
    {
      icon: Settings,
      title: "Painel de Controle",
      description: "Gestão online completa"
    }
  ]

  const differentials = [
    "Portabilidade sem custo e sem burocracia",
    "Migração assistida com suporte técnico",
    "Sem taxa de adesão ou ativação",
    "Fatura digital e gerenciamento online",
    "Controle de gastos por centro de custo",
    "Bloqueio de roaming internacional",
    "Políticas de uso personalizadas",
    "Relatórios mensais de consumo",
    "API para integração com sistemas",
    "Gerente de conta dedicado"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold">Planos Controle Corporativo Vivo Empresas</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Internet Móvel
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">
                  Para Sua Equipe
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Planos corporativos com <strong>até 43GB por linha</strong>, cobertura 5G nacional, 
                gestão centralizada e <strong>+3GB de bônus</strong> no débito automático
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#planos">
                  <button 
                    className="btn-primary-empresa-movel text-lg group whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Briefcase className="w-5 h-5 mr-2" />
                    Ver Planos Corporativos
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria%20-%20Gostaria%20de%20um%20orçamento%20para%20Internet%20Móvel%20Corporativa">
                  <button 
                    className="btn-outline-light-empresa-movel text-lg whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Solicitar Orçamento
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: Smartphone, value: "43GB", label: "Por Linha" },
                  { icon: Signal, value: "5G", label: "Cobertura" },
                  { icon: Award, value: "R$ 39,99", label: "A partir de" }
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold whitespace-nowrap">{stat.value}</div>
                      <div className="text-sm text-white/60 whitespace-nowrap">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="animate-slide-right">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Vantagens Corporativas</p>
                    <p className="text-white font-bold text-lg">Gestão Completa</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {features.slice(0, 4).map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                        <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                        <p className="text-white font-semibold text-sm">{feature.title}</p>
                        <p className="text-white/60 text-xs mt-1">{feature.description}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-3">
                  {[
                    "Gestão online de todas as linhas",
                    "Relatórios detalhados de consumo",
                    "Fatura unificada mensal",
                    "Suporte técnico especializado"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Controle Corporativo
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Internet móvel com gestão empresarial e +3GB de bônus
            </p>
            <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-6 py-3 border-2 border-green-200">
              <CreditCard className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-green-700">+3GB de bônus com débito automático em todos os planos</span>
            </div>
          </div>

          {/* Grid de Planos - 5 planos em layout responsivo */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {mobilePlans.map((plan, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`
                  relative bg-white rounded-2xl border-2 transition-all duration-300 h-full
                  ${plan.popular 
                    ? 'border-blue-500 shadow-2xl' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                  }
                `}
              >
                {/* Badge Popular */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
                      <Star className="w-3 h-3" />
                      POPULAR
                    </div>
                  </div>
                )}

                <div className={`h-32 bg-gradient-to-br ${plan.gradient} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" />
                  <Smartphone className="w-14 h-14 text-white relative z-10" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-blue-600">{plan.totalData}</div>
                    <div className="text-xs text-gray-500">{plan.baseData} {plan.bonusData}</div>
                    <div className="text-xs text-gray-600 mt-1">{plan.lines}</div>
                  </div>

                  <div className="mb-6 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Por linha/mês</div>
                      <div className="text-2xl font-bold text-gray-900">
                        R$ {plan.price.toFixed(2).replace('.', ',')}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 text-sm">
                    {Object.entries(plan.features).slice(0, 5).map(([key, value], i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs leading-tight">{value}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20${plan.name}`}>
                    <button className={`w-full text-sm empresa-movel-button ${plan.popular ? 'btn-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Contratar
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
              Vantagens{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Corporativas
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
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
              Incluído em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Todos os Planos
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100">
            <div className="grid md:grid-cols-2 gap-4">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conecte Toda Sua Equipe com a Melhor Rede 5G!
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Fale com nossos especialistas e receba uma proposta personalizada 
            com os melhores planos corporativos do mercado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20para%20Internet%20Móvel%20Corporativa">
              <button 
                className="btn-primary-cta-empresa-movel text-lg group shadow-2xl whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Gostaria%20de%20agendar%20uma%20consultoria">
              <button 
                className="btn-outline-light-cta-empresa-movel text-lg whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Agendar Consultoria
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span>+3GB Bônus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span>5G Nacional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span>Gestão Online</span>
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

        /* Botões da página Móvel Empresarial - tamanhos idênticos */
        .btn-primary-empresa-movel {
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

        .btn-primary-empresa-movel:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-empresa-movel {
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

        .btn-outline-light-empresa-movel:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página Móvel Empresarial - tamanhos idênticos */
        .btn-primary-cta-empresa-movel {
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

        .btn-primary-cta-empresa-movel:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cta-empresa-movel {
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

        .btn-outline-light-cta-empresa-movel:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões dos planos empresariais - estilos específicos */
        .empresa-movel-button {
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

        .empresa-movel-button:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
