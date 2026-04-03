import React from 'react';
import { MapPin, Mail, Send, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-brand-dark overflow-hidden">
      {/* Background map/abstract */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primaryLight text-sm font-semibold mb-6">
              <Mail size={16} />
              Hubungi Kami
            </div>
            <h2 className="text-4xl font-extrabold sm:text-5xl mb-6 text-white leading-tight">
              Mari Memulai <span className="text-brand-primaryLight">Percakapan</span>
            </h2>
            <p className="text-brand-grey/70 text-lg mb-10 max-w-lg leading-relaxed">
              Hubungi tim kami untuk konsultasi awal. Kami siap mendengarkan visi Anda dan merancang rencana yang efektif secara berkelanjutan.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mr-5 shadow-lg shrink-0">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1">Kantor Pusat</h4>
                  <p className="text-brand-grey/60 leading-relaxed">Jl. Sudirman Kav 10-11<br/>Jakarta Selatan, Indonesia 12190</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mr-5 shadow-lg shrink-0">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1">Email</h4>
                  <p className="text-brand-grey/60 leading-relaxed">contact@riocorporate.com<br/>support@riocorporate.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mr-5 shadow-lg shrink-0">
                  <Phone className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1">Telepon</h4>
                  <p className="text-brand-grey/60 leading-relaxed">+62 21 1234 5678<br/>+62 811 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <form className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold text-brand-black mb-6">Kirimkan Pesan</h3>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-brand-black mb-2">Nama Lengkap</label>
                <input type="text" id="name" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary rounded-xl transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-brand-black mb-2">Email Perusahaan</label>
                <input type="email" id="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary rounded-xl transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-brand-black mb-2">Pesan</label>
                <textarea id="message" rows="4" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary rounded-xl transition-all resize-none" placeholder="Ceritakan kebutuhan Anda..."></textarea>
              </div>
              <button type="button" className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white py-4 font-bold hover:bg-brand-primaryHover transition-all rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-1 mt-2">
                Kirim Pesan
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
