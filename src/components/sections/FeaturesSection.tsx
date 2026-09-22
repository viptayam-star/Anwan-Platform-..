export function FeaturesSection() {
  return (
    <>
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">كل ما يحتاجه المعلم والسنتر في منصة عنوان</h2>
            <p className="text-slate-400 text-base sm:text-lg">صُممت المنصة خصيصاً لتناسب طبيعة عمل المعلم والسناتر التعليمية بكل كفاءة وبساطة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-qrcode"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">حضور سريع بالـ QR Code</h3>
              <p className="text-slate-400 text-sm leading-relaxed">اطبع كروت الطلاب بـ QR مخصص. بمجرد توجيه الموبايل أو قارئ البوابة، يتم تسجيل الحضور في جزء من الثانية بدون قوائم ورقية.</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mb-6">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">إشعارات الواتساب المباشرة</h3>
              <p className="text-slate-400 text-sm leading-relaxed">يرسل النظام رسالة تلقائية لولي الأمر فور تسجيل حضور الطالب، تتضمن الموعد وحالة الواجب والدرجات عبر رقم الواتساب المعتمد الخاص بك.</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-clipboard-check"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">متابعة الواجبات والاختبارات</h3>
              <p className="text-slate-400 text-sm leading-relaxed">سجل درجات الشيتات والامتحانات الشاملة والواجبات اليومية بسهولة، مع رسم بياني يوضح مستوى كل طالب وتطوره الشهري.</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-wallet"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">إدارة الحسابات والاشتراكات</h3>
              <p className="text-slate-400 text-sm leading-relaxed">متابعة دفع المصروفات الشهرية لكل طالب وتنبيه أولياء الأمور بالمتأخرات المالية تلقائياً دون إحراج.</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">واجهة Mobile-First خفيفة</h3>
              <p className="text-slate-400 text-sm leading-relaxed">مصممة خصيصاً للعمل بسلاسة متناهية على هواتف الأندرويد والآيفون وأجهزة البوابات بدون الحاجة لتعقيدات برمجية.</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 hover:border-rose-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">أمان كامل واستقرار محلي</h3>
              <p className="text-slate-400 text-sm leading-relaxed">تعتمد المنصة على تقنيات التخزين السحابي والمحلي والنسخ الاحتياطي المستمر لضمان عدم ضياع أي بيانات حضور.</p>
            </div>
          </div>
        </section>

  
  
    </>
  );
}
