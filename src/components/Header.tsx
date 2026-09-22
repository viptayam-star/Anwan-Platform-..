import { BrandMark } from "./BrandMark";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 glass-nav border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      
            <a href="#" className="flex items-center gap-3 group justify-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 p-0.5 shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden bg-white">
                <BrandMark />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  عـنـوان
                </span>
                <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">مساعدك الذكي في التعليم</span>
              </div>
            </a>

      
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#features" className="hover:text-cyan-400 transition-colors">المميزات</a>
              <a href="#simulator" className="hover:text-cyan-400 transition-colors text-cyan-400 font-bold animate-pulse"><i className="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>{" "}جرب المنصة بنفسك</a>
              <a href="#centers-pro" className="hover:text-cyan-400 transition-colors text-amber-400 font-bold">خاصية السناتر</a>
              <a href="#pricing" className="hover:text-cyan-400 transition-colors">الأسعار</a>
              <a href="#faq" className="hover:text-cyan-400 transition-colors">الأسئلة</a>
            </nav>

      
            <div className="flex items-center gap-3">
              <a href="https://wa.me/201500994675?text=أهلاً،%20أريد%20الاشتراك%20في%20منصة%20عنوان" 
                 target="_blank" 
                 className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 justify-center">
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>اشترك الآن</span>
              </a>
            </div>
          </div>
        </header>

  
  
    </>
  );
}
