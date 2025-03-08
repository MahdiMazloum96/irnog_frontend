"use client";

import { useParams } from "next/navigation";
import { FC } from "react";
import { IrnogPageContent } from "@/components/IrnogPageContent/IrnogPageContent";
import NotFoundPage from "@/app/not-found";
import Link from "next/link";

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
          {page?.value.irnogAgenda && (
            <div
              dir="rtl"
              className="overflow-x-auto  w-full  flex justify-center mt-28"
            >
              <table className="w-full lg:w-3/5 mx-2 backdrop-blur-sm bg-gradient-to-r from-orange-400/40 to-orange-600/40 shadow-md rounded-lg overflow-hidden">
                <thead className="  bg-amber-700 text-white">
                  <tr>
                    <th className="text-center whitespace-nowrap p-3">
                      شخص ارائه دهنده
                    </th>
                    <th className="text-center whitespace-nowrap p-3">
                      عنوان ارائه
                    </th>
                    {page.value.irnogAgenda.some(
                      (agenda) => agenda.presentationTime
                    ) && (
                      <th className="text-center whitespace-nowrap p-3">
                        ساعت
                      </th>
                    )}
                    <th className="text-center whitespace-nowrap p-3">
                      مستندات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.value.irnogAgenda.map((irnogAgenda) => (
                    <tr
                      key={irnogAgenda.presenter}
                      className="hover:bg-orange-100/10 transition duration-150 ease-in-out text-center"
                    >
                      <td className="whitespace-nowrap p-3 border-t border-gray-200 max-w-24 truncate">
                        {irnogAgenda.presenter}
                      </td>
                      <td className="whitespace-nowrap p-3 border-t max-w-40 border-gray-200 truncate">
                        {irnogAgenda.presentationTitle}
                      </td>
                      {irnogAgenda.presentationTime && (
                        <td className="whitespace-nowrap p-3 border-t border-gray-200">
                          {irnogAgenda.presentationTime}
                        </td>
                      )}
                      <td className="whitespace-nowrap p-3 border-t border-gray-200">
                        <span
                          onClick={() =>
                            window.open(irnogAgenda.presentationLink)
                          }
                          className="text-white hover:text-secondary cursor-pointer"
                        >
                          مشاهده مستندات
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* sponsors */}
          {/* hostSponsors */}
          <h1 className="text-6xl text-white mt-20">حامیان همایش</h1>
          {page?.value.sponsers.hostSponsors && (
            <>
              <h1 className="mt-10 text-xl select-none">حامی مالی میزبان</h1>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div
                  key={page?.value.sponsers.hostSponsors.name}
                  className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() =>
                    window.open(page?.value.sponsers.hostSponsors?.link)
                  }
                >
                  <img
                    src={page?.value.sponsers.hostSponsors.logo}
                    alt={page?.value.sponsers.hostSponsors.name}
                    className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-white bg-transparent backdrop-blur-sm bg-opacity-75">
                    {page?.value.sponsers.hostSponsors.name}
                  </div>
                </div>
              </div>
            </>
          )}
          {/* platinumSponsors */}
          {page?.value.sponsers.platinumSponsors && (
            <>
              <h1 className="mt-10 text-xl select-none">
                حامیان مالی پلاتینیوم
              </h1>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {page.value.sponsers.platinumSponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                    onClick={() => window.open(sponsor.link)}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-white bg-transparent backdrop-blur-sm bg-opacity-75">
                      {sponsor.name}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {/* goldSponsors */}
          {page?.value.sponsers.goldSponsors && (
            <>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {page.value.sponsers.goldSponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                    onClick={() => window.open(sponsor.link)}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-white bg-transparent backdrop-blur-sm bg-opacity-75">
                      {sponsor.name}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {/* silverSponsors */}
          {page?.value.sponsers.silverSponsors && (
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {page.value.sponsers.silverSponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => window.open(sponsor.link)}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-white bg-transparent backdrop-blur-sm bg-opacity-75">
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* ConnectivitySponsors */}
          {page?.value.sponsers.ConnectivitySponsors && (
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {page.value.sponsers.ConnectivitySponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => window.open(sponsor.link)}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-white bg-transparent backdrop-blur-sm bg-opacity-75">
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* moralSponsor */}
          {page?.value.sponsers.moralSponsor && (
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {page.value.sponsers.moralSponsor.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => window.open(sponsor.link)}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-white bg-transparent backdrop-blur-sm bg-opacity-75">
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
          )}
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
