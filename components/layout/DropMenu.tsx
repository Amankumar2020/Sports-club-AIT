import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  ImageIcon,
  HamburgerMenuIcon,
  HomeIcon,
  PersonIcon,
  Pencil1Icon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { Fragment, useState } from "react";
import Link from "next/link";

function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="">
        <Menu as="div" className="relative z-10 inline-block text-left ">
          <div>
            <Menu.Button className=" ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:ring-1">
              <motion.button
                className="flex h-8 w-8 items-center justify-center p-2"
                whileTap={{
                  scale: 0.5,
                }}
                transition={{ duration: 0.1, ease: "easeIn" }}
                aria-label="Toggle List Menu"
                type="button"
              >
                {isOpen ? (
                  <HamburgerMenuIcon className="h-4 w-4" />
                ) : (
                  <HamburgerMenuIcon className="h-4 w-4" />
                )}
              </motion.button>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            afterEnter={() => {
              toggleIcon();
            }}
            afterLeave={() => {
              toggleIcon();
            }}
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg  focus:outline-none ">
              <Menu.Item>
                <Link href="/">
                  <div className="block bg-white px-4 py-2 text-sm text-zinc-700">
                    <div className="flex flex-row">
                      <HomeIcon className="mr-4 mt-0.5" /> Home
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/gallery">
                  <div className="block bg-white px-4 py-2 text-sm text-zinc-700">
                    <div className="flex flex-row">
                      <ImageIcon className="mr-4 mt-0.5" /> Gallery
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/team">
                  <div className="block bg-white px-4 py-2 text-sm text-zinc-700">
                    <div className="flex flex-row">
                      <PersonIcon className="mr-4 mt-0.5" /> Our Team
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/contact">
                  <div className="block bg-white px-4 py-2 text-sm text-zinc-700">
                    <div className="flex flex-row">
                      <EnvelopeClosedIcon className="mr-4 mt-0.5" /> Contacts
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/pace/events">
                  <div className="block bg-white px-4 py-2 text-sm text-zinc-700">
                    <div className="flex flex-row">
                      <Pencil1Icon className="mr-4 mt-0.5" /> Pace Registration
                    </div>
                  </div>
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}

export default DropMenu;
