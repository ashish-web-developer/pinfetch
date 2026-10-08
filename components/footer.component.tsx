import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-gray-400 sm:flex-row">
        <p>© 2026 PinFetch</p>

        <div className="flex gap-5">
          <Link
            href="/privacy"
            className="transition-colors hover:text-[#E60023]"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="transition-colors hover:text-[#E60023]"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;