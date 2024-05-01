"use client";

import FinalStep from "@/components/formStep/FinalStep";
import FirstStep from "@/components/formStep/FirstStep";
import Header from "@/components/formStep/Header";
import SecondStep from "@/components/formStep/SecondStep";
import { FormStepViewModel } from "./viewModel";

export default function Home() {
  const {
    dataFirstStep,
    activeStep,
    dataSecondStep,
    register,
    onPressSubmit,
    errors,
    gender,
    percentLine,
    onClickSecond,
    onClickFirst,
    onClickBack,
    animationCard,
    onChangeGender,
    firstStep,
    secondStep,
  } = FormStepViewModel();

  return (
    <main>
      <div className="w-full overflow-hidden">
        <Header activeStep={activeStep} percentLine={percentLine} />
        <div className="relative">
          <div
            className={`flex w-[300%] ${animationCard} transition-transform duration-300 ease-linear`}
          >
            <FirstStep
              data={dataFirstStep}
              selected={firstStep}
              onClick={onClickFirst}
            />
            <SecondStep
              data={dataSecondStep}
              onClick={onClickSecond}
              selected={secondStep}
              onBack={onClickBack}
            />
            <FinalStep
              register={register}
              errors={errors}
              gender={gender}
              onChangeGender={onChangeGender}
              onBack={onClickBack}
              onPressSubmit={onPressSubmit}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
