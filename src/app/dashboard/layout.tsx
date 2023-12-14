import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";

import TeamSwitcher from "@/components/team-switcher";
import { Search } from "@/components/search";
import { UserNav } from "@/components/user-nav";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compta Fruits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher />
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
          {children}
        </div>
      <Footer />
      </body>
    </html>
  );
}
