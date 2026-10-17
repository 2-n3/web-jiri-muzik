import { useState } from 'react';
import { Zap, Phone, Mail, Home, Cable, ClipboardCheck, LayoutGrid, Wrench, ShieldCheck, MessageSquare, Clock, Handshake, Image as ImageIcon, MapPin, BookOpen, GraduationCap } from 'lucide-react';

const TEL = '[Telefon]', TEL_HREF = 'tel:+420000000000', MAIL = '[E-mail]', MAIL_HREF = 'mailto:info@example.cz';

const sluzby = [
  { i: Home, t: 'Elektroinstalace novostaveb a rekonstrukcí', d: 'Kompletní elektroinstalace od návrhu rozvodů přes montáž až po zapojení koncových prvků.' },
  { i: Cable, t: 'Silnoproud', d: 'Silnoproudé rozvody pro byty, rodinné domy i menší provozovny.' },
  { i: ClipboardCheck, t: 'Práce připravené na revizi', d: 'Instalaci provádím tak, aby byla připravená k revizi a předání.' },
  { i: LayoutGrid, t: 'Rozvaděče', d: 'Montáž, zapojení a úpravy rozvaděčů, výměna starých jističů.' },
  { i: Wrench, t: 'Opravy a poruchy', d: 'Hledání a odstranění poruch, výměny zásuvek, vypínačů a svítidel.' },
];
const proc = [
  { i: Zap, t: '20+ let praxe', d: 'Přes dvacet let v oboru. Viděl jsem toho hodně a vím, co funguje.' },
  { i: ShieldCheck, t: 'Pečlivá práce', d: 'Důraz na bezpečnost a čisté provedení.' },
  { i: MessageSquare, t: 'Jasná domluva', d: 'Předem víte, co se bude dělat a za kolik.' },
  { i: Clock, t: 'Spolehlivost', d: 'Dohodnuté termíny dodržuji.' },
  { i: Handshake, t: 'Osobní přístup', d: 'Jednáte přímo se mnou, žádní prostředníci.' },
];
const kroky = ['Zavoláte nebo napíšete', 'Prohlídka a domluva rozsahu', 'Cenová nabídka', 'Realizace', 'Předání hotové práce'];

