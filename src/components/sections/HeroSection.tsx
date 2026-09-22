export function HeroSection() {
  return (
    <>
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
    
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-bold mb-8 animate-fade-in shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            منصة عنوان الذكية لإدارة الدروس والسناتر التعليمية الكبرى
          </div>
    
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] mb-6 max-w-5xl mx-auto animate-fade-in">
            أدِر مجموعاتك وكروت السناتر بذكاء <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
              مع تقارير أولياء الأمور المباشرة برقمك
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-normal">
            تخلص من كراكيب الأوراق وسجلات الحضور اليدوية مع &quot;عنوان&quot;. مسح سريع بالـ QR Code للسناتر متعددة المدرسين، إشعارات تلقائية لأولياء الأمور عبر رقم الواتساب الخاص بك، ومتابعة دقيقة لكل حصة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://wa.me/201500994675?text=أهلاً،%20أريد%20الاشتراك%20في%20منصة%20عنوان" 
               target="_blank" 
               className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              <span>ابدأ الآن واشترك في منصة عنوان</span>
            </a>

            <a href="#simulator" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-base border border-cyan-500/40 flex items-center justify-center gap-2 transition duration-300 shadow-lg shadow-cyan-500/10">
              <i className="fa-solid fa-laptop-code text-cyan-400 text-xl animate-bounce"></i>
              <span>جرب المنصة التفاعلية الحية</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-800/80 pt-10">
            <div>
              <h3 className="text-3xl font-black text-white mb-1">+50,000</h3>
              <p className="text-xs text-slate-400">رسالة حضور مرسلة</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-cyan-400 mb-1">99.9%</h3>
              <p className="text-xs text-slate-400">دقة تقارير الحضور</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-emerald-400 mb-1">0 ثانية</h3>
              <p className="text-xs text-slate-400">زمن تأخير الإشعارات</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-amber-400 mb-1">100%</h3>
              <p className="text-xs text-slate-400">سرعة بوابات السناتر</p>
            </div>
          </div>
        </section>

  
  
  
  
    </>
  );
}
