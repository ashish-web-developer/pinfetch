import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <Image
            src="/logo.png"
            alt="PinFetch"
            width={100}
            height={100}
            className="size-12 sm:size-16 object-contain"
          />
        </Link>

        <nav className="items-center gap-1 flex">
          <Link
            href="#how-it-works"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-red-50 hover:text-[#E60023] focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            How it works
          </Link>

          <Link
            href="#faq"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-red-50 hover:text-[#E60023] focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
