"use client";
import CardItem from "@/components/ui/CardItem";

import Input from "@/components/ui/Input";
import Radio from "@/components/ui/Radio";
import Image from "next/image";
import { BackIcon, CheckIcon, InfoIcon } from "./assets/icons";
import { GENDER_TYPE, STEP_TYPE } from "./types/FormStepType";
import { FormStepViewModel } from "./viewModel";

export default function Home() {
  const {
    dataFirstStep,
    activeStep,
    setValue,
    dataSecondStep,
    register,
    onPressSubmit,
    errors,
    watch,
    gender,
    percentLine,
  } = FormStepViewModel();

  return (
    <main className="w-full overflow-hidden">
      <div>
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

        <div className="relative">
          <div
            className={`flex w-[300%] ${
              activeStep === STEP_TYPE.FIRST_STEP
                ? "translate-x-0"
                : activeStep === STEP_TYPE.SECOND_STEP
                ? "-translate-x-1/3"
                : "-translate-x-2/3"
            } transition-transform duration-300 ease-linear`}
          >
            <div className={`w-screen h-full`}>
              <div className="mx-5 md:ml-10">
                <div className="text-base text-script_ink font-medium	leading-[18.5px] mb-[5px] mt-6">
                  Kostenloser Solarstrom-Check in einer Minute.
                </div>
                <div className="text-dark_eclipse text-xl font-medium	leading-[22px] mb-5">
                  Welche Dachform hat Ihr Haus?
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[10px] md:gap-5 mx-[10px] md:mx-10 flex-wrap">
                {dataFirstStep.map((item) => {
                  return (
                    <CardItem
                      key={item.id}
                      title={item.title}
                      src={item.icon}
                      onClick={() => {
                        setValue("firstStep", item);
                        setValue("activeStep", STEP_TYPE.SECOND_STEP);
                      }}
                    />
                  );
                })}
              </div>
            </div>

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
                {dataSecondStep.map((item) => {
                  return (
                    <CardItem
                      key={item.id}
                      title={item.title}
                      src={item.icon}
                      onClick={() => {
                        setValue("secondStep", item);
                        setValue("activeStep", STEP_TYPE.THIRD_STEP);
                      }}
                    />
                  );
                })}
              </div>
              <button
                className="flex gap-1 items-center mx-5 md:ml-16 mt-9"
                onClick={() => {
                  setValue("activeStep", STEP_TYPE.FIRST_STEP);
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
            </div>
            <div className={`w-screen`}>
              <div className="mx-[10px] md:mx-10">
                <div className="text-left md:text-center text-dark_eclipse text-lg mt-4	font-medium	leading-6	mb-2">
                  Gratulation, das Angebot ist in Ihrer Region noch verfügbar!
                  Wir senden Ihnen gerne kostenlose Informationen zu.
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
                        onChange={() => setValue("gender", GENDER_TYPE.MALE)}
                      />
                      <Radio
                        label="Frau"
                        id="gender"
                        checked={gender === GENDER_TYPE.FEMALE}
                        {...register("gender", { required: true })}
                        onChange={() => setValue("gender", GENDER_TYPE.FEMALE)}
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
                  <div className="flex gap-4 w-[100%]">
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
                    className="bg-guppies_green rounded-[32px] py-3"
                  >
                    <span className="text-cynical_black text-base font-medium	leading-6 text-center">
                      Ja, das ist mein Hausdach.
                    </span>
                  </button>
                </div>
              </div>
              <button
                className="flex gap-1 items-center mx-5 md:ml-16 mt-9 mb-10 "
                onClick={() => {
                  setValue("activeStep", STEP_TYPE.SECOND_STEP);
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
