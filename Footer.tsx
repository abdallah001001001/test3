import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass-dark text-slate-300 py-10 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-600/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          
          {/* Brand & Brief */}
          <div className="text-center lg:text-right max-w-sm">
            <h2 className="text-2xl font-heading font-bold text-white mb-2">الغيراني</h2>
            <p className="text-sm text-slate-400 mb-4">
              الخيار الأول في ليبيا لحلول التغليف والأكياس المطبوعة. جودة عالمية بأيادٍ محلية.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 text-xs font-medium text-brand-400">
                <span>#أكياس_بلاستيك</span>
                <span>#طباعة_أكياس</span>
                <span>#مصراتة</span>
            </div>
          </div>

          {/* Quick Contact & Links Compact */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center lg:items-start">
             <div className="flex flex-col gap-2 text-center lg:text-right">
                <a href="tel:+218914447999" className="flex items-center gap-2 hover:text-white transition-colors group">
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-brand-600 transition-colors"><Phone size={16} /></div>
                    <span dir="ltr">+218 91 444 7999</span>
                </a>
                <a href="mailto:info@alghirany.ly" className="flex items-center gap-2 hover:text-white transition-colors group">
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-brand-600 transition-colors"><Mail size={16} /></div>
                    <span>info@alghirany.ly</span>
                </a>
             </div>

             <div className="flex flex-col gap-2 text-center lg:text-right">
                <a href="https://maps.app.goo.gl/Ws8DDY2Lkw9ZrcZ7A" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-brand-600 transition-colors"><MapPin size={16} /></div>
                    <span>مصراتة - الغيران</span>
                </a>
                <div className="flex gap-4 mt-1 justify-center lg:justify-start text-sm">
                    <a href="#home" className="hover:text-brand-400">الرئيسية</a>
                    <span className="text-slate-600">|</span>
                    <a href="#/products" className="hover:text-brand-400">المنتجات</a>
                </div>
             </div>
          </div>

          {/* Up Button */}
          <button 
            onClick={scrollToTop}
            className="p-3 bg-brand-600 text-white rounded-xl hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/40 hover:-translate-y-1"
            aria-label="العودة للأعلى"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>&copy; {new Date().getFullYear()} مصنع الغيراني. جميع الحقوق محفوظة.</p>
          <p className="opacity-50">تصميم وتطوير بأحدث تقنيات الويب</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;