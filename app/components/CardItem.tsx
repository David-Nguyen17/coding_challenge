"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { SatteldachIcon, SatteldachSmallIcon } from "../assets/icons";
export interface IProps {
  title: string;
  src?: string | StaticImport;
}

const CardItem = (props: IProps) => {
  const { title, src } = props;
  return (
    <div
      className="flex flex-row md:flex-col h-[60px] md:h-[220px] md:w-[197.5px] rounded-[10px]  
    md:gap-[20px] bg-white items-center shadow-[-3px_5px_40px_-7px_rgba(0, 0, 0, 0.30)]"
    >
      <Image
        src={src ?? SatteldachIcon}
        alt={"Icon"}
        priority
        className="w-[66.7px] h-[60px] md:w-[120px] md:h-[108px] md:scale-100 object-contain"
        quality={100}
        unoptimized={true}
      />
      <SatteldachSmallIcon />

      <div className="text-dark_eclipse text-[15.3px] font-medium bg-red-300">
        {title}
      </div>
    </div>
  );
};

export default CardItem;
