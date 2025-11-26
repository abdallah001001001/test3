import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, Megaphone } from 'lucide-react';
import { Button } from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // دالة متقدمة للتعامل مع التنقل والتمرير مع HashRouter
  const handleNavClick = (e: React.MouseEvent, path: string, hash: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (hash) {
      // إذا كان الرابط يؤدي لقسم داخل الصفحة (مثل #about)
      if (location.pathname === '/') {
        // إذا كنا بالفعل في الرئيسية، نمرر مباشرة
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // إذا كنا في صفحة أخرى، نذهب للرئيسية ثم نمرر
        navigate('/');
        // تأخير بسيط لضمان تحميل الصفحة الرئيسية قبل التمرير
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // إذا كان رابط صفحة عادية (مثل /products)
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'الرئيسية', path: '/', hash: 'home' },
    { name: 'من نحن', path: '/', hash: 'about' },
    { name: 'خدماتنا', path: '/', hash: 'services' },
    { name: 'المنتجات', path: '/products', hash: '' },
  ];

  // رابط الواتساب المخصص للمسوقين مع الرسالة الجديدة
  const marketersWhatsapp = "https://wa.me/qr/GTACLCBK52T2E1?text=هل%20يمكنني%20الاطلاع%20على%20باقات%20المسوقين";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        scrolled 
          ? 'glass shadow-sm py-2 border-white/40' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-brand-600 p-2.5 rounded-xl text-white shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
            <ShoppingBag size={22} />
          </div>
          <div className="flex flex-col">
            <h1 className={`text-xl font-heading font-bold tracking-tight ${scrolled ? 'text-brand-900' : 'text-brand-900 md:text-white'}`}>
              الغيراني
            </h1>
            <span className={`text-[10px] font-medium opacity-80 ${scrolled ? 'text-slate-600' : 'text-slate-600 md:text-slate-200'}`}>
              لصناعة وطباعة الأكياس
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all ${scrolled ? 'bg-slate-100/50' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
            {navLinks.map((link) => {
                const isActive = location.pathname === link.path && !link.hash;
                
                return (
                    <a
                        key={link.name}
                        href={link.path + (link.hash ? `#${link.hash}` : '')}
                        onClick={(e) => handleNavClick(e, link.path, link.hash)}
                        className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                            scrolled 
                              ? 'text-slate-600 hover:bg-white hover:text-brand-600 hover:shadow-sm' 
                              : 'text-white hover:bg-white/20'
                          } ${isActive ? (scrolled ? 'bg-white text-brand-600 shadow-sm' : 'bg-white/20') : ''}`}
                    >
                        {link.name}
                    </a>
                );
            })}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
             {/* زر خاص للمسوقين */}
            <a 
                href={marketersWhatsapp} 
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    scrolled 
                    ? 'bg-accent-50 text-accent-700 border-accent-200 hover:bg-accent-100' 
                    : 'bg-accent-500/20 text-accent-400 border-accent-400/50 hover:bg-accent-500/30'
                }`}
            >
                <Megaphone size={14} className={scrolled ? "text-accent-600" : "text-accent-400"} />
                <span>باقات المسوقين</span>
            </a>

            <a href="/#contact" onClick={(e) => handleNavClick(e, '/', 'contact')}>
            <Button 
                variant={scrolled ? "primary" : "white"} 
                size="sm" 
                className={`gap-2 ${!scrolled && "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-brand-900"}`}
            >
                <Phone size={16} />
                <span>تواصل معنا</span>
            </Button>
            </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 right-0 glass border-t border-slate-100 shadow-xl transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col p-6 gap-3">
          {navLinks.map((link) => (
            <li key={link.name}>
                <a 
                  href={link.path + (link.hash ? `#${link.hash}` : '')}
                  className="flex items-center justify-between p-4 rounded-xl bg-white hover:bg-brand-50 text-slate-700 font-bold border border-slate-100 hover:border-brand-200 transition-all"
                  onClick={(e) => handleNavClick(e, link.path, link.hash)}
                >
                  {link.name}
                  <span className="text-brand-500">←</span>
                </a>
            </li>
          ))}

            {/* رابط المسوقين في الموبايل */}
            <li>
                <a 
                     href={marketersWhatsapp}
                     target="_blank"
                     rel="noreferrer"
                     className="flex items-center justify-between p-4 rounded-xl bg-accent-50 hover:bg-accent-100 text-accent-800 font-bold border border-accent-200 transition-all"
                     onClick={() => setIsOpen(false)}
                   >
                     <div className="flex items-center gap-3">
                        <Megaphone size={18} />
                        <span>شركات الدعاية والمسوقين</span>
                     </div>
                     <span className="text-accent-600 text-xs bg-white px-2 py-1 rounded-md">أسعار خاصة</span>
                   </a>
            </li>

          <li className="mt-4">
            <a href="/#contact" onClick={(e) => handleNavClick(e, '/', 'contact')}>
              <Button fullWidth className="gap-2 shadow-lg shadow-brand-500/20">
                <Phone size={18} />
                تواصل معنا الآن
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;