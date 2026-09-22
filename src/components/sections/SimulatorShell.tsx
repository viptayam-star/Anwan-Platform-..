export function SimulatorShell() {
  return (
    <>
      <section id="simulator" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4 uppercase tracking-wider animate-pulse">
              <i className="fa-solid fa-desktop"></i> منصة المحاكاة التفاعلية الحية
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">اختبر لوحة التحكم الحقيقية كأنك تمتلكها</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              اختر الباقة لتجربة واجهة العمل الافتراضية للمدرس أو السنتر، أضف طالباً، جرب توليد كود الـ QR، أو افتح شاشة بوابة السنتر الذكية!
            </p>

      
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
              <button data-action="switchSandbox" data-arg="basic" id="sb-btn-basic" className="px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/50 flex items-center gap-2 justify-center">
                <i className="fa-solid fa-seedling text-cyan-400"></i>
                <span>1. باقة البداية الذكية (٢٩٩ جـ)</span>
              </button>

              <button data-action="switchSandbox" data-arg="pro" id="sb-btn-pro" className="px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-400 flex items-center gap-2 transform scale-105 justify-center">
                <i className="fa-solid fa-crown text-amber-300"></i>
                <span>2. المعلم المحترف (٥٩٩ جـ)</span>
              </button>

              <button data-action="switchSandbox" data-arg="centers" id="sb-btn-centers" className="px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/50 flex items-center gap-2 justify-center">
                <i className="fa-solid fa-building-columns text-amber-400"></i>
                <span>3. باقة السناتر والبوابات (١,٢٩٩ جـ)</span>
              </button>
            </div>
          </div>

    
          <div id="sandbox-container" className="glass-card rounded-3xl border-2 border-cyan-500/40 shadow-2xl overflow-hidden animate-neon transition-all duration-500">
      
      
            <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <span className="text-xs text-slate-400 font-mono border-r border-slate-700 pr-3 mr-2">Anwan OS v3.0 Sandbox</span>
                <span id="sb-active-badge" className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                  أستاذ ديمو (الباقة الاحترافية)
                </span>
              </div>

        
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                <button data-action="switchTab" data-arg="dashboard" id="tab-dashboard" className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 text-white transition flex items-center gap-1.5 whitespace-nowrap justify-center">
                  <i className="fa-solid fa-chart-pie"></i> لوحة التحكم
                </button>
                <button data-action="switchTab" data-arg="students" id="tab-students" className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center gap-1.5 whitespace-nowrap justify-center">
                  <i className="fa-solid fa-user-plus"></i> إضافة الطلاب والـ QR
                </button>
                <button data-action="switchTab" data-arg="scanner" id="tab-scanner" className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center gap-1.5 whitespace-nowrap justify-center">
                  <i className="fa-solid fa-qrcode"></i> محاكاة البوابة وحضور الطلاب
                </button>
              </div>
            </div>

      
            <div id="sandbox-content" className="p-6 sm:p-10 min-h-[480px]">
        
              <div id="view-dashboard" className="space-y-6 animate-fade-in">
          
                <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 rounded-2xl p-5 border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <i className="fa-solid fa-mobile-screen-button"></i>
                      <span>رقم الواتساب المعتمد لإرسال التقارير (إجباري):</span>
                    </div>
                    <p className="text-xs text-slate-400">الرقم الذي يتم ربط إشعارات الحضور والدرجات به لإرسالها لأولياء الأمور تلقائياً.</p>
                  </div>
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <input id="sandboxPhoneInput" type="text" defaultValue="01500994675" className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-cyan-300 font-mono focus:outline-none focus:border-cyan-500 w-full md:w-48 text-center font-bold" />
                    <button data-action="saveSandboxPhone" className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition shadow-lg">
                      حفظ الرقم
                    </button>
                  </div>
                </div>

                <div id="sandbox-metrics" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-center">
                    <i className="fa-solid fa-users text-cyan-400 text-xl mb-2"></i>
                    <p className="text-xs text-slate-400 mb-1">إجمالي الطلاب المسجلين</p>
                    <p className="text-2xl font-black text-white" id="stat-students-count">184 طالب</p>
                  </div>
                  <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-center">
                    <i className="fa-solid fa-user-check text-emerald-400 text-xl mb-2"></i>
                    <p className="text-xs text-slate-400 mb-1">نسبة حضور اليوم</p>
                    <p className="text-2xl font-black text-emerald-400">96.4%</p>
                  </div>
                  <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-center">
                    <i className="fa-brands fa-whatsapp text-teal-400 text-xl mb-2"></i>
                    <p className="text-xs text-slate-400 mb-1">تقارير الواتساب المرسلة</p>
                    <p className="text-2xl font-black text-teal-300">1,420</p>
                  </div>
                  <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-center">
                    <i className="fa-solid fa-clipboard-check text-amber-400 text-xl mb-2"></i>
                    <p className="text-xs text-slate-400 mb-1">المجموعات الدراسية</p>
                    <p className="text-2xl font-black text-amber-300" id="stat-groups-text">مفتوحة للكل</p>
                  </div>
                </div>

                <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs sm:text-sm text-slate-300">
                    <i className="fa-solid fa-circle-check text-emerald-400 ml-2"></i>
                    <span>المنصة جاهزة لاستقبال طلابك الجدد وإرسال الإشعارات. اختر علامة التبويب بالأعلى لتجربة إضافة طالب أو محاكاة البوابة!</span>
                  </div>
                  <button data-action="switchTab" data-arg="students" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg transition whitespace-nowrap">
                    <i className="fa-solid fa-user-plus ml-1"></i> ابدأ إضافة طالب تجريبي
                  </button>
                </div>

              </div>
            </div>

            <div className="bg-slate-950 px-6 py-3 border-t border-slate-900 text-xs text-slate-500 flex items-center justify-between">
              <span>منصة عنوان التعليمية — محاكاة تجريبية حية (Sandbox Mode)</span>
              <span className="text-cyan-400 font-bold">جميع الحقوق محفوظة 2026 ©</span>
            </div>

          </div>
        </section>

  
  
    </>
  );
}
