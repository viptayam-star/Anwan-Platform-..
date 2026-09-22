export function ComparisonSection() {
  return (
    <>
      <section id="comparison" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">الفرق بين الطريقة التقليدية و&quot;منصة عنوان&quot;</h2>
            <p className="text-slate-400 text-sm">قارن بنفسك واستشف كم الوقت والمجهود المهدور في إدارة الحضور وبوابات السناتر يدوياً</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-rose-950/20 border border-rose-900/40 rounded-3xl p-8">
              <div className="flex items-center gap-3 text-rose-400 font-bold text-xl mb-6">
                <i className="fa-solid fa-xmark-circle text-2xl"></i>
                <span>الطريقة التقليدية القديمة</span>
              </div>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-minus text-rose-500 mt-1"></i>
                  <span>حيرة الأسيستانت على البوابة في معرفة المدرس وسعر الحصة.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-minus text-rose-500 mt-1"></i>
                  <span>تأخير وتكدس الطلاب عطلة على أبواب السناتر.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-minus text-rose-500 mt-1"></i>
                  <span>إرسال الرسائل يدوياً لأولياء الأمور بالواحد بعد الحصة.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-minus text-rose-500 mt-1"></i>
                  <span>كثرة الأخطاء في حسابات المصروفات وتكلفة الحصص.</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-xl mb-6">
                <i className="fa-solid fa-check-circle text-2xl"></i>
                <span>مع منصة عنوان الذكية</span>
              </div>
              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-emerald-400 mt-1"></i>
                  <span>تعرف فوري بالوقت على حصة المدرس وسعرها عند مسح الكارت.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-emerald-400 mt-1"></i>
                  <span>دخول سلس وسريع بدون أي طوابير أو أسئلة على البوابة.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-emerald-400 mt-1"></i>
                  <span>إشعارات واتساب فورية تصل لولي الأمر أثناء وجود الطالب بالحصة.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-emerald-400 mt-1"></i>
                  <span>تنظيم احترافي يرفع اسم السنتر ويجذب كبار المدرسين.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

  
  
    </>
  );
}
