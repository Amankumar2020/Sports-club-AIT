import {useState} from 'react'
import EventsCard from "@/components/EventCard";
import Image from 'next/image';


function IndividualEvents() {
    const [selectedEvent, setSelectedEvent] = useState()
  return (
    <>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <EventsCard
          title="Squash (individual)"
          registrationOpen={false}
          description="Open for Boys and Girls."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-cricket.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/squash-individual"
        />
        <EventsCard
          title="Lawn tennis (individual)"
          registrationOpen={true}
          description="Open for Boys and Girls."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-badminton.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/lawntennis-individual"
        />
        <EventsCard
          title="Table Tennis (individual)"
          registrationOpen={false}
          description="Open for Boys and Girls."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-tabletennis.png"
                width={200}
                height={200}
              />
            </>
          }
          link="register/tabletennis-individual"
        />
        <EventsCard
          title="Chess"
          registrationOpen={false}
          description="It is Open FIDE rapid chess
          tournament only for Girls."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-chess.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/chess-girls"
        />
      </div>
    </>
  );
}

export default IndividualEvents