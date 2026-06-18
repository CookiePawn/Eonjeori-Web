import Image from "next/image";
import Link from "next/link";

const featureCards = [
  {
    title: "구매력 계산",
    description:
      "연봉, 자산, 대출 가능 금액을 바탕으로 지금 접근 가능한 지역과 면적을 계산합니다.",
    image: "/images/eonjeori/purchasing-power.png",
    alt: "구매력과 구매 가능 면적을 보여주는 언저리 앱 화면",
  },
  {
    title: "지역별 비교",
    description:
      "같은 예산으로 어디에서 더 넓게 살 수 있는지 지역별 평수를 비교합니다.",
    image: "/images/eonjeori/compare.png",
    alt: "지역별 구매 가능 평수를 비교하는 언저리 앱 화면",
  },
  {
    title: "지도 탐색",
    description:
      "전국 지도를 통해 구매 가능 평수를 한눈에 확인하고 후보 지역을 좁혀갑니다.",
    image: "/images/eonjeori/map.png",
    alt: "전국 지도에서 구매 가능 평수를 표시하는 언저리 앱 화면",
  },
];

const stats = [
  ["구매력", "약 2,000만원"],
  ["최대 가능 지역", "영암군 5.1평"],
  ["비교 지역", "전국 시군구"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#16191d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#fbfaf7]/88 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="text-xl font-black tracking-tight">
            언저리
          </Link>
          <div className="flex items-center gap-5 text-sm font-semibold text-[#5b6572]">
            <a href="#features" className="transition hover:text-[#1f2d42]">
              기능
            </a>
            <a href="#screens" className="transition hover:text-[#1f2d42]">
              화면
            </a>
            <Link href="/privacy" className="transition hover:text-[#1f2d42]">
              정책
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100svh-24px)] max-w-6xl items-center gap-10 px-5 pb-12 pt-24 lg:grid-cols-[0.9fr_1.1fr] lg:pt-20">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex rounded-full border border-[#dfe5eb] bg-white px-4 py-2 text-sm font-bold text-[#40536c] shadow-sm">
            내 예산으로 가능한 집을 계산하는 앱
          </p>
          <h1 className="text-5xl font-black leading-[1.05] tracking-normal text-[#111318] sm:text-6xl lg:text-7xl">
            언저리
          </h1>
          <p className="mt-6 text-3xl font-black leading-tight text-[#1b2027] sm:text-4xl">
            내 집 마련, 몇 평까지 가능할까?
          </p>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#5d6470]">
            연봉, 자산, 대출 정보를 바탕으로 구매 가능한 지역과 평수를
            계산해드립니다. 막연한 예산을 실제 후보 지역과 면적으로 바꿔보세요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#features"
              className="rounded-md bg-[#33465f] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#33465f]/20 transition hover:bg-[#25364c]"
            >
              서비스 살펴보기
            </a>
            <a
              href="#screens"
              className="rounded-md border border-[#cfd8e3] bg-white px-5 py-3 text-sm font-bold text-[#26364b] transition hover:border-[#95a4b8]"
            >
              앱 화면 보기
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/eonjeori/hero.png"
            alt="언저리 앱 소개 그래픽"
            width={1024}
            height={500}
            priority
            className="h-auto w-full rounded-[8px] shadow-2xl shadow-[#5e6f84]/18"
          />
        </div>
      </section>

      <section className="border-y border-[#e8e3dc] bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-7 sm:grid-cols-3">
          {stats.map(([label, value]) => (
            <div key={label} className="py-2">
              <p className="text-sm font-bold text-[#6c7480]">{label}</p>
              <p className="mt-1 text-2xl font-black text-[#1b2430]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#536985]">
            What You Can Check
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#15191f] sm:text-5xl">
            평수만 보여주지 않고, 판단 기준까지 함께 보여줍니다.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="overflow-hidden rounded-[8px] border border-[#e3e8ee] bg-white shadow-sm"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#f5f3ef]">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={1242}
                  height={2688}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-[#15191f]">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-[#66707c]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="screens" className="bg-[#eef1f4] py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#536985]">
              Details
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#15191f] sm:text-5xl">
              실거래가, 계산 기준, 지도까지 한 흐름 안에서 확인하세요.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f6874]">
              언저리는 단순한 가능 금액을 넘어 왜 그 평수가 나왔는지,
              어떤 지역이 더 넓은 선택지를 주는지 투명하게 보여주는 것을
              목표로 합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/eonjeori/intro.png"
              alt="현재 모은 돈으로 가능한 평수를 안내하는 언저리 소개 화면"
              width={1242}
              height={2688}
              className="h-auto w-full rounded-[8px] border border-white/80 shadow-xl shadow-[#536985]/16"
            />
            <Image
              src="/images/eonjeori/detail.png"
              alt="구매 가능 면적과 실거래가 계산 기준을 보여주는 언저리 상세 화면"
              width={1242}
              height={2688}
              className="mt-10 h-auto w-full rounded-[8px] border border-white/80 shadow-xl shadow-[#536985]/16"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col justify-between gap-6 border-y border-[#dfe3e8] py-10 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-black text-[#15191f]">
              내 집 마련의 첫 기준점을 만들어보세요.
            </h2>
            <p className="mt-3 text-[#65707d]">
              예산을 입력하면 구매 가능한 지역과 평수를 직관적으로 확인할 수
              있습니다.
            </p>
          </div>
          <Link
            href="/terms"
            className="w-fit rounded-md bg-[#ff4f43] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#ff4f43]/20 transition hover:bg-[#e43f35]"
          >
            이용 안내 보기
          </Link>
        </div>
      </section>

      <footer className="bg-[#16191d] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-black">언저리</p>
          <div className="flex gap-5 text-sm text-white/70">
            <Link href="/privacy" className="hover:text-white">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-white">
              이용약관
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
