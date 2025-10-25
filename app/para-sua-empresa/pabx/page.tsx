"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Phone, Check, ArrowRight, Zap, Shield, Users, TrendingUp,
  Building2, Headphones, Globe, Clock, Award, Target,
  CheckCircle2, Sparkles, Settings, BarChart3, Lock,
  Smartphone, Laptop, Tablet, Cloud, PhoneCall, MessageSquare,
  Video, Music, FileText, AlertCircle, Mic, PhoneForwarded,
  PhoneIncoming, PhoneOutgoing, Bot, Network, Voicemail, Star, Wifi
} from "lucide-react"

export default function PABXNuvemPage() {
  const [activeTab, setActiveTab] = useState("oque")
  const [selectedCombo, setSelectedCombo] = useState<"banda" | "movel" | null>(null)

  // Planos baseados nas imagens
  const callCenterPlans = [
    {
      type: "Call Center",
      licenses: "De 01 a 100",
      price24: 60,
      price36: 55,
      features: [
        "Supervisor com dashboard",
        "Monitoramento de chamadas",
        "Relatórios agendados",
        "URA com 01 nível",
        "Gravador de ligações R$ 20/mês",
        "Até 100 licenças por CNPJ"
      ],
      gradient: "from-purple-600 to-pink-600"
    }
  ]

  const standardPlans = [
    {
      name: "Licença Padrão",
      range: "1 a 4 Licenças",
      price24: 55,
      price36: 50,
      features: [
        "Softphone para notebook/tablet/celular",
        "Aparelho IP e ATA suportados",
        "URA com 01 nível - R$ 40/mês",
        "URA Multinível - R$ 50/mês",
        "Gravador - R$ 20/mês por licença"
      ],
      popular: false,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      name: "Licença Padrão",
      range: "5 a 8 Licenças",
      price24: 50,
      price36: 45,
      features: [
        "Softphone completo",
        "Suporte a IP e ATA",
        "URA personalizável",
        "Gravação de chamadas",
        "Relatórios detalhados"
      ],
      popular: true,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Licença Padrão",
      range: "9 a 20 Licenças",
      price24: 45,
      price36: 40,
      features: [
        "Todas as funcionalidades",
        "Desconto progressivo",
        "Suporte prioritário",
        "Gestão centralizada",
        "Integração MS Teams"
      ],
      popular: false,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      name: "Licença Padrão",
      range: "21 a 30 Licenças",
      price24: 40,
      price36: 35,
      features: [
        "Plano empresarial",
        "Gestão avançada",
        "APIs de integração",
        "Relatórios customizados",
        "Suporte VIP"
      ],
      popular: false,
      gradient: "from-orange-600 to-red-600"
    },
    {
      name: "Licença Padrão",
      range: "31+ Licenças",
      price24: 35,
      price36: 30,
      features: [
        "Melhor custo-benefício",
        "Suite completa",
        "Gerente dedicado",
        "SLA premium",
        "Consultoria inclusa"
      ],
      popular: false,
      gradient: "from-red-600 to-pink-600"
    }
  ]

  // Combos
  const bandaLargaCombo = {
    title: "PABX + Banda Larga Fixa",
    licensePrice: 45,
    description: "De 1 a 20 Licenças por 24 meses",
    internet: [
      { speed: "400 MEGA", nationalIP: 79, portability: 124 },
      { speed: "500 MEGA", nationalIP: 89, portability: 134 },
      { speed: "600 MEGA", nationalIP: 94, portability: 139 },
      { speed: "700 MEGA", nationalIP: 99, portability: 144 },
      { speed: "1 GIGA", nationalIP: 299, portability: 344 }
    ]
  }

  const movelCombo = {
    title: "PABX + Plano Móvel",
    licensePrice: 45,
    description: "De 1 a 20 Licenças por 24 meses",
    mobile: [
      { data: "6 GB", priceRegular: 39.99, priceCombo: 84.99 },
      { data: "15 GB", priceRegular: 54.99, priceCombo: 99.99 },
      { data: "20 GB", priceRegular: 59.99, priceCombo: 104.99 },
      { data: "30 GB", priceRegular: 69.99, priceCombo: 114.99 },
      { data: "40 GB", priceRegular: 79.99, priceCombo: 124.99 },
      { data: "50 GB", priceRegular: 89.99, priceCombo: 134.99 },
      { data: "100 GB", priceRegular: 99.99, priceCombo: 164.99 }
    ]
  }

  const benefits = [
    {
      icon: Cloud,
      title: "100% em Nuvem",
      description: "Não precisa de equipamentos físicos no local. Acesse de qualquer lugar com internet.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade Instantânea",
      description: "Adicione ou remova ramais conforme necessário, pagando apenas pelo que usa.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Gestão Simplificada",
      description: "Painel web intuitivo para gerenciar ramais, configurações e relatórios.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Segurança Avançada",
      description: "Criptografia de ponta a ponta e proteção contra fraudes telefônicas.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Entre em operação em minutos, sem obras ou instalações complexas.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Relatórios Completos",
      description: "Análise detalhada de chamadas, custos e produtividade da equipe.",
      color: "from-pink-500 to-purple-500"
    },
  ]

  const features = [
    {
      icon: PhoneCall,
      title: "Plataforma Completa de Telefonia",
      description: "Sistema VoIP completo com PABX 100% em nuvem para chamadas nacionais e internacionais"
    },
    {
      icon: Globe,
      title: "Ligações Ilimitadas Brasil",
      description: "Realize ligações telefônicas para números externos e internos sem custo adicional"
    },
    {
      icon: Bot,
      title: "URA Personalizada",
      description: "Menu de navegação automático para encaminhar chamadas de forma inteligente"
    },
    {
      icon: Users,
      title: "Possibilidade de Interligações",
      description: "Conecte ramais e filiais, criando uma rede corporativa unificada"
    },
    {
      icon: Voicemail,
      title: "Gravador de Ligações",
      description: "Grave automaticamente chamadas para treinamento, qualidade e compliance"
    },
    {
      icon: Lock,
      title: "Segurança Criptografada",
      description: "Proteção de dados com criptografia de ponta a ponta em todas as chamadas"
    },
    {
      icon: TrendingUp,
      title: "Economize Custos",
      description: "Elimine custos de manutenção de PABX físico e reduza gastos com telefonia"
    },
    {
      icon: Smartphone,
      title: "Mobilidade Total",
      description: "Leve seu ramal para qualquer lugar via Softphone em smartphones e computadores"
    },
    {
      icon: Network,
      title: "Integração com Microsoft Teams",
      description: "Direct Routing para integrar chamadas telefônicas direto no MS Teams"
    }
  ]

  const useCases = [
    {
      title: "Para Pequenas Empresas",
      description: "Escritórios e startups que precisam de telefonia profissional sem investimento inicial",
      ideal: ["Até 20 colaboradores", "Home office", "Escritórios compartilhados"],
      icon: Building2
    },
    {
      title: "Para Call Centers",
      description: "Operações de atendimento que precisam de monitoramento e gravação de chamadas",
      ideal: ["Supervisão em tempo real", "Relatórios detalhados", "Gravação obrigatória"],
      icon: Headphones
    },
    {
      title: "Para Empresas Multifilial",
      description: "Negócios com várias unidades que precisam de comunicação integrada",
      ideal: ["Ligações internas grátis", "Gestão centralizada", "Ramais compartilhados"],
      icon: Globe
    },
    {
      title: "Para Equipes Remotas",
      description: "Times distribuídos que trabalham de casa ou em modelo híbrido",
      ideal: ["Trabalho remoto", "Flexibilidade total", "Sem estrutura física"],
      icon: Laptop
    }
  ]

  const teamsIntegration = {
    title: "Direct Routing para Microsoft Teams",
    price24: 15,
    price36: 10,
    description: "Integre chamadas telefônicas direto no Teams",
    features: [
      "Compatível com licenças padrão e call center",
      "Chamadas via funcionalidades do Teams",
      "Uma ligação por licença simultânea",
      "Limite de até 100 licenças de direct routing",
      "Licença de gravação não grava ligações do Teams Phone"
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="text-sm font-bold">Sistema de Telefonia Empresarial em Nuvem</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                PABX em Nuvem
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mt-2">
                  Para Sua Empresa
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Telefonia empresarial <strong>100% em nuvem</strong> com ligações ilimitadas, 
                URA personalizada, gravação de chamadas e <strong>integração com Microsoft Teams</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#oque">
                  <button 
                    className="btn-primary-pabx text-lg group whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Entenda o PABX em Nuvem
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria%20-%20Gostaria%20de%20um%20orçamento%20para%20PABX%20em%20Nuvem">
                  <button 
                    className="btn-outline-light-pabx text-lg whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Solicitar Orçamento
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: Cloud, value: "100%", label: "Em Nuvem" },
                  { icon: Phone, value: "Ilimitado", label: "Ligações" },
                  { icon: Award, value: "R$ 30", label: "A partir de" }
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
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Sistema Completo</p>
                    <p className="text-white font-bold text-lg">PABX Virtual</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Smartphone, title: "Softphone", desc: "Celular/Tablet/PC" },
                    { icon: Globe, title: "Ligações", desc: "Ilimitadas Brasil" },
                    { icon: Bot, title: "URA", desc: "Menu automático" },
                    { icon: Voicemail, title: "Gravação", desc: "Todas as chamadas" }
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                        <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                        <p className="text-white/60 text-xs">{item.desc}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-3">
                  {[
                    "Sem investimento em equipamentos",
                    "Implementação em minutos",
                    "Gestão 100% online",
                    "Integração com Microsoft Teams"
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
          <a href="#oque" className="block">
            <div className="w-10 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/50 transition-colors">
              <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator" />
            </div>
          </a>
        </div>
      </section>

      {/* Seção Educativa */}
      <section id="oque" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O Que É{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                PABX em Nuvem?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Entenda como funciona a telefonia empresarial moderna
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "oque", label: "O Que É", icon: Cloud },
              { id: "funciona", label: "Como Funciona", icon: Settings },
              { id: "vantagens", label: "Vantagens", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2
                    ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Conteúdo das Tabs */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-purple-100">
            {activeTab === "oque" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">O Que É PABX em Nuvem?</h3>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>PABX em Nuvem</strong> (também conhecido como PABX Virtual, PABX IP ou VoIP) é um sistema de telefonia empresarial 
                    hospedado completamente na nuvem, eliminando a necessidade de equipamentos físicos e infraestrutura complexa no local.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Funciona através de uma <strong>linha fixa no celular, computador ou tablet</strong> via Softphone, 
                    atrelada a um PABX na nuvem com diversas funcionalidades que facilitam e conectam seu time de colaboradores.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-xl text-gray-900">PABX Tradicional</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Equipamento físico no local</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Alto custo de instalação</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Manutenção constante</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Difícil de escalar</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-xl text-gray-900">PABX em Nuvem</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>100% online (sem equipamentos)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Sem investimento inicial</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Sem manutenção necessária</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Escalável instantaneamente</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "funciona" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Como Funciona?</h3>
                
                <div className="space-y-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    O PABX em Nuvem utiliza tecnologia <strong>VoIP (Voice over IP)</strong> para transformar 
                    voz em dados digitais que trafegam pela internet, eliminando a necessidade de linhas telefônicas tradicionais.
                  </p>

                  {[
                    {
                      step: "1",
                      title: "Contratação de Licenças",
                      description: "Você contrata o número de ramais (licenças) conforme a quantidade de colaboradores que precisam fazer e receber chamadas.",
                      icon: FileText
                    },
                    {
                      step: "2",
                      title: "Instalação do Softphone",
                      description: "Cada colaborador instala o aplicativo Softphone em seu smartphone, tablet ou computador. Funciona em iOS, Android, Windows e Mac.",
                      icon: Smartphone
                    },
                    {
                      step: "3",
                      title: "Configuração do Sistema",
                      description: "Configure URA (menu automático), grupos de atendimento, horários de funcionamento e regras de encaminhamento através do painel web.",
                      icon: Settings
                    },
                    {
                      step: "4",
                      title: "Realização de Chamadas",
                      description: "Realize e receba chamadas usando o Softphone como se fosse um telefone fixo, com ligações ilimitadas para todo o Brasil.",
                      icon: PhoneCall
                    },
                    {
                      step: "5",
                      title: "Gestão e Relatórios",
                      description: "Acompanhe em tempo real todas as chamadas, custos e produtividade através de relatórios detalhados no painel administrativo.",
                      icon: BarChart3
                    }
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex gap-4 bg-white rounded-xl p-6 border-2 border-purple-200">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-6 h-6 text-purple-600" />
                            <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {activeTab === "vantagens" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Vantagens do PABX em Nuvem</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Economia de Custos",
                      description: "Elimine investimentos em equipamentos, manutenção e linhas telefônicas tradicionais. Pague apenas pelas licenças que usar.",
                      icon: TrendingUp
                    },
                    {
                      title: "Mobilidade Total",
                      description: "Trabalhe de qualquer lugar com internet. Ideal para home office, equipes remotas e trabalho híbrido.",
                      icon: Smartphone
                    },
                    {
                      title: "Escalabilidade Rápida",
                      description: "Adicione ou remova ramais em minutos, sem obras ou mudanças de infraestrutura.",
                      icon: Zap
                    },
                    {
                      title: "Ligações Ilimitadas",
                      description: "Realize ligações ilimitadas para todo o Brasil sem custos adicionais por chamada.",
                      icon: PhoneCall
                    },
                    {
                      title: "Integração com Teams",
                      description: "Conecte o PABX diretamente ao Microsoft Teams através do Direct Routing.",
                      icon: Network
                    },
                    {
                      title: "Relatórios Detalhados",
                      description: "Análise completa de chamadas, tempos de atendimento, custos e produtividade.",
                      icon: BarChart3
                    }
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="bg-white rounded-xl p-6 border-2 border-purple-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Funcionalidades{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Incluídas
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quando{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Usar PABX em Nuvem?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Ideal para:</p>
                    {useCase.ideal.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Planos e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Licenças
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para sua empresa
            </p>
          </div>

          {/* Licenças Padrão */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Licenças Padrão</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {standardPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`
                    relative bg-white rounded-2xl border-2 transition-all duration-300 h-full
                    ${plan.popular 
                      ? 'border-purple-500 shadow-xl scale-105' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                    }
                  `}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
                        <Star className="w-3 h-3" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  <div className={`h-28 bg-gradient-to-br ${plan.gradient} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10" />
                    <Phone className="w-12 h-12 text-white relative z-10" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{plan.range}</p>

                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 bg-purple-50 rounded-lg">
                          <div className="text-xs text-gray-600 mb-1">24 meses</div>
                          <div className="text-lg font-bold text-gray-900">R$ {plan.price24}</div>
                        </div>
                        <div className="text-center p-2 bg-purple-50 rounded-lg">
                          <div className="text-xs text-gray-600 mb-1">36 meses</div>
                          <div className="text-lg font-bold text-purple-600">R$ {plan.price36}</div>
                        </div>
                      </div>
                      <p className="text-xs text-center text-gray-500 mt-2">por licença/mês</p>
                    </div>

                    <div className="space-y-2 mb-6 text-xs">
                      {plan.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20PABX%20Licença%20${plan.range}`}>
                      <button className={`w-full text-sm pabx-button ${plan.popular ? 'btn-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Contratar
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Licença Call Center */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Licença Call Center</h3>
            <div className="max-w-2xl mx-auto">
              {callCenterPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border-2 border-purple-500 shadow-xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <Headphones className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-gray-900">{plan.type}</h3>
                      <p className="text-gray-600">{plan.licenses} licenças</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-2">24 meses</div>
                      <div className="text-3xl font-bold text-gray-900">R$ {plan.price24}</div>
                      <div className="text-xs text-gray-500">por licença/mês</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-2">36 meses</div>
                      <div className="text-3xl font-bold text-purple-600">R$ {plan.price36}</div>
                      <div className="text-xs text-gray-500">por licença/mês</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20PABX%20Licença%20Call%20Center">
                    <button className="w-full btn-primary text-lg pabx-button whitespace-nowrap">
                      <Headphones className="w-5 h-5 mr-2" />
                      Solicitar Orçamento Call Center
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Routing Teams */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Integração com Microsoft Teams</h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900">{teamsIntegration.title}</h3>
                    <p className="text-gray-600">{teamsIntegration.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-xl border-2 border-blue-200">
                    <div className="text-sm text-gray-600 mb-2">24 meses</div>
                    <div className="text-3xl font-bold text-gray-900">R$ {teamsIntegration.price24}</div>
                    <div className="text-xs text-gray-500">por licença/mês</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border-2 border-blue-200">
                    <div className="text-sm text-gray-600 mb-2">36 meses</div>
                    <div className="text-3xl font-bold text-blue-600">R$ {teamsIntegration.price36}</div>
                    <div className="text-xs text-gray-500">por licença/mês</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {teamsIntegration.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20Direct%20Routing%20Microsoft%20Teams">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg pabx-button whitespace-nowrap">
                    <Network className="w-5 h-5 mr-2" />
                    Solicitar Orçamento Teams
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combos */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Combos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                PABX + Internet
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Economize contratando PABX junto com conectividade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <button
              onClick={() => setSelectedCombo("banda")}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
                selectedCombo === "banda"
                  ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Wifi className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900">{bandaLargaCombo.title}</h3>
                  <p className="text-gray-600">Licença R$ {bandaLargaCombo.licensePrice}/mês</p>
                </div>
              </div>
              <p className="text-gray-700">{bandaLargaCombo.description}</p>
            </button>

            <button
              onClick={() => setSelectedCombo("movel")}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
                selectedCombo === "movel"
                  ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900">{movelCombo.title}</h3>
                  <p className="text-gray-600">Licença R$ {movelCombo.licensePrice}/mês</p>
                </div>
              </div>
              <p className="text-gray-700">{movelCombo.description}</p>
            </button>
          </div>

          {selectedCombo === "banda" && (
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Planos de Banda Larga Fixa</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                      <th className="px-6 py-4 text-left font-bold">Velocidade</th>
                      <th className="px-6 py-4 text-center font-bold">IP Nacional</th>
                      <th className="px-6 py-4 text-center font-bold">Portabilidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bandaLargaCombo.internet.map((plan, index) => (
                      <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{plan.speed}</td>
                        <td className="px-6 py-4 text-center text-green-700 font-bold">R$ {plan.nationalIP}</td>
                        <td className="px-6 py-4 text-center text-blue-700 font-bold">R$ {plan.portability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                * Valores mensais considerando PABX (R$ 45) + Internet
              </p>
            </div>
          )}

          {selectedCombo === "movel" && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Planos de Internet Móvel</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                      <th className="px-6 py-4 text-left font-bold">Dados</th>
                      <th className="px-6 py-4 text-center font-bold">Plano Móvel</th>
                      <th className="px-6 py-4 text-center font-bold">PABX + Móvel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movelCombo.mobile.map((plan, index) => (
                      <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{plan.data}</td>
                        <td className="px-6 py-4 text-center text-gray-600">R$ {plan.priceRegular.toFixed(2)}</td>
                        <td className="px-6 py-4 text-center text-green-700 font-bold">R$ {plan.priceCombo.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                * Valores mensais considerando PABX (R$ 45) + Plano Móvel
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por Que Escolher{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                PABX em Nuvem?
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
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Modernize a Telefonia da Sua Empresa!
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Fale com nossos especialistas e receba uma proposta personalizada de PABX em Nuvem 
            com todas as funcionalidades que sua empresa precisa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20para%20PABX%20em%20Nuvem">
              <button 
                className="btn-primary-cta-pabx text-lg group shadow-2xl whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Gostaria%20de%20testar%20o%20PABX%20em%20Nuvem">
              <button 
                className="btn-outline-light-cta-pabx text-lg whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Testar Gratuitamente
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pink-400" />
              <span>Teste Grátis 5 Licenças</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pink-400" />
              <span>Sem Investimento Inicial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pink-400" />
              <span>Implementação Imediata</span>
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

        /* Botões da página PABX - tamanhos idênticos */
        .btn-primary-pabx {
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

        .btn-primary-pabx:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-pabx {
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

        .btn-outline-light-pabx:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página PABX - tamanhos idênticos */
        .btn-primary-cta-pabx {
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

        .btn-primary-cta-pabx:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cta-pabx {
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

        .btn-outline-light-cta-pabx:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões dos planos PABX - estilos específicos */
        .pabx-button {
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

        .pabx-button:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
