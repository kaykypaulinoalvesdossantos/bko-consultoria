"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Zap, Check, ArrowRight, TrendingDown, Shield, Users, TrendingUp,
  Building2, Leaf, Globe, Clock, Award, Target, DollarSign,
  CheckCircle2, Sparkles, Settings, BarChart3, Calendar,
  FileText, AlertCircle, Lightbulb, Factory, Store,
  Calculator, BadgePercent, LineChart, PiggyBank, Recycle,
  Wind, Sun, Droplets, Sprout, ChevronRight, CheckSquare,
  ShieldCheck
} from "lucide-react"

export default function GUDEnergiaPage() {
  const [activeTab, setActiveTab] = useState("oque")
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null)

  const diferenciais = [
    {
      icon: DollarSign,
      title: "Economia Garantida",
      subtitle: "Redução de até 30% nos custos",
      description: "Economia comprovada em energia elétrica em comparação ao mercado cativo",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Leaf,
      title: "Energia Renovável com Certificado (I-REC)",
      description: "Certificado internacional que garante energia de fonte renovável com impacto ambiental positivo e redução das emissões de carbono",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BadgePercent,
      title: "Adesão Grátis e Sem Taxas",
      description: "A GUD cuida de todos os custos de adequação para o mercado livre de energia",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Segurança para Crescer",
      description: "A empresa pode consumir o 'dobro' da energia contratada que continuará com o valor acordado no contrato: Economia Garantida!",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: AlertCircle,
      title: "Sem Dor de Cabeça",
      description: "A GUD cuida de todo o processo de migração da empresa para o mercado livre",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Calendar,
      title: "Mais Prazo para Pagar",
      description: "A empresa pode pagar a fatura até o 20º dia de cada mês, com mais facilidade nos processos de pagamento e mais tempo para organizar o fluxo de caixa",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: LineChart,
      title: "Mais Controle para Seu Consumo",
      description: "Sistema 100% online para acompanhamento dos dados de consumo energético",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: ShieldCheck,
      title: "Não Precisa de 'Caução'",
      description: "Mais agilidade e menos burocracia, o cliente não precisa apresentar nenhum tipo de garantia",
      color: "from-teal-500 to-green-500"
    }
  ]

  const eligibilidade = [
    {
      icon: Building2,
      title: "Pertencer ao Grupo A (alta tensão)",
      description: "Conexão elétrica em média ou alta tensão (acima de 2,3 kV)"
    },
    {
      icon: AlertCircle,
      title: "Não ter Solar (Geração distribuída)",
      description: "Unidades sem geração própria de energia solar"
    },
    {
      icon: Store,
      title: "Não estar no Mercado Livre de Energia",
      description: "Estar atualmente no mercado cativo (regulado)"
    }
  ]

  const vantagens = [
    {
      icon: TrendingDown,
      title: "Economia de até 30%",
      description: "Redução significativa nos custos com energia elétrica",
      percentage: "30%"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Energia 100% renovável certificada (I-REC)",
      badge: "Certificado"
    },
    {
      icon: Settings,
      title: "Previsibilidade",
      description: "Contratos com preços fixos e estáveis",
      badge: "Planejamento"
    },
    {
      icon: Users,
      title: "Liberdade de Escolha",
      description: "Escolha seu fornecedor e tipo de energia",
      badge: "Autonomia"
    },
    {
      icon: BarChart3,
      title: "Gestão Inteligente",
      description: "Plataforma online de acompanhamento em tempo real",
      badge: "Tecnologia"
    },
    {
      icon: Shield,
      title: "Sem Riscos",
      description: "Economia garantida e migração assistida",
      badge: "Segurança"
    }
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Análise de Elegibilidade",
      description: "Verificamos se sua empresa atende aos requisitos do Mercado Livre de Energia",
      icon: FileText,
      details: ["Grupo A (alta tensão)", "Sem geração solar distribuída", "Fora do mercado livre"]
    },
    {
      step: "2",
      title: "Simulação de Economia",
      description: "Calculamos sua economia potencial com base no consumo histórico",
      icon: Calculator,
      details: ["Análise de fatura", "Projeção de economia", "Comparação de cenários"]
    },
    {
      step: "3",
      title: "Proposta Personalizada",
      description: "Apresentamos uma proposta customizada para seu perfil de consumo",
      icon: FileText,
      details: ["Contrato sob medida", "Prazo flexível", "Energia renovável certificada"]
    },
    {
      step: "4",
      title: "Migração Sem Complicações",
      description: "Cuidamos de todo o processo de migração para o Mercado Livre",
      icon: CheckCircle2,
      details: ["Rescisão com distribuidora", "Adequação de medição", "Adesão à CCEE"]
    },
    {
      step: "5",
      title: "Gestão Contínua",
      description: "Acompanhamento constante do seu consumo e otimização de custos",
      icon: BarChart3,
      details: ["Plataforma online 24/7", "Relatórios mensais", "Suporte especializado"]
    }
  ]

  const faqs = [
    {
      question: "O que é o Mercado Livre de Energia?",
      answer: "É um ambiente de contratação onde o consumidor pode escolher seu fornecedor de energia elétrica e negociar preço, prazo, volume e tipo de energia. Diferente do mercado regulado (cativo), você tem liberdade de escolha e pode obter economia significativa."
    },
    {
      question: "Quanto posso economizar?",
      answer: "Empresas que migram para o Mercado Livre conseguem economizar de 20% a 30% na conta de energia, dependendo do perfil de consumo. Uma empresa com gasto mensal de R$ 10 mil pode economizar até R$ 36 mil por ano."
    },
    {
      question: "Preciso pagar alguma taxa de adesão?",
      answer: "Não! A GUD Energia cuida de todos os custos de adequação para o mercado livre, sem nenhuma taxa de adesão ou caução. Todo o processo de migração é gratuito."
    },
    {
      question: "Como funciona o certificado I-REC?",
      answer: "O I-REC (International Renewable Energy Certificate) é um certificado internacional que comprova que a energia consumida é proveniente de fontes 100% renováveis, ajudando sua empresa a reduzir emissões de carbono e alcançar metas de sustentabilidade."
    },
    {
      question: "Vou precisar trocar de distribuidora?",
      answer: "Não. A distribuidora local continua responsável pela entrega física da energia (fios, postes, manutenção). Você apenas passará a comprar a energia de um fornecedor do Mercado Livre, mas a infraestrutura permanece a mesma."
    },
    {
      question: "Quanto tempo leva a migração?",
      answer: "O processo completo de migração leva em média de 60 a 90 dias, incluindo rescisão com a distribuidora, adequação do sistema de medição e início da operação no Mercado Livre."
    }
  ]

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
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-bold">GUD Energia - Parceria Auren + Vivo</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Mercado Livre de Energia
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mt-2">
                  Economia de até 30%
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                A <strong>GUD Energia</strong> é resultado da parceria entre Vivo e Auren (uma das maiores 
                geradoras de energia do Brasil) para comercializar energia com <strong>economia de até 30%</strong> 
                e <strong>certificado de energia renovável</strong> (I-REC).
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#simulacao">
                  <button 
                    className="btn-primary-energia text-lg group whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Simular Economia
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20saber%20sobre%20GUD%20Energia">
                  <button 
                    className="btn-outline-light-energia text-lg whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Falar com Especialista
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: TrendingDown, value: "30%", label: "Economia" },
                  { icon: Leaf, value: "100%", label: "Renovável" },
                  { icon: DollarSign, value: "R$ 0", label: "Taxa Adesão" }
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
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
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Energia Empresarial</p>
                    <p className="text-white font-bold text-lg">GUD Energia</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    { label: "Economia Garantida", value: "Até 30%" },
                    { label: "Energia Renovável", value: "Certificado I-REC" },
                    { label: "Taxa de Adesão", value: "R$ 0,00" },
                    { label: "Prazo para Pagar", value: "Até 20º dia" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-white/5 rounded-xl p-4 border border-white/10">
                      <span className="text-white/80 text-sm">{item.label}</span>
                      <span className="text-white font-bold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[
                    "Sem investimento inicial",
                    "Migração 100% assistida",
                    "Suporte especializado",
                    "Plataforma de gestão online"
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
          <a href="#diferenciais" className="block">
            <div className="w-10 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/50 transition-colors">
              <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator" />
            </div>
          </a>
        </div>
      </section>

      {/* Diferenciais GUD */}
      <section id="diferenciais" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quais os{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Diferenciais da GUD?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              8 vantagens exclusivas para sua empresa economizar com energia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((diferencial, index) => {
              const Icon = diferencial.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${diferencial.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{diferencial.title}</h3>
                  {diferencial.subtitle && (
                    <p className="text-sm font-semibold text-purple-600 mb-2">{diferencial.subtitle}</p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed">{diferencial.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Elegibilidade */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Qual a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Elegibilidade?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Sua empresa precisa atender aos seguintes requisitos
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-purple-200">
            <div className="space-y-6">
              {eligibilidade.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-4 items-start bg-white rounded-xl p-6 border-2 border-purple-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6 text-purple-600" />
                        <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Como validar se o cliente é elegível?</h4>
                  <p className="text-blue-800">
                    Solicite a fatura de energia do cliente e busque pela identificação destacada. 
                    Lembre-se: cada distribuidora traz a informação em algum lugar da fatura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Como{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Funciona?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              5 passos simples para migrar para o Mercado Livre de Energia
            </p>
          </div>

          <div className="space-y-6">
            {howItWorks.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="flex gap-6 bg-white rounded-2xl p-8 border-2 border-purple-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-purple-600" />
                      <h3 className="font-bold text-2xl text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-1 text-sm text-purple-700">
                          <CheckSquare className="w-4 h-4" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vantagens do Mercado Livre */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vantagens do{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Mercado Livre
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vantagens.map((vantagem, index) => {
              const Icon = vantagem.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-bold text-xl text-gray-900">{vantagem.title}</h3>
                    {(vantagem.percentage || vantagem.badge) && (
                      <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {vantagem.percentage || vantagem.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{vantagem.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perguntas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Frequentes
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Simulação */}
      <section id="simulacao" className="py-24 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Economize até 30% na Conta de Energia!
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Faça uma simulação gratuita e descubra quanto sua empresa pode economizar 
            migrando para o Mercado Livre de Energia com a GUD
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20simular%20economia%20com%20GUD%20Energia">
              <button 
                className="btn-primary-cta-energia text-lg group shadow-2xl whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Simular Minha Economia
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20falar%20com%20especialista%20GUD%20Energia">
              <button 
                className="btn-outline-light-cta-energia text-lg whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Falar com Especialista
              </button>
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4">
                <PiggyBank className="w-8 h-8 text-yellow-400" />
              </div>
              <p className="font-bold text-2xl mb-2">Até 30%</p>
              <p className="text-white/80 text-sm">de Economia</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-green-400" />
              </div>
              <p className="font-bold text-2xl mb-2">100%</p>
              <p className="text-white/80 text-sm">Energia Renovável</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="font-bold text-2xl mb-2">R$ 0</p>
              <p className="text-white/80 text-sm">Taxa de Adesão</p>
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
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(147, 51, 234, 0.6);
          background: linear-gradient(135deg, #7e22ce 0%, #db2777 100%);
        }

        /* Botões da página Energia - tamanhos idênticos */
        .btn-primary-energia {
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%) !important;
          color: white !important;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 600 !important;
          transition: all 0.3s !important;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4) !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          height: 3.5rem !important;
          min-width: 12rem !important;
          border: none !important;
        }

        .btn-primary-energia:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(147, 51, 234, 0.6) !important;
          background: linear-gradient(135deg, #7e22ce 0%, #db2777 100%) !important;
        }

        .btn-outline-light-energia {
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

        .btn-outline-light-energia:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página Energia - tamanhos idênticos */
        .btn-primary-cta-energia {
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%) !important;
          color: white !important;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 600 !important;
          transition: all 0.3s !important;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4) !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          height: 4rem !important;
          min-width: 16rem !important;
          border: none !important;
        }

        .btn-primary-cta-energia:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(147, 51, 234, 0.6) !important;
          background: linear-gradient(135deg, #7e22ce 0%, #db2777 100%) !important;
        }

        .btn-outline-light-cta-energia {
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

        .btn-outline-light-cta-energia:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }
      `}</style>
    </div>
  )
}
