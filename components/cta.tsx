import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%]"
          data-aos="zoom-y-out"
        >
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-2 text-3xl font-bold text-white md:mb-6 md:text-4xl">
              Learn how to get 43.5% back on your
              <br className="max-lg:hidden" />
              R&D & reinvest in growth
            </h2>
            <p className="mb-8 font-inter text-lg text-white">
              Reinvest in growth with the 43.5% rebate. <br className="max-lg:hidden" />
              Let's chat about your project, eligibility and provide a preliminary benefit size.
            </p>

            <div className="flex justify-center mb-4">
              <form className="w-full max-w-md">
                <div className="mb-4">
                  <input
                    className=" appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                    style={{ height: '48px' , borderRadius: '10px' }}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className=" appearance-none outline-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="comapanyemail"
                    type="email"
                    placeholder="Company email"
                    style={{ height: '48px' , borderRadius: '10px' }}
                  />
                </div>
                <div>
                  <input
                    className=" appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contact"
                    type="number"
                    placeholder="Contact number"
                    style={{ height: '48px' , borderRadius: '10px' }}
                  />
                </div>
                
              </form>
            </div>

            <div className="w-full max-w-md mx-auto">
            <a
                className="btn group mb-4 w-full font-inter bg-[#1f2937] text-white shadow hover:bg-[#1f2937] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                href="#0"
                style={{ height: '46px', borderRadius: '8px'}}
              >
                <span className="relative inline-flex items-center">
                  Speak with an R&D Tax Specialist{" "}
                  <span className="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
