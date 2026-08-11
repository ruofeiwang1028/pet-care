import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "预约到店", description: "填写爪爪日记宠物洗护预约意向。" };
export default function AppointmentPage() {
  return <><PageIntro eyebrow="MAKE AN APPOINTMENT" title="为它，留一段舒服的护理时间。" description="填写预约意向后，我们会进一步了解宠物的年龄、体型、健康与皮毛状况，再确认适合的服务和时间。" />
    <section className="shell flex flex-col gap-16 py-24 max-md:gap-12"><aside><span className="eyebrow">VISIT US</span><h2 className="my-5 font-serif text-4xl font-normal">到店信息</h2><dl className="my-12 grid grid-cols-3 border-t border-ink/15 max-md:grid-cols-1"><Info term="营业时间">10:00–20:00<br />周一店休</Info><Info term="门店地址">城市广场<br />宠物友好街 18 号</Info><Info term="每日接待">限量 12 位<br />建议提前预约</Info></dl><p className="max-w-2xl text-xs text-muted">首次到店享洗护 9 折。若宠物有皮肤问题、疾病史或明显应激，请在到店前主动告知。</p></aside><BookingForm /></section>
  </>;
}
function Info({ term, children }: { term: string; children: React.ReactNode }) { return <div className="border-b border-r border-ink/15 px-6 py-7 first:border-l max-md:grid max-md:grid-cols-[100px_1fr] max-md:border-l max-md:px-0"><dt className="mb-4 text-[10px] tracking-wider text-muted max-md:mb-0">{term}</dt><dd className="m-0 font-serif text-lg">{children}</dd></div>; }
