import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "洗护服务", description: "查看爪爪日记的基础净护、造型精修和皮毛深度护理服务。" };
export default function ServicesPage() {
  return <><PageIntro eyebrow="SERVICES & PRICING" title="为每一种皮毛，找到刚刚好的护理。" description="价格透明，流程清楚。实际用时与价格会根据体型、毛量、打结程度和配合情况，在服务前与您确认。" />
    <section className="shell py-20">{services.map(s => <article id={s.slug} key={s.slug} className="grid grid-cols-[80px_1.1fr_1fr_.65fr] gap-10 border-b border-ink/15 py-14 max-lg:grid-cols-[50px_1fr] max-sm:grid-cols-1 max-sm:gap-3"><div className="font-serif text-xl text-muted">{s.number}</div><div><span className="eyebrow">{s.duration}</span><h2 className="my-3 font-serif text-4xl font-normal">{s.name}</h2><p className="max-w-sm text-sm text-muted">{s.description}</p></div><div className="max-lg:col-start-2 max-sm:col-auto"><ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0">{s.includes.map(i => <li className="border-b border-ink/15 pb-2 text-xs" key={i}>{i}</li>)}</ul></div><div className="pt-8 text-right max-lg:col-start-2 max-lg:text-left max-sm:col-auto"><strong className="mb-7 block font-serif text-2xl font-normal">{s.price}</strong><Link className="border-b border-current py-1 text-sm font-bold" href="/appointment">预约此项目 →</Link></div></article>)}</section>
    <section className="shell mb-24 grid grid-cols-[150px_1fr] gap-5 bg-cream p-10 max-sm:grid-cols-1"><span className="text-[9px] tracking-[.2em]">PRICE NOTE</span><p className="m-0 max-w-3xl text-sm text-muted">长毛、大型犬或严重打结可能需要额外时间。所有调整都会提前沟通确认，未经同意不会产生附加费用。</p></section>
  </>;
}
