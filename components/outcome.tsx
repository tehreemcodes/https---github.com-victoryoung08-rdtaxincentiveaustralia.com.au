import Image from "next/image";
import Link from "next/link";   
import outcomeImg from "@/public/images/Illustration.svg"; 
import iconCompany from "@/public/images/Buildings.png"; 
import iconSpend from "@/public/images/Wallet.png"; 
import iconRisk from "@/public/images/Circuitry.png"; 
import icon from "@/public/images/Icon.png";


export default function Eligibility() {
  return (
    <section className="relative bg-white">
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="h-80 w-80 rounded-full" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* New Section with 2 Equal Columns */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Text Column */}
            <div>
              <h3 className="text-4xl font-bold mb-4">Already claimed and want a better outcome?</h3>
              <p className="text-lg text-gray-700">
                Unhappy with your current R&D rebate?
              </p>
              <p className="mt-4 text-lg text-gray-700">
                We’re here to improve, streamline and take up less of your time.
                <br className="max-lg:hidden" />
                All while maximising your R&D tax benefit.
              </p>

                <ul className="mb-2 mt-8 list-none text-left text-[#111827] text-base">
                  <li className="flex items-left justify-left mb-4 font-medium">
                    <Image src={icon} width={24} height={24} alt="Icon" className="mr-2" />
                    Streamlined Documentation
                  </li>
                </ul>

                <p className="mt-4 text-l text-[#374151]">
                    All prepared and completed for a robust 100% compliant R&D Claim
                </p>

                <ul className="mb-2 mt-8 list-none text-left text-[#111827] text-base">
                  <li className="flex items-left justify-left mb-4 font-medium">
                    <Image src={icon} width={24} height={24} alt="Icon" className="mr-2" />
                    Fair Pricing & Service Fees
                  </li>
                </ul>

                <p className="mt-4 text-l text-[#374151]">
                If you have already lodged an R&D claim, it makes things a lot easier.
                <br className="max-lg:hidden" />

                Flexible pricing based on your needs.
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

            {/* Image Column */}
            <div className="flex justify-center">
              <Image src={outcomeImg} alt="Already claimed and want a better outcome" width={630} height={380} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
