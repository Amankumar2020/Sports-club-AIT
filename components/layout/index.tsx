import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import Footer from "./Footer";
import DropMenu from "./DropMenu";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-3 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/sportslogo.png"
              alt="Precedent logo"
              width={50}
              height={50}
              className="mr-2 rounded-sm grayscale"
            />
            <p>Sports club</p>
          </Link>

          <div>
            <AnimatePresence>
              {!session && status !== "loading" ? (
                <div className="flex space-x-2">
                  <div className="flex hidden space-x-2 md:block lg:block">
                    <motion.button className="rounded-full border p-1.5 px-4 text-sm transition-all hover:text-black">
                      <Link href="/">Home</Link>
                    </motion.button>
                    <motion.button
                      className="rounded-full border p-1.5 px-4 text-sm transition-all hover:text-black"
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      <Link href="/gallery">Gallery</Link>
                    </motion.button>
                    <motion.button
                      className="rounded-full border p-1.5 px-4 text-sm transition-all hover:text-black"
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      <Link href="/team">Our Team</Link>
                    </motion.button>
                    <motion.button
                      className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black hover:text-black"
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      <Link href="/contact">Contact Us</Link>
                    </motion.button>
                  </div>

                  <DropMenu />
                </div>
              ) : (
                <UserDropdown />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <main className="flex w-screen flex-col items-center justify-center py-28">
        {children}
      </main>
      <div className="relative w-full border-t border-gray-200 bg-white text-center">
        <Footer />
      </div>
    </>
  );
}
