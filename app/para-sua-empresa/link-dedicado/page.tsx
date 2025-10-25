"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Wifi, Check, ArrowRight, Zap, Shield, Users, TrendingUp,
  Building2, Server, Globe, Gauge, Lock, Award,
  CheckCircle2, Sparkles, Target, BarChart3, Clock,
  Network, Settings, Cloud, FileCheck, AlertCircle,
  Activity, Cpu, HardDrive, Router, Radio, Eye
} from "lucide-react"

export default function LinkDedicadoPage() {
  const [activeTab, setActiveTab] = useState("oque")

  // Planos baseados na imagem (30, 50, 100, 200, 300, 400, 500 MEGA)
  const dedicatedPlans = [
    {
      speed: "30 MB",
      price: 500,
      description: "Pequenas empresas",
      users: "10-15 usuários",
      applications: ["E-mail corporativo", "Navegação web", "VoIP básico", "Cloud storage"],
      sla: "99.5%",
      popular: false,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      speed: "50 MB",
      price: 700,
      description: "Médias empresas",
      users: "15-30 usuários",
      applications: ["ERP leve", "Videoconferência", "CRM online", "Backup em nuvem"],
      sla: "99.7%",
      popular: true,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      speed: "100 MB",
      price: 900,
      description: "Empresas em crescimento",
      users: "30-50 usuários",
      applications: ["ERP completo", "Multi-videoconferência", "Aplicações críticas", "VPN corporativa"],
      sla: "99.8%",
      popular: false,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      speed: "200 MB",
      price: null,
      description: "Grandes empresas",
      users: "50-100 usuários",
      applications: ["Data center", "Servidores dedicados", "Alta disponibilidade", "Streaming corporativo"],
      sla: "99.9%",
      popular: false,
      gradient: "from-orange-600 to-red-600"
    },
    {
      speed: "300 MB",
      price: null,
      description: "Corporações",
      users: "100+ usuários",
      applications: ["Infraestrutura crítica", "Big Data", "Cloud híbrida", "Disaster recovery"],
      sla: "99.95%",
      popular: false,
      gradient: "from-red-600 to-pink-600"
    }
  ]

  const benefits = [
    {
      icon: Gauge,
      title: "Velocidade Garantida 24/7",
      description: "Banda dedicada exclusiva sem compartilhamento, garantindo performance constante em qualquer horário do dia",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Activity,
      title: "Velocidade Simétrica",
      description: "Upload e download com a mesma velocidade, essencial para aplicações corporativas como videoconferência e cloud",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "SLA até 99.95%",
      description: "Acordo de nível de serviço com garantia de uptime e compensação financeira em caso de indisponibilidade",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Segurança Avançada",
      description: "Conexão isolada com criptografia, proteção DDoS e firewall corporativo inclusos",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Baixa Latência",
      description: "Tempo de resposta mínimo, ideal para aplicações em tempo real como VoIP, trading e jogos online",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7",
      description: "NOC (Network Operations Center) monitorando sua conexão continuamente com alertas proativos",
      color: "from-pink-500 to-purple-500"
    },
  ]

  const useCases = [
    {
      icon: Server,
      title: "Data Centers",
      description: "Conectividade de alta performance para hospedagem de servidores e infraestrutura crítica",
      examples: ["Hospedagem de sites", "Servidores de aplicação", "Storage em nuvem"]
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Acesso rápido e estável a serviços em nuvem como AWS, Azure e Google Cloud",
      examples: ["SaaS empresarial", "Backup automatizado", "Disaster recovery"]
    },
    {
      icon: Building2,
      title: "Escritórios Corporativos",
      description: "Conectividade empresarial para operações diárias e aplicações críticas de negócio",
      examples: ["ERP/CRM", "Videoconferência", "Telefonia IP"]
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Garantia de disponibilidade para lojas virtuais e plataformas de vendas online",
      examples: ["Checkout seguro", "Pagamentos online", "Gestão de estoque"]
    },
    {
      icon: BarChart3,
      title: "Instituições Financeiras",
      description: "Conectividade segura e estável para transações financeiras e operações bancárias",
      examples: ["Home banking", "Trading", "Caixas eletrônicos"]
    },
    {
      icon: Radio,
      title: "Streaming & Mídia",
      description: "Banda garantida para transmissões ao vivo e produção de conteúdo digital",
      examples: ["Live streaming", "Broadcasting", "Produção audiovisual"]
    }
  ]

  const differentials = [
    "IP fixo incluso (múltiplos IPs disponíveis)",
    "Roteador corporativo de alto desempenho",
    "Instalação e projeto de rede sem custo",
    "Suporte técnico 24/7 especializado",
    "Redundância de link opcional",
    "Monitoramento proativo via NOC",
    "SLA com garantia de compensação",
    "QoS (Quality of Service) configurável",
    "VPN corporativa inclusa",
    "Relatórios mensais detalhados"
  ]

  const comparisonData = [
    {
      feature: "Velocidade",
      dedicated: "100% garantida",
      shared: "Até X Mbps (variável)"
    },
    {
      feature: "Compartilhamento",
      dedicated: "Link exclusivo",
      shared: "Compartilhado com outros"
    },
    {
      feature: "Simetria",
      dedicated: "Upload = Download",
      shared: "Upload menor"
    },
    {
      feature: "SLA",
      dedicated: "Até 99.95%",
      shared: "Sem garantia formal"
    },
    {
      feature: "Latência",
      dedicated: "Baixíssima (<10ms)",
      shared: "Variável"
    },
    {
      feature: "Suporte",
      dedicated: "24/7 especializado",
      shared: "Padrão"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold">Internet Dedicada - Conectividade Enterprise</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Link Dedicado
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-2">
                  Para Sua Empresa
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Conexão <strong>100% dedicada e exclusiva</strong> para sua empresa, com velocidade 
                garantida, SLA até <strong>99.95%</strong> e suporte técnico especializado 24/7
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#oque">
                  <button 
                    className="btn-primary-link-dedicado text-lg group whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Network className="w-5 h-5 mr-2" />
                    Entenda o Link Dedicado
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria%20-%20Gostaria%20de%20um%20orçamento%20para%20Link%20Dedicado">
                  <button 
                    className="btn-outline-light-link-dedicado text-lg whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Solicitar Orçamento
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: Gauge, value: "100%", label: "Dedicado" },
                  { icon: Shield, value: "99.95%", label: "SLA" },
                  { icon: Zap, value: "Simétrica", label: "Velocidade" }
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
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Conectividade</p>
                    <p className="text-white font-bold text-lg">100% Dedicada</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Gauge, title: "Velocidade Garantida", desc: "Sem oscilações ou lentidão" },
                    { icon: Activity, title: "Upload = Download", desc: "Velocidade simétrica" },
                    { icon: Shield, title: "SLA Contratual", desc: "Até 99.95% de uptime" },
                    { icon: Lock, title: "Segurança Enterprise", desc: "Conexão isolada e protegida" }
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

      {/* Seção Educativa com Tabs */}
      <section id="oque" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Entenda o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Link Dedicado
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa saber sobre internet dedicada
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "oque", label: "O Que É", icon: Network },
              { id: "como", label: "Como Funciona", icon: Settings },
              { id: "diferenca", label: "Diferenças", icon: BarChart3 },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2
                    ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
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
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100">
            {activeTab === "oque" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">O Que É Internet Dedicada?</h3>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Link Dedicado</strong> (ou Internet Dedicada) é uma conexão de internet <strong>exclusiva e não compartilhada</strong> 
                    fornecida diretamente para sua empresa. Diferente da internet residencial ou compartilhada, onde a banda é dividida 
                    entre vários usuários, no link dedicado <strong>toda a velocidade contratada pertence exclusivamente à sua organização</strong>.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-xl text-gray-900">Link Dedicado</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Velocidade 100% garantida</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Banda exclusiva</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Upload = Download</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>SLA contratual</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-gray-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-xl text-gray-900">Internet Compartilhada</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Velocidade "até X Mbps"</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Banda compartilhada</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Upload reduzido</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Sem SLA formal</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Ideal Para:</h4>
                        <p className="text-blue-800">
                          Empresas que dependem de conectividade estável para operações críticas, como data centers, 
                          e-commerce, instituições financeiras, call centers e escritórios corporativos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "como" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Como Funciona o Link Dedicado?</h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      O Link Dedicado funciona através de uma <strong>conexão direta e exclusiva</strong> entre sua empresa 
                      e o backbone da operadora, sem compartilhamento com outros clientes.
                    </p>
                  </div>

                  {/* Etapas de funcionamento */}
                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Conexão Física Exclusiva",
                        description: "Um cabo de fibra óptica é instalado diretamente do POP (Ponto de Presença) da operadora até sua empresa, criando um caminho exclusivo para seus dados.",
                        icon: Router
                      },
                      {
                        step: "2",
                        title: "Alocação de Banda Garantida",
                        description: "A velocidade contratada (ex: 100 Mbps) é reservada integralmente para sua empresa, não sendo compartilhada com nenhum outro cliente.",
                        icon: Gauge
                      },
                      {
                        step: "3",
                        title: "Velocidade Simétrica",
                        description: "Upload e download possuem a mesma velocidade, essencial para videoconferências, backup em nuvem e hospedagem de servidores.",
                        icon: Activity
                      },
                      {
                        step: "4",
                        title: "Monitoramento 24/7",
                        description: "NOC (Network Operations Center) monitora sua conexão continuamente, detectando e corrigindo problemas antes que afetem sua operação.",
                        icon: Eye
                      },
                      {
                        step: "5",
                        title: "SLA Contratual",
                        description: "Acordo formal garantindo percentual de disponibilidade (ex: 99.9%) com compensação financeira em caso de não cumprimento.",
                        icon: FileCheck
                      }
                    ].map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div key={index} className="flex gap-4 bg-white rounded-xl p-6 border-2 border-blue-200">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {item.step}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Icon className="w-6 h-6 text-blue-600" />
                              <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "diferenca" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Link Dedicado vs Internet Comum</h3>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  Entenda as principais diferenças entre uma conexão dedicada e uma conexão compartilhada:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                        <th className="px-6 py-4 text-left font-bold">Característica</th>
                        <th className="px-6 py-4 text-left font-bold">Link Dedicado</th>
                        <th className="px-6 py-4 text-left font-bold">Internet Comum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                          <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                          <td className="px-6 py-4 text-green-700 font-medium">{row.dedicated}</td>
                          <td className="px-6 py-4 text-gray-600">{row.shared}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                    <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                      <Check className="w-6 h-6 text-green-600" />
                      Quando Usar Link Dedicado
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Operações críticas de negócio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>E-commerce e transações online</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Data centers e servidores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Videoconferências frequentes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>VPN entre filiais</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                    <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-blue-600" />
                      Quando Internet Comum É Suficiente
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Uso residencial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Pequenos escritórios sem apps críticos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Navegação web básica</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>E-mail e documentos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Startups em fase inicial</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Casos de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Uso Ideais
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Principais aplicações para internet dedicada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Exemplos:</p>
                    {useCase.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>{example}</span>
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
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Planos de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Link Dedicado
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Velocidades de 30 Mbps a 500 Mbps dedicados
            </p>
            <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-6 py-3 border-2 border-green-200">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-green-700">SLA contratual com garantia de compensação</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {dedicatedPlans.map((plan, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl border-2 transition-all duration-300 h-full
                  ${plan.popular 
                    ? 'border-blue-500 shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
                      <Award className="w-3 h-3" />
                      POPULAR
                    </div>
                  </div>
                )}

                <div className={`h-32 bg-gradient-to-br ${plan.gradient} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" />
                  <Network className="w-14 h-14 text-white relative z-10" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">{plan.speed}</h3>
                  <p className="text-sm text-gray-600 mb-1">{plan.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{plan.users}</p>

                  {plan.price && (
                    <div className="mb-6 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">A partir de</div>
                        <div className="text-2xl font-bold text-gray-900">
                          R$ {plan.price}
                        </div>
                        <div className="text-xs text-gray-600">por mês</div>
                      </div>
                    </div>
                  )}

                  {!plan.price && (
                    <div className="mb-6 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-700">Consulte</div>
                        <div className="text-xs text-gray-600">Orçamento personalizado</div>
                      </div>
                    </div>
                  )}

                  <div className="mb-4 p-2 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-center">
                      <div className="text-xs font-semibold text-green-700">SLA: {plan.sla}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 text-xs">
                    <p className="font-semibold text-gray-700">Ideal para:</p>
                    {plan.applications.map((app, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 leading-tight">{app}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20Link%20Dedicado%20${plan.speed}`}>
                    <button className={`w-full text-sm link-dedicado-button ${plan.popular ? 'btn-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Solicitar Orçamento
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
              Vantagens do{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Link Dedicado
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
              Incluído no{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Link Dedicado
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100">
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
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leve Sua Conectividade ao Próximo Nível!
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Fale com nossos especialistas e receba uma proposta personalizada de Link Dedicado 
            com a melhor infraestrutura do mercado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20orçamento%20para%20Link%20Dedicado">
              <button 
                className="btn-primary-cta-link-dedicado text-lg group shadow-2xl whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Network className="w-5 h-5 mr-2" />
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Gostaria%20de%20agendar%20uma%20consultoria%20técnica">
              <button 
                className="btn-outline-light-cta-link-dedicado text-lg whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Agendar Consultoria Técnica
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>100% Dedicado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>SLA Garantido</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
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

        /* Botões da página Link Dedicado - tamanhos idênticos */
        .btn-primary-link-dedicado {
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

        .btn-primary-link-dedicado:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-link-dedicado {
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

        .btn-outline-light-link-dedicado:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página Link Dedicado - tamanhos idênticos */
        .btn-primary-cta-link-dedicado {
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

        .btn-primary-cta-link-dedicado:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cta-link-dedicado {
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

        .btn-outline-light-cta-link-dedicado:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões dos planos link dedicado - estilos específicos */
        .link-dedicado-button {
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

        .link-dedicado-button:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
