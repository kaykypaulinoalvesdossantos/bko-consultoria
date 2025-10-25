"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Wifi, Check, ArrowRight, Zap, Shield, Users, TrendingUp,
  Building2, Briefcase, Clock, Award, Target, Globe,
  Headphones, Lock, Server, Cloud, Gauge, FileCheck,
  CheckCircle2, Sparkles, BarChart3, Settings, Network,
  Phone, Mail, MapPin, ChevronRight, Video, Star
} from "lucide-react"

export default function FibraEmpresaPage() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  // Planos baseados na imagem fornecida
  const businessPlans = [
    {
      name: "Business 600",
      speed: "600 MB",
      price: 89.99,
      users: "Até 20 usuários",
      features: {
        bandwidth: "600 Mbps dedicados",
        sla: "SLA 99.5%",
        support: "Suporte 24/7",
        installation: "Instalação gratuita",
        equipment: "Modem corporativo WiFi 6",
        ips: "1 IP fixo incluso",
        security: "Firewall básico",
        monitoring: "Monitoramento remoto"
      },
      highlights: [
        "Ideal para pequenos escritórios",
        "Videoconferências em HD",
        "Cloud computing básico",
        "E-mail corporativo ilimitado"
      ],
      popular: false,
      gradient: "from-blue-600 to-cyan-600",
      icon: Building2
    },
    {
      name: "Business 700",
      speed: "700 MB",
      price: 99.99,
      users: "Até 50 usuários",
      features: {
        bandwidth: "700 Mbps dedicados",
        sla: "SLA 99.7%",
        support: "Suporte prioritário 24/7",
        installation: "Instalação gratuita",
        equipment: "Modem corporativo WiFi 6E",
        ips: "2 IPs fixos inclusos",
        security: "Firewall avançado",
        monitoring: "Monitoramento 24/7",
        redundancy: "Backup automático"
      },
      highlights: [
        "Perfeito para médias empresas",
        "Múltiplas videoconferências 4K",
        "ERP e sistemas em nuvem",
        "VPN corporativa inclusa"
      ],
      popular: true,
      gradient: "from-purple-600 to-pink-600",
      icon: Briefcase
    },
    {
      name: "Business 1 GIGA",
      speed: "1 GB",
      price: 299.99,
      users: "100+ usuários",
      features: {
        bandwidth: "1 Gbps full dedicado",
        sla: "SLA 99.9%",
        support: "Suporte VIP exclusivo",
        installation: "Instalação e projeto grátis",
        equipment: "Infraestrutura completa",
        ips: "5 IPs fixos inclusos",
        security: "Firewall enterprise + UTM",
        monitoring: "NOC 24/7 dedicado",
        redundancy: "Link redundante incluso",
        consulting: "Consultoria técnica mensal"
      },
      highlights: [
        "Ideal para grandes corporações",
        "Data center e servidores",
        "Aplicações críticas",
        "Streaming e broadcasting"
      ],
      popular: false,
      gradient: "from-orange-600 to-red-600",
      icon: Server
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Velocidade Garantida",
      description: "Banda dedicada e simétrica com performance constante em qualquer horário",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "SLA de até 99.9%",
      description: "Acordo de nível de serviço com garantia de uptime e compensação",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada disponível 24 horas por dia, 7 dias por semana",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Segurança Avançada",
      description: "Firewall corporativo, proteção DDoS e monitoramento de tráfego",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      description: "Aumente sua banda sob demanda conforme o crescimento da empresa",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Network,
      title: "Infraestrutura Robusta",
      description: "Rede redundante com múltiplos backbones e baixa latência",
      color: "from-pink-500 to-purple-500"
    },
  ]

  const solutions = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Conexão otimizada para serviços em nuvem como AWS, Azure e Google Cloud"
    },
    {
      icon: Video,
      title: "Videoconferência",
      description: "Qualidade 4K para reuniões online com Teams, Zoom e Google Meet"
    },
    {
      icon: Server,
      title: "Servidores & Data Center",
      description: "Conectividade de alta performance para infraestrutura crítica"
    },
    {
      icon: Globe,
      title: "VPN Corporativa",
      description: "Acesso seguro para colaboradores remotos e filiais"
    },
    {
      icon: BarChart3,
      title: "Big Data & Analytics",
      description: "Velocidade para processar grandes volumes de dados"
    },
    {
      icon: Settings,
      title: "ERP & Sistemas",
      description: "Suporte para SAP, TOTVS e outras aplicações empresariais"
    }
  ]

  const differentials = [
    "Instalação e configuração sem custo",
    "Projeto de rede incluso",
    "Migração assistida sem interrupção",
    "Treinamento da equipe de TI",
    "Equipamentos corporativos certificados",
    "IPs fixos inclusos no plano",
    "Garantia de banda mínima",
    "Relatórios mensais de performance",
    "Atendimento com gestor dedicado",
    "SLA com compensação financeira"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - LAYOUT EMPRESARIAL */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold">Soluções Corporativas Vivo Empresas</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Fibra Ótica
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">
                  Para Sua Empresa
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Internet corporativa de <strong>alta performance</strong> com velocidades de até 
                <strong> 1 Gbps dedicado</strong>, SLA garantido, suporte 24/7 e infraestrutura 
                enterprise para impulsionar seu negócio
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#planos">
                  <button 
                    className="btn-primary-empresa-fibra text-lg group"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Briefcase className="w-5 h-5 mr-2" />
                    Ver Planos Corporativos
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria%20-%20Gostaria%20de%20um%20orçamento%20para%20Fibra%20Corporativa">
                  <button 
                    className="btn-outline-light-empresa-fibra text-lg"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Solicitar Orçamento
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: Gauge, value: "1 Gbps", label: "Velocidade" },
                  { icon: Award, value: "99.9%", label: "SLA" },
                  { icon: Users, value: "100+", label: "Usuários" }
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
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Solução Empresarial</p>
                    <p className="text-white font-bold text-lg">Completa e Profissional</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Shield, title: "SLA Garantido", desc: "Até 99.9% de uptime" },
                    { icon: Headphones, title: "Suporte 24/7", desc: "Equipe dedicada" },
                    { icon: Lock, title: "Segurança Enterprise", desc: "Firewall e proteção" },
                    { icon: TrendingUp, title: "Escalável", desc: "Cresce com sua empresa" }
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold">{item.title}</p>
                          <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/30">
                  <p className="text-white text-center text-sm">
                    <strong className="text-cyan-400">Consultoria gratuita</strong> com especialistas
                  </p>
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

      {/* Seção de Planos Corporativos */}
      <section id="planos" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Planos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Corporativos
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Soluções sob medida para empresas de todos os portes
            </p>
            <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-6 py-3 border-2 border-green-200">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-green-700">SLA com garantia de compensação financeira</span>
            </div>
          </div>

          {/* Grid de Planos */}
          <div className="grid lg:grid-cols-3 gap-8">
            {businessPlans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredPlan(index)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`
                    relative bg-white rounded-2xl border-2 transition-all duration-300 h-full
                    ${plan.popular 
                      ? 'border-purple-500 shadow-2xl scale-105' 
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                    }
                  `}
                >
                  {/* Badge Popular */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
                        <Star className="w-3 h-3" />
                        MAIS CONTRATADO
                      </div>
                    </div>
                  )}

                  <div className={`h-40 bg-gradient-to-br ${plan.gradient} rounded-t-2xl flex flex-col items-center justify-center relative overflow-hidden p-6`}>
                    <div className="absolute inset-0 bg-white/10" />
                    <IconComponent className="w-16 h-16 text-white mb-2 relative z-10" />
                    <div className="text-white text-center relative z-10">
                      <p className="text-sm font-semibold opacity-90">{plan.users}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-bold text-2xl text-gray-900 mb-2">{plan.name}</h3>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-blue-600">{plan.speed}</div>
                      <div className="text-sm text-gray-500">Velocidade dedicada</div>
                    </div>

                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">A partir de</div>
                        <div className="text-3xl font-bold text-gray-900">
                          R$ {plan.price.toFixed(2).replace('.', ',')}
                        </div>
                        <div className="text-sm text-gray-600">por mês</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {Object.entries(plan.features).map(([key, value], i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-tight">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                      <p className="text-xs font-semibold text-gray-700 mb-3">Ideal para:</p>
                      <div className="space-y-2">
                        {plan.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <ChevronRight className="w-3 h-3 text-blue-600" />
                            <span className="text-xs text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20do%20plano%20${plan.name}`}>
                      <button className={`w-full empresa-fibra-button ${plan.popular ? 'btn-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                        <Briefcase className="w-4 h-4 mr-2" />
                        Solicitar Proposta
                      </button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Nota sobre planos customizados */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-blue-50 rounded-2xl px-8 py-4 border-2 border-blue-200">
              <Target className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <p className="font-bold text-gray-900">Precisa de um plano customizado?</p>
                <p className="text-sm text-gray-600">Entre em contato para soluções sob medida com velocidades superiores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções Empresariais */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Soluções{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Empresariais
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Infraestrutura otimizada para as necessidades do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Diferenciais{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Corporativos
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
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
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
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Impulsione Sua Empresa com Internet de Classe Mundial
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Fale com nossos especialistas e receba uma proposta personalizada 
            com a melhor solução de conectividade para o seu negócio
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20para%20Fibra%20Corporativa">
              <button 
                className="btn-primary-cta-empresa-fibra text-lg group shadow-2xl"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Gostaria%20de%20agendar%20uma%20consultoria">
              <button 
                className="btn-outline-light-cta-empresa-fibra text-lg"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Agendar Consultoria
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span>Sem Taxa de Instalação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span>SLA Garantido</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span>Suporte 24/7</span>
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

        /* Botões da página Fibra Empresarial - tamanhos idênticos */
        .btn-primary-empresa-fibra {
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

        .btn-primary-empresa-fibra:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-empresa-fibra {
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

        .btn-outline-light-empresa-fibra:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página Fibra Empresarial - tamanhos idênticos */
        .btn-primary-cta-empresa-fibra {
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

        .btn-primary-cta-empresa-fibra:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cta-empresa-fibra {
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

        .btn-outline-light-cta-empresa-fibra:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões dos planos empresariais - estilos específicos */
        .empresa-fibra-button {
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

        .empresa-fibra-button:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
