import React from "react";
import TeamCard from "../TeamCard";
import Image from "next/image";

function EventHeads() {
  return (
    <div className="flex w-full max-w-screen-xl flex-col items-center justify-center text-center lg:text-start">
      <p className="mt-10 w-full max-w-screen-xl text-2xl">Cricket</p>
      <div className="mt-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Avinash kumar"
          description="Cricket Secretary"
          large={false}
          instagram="https://www.instagram.com/_avi_kr/"
          linkedin="https://www.linkedin.com/in/avinash-kumar-b5b51221a/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/cricket/avinash.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Amita"
          description="Cricket Secretary"
          large={false}
          instagram="https://www.instagram.com/__amita.s_/"
          linkedin="https://www.linkedin.com/in/amita-singh-386917212/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/cricket/amita.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Football</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Gajendra singh"
          description="Football Secretary"
          large={false}
          instagram="https://www.instagram.com/gajender_07/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/football/gajender.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Saloni"
          description="Football Secretary"
          large={false}
          linkedin="https://www.linkedin.com/in/saloni-kumari-2b97541ba/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/football/SALONI.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Table Tennis</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Ujjwal singh"
          description="Table Tennis Secretary"
          large={false}
          instagram="https://www.instagram.com/_ujjwal.17__/"
          linkedin="https://www.linkedin.com/in/ujjwal-singh-51441b221/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/Tabletennis/ujwal.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Muskan"
          description="Table Tennis Secretary"
          large={false}
          instagram="https://www.instagram.com/izme.kai/"
          linkedin="https://www.linkedin.com/in/muskan-3bb381200/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/Tabletennis/muskan.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Chess</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Abhinav kumar"
          description="Chess Secretary"
          large={false}
          instagram="https://www.instagram.com/@abhinavbajad/"
          linkedin="https://www.linkedin.com/in/abhinav-bajad-932397237/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/chess/abhinav.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Megha"
          description="Chess Secretary"
          large={false}
          instagram="https://www.instagram.com/_megha.k._/"
          linkedin="https://www.linkedin.com/in/megha-kumari-b6395b212/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/chess/megha.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Lawn Tennis</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Eshaan kapoor"
          description="Lawn Tennis Secretary"
          large={false}
          instagram="https://www.instagram.com/eshaankpr/"
          linkedin="https://www.linkedin.com/in/eshaankapoor/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/Lawntennis/ESHAAN.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Khushi"
          description="Lawn Tennis Secretary"
          large={false}
          instagram="https://www.instagram.com/izme.kai/"
          linkedin="https://www.linkedin.com/in/izmekai/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/Lawntennis/KHUSHI.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Volleyball</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Sachin bhambu"
          description="Volleyball Secretary"
          large={false}
          instagram="https://www.instagram.com/sachinbhambhu_it.is/"
          linkedin="https://www.linkedin.com/in/sachin-bhambhu-61772a208/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/volleyball/sachin.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Neha choudhary"
          description="Volleyball Secretary"
          large={false}
          instagram="https://www.instagram.com/the_shining_sun7644"
          linkedin="https://www.linkedin.com/in/neha-choudhary-068488203"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/volleyball/neha.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Basketball</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Vikrant kumar"
          description="Basketball Secretary"
          large={false}
          instagram="https://www.instagram.com/_iso_v/"
          linkedin="https://www.linkedin.com/in/vikrant-kumar-4027501ba/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/basketball/vikrant.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Nisha"
          description="Basketball Secretary"
          large={false}
          instagram="https://www.instagram.com/14840_nisha/"
          linkedin="https://www.linkedin.com/in/nisha-dathak-70b458218/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/basketball/nisha2.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Badminton</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Karri Aakash"
          description="Badminton Secretary"
          large={false}
          instagram="https://www.instagram.com/aakash_k_475/"
          linkedin="https://www.linkedin.com/in/aakash-k-a7562a20a/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/badminton/aakash.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Kamakshi dixit"
          description="Badminton Secretary"
          large={false}
          instagram="https://www.instagram.com/_kamakshi.dixit_/"
          linkedin="https://www.linkedin.com/in/kamakshi-dixit-101a21200/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/badminton/kamakshi.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      {/* <p className="mt-10 w-full max-w-screen-xl text-2xl">Kho Kho</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Arajeet Pandey"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/core/arajeet.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Arajeet Pandey"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/core/arajeet.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div> */}
      <p className="mt-10 w-full max-w-screen-xl text-2xl">Squash</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Uttkarsh singh"
          description="Squash Secretary"
          large={false}
          instagram="https://www.instagram.com/uttkarsh.singh007/"
          linkedin="https://www.linkedin.com/in/uttkarsh-singh-97a272164/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/squash/utkarsh.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Amruta patil"
          description="Squash Secretary"
          large={false}
          instagram="https://www.instagram.com/amruta_patil_1111/"
          linkedin="https://www.linkedin.com/in/amruta-patil-074057204/"
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/squash/amruta.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>
    </div>
  );
}

export default EventHeads;
