"use client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useParams } from "next/navigation";
import { FC } from "react";
import { newsContent } from "@/components/News/NewsContent";

const NewsPage: FC = () => {
  const params = useParams();
  const { id } = params;
  const page = newsContent.find((page) => page.key === id);

  return (
    <div className=" h-auto">
      <div className="  rounded-t-4xl  bg-gradient-to-b from-orange-500 to-neutral-900  flex flex-col justify-center items-center">
        <h1 className="text-white text-center  text-4xl lg:text-5xl py-20 leading-relaxed ">
          {page?.value.title}
        </h1>
        <Image
          src={page?.value.image ?? "/pics/default.jpg"}
          width={700}
          height={700}
          alt="newsImage"
          className=" rounded-3xl px-6"
        />
        <div className="text-white text-right mt-24  mx-4 lg:mx-36 text-wrap  text-base/12 pb-36 ">
          <div>{page?.value.content}</div>
        </div>
      </div>
    </div>
  );
};
export default NewsPage;
