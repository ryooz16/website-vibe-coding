import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 relative group">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-brand-primary opacity-10 rounded-2xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
            <div className="absolute -inset-4 bg-brand-primary opacity-10 rounded-2xl transform -translate-x-4 -translate-y-4 -z-10 transition-transform group-hover:-translate-x-6 group-hover:-translate-y-6 duration-500"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Tim Rio Corporate" 
              className="rounded-2xl shadow-2xl relative z-0 transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <Award size={24} />
                 </div>
                 <div>
                   <p className="text-2xl font-bold text-brand-black">No. 1</p>
                   <p className="text-sm font-medium text-brand-gray">Top Agency</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
              <Users size={16} />
              Tentang Kami
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-black mb-6 leading-tight">
              Visi yang Membawa <span className="text-brand-primary">Masa Depan</span> ke Hadapan Anda
            </h2>
            <p className="text-base md:text-lg text-brand-gray leading-relaxed mb-8">
              Di Rio Corporate, kami percaya bahwa inovasi bukan sekadar kata, melainkan sebuah aksi. Berdiri dengan komitmen pada ekselensi, kami mendukung berbagai bisnis untuk mencapai potensi terbaik mereka melalui strategi berbasis data dan eksekusi yang konsisten.
            </p>
            
            <div className="grid grid-cols-2 gap-6 md:gap-8 mt-10">
              <div className="border-l-4 border-brand-primary pl-4 md:pl-5">
                <h3 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-1">10<span className="text-brand-primary">+</span></h3>
                <p className="text-xs md:text-sm font-medium text-brand-gray uppercase tracking-wider">Tahun Pengalaman</p>
              </div>
              <div className="border-l-4 border-brand-primaryLight pl-4 md:pl-5">
                <h3 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-1">500<span className="text-brand-primary">+</span></h3>
                <p className="text-xs md:text-sm font-medium text-brand-gray uppercase tracking-wider">Klien Global</p>
              </div>
            </div>
            
            <div className="mt-12">
              <a href="#services" className="group inline-flex items-center text-brand-primary font-bold hover:text-brand-primaryHover transition-colors border-b-2 border-transparent hover:border-brand-primary pb-1">
                Pelajari Layanan Kami
                <Target className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