const Btn = ({ href, children, alt }: { href: string; children: React.ReactNode; alt?: boolean }) => (
  <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition ${alt ? 'border border-white/30 text-white hover:bg-white/10' : 'bg-volt text-ink hover:bg-yellow-300'}`}>{children}</a>
);
const H2 = ({ k, t }: { k: string; t: string }) => (<div className="mb-10"><p className="text-sm font-bold uppercase tracking-widest text-yellow-600">{k}</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">{t}</h2></div>);

export default function App() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-10 bg-ink/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-2 font-bold"><Zap className="h-6 w-6 fill-volt text-volt" />Jiří Mužík <span className="hidden text-white/60 sm:inline">| Elektrikář</span></a>
          <nav className="hidden gap-6 text-sm md:flex">{[['sluzby','Služby'],['proc','Proč já'],['postup','Jak to probíhá'],['oblast','Kde působím'],['rady','Rady'],['reference','Reference'],['kontakt','Kontakt']].map(([h,l])=><a key={h} href={`#${h}`} className="hover:text-volt">{l}</a>)}</nav>
          <a href={TEL_HREF} className="flex items-center gap-2 rounded-md bg-volt px-3 py-2 text-sm font-semibold text-ink"><Phone className="h-4 w-4" /><span className="hidden sm:inline">{TEL}</span><span className="sm:hidden">Volat</span></a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(135deg,#FACC15 0 2px,transparent 2px 28px)' }} />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-32">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-volt/40 px-3 py-1 text-sm text-volt"><MapPin className="h-4 w-4" />Trutnovsko a okolí</p>
          <p className="mb-4 ml-2 inline-flex items-center gap-2 rounded-full bg-volt px-3 py-1 text-sm font-bold text-ink"><Zap className="h-4 w-4" />20+ let praxe</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Vaše elektrika v rukou <span className="text-volt">zkušeného řemeslníka</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">Kompletní elektroinstalace, silnoproud, rozvaděče i opravy poruch. Elektřině se věnuji přes 20 let a dělám ji pořádně.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Btn href={TEL_HREF}><Phone className="h-5 w-5" />Zavolat {TEL}</Btn><Btn href="#kontakt" alt>Napsat poptávku</Btn></div>
        </div>
      </section>

      <section id="sluzby" className="mx-auto max-w-6xl px-5 py-20">
        <H2 k="Služby" t="Co pro vás udělám" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{sluzby.map(({ i: I, t, d }) => (
          <div key={t} className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:border-volt hover:shadow-md"><div className="mb-4 inline-flex rounded-lg bg-volt/20 p-3"><I className="h-6 w-6 text-ink" /></div><h3 className="text-lg font-bold">{t}</h3><p className="mt-2 text-gray-600">{d}</p></div>))}</div>
      </section>

      <section id="proc" className="bg-gray-50 py-20"><div className="mx-auto max-w-6xl px-5">
        <H2 k="Proč já" t="Proč si vybrat mě" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">{proc.map(({ i: I, t, d }) => (<div key={t}><I className="h-8 w-8 text-yellow-500" /><h3 className="mt-3 font-bold">{t}</h3><p className="mt-1 text-gray-600">{d}</p></div>))}</div>
        <p className="mt-8 text-sm text-gray-500">[Doplnit: pár vět o sobě, zaměření, oprávnění – jen skutečné údaje]</p>
      </div></section>

      <section id="postup" className="mx-auto max-w-6xl px-5 py-20">
        <H2 k="Postup" t="Jak to probíhá" />
        <ol className="grid gap-4 md:grid-cols-5">{kroky.map((k, n) => (<li key={k} className="rounded-xl bg-ink p-5 text-white"><span className="text-3xl font-extrabold text-volt">{n + 1}</span><p className="mt-2 font-semibold">{k}</p></li>))}</ol>
      </section>

      <section id="oblast" className="mx-auto max-w-6xl px-5 py-20">
        <H2 k="Kde působím" t="Oblast, kde pracuji" />
        <div className="flex flex-wrap gap-3">{['Trutnov','Dvůr Králové nad Labem','Vrchlabí','Úpice','Hostinné','Svoboda nad Úpou','a okolí'].map(m=>(<span key={m} className="inline-flex items-center gap-2 rounded-full bg-volt/20 px-4 py-2 font-medium"><MapPin className="h-4 w-4" />{m}</span>))}</div>
        <p className="mt-6 max-w-2xl text-gray-600">Jsem doma na Trutnovsku. Po dohodě rád dojedu i dál v Královéhradeckém kraji, stačí zavolat.</p>
      </section>

      <section id="rady" className="bg-gray-50 py-20"><div className="mx-auto max-w-6xl px-5">
        <H2 k="Zkušenosti a rady" t="Co jsem se za ta léta naučil" />
        <div className="grid gap-5 md:grid-cols-3">{[
          ['Kdy je čas na novou elektroinstalaci','Podle čeho poznáte, že stará instalace v domě už nestačí. [Doplnit článek]'],
          ['Na co myslet při rekonstrukci','Kolik zásuvek, kam s rozvaděčem a proč se to řeší dřív než obklady. [Doplnit článek]'],
          ['Vyhazuje vám jistič?','Co si můžete bezpečně zkontrolovat sami a kdy už volat elektrikáře. [Doplnit článek]'],
        ].map(([t,d])=>(<article key={t} className="rounded-xl border border-gray-200 bg-white p-6"><BookOpen className="h-6 w-6 text-yellow-500" /><h3 className="mt-3 text-lg font-bold">{t}</h3><p className="mt-2 text-gray-600">{d}</p><span className="mt-4 inline-block text-sm font-semibold text-yellow-700">Číst více (připravujeme)</span></article>))}</div>
        <div className="mt-8 flex items-start gap-4 rounded-xl bg-ink p-6 text-white"><GraduationCap className="h-8 w-8 shrink-0 text-volt" /><div><h3 className="font-bold">Začínáte v oboru?</h3><p className="mt-1 text-white/70">Rád předám, co umím. Pokud se chcete řemeslu naučit pořádně, ozvěte se. Domluvíme se na zaučení nebo radě. [Upřesnit formu]</p></div></div>
      </div></section>

      <section id="reference" className="py-20"><div className="mx-auto max-w-6xl px-5">
        <H2 k="Reference" t="Ukázky práce" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">{Array.from({ length: 6 }).map((_, n) => (<div key={n} className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white text-gray-400"><ImageIcon className="h-8 w-8" /><span className="mt-2 text-sm">[Foto zakázky {n + 1}]</span></div>))}</div>
      </div></section>

      <section id="kontakt" className="bg-ink py-20 text-white"><div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
        <div><p className="text-sm font-bold uppercase tracking-widest text-volt">Kontakt</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">Domluvme se</h2><p className="mt-4 text-white/70">Nejrychleji mě zastihnete po telefonu.</p>
          <div className="mt-8 space-y-4"><a href={TEL_HREF} className="flex items-center gap-3 text-xl font-semibold hover:text-volt"><Phone className="text-volt" />{TEL}</a><a href={MAIL_HREF} className="flex items-center gap-3 text-xl font-semibold hover:text-volt"><Mail className="text-volt" />{MAIL}</a><p className="flex items-center gap-3 text-white/70"><MapPin className="text-volt" />Trutnovsko a okolí</p></div></div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-xl bg-white p-6 text-ink">
          {/* TODO: formulář zatím nikam neodesílá – napojit (např. Formspree / e-mail) */}
          <input required placeholder="Jméno" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
          <input required placeholder="Telefon nebo e-mail" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
          <textarea required rows={4} placeholder="Co potřebujete udělat?" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
          <button className="w-full rounded-lg bg-volt py-3 font-semibold hover:bg-yellow-300">Odeslat poptávku</button>
          <p className="text-xs text-gray-500">{sent ? 'Děkuji! (Ukázka – formulář zatím není napojený.)' : 'Formulář zatím není napojený – zatím prosím volejte nebo pište e-mail.'}</p>
        </form>
      </div></section>

      <footer className="border-t border-white/10 bg-black py-8 text-sm text-white/60"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 md:flex-row">
        <span className="flex items-center gap-2"><Zap className="h-4 w-4 fill-volt text-volt" />Jiří Mužík – elektrikář, Trutnov</span><span>IČO: [IČO]</span><span>© {new Date().getFullYear()} Jiří Mužík</span></div></footer>
    </div>
  );
}
