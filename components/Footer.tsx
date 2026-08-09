import Link from "next/link";

export function Footer() {
  return <footer className="bg-deep-forest pb-6 pt-16 text-sage">
    <div className="shell grid grid-cols-[2fr_1fr_1fr] gap-16 max-md:grid-cols-1 max-md:gap-8">
      <div><Link className="flex items-center gap-3 font-serif text-xl font-bold text-white" href="/"><span className="grid size-10 place-items-center rounded-full border">P</span><span>爪爪日记<small className="block font-sans text-[8px] tracking-[.2em]">PAW DIARY</small></span></Link><p className="mt-4 text-xs text-sage/70">用耐心，照顾每一份信任。</p></div>
      <div><span className="text-[9px] tracking-[.2em] text-sage/60">到店</span><p className="mt-3 text-xs text-sage/70">城市广场宠物友好街 18 号<br />10:00–20:00 · 周一店休</p></div>
      <div><span className="text-[9px] tracking-[.2em] text-sage/60">浏览</span><div className="mt-3 flex flex-col text-xs"><Link href="/services">洗护服务</Link><Link href="/about">关于我们</Link><Link href="/appointment">预约到店</Link></div></div>
    </div>
    <div className="shell mt-14 flex justify-between border-t border-white/10 pt-5 text-[9px] tracking-widest text-sage/50 max-sm:flex-col max-sm:gap-2"><span>© 2026 PAW DIARY PET GROOMING</span><span>温柔 · 专业 · 透明</span></div>
  </footer>;
}
