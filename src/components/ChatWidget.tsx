"use client";

import { useEffect, useRef } from "react";
import { ChatWidgetMarkup } from "./ChatWidgetMarkup";

/**
 * Chat widget behavior — faithful port of the original inline script.
 * Uses delegated events on a component root instead of global functions.
 */
export function ChatWidget() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const rootEl: HTMLDivElement = root;

    const $ = (id: string) => rootEl.querySelector<HTMLElement>(`#${id}`);

    function toggleChat() {
      const win = $("chatWindow");
      win?.classList.toggle("hidden");
    }

    function appendChatMessage(text: string, sender: "user" | "bot") {
      const container = $("chatMessages");
      if (!container) return;
      const div = document.createElement("div");
      if (sender === "user") {
        div.className = "flex gap-2 items-start justify-end";
        div.innerHTML = `
          <div class="bg-cyan-600 text-white p-3 rounded-2xl rounded-tl-none leading-relaxed max-w-[80%]">${text}</div>
          <div class="w-7 h-7 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">أنت</div>
        `;
      } else {
        div.className = "flex gap-2 items-start";
        div.innerHTML = `
          <div class="w-7 h-7 rounded-lg bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">ع</div>
          <div class="bg-slate-900 border border-slate-800 p-3 rounded-2xl rounded-tr-none leading-relaxed text-slate-200 max-w-[80%]">${text}</div>
        `;
      }
      container.appendChild(div);
      container.scrollTop = container.scrollHeight;
    }

    function sendQuickQuery(text: string) {
      appendChatMessage(text, "user");
      setTimeout(() => {
        let reply =
          "يمكنك التواصل معنا فوراً عبر رقم الواتساب 01500994675 لتفعيل باقتك فوراً وتجربة المنصة!";
        if (text.includes("السناتر")) {
          reply =
            "نظام السناتر لدينا يتيح مسح كارت الطالب والتعرف التلقائي على المدرس وحصة الوقت الحالي وعرض سعر الحصة للأسيستانت فوراً.";
        } else if (text.includes("واتساب")) {
          window.open(
            "https://wa.me/201500994675?text=أهلاً،%20أريد%20الاستفسار%20عن%20منصة%20عنوان",
            "_blank"
          );
          reply = "تم تحويلك مباشرة لمحادثة الواتساب معنا!";
        }
        appendChatMessage(reply, "bot");
      }, 600);
    }

    function sendUserMessage() {
      const input = rootEl.querySelector<HTMLInputElement>("#chatInput");
      if (!input) return;
      const val = input.value.trim();
      if (!val) return;
      appendChatMessage(val, "user");
      input.value = "";
      setTimeout(() => {
        appendChatMessage(
          "شكراً لتواصلك معنا! أستطيع مساعدتك في تفاصيل الباقات، تواصل معنا عبر واتساب 01500994675 للتفعيل السريع.",
          "bot"
        );
      }, 700);
    }

    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest("[data-action]") as HTMLElement | null;
      if (!el || !rootEl.contains(el)) return;
      switch (el.dataset.action) {
        case "toggleChat":
          toggleChat();
          break;
        case "sendQuickQuery":
          sendQuickQuery(el.dataset.arg ?? "");
          break;
        case "sendUserMessage":
          sendUserMessage();
          break;
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter" && (e.target as HTMLElement)?.id === "chatInput") {
        e.preventDefault();
        sendUserMessage();
      }
    }

    rootEl.addEventListener("click", onClick);
    rootEl.addEventListener("keydown", onKeyDown);
    return () => {
      rootEl.removeEventListener("click", onClick);
      rootEl.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <ChatWidgetMarkup />
    </div>
  );
}
