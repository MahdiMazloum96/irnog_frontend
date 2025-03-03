"use client";
import { FC } from "react";
import { Card } from "../ui/card";
import { programCommitteeMembers } from "./ProgramCommiteeMembers";
import { FaLinkedin } from "react-icons/fa";

interface ProgrmCommitteeProps {}
const ProgramCommittee: FC<ProgrmCommitteeProps> = () => {
  const handleClick = (link: string) => {
    window.open(link);
  };
  return (
    <Card className="  flex flex-col m-auto items-center w-3/4 h-full bg-secondary my-10 overflow-hidden">
      <h1 className="uppercase text-center text-white  text-4xl lg:text-6xl pt-16 select-none">
        Program Committee
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mx-8 my-16">
        {programCommitteeMembers.map((member) => {
          return (
            <div className="bg-gray-900 rounded-2xl" key={member.name}>
              <img
                src={member.image}
                alt="MembersImage"
                className="rounded-2xl"
              />
              <div
                className="flex gap-2 w-full h-14 items-center justify-center  cursor-pointer"
                onClick={() => handleClick(member.linkdin)}
              >
                <div className="text-white">{member.name}</div>
                <FaLinkedin className="text-white" />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
export default ProgramCommittee;
