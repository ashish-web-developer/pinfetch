import Image from "next/image";
import Link from "next/link";

// constant
import { SITE_NAME, SITE_TITLE } from "@/constants/site.constant";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label={SITE_TITLE} className="flex items-center">
          <Image
            src="/logo.png"
            alt={SITE_NAME}
            width={64}
            height={64}
            priority
            className="size-12 object-contain sm:size-14"
          />
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-1">
          <Link
            href="#how-it-works"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-red-50 hover:text-[#E60023] focus:ring-2 focus:ring-red-200 focus:outline-none"
          >
            How it works
          </Link>

          <Link
            href="#faq"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-red-50 hover:text-[#E60023] focus:ring-2 focus:ring-red-200 focus:outline-none"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
