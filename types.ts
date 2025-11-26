
export interface ProductSpec {
  size: string;
  count: number;
}

export type ProductCategory = 
  | 'ordinary'  // عادية
  | 'glossy'    // لماعة
  | 'bag'       // حقيبة
  | 'paper'     // ورقية
  | 'coffee'    // قهوة وبقوليات
  | 'wet'       // تغليف رطبة
  | 'garbage'   // قمامة
  | 'charcoal'  // فحم
  | 'ice'       // ثلج
  | 'currency'  // عملة
  | 'borza'     // بورزة
  | 'cliche'    // كلاشيهات (فورمات)
  | 'general';  // عامة

export interface Product {
  id: number;
  title: string;
  category: ProductCategory;
  description: string;
  imageUrl: string;
  specs?: ProductSpec[]; // اختياري: جدول المقاسات والعدد
  colors?: string[];     // اختياري: الألوان المتاحة
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export enum NavigationLinks {
  HOME = '/',
  PRODUCTS = '/products',
}
