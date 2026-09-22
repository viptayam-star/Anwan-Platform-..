import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "منصة عنوان | مساعد المعلم والمنصة الذكية للدروس والسناتر الكبرى",
  description:
    "منصة عنوان الذكية لإدارة الدروس والسناتر: حضور فوري بالـ QR Code، إشعارات واتساب تلقائية لأولياء الأمور من رقمك، متابعة الواجبات والمصروفات، وبوابة سنتر ذكية تتعرّف على حصة المدرس وسعرها تلقائياً.",
  keywords: [
    "منصة عنوان",
    "إدارة سناتر",
    "حضور QR",
    "إشعارات واتساب",
    "مساعد المعلم",
    "إدارة الدروس",
  ],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "منصة عنوان",
    title: "منصة عنوان | مساعد المعلم والمنصة الذكية للدروس والسناتر الكبرى",
    description:
      "حضور بالـ QR Code، إشعارات واتساب فورية لأولياء الأمور، وبوابة سنتر ذكية — كل ما يحتاجه المعلم والسنتر في منصة واحدة.",
    images: [{ url: "/logo.png", alt: "شعار منصة عنوان" }],
  },
  twitter: {
    card: "summary",
    title: "منصة عنوان | مساعد المعلم والمنصة الذكية للدروس والسناتر",
    description: "حضور بالـ QR، إشعارات واتساب فورية لأولياء الأمور، وبوابة سنتر ذكية.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`scroll-smooth ${tajawal.variable}`}>
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
