"use client";

import { useParams } from "next/navigation";
import { FC, ReactNode } from "react";
import { IrnogPageContent } from "@/components/IrnogPageContent/IrnogPageContent";

interface IrnogPageProps {}
const IrnogPage: FC<IrnogPageProps> = () => {
  const params = useParams();
  const { id } = params;
  const page = IrnogPageContent.find((page) => page.key === id);
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
          {/* irnog agenda */}

          {/* sponsors */}
          {/* hostSponsors */}
          {/* platinumSponsors */}
          {/* goldSponsors */}
          {/* silverSponsors */}
          {/* ConnectivitySponsors */}
          {/* moralSponsor */}

          {/* Participants */}
        </div>
      </>
    </div>
  );
};
export default IrnogPage;
