import Image from "next/image";
import PlanetImg from "@/public/images/Frame 26.svg";
import icon1 from "@/public/images/Cpu.png";
import icon2 from "@/public/images/FirstAid.png";
import icon3 from "@/public/images/Command.png";
import icon4 from "@/public/images/Plant.png";
import icon5 from "@/public/images/Stack.png";
import icon6 from "@/public/images/LightbulbFilament.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl capitalize">
            Build a robust R&D Claim and <br className="max-lg:hidden" />
            get back 43.5% of your R&D expenditure
            </h2>
          </div>

              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center pb-10"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Speak with an R&D Tax Specialist{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  
                </div>
              </div>


          {/* Planet */}
          <div className="mx-auto max-w-3xl mb-20" data-aos="zoom-y-out" data-aos-delay={600}>
              <Image src={PlanetImg} alt="Planet Image" layout="responsive" width={1920} height={1080} />
            </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image src={icon1} alt="AI, Software & Tech" width={24} height={24}/>
                <span>AI, Software & Tech</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Developing cutting-edge algorithms or innovative software solutions? Your tech breakthroughs could qualify for substantial R&D tax benefits.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image src={icon2} alt="Healthcare & Biotech" width={24} height={24}/>
                <span>Healthcare &amp; Biotech</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Pioneering new treatments or medical devices? Turn your groundbreaking research into valuable tax incentives.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <Image src={icon3} alt="Sustainables & Renewables" width={24} height={24}/>
              <span>Sustainbles &amp; Renewables</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Innovating in green tech or renewable energy? Your eco-friendly R&D efforts could lead to significant tax savings.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image src={icon4} alt="Agriculturee & Food Science" width={24} height={24}/>
                <span>Agriculture &amp; Food Science</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Advancing crop science or food technology? Harvest tax benefits while you revolutionize agriculture.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image src={icon5} alt="Manufacturing & Engineering" width={24} height={24}/>
                <span>Manufacturing &amp; Engineering</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Optimising production processes or creating new materials? Your engineering innovations may be eligible for R&D tax credits.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image src={icon6} alt="Innovative Products & Services" width={24} height={24}/>
                <span>Innovative Products &amp; Services</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Industry not listed but you’re innovating? Let’s build you a tailored claim for your project.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
