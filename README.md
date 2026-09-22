# منصة عنوان — Next.js

النسخة الحديثة (Next.js 16 · App Router · TypeScript) من صفحة **منصة عنوان** التعليمية — مساعد المعلم والمنصة الذكية للدروس والسناتر.

## التشغيل

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the build
npm run lint       # eslint
```

> على سيرفر البناء: استخدم `PATH="/usr/local/bin:$PATH"` (Node 22) — لأن `/usr/bin/npm` مربوط بـ Node 18.

## البنية

| المسار | الوصف |
|---|---|
| `src/app/layout.tsx` | RTL + خط Tajawal (next/font) + Metadata/OpenGraph |
| `src/app/page.tsx` | تركيب الأقسام بالترتيب |
| `src/components/sections/*` | كل قسم Component مستقل (Server Components) |
| `src/components/SimulatorSandbox.tsx` | السيمولاتور التفاعلي + المودال (Client island) |
| `src/components/ChatWidget.tsx` | شات "مساعد عنوان الذكي" (Client island) |
| `src/components/BrandMark.tsx` | اللوجو مع fallback حرف «ع» (Client) |
| `src/app/globals.css` | Tailwind + الأنيميشنز وكلاسات glass-card / glass-nav |

## ملاحظات التحويل من الملف الواحد الأصلي

- **Tailwind v3.4** مقصود — نفس الإنجن اللي الصفحة الأصلية اتبنت بيه (CDN)، عشان كل الكلاسات (`shadow`, `bg-gradient-to-*`, `flex-shrink-0`) تتصرّف بنفس الشكل بالظبط. الـ dark mode على الإعداد الافتراضي (`media`) ومفيش تخصيص.
- **Font Awesome 6** مستضاف محليًا من npm (بدل CDN خارجي) — نفس الأيقونات.
- **اللوجو محلي** في `public/logo.png` + favicon من `src/app/icon.png` (كان مستضاف على postimg.cc).
- كل الـ inline `onclick` اتحوّلت لـ `data-action` + event delegation على جذر كل island — مفيش أي JS عام أو تسريب globals.
- الإيموجيز اتشالت واستُبدلت بأيقونات Font Awesome.
- ألوان البنفسجي الغامق اتغيّرت لذهبي/أمبر (تمييز باقات السناتر + العناصر الحصرية).
- تحسينات: نافذة الشات متجاوبة على الموبايل، SEO metadata + OG، زر "حفظ الرقم" بحفظ localStorage شغال زي الأصل.

## الأصل

الصفحة الأصلية كانت ملف `index.html` واحد (80KB) بـ Tailwind CDN + Font Awesome CDN + سكربتات inline — المصدر: `viptayam-star/Anwan-Platform-*` على GitHub.
