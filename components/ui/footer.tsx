import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 pb-4 pt-8 md:pt-10 md:pb-6 border-b border-gray-600">
          {/* 1st block (Logo) */}
          <div className="flex justify-center md:justify-start md:flex-none mb-4 md:mb-0">
            <Logo />
          </div>

          {/* Centered Links */}
          <div className="flex flex-wrap gap-4 md:gap-10 justify-center flex-1">
            <div>
              <h3 className="text-sm font-medium">Get Started</h3>
            </div>
            <div>
              <h3 className="text-sm font-medium">FAQs</h3>
            </div>
            <div>
              <h3 className="text-sm font-medium">Are you eligible</h3>
            </div>
            <div>
              <h3 className="text-sm font-medium">Industries</h3>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <Link
              href="/signup"
              className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
            >
              Speak with an R&D Tax Specialist <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">-&gt;</span>
            </Link>
          </div>
        </div>

        {/* Bottom area: Blocks */}
        <div className="flex flex-wrap justify-center border-t-2 border-gray-600 pt-6 pb-6">
          <div className="flex items-center">
            <h3 className="text-sm font-medium text-[#888b93]">© RD Grants - All rights reserved.</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
