import React from 'react';
import { Lightbulb, MonitorSmartphone, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Konsultasi Strategis',
    description: 'Memberikan arahan strategis berbasis data untuk memajukan bisnis Anda ke garis depan pasar.',
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
  },
  {
    title: 'Inovasi Digital',
    description: 'Transformasi digital secara menyeluruh. Dari optimasi proses hingga peluncuran platform modern.',
    icon: <MonitorSmartphone size={32} strokeWidth={1.5} />,
  },
  {
    title: 'Manajemen Keuangan',
    description: 'Audit presisi dan perencanaan finansial yang mengamankan kelancaran aset jangka panjang.',
    icon: <Briefcase size={32} strokeWidth={1.5} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-grey border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-3 drop-shadow-sm">Layanan Kami</h2>
          <h3 className="text-3xl font-extrabold text-brand-black sm:text-4xl lg:text-5xl">
            Solusi Komprehensif untuk Tantangan Modern
          </h3>
          <p className="mt-4 text-brand-gray text-lg max-w-2xl mx-auto">
            Kami menyediakan layanan profesional terpadu dari para ahli terbaik di bidangnya.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-2xl hover:-translate-y-3 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-brand-primary/10 border border-brand-primary/5 flex flex-col"
            >
              <div className="w-16 h-16 bg-brand-grey text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-primary/30 group-hover:rotate-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-black mb-4">{service.title}</h4>
              <p className="text-brand-gray leading-relaxed text-sm mb-6">
                {service.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-brand-primary/20 transition-colors">
                 <a href="#contact" className="inline-flex items-center text-sm font-bold text-brand-black group-hover:text-brand-primary transition-colors">
                    Lebih Detail <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
