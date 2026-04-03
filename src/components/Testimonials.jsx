import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-grey overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primaryLight/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-3 drop-shadow-sm">Testimonial</h2>
          <h3 className="text-3xl font-extrabold text-brand-black sm:text-4xl lg:text-5xl">
            Kepercayaan yang Telah Dibangun
          </h3>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Testimonial 1 */}
          <div className="bg-white p-10 rounded-2xl md:w-1/2 relative shadow-lg shadow-brand-primary/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-500 group">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primaryLight/30">
                 <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Adam Wijaya" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-brand-black text-lg">Adam Wijaya</h4>
                <p className="text-sm font-medium text-brand-primary">CEO, TechNova Indonesia</p>
              </div>
            </div>
            <p className="relative text-lg text-brand-gray leading-relaxed mb-2 italic">
              "Rio Corporate benar-benar merombak kerangka kerja internal kami. Profesionalisme dan pendekatan berbasis datanya memberikan dampak di minggu pertama."
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-brand-dark text-white p-10 rounded-2xl md:w-1/2 relative shadow-xl shadow-brand-dark/20 hover:-translate-y-2 transition-transform duration-500 group">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5 group-hover:text-brand-primaryLight/20 transition-colors" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary/50">
                 <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Siti Aisyah" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Siti Aisyah</h4>
                <p className="text-sm font-medium text-brand-primaryLight">Direktur, Global Ekspor</p>
              </div>
            </div>
            <p className="relative text-lg text-brand-grey/80 leading-relaxed mb-2 italic">
              "Investasi terbaik yang pernah kami lakukan. Skalabilitas layanan mereka sangat terarah dan eksekusinya tepat waktu."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
