import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Award, Shield, Globe, CheckCircle, Menu, X, User, FileText, Clock } from 'lucide-react';

// ============================================
// GLOBAL COMMODITIES TRADING - REACT APP
// Enfoque EEAT + SEO + Diseño Premium
// ============================================

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Paleta de colores Premium
  const colors = {
    gold: '#D4AF37',
    goldLight: '#E8C547',
    navy: '#0A1628',
    navyLight: '#1E3A5F',
    white: '#FFFFFF',
    gray: '#F5F5F5',
    textDark: '#1A1A1A',
    textGray: '#6B7280'
  };

  // Componente Header
  const Header = () => (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigateTo('inicio')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mr-3">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight" style={{fontFamily: 'Inter, sans-serif'}}>
                GLOBAL<span className="text-amber-600">COMMODITIES</span>
              </h1>
              <p className="text-xs text-slate-500">Trading Internacional desde 2010</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Servicios', 'Oro', 'Nosotros', 'Contacto'].map((item) => {
              const pageKey = item.toLowerCase();
              const isActive = currentPage === pageKey || (item === 'Nosotros' && currentPage === 'nosotros');
              return (
                <button
                  key={item}
                  onClick={() => navigateTo(pageKey === 'nosotros' ? 'nosotros' : pageKey)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-amber-600 border-b-2 border-amber-600'
                      : 'text-slate-700 hover:text-amber-600'
                  }`}
                  style={{fontFamily: 'Inter, sans-serif'}}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => navigateTo('contacto')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{fontFamily: 'Inter, sans-serif'}}
            >
              Cotización Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Inicio', 'Servicios', 'Oro', 'Nosotros', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item.toLowerCase() === 'nosotros' ? 'nosotros' : item.toLowerCase())}
                className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => navigateTo('contacto')}
              className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      )}
    </header>
  );

  // Componente Footer
  const Footer = () => (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mr-2">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold" style={{fontFamily: 'Inter, sans-serif'}}>GLOBAL COMMODITIES</span>
            </div>
            <p className="text-slate-400 text-sm mb-4" style={{fontFamily: 'Open Sans, sans-serif'}}>
              Líderes en comercio internacional de metales preciosos y commodities agrícolas desde 2010.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl">🇵🇪</span>
              <span className="text-2xl">🇧🇴</span>
              <span className="text-2xl">🇻🇪</span>
              <span className="text-2xl">🇪🇨</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-400 font-semibold mb-4" style={{fontFamily: 'Inter, sans-serif'}}>Navegación</h3>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Oro', 'Nosotros', 'Contacto', 'FAQ'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => navigateTo(link.toLowerCase() === 'faq' ? 'faq' : link.toLowerCase() === 'nosotros' ? 'nosotros' : link.toLowerCase())}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                    style={{fontFamily: 'Open Sans, sans-serif'}}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-amber-400 font-semibold mb-4" style={{fontFamily: 'Inter, sans-serif'}}>Servicios</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigateTo('gold')} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">Compra de Oro</button>
              </li>
              <li className="text-slate-400 text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>Compra de Plata</li>
              <li className="text-slate-400 text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>Venta de Urea</li>
              <li className="text-slate-400 text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>Venta de Azúcar</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-400 font-semibold mb-4" style={{fontFamily: 'Inter, sans-serif'}}>Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-400 text-sm">
                <Phone className="w-4 h-4 mr-2 text-amber-500" />
                <span style={{fontFamily: 'Open Sans, sans-serif'}}>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Mail className="w-4 h-4 mr-2 text-amber-500" />
                <span style={{fontFamily: 'Open Sans, sans-serif'}}>info@globalcommodities.com</span>
              </li>
              <li className="flex items-start text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-amber-500 mt-1" />
                <span style={{fontFamily: 'Open Sans, sans-serif'}}>Miami, FL - Sede Principal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>
            © 2024 Global Commodities Trading. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-slate-500 text-sm hover:text-amber-400 cursor-pointer">Términos de Servicio</span>
            <span className="text-slate-500 text-sm hover:text-amber-400 cursor-pointer">Política de Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );

  // ============================================
  // PÁGINA: INICIO
  // ============================================
  const HomePage = () => (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-full">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Desde 2010 • Excelencia Internacional</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{fontFamily: 'Inter, sans-serif'}}>
              Comercio Global de<br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Metales Preciosos</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
              Conectamos mercados internacionales con excelencia. Compra de oro y plata en Latinoamérica,
              venta de urea y azúcar premium a Europa y Medio Oriente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigateTo('contacto')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                style={{fontFamily: 'Inter, sans-serif'}}
              >
                Solicitar Cotización Internacional
              </button>
              <button
                onClick={() => navigateTo('servicios')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                style={{fontFamily: 'Inter, sans-serif'}}
              >
                Explorar Servicios
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center text-slate-400">
                <Shield className="w-5 h-5 mr-2 text-amber-500" />
                <span className="text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>Operaciones Seguras</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Award className="w-5 h-5 mr-2 text-amber-500" />
                <span className="text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>14 Años de Experiencia</span>
              </div>
              <div className="flex items-center text-slate-400">
                <CheckCircle className="w-5 h-5 mr-2 text-amber-500" />
                <span className="text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>Certificación Internacional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Países' },
              { number: '$100M+', label: 'Volumen Anual' },
              { number: '500+', label: 'Operaciones/Año' },
              { number: '98%', label: 'Satisfacción' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>{stat.number}</div>
                <div className="text-slate-600 text-sm uppercase tracking-wider" style={{fontFamily: 'Open Sans, sans-serif'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
              Nuestros <span className="text-amber-600">Servicios</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto" style={{fontFamily: 'Open Sans, sans-serif'}}>
              Operaciones internacionales de commodities con los más altos estándares de calidad y confiabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚜️',
                title: 'Compra de Oro',
                desc: 'Adquisición en Perú, Bolivia, Venezuela y Ecuador',
                countries: '🇵🇪 🇧🇴 🇻🇪 🇪🇨',
                cta: 'Ver Protocolo',
                target: 'gold'
              },
              {
                icon: '☀️',
                title: 'Compra de Plata',
                desc: 'Evaluación profesional y pagos inmediatos',
                countries: '🇵🇪 🇧🇴 🇻🇪 🇪🇨',
                cta: 'Ver Países',
                target: 'servicios'
              },
              {
                icon: '📦',
                title: 'Venta de Urea',
                desc: 'Distribución a Europa, México y Medio Oriente',
                countries: '🇪🇺 🇲🇽 🇸🇦',
                cta: 'Consultar Stock',
                target: 'servicios'
              },
              {
                icon: '🍬',
                title: 'Venta de Azúcar',
                desc: 'Azúcar ICUMSA 45 de Brasil y México',
                countries: '🇪🇺 🇲🇽 🇦🇪',
                cta: 'Solicitar Precio',
                target: 'servicios'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 group">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>{service.desc}</p>
                <div className="text-2xl mb-4">{service.countries}</div>
                <button
                  onClick={() => navigateTo(service.target)}
                  className="text-amber-600 font-semibold text-sm hover:text-amber-700 flex items-center group-hover:translate-x-2 transition-transform"
                >
                  {service.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT Trust Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-amber-500/20 rounded-full">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">EEAT • Experiencia Comprobada</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                Liderazgo Respaldado por <span className="text-amber-400">20 Años de Experiencia</span>
              </h2>
              <p className="text-slate-300 mb-6" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Nuestro Director de Operaciones, con dos décadas de trayectoria en comercio internacional de metales,
                lidera un equipo de expertos certificados que garantizan cada operación.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-500 mr-2" />
                  <span className="text-white text-sm">ISO 9001 Certified</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-amber-500 mr-2" />
                  <span className="text-white text-sm">AML Compliant</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                  <span className="text-white text-sm">LBMA Approved</span>
                </div>
              </div>
              <button
                onClick={() => navigateTo('nosotros')}
                className="mt-8 text-amber-400 font-semibold hover:text-amber-300 flex items-center"
              >
                Conozca a nuestro equipo →
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-10 h-10 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1" style={{fontFamily: 'Inter, sans-serif'}}>Roberto Méndez</h3>
                    <p className="text-amber-400 text-sm mb-3">Director de Operaciones</p>
                    <p className="text-slate-400 text-sm leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                      "Con más de 20 años en el comercio internacional de metales preciosos, hemos construido
                      una red de confianza que abarca desde los Andes hasta los mercados de Europa y Medio Oriente."
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">MBA Internacional</span>
                      <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">Cert. Precious Metals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // ============================================
  // PÁGINA: SERVICIOS (Detallada)
  // ============================================
  const ServicesPage = () => (
    <div className="pt-24 pb-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
            Nuestros <span className="text-amber-600">Servicios</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto" style={{fontFamily: 'Open Sans, sans-serif'}}>
            Soluciones integrales para el comercio internacional de commodities. Desde la adquisición de metales preciosos
            en Latinoamérica hasta la distribución de productos agrícolas en mercados globales.
          </p>
        </div>

        {/* Oro y Plata Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <div className="inline-block mb-4 px-3 py-1 bg-amber-500/20 rounded-full">
                  <span className="text-amber-400 text-xs font-semibold uppercase">Metales Preciosos</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                  Compra de <span className="text-amber-400">Oro</span> y <span className="text-slate-300">Plata</span>
                </h2>
                <p className="text-slate-300 mb-6 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Operamos en los principales mercados mineros de Sudamérica, ofreciendo los mejores precios
                  por su oro y plata. Evaluación profesional, pagos inmediatos y total confidencialidad.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Evaluación Certificada:</span>
                      <span className="text-slate-400 text-sm ml-2">Análisis de pureza en laboratorio con equipos de última generación</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Precio Internacional:</span>
                      <span className="text-slate-400 text-sm ml-2">Cotización basada en el LBMA (London Bullion Market Association)</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Pago Inmediato:</span>
                      <span className="text-slate-400 text-sm ml-2">Transferencia bancaria el mismo día de la operación</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    onClick={() => navigateTo('gold')}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
                  >
                    Ver Detalles del Oro
                  </button>
                  <button
                    onClick={() => navigateTo('contacto')}
                    className="bg-transparent border-2 border-white/20 hover:border-amber-500 text-white px-8 py-3 rounded-full font-semibold transition-all"
                  >
                    Consultar Precios
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h3 className="text-lg font-semibold mb-4 text-amber-400">Países donde Operamos:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { country: 'Perú', cities: 'Lima, Arequipa, Cusco, La Libertad', flag: '🇵🇪' },
                    { country: 'Bolivia', cities: 'La Paz, Santa Cruz, Potosí, Cochabamba', flag: '🇧🇴' },
                    { country: 'Venezuela', cities: 'Caracas, Maracaibo, Valencia, Puerto Ordaz', flag: '🇻🇪' },
                    { country: 'Ecuador', cities: 'Quito, Guayaquil, Cuenca, Loja', flag: '🇪🇨' }
                  ].map((loc, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-amber-500/50 transition-colors">
                      <div className="text-3xl mb-2">{loc.flag}</div>
                      <h4 className="font-bold text-white">{loc.country}</h4>
                      <p className="text-slate-400 text-sm">{loc.cities}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urea y Azúcar Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Urea */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="inline-block mb-4 px-3 py-1 bg-blue-100 rounded-full">
                <span className="text-blue-600 text-xs font-semibold uppercase">Agricultura</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                Venta de <span className="text-blue-600">Urea</span>
              </h2>
              <p className="text-slate-600 mb-6" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Distribución de urea agrícola e industrial de la más alta calidad. Proveedor directo
                con capacidad de exportación masiva hacia múltiples continentes.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>Urea 46% Nitrógeno (Prilled)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>Certificación SGS</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>Envases: 50kg, Big Bags, Bulk</span>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-sm font-semibold text-slate-700">Mercados Destino:</span>
                <div className="flex gap-2 mt-2">
                  <span className="text-2xl" title="Europa">🇪🇺</span>
                  <span className="text-2xl" title="México">🇲🇽</span>
                  <span className="text-2xl" title="Medio Oriente">🇸🇦</span>
                </div>
              </div>

              <button
                onClick={() => navigateTo('contacto')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Consultar Logística Urea
              </button>
            </div>

            {/* Azúcar */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="inline-block mb-4 px-3 py-1 bg-amber-100 rounded-full">
                <span className="text-amber-600 text-xs font-semibold uppercase">Commodities</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                Venta de <span className="text-amber-600">Azúcar</span>
              </h2>
              <p className="text-slate-600 mb-6" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Azúcar brasileña y mexicana ICUMSA 45 de primera calidad. Exportación a mercados
                exigentes con todos los estándares internacionales.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                  <span>Azúcar ICUMSA 45 (Refinada)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                  <span>Origen: Brasil y México</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                  <span>Empaque: 50kg sacos, contenedores</span>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-sm font-semibold text-slate-700">Mercados Destino:</span>
                <div className="flex gap-2 mt-2">
                  <span className="text-2xl" title="Europa">🇪🇺</span>
                  <span className="text-2xl" title="México">🇲🇽</span>
                  <span className="text-2xl" title="Medio Oriente">🇦🇪</span>
                </div>
              </div>

              <button
                onClick={() => navigateTo('contacto')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Solicitar Cotización Azúcar
              </button>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12" style={{fontFamily: 'Inter, sans-serif'}}>
            Nuestro Proceso de <span className="text-amber-600">Trabajo</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contacto Inicial', desc: 'Usted nos contacta con sus requerimientos' },
              { step: '02', title: 'Evaluación', desc: 'Análisis de calidad y cantidad del producto' },
              { step: '03', title: 'Negociación', desc: 'Cotización basada en precios internacionales' },
              { step: '04', title: 'Ejecución', desc: 'Logística, pagos y entrega según contrato' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-amber-100 absolute -top-4 left-0">{item.step}</div>
                <div className="relative pt-8">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                    <ChevronDown className="w-6 h-6 text-amber-300 rotate-270" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  // ============================================
  // PÁGINA: NOSOTROS (EEAT Completo)
  // ============================================
  const AboutPage = () => (
    <div className="pt-24 pb-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Sobre Nosotros
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
            Experiencia que <span className="text-amber-600">Genera Confianza</span>
          </h1>
        </div>

        {/* Author Profile - EEAT */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white/20">
                  <User className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-block px-3 py-1 bg-amber-500/20 rounded-full mb-3">
                    <span className="text-amber-400 text-xs font-semibold uppercase">Author Profile • EEAT</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                    Roberto Méndez Vásquez
                  </h2>
                  <p className="text-amber-400 text-lg mb-4">Director de Operaciones</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">MBA Internacional</span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">20+ Años Experiencia</span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">Cert. Precious Metals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                    Biografía Profesional
                  </h3>
                  <div className="space-y-4 text-slate-600" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    <p>
                      Con más de 20 años de experiencia en el comercio internacional de metales preciosos,
                      Roberto Méndez ha liderado operaciones que abarcan desde las minas de los Andes hasta
                      los mercados de Londres y Dubái.
                    </p>
                    <p>
                      Su carrera comenzó en el 2004 como analista de commodities en Lima, Perú, ascendiendo
                      rápidamente a posiciones directivas en empresas líderes del sector. En 2010, fundó
                      Global Commodities Trading con la visión de conectar productores latinoamericanos con
                      mercados globales de manera ética y transparente.
                    </p>
                    <p>
                      Certificado por la London Bullion Market Association (LBMA) y miembro activo de la
                      Responsible Jewellery Council, Roberto ha sido ponente en conferencias internacionales
                      sobre comercio responsable de metales.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                    Credenciales y Formación
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'MBA en Comercio Internacional - Wharton School',
                      'Certificación LBMA (London Bullion Market Association)',
                      'Diplomado en Gestión de Riesgos Cambiarios',
                      'Miembro de Responsible Jewellery Council',
                      'Certificación AML (Anti-Money Laundering)',
                      'Ponente en Mining Investment Latin America (2018, 2022)'
                    ].map((cred, idx) => (
                      <li key={idx} className="flex items-start">
                        <Award className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
              Certificaciones y <span className="text-amber-600">Cumplimiento</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{fontFamily: 'Open Sans, sans-serif'}}>
              Operamos bajo los más altos estándares internacionales de calidad, seguridad y responsabilidad corporativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-amber-500" />,
                title: 'ISO 9001:2015',
                desc: 'Certificación en Sistemas de Gestión de Calidad que garantiza procesos estandarizados y mejora continua en todas nuestras operaciones.'
              },
              {
                icon: <FileText className="w-10 h-10 text-amber-500" />,
                title: 'Compliance AML',
                desc: 'Cumplimiento total con normativas Anti-Lavado de Activos (AML) y Know Your Customer (KYC) según estándares FATF.'
              },
              {
                icon: <Award className="w-10 h-10 text-amber-500" />,
                title: 'LBMA Approved',
                desc: 'Operaciones alineadas con los estándares de la London Bullion Market Association para comercio de metales preciosos.'
              }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{fontFamily: 'Inter, sans-serif'}}>{cert.title}</h3>
                <p className="text-slate-600 text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company History */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12" style={{fontFamily: 'Inter, sans-serif'}}>
            Nuestra <span className="text-amber-600">Historia</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
            {[
              { year: '2010', title: 'Fundación', desc: 'Nacimos en Lima, Perú, con la misión de conectar mineros locales con mercados internacionales.' },
              { year: '2013', title: 'Expansión Regional', desc: 'Ampliamos operaciones a Bolivia y Ecuador, estableciendo oficinas en La Paz y Quito.' },
              { year: '2016', title: 'Entrada a Europa', desc: 'Iniciamos exportaciones de commodities hacia mercados europeos, certificados ISO 9001.' },
              { year: '2019', title: 'Medio Oriente', desc: 'Establecimos alianzas estratégicas en el Golfo Pérsico para distribución de urea.' },
              { year: '2024', title: 'Líderes del Sector', desc: 'Consolidados como referentes con operaciones en 15+ países y $100M+ en volumen anual.' }
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center mb-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
                    <span className="text-amber-600 font-bold text-lg">{item.year}</span>
                    <h3 className="font-bold text-slate-900 mt-1" style={{fontFamily: 'Inter, sans-serif'}}>{item.title}</h3>
                    <p className="text-slate-600 text-sm mt-2" style={{fontFamily: 'Open Sans, sans-serif'}}>{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  // ============================================
  // PÁGINA: FAQ (Acordeón)
  // ============================================
  const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        question: '¿Cómo determina la pureza del oro que compran?',
        answer: 'Utilizamos equipos de análisis XRF (X-Ray Fluorescence) certificados y métodos de fuego (fire assay) en laboratorios acreditados. La pureza se mide en quilates o porcentaje, siempre siguiendo estándares LBMA. Los resultados son certificados y compartidos con el cliente antes de cualquier transacción.'
      },
      {
        question: '¿Cuáles son los tiempos de entrega para la urea?',
        answer: 'Los tiempos varían según el destino y volumen: Para México y Centroamérica: 5-10 días hábiles. Para Europa (vía marítima): 15-25 días. Para Medio Oriente: 20-30 días. Contamos con stock estratégico en puertos principales para reducir tiempos en pedidos urgentes.'
      },
      {
        question: '¿Qué certificaciones de exportación manejan para el azúcar?',
        answer: 'Nuestro azúcar ICUMSA 45 cumple con certificaciones SGS, certificado de origen, análisis de calidad ICUMSA, certificado fitosanitario y documentación completa para importación en UE (conforme a regulaciones de la Comisión Europea) y países del GCC (Golfo).'
      },
      {
        question: '¿Es seguro vender oro a través de su empresa?',
        answer: 'Absolutamente. Somos miembros registrados de la LBMA, cumplimos con todas las regulaciones AML (Anti-Money Laundering), operamos con contratos legales estandarizados, y ofrecemos pagos verificables mediante transferencia bancaria. Contamos con seguro de operaciones y protocolos de seguridad estrictos.'
      },
      {
        question: '¿Cuál es el volumen mínimo para comprar urea o azúcar?',
        answer: 'Para urea: Mínimo 1 contenedor (25 toneladas), óptimo 12,500 toneladas (buque completo). Para azúcar: Mínimo 1 contenedor, estándar 25,000 toneladas. Ofrecemos precios escalonados según volumen, siendo más competitivos en grandes cantidades.'
      },
      {
        question: '¿Cómo se realizan los pagos internacionales?',
        answer: 'Aceptamos: Transferencia SWIFT (para grandes volúmenes), Cartas de Crédito irrevocables (L/C), Transferencias por Western Union/MoneyGram (para montos menores), y Bitcoin/USDT (bajo previa evaluación). Todos los pagos se realizan tras verificación de calidad y firma de contrato.'
      },
      {
        question: '¿Operan en mi ciudad de Venezuela/Bolivia dados los embargos?',
        answer: 'Operamos dentro del marco legal internacional, cumpliendo todas las sanciones vigentes. Para ciertos países, trabajamos mediante intermediarios autorizados o estructuras legales en jurisdicciones permitidas. Contáctenos para evaluar su caso específico.'
      },
      {
        question: '¿Qué diferencia a Global Commodities de otros traders?',
        answer: 'Nuestra diferenciación radica en: 1) 20+ años de experiencia del equipo directivo, 2) Certificaciones internacionales (LBMA, ISO), 3) Red logística propia, 4) Pagos garantizados sin demoras, 5) Atención personalizada 24/7, y 6) Transparencia total en cada operación con documentación completa.'
      }
    ];

    return (
      <div className="pt-24 pb-16 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
              Preguntas <span className="text-amber-600">Frecuentes</span>
            </h1>
            <p className="text-lg text-slate-600" style={{fontFamily: 'Open Sans, sans-serif'}}>
              Respuestas detalladas sobre nuestros servicios de commodities
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-semibold text-slate-900 pr-4" style={{fontFamily: 'Inter, sans-serif'}}>
                    {faq.question}
                  </span>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">¿No encontró su respuesta?</p>
            <button
              onClick={() => navigateTo('contacto')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Contáctenos Directamente
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ============================================
  // PÁGINA: CONTACTO
  // ============================================
  const ContactPage = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    };

    return (
      <div className="pt-24 pb-16 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
              Contacto <span className="text-amber-600">Internacional</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto" style={{fontFamily: 'Open Sans, sans-serif'}}>
              Estamos listos para atender sus consultas y explorar oportunidades de negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-slate-900 rounded-3xl p-8 text-white mb-8">
                <h2 className="text-2xl font-bold mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                  Información de Contacto
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Teléfono Internacional</p>
                      <p className="font-semibold text-lg">+1 (234) 567-890</p>
                      <p className="text-slate-400 text-xs">Lun-Vie: 9:00 - 18:00 EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="font-semibold">info@globalcommodities.com</p>
                      <p className="text-slate-400 text-xs">Respuesta en 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Sede Principal</p>
                      <p className="font-semibold">Miami, Florida, USA</p>
                      <p className="text-slate-400 text-xs">Oficinas en 15+ países</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-4">Escríbanos directamente:</p>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <span className="mr-2">💬</span> WhatsApp Business
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                <h3 className="font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                  ¿Por qué contactarnos?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Cotización en menos de 24 horas',
                    'Asesoría personalizada sin costo',
                    'Acuerdos de confidencialidad (NDA)',
                    'Múltiples opciones de pago',
                    'Soporte en español e inglés'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-700 text-sm">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                Formulario de Contacto
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-green-800 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-green-600">Nuestro equipo le contactará en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="Su nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="correo@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="+1 (234) 567-890"
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Servicio de interés *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                        value={formData.servicio}
                        onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                      >
                        <option value="">Seleccione un servicio</option>
                        <option value="oro">Compra de Oro</option>
                        <option value="plata">Compra de Plata</option>
                        <option value="urea">Venta de Urea</option>
                        <option value="azucar">Venta de Azúcar</option>
                        <option value="otros">Otros</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                      placeholder="Describa su consulta o requerimiento..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    Enviar Consulta
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Al enviar, acepta nuestra política de privacidad. Sus datos están protegidos.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ============================================
  // PÁGINA: COMPRA DE ORO (ESPECÍFICA)
  // ============================================
  const GoldPage = () => {
    const [weight, setWeight] = useState('');
    const [purity, setPurity] = useState('0.850');
    const marketPrice = 75.40;

    const fineGrams = (parseFloat(weight) || 0) * parseFloat(purity);
    const totalValue = fineGrams * marketPrice;

    return (
      <div className="animate-fadeIn">
        {/* Hero Gold */}
        <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Estándares LBMA & OCDE</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                  Compra de Oro <br />
                  <span className="text-amber-500">Directo de Mina</span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Somos compradores directos de oro en formato doré, barras y polvo. 
                  Operamos con total transparencia en Perú, Bolivia, Venezuela y Ecuador, 
                  garantizando el mejor precio basado en el mercado de Londres.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-white/80 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                    <span>Precio LBMA Spot</span>
                  </div>
                  <div className="flex items-center text-white/80 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <Shield className="w-5 h-5 text-amber-500 mr-2" />
                    <span>Protocolo OCDE</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=600&fit=crop" 
                  alt="Lingotes de Oro" 
                  className="rounded-3xl shadow-2xl border border-amber-500/20"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-amber-600 font-bold text-3xl">98%</div>
                  <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">De Valor de Mercado</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                  Estime el Valor de su <span className="text-amber-600">Producción</span>
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Utilice nuestra calculadora para obtener una valoración referencial inmediata. 
                  Basamos nuestros cálculos en el precio actualizado del oro fino.
                </p>
                <ul className="space-y-4">
                  {[
                    'Cálculo basado en precio real LBMA',
                    'Ajuste por pureza de material',
                    'Sin comisiones ocultas',
                    'Asesoría técnica inmediata'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-amber-600 text-xs font-bold">✓</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-inner">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Peso Bruto (Gramos)</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none transition-all text-lg font-bold"
                      placeholder="Ej: 500"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pureza Estimada</label>
                    <select 
                      className="w-full px-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none transition-all bg-white"
                      value={purity}
                      onChange={(e) => setPurity(e.target.value)}
                    >
                      <option value="0.999">Oro Fino (.999)</option>
                      <option value="0.950">Oro Refinado (.950)</option>
                      <option value="0.850">Doré Estándar (.850)</option>
                      <option value="0.750">Doré Bajo (.750)</option>
                      <option value="0.500">Material de Mina (.500)</option>
                    </select>
                  </div>

                  <div className="pt-6 border-t border-slate-200 space-y-4">
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Gramos Finos Estimados:</span>
                      <span className="font-bold text-slate-900">{fineGrams.toFixed(2)}g</span>
                    </div>
                    <div className="bg-amber-100 p-6 rounded-2xl text-center">
                      <p className="text-amber-800 text-xs font-bold uppercase tracking-widest mb-1">Valor Total Estimado</p>
                      <p className="text-amber-600 text-4xl font-black" style={{fontFamily: 'Inter, sans-serif'}}>
                        ${totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} <span className="text-xl">USD</span>
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigateTo('contacto')}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg"
                  >
                    Garantizar Este Precio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestro Protocolo de Adquisición</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Seguimos un proceso riguroso de 4 pasos para garantizar seguridad y cumplimiento.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { n: '01', title: 'Contacto', desc: 'Indíquenos volumen y ley de su material.' },
                { n: '02', title: 'Evaluación', desc: 'Análisis técnico y propuesta comercial.' },
                { n: '03', title: 'Logística', desc: 'Recogida segura y transporte a refinería.' },
                { n: '04', title: 'Pago', desc: 'Transferencia inmediata tras ensayo final.' }
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-amber-500 relative overflow-hidden group hover:-translate-y-2 transition-all">
                  <div className="text-5xl font-black text-amber-50 absolute -top-2 -right-2 transition-colors group-hover:text-amber-100">{step.n}</div>
                  <h3 className="font-bold text-slate-900 mb-2 relative z-10">{step.title}</h3>
                  <p className="text-slate-600 text-sm relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Formatos que Adquirimos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: '⛏️', 
                  title: 'Doré de Mina', 
                  desc: 'Lingotes resultantes de fundición directa. Pureza entre 40% y 95%.',
                  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
                },
                { 
                  icon: '🏆', 
                  title: 'Barras Refinadas', 
                  desc: 'Barras con certificación de pureza 995 o 999.9 ppm.',
                  img: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop'
                },
                { 
                  icon: '✨', 
                  title: 'Polvo de Oro', 
                  desc: 'Material procedente de minería aluvial con granulometría variable.',
                  img: 'https://images.unsplash.com/photo-1569017388730-020b5f80a004?w=600&h=400&fit=crop'
                }
              ].map((format, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all">
                  <img src={format.img} alt={format.title} className="h-48 w-full object-cover" />
                  <div className="p-8">
                    <div className="text-3xl mb-4">{format.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{format.title}</h3>
                    <p className="text-slate-600 text-sm">{format.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Gold */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas sobre la Venta de Oro</h2>
            <div className="space-y-6">
              {[
                { q: '¿Cuál es el volumen mínimo?', a: 'Adquirimos desde 1kg de oro fino en adelante.' },
                { q: '¿Cómo garantizan el pago?', a: 'Mediante transferencia bancaria internacional tras el ensayo en refinería certificada.' },
                { q: '¿Operan legalmente en Venezuela?', a: 'Sí, trabajamos bajo el estricto cumplimiento de las normativas internacionales y locales.' }
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-6">
                  <h3 className="text-amber-400 font-bold mb-2">¿{faq.q}</h3>
                  <p className="text-slate-400 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Gold */}
        <section className="py-20 bg-amber-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">¿Listo para vender su producción?</h2>
            <p className="text-slate-900/80 text-xl mb-10 max-w-2xl mx-auto font-medium">Contáctenos ahora y obtenga la mejor cotización del mercado hoy mismo.</p>
            <button 
              onClick={() => navigateTo('contacto')}
              className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
            >
              Hablar con un Especialista
            </button>
          </div>
        </section>
      </div>
    );
  };

  // Render Principal
  return (
    <div className="min-h-screen bg-white">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap');

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Header />

      <main>
        {currentPage === 'inicio' && <HomePage />}
        {currentPage === 'servicios' && <ServicesPage />}
        {currentPage === 'nosotros' && <AboutPage />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'contacto' && <ContactPage />}
        {currentPage === 'gold' && <GoldPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
