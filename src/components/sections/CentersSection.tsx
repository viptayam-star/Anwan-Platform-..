export function CentersSection() {
  return (
    <>
      <section id="centers-pro" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/30 relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-amber-950/20 shadow-2xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-4">
                <i className="fa-solid fa-star text-amber-400"></i>
                حصرية للسناتر التعليمية متعددة المعلمين
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
                نظام الكارت الذكي للبوابات: <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                  وداعاً لسؤال &quot;رايح لمستر مين وبكام؟&quot;
                </span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                في السناتر الكبيرة، الطالب بيشترك مع كذا مدرس وفي مواعيد مختلفة. مع ميزة &quot;الكارت الذكي المتعدد&quot; من منصة عنوان، الأسيستانت على البوابة بيمسح كارت الطالب والسيستم بيتولى الباقي أوتوماتيكياً!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xl mb-4">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">التعرف التلقائي حسب الوقت</h3>
                <p className="text-slate-400 text-xs leading-relaxed">السيستم بيقرأ الساعة الحالية (مثلاً الساعة 9:30 والدرس يبدأ 10) ويحدد فوراً حصة المدرس المستهدفة دون أي تدخل بشري أو سؤال.</p>
              </div>

              <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl mb-4">
                  <i className="fa-solid fa-file-invoice-dollar"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">عرض سعر الحصة والمصاريف</h3>
                <p className="text-slate-400 text-xs leading-relaxed">الأسيستانت بيظهر له فوراً على الشاشة اسم المستر، سعر الحصة، وهل الطالب سدد ولا مطلوب تحصيل المبلغ، أو يدخل ديركت حسب سياسة السنتر.</p>
              </div>

              <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-4">
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">إدارة الحصص المتعددة في اليوم</h3>
                <p className="text-slate-400 text-xs leading-relaxed">لو الطالب عنده درس الساعة 10 ودرس تاني بعده الساعة 2، لما يرجع يدخل تاني، السيستم بيتعرف على الحصة التانية لوحدها بكل سهولة وبدون لخبطة.</p>
              </div>
            </div>
          </div>
        </section>

  
  
    </>
  );
}
