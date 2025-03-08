"use client";

import { useParams } from "next/navigation";
import { FC } from "react";
import { IrnogPageContent } from "@/components/IrnogPageContent/IrnogPageContent";
import NotFoundPage from "@/app/not-found";

interface IrnogPageProps {}
const IrnogPage: FC<IrnogPageProps> = () => {
  const params = useParams();
  const { id } = params;
  const numeberId = Number(id);
  const page = IrnogPageContent.find((page) => page.key === id);
  const handleOpenMapClick = (link: string | undefined) => {
    window.open(link);
  };
  if (numeberId < 1 || numeberId > 6) {
    return <NotFoundPage />;
  }
  return (
    <div className="h-auto">
      <>
        <div className="flex flex-col gap-4 items-center mt-14 text-white">
          {/* title */}
          <h1 className=" flex flex-col items-center gap-7 mx-2 my-6">
            <div className="text-3xl lg:text-5xl text-center leading-20">
              {page?.value.title} همایش رسمی گروه گردانندگان شبکه اینترنت ایران
            </div>
            <div className="text-4xl">IRNOG {id}</div>
          </h1>
          {/* time */}
          {page?.value.time && <div>{page?.value.time}</div>}
          {/* location */}
          <div className="mt-2">
            {page?.value.location.country} - {page?.value.location.city}
          </div>
          <div>{page?.value.location.detail}</div>
          {page?.value.location.locationLink && (
            <button
              onClick={() =>
                handleOpenMapClick(page?.value.location.locationLink)
              }
              className=" text-center font-bold  w-36 border border-white rounded-lg p-2 bg-[#ff8c00] cursor-pointer"
            >
              Google Map
            </button>
          )}
          {/* irnog agenda */}
          {page?.value.irnogAgenda &&
            page.value.irnogAgenda.map((irnogAgenda) => {
              return (
                <div key={irnogAgenda.presenter} className="text-white">
                  <div>{irnogAgenda.presenter}</div>
                  <div>{irnogAgenda.presentationTitle}</div>
                  <div>{irnogAgenda.presentationLink}</div>
                </div>
              );
            })}
          {/* sponsors */}
          {/* hostSponsors */}
          <h1 className="text-4xl text-white">sponser</h1>
          {page?.value.sponsers && (
            <div className="text-white bg-red-800">
              <div>{page.value.sponsers.hostSponsors?.link}</div>
              <div>{page.value.sponsers.hostSponsors?.logo}</div>
            </div>
          )}
          {/* platinumSponsors */}
          {/* goldSponsors */}
          {/* silverSponsors */}
          {/* ConnectivitySponsors */}
          {/* moralSponsor */}
          {/* Participants */}
          {page?.value.Participants.map((Participant) => {
            return (
              <div key={Participant.name} className="text-white">
                <div>{Participant.name}</div>
                <div>{Participant.company}</div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};
export default IrnogPage;
