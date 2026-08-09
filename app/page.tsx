import Image from "next/image";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { ServiceCard } from "@/components/ServiceCard";
import { services, standards } from "@/data/site";

export default function Home() {
  return <>
    <section className="bg-cream py-14 lg:pb-24"><div className="shell grid min-h-[620px] grid-cols-[.84fr_1.16fr] items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:py-10">
      <div><span className="eyebrow">我的宠物护理中心</span><h1 className="my-6 font-serif text-[clamp(50px,6.3vw,90px)] font-normal leading-[1.08] tracking-[-.045em]">被温柔对待，<br /><em className="font-normal text-muted">也很重要。</em></h1><p className="max-w-lg text-muted">不赶时间，不流水作业。我们用一宠一室的安静空间，照顾每一种性格与每一寸毛发。</p><div className="mt-9 flex items-center gap-7 max-sm:flex-col max-sm:items-start"><Link className="flex min-w-44 justify-between bg-forest px-5 py-4 text-white" href="/appointment">预约洗护 <span>→</span></Link><Link className="border-b border-current py-1 text-sm font-bold" href="/services">查看服务与价格 →</Link></div><div className="mt-16 flex gap-8 max-sm:grid max-sm:grid-cols-2"><Proof value="4.9" text="顾客真实评分" /><Proof value="3,200+" text="安心洗护记录" /><Proof value="100%" text="过程透明可见" /></div></div><Gallery />
    </div></section>
    <section className="py-28"><div className="shell"><div className="mb-16 flex items-end justify-between gap-12 max-md:block"><div><span className="eyebrow">OUR SERVICES</span><h2 className="mt-4 font-serif text-[clamp(42px,5vw,68px)] font-normal leading-tight">适合它的，<br />才是最好的。</h2></div><p className="max-w-sm text-sm text-muted max-md:mt-6">从皮毛状态到生活习惯，每一套方案都在服务开始前充分沟通，不做隐形加项。</p></div><div className="grid grid-cols-3 border-t border-ink/15 max-md:grid-cols-1">{services.map(s => <ServiceCard service={s} key={s.slug} />)}</div></div></section>
    <section className="bg-forest py-28 text-white"><div className="shell grid grid-cols-2 items-center gap-24 max-md:grid-cols-1 max-md:gap-14"><div className="relative h-[680px] max-sm:h-[430px]"><Image className="object-cover" src="/images/store-grooming.png" alt="美容师在明亮安静的护理区为宠物护理" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div><span className="eyebrow">OUR STANDARD</span><h2 className="my-5 font-serif text-[clamp(42px,5vw,68px)] font-normal leading-tight">干净是标准，<br />安全是底线，<br />美观是基础。</h2><p className="max-w-lg text-sage">先熟悉、再护理。美容师会观察毛孩子的情绪与身体状态，任何不适都会暂停。</p><div className="my-12">{standards.map(i => <div className="grid grid-cols-[45px_1fr] border-t border-white/20 py-4" key={i.number}><span className="font-serif text-sage">{i.number}</span><p className="m-0 text-xs text-sage"><strong className="mr-4 text-sm text-white">{i.title}</strong>{i.text}</p></div>)}</div><Link className="border-b border-current py-1 text-sm font-bold" href="/about">了解我们的坚持 →</Link></div></div></section>
    <section className="shell relative my-24 bg-forest p-20 text-white max-sm:my-0 max-sm:w-full max-sm:p-8 max-sm:py-16"><span className="eyebrow">MAKE AN APPOINTMENT</span><h2 className="my-5 font-serif text-[clamp(48px,6vw,78px)] font-normal leading-tight">留一段舒服的<br />洗澡时间。</h2><Link className="absolute bottom-20 right-20 flex min-w-44 justify-between bg-cream px-5 py-4 text-forest max-sm:static max-sm:mt-8" href="/appointment">预约到店 <span>→</span></Link></section>
  </>;
}

function Proof({ value, text }: { value: string; text: string }) { return <span className="text-[10px] tracking-wider text-muted"><strong className="block font-serif text-2xl font-normal text-ink">{value}</strong>{text}</span>; }
