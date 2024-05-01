import { CheckIcon, InfoIcon } from "@/app/assets/icons";
import { STEP_TYPE } from "@/app/types/FormStepType";
import Image from "next/image";
export interface IProps {
  activeStep: STEP_TYPE;
  percentLine: number;
}
const Header = (props: IProps) => {
  const { activeStep, percentLine } = props;
  return (
    <div
      className={`${
        activeStep === STEP_TYPE.THIRD_STEP ? "bg-black_knight" : ""
      }`}
    >
      <div className="w-full mx-5 md:mx-10 pt-8">
        <div
          className={`w-[90%] lg:max-w-[834px] justify-start md:max-w-[80%] rounded-lg h-1 flex items-center my-2`}
        >
          <div
            className={`bg-guppies_green relative h-1 w-[${percentLine}%] 
                transition-all duration-300 ease-linear rounded-s-lg`}
          >
            <div
              className={`absolute -right-[72px] -bottom-2 z-0
                  transition-all duration-300 ease-linear
             `}
            >
              <div
                className={`text-xs font-medium leading-5	text-script_ink ${
                  activeStep === STEP_TYPE.THIRD_STEP
                    ? "text-white text-left -translate-x-1/2"
                    : ""
                }`}
              >
                {percentLine}% geschafft
              </div>
              <Image src={CheckIcon} alt="Icon check" className="w-5 h-5" />
            </div>
          </div>
          <div
            className={`bg-aurora_green h-1 flex-1 w-[${
              100 - percentLine
            }%] transition-all duration-300 ease-linear rounded-e-lg`}
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
