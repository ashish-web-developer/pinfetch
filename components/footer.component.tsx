import Link from "next/link";

// constants
import { SITE_NAME } from "@/constants/site.constant";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#downloader", label: "Downloader" },
];

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#F7F7F5] px-4 pt-12 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Top */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md text-[15px] font-bold tracking-[-0.025em] text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
            >
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-[#E60023]"
              />
              {SITE_NAME}
            </Link>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              A simple way to save the Pinterest videos you find. No account
              needed.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm sm:flex-col sm:gap-x-0">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block rounded-md py-1 text-gray-500 transition-colors duration-200 hover:text-[#E60023] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-xs leading-5 text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>
            © {year}{" "}
            <span className="font-medium text-gray-600">{SITE_NAME}</span>. All
            rights reserved.
          </p>

          <p className="max-w-md sm:text-right">
            Not affiliated with or endorsed by Pinterest. Pinterest is a
            trademark of Pinterest, Inc. Please respect creators' rights.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
