"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight, Send, 
  CheckCircle2, Zap, Shield, Users, TrendingUp, Headphones,
  Calendar, Globe, Building2, User, Briefcase, MessageSquare,
  ChevronDown, ChevronUp, Play, Star, Radio, CheckCircle
} from "lucide-react"

export default function ContatoPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeMethod, setActiveMethod] = useState<number | null>(null)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Meu nome é ${formData.name}.
    
Empresa: ${formData.company}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço de Interesse: ${formData.service}

Mensagem: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/5511982437768?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  // Verifica se está em horário comercial
  const isBusinessHours = () => {
    const hour = currentTime.getHours()
    const day = currentTime.getDay()
    
    if (day === 0) return false // Domingo
    if (day === 6) return hour >= 8 && hour < 12 // Sábado
    return hour >= 8 && hour < 18 // Segunda a Sexta
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      description: "Atendimento instantâneo",
      value: "+55 11 98243-7768",
      link: "https://wa.me/5511982437768",
      gradient: "from-green-500 to-emerald-600",
      badge: "Mais Rápido",
      available: true,
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Fale com especialistas",
      value: "+55 11 98243-7768",
      link: "tel:+5511982437768",
      gradient: "from-blue-500 to-cyan-600",
      badge: "Direto",
      available: isBusinessHours(),
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Propostas formais",
      value: "contato@bkoconsultoria.com.br",
      link: "mailto:contato@bkoconsultoria.com.br",
      gradient: "from-purple-500 to-pink-600",
      badge: "24h",
      available: true,
    },
  ]

  const reasons = [
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Retorno garantido em até 2 horas no horário comercial",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Especialistas Dedicados",
      description: "Equipe técnica especializada para cada tipo de solução",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Consultoria Gratuita",
      description: "Análise completa das suas necessidades sem compromisso",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Propostas Personalizadas",
      description: "Soluções customizadas para o seu negócio",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const faqs = [
    {
      question: "Qual é o tempo médio de resposta?",
      answer: "Respondemos todas as solicitações em até 2 horas durante o horário comercial (Seg-Sex, 8h-18h). Via WhatsApp, o atendimento é ainda mais rápido, geralmente em poucos minutos. Para clientes Premium, oferecemos suporte 24/7.",
    },
    {
      question: "A consultoria inicial é realmente gratuita?",
      answer: "Sim! Nossa consultoria inicial é 100% gratuita e sem compromisso. Analisamos suas necessidades, fazemos um diagnóstico da sua infraestrutura atual e apresentamos as melhores opções do mercado. Você só investe quando decidir contratar.",
    },
    {
      question: "Vocês atendem empresas de qualquer porte?",
      answer: "Absolutamente! Atendemos desde startups e pequenas empresas até grandes corporações. Cada cliente recebe uma proposta personalizada de acordo com seu porte, segmento e necessidades específicas.",
    },
    {
      question: "Como funciona o processo de contratação?",
      answer: "É simples: 1) Entre em contato conosco; 2) Agendamos uma consultoria técnica gratuita; 3) Analisamos suas necessidades e cobertura da região; 4) Apresentamos as melhores opções entre nossos parceiros; 5) Você escolhe e cuidamos de toda a implementação.",
    },
    {
      question: "Qual a diferença entre contratar diretamente com a operadora e através da BKO?",
      answer: "Através da BKO você tem acesso a: condições comerciais exclusivas, suporte técnico especializado, gestão unificada de múltiplos fornecedores, consultoria contínua e um único ponto de contato para resolver qualquer problema. Simplificamos sua operação!",
    },
    {
      question: "Vocês oferecem suporte técnico após a contratação?",
      answer: "Sim! Oferecemos suporte técnico completo mesmo após a implementação. Clientes Premium têm acesso a suporte 24/7/365. Além disso, fazemos avaliações periódicas para garantir que sua solução continua atendendo suas necessidades.",
    },
  ]

  const services = [
    "Internet Fibra Óptica",
    "Internet Móvel 4G/5G",
    "Link Dedicado",
    "PABX em Nuvem",
    "Telefonia VoIP",
    "Soluções Cloud",
    "Backup em Nuvem",
    "Consultoria Técnica",
    "Outro"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* NOVA SEÇÃO HERO - SPLIT SCREEN LAYOUT */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50" />
        
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)]">
            
            {/* LADO ESQUERDO - Informações e Status */}
            <div className={`space-y-8 ${isVisible ? "animate-slide-left" : ""}`}>
              {/* Badge de status ao vivo */}
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-gray-100">
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full ${isBusinessHours() ? 'bg-green-500' : 'bg-gray-400'}`} />
                  {isBusinessHours() && (
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  )}
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {isBusinessHours() ? 'Equipe Online Agora' : 'Fora do Horário Comercial'}
                </span>
                <span className="text-xs text-gray-500">
                  {currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              {/* Título Principal */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Fale com{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500">
                    Especialistas
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Nossa equipe está pronta para entender suas necessidades e recomendar 
                  as melhores soluções em telecomunicações para sua empresa
                </p>
              </div>

              {/* Cards de Contato Rápido */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Link 
                      key={index} 
                      href={method.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className={`
                        bg-white rounded-2xl p-6 border-2 border-gray-100
                        hover:border-purple-300 hover:shadow-xl
                        transition-all duration-300
                        flex items-center justify-between gap-4
                        ${!method.available ? 'opacity-60' : ''}
                      `}>
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-lg text-gray-900">{method.title}</h3>
                              <span className="text-xs font-bold px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                                {method.badge}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{method.description}</p>
                            <p className="text-sm font-semibold text-gray-900 mt-1">{method.value}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {method.available ? (
                            <div className="flex items-center gap-2 text-green-600">
                              <Radio className="w-4 h-4" />
                              <span className="text-xs font-semibold">Disponível</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span className="text-xs font-semibold">Offline</span>
                            </div>
                          )}
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Informações Adicionais */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-xl p-4 border-2 border-purple-100">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-gray-900">Localização</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Santana, São Paulo - SP
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-gray-900">Horário</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Seg-Sex: 8h-18h
                  </p>
                </div>
              </div>
            </div>

            {/* LADO DIREITO - Cards Interativos de Vantagens */}
            <div className={`space-y-6 ${isVisible ? "animate-slide-right" : ""}`}>
              {/* Card Principal de CTA */}
              <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
                    <Headphones className="w-4 h-4" />
                    <span className="text-sm font-bold">Consultoria Gratuita</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">
                    Transforme a Conectividade da Sua Empresa
                  </h2>
                  
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Receba uma análise completa das suas necessidades e descubra 
                    as melhores soluções do mercado sem nenhum compromisso
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      'Análise técnica gratuita',
                      'Resposta em até 2 horas',
                      'Propostas personalizadas',
                      'Sem compromisso'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="https://wa.me/5511982437768?text=Olá%20BKO%20Consultoria" target="_blank">
                    <Button className="w-full bg-white text-purple-700 hover:bg-gray-50 text-lg py-6 font-bold shadow-lg group">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Iniciar Conversa no WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Grid de Vantagens */}
              <div className="grid grid-cols-2 gap-4">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon
                  return (
                    <div 
                      key={index}
                      className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">{reason.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{reason.description}</p>
                    </div>
                  )
                })}
              </div>

              {/* Estatísticas Rápidas */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '500+', label: 'Empresas' },
                  { value: '99.9%', label: 'Uptime' },
                  { value: '24/7', label: 'Suporte' }
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border-2 border-gray-100 text-center">
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Formulário de Contato - AVANÇADO */}
      <section id="contact-form" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulário */}
            <div>
              <div className="mb-8">
                <div className="inline-block mb-4">
                  <div className="px-6 py-2 rounded-full border-2 border-purple-200 bg-purple-50">
                    <span className="text-purple-700 text-sm font-bold flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      FORMULÁRIO DE CONTATO
                    </span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Envie Sua{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                    Mensagem
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  Preencha o formulário e receba um retorno personalizado em até 2 horas
                </p>
              </div>

              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center animate-slide-up">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-soft">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-green-700 mb-4">
                    Você será redirecionado para o WhatsApp para continuar a conversa.
                  </p>
                  <p className="text-sm text-green-600">
                    Caso não tenha sido redirecionado, clique no botão abaixo:
                  </p>
                  <Link href="https://wa.me/5511982437768" target="_blank" className="inline-block mt-4">
                    <Button className="bg-green-500 hover:bg-green-600">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Abrir WhatsApp
                    </Button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Informações Pessoais */}
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Suas Informações</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold mb-2 text-gray-900">
                          <User className="w-4 h-4 text-purple-600" />
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 bg-white transition-colors"
                          placeholder="João Silva"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold mb-2 text-gray-900">
                          <Mail className="w-4 h-4 text-purple-600" />
                          E-mail Corporativo *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 bg-white transition-colors"
                          placeholder="joao@empresa.com.br"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold mb-2 text-gray-900">
                          <Phone className="w-4 h-4 text-purple-600" />
                          Telefone/WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 bg-white transition-colors"
                          placeholder="(11) 98765-4321"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold mb-2 text-gray-900">
                          <Building2 className="w-4 h-4 text-purple-600" />
                          Empresa *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 bg-white transition-colors"
                          placeholder="Nome da Empresa"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Serviço e Mensagem */}
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">O Que Você Precisa?</h3>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold mb-2 text-gray-900">
                        <Briefcase className="w-4 h-4 text-purple-600" />
                        Serviço de Interesse *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 bg-white transition-colors"
                      >
                        <option value="">Selecione o serviço desejado</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold mb-2 text-gray-900">
                        <MessageSquare className="w-4 h-4 text-purple-600" />
                        Descreva Suas Necessidades *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 bg-white transition-colors resize-none"
                        placeholder="Conte-nos mais sobre o que sua empresa precisa. Quanto mais detalhes, melhor poderemos ajudar!"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-primary text-lg py-6 group shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem via WhatsApp
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar com Informações */}
            <div className="space-y-6">
              {/* Depoimento */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "O atendimento da BKO é excepcional. Eles realmente entendem as necessidades 
                  da nossa empresa e sempre indicam as melhores soluções. Recomendo!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    RS
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Roberto Silva</p>
                    <p className="text-sm text-gray-600">Diretor de TI - Empresa XYZ</p>
                  </div>
                </div>
              </div>

              {/* Horário */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-4">Horário de Atendimento</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">Segunda a Sexta</span>
                        <span className="text-gray-600">08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">Sábado</span>
                        <span className="text-gray-600">Fechado</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">Domingo</span>
                        <span className="text-gray-600">Fechado</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        Suporte 24/7 para clientes Premium
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direto */}
              <Link href="https://wa.me/5511982437768" target="_blank" rel="noopener noreferrer">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Prefere WhatsApp?</h3>
                      <p className="text-green-100">Clique aqui para atendimento instantâneo</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">+55 11 98243-7768</span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - ACCORDION INTERATIVO */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative decorative-bg">
        <div className="decorative-dots" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perguntas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas antes de entrar em contato
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-bold text-lg text-gray-900 pr-4">{faq.question}</h3>
                    <div className={`w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-purple-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-600" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Não encontrou o que procurava?</p>
            <Link href="https://wa.me/5511982437768" target="_blank">
              <Button className="btn-primary text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Conosco Agora
              </Button>
            </Link>
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

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        @keyframes bounce-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }


        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
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

        .decorative-bg {
          position: relative;
        }

        .decorative-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.3;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
