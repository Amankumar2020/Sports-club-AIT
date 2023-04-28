import React,{useState} from 'react'
import Image from 'next/image';
import TeamEvents from '@/components/pace/TeamEvents';
import IndividualEvents from '@/components/pace/IndividualEvents';
import { useRouter } from "next/router";



function Events() {
  const [isTeamEvent, setIsTeamEvent] = useState(true)
    const router = useRouter();

  return (
    <>
      <div className="relative my-4 flex w-screen flex-col items-center">
        <div className="flex w-full max-w-screen-xl flex-col items-center justify-between px-5 md:flex-row lg:flex-row">
          {/* Text */}
          <div className="flex w-full flex-col items-center justify-center text-center md:w-1/2 md:text-start lg:w-1/2 lg:items-start lg:text-start">
            <div className="text-5xl font-medium">Pace events</div>
            <div className="my-10 text-lg text-gray-600">
              The annual sports fest of AIT PUNE is one of the largest of its
              kind in pune and an energy packed event. PACE has grown leaps and
              bounds over the years and has consistenly attracted participants
              from all over india. It has been living upto the expectations of
              thousands of participants who come here looking forward to best
              events of their kind.
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-y-4 lg:flex-row lg:justify-between">
              <button
                onClick={() =>
                  router.push(
                    "https://drive.google.com/file/d/1U6y9KB9Vb2e2Bx5rpMgYaW4kp76JJT60/view",
                  )
                }
                className="flex max-w-fit cursor-pointer items-center justify-between space-x-4 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
                Download Brochure
              </button>
              <button
                onClick={() =>
                  router.push(
                    "https://drive.google.com/file/d/1FQTzCMfXpxb6iIf4Gb2msJe08eAMRo6H/view",
                  )
                }
                className="flex max-w-fit cursor-pointer items-center justify-between space-x-4 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
                Download Rulebook
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="animate-[slide-down-fade_0.9s_ease-in-out]">
            <Image
              className=""
              src="/pace/events.png"
              width={400}
              height={400}
              alt="contact"
            />
          </div>
        </div>
        {/* Tabs */}
        <div>
          <ul className="flex w-full border-b border-gray-100 text-lg">
            <li onClick={() => setIsTeamEvent(true)} className="cursor-pointer">
              <div className="relative block p-4">
                <span
                  className={`absolute inset-x-0 -bottom-px h-px w-full ${
                    isTeamEvent && "bg-pink-600"
                  }`}
                />
                <div className="flex items-center justify-center gap-4">
                  <Image src="/group1.png" height={25} width={25} alt="icon" />
                  <span className="text-lg font-medium text-gray-900">
                    {" "}
                    Team Events{" "}
                  </span>
                </div>
              </div>
            </li>
            <li
              onClick={() => setIsTeamEvent(false)}
              className="cursor-pointer"
            >
              <div className="relative block p-4">
                <span
                  className={`${
                    !isTeamEvent && "bg-pink-600"
                  } absolute inset-x-0 -bottom-px h-px w-full`}
                />
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src="/individual.png"
                    height={25}
                    width={25}
                    alt="icon"
                  />
                  <span className="text-lg font-medium text-gray-900">
                    {" "}
                    Individual Events{" "}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Cards */}
        {isTeamEvent ? <TeamEvents /> : <IndividualEvents />}
      </div>
    </>
  );
}

export default Events
