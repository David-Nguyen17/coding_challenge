import { IFormStepProps } from "@/app/types/FormStepType";
import isEqual from "react-fast-compare";
import CardItem from "../ui/CardItem";
import ButtonBack from "./ButtonBack";
const SecondStep = (props: IFormStepProps) => {
  const { data, onClick, onBack, selected } = props;
  return (
    <div className={`w-screen`}>
      <div className="mx-5 md:ml-10">
        <div className="text-base text-script_ink font-medium	leading-[18.5px] mb-[5px] mt-6">
          Kostenloser Solarstrom-Check in einer Minute.
        </div>
        <div className="text-dark_eclipse text-xl font-medium	leading-[22px] mb-5">
          Besitzt Ihr Haus Gauben oder Dachfenster?
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[10px] md:gap-5 mx-[10px] md:mx-10 flex-wrap">
        {data.map((item) => {
          return (
            <CardItem
              key={item.id}
              title={item.title}
              src={item.icon}
              selected={isEqual(item, selected)}
              onClick={() => onClick(item)}
            />
          );
        })}
      </div>
      <ButtonBack onBack={onBack} />
    </div>
  );
};

export default SecondStep;
