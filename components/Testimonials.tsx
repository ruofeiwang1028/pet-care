"use client";

import { useCallback, useEffect, useState } from "react";

const reviews = [
  { name: "豆包妈妈", pet: "比熊 · 豆包", service: "造型精修", date: "2026.07", text: "第一次遇到豆包全程没有发抖的洗护店。美容师会先蹲下来陪它熟悉环境，结束后还很耐心地告诉我耳朵和皮肤的情况，造型也特别自然。" },
  { name: "七喜爸爸", pet: "金毛 · 七喜", service: "皮毛深度护理", date: "2026.06", text: "七喜毛量大，以前洗完回家总能发现没吹透的地方。这次从接待到吹毛都很细致，回家一周还是蓬松柔软，护理过程也会及时发照片。" },
  { name: "麻薯妈妈", pet: "英短 · 麻薯", service: "基础净护浴", date: "2026.06", text: "麻薯很怕吹风，店里没有强行控制，而是放慢速度让它慢慢适应。能感受到他们真的把猫咪的情绪放在第一位，接回家后状态也很放松。" },
  { name: "小满妈妈", pet: "柯基 · 小满", service: "基础净护浴", date: "2026.05", text: "沟通很透明，开始前先确认皮毛状态和费用，没有临时加项目。脚底、指甲和耳朵都处理得很干净，淡淡的香味也不会刺鼻。" },
  { name: "奥利奥爸爸", pet: "雪纳瑞 · 奥利奥", service: "造型精修", date: "2026.05", text: "把我想要的感觉和日常打理难度都考虑到了。胡子和眉毛修得精神又不夸张，两个多星期后轮廓依然很好看，已经预约了下次。" },
  { name: "糯米妈妈", pet: "博美 · 糯米", service: "皮毛深度护理", date: "2026.04", text: "糯米换毛期打结很严重，美容师没有着急硬梳，而是分区慢慢处理。结束后把在家梳毛的方法也教给了我，专业又温柔。" },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const goTo = useCallback((index: number) => setCurrent((index + reviews.length) % reviews.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setCurrent(value => (value + 1) % reviews.length), 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="overflow-hidden bg-cream py-28 max-sm:py-20" aria-labelledby="reviews-title">
      <div className="shell">
        <div className="mb-14 flex items-end justify-between gap-8 max-md:items-start max-sm:flex-col">
          <div>
            <span className="eyebrow">KIND WORDS</span>
            <h2 id="reviews-title" className="mt-4 font-serif text-[clamp(42px,5vw,68px)] font-normal leading-tight">它们的安心，<br />主人都看得见。</h2>
          </div>
          <div className="flex items-center gap-3" aria-label="评价轮播控制">
            <button type="button" onClick={() => goTo(current - 1)} className="grid size-12 place-items-center rounded-full border border-ink/25 transition hover:bg-forest hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest" aria-label="上一条评价">←</button>
            <span className="min-w-16 text-center font-serif text-sm"><strong className="text-xl font-normal">{String(current + 1).padStart(2, "0")}</strong> / {String(reviews.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => goTo(current + 1)} className="grid size-12 place-items-center rounded-full border border-ink/25 transition hover:bg-forest hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest" aria-label="下一条评价">→</button>
          </div>
        </div>

        <div className="overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} aria-live="polite">
          <div className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none" style={{ transform: `translateX(-${current * 100}%)` }}>
            {reviews.map((review, index) => (
              <article key={review.name} className="grid min-w-full grid-cols-[160px_1fr] gap-14 border-y border-ink/15 py-14 max-sm:grid-cols-1 max-sm:gap-7 max-sm:py-10" aria-hidden={index !== current}>
                <div>
                  <div className="mb-5 grid size-14 place-items-center rounded-full bg-forest font-serif text-xl text-white" aria-hidden="true">{review.pet.slice(0, 1)}</div>
                  <p className="text-sm font-bold">{review.name}</p>
                  <p className="mt-1 text-xs text-muted">{review.pet}</p>
                </div>
                <div className="relative max-w-4xl">
                  <span className="absolute -left-2 -top-8 font-serif text-7xl leading-none text-ink/10" aria-hidden="true">“</span>
                  <div className="mb-7 text-sm tracking-[.16em] text-[#b06c45]" aria-label="5 星评价">★★★★★</div>
                  <blockquote className="font-serif text-[clamp(25px,3vw,38px)] leading-[1.55] tracking-[-.02em]">{review.text}</blockquote>
                  <div className="mt-8 flex gap-4 text-[11px] tracking-wider text-muted"><span>{review.service}</span><span aria-hidden="true">·</span><time>{review.date}</time></div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2" aria-label="选择评价">
          {reviews.map((review, index) => <button type="button" key={review.name} onClick={() => goTo(index)} className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-forest" : "w-1.5 bg-ink/20 hover:bg-ink/45"}`} aria-label={`查看第 ${index + 1} 条评价`} aria-current={index === current ? "true" : undefined} />)}
        </div>
      </div>
    </section>
  );
}
