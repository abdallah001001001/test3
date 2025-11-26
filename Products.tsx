
import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import ProductCard from '../components/ProductCard';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import { Button } from '../components/Button';

// قائمة الألوان المشتركة
const commonColors = ['أبيض', 'أسود', 'فضي', 'أزرق', 'أصفر', 'برتقالي', 'أحمر', 'ذهبي', 'وردي', 'أخضر'];

const productsData: Product[] = [
  {
    id: 1,
    title: 'أكياس عادية (Standard)',
    category: 'ordinary',
    description: 'أكياس تسوق قوية وعملية، متوفرة بجميع الألوان والمقاسات. تباع بالكيلو وتتميز بمتانتها للاستخدام اليومي في المتاجر والأسواق.',
    imageUrl: 'https://images.unsplash.com/photo-1623157793108-f46328325983?auto=format&fit=crop&q=80&w=800', // Plastic bags stack
    colors: commonColors,
    specs: [
        { size: '20×30 (×0)', count: 80 },
        { size: '25×35 (×1)', count: 65 },
        { size: '30×40 (×2)', count: 45 },
        { size: '35×50 (×3)', count: 40 },
        { size: '40×60 (×4)', count: 28 },
        { size: '50×70 (×5)', count: 20 },
        { size: '60×90 (×6)', count: 15 },
    ]
  },
  {
    id: 2,
    title: 'أكياس لمّاعة (Glossy)',
    category: 'glossy',
    description: 'أكياس ذات مظهر لامع وجذاب، تعطي انطباعاً بالفخامة والجودة. مثالية لمحلات الملابس والهدايا.',
    imageUrl: 'https://images.unsplash.com/photo-1570554868580-c651f506253e?auto=format&fit=crop&q=80&w=800', // Glossy/Color shopping bags
    colors: commonColors,
    specs: [
        { size: 'X 0', count: 50 },
        { size: 'X 1', count: 40 },
        { size: 'X 2', count: 28 },
        { size: 'X 3', count: 22 },
        { size: 'X 4', count: 16 },
        { size: 'X 5', count: 13 },
        { size: 'X 6', count: 8 },
    ]
  },
  {
    id: 8,
    title: 'أكياس حقيبة (Handbags)',
    category: 'bag',
    description: 'أكياس بتصاميم تشبه الحقائب بمقابض قوية، عملية وأنيقة لإعادة الاستخدام.',
    imageUrl: 'https://images.unsplash.com/photo-1590425717616-950e3264426d?auto=format&fit=crop&q=80&w=800', // Takeout/Handbag style
  },
  {
    id: 3,
    title: 'أكياس ورقية للقهوة والبقوليات',
    category: 'coffee',
    description: 'أكياس ورقية صحية مخصصة لحفظ نكهة القهوة والبقوليات، متوفرة بعدة أحجام وتصاميم مع صمام أو بدون.',
    imageUrl: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=800', // Coffee beans in bag
    colors: ['بني', 'أبيض'],
    specs: [
        { size: '250 جرام', count: 0 }, 
        { size: '500 جرام', count: 0 },
        { size: '1 كيلو', count: 0 },
    ]
  },
  {
    id: 11,
    title: 'أكياس ورقية للهدايا',
    category: 'paper',
    description: 'أكياس ورقية صديقة للبيئة بتصاميم أنيقة تناسب المخابز والمطاعم ومحلات الهدايا الراقية.',
    imageUrl: 'https://images.unsplash.com/photo-1512958348985-780c1031d227?auto=format&fit=crop&q=80&w=800', // Gift bags
  },
  {
    id: 5,
    title: 'أكياس قمامة (Garbage)',
    category: 'garbage',
    description: 'أكياس نفايات متينة جداً ومقاومة للتسرب والتمزق، متوفرة بمقاسات منزلية وصناعية.',
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800', // Trash bag
    colors: ['أسود', 'أزرق'],
    specs: [
        { size: '30 جالون', count: 0 },
        { size: '50 جالون', count: 0 },
    ]
  },
  {
    id: 4,
    title: 'أكياس تغليف رطبة (Wet Pack)',
    category: 'wet',
    description: 'حلول تغليف متخصصة عالية الجودة للمنتجات التي تحتاج حفظ الرطوبة مثل المناديل المبللة والمواد الغذائية.',
    imageUrl: 'https://images.unsplash.com/photo-1601614270275-3972c4c81a79?auto=format&fit=crop&q=80&w=800', // Wet wipes packaging style
  },
  {
    id: 6,
    title: 'أكياس فحم',
    category: 'charcoal',
    description: 'أكياس قوية التحمل مخصصة لتعبئة الفحم، مكونة من طبقات مقاومة للغبار والتمزق.',
    imageUrl: 'https://images.unsplash.com/photo-1542617300-c956e1871239?auto=format&fit=crop&q=80&w=800', // Charcoal
  },
  {
    id: 7,
    title: 'أكياس ثلج',
    category: 'ice',
    description: 'أكياس شفافة عالية الجودة تتحمل درجات الحرارة المنخفضة جداً (التجميد) دون أن تتكسر.',
    imageUrl: 'https://images.unsplash.com/photo-1628129758766-3d73b0627e85?auto=format&fit=crop&q=80&w=800', // Ice
  },
  {
    id: 9,
    title: 'أكياس عملة',
    category: 'currency',
    description: 'أكياس أمنية مخصصة للمصارف والشركات لنقل وحفظ العملات والنقود بأمان تام.',
    imageUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800', // Money/Security
  },
  {
    id: 10,
    title: 'أكياس بورزة',
    category: 'borza',
    description: 'أكياس بورزة متينة للاستخدامات المتعددة والشاقة، تتحمل الأوزان الثقيلة.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682129759496-d44682df656a?auto=format&fit=crop&q=80&w=800', // Heavy duty sack/bag
  },
  {
    id: 12,
    title: 'صناعة كلاشيهات (فورمات طباعة)',
    category: 'cliche',
    description: 'نقدم خدمة تصميم وتصنيع كلاشيهات (ألواح) طباعة الفلكسو بدقة عالية باستخدام أحدث التقنيات الرقمية لضمان دقة التفاصيل والألوان.',
    imageUrl: 'https://images.unsplash.com/photo-1563205764-5d595ed36254?auto=format&fit=crop&q=80&w=800', // Printing plates / Cyanotype style image
  }
];

