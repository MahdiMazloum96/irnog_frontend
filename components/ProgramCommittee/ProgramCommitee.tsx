"use client";
import { FC } from "react";
import { Card } from "../ui/card";
import { programCommitteeMembers } from "./ProgramCommiteeMembers";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const ProgramCommittee: FC = () => {
  const handleClick = (link: string) => {
    window.open(link);
  };
  return (
    <Card className="  flex flex-col mx-auto items-center w-3/4 h-full bg-Tertiary my-10 overflow-hidden mt-36">
      <h1 className="uppercase text-center text-white  text-2xl lg:text-6xl pt-16 select-none leading-relaxed">
        اعضای کمیته برنامه ریزی مرکزی ایرناگ
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mx-8 my-16">
        {programCommitteeMembers.map((member, index) => {
          return (
            <div
              className="bg-secondary rounded-2xl border border-secondary "
              key={member.linkdin}
            >
              <Image
                width="600"
                height="600"
                src={member.image}
                alt="MembersImage"
                className="rounded-2xl"
              />
              <div
                className="flex gap-2 w-full h-14 items-center justify-center  cursor-pointer p-3"
                onClick={() => handleClick(member.linkdin)}
              >
                <div className=" text-center">{member.name}</div>
                <FaLinkedin size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
export default ProgramCommittee;
