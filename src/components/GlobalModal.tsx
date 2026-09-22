/**
 * Global popup modal — rendered inside the simulator island,
 * driven imperatively by the sandbox logic (showModal / closeModal).
 */
export function GlobalModal() {
  return (
    <>
      <div
        id="globalModal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md hidden animate-fade-in"
      >
        <div className="glass-card max-w-md w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl space-y-5 text-right relative">
          <button
            data-action="closeModal"
            aria-label="إغلاق"
            className="absolute top-5 left-5 text-slate-400 hover:text-white transition w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
          <div
            id="modalIconContainer"
            className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-2xl shadow-inner"
          >
            <i id="modalIcon" className="fa-solid fa-circle-info"></i>
          </div>
          <div>
            <h3 id="modalTitle" className="text-xl font-black text-white mb-2">
              عنوان الرسالة
            </h3>
            <div
              id="modalBody"
              className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2"
            >
              محتوى الرسالة يظهر هنا...
            </div>
          </div>
          <div className="pt-2 flex justify-end gap-3">
            <button
              data-action="closeModal"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/20 transition w-full sm:w-auto text-center"
            >
              حسناً، فهمت
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
