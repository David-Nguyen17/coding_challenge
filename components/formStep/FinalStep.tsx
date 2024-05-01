import {
  GENDER_TYPE,
  IFormStepProps,
  IInputFormStep,
} from "@/app/types/FormStepType";
import { BaseSyntheticEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Input from "../ui/Input";
import Radio from "../ui/Radio";
import ButtonBack from "./ButtonBack";
export interface IProps extends Partial<IFormStepProps> {
  register: UseFormRegister<IInputFormStep>;
  errors: FieldErrors<IInputFormStep>;
  gender: GENDER_TYPE;
  onChangeGender: (value: GENDER_TYPE) => void;
  onPressSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
const FinalStep = (props: IProps) => {
  const { register, errors, onBack, gender, onChangeGender, onPressSubmit } =
    props;
  return (
    <div className={`w-screen flex flex-col justify-start items-center`}>
      <div>
        <div className="mx-[10px] md:mx-10 w-[96%] lg:max-w-[834px] justify-start md:max-w-[90%]">
          <div className="text-left md:text-center text-dark_eclipse text-lg mt-4	font-medium	leading-6	mb-2">
            Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir
            senden Ihnen gerne kostenlose Informationen zu.
          </div>
          <div className="flex flex-col gap-4 md:gap-[10px]">
            <div>
              <label className="text-script_ink text-sm font-medium mb-[2px]">
                Anrede
              </label>
              <div className="flex gap-9">
                <Radio
                  label="Herr"
                  checked={gender === GENDER_TYPE.MALE}
                  id="gender"
                  {...register("gender", { required: true })}
                  onChange={() => onChangeGender(GENDER_TYPE.MALE)}
                />
                <Radio
                  label="Frau"
                  id="gender"
                  checked={gender === GENDER_TYPE.FEMALE}
                  {...register("gender", { required: true })}
                  onChange={() => onChangeGender(GENDER_TYPE.FEMALE)}
                />
              </div>
              {!!errors?.gender ? (
                <label className="text-red-500 text-sm mt-1">
                  {"Please choose gender"}
                </label>
              ) : null}
            </div>
            <Input
              id={"name"}
              label="Name"
              required
              error={!!errors?.name}
              message={errors?.name?.message}
              {...register("name", { required: true })}
            />
            <Input
              id="phone"
              label="Telefonnummer"
              error={!!errors?.phone}
              message={"Invalid phone number format."}
              {...register("phone", {
                required: true,
              })}
            />
            <Input
              label="Postleitzahl"
              message={"This field only have numeric"}
              error={!!errors?.postcode}
              {...register("postcode", { required: true })}
            />
            <Input
              label="Ort"
              error={!!errors?.location}
              message={errors?.location?.message}
              {...register("location", { required: true })}
            />
            <div className="flex gap-4 w-[100%] justify-between">
              <Input
                label="Straße"
                error={!!errors?.street}
                message={errors?.street?.message}
                className="w-[60%]"
                {...register("street", { required: true })}
              />
              <Input
                label="Hausnummer"
                className="w-[36%]"
                message={errors?.house_number?.message}
                error={!!errors?.house_number}
                {...register("house_number", { required: true })}
              />
            </div>
            <button
              onClick={onPressSubmit}
              type="button"
              className="bg-guppies_green rounded-[32px] py-3 mt-4"
            >
              <span className="text-cynical_black text-base font-medium	leading-6 text-center">
                Ja, das ist mein Hausdach.
              </span>
            </button>
          </div>
        </div>
        <ButtonBack onBack={onBack} />
      </div>
    </div>
  );
};

export default FinalStep;
