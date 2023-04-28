import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Twitter } from "@/components/shared/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <motion.div
        className="my-10 max-w-7xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href=""
          target="_blank"
          rel="noreferrer"
          className="invisible mx-auto mb-5  flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">Sports Club</p>
        </motion.a>
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Army Institute of Technology <br /> Sports club
          </Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Join the Sports Club of AIT and discover your passion for sports!
            From basketball to tennis, we offer a range of opportunities for
            students to stay active and connect with like-minded individuals.
            Whether you are a seasoned athlete or just looking to have some fun,
            our club is the perfect place for you. Come be a part of our
            community that promotes fitness, teamwork, and sportsmanship!
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Link
            href="pace/events"
            className="group flex max-w-fit cursor-pointer items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Pace Registration</p>
          </Link>
          <Link
            href="/timeline"
            className="flex max-w-fit cursor-pointer items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          >
            <Image src="/events1.png" height={25} width={25} alt="events" />
            <p>Check Events</p>
          </Link>
        </motion.div>
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large, link }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
            link={link}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Pace Registrations Now Open",
    description:
      "Register for pune's biggest sports event. The registrations are now open for the 2023 edition of PACE.",
    large: true,
    demo: (
      <div>
        <Image
          alt="pace-registration"
          src="/paceregister.png"
          width={200}
          height={200}
        />
      </div>
    ),
    link: "/pace/events",
  },
  {
    title: "Contact Us",
    description:
      "We take our commitment to students seriously. We are always here, If you have any query feel free to mail us anytime.",
    demo: (
      <div>
        <Image alt="contact" src="/contact.png" width={200} height={200} />
      </div>
    ),
    link: "/contact",
  },
  {
    title: "Events",
    description:
      "Every year sports club organizes events for introducing students to the world of sports.",
    demo: (
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image alt="contact" src="/events.png" width={200} height={200} />
      </div>
    ),
    link: "/pace/events",
  },
  {
    title: "Our Team",
    description:
      "We are a group of students who are passionate about sports and want to make sports a part of every student's life.",
    demo: (
      <div>
        <Image alt="contact" src="/team.png" width={200} height={200} />
      </div>
    ),
    link: "/team",
  },
  {
    title: "Gallery",
    description:
      "We have a nice collection of photos of our events and sports activities.",
    demo: (
      <div>
        <Image alt="contact" src="/gallery.png" width={200} height={200} />
      </div>
    ),
    link: "/gallery",
  },
];
