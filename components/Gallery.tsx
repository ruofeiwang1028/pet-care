"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { spaces } from "@/data/site";

export function Gallery() {
  const [current, setCurrent] = useState(0);
  const show = (index: number) => setCurrent((index + spaces.length) % spaces.length);
  useEffect(() => { const timer = window.setInterval(() => setCurrent(v => (v + 1) % spaces.length), 5500); return () => clearInterval(timer); }, []);
  return <div className="relative h-[620px] overflow-hidden bg-sage max-sm:h-[440px]" role="region" aria-roledescription="carousel" aria-label="店内环境">
    {spaces.map((space, index) => <figure key={space.src} className={`absolute inset-0 m-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={index !== current}>
      <Image className="object-cover" src={space.src} alt={space.alt} fill sizes="(max-width: 900px) 100vw, 50vw" priority={index === 0} />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
      <figcaption className="absolute bottom-9 left-9 z-10 text-white"><span className="block text-[9px] tracking-[.2em]">{space.label}</span><strong className="block font-serif text-2xl font-normal">{space.title}</strong></figcaption>
    </figure>)}
    <div className="absolute bottom-7 right-6 z-10 flex items-center gap-3 text-white"><button className="grid size-9 place-items-center rounded-full border border-white/50" onClick={() => show(current - 1)} aria-label="上一张">←</button><span className="text-[9px] tracking-widest">{String(current + 1).padStart(2, "0")} / {String(spaces.length).padStart(2, "0")}</span><button className="grid size-9 place-items-center rounded-full border border-white/50" onClick={() => show(current + 1)} aria-label="下一张">→</button></div>
    <div className="absolute right-6 top-6 z-10 flex gap-2">{spaces.map((space, index) => <button key={space.src} className={`size-2 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`} onClick={() => show(index)} aria-label={`查看${space.title}`} aria-current={index === current ? "true" : undefined} />)}</div>
  </div>;
}
