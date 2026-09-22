export function HowItWorksSection() {
  return (
    <>
      <section id="how-it-works" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">كيف تبدأ مع منصة عنوان؟</h2>
            <p className="text-slate-400 text-base sm:text-lg">لا نحتاج لخطوات معقدة، يمكنك البدء في تنظيم مجموعاتك والسناتر خلال دقائق قليلة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 text-center relative">
              <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">1</div>
              <h3 className="text-xl font-bold text-white mb-2">تأكيد رقمك عبر الواتساب</h3>
              <p className="text-slate-400 text-sm leading-relaxed">تواصل معنا عبر الواتساب لتفعيل حسابك وإضافة رقم الهاتف الذي ترغب في إرسال تقارير الطلاب من خلاله.</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-800 text-center relative">
              <div className="w-12 h-12 rounded-full bg-teal-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30">2</div>
              <h3 className="text-xl font-bold text-white mb-2">إضافة المدرسين والطلاب</h3>
              <p className="text-slate-400 text-sm leading-relaxed">سجل جدول المواعيد وأسعار الحصص لكل مدرس بالسنتر، وقم بطباعة كروت الـ QR المخصصة للطلاب.</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-800 text-center relative">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">3</div>
              <h3 className="text-xl font-bold text-white mb-2">المسح الذكي والإرسال</h3>
              <p className="text-slate-400 text-sm leading-relaxed">بمجرد مسح الكارت على البوابة، يظهر للأسيستانت تفاصيل حصة المدرس في هذا التوقيت ويتم إرسال إشعار ولي الأمر فوراً.</p>
            </div>
          </div>
        </section>

  
  
    </>
  );
}
