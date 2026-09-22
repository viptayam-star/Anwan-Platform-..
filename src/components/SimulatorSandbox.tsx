"use client";

import { useEffect, useRef } from "react";
import { SimulatorShell } from "./sections/SimulatorShell";
import { GlobalModal } from "./GlobalModal";

/**
 * Interactive sandbox simulator — faithful port of the original inline script.
 *
 * Approach: the markup (SimulatorShell + GlobalModal) ships as React components,
 * while the sandbox behavior keeps the original imperative logic scoped to this
 * component's root. Clicks are handled through event delegation on
 * `[data-action]` elements (converted from the original inline `onclick`s),
 * so both static markup and dynamically-rendered tab content just work.
 */

type Student = { name: string; phone: string; group: string; code: string };

export function SimulatorSandbox() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const rootEl: HTMLDivElement = root;

    const $ = (id: string) => rootEl.querySelector<HTMLElement>(`#${id}`);
    const $input = (id: string) => rootEl.querySelector<HTMLInputElement>(`#${id}`);

    let currentTier = "pro";
    const mockStudents: Student[] = [
      { name: "أحمد محمد إبراهيم", phone: "01012345678", group: "المجموعة الأولى (السنتر)", code: "ANW-9012" },
      { name: "يوسف محمود علي", phone: "01198765432", group: "المجموعة الثانية (السنتر)", code: "ANW-9013" },
    ];

    // ---- Modal system -----------------------------------------------------
    function showModal(
      title: string,
      htmlContent: string,
      iconClass = "fa-solid fa-circle-info",
      iconBgColor = "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
    ) {
      const modal = $("globalModal");
      const titleEl = $("modalTitle");
      const bodyEl = $("modalBody");
      const iconEl = $("modalIcon");
      const iconCont = $("modalIconContainer");
      if (!modal || !titleEl || !bodyEl || !iconEl || !iconCont) return;

      titleEl.innerText = title;
      bodyEl.innerHTML = htmlContent;
      iconEl.className = iconClass;
      iconCont.className = `w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl shadow-inner ${iconBgColor}`;
      modal.classList.remove("hidden");
    }

    function closeModal() {
      $("globalModal")?.classList.add("hidden");
    }

    // ---- Phone settings ---------------------------------------------------
    function saveSandboxPhone() {
      const phoneInput = $input("sandboxPhoneInput");
      if (!phoneInput) return;
      const phoneVal = phoneInput.value.trim();

      if (!phoneVal) {
        showModal(
          "تنبيه هام",
          '<i class="fa-solid fa-triangle-exclamation text-amber-400 ml-1"></i> رقم الهاتف إجباري لتشغيل إشعارات النظام وربط الواتساب!',
          "fa-solid fa-triangle-exclamation",
          "text-amber-400 bg-amber-500/10 border-amber-500/30"
        );
        phoneInput.focus();
        return;
      }

      localStorage.setItem("teacher_whatsapp_number", phoneVal);
      showModal(
        "تم الحفظ بنجاح",
        `<i class="fa-solid fa-circle-check text-emerald-400 ml-1"></i> تم حفظ رقم المرسل المعتمد بنجاح:<br><span class="text-cyan-300 font-mono font-bold text-base">${phoneVal}</span><br>سيتم إرسال تقارير الحضور لأولياء الأمور مباشرة من هذا الرقم.`,
        "fa-solid fa-circle-check",
        "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
      );
    }

    // ---- Tier switching ---------------------------------------------------
    function switchSandbox(tier: string) {
      currentTier = tier;
      const btnBasic = $("sb-btn-basic");
      const btnPro = $("sb-btn-pro");
      const btnCenters = $("sb-btn-centers");
      const activeBadge = $("sb-active-badge");
      const container = $("sandbox-container");

      [btnBasic, btnPro, btnCenters].forEach((b) => {
        if (b)
          b.className =
            "px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center gap-2";
      });

      if (tier === "basic" && btnBasic && activeBadge && container) {
        btnBasic.className =
          "px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-400 flex items-center justify-center gap-2 transform scale-105";
        activeBadge.innerText = "أستاذ ديمو (باقة البداية الذكية)";
        container.className =
          "glass-card rounded-3xl border-2 border-cyan-500/40 shadow-2xl overflow-hidden animate-neon transition-all duration-500";
      } else if (tier === "pro" && btnPro && activeBadge && container) {
        btnPro.className =
          "px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-400 flex items-center justify-center gap-2 transform scale-105";
        activeBadge.innerText = "أستاذ ديمو (الباقة الاحترافية)";
        container.className =
          "glass-card rounded-3xl border-2 border-cyan-400 shadow-2xl overflow-hidden animate-neon transition-all duration-500";
      } else if (tier === "centers" && btnCenters && activeBadge && container) {
        btnCenters.className =
          "px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 border border-amber-300 flex items-center justify-center gap-2 transform scale-105";
        activeBadge.innerText = "إدارة سنتر ديمو (باقة السناتر الكبرى)";
        container.className =
          "glass-card rounded-3xl border-2 border-amber-400 shadow-2xl overflow-hidden animate-rainbow transition-all duration-500";
      }

      const sc = $("sandbox-content");
      const activeTab = sc?.dataset.activeTab || "dashboard";
      renderSandboxContent(activeTab);
    }

    // ---- Inner tabs ---------------------------------------------------------
    function switchTab(tabName: string) {
      const sc = $("sandbox-content");
      if (sc) sc.dataset.activeTab = tabName;
      ["dashboard", "students", "scanner"].forEach((t) => {
        const btn = $(`tab-${t}`);
        if (!btn) return;
        if (t === tabName) {
          btn.className =
            "px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 text-white transition flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md";
        } else {
          btn.className =
            "px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center justify-center gap-1.5 whitespace-nowrap";
        }
      });
      renderSandboxContent(tabName);
    }

    // ---- Dynamic tab content (innerHTML — same as the original) ------------
    function renderSandboxContent(tab: string) {
      const content = $("sandbox-content");
      if (!content) return;

      if (tab === "dashboard") {
        const groupsText =
          currentTier === "basic"
            ? "3 مجموعات فقط"
            : currentTier === "pro"
              ? "مجموعات غير محدودة"
              : "سنتر متعدد المعلمين";
        let extraCard = "";
        if (currentTier === "centers") {
          extraCard = `
            <div class="bg-amber-950/20 p-5 rounded-2xl border border-amber-500/30">
              <div class="flex items-center gap-3 text-amber-300 font-bold mb-2">
                <i class="fa-solid fa-building-columns text-xl"></i>
                <span>حالة بوابات السناتر الذكية:</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">السيستم يعمل في وضع التعرف التلقائي بالساعة (Smart Time-Gate). الأسيستانت على البوابة يرى حصة المدرس وسعرها فور مسح كارت الطالب.</p>
            </div>
          `;
        }

        content.innerHTML = `
          <div id="view-dashboard" class="space-y-6 animate-fade-in">
            <div class="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 rounded-2xl p-5 border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <span>رقم الواتساب المعتمد لإرسال التقارير (إجباري):</span>
                </div>
                <p class="text-xs text-slate-400">الرقم الذي يتم ربط إشعارات الحضور والدرجات به لإرسالها لأولياء الأمور تلقائياً.</p>
              </div>
              <div class="flex items-center gap-2 w-full md:w-auto">
                <input id="sandboxPhoneInput" type="text" value="${localStorage.getItem("teacher_whatsapp_number") || "01500994675"}" class="bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-cyan-300 font-mono focus:outline-none focus:border-cyan-500 w-full md:w-48 text-center font-bold" />
                <button data-action="saveSandboxPhone" class="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition shadow-lg whitespace-nowrap">
                  حفظ الرقم
                </button>
              </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-center">
                <i class="fa-solid fa-users text-cyan-400 text-xl mb-2"></i>
                <p class="text-xs text-slate-400 mb-1">الطلاب المسجلين بالديمو</p>
                <p class="text-2xl font-black text-white">${mockStudents.length} طلاب</p>
              </div>
              <div class="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-center">
                <i class="fa-solid fa-user-check text-emerald-400 text-xl mb-2"></i>
                <p class="text-xs text-slate-400 mb-1">نسبة الحضور</p>
                <p class="text-2xl font-black text-emerald-400">100%</p>
              </div>
              <div class="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-center">
                <i class="fa-brands fa-whatsapp text-teal-400 text-xl mb-2"></i>
                <p class="text-xs text-slate-400 mb-1">حالة الواتساب</p>
                <p class="text-2xl font-black text-teal-300">متصل وجاهز</p>
              </div>
              <div class="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-center">
                <i class="fa-solid fa-clipboard-check text-amber-400 text-xl mb-2"></i>
                <p class="text-xs text-slate-400 mb-1">نوع الباقة النشطة</p>
                <p class="text-xs font-bold text-amber-300 mt-2">${groupsText}</p>
              </div>
            </div>

            ${extraCard}

            <div class="p-5 bg-slate-900/50 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div class="text-xs sm:text-sm text-slate-300">
                <i class="fa-solid fa-wand-magic-sparkles text-cyan-400 ml-2"></i>
                <span>انتقل إلى قسم <strong>"إضافة الطلاب والـ QR"</strong> لتجربة إضافة طالب جديد ورؤية الكود الفوري الخاص به!</span>
              </div>
              <button data-action="switchTab" data-arg="students" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg transition whitespace-nowrap">
                جرب إضافة طالب الآن
              </button>
            </div>
          </div>
        `;
      } else if (tab === "students") {
        const studentsRows = mockStudents
          .map(
            (s) => `
          <tr class="border-b border-slate-800/80 hover:bg-slate-900/50 transition">
            <td class="py-3 px-4 font-bold text-white">${s.name}</td>
            <td class="py-3 px-4 font-mono text-cyan-300">${s.phone}</td>
            <td class="py-3 px-4 text-slate-300 text-xs">${s.group}</td>
            <td class="py-3 px-4 font-mono text-emerald-400 text-xs">${s.code}</td>
            <td class="py-3 px-4 text-center">
              <button data-action="previewStudentCard" data-name="${s.name}" data-code="${s.code}" data-group="${s.group}" class="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition">
                <i class="fa-solid fa-qrcode"></i> عرض الكارت
              </button>
            </td>
          </tr>
        `
          )
          .join("");

        content.innerHTML = `
          <div id="view-students" class="space-y-6 animate-fade-in">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 class="text-lg font-bold text-white mb-1">قائمة الطلاب وتوليد أكواد الـ QR</h3>
                <p class="text-xs text-slate-400">أضف طلابك الجدد وشاهد كيف يتم إنشاء كروت الـ QR الخاصة بهم أوتوماتيكياً.</p>
              </div>
              <button data-action="openAddStudentModal" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition">
                <i class="fa-solid fa-user-plus"></i> إضافة طالب جديد
              </button>
            </div>

            <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40">
              <table class="w-full text-right text-sm text-slate-300">
                <thead class="bg-slate-900 text-xs uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th class="py-3.5 px-4">اسم الطالب</th>
                    <th class="py-3.5 px-4">رقم ولي الأمر (واتساب)</th>
                    <th class="py-3.5 px-4">المجموعة الدراسية</th>
                    <th class="py-3.5 px-4">كود الـ QR الرقمي</th>
                    <th class="py-3.5 px-4 text-center">إجراءات الكارت</th>
                  </tr>
                </thead>
                <tbody>
                  ${studentsRows}
                </tbody>
              </table>
            </div>

            <div id="addStudentBox" class="hidden p-5 rounded-2xl bg-slate-900 border border-cyan-500/40 space-y-4 animate-fade-in">
              <h4 class="text-sm font-bold text-cyan-400 flex items-center gap-2">
                <i class="fa-solid fa-user-plus"></i> تسجيل طالب جديد في النظام التجريبي:
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input id="newStudentName" type="text" placeholder="اسم الطالب الثلاثي" class="bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
                <input id="newStudentPhone" type="text" placeholder="رقم ولي الأمر (010...)" class="bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
                <input id="newStudentGroup" type="text" placeholder="المجموعة أو المدرس" class="bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              </div>
              <div class="flex justify-end gap-2">
                <button data-action="hideAddStudentBox" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">إلغاء</button>
                <button data-action="addNewStudent" class="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow">حفظ وتوليد الـ QR</button>
              </div>
            </div>
          </div>
        `;
      } else if (tab === "scanner") {
        const scannerTitle =
          currentTier === "centers"
            ? "محاكاة بوابة السنتر الذكية (Smart Gate Scanner)"
            : "محاكاة مسح كارت الطالب وإرسال الواتساب";
        const scannerDesc =
          currentTier === "centers"
            ? "في هذا الوضع، يقوم الأسيستانت بمسح كارت الطالب على بوابة السنتر، والسيستم يحدد فوراً الحصة الحالية وسعرها!"
            : "جرب توجيه القارئ أو محاكاة مسح كارت الطالب لتشغيل إشعارات الواتساب الفورية لولي الأمر.";

        content.innerHTML = `
          <div id="view-scanner" class="space-y-6 text-center py-8 animate-fade-in">
            <div class="max-w-xl mx-auto space-y-3">
              <div class="w-16 h-16 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-2xl mx-auto mb-4 animate-bounce">
                <i class="fa-solid fa-qrcode"></i>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white">${scannerTitle}</h3>
              <p class="text-xs sm:text-sm text-slate-400">${scannerDesc}</p>
            </div>

            <div class="max-w-md mx-auto p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl">
              <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-cyan-300 text-xs">
                جاهز للمسح... [ضع كارت الطالب أمام الماسح الضوئي]
              </div>
              <button data-action="triggerSandboxScan" class="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 transition flex items-center justify-center gap-2">
                <i class="fa-solid fa-camera text-lg"></i>
                <span>اضغط هنا لمحاكاة مسح كارت طالب الآن</span>
              </button>
            </div>
          </div>
        `;
      }
    }

    // ---- Card preview / add student / gate scan -----------------------------
    function previewStudentCard(name: string, code: string, group: string) {
      const cardHtml = `
        <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 border border-cyan-500/40 text-center space-y-3 shadow-inner">
          <div class="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">منصة عنوان التعليمية — بطاقة طالب</div>
          <div class="w-24 h-24 bg-white p-2 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            <i class="fa-solid fa-qrcode text-6xl text-slate-950"></i>
          </div>
          <h4 class="text-base font-black text-white">${name}</h4>
          <p class="text-xs text-slate-400">المجموعة: <span class="text-cyan-300 font-bold">${group}</span></p>
          <div class="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-emerald-400 font-mono font-bold text-xs">
            ${code}
          </div>
        </div>
      `;
      showModal(
        "معاينة كارت الطالب الذكي (QR Code)",
        cardHtml,
        "fa-solid fa-id-card",
        "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
      );
    }

    function openAddStudentModal() {
      $("addStudentBox")?.classList.remove("hidden");
    }

    function addNewStudent() {
      const name = $input("newStudentName")?.value.trim() ?? "";
      const phone = $input("newStudentPhone")?.value.trim() ?? "";
      const group = $input("newStudentGroup")?.value.trim() || "المجموعة الأساسية";

      if (!name || !phone) {
        showModal(
          "بيانات غير مكتملة",
          '<i class="fa-solid fa-triangle-exclamation text-amber-400 ml-1"></i> يرجى إدخال اسم الطالب الثلاثي ورقم ولي الأمر (واتساب) بشكل صحيح!',
          "fa-solid fa-triangle-exclamation",
          "text-amber-400 bg-amber-500/10 border-amber-500/30"
        );
        return;
      }

      const randomCode = "ANW-" + Math.floor(1000 + Math.random() * 9000);
      mockStudents.push({ name, phone, group, code: randomCode });

      $("addStudentBox")?.classList.add("hidden");
      showModal(
        "تمت الإضافة بنجاح",
        `<i class="fa-solid fa-circle-check text-emerald-400 ml-1"></i> تمت إضافة الطالب <strong class="text-white">${name}</strong> بنجاح وتم توليد كود الـ QR الخاص به:<br><span class="text-emerald-400 font-mono font-bold text-sm">${randomCode}</span>`,
        "fa-solid fa-user-check",
        "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
      );
      switchTab("students");
    }

    function triggerSandboxScan() {
      const savedPhone =
        localStorage.getItem("teacher_whatsapp_number") ||
        $input("sandboxPhoneInput")?.value ||
        "01500994675";

      if (currentTier === "centers") {
        const msg = `
          <div class="space-y-2 text-right">
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span class="text-cyan-400 font-bold">وقت المسح:</span> الساعة 9:45 صباحاً
            </div>
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span class="text-amber-400 font-bold">الحصة المستهدفة:</span> مستر أحمد (ساينس) — الساعة 10:00 ص
            </div>
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span class="text-amber-400 font-bold">مصاريف الحصة:</span> 70 جـ (تم التحصيل)
            </div>
            <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 font-semibold">
              <i class="fa-brands fa-whatsapp text-sm ml-1"></i> تم إرسال إشعار ولي الأمر الفوري عبر رقمك المعتمد (${savedPhone}) بنجاح!
            </div>
          </div>
        `;
        showModal(
          "تقرير محاكاة بوابة السنتر الذكية",
          msg,
          "fa-solid fa-qrcode",
          "text-amber-400 bg-amber-500/10 border-amber-500/30"
        );
      } else {
        const msg = `
          <div class="space-y-2 text-right">
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span class="text-cyan-400 font-bold">اسم الطالب:</span> ${mockStudents[0].name}
            </div>
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span class="text-emerald-400 font-bold">حالة الحضور:</span> تم تسجيل الحضور في الموعد المحدد بنجاح
            </div>
            <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 font-semibold">
              <i class="fa-brands fa-whatsapp text-sm ml-1"></i> تم إرسال إشعار ولي الأمر الفوري عبر رقمك (${savedPhone}) بنجاح!
            </div>
          </div>
        `;
        showModal(
          "تقرير تسجيل الحضور الفوري",
          msg,
          "fa-solid fa-circle-check",
          "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
        );
      }
    }

    // ---- Delegated events ---------------------------------------------------
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest("[data-action]") as HTMLElement | null;
      if (!el || !rootEl.contains(el)) return;
      switch (el.dataset.action) {
        case "switchSandbox":
          switchSandbox(el.dataset.arg ?? "pro");
          break;
        case "switchTab":
          switchTab(el.dataset.arg ?? "dashboard");
          break;
        case "closeModal":
          closeModal();
          break;
        case "saveSandboxPhone":
          saveSandboxPhone();
          break;
        case "openAddStudentModal":
          openAddStudentModal();
          break;
        case "hideAddStudentBox":
          $("addStudentBox")?.classList.add("hidden");
          break;
        case "addNewStudent":
          addNewStudent();
          break;
        case "triggerSandboxScan":
          triggerSandboxScan();
          break;
        case "previewStudentCard":
          previewStudentCard(
            el.dataset.name ?? "",
            el.dataset.code ?? "",
            el.dataset.group ?? ""
          );
          break;
      }
    }

    // ---- Init ---------------------------------------------------------------
    const savedPhone = localStorage.getItem("teacher_whatsapp_number");
    const phoneInput = $input("sandboxPhoneInput");
    if (savedPhone && phoneInput) phoneInput.value = savedPhone;
    renderSandboxContent("dashboard");

    rootEl.addEventListener("click", onClick);
    return () => rootEl.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={rootRef}>
      <SimulatorShell />
      <GlobalModal />
    </div>
  );
}
