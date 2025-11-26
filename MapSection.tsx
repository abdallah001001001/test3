import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section id="contact-map" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 text-brand-700 rounded-full mb-4">
            <MapPin size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">موقعنا</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            تفضل بزيارة مصنعنا في مصراتة. نحن سعداء دائمًا باستقبالكم وتقديم أفضل الحلول لاحتياجاتكم.
          </p>
        </div>

        <div className="w-full h-[400px] md:h-[500px] bg-slate-200 rounded-3xl overflow-hidden shadow-lg relative border-4 border-white">
          {/* Using a general iframe for Misrata area as a placeholder for the specific Plus code */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.7337373979663!2d15.06013337489569!3d32.37894371077583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a207218685e8d5%3A0x600b46722d3251e0!2sMisrata%2C%20Libya!5e0!3m2!1sen!2sly!4v1709400000000!5m2!1sen!2sly" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Ghirany Factory Location"
          ></iframe>
          
          <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
            <h4 className="font-bold text-slate-900">مصنع الغيراني</h4>
            <p className="text-sm text-slate-500">ليبيا، مصراتة - الغيران</p>
            <a 
              href="https://maps.app.goo.gl/Ws8DDY2Lkw9ZrcZ7A" 
              target="_blank" 
              rel="noreferrer"
              className="text-brand-600 text-sm font-bold mt-2 block hover:underline"
            >
              عرض في خرائط جوجل
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;