import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="bg-white shadow-sm dark:bg-black">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="block p-2">
            <Image
              src="/logo.svg"
              width={130}
              height={130}
              alt="Logo"
              className="object-cover"
            />
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="https://app.digimoda.xyz"
                className="text-balck hover:text-pink-700 dark:text-white"
              >
                App
              </Link>
            </li>
            <li>
              <Link
                href="https://digimoda.site"
                className="text-black hover:text-pink-700 dark:text-white"
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                href="https://gallery.digimoda.site"
                className="text-black hover:text-pink-700 dark:text-white"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black hover:text-pink-700 dark:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#SubscriptionForm"
                className="text-black hover:text-pink-700 dark:text-white"
              >
                Subscribe
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
