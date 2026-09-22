/**
 * Floating "مساعد عنوان الذكي" chat widget — markup only.
 * Behavior lives in ChatWidget.tsx (delegated events, no global handlers).
 */
export function ChatWidgetMarkup() {
  return (
    <>
      <div id="anwanChatWidget" className="fixed bottom-6 left-6 z-50">
        {/* Toggle Chat Button */}
        <button
          data-action="toggleChat"
          id="chatToggleBtn"
          aria-label="فتح المحادثة"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center shadow-2xl shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
        >
          <i className="fa-solid fa-comments text-2xl" id="chatIcon"></i>
        </button>

        {/* Chat Window Container (Hidden by Default) */}
        <div
          id="chatWindow"
          className="glass-card absolute bottom-20 left-0 w-[calc(100vw-3rem)] max-w-[380px] rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden hidden flex flex-col animate-fade-in h-[480px] max-h-[70vh]"
        >
          {/* Chat Header */}
          <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">مساعد عنوان الذكي</h4>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>{" "}
                  متصل الآن للرد الفوري
                </span>
              </div>
            </div>
            <button
              data-action="toggleChat"
              aria-label="إغلاق المحادثة"
              className="text-slate-400 hover:text-white transition w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Chat Messages Body */}
          <div
            id="chatMessages"
            className="flex-1 p-4 overflow-y-auto space-y-3 text-xs sm:text-sm text-slate-300"
          >
            <div className="flex gap-2 items-start">
              <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                ع
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl rounded-tr-none leading-relaxed text-slate-200">
                أهلاً بك! أنا مساعد منصة عنوان الذكي. كيف يمكنني مساعدتك اليوم في تفعيل
                الباقة أو إدارة سنترك التعليمي؟
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex gap-2 overflow-x-auto text-[11px]">
            <button
              data-action="sendQuickQuery"
              data-arg="كيف أشترك في الباقة؟"
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 whitespace-nowrap transition"
            >
              كيف أشترك؟
            </button>
            <button
              data-action="sendQuickQuery"
              data-arg="ما هي مميزات السناتر؟"
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 whitespace-nowrap transition"
            >
              مميزات السناتر
            </button>
            <button
              data-action="sendQuickQuery"
              data-arg="تواصل عبر الواتساب"
              className="px-3 py-1.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-800/60 whitespace-nowrap transition"
            >
              واتساب (01500994675)
            </button>
          </div>

          {/* Chat Input Area */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              id="chatInput"
              type="text"
              placeholder="اكتب استفسارك هنا..."
              className="flex-1 min-w-0 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
            <button
              data-action="sendUserMessage"
              aria-label="إرسال"
              className="w-10 h-10 shrink-0 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center transition shadow-md"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
