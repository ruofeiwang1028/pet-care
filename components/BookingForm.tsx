"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/site";

type Errors = { name?: string; phone?: string };
const field = "border-0 border-b border-ink/35 bg-transparent py-3 outline-none focus:border-forest focus:ring-0 aria-[invalid=true]:border-red-700";

export function BookingForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (status !== "idle") return;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").replace(/\s/g, "");
    const next: Errors = {};
    if (!name) next.name = "请填写您的称呼";
    if (!phone) next.phone = "请填写联系电话"; else if (!/^1[3-9]\d{9}$/.test(phone)) next.phone = "请输入有效的 11 位手机号";
    setErrors(next); if (Object.keys(next).length) return;
    setStatus("submitting"); await new Promise(resolve => setTimeout(resolve, 700)); setStatus("success");
  }
  if (status === "success") return <div className="self-start bg-cream p-16 max-sm:p-8" role="status"><span className="text-[10px] tracking-[.18em]">预约意向已收到</span><h2 className="my-6 font-serif text-4xl font-normal">谢谢你的信任。</h2><p className="mb-8 text-sm text-muted">这是演示预约，我们没有保存你的资料。正式预约时，门店会通过电话确认宠物情况与具体时间。</p><button className="border-b border-current py-1 text-sm font-bold" onClick={() => setStatus("idle")}>再填写一份预约 →</button></div>;
  return <form className="grid grid-cols-2 gap-x-6 gap-y-7 bg-cream p-12 max-sm:grid-cols-1 max-sm:p-6" onSubmit={submit} noValidate>
    <label className="flex flex-col text-xs font-bold">您的称呼 <span className="text-red-700">*</span><input className={field} name="name" autoComplete="name" placeholder="怎么称呼您" aria-invalid={Boolean(errors.name)} />{errors.name && <small className="mt-1 text-red-700">{errors.name}</small>}</label>
    <label className="flex flex-col text-xs font-bold">联系电话 <span className="text-red-700">*</span><input className={field} name="phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="11 位手机号码" aria-invalid={Boolean(errors.phone)} />{errors.phone && <small className="mt-1 text-red-700">{errors.phone}</small>}</label>
    <label className="flex flex-col text-xs font-bold">宠物类型<select className={field} name="pet"><option>狗狗</option><option>猫咪</option><option>其他宠物</option></select></label>
    <label className="flex flex-col text-xs font-bold">预约项目<select className={field} name="service">{services.map(s => <option key={s.slug}>{s.name}</option>)}</select></label>
    <button className="col-span-full mt-5 flex items-center justify-between bg-forest px-5 py-4 text-white disabled:opacity-60 max-sm:col-auto" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "正在提交…" : "提交预约意向"}<span>→</span></button>
    <p className="col-span-full m-0 text-[9px] text-muted max-sm:col-auto">提交即表示您了解：这是前端演示表单，不会保存或发送任何资料。</p>
  </form>;
}
