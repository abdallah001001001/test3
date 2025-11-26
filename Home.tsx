
import React from 'react';
import { ArrowLeft, Printer, ShoppingBag, Package, CheckCircle, Star, HelpCircle, Layers } from 'lucide-react';
import { Button } from '../components/Button';
import MapSection from '../components/MapSection';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-slate-50 overflow-x-hidden">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-[500px] h-[500px] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 z-10">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-brand-700 text-sm font-bold mb-6 border border-white shadow-sm animate-float">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              الخيار الأول للمصانع والمتاجر في ليبيا
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 mb-6 leading-[1.15]">
              نصنع <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">الجودة</span> <br/>
              التي تستحقها منتجاتك
            </h1>
            
            <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              نقدم في مصنع الغيراني حلولاً متكاملة في <strong>صناعة الأكياس البلاستيكية</strong> و<strong>الطباعة الفاخرة</strong>. خبرة تمتد لأكثر من ربع قرن نضعها بين يديك في مصراتة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button variant="primary" size="lg" className="shadow-xl shadow-brand-500/20 bg-brand-600 hover:bg-brand-700">
                  تصفح المنتجات
                  <ArrowLeft className="mr-2" size={20} />
                </Button>
              </Link>
              <a href="#contact">
                <Button variant="white" size="lg" className="border border-slate-200 text-slate-700 hover:text-brand-600">
                  طلب عرض سعر
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl font-bold text-slate-900">+25</span>
                    <span className="text-xs text-slate-500">سنة خبرة</span>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl font-bold text-slate-900">+1000</span>
                    <span className="text-xs text-slate-500">عميل سعيد</span>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl font-bold text-slate-900">100%</span>
                    <span className="text-xs text-slate-500">جودة طباعة</span>
                </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-accent-400 rounded-[2rem] transform rotate-6 blur-2xl opacity-20"></div>
                <img 
                  src="https://picsum.photos/800/800?random=1" 
                  alt="أكياس بلاستيكية مطبوعة بجودة عالية" 
                  className="relative rounded-[2rem] shadow-2xl border-4 border-white w-full object-cover h-[400px] md:h-[600px] hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Floating Cards */}
                <div className="absolute top-10 -right-6 glass p-4 rounded-xl shadow-lg animate-float animation-delay-2000 hidden md:block max-w-[200px]">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg"><Star size={16} fill="currentColor" /></div>
                        <span className="font-bold text-sm text-slate-800">طباعة ممتازة</span>
                    </div>
                    <p className="text-xs text-slate-500">ألوان ثابتة وتصاميم عصرية</p>
                </div>
                
                <div className="absolute bottom-20 -left-6 glass p-4 rounded-xl shadow-lg animate-float hidden md:block max-w-[200px]">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg"><CheckCircle size={16} /></div>
                        <span className="font-bold text-sm text-slate-800">خامات قوية</span>
                    </div>
                    <p className="text-xs text-slate-500">تحمل عالي للأوزان</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Combined Image */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass bg-white/60 p-8 md:p-12 rounded-3xl shadow-xl border border-white/50">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-600 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                  <img 
                      src="https://picsum.photos/800/500?random=2" 
                      className="relative w-full h-[400px] object-cover rounded-2xl shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" 
                      alt="مصنع الغيراني من الداخل" 
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow font-bold text-brand-800">
                    تأسس عام 1997
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-brand-600 font-bold text-sm tracking-wider uppercase mb-2">عن المصنع</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">نجمع بين خبرة الماضي وتقنيات المستقبل</h3>
                <p className="text-slate-600 leading-loose mb-6 text-lg">
                  شركة الغيراني ليست مجرد مصنع للأكياس، بل هي شريك نجاح لأعمالك. نمتلك خطوط إنتاج متكاملة لتصنيع <strong>الأكياس البلاستيكية</strong>، وورشة متطورة لطباعة <strong>السلك سكرين</strong>. نحن نضمن لك المنتج الذي يرفع من قيمة علامتك التجارية.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-green-500" />
                        <span>تصاميم مخصصة</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-green-500" />
                        <span>أسعار جملة منافسة</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-green-500" />
                        <span>سرعة في التوريد</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-green-500" />
                        <span>دعم فني وتصميم</span>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">خدماتنا الصناعية</h2>
            <p className="text-slate-600">من الفكرة إلى المنتج النهائي، نقدم لك كل ما تحتاجه في عالم التغليف والطباعة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShoppingBag size={32} />,
                title: "تصنيع الأكياس",
                desc: "إنتاج جميع أنواع الأكياس البلاستيكية (HDPE, LDPE) بمقاسات وسماكات مختلفة تناسب كافة الأغراض التجارية."
              },
              {
                icon: <Printer size={32} />,
                title: "طباعة احترافية",
                desc: "طباعة فلكسو وسلك سكرين عالية الدقة لإبراز هوية شركتك وشعارك بأفضل صورة ممكنة على الأكياس."
              },
              {
                icon: <Layers size={32} />,
                title: "صناعة الكلاشيهات",
                desc: "تصنيع ألواح طباعة الفلكسو (الكلاشيهات) بدقة رقمية عالية لضمان أفضل نتائج طباعة لمنتجاتك."
              },
              {
                icon: <Package size={32} />,
                title: "حلول تغليف متكاملة",
                desc: "استشارات فنية وتصميم عبوات وتغليف للمصانع الغذائية والدوائية لضمان سلامة المنتج وجاذبيته."
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI / SEO Optimization Section (FAQ) */}
      <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/30 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                    <h2 className="text-3xl font-heading font-bold mb-6">أسئلة يبحث عنها عملاؤنا</h2>
                    <p className="text-brand-200 mb-8 leading-relaxed">
                        نحرص على توفير المعلومات الدقيقة حول صناعة الأكياس في ليبيا لمساعدة عملائنا على اتخاذ القرار الصحيح.
                    </p>
                    <a href="#contact">
                        <Button variant="outline" className="border-brand-400 text-brand-400 hover:bg-brand-400 hover:text-brand-900">
                            لديك سؤال آخر؟
                        </Button>
                    </a>
                </div>
                
                <div className="flex-[2] grid gap-4">
                    {[
                        { q: "ما هي أنواع الأكياس التي ينتجها مصنع الغيراني؟", a: "ننتج أكياس التسوق (العلاقة)، أكياس التغليف الرطب، أكياس النفايات الصناعية، وأكياس حفظ الأطعمة بمواد أولية نقية." },
                        { q: "هل توفرون خدمة الطباعة على الأكياس للكميات الصغيرة؟", a: "نعم، نقدم خدمات طباعة السلك سكرين المناسبة للكميات المتوسطة والصغيرة للمتاجر الناشئة، بالإضافة لطباعة الكميات الكبيرة للمصانع." },
                        { q: "أين يقع المصنع وهل يوجد توصيل؟", a: "يقع مصنعنا في مصراتة، منطقة الغيران. ونوفر خدمات الشحن والتوصيل لكافة المدن الليبية." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="flex items-start gap-3 font-bold text-lg text-brand-100 mb-2">
                                <HelpCircle size={20} className="mt-1 shrink-0 text-accent-400" />
                                {item.q}
                            </h3>
                            <p className="text-slate-300 pr-8">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative z-10">
         <div className="container mx-auto px-4 max-w-4xl">
           <div className="glass bg-gradient-to-br from-brand-600 to-brand-700 p-10 md:p-16 rounded-[2.5rem] text-center text-white shadow-2xl relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">ابدأ مشروعك معنا اليوم</h2>
                <p className="text-brand-100 mb-10 text-lg max-w-2xl mx-auto">
                    لا تتردد في طلب استشارة مجانية أو عرض سعر. فريقنا متواجد لخدمتك عبر الهاتف أو الواتساب.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://wa.me/qr/GTACLCBK52T2E1" target="_blank" rel="noopener noreferrer">
                    <Button variant="white" size="lg" className="w-full sm:w-auto text-brand-700 hover:bg-slate-50 border-none shadow-lg">
                        تواصل عبر واتساب
                    </Button>
                    </a>
                    <a href="tel:+218914447999">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                        اتصل بنا: 0914447999
                    </Button>
                    </a>
                </div>
             </div>
           </div>
         </div>
      </section>

      <MapSection />
    </div>
  );
};

export default Home;
