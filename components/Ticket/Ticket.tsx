import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Ticket: FC = () => {
  return (
    <div className=" bg-gradient-to-br from-black via-black to-orange-500 w-full flex flex-col items-center justify-center gap-4 mt-24">
      <h1 className="uppercase select-none align-middle text-white font-bold text-6xl lg:my-24">
        Tickets
      </h1>
      <div className="flex flex-col w-full lg:flex-row gap-4 lg:w-4/6 mb-36">
        <div className=" w-full lg:w-1/2 lg:ml-5 flex flex-col justify-center items-center gap-10 select-none mt-10">
          <Card className="shinyButton hover:shadow-[0_8px_10px_rgba(255,255,255,0.5)] mx-4 lg:mx-0 ">
            <CardHeader className="flex justify-center items-center pt-4">
              <CardTitle className="flex flex-col gap-6 text-white">
                <div>رایگان</div>
                <div>999</div>
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-white text-center">
              The ticket price includes:
            </CardDescription>
            <CardContent className="flex justify-start text-base/10 text-right select-none px-10">
              <Card className="bg-gray-900">
                <CardContent className="text-white flex justify-center">
                  participation in a stationary event, Participation in QA
                  sessions, Opportunity to talk with Speakers, lunch + coffee
                  breaks, Certificate of attendance (upon request of the
                  attendee).
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          <button className="w-1/2 h-16 text-white uppercase cursor-pointer border-2 border-white rounded-4xl">
            buy ticket
          </button>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-5 flex flex-col justify-center items-center gap-10  select-none mt-4">
          <Card className="font-medium uppercase bg-gray-900 hover:shadow-[0_8px_10px_rgba(255,255,255,0.5)] mx-4 lg:mx-0">
            <CardHeader className="flex justify-center items-center pt-4">
              <CardTitle className="flex flex-col gap-6 text-white">
                <div>رایگان</div>
                <div>999</div>
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-white text-center">
              The ticket price includes:
            </CardDescription>
            <CardContent className="flex justify-start text-base/10 text-right select-none px-10">
              <Card className="bg-[linear-gradient(110deg,#ff8c00,45%,#ffb347,55%,#ff8c00)] bg-[length:200%_100%]">
                <CardContent className="text-white flex justify-center">
                  participation in a stationary event, Participation in QA
                  sessions, Opportunity to talk with Speakers, lunch + coffee
                  breaks, Certificate of attendance (upon request of the
                  attendee).
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          <button className="w-1/2 h-16 text-white uppercase cursor-pointer border-2 border-white rounded-4xl">
            buy ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
