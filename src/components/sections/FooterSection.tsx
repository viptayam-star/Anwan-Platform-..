export function FooterSection() {
  return (
    <>
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950 py-10 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-cyan-400">منصة عنوان</span>
              <span>© 2026 جميع الحقوق محفوظة</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://wa.me/201500994675" target="_blank" className="hover:text-cyan-400 transition">الدعم الفني والواتساب</a>
              <a href="#pricing" className="hover:text-cyan-400 transition">الأسعار</a>
              <a href="#simulator" className="hover:text-cyan-400 transition">تجربة المنصة</a>
              <a href="#faq" className="hover:text-cyan-400 transition">الأسئلة الشائعة</a>
            </div>
          </div>
        </footer>

  
    </>
  );
}
