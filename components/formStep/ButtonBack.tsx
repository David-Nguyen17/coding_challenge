import { BackIcon } from "@/app/assets/icons";
import Image from "next/image";

const ButtonBack = ({ onBack }: { onBack?: () => void }) => {
  return (
    <button
      className="flex gap-1 items-center mx-5 md:ml-16 mt-9"
      onClick={() => {
        if (onBack) {
          onBack();
        }
      }}
    >
      <Image
        src={BackIcon}
        alt="Icon Back"
        priority
        quality={100}
        unoptimized
      />
      Zurück
    </button>
  );
};

export default ButtonBack;
