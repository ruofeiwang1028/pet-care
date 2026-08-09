import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = { title: { default: "爪爪日记｜宠物洗护", template: "%s｜爪爪日记" }, description: "一宠一室、全程可见的宠物洗护体验，让每一次护理都温柔、安心。" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><a className="fixed left-4 top-4 z-50 -translate-y-40 bg-white px-4 py-2 focus:translate-y-0" href="#main">跳至主要内容</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
