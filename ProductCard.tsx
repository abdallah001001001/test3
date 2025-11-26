import React, { useState } from 'react';
import { Product } from '../types';
import { ArrowLeft, ZoomIn, Ruler, Palette, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showSpecs, setShowSpecs] = useState(false);

  // Map of color names to Hex values for visual representation
  const colorMap: Record<string, string> = {
    'أبيض': '#FFFFFF',
    'أسود': '#000000',
    'فضي': '#C0C0C0',
    'أزرق': '#2563EB',
    'أصفر': '#FACC15',
    'برتقالي': '#F97316',
    'أحمر': '#EF4444',
    'ذهبي': '#FFD700',
    'وردي': '#EC4899',
    'أخضر': '#22C55E',
  };

  return (
    <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 border border-slate-100 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10 transition-all duration-500"></div>
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 text-xs font-bold rounded-full shadow-sm backdrop-blur-md border border-white/20 bg-brand-600 text-white">
            {product.category === 'ordinary' ? 'عادية' : 
             product.category === 'glossy' ? 'لماعة' : 
             product.category === 'wet' ? 'تغليف رطب' : 'متخصص'}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>

        {/* Specs Toggle Button */}
        {(product.specs || product.colors) && (
            <button 
                onClick={() => setShowSpecs(!showSpecs)}
                className="w-full mt-auto flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-brand-700 font-bold text-sm transition-all duration-300 border border-slate-200"
            >
                <div className="flex items-center gap-2">
                    <Ruler size={16} />
                    <span>المواصفات والألوان</span>
                </div>
                {showSpecs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
        )}
      </div>

      {/* Expandable Specs Section */}
      <div className={`bg-slate-50 border-t border-slate-100 overflow-hidden transition-all duration-500 ${showSpecs ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-5">
            {/* Table */}
            {product.specs && (
                <div className="mb-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">المقاسات / العدد (للكيلو)</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs text-center border-collapse">
                            <thead>
                                <tr className="bg-brand-100 text-brand-900">
                                    <th className="p-2 rounded-tr-lg">المقاس</th>
                                    <th className="p-2 rounded-tl-lg">العدد (تقريباً)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {product.specs.map((spec, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 last:border-0">
                                        <td className="p-2 font-medium text-slate-700" dir="ltr">{spec.size}</td>
                                        <td className="p-2 text-slate-500 font-bold">{spec.count} كيس</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Colors */}
            {product.colors && (
                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                        <Palette size={12} />
                        الألوان المتاحة
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {product.colors.map((color, idx) => (
                            <div 
                                key={idx} 
                                className="w-6 h-6 rounded-full border border-slate-200 shadow-sm relative group/tooltip"
                                style={{ backgroundColor: colorMap[color] || '#eee' }}
                                title={color}
                            >
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap z-10">
                                    {color}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>

    </div>
  );
};

export default ProductCard;