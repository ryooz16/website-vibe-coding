import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image - Modern Corporate/Abstract */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40 mix-blend-screen scale-105 transition-transform duration-[20s] hover:scale-110"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/50 to-brand-dark/95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primaryLight text-xs md:text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
          <Activity size={16} className="text-white" />
          <span className="tracking-wide text-white">Solusi Inovatif Untuk Bisnis Anda</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Mendefinisikan Ulang <br className="hidden md:block" /> 
          <span className="text-brand-primaryLight">
            Standar Bisnis
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-xl text-brand-grey/80 mb-10 leading-relaxed font-light">
          Rio Corporate adalah mitra strategis Anda dalam menciptakan inovasi bernilai tinggi dan pelayanan tak tertandingi di industri modern.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#services" className="group flex items-center gap-2 px-6 py-3.5 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-primaryHover shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center text-base">
            Mulai Transformasi
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a href="#about" className="px-6 py-3.5 bg-brand-grey/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all w-full sm:w-auto justify-center flex text-base">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
