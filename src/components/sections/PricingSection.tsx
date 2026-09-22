export function PricingSection() {
  return (
    <>
      <section id="pricing" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3 uppercase tracking-wider">
              باقات الأسعار والاشتراكات
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">اختر الباقة المناسبة لطبيعة دروسك وسنتك</h2>
            <p className="text-slate-400 text-base sm:text-lg">خطط أسعار واضحة وعادلة لكل المعلمين والسناتر، مع دعم فني مستمر وتفعيل فوري.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      
      
            <div className="glass-card rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <div className="text-cyan-400 font-bold text-sm mb-2">باقة المعلم الفرد</div>
                <h3 className="text-2xl font-black text-white mb-4">البداية الذكية</h3>
                <p className="text-slate-400 text-xs mb-6">مناسبة للمعلمين الذين يديرون عدداً محدوداً من المجموعات الدراسية.</p>
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl font-black text-white">٢٩٩</span>
                  <span className="text-slate-400 text-sm">جنية / شهرياً</span>
                </div>

                <div className="mb-6 p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 text-slate-300 text-xs leading-relaxed">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
                    <i className="fa-solid fa-circle-info"></i>
                    <span>تنويه هام بشأن الكروت:</span>
                  </div>
                  السعر يشمل توليد أكواد الـ (QR Code) الرقمية فقط. لطباعة الكروت البلاستيكية الفاخرة تواصل معنا (الحد الأدنى للطلب 10 كروت).
                </div>

                <ul className="space-y-3 text-slate-300 text-sm mb-8">
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> حتى 3 مجموعات دراسية</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> تسجيل حضور QR غير محدود</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> إشعارات الواتساب عبر رقمك</li>
                  <li className="flex items-center gap-2 text-slate-500"><i className="fa-solid fa-xmark text-slate-600"></i> نظام السناتر والبوابات المتقدمة</li>
                </ul>
              </div>
              <a href="https://wa.me/201500994675?text=أهلاً،%20أريد%20الاشتراك%20في%20الباقة%20الأساسية%20لمنصة%20عنوان" 
                 target="_blank" 
                 className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-center text-sm transition">
                اختر الباقة الأساسية
              </a>
            </div>

      
            <div className="glass-card rounded-3xl p-8 border-2 border-cyan-500 relative flex flex-col justify-between shadow-2xl shadow-cyan-500/10 bg-slate-900/90 transform md:-translate-y-2">
              <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                الأكثر طلباً بين المعلمين
              </div>
              <div>
                <div className="text-cyan-400 font-bold text-sm mb-2">الباقة الاحترافية</div>
                <h3 className="text-2xl font-black text-white mb-4">المعلم المحترف</h3>
                <p className="text-slate-400 text-xs mb-6">الحل المتكامل لإدارة كل مجموعاتك وربط أولياء الأمور بكفاءة قصوى.</p>
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800">
                  <span className="text-5xl font-black text-white">٥٩٩</span>
                  <span className="text-slate-400 text-sm">جنية / شهرياً</span>
                </div>

                <div className="mb-6 p-3.5 bg-slate-950/90 rounded-2xl border border-cyan-500/20 text-slate-300 text-xs leading-relaxed">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
                    <i className="fa-solid fa-circle-info"></i>
                    <span>تنويه هام بشأن الكروت:</span>
                  </div>
                  السعر يشمل توليد أكواد الـ (QR Code) الرقمية فقط. لطباعة الكروت البلاستيكية الفاخرة تواصل معنا (الحد الأدنى للطلب 10 كروت).
                </div>

                <ul className="space-y-3 text-slate-200 text-sm mb-8">
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> مجموعات دراسية غير محدودة</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> عدد طلاب غير محدود بالمنصة</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> إرسال فوري للواتساب برقمك الخاص</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> متابعة الواجبات واختبارات الشيتات</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> تقارير وتحليلات أداء الطلاب الشهرية</li>
                </ul>
              </div>
              <a href="https://wa.me/201500994675?text=أهلاً،%20أريد%20الاشتراك%20في%20الباقة%20الاحترافية%20لمنصة%20عنوان" 
                 target="_blank" 
                 className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-center text-sm shadow-lg shadow-cyan-500/25 transition">
                اشترك في الباقة الاحترافية الآن
              </a>
            </div>

      
            <div className="glass-card rounded-3xl p-8 border-2 border-amber-500/60 flex flex-col justify-between hover:border-amber-300 transition bg-gradient-to-b from-amber-950/20 to-slate-900/60">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold mb-2">مميزة بسعر خاص للمراكز</div>
                <h3 className="text-2xl font-black text-white mb-4">باقة السناتر والبوابات الذكية</h3>
                <p className="text-slate-400 text-xs mb-6">مخصصة للسناتر الكبيرة التي تضم عدة معلمين وتدير الكروت والأسعار بذكاء.</p>
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl font-black text-amber-400">١,٢٩٩</span>
                  <span className="text-slate-400 text-sm">جنية / شهرياً</span>
                </div>

                <div className="mb-6 p-3.5 bg-slate-900/90 rounded-2xl border border-amber-500/30 text-slate-300 text-xs leading-relaxed">
                  <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                    <i className="fa-solid fa-circle-info"></i>
                    <span>تنويه هام بشأن الكروت:</span>
                  </div>
                  السعر يشمل توليد أكواد الـ (QR Code) الرقمية فقط. لطباعة كروت البوابات للسنتر تواصل معنا (حد أدنى 10 كروت للطلب).
                </div>

                <ul className="space-y-3 text-slate-300 text-sm mb-8">
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-amber-400"></i> <strong>خاصية الكارت الذكي للبوابات</strong></li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-amber-400"></i> إدارة عدة معلمين وقاعات مختلفة</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-amber-400"></i> تحديد أسعار الحصص أوتوماتيكياً</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-amber-400"></i> دعم فني مخصص VIP 24/7</li>
                </ul>
              </div>
              <a href="https://wa.me/201500994675?text=أهلاً،%20أريد%20الاشتراك%20في%20باقة%20السناتر%20والبوابات%20الذكية%20لمنصة%20عنوان" 
                 target="_blank" 
                 className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-center text-sm shadow-lg shadow-amber-600/20 transition">
                اشترك في باقة السناتر الكبرى
              </a>
            </div>

          </div>
        </section>

  
  
    </>
  );
}
