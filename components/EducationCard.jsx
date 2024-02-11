import React from "react";
import Image from "next/image";

const EducationCard = ({ content: { Title, picture, content } }) => (
  <div className="flex flex-col bg-slate-300 items-center  h-full w-full border-sky-700 border-2 p-5 text-center rounded-lg drop-shadow-2xl">
    <div className="flex relative w-full h-[32vh]  object-contain overflow-hidden items-center justify-center ">
      <Image
        src={picture}
        alt="Picture of the institute"
        width={200}
        height={200}
      />
    </div>
    <p className=" font-burtons p-3 ">{Title}</p>
    <p className="py-3 text-justify text-[18px] font-merriweather leading-8 w-full md:w-128">
      {content}
    </p>
  </div>
);

export default EducationCard;
