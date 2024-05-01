"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { AnderesIcon } from "../../app/assets/icons";
export interface IProps {
  title: string;
  src?: string | StaticImport;
  onClick: () => void;
}

const CardItem = (props: IProps) => {
  const { title, src, onClick } = props;
  return (
    <button
      className="group flex flex-row md:flex-col h-[60px] md:h-[220px] md:w-[197.5px] pl-4 md:pl-0 gap-4 
      md:ml-0 rounded-[10px] md:gap-[20px] bg-white items-center shadow-[-3px_5px_40px_-7px_rgba(0,0,0,0.3)]
      border-2 border-transparent group-hover:border-2 hover:border-dark_eclipse"
      onClick={onClick}
    >
      <Image
        src={src ?? AnderesIcon}
        alt={"Icon"}
        priority
        className="w-[67px] h-[60px] md:w-[120px] md:h-[108px] md:scale-100 object-contain md:group-hover:scale-[1.1] duration-300"
        quality={100}
        unoptimized={true}
      />
      <div
        className="flex flex-1 group-hover:bg-dark_eclipse h-[100%] rounded-e-lg w-[100%] md:justify-center items-center 
        md:items-start md:group-hover:transition-all md:rounded-b-lg md:rounded-e-none
        "
      >
        <label
          className="text-dark_eclipse  md:group-hover:translate-y-8 duration-300
         group-hover:text-white text-[15.3px] text-left font-medium leading-6 m-0 pl-3 md:pl-0 group-hover:items-center"
        >
          {title}
        </label>
      </div>
    </button>
  );
};

export default CardItem;