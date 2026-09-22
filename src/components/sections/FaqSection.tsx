export function FaqSection() {
  return (
    <>
      <section id="faq" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">الأسئلة الشائعة</h2>
            <p className="text-slate-400 text-sm">إجابات عن معظم الاستفسارات التي تهمك حول المنصة والسناتر</p>
          </div>

          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">كيف يتعرف السيستم على المدرس المناسب للطالب عند البوابة؟</h3>
              <p className="text-slate-400 text-sm leading-relaxed">بناءً على جدول الحصص المسجل للكارت ومقارنته بالساعة الحالية وقت مسح الـ QR، يعرض السيستم للاستوديو فوراً بيانات الدرس واسم المدرس وسعر الحصة.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">هل يحتاج ولي الأمر إلى تحميل أي تطبيق على هاتفه؟</h3>
              <p className="text-slate-400 text-sm leading-relaxed">لا نهائياً، تصل التقارير وإشعارات الحضور والدرجات لولي الأمر كرسالة واتساب عادية جداً على حسابه الحالي.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">كيف يتم طلب الكروت المطبوعة للطلاب؟</h3>
              <p className="text-slate-400 text-sm leading-relaxed">بعد الاشتراك وتوليد الأكواد، يمكنك التواصل معنا لتصميم وطاعة الكروت البلاستيكية بكميات (بحد أدنى 10 كروت) لتصلك جاهزة ومصممة بهوية السنتر أو المدرس.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">كيف يمكن للسناتر الاشتراك وتفعيل البوابة؟</h3>
              <p className="text-slate-400 text-sm leading-relaxed">اضغط على زر &quot;اشترك الآن&quot; وسيتم توجيهك مباشرة لمحادثتنا عبر الواتساب، وسيقوم فريق الدعم بتفعيل نظام السناتر وإعداد الجداول لك فوراً.</p>
            </div>
          </div>
        </section>

  
  
    </>
  );
}
