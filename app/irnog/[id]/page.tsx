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
        <div>
          {/* title */}
          <h1 className="text-white h-24">
            همایش رسمی گروه گردانندگان شبکه اینترنت ایران {page?.value.title}-
            IRNOG{id}
          </h1>
          {/* location */}

          <h1 className="text-white h-24">{page?.value.location.country}</h1>
          <h1 className="text-white h-24">{page?.value.location.city}</h1>
          <h1 className="text-white h-24">{page?.value.location.detail}</h1>
          {page?.value.location.locationLink && (
            <button
              onClick={() =>
                handleOpenMapClick(page?.value.location.locationLink)
              }
              className=" text-white  w-full"
            >
              google maps
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
