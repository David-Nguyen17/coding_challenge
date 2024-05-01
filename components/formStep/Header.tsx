import { CheckIcon, InfoIcon } from "@/app/assets/icons";
import { STEP_TYPE } from "@/app/types/FormStepType";
import Image from "next/image";
import { useMemo } from "react";
export interface IProps {
  activeStep: STEP_TYPE;
  percentLine: number;
}
const Header = (props: IProps) => {
  const { activeStep, percentLine } = props;
  const animationLine = useMemo(() => {
    if (activeStep === STEP_TYPE.FIRST_STEP) {
      return "w-[10%]";
    }
    if (activeStep === STEP_TYPE.SECOND_STEP) {
      return "w-[50%]";
    }
    return "w-[90%]";
  }, [activeStep]);
  return (
    <div
      className={`${
        activeStep === STEP_TYPE.THIRD_STEP ? "bg-black_knight" : ""
      } flex flex-col justify-start items-center`}
    >
      <div className="w-full mx-5 md:mx-10 pt-20 flex flex-col justify-center items-center">
        <div
          className={`w-[80%] lg:max-w-[834px] md:max-w-[92%] rounded-lg h-1 flex my-2`}
        >
          <div
            className={`bg-guppies_green relative h-1 ${animationLine}
                transition-all duration-300 ease-linear rounded-s-lg`}
          >
            <div
              className={`absolute -right-[72px] -bottom-2 z-0
                  transition-all duration-300 ease-linear
             `}
            >
              <span
                className={`text-xs font-medium leading-5 text-script_ink ${
                  activeStep === STEP_TYPE.THIRD_STEP
                    ? "text-white text-left -translate-x-1/2"
                    : ""
                }`}
              >
                {percentLine}% geschafft
              </span>
              <Image src={CheckIcon} alt="Icon check" className="w-5 h-5" />
            </div>
          </div>
          <div
            className={`bg-aurora_green h-1 flex-1 transition-all duration-300 ease-linear rounded-e-lg`}
          />
        </div>
      </div>
      {activeStep === STEP_TYPE.THIRD_STEP ? (
        <div className=" bg-black_knight pb-9 pt-3">
          <div className="mx-5 md:ml-10 text-base text-center text-white font-medium	leading-5 mb-[5px] mt-6">
            Eine Solaranlage spart Ihnen ca.
          </div>
          <div className=" text-center flex mt-2 justify-center text-white text-xl font-medium	leading-[22px] mb-5">
            25.000 - 30.000 $ Stromkosten{""}
            <Image
              src={InfoIcon}
              alt="Icon info"
              priority
              className="ml-3 mb-4"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
