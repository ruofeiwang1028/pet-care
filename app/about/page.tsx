import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { standards } from "@/data/site";

export const metadata: Metadata = { title: "关于我们", description: "了解爪爪日记对温柔、专业和透明洗护的坚持。" };
export default function AboutPage() {
  return <><PageIntro eyebrow="ABOUT PAW DIARY" title="我们相信，好的洗护从理解开始。" description="爪爪日记不是流水线式美容店。我们留出时间，让宠物先闻一闻、看一看，在熟悉的节奏里完成护理。" />
    <section className="shell grid grid-cols-[1.1fr_.9fr] items-center gap-24 py-28 max-md:grid-cols-1 max-md:gap-14"><div className="relative h-[650px] max-sm:h-[430px]"><Image className="object-cover" src="/images/store-reception.png" alt="爪爪日记温暖明亮的门店接待区" fill sizes="(max-width: 800px) 100vw, 52vw" priority /></div><div><span className="eyebrow">OUR STORY</span><h2 className="my-5 font-serif text-[clamp(42px,5vw,68px)] font-normal leading-tight">慢一点，<br />关系会更近一点。</h2><p className="text-sm text-muted">我们见过太多害怕吹风机、抗拒陌生触碰的毛孩子。它们不是“不乖”，只是需要更多时间建立安全感。</p><p className="text-sm text-muted">因此，我们把安静、观察与沟通写进每一次服务流程。尊重宠物的边界，也让家长清楚知道护理过程中发生的一切。</p></div></section>
    <section className="bg-cream py-28"><div className="shell"><span className="eyebrow">WHAT WE VALUE</span><h2 className="my-5 font-serif text-[clamp(42px,5vw,68px)] font-normal leading-tight">四件小事，<br />一直认真做。</h2><div className="mt-14 grid grid-cols-4 border-t border-ink/15 max-md:grid-cols-2 max-sm:grid-cols-1">{standards.map(i => <article className="border-b border-r border-ink/15 p-7 first:border-l" key={i.number}><span className="font-serif text-muted">{i.number}</span><h3 className="mb-3 mt-14 font-serif text-2xl font-normal">{i.title}</h3><p className="text-xs text-muted">{i.text}</p></article>)}</div></div></section>
    <section className="shell py-32 text-center"><blockquote className="m-0 font-serif text-[clamp(36px,5vw,64px)] leading-snug">“护理不只是把毛发洗干净，<br />更是一次信任的交付。”</blockquote><p className="mt-8 text-xs text-muted">— 爪爪日记护理团队</p></section>
  </>;
}
