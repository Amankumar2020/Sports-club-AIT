import {useState} from 'react'
import TeamCard from '@/components/TeamCard';
import Image from 'next/image';
import CoreTeam from '@/components/team/CoreTeam';
import EventHeads from '@/components/team/EventHeads';



function Team() {
  const [isCoreTeam, setIsCoreTeam] = useState(true);
  return (
    <div className="relative my-4 flex w-screen flex-col items-center">
      <div className="flex w-full max-w-screen-xl flex-col items-center justify-between px-5 md:flex-row lg:flex-row">
        {/* Text */}
        <div className="w-full text-center md:w-1/2 md:text-start lg:w-1/2 lg:text-start">
          <div className="text-5xl font-medium">Meet the sports club Crew</div>
          <div className="my-10 text-lg text-gray-600">
            More than a community we all are a family, this bond will last
            forever and we will always be there for you whenever you will need
            our help.
          </div>
        </div>
        {/* Image */}
        <div className="animate-[slide-down-fade_0.9s_ease-in-out]">
          <Image
            className=""
            src="/teampage.png"
            width={400}
            height={400}
            alt="Team"
          />
        </div>
      </div>

      <div>
        <ul className="flex w-full border-b border-gray-100 text-lg">
          <li className="cursor-pointer">
            <div
              onClick={() => setIsCoreTeam(true)}
              className="relative block p-4"
            >
              <span
                className={`absolute inset-x-0 -bottom-px h-px w-full ${
                  isCoreTeam && "bg-pink-600"
                }`}
              />
              <div className="flex items-center justify-center gap-4">
                <Image src="/group1.png" height={25} width={25} alt="icon" />
                <span className="text-lg font-medium text-gray-900">
                  {" "}
                  Core Team{" "}
                </span>
              </div>
            </div>
          </li>
          <li className="cursor-pointer">
            <div
              onClick={() => setIsCoreTeam(false)}
              className="relative block p-4"
            >
              <span
                className={`
                absolute inset-x-0 -bottom-px h-px w-full  ${
                  !isCoreTeam && "bg-pink-600"
                }`}
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
                  Event Heads{" "}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {isCoreTeam ? <CoreTeam /> : <EventHeads />}
    </div>
  );
}

export default Team