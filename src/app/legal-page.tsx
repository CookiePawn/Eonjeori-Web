import Link from "next/link";

type LegalSection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#171a20]">
      <header className="border-b border-[#e5e0d8] bg-white">
        <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5">
          <Link href="/" className="text-xl font-black">
            언저리
          </Link>
          <Link
            href="/"
            className="rounded-md border border-[#d7dde5] px-4 py-2 text-sm font-bold text-[#33465f] transition hover:border-[#95a4b8]"
          >
            홈으로
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#536985]">
          Policy
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-sm font-bold text-[#536985]">
          시행일: 2026년 6월 18일
        </p>
        <p className="mt-5 text-lg font-semibold leading-8 text-[#606a76]">
          {intro}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black">{section.title}</h2>
              <p className="mt-3 leading-8 text-[#5f6874]">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