const categories: { id: ProductCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'الكل' },
    { id: 'ordinary', label: 'عادية' },
    { id: 'glossy', label: 'لمّاعة' },
    { id: 'bag', label: 'حقيبة' },
    { id: 'paper', label: 'ورقية' },
    { id: 'coffee', label: 'قهوة/بقوليات' },
    { id: 'garbage', label: 'قمامة' },
    { id: 'wet', label: 'رطبة' },
    { id: 'charcoal', label: 'فحم' },
    { id: 'ice', label: 'ثلج' },
    { id: 'currency', label: 'عملة' },
    { id: 'borza', label: 'بورزة' },
    { id: 'cliche', label: 'كلاشيهات (فورمات)' },
];

const Products: React.FC = () => {
  const [filter, setFilter] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productsData.filter(p => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const matchesSearch = p.title.includes(searchQuery) || p.description.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">كتالوج المنتجات</h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            تصفح مجموعتنا الشاملة من الأكياس. جميع منتجاتنا تباع <strong>بالكيلو جرام</strong>، وقد وفرنا لك جدولاً تفصيلياً داخل كل منتج يوضح عدد الأكياس التقريبي في الكيلو الواحد لكل مقاس.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto mb-8">
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                <Search size={20} />
            </div>
            <input 
                type="text" 
                placeholder="ابحث عن اسم المنتج (مثلاً: أكياس قهوة...)" 
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Scrollable Container */}
        <div className="mb-10 relative">
            <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar justify-start md:justify-center px-4">
            {categories.map((cat) => (
                <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 border ${
                    filter === cat.id 
                    ? 'bg-brand-600 border-brand-600 text-white shadow-md scale-105' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-brand-300 hover:bg-slate-50'
                }`}
                >
                {cat.label}
                </button>
            ))}
            </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500 bg-white/50 rounded-3xl border border-dashed border-slate-300 mt-8">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
                <Filter size={32} className="text-slate-400" />
            </div>
            <p className="text-xl font-bold text-slate-700">لا توجد منتجات مطابقة</p>
            <p className="text-sm">حاول تغيير التصنيف أو كلمة البحث</p>
            <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => {setFilter('all'); setSearchQuery('');}}
            >
                عرض كل المنتجات
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
