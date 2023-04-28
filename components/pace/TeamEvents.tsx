import React from 'react'
import EventsCard from '@/components/EventCard';
import Image from 'next/image';

function TeamEvents() {
  return (
    <>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <EventsCard
          title="Cricket"
          registrationOpen={false}
          description="
          Event for Boys and Girls.        
          Players required are 11+5 for Boys and 7+4 for Girls.
          Tie breaker is Super Over.
          "
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
          link="register/cricket"
        />
        <EventsCard
          title="Basketball"
          registrationOpen={false}
          description="Minimum 8 Players per team.  Time for Boys: 4 quaters 10 min each & Girls: 4 quaters 7 min each."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-basketball.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/basketball"
        />
        <EventsCard
          title="Football"
          registrationOpen={false}
          description="Event for Boys and Girls.
          Event type: 6-a Side and 11-a side.        
          Maximum 5 substitutions are allowed in 11-a side."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-football.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/football"
        />
        <EventsCard
          title="Badminton"
          registrationOpen={false}
          description="Event type-Team.        
          Men's team 5 to 7 players, Women's team 2 to 4 players."
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
          link="register/badminton-team"
        />
        <EventsCard
          title="Lawn Tennis"
          registrationOpen={false}
          description="Individual Event for Boys and Girls.
          Rules adhere to ITA standards utilizing a 15-30-45 system."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-lawntennis.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/lawn-tennis"
        />
        <EventsCard
          title="Badminton (mix)"
          registrationOpen={false}
          description="Event type-Mixed.        
          Players required: Men's team 5 to 7 players, Women's team 2 to 4 players."
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
          link="register/badminton-mix"
        />
        <EventsCard
          title="Volleyball"
          registrationOpen={false}
          description="Each Team will have 12 players.  
          Prelims & Semis: 25-25-15.
          Finals:25-25-25-25-15.
          Rotation is compulsory."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-volleyball.png"
                width={250}
                height={250}
              />
            </>
          }
          link="register/volleyball"
        />

        <EventsCard
          title="Kabaddi"
          registrationOpen={false}
          description="Players required : 7+5.
          It will be Knockout.
          Only for Boys."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/kabaddi.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/kabaddi"
        />

        <EventsCard
          title="Squash (Team)"
          registrationOpen={false}
          description="Individual Event .
          Open for Boys Only.
          Non marking shoes compulsory."
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-squash.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/squash-team"
        />
        <EventsCard
          title="Table Tennis (Team)"
          registrationOpen={false}
          description="Players required : 3 to 5 per team.
          Score: knockout- Best of 3.
          Semi Finals- Best of 5."
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
          link="register/tabletennis-team"
        />
        <EventsCard
          title="Chess"
          registrationOpen={false}
          description="It is Open FIDE rapid chess
          tournament only for Boys."
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
          link="register/chess-boys"
        />
      </div>
    </>
  );
}

export default TeamEvents