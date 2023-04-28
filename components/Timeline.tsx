import React from 'react'
import Image from 'next/image';

function Timeline() {
  return (
    <>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24">
          <div className='text-center font-medium text-4xl w-full mb-8 text-gray-800'>
            <h1>Timeline for Pace 2023</h1>
          </div>
          <div className="flex w-full flex-wrap">
            <div className="md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200" />
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
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
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                    />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    Registration Starts
                  </h2>
                  <p className="leading-relaxed">
                    Registration for PACE 2023 starts from 25th March 2023.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200" />
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
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
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    Registration Closes
                  </h2>
                  <p className="leading-relaxed">
                    Registration for PACE 2023 closes on 20th April 2023.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200" />
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={5} r={3} />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    Ceremony
                  </h2>
                  <p className="leading-relaxed">
                    Ceremony for PACE 2023 will be held on 20th April 2023.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200" />
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    Day 1
                  </h2>
                  <p className="leading-relaxed">First day 20 April 2023.</p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    Day 2
                  </h2>
                  <p className="leading-relaxed">Second day 21 April 2023.</p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200" />
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    Day 3
                  </h2>
                  <p className="leading-relaxed">Third day 22 April 2023.</p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200" />
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    Day 4
                  </h2>
                  <p className="leading-relaxed">
                    Fourth and Final day 23rd April 2023.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200" />
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    Closing ceremony
                  </h2>
                  <p className="leading-relaxed">
                    Closing ceremony will be held on 23 April 2023.
                  </p>
                </div>
              </div>
            </div>

            <img
              className="mt-12 rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-3/5"
              src="/pace/pace-football.png"
              alt="step"
            />
            {/* <Image
              className="mt-12 rounded-lg object-cover object-center md:mt-0 md:mt-0 md:w-1/2 lg:w-3/5"
              src="/sportslogo.png"
              alt="Precedent logo"
              width={50}
              height={50}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline