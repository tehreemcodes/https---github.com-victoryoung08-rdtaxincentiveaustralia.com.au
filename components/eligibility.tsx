import Image from "next/image";
import Link from "next/link";   
import eligibilityImg from "@/public/images/Frame 68.svg"; 
import iconCompany from "@/public/images/Buildings.png"; 
import iconSpend from "@/public/images/Wallet.png"; 
import iconRisk from "@/public/images/Circuitry.png"; 

export default function Eligibility() {
  return (
    <section className="relative bg-white">
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="h-80 w-80 rounded-full" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Column 1: Section Header and Illustration (span 2 columns) */}
            <div className="lg:col-span-2">
              {/* Section header */}
              <div className="pb-12">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Are you eligible for the rebate?
                </h2>
                <p className="text-lg text-gray-700">
                  If you meet the criteria listed here, chances are you’re eligible to apply. 
                  However, many businesses go wrong with documentation and fail to <strong>prove</strong> their 
                  business is innovating and involves technical risk & experimentation.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  We’ll help you build a robust R&D claim with all the documentation you need.
                </p>
                <div className="mt-8">
                <Link
                href="/signup"
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                >
                Speak with an R&D Tax Specialist <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">-&gt;</span>
                </Link>
                </div>
              </div>

              {/* Illustration */}
              <div className="flex justify-left">
                <Image src={eligibilityImg} alt="Eligibility illustration" width={500} height={307} />
              </div>
            </div>

            {/* Column 2: Eligibility Criteria */}
            <div className="space-y-10 mt-24">
              <article className="flex items-start space-x-4">
                <Image src={iconCompany} width={32} height={32} alt="Company Icon" />
                <div>
                  <h3 className="text-l font-semibold">Australian Company</h3>
                  <p className="mt-2 text-gray-700">
                    Must be incorporated in Australia with a PTY LTD.
                  </p>
                </div>
              </article>
              <article className="flex items-start space-x-4">
                <Image src={iconSpend} width={32} height={32} alt="Spend Icon" />
                <div>
                  <h3 className="text-l font-semibold">Over $20K in R&D Spend</h3>
                  <p className="mt-2 text-gray-700">
                    Think wages, subscriptions, and all development costs in the past financial year.
                  </p>
                </div>
              </article>
              <article className="flex items-start space-x-4">
                <Image src={iconRisk} width={32} height={32} alt="Risk Icon" />
                <div>
                  <h3 className="text-l font-semibold">Technical Risk & Experimentation</h3>
                  <p className="mt-2 text-gray-700">
                    The most difficult - you must be able to establish a hypothesis with clear results. 
                    In essence, you’re exploring the new, the unknown, and gaps in your market.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
