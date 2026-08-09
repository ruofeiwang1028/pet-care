"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "首页" }, { href: "/services", label: "服务" },
  { href: "/about", label: "关于" }, { href: "/appointment", label: "预约" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return <header className="relative z-20 h-[94px] border-b border-ink/15 bg-paper max-sm:h-[78px]">
    <div className="shell flex h-full items-center justify-between">
      <Link className="flex items-center gap-3 font-serif text-[19px] font-bold leading-tight" href="/" aria-label="爪爪日记首页">
        <span className="grid size-10 place-items-center rounded-full border border-current italic" aria-hidden="true">P</span>
        <span>爪爪日记<small className="mt-1 block font-sans text-[8px] tracking-[.22em]">PAW DIARY</small></span>
      </Link>
      <button className="hidden size-11 p-2 max-[900px]:block" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label="切换导航菜单" onClick={() => setOpen(!open)}>
        <span className="my-2 block h-px bg-ink" /><span className="my-2 block h-px bg-ink" />
      </button>
      <nav id="main-navigation" aria-label="主导航" className={`${open ? "flex" : "max-[900px]:hidden"} flex items-center gap-9 text-[13px] font-semibold max-[900px]:absolute max-[900px]:left-0 max-[900px]:right-0 max-[900px]:top-[94px] max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-0 max-[900px]:border-b max-[900px]:border-ink/15 max-[900px]:bg-paper max-[900px]:p-5 max-sm:top-[78px]`}>
        {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined} className={`border-b py-3 transition-colors min-[901px]:border-b-2 min-[901px]:py-8 ${pathname === link.href ? "border-ink" : "border-transparent hover:border-ink/40"}`}>{link.label}</Link>)}
        <Link href="/appointment" onClick={() => setOpen(false)} className="flex items-center justify-between gap-6 bg-forest px-5 py-3 text-white max-[900px]:mt-3">预约到店 <span>→</span></Link>
      </nav>
    </div>
  </header>;
}
