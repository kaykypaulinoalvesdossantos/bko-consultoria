"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Cloud, Check, ArrowRight, Zap, Shield, Users, TrendingUp,
  Building2, Server, Globe, Lock, Award, Target,
  CheckCircle2, Sparkles, Settings, BarChart3, Database,
  Cpu, HardDrive, Network, Layers, Box, Boxes,
  AlertCircle, FileText, Upload, Download, RefreshCw,
  Workflow, GitBranch, Gauge, Eye, Minimize2, Maximize2
} from "lucide-react"

export default function CloudComputingPage() {
  const [activeTab, setActiveTab] = useState("oque")

  const cloudTypes = [
    {
      icon: Cloud,
      title: "Cloud Pública",
      description: "Infraestrutura compartilhada oferecida por provedores como AWS, Azure, Google Cloud e Huawei Cloud",
      benefits: ["Menor custo inicial", "Escalabilidade ilimitada", "Sem manutenção de hardware"],
      useCases: ["Startups e PMEs", "Aplicações web", "Desenvolvimento e testes"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Cloud Privada",
      description: "Infraestrutura dedicada exclusivamente para uma organização, hospedada on-premise ou por terceiros",
      benefits: ["Controle total", "Segurança máxima", "Personalização completa"],
      useCases: ["Grandes corporações", "Dados sensíveis", "Compliance rigoroso"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Layers,
      title: "Cloud Híbrida",
      description: "Combinação de cloud pública e privada, permitindo migrar cargas de trabalho entre ambientes",
      benefits: ["Flexibilidade total", "Otimização de custos", "Melhor desempenho"],
      useCases: ["Empresas em transição", "Ambientes regulados", "Disaster recovery"],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const serviceModels = [
    {
      icon: Box,
      title: "IaaS - Infrastructure as a Service",
      subtitle: "Infraestrutura como Serviço",
      description: "Fornece recursos computacionais virtualizados: servidores, armazenamento, rede e sistemas operacionais sob demanda",
      examples: ["Amazon EC2", "Microsoft Azure VMs", "Huawei ECS"],
      control: "Alto controle",
      ideal: "Migração de data centers, desenvolvimento e testes, hospedagem de aplicações",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Layers,
      title: "PaaS - Platform as a Service",
      subtitle: "Plataforma como Serviço",
      description: "Plataforma completa de desenvolvimento com ferramentas, banco de dados e middleware gerenciados",
      examples: ["AWS Elastic Beanstalk", "Azure App Service", "Huawei ServiceStage"],
      control: "Controle médio",
      ideal: "Desenvolvimento de aplicações, APIs e microserviços, DevOps",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Boxes,
      title: "SaaS - Software as a Service",
      subtitle: "Software como Serviço",
      description: "Aplicações prontas acessíveis via internet, sem necessidade de instalação ou manutenção",
      examples: ["Microsoft 365", "Salesforce", "Google Workspace"],
      control: "Baixo controle",
      ideal: "E-mail corporativo, CRM, ERP, colaboração em equipe",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Redução de Custos",
      description: "Elimine investimentos em hardware e infraestrutura. Pague apenas pelo que usar com modelo pay-as-you-go.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Escalabilidade Automática",
      description: "Aumente ou diminua recursos instantaneamente conforme a demanda, sem interrupções.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Acesso Global",
      description: "Dados centers em múltiplas regiões garantem baixa latência e alta disponibilidade mundial.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Criptografia, firewall, DDoS protection e compliance com padrões internacionais inclusos.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: RefreshCw,
      title: "Backup e Disaster Recovery",
      description: "Replicação automática de dados em múltiplas zonas de disponibilidade para proteção total.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Colaboração em Tempo Real",
      description: "Equipes distribuídas acessam e compartilham recursos de qualquer lugar com internet.",
      color: "from-pink-500 to-purple-500"
    },
  ]

  const providers = [
    {
      id: "aws",
      name: "Amazon Web Services (AWS)",
      logo: "/Logo/AWS.png",
      description: "Líder global em cloud computing com mais de 200 serviços disponíveis",
      strengths: ["Maior portfólio de serviços", "Ecossistema maduro", "Documentação extensa"],
      services: ["EC2 (Computação)", "S3 (Armazenamento)", "RDS (Banco de Dados)", "Lambda (Serverless)"],
      color: "from-orange-600 to-yellow-600"
    },
    {
      id: "azure",
      name: "Microsoft Azure",
      logo: "/Logo/Microsoft-Azure.png",
      description: "Plataforma cloud integrada com produtos Microsoft e híbrida por natureza",
      strengths: ["Integração com Microsoft 365", "Melhor solução híbrida", "Active Directory nativo"],
      services: ["Virtual Machines", "Blob Storage", "SQL Database", "Azure Functions"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: "google",
      name: "Google Cloud Platform",
      logo: "/Logo/Google-Cloud.png",
      description: "Infraestrutura global do Google com IA e machine learning avançados",
      strengths: ["Melhor em IA/ML", "Rede global ultra-rápida", "Kubernetes nativo"],
      services: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions"],
      color: "from-red-600 to-yellow-500"
    },
    {
      id: "huawei",
      name: "Huawei Cloud",
      logo: "/Logo/Huawei.png",
      description: "Plataforma cloud de alta performance com foco em inovação e IA",
      strengths: ["Excelente custo-benefício", "IA e Machine Learning integrados", "Presença global crescente"],
      services: ["ECS (Elastic Cloud Server)", "OBS (Object Storage)", "RDS (Database)", "FunctionGraph"],
      color: "from-red-600 to-pink-600"
    }
  ]

  const useCases = [
    {
      icon: Server,
      title: "Hospedagem de Aplicações",
      description: "Hospede websites, aplicativos web e mobile com alta disponibilidade",
      examples: ["E-commerce", "Portais corporativos", "Aplicativos SaaS"]
    },
    {
      icon: Database,
      title: "Armazenamento e Backup",
      description: "Guarde terabytes de dados com redundância e acesso rápido",
      examples: ["Backup de servidores", "Arquivos corporativos", "Data lakes"]
    },
    {
      icon: Cpu,
      title: "Processamento de Big Data",
      description: "Análise de grandes volumes de dados com clusters escaláveis",
      examples: ["Business Intelligence", "Machine Learning", "Analytics em tempo real"]
    },
    {
      icon: Workflow,
      title: "DevOps e CI/CD",
      description: "Automação de deploy, integração e entrega contínua",
      examples: ["Pipelines automatizados", "Testes automatizados", "Deploy contínuo"]
    },
    {
      icon: Network,
      title: "Disaster Recovery",
      description: "Recuperação de desastres com replicação automática",
      examples: ["Backup geográfico", "Failover automático", "RPO/RTO otimizados"]
    },
    {
      icon: GitBranch,
      title: "Desenvolvimento e Testes",
      description: "Ambientes de dev/test sob demanda sem custo de hardware",
      examples: ["Ambientes efêmeros", "Testes de carga", "Homologação"]
    }
  ]

  const migrationSteps = [
    {
      step: "1",
      title: "Avaliação e Planejamento",
      description: "Analise sua infraestrutura atual, identifique aplicações críticas e defina estratégia de migração",
      icon: FileText
    },
    {
      step: "2",
      title: "Escolha do Provedor",
      description: "Selecione o provedor cloud que melhor atende suas necessidades técnicas e orçamentárias",
      icon: Target
    },
    {
      step: "3",
      title: "Preparação do Ambiente",
      description: "Configure VPCs, subnets, segurança, backups e políticas de acesso no ambiente cloud",
      icon: Settings
    },
    {
      step: "4",
      title: "Migração de Dados",
      description: "Transfira dados e aplicações usando ferramentas de migração ou replicação incremental",
      icon: Upload
    },
    {
      step: "5",
      title: "Testes e Validação",
      description: "Valide funcionamento, performance e segurança antes de migrar produção",
      icon: CheckCircle2
    },
    {
      step: "6",
      title: "Go-Live e Otimização",
      description: "Coloque em produção e monitore continuamente para otimizar custos e performance",
      icon: Gauge
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold">Cloud Computing - Computação em Nuvem</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Cloud Computing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">
                  Para Empresas
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Transforme sua infraestrutura de TI com <strong>computação em nuvem</strong>. 
                Escalabilidade ilimitada, segurança enterprise e redução de até <strong>70% nos custos</strong> 
                com AWS, Azure, Google Cloud e Huawei Cloud.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#oque">
                  <button 
                    className="btn-primary-cloud text-lg group whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    <Cloud className="w-5 h-5 mr-2" />
                    Entenda a Cloud
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria%20-%20Gostaria%20de%20consultoria%20sobre%20Cloud%20Computing">
                  <button 
                    className="btn-outline-light-cloud text-lg whitespace-nowrap"
                    style={{ height: '3.5rem', minWidth: '12rem' }}
                  >
                    Falar com Especialista
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: TrendingUp, value: "70%", label: "Economia" },
                  { icon: Globe, value: "Global", label: "Alcance" },
                  { icon: Zap, value: "99.99%", label: "Uptime" }
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
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Infraestrutura Moderna</p>
                    <p className="text-white font-bold text-lg">Cloud Computing</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Server, title: "IaaS", desc: "Infraestrutura" },
                    { icon: Layers, title: "PaaS", desc: "Plataforma" },
                    { icon: Boxes, title: "SaaS", desc: "Software" },
                    { icon: Lock, title: "Segurança", desc: "Enterprise" }
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
                    "Redução de custos até 70%",
                    "Escalabilidade ilimitada",
                    "Alta disponibilidade global",
                    "Segurança e compliance garantidos"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Cloud Computing?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Entenda a tecnologia que está transformando empresas globalmente
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "oque", label: "Conceito", icon: Cloud },
              { id: "tipos", label: "Tipos de Cloud", icon: Layers },
              { id: "modelos", label: "Modelos de Serviço", icon: Boxes },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2
                    ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
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
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100">
            {activeTab === "oque" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">O Que É Computação em Nuvem?</h3>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Cloud Computing</strong> (Computação em Nuvem) é a entrega de recursos de TI sob demanda 
                    pela internet com pagamento conforme o uso (pay-as-you-go). Em vez de comprar, manter e gerenciar 
                    data centers e servidores físicos, você acessa recursos como computação, armazenamento e bancos de 
                    dados de provedores cloud.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-xl text-gray-900">Infraestrutura Tradicional</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Alto investimento inicial (CAPEX)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Manutenção de hardware</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Escalabilidade limitada</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span>Recursos ociosos desperdiçados</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-xl text-gray-900">Cloud Computing</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Pagamento sob demanda (OPEX)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Sem manutenção de hardware</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Escalabilidade ilimitada</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Pague apenas pelo que usar</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <Cloud className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Características Principais:</h4>
                        <ul className="text-blue-800 space-y-1">
                          <li>• <strong>Sob demanda</strong>: Provisione recursos instantaneamente</li>
                          <li>• <strong>Auto-serviço</strong>: Gerencie via console web</li>
                          <li>• <strong>Elasticidade</strong>: Aumente/diminua automaticamente</li>
                          <li>• <strong>Medido</strong>: Monitore uso em tempo real</li>
                          <li>• <strong>Acesso amplo</strong>: De qualquer dispositivo conectado</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tipos" && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Cloud</h3>
                
                {cloudTypes.map((type, index) => {
                  const Icon = type.icon
                  return (
                    <div key={index} className="bg-white rounded-2xl p-8 border-2 border-blue-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-bold text-2xl text-gray-900">{type.title}</h4>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">{type.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="font-semibold text-gray-900 mb-3">Benefícios:</p>
                          <div className="space-y-2">
                            {type.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-600" />
                                <span className="text-gray-700 text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-semibold text-gray-900 mb-3">Ideal para:</p>
                          <div className="space-y-2">
                            {type.useCases.map((useCase, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-700 text-sm">{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {activeTab === "modelos" && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Modelos de Serviço Cloud</h3>
                
                {serviceModels.map((model, index) => {
                  const Icon = model.icon
                  return (
                    <div key={index} className="bg-white rounded-2xl p-8 border-2 border-purple-200">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${model.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-2xl text-gray-900 mb-1">{model.title}</h4>
                          <p className="text-gray-600 font-medium">{model.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">{model.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Exemplos:</p>
                          <div className="space-y-1">
                            {model.examples.map((example, i) => (
                              <p key={i} className="text-sm text-gray-600">• {example}</p>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-xl p-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Nível de Controle:</p>
                          <p className="text-lg font-bold text-green-700">{model.control}</p>
                        </div>
                        
                        <div className="bg-purple-50 rounded-xl p-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Melhor para:</p>
                          <p className="text-sm text-gray-600">{model.ideal}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Provedores Cloud */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Principais{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Provedores Cloud
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Conheça os líderes globais em computação em nuvem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {providers.map((provider) => (
              <div
                key={provider.id}
                className="text-left p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 p-3 shadow-lg">
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{provider.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{provider.description}</p>
                
                <div className="space-y-4 mt-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Pontos Fortes:</p>
                    <div className="space-y-2">
                      {provider.strengths.map((strength, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                          <span className="text-xs text-gray-700">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Principais Serviços:</p>
                    <div className="space-y-2">
                      {provider.services.map((service, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Server className="w-3 h-3 text-blue-600 flex-shrink-0" />
                          <span className="text-xs text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Casos de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Uso da Cloud
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Exemplos:</p>
                    {useCase.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Migração para Cloud */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Como Migrar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Para a Cloud
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              6 passos para uma migração bem-sucedida
            </p>
          </div>

          <div className="space-y-6">
            {migrationSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="flex gap-6 bg-white rounded-2xl p-8 border-2 border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <h3 className="font-bold text-2xl text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
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
              Benefícios da{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Cloud Computing
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

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leve Sua Empresa para a Nuvem!
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Fale com nossos especialistas e descubra como a Cloud Computing pode 
            transformar sua infraestrutura de TI com AWS, Azure, Google Cloud ou Huawei Cloud
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Quero%20consultoria%20sobre%20Cloud%20Computing">
              <button 
                className="btn-primary-cta-cloud text-lg group shadow-2xl whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                <Cloud className="w-5 h-5 mr-2" />
                Consultoria Cloud
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20-%20Gostaria%20de%20orçamento%20para%20migração%20cloud">
              <button 
                className="btn-outline-light-cta-cloud text-lg whitespace-nowrap"
                style={{ height: '4rem', minWidth: '16rem' }}
              >
                Orçamento Migração
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Consultoria Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Migração Assistida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Suporte Especializado</span>
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
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

        /* Botões da página Cloud - tamanhos idênticos */
        .btn-primary-cloud {
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

        .btn-primary-cloud:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cloud {
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

        .btn-outline-light-cloud:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Botões CTA da página Cloud - tamanhos idênticos */
        .btn-primary-cta-cloud {
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

        .btn-primary-cta-cloud:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          background: linear-gradient(135deg, #5558e3 0%, #0891d1 100%) !important;
        }

        .btn-outline-light-cta-cloud {
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

        .btn-outline-light-cta-cloud:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }
      `}</style>
    </div>
  )
}
