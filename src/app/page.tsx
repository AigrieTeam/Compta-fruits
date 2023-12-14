import { LoginButton } from "@/components/auth/login-button";
import { LogOutButton } from "@/components/auth/logout-button";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getAuthSession();

  const links = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Dashboard", href: "dashboard" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <span>Comtpa Fruits</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              className="text-sm font-medium underline-offset-4 hover:underline"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
          {session ? <LogOutButton /> : <LoginButton />}
        </nav>
      </header>
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-72">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Compta Fruits
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </p>
                <pre>{JSON.stringify(session, null, 2)}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
