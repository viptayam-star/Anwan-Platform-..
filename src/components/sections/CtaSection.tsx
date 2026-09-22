export function CtaSection() {
  return (
    <>
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-cyan-950 rounded-3xl p-8 sm:p-14 border border-amber-500/30 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
                جاهز لتطوير بوابة سنتربك والقضاء على زحمة الحضور؟
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8">
                انضم الآن إلى منصة عنوان وابدأ في إدارة كروت السناتر والمدرسين باحترافية كاملة.
              </p>
        
              <a href="https://wa.me/201500994675?text=أهلاً،%20أريد%20الاشتراك%20في%20منصة%20عنوان" 
                 target="_blank" 
                 className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xl shadow-2xl shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 justify-center">
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <span>تواصل واشترك الآن</span>
              </a>
            </div>
          </div>
        </section>

  
  
    </>
  );
}
