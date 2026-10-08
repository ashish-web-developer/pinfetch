import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#F7F7F5] px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        {/* Copyright */}
        <p className="text-gray-500">
          © 2026 <span className="font-medium text-gray-900">PinFetch</span>
        </p>

        {/* Links */}
        <nav className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-gray-500 transition-colors hover:text-[#E60023]"
          >
            Privacy
          </Link>

          <span className="h-1 w-1 rounded-full bg-gray-300" />

          <Link
            href="/terms"
            className="text-gray-500 transition-colors hover:text-[#E60023]"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;