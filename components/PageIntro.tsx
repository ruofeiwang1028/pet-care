export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="bg-cream py-28 max-sm:py-20"><div className="shell"><span className="eyebrow">{eyebrow}</span><h1 className="my-6 max-w-5xl font-serif text-[clamp(50px,7vw,94px)] font-normal leading-[1.08] tracking-[-.045em]">{title}</h1><p className="max-w-2xl text-base text-muted">{description}</p></div></section>;
}
