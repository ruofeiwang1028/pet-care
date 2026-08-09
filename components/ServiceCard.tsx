import Link from "next/link";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return <article className="flex min-h-96 flex-col border-b border-r border-ink/15 p-7 transition-colors first:border-l hover:bg-cream max-md:min-h-72">
    <div className="flex justify-between text-[10px] tracking-wider text-muted"><span>{service.number}</span><span>{service.duration}</span></div>
    <h3 className="mb-4 mt-20 font-serif text-3xl font-normal max-md:mt-12">{service.name}</h3><p className="max-w-64 text-sm text-muted">{service.summary}</p>
    <div className="mt-auto flex items-end justify-between border-t border-ink/15 pt-5"><strong className="font-serif text-2xl font-normal">{service.price}</strong><Link className="text-xs font-bold" href="/appointment" aria-label={`预约${service.name}`}>预约 →</Link></div>
  </article>;
}
