"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  AnderesIcon,
  FlashdachIcon,
  GaubenBIcon,
  KeineGaubenBIcon,
  PulldachIcon,
  SatteldachIcon,
} from "../assets/icons";
import {
  GENDER_TYPE,
  ICard,
  IInputFormStep,
  STEP_TYPE,
} from "../types/FormStepType";
import { InputsFormStepSchema } from "../validation/FormStepValidation";

const FormStepViewModel = () => {
  const {
    setValue,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputFormStep>({
    resolver: zodResolver(InputsFormStepSchema),
    reValidateMode: "onBlur",
    defaultValues: {
      activeStep: STEP_TYPE.FIRST_STEP,
      house_number: "",
      location: "",
      name: "",
      phone: "",
      postcode: "",
      street: "",
    },
  });
  const activeStep = watch("activeStep");
  const firstStep = watch("firstStep");
  const secondStep = watch("secondStep");
  const gender = watch("gender");
  const dataFirstStep: ICard[] = useMemo(() => {
    return [
      { id: 1, title: "Satteldach", icon: SatteldachIcon },
      { id: 2, title: "Flachdach", icon: FlashdachIcon },
      { id: 3, title: "Pultdach", icon: PulldachIcon },
      { id: 4, title: "Anderes", icon: AnderesIcon },
    ];
  }, []);
  const dataSecondStep: ICard[] = useMemo(() => {
    return [
      { id: 1, title: "Ja", icon: GaubenBIcon },
      { id: 2, title: "Nein", icon: KeineGaubenBIcon },
      { id: 3, title: "Weiß nicht", icon: AnderesIcon },
    ];
  }, []);
  const listCarousel = useMemo(() => {
    return [
      {
        id: 0,
        data: dataFirstStep,
      },
      {
        id: 1,
        data: dataSecondStep,
      },
      {
        id: 2,
        data: dataSecondStep,
      },
    ];
  }, [dataFirstStep, dataSecondStep]);
  const onPressSubmit = (value: IInputFormStep) => {
    console.log("value", value);
  };
  const animationLine = useMemo(() => {
    return activeStep === STEP_TYPE.SECOND_STEP
      ? "translate-x-[50%]"
      : activeStep === STEP_TYPE.THIRD_STEP
      ? "translate-x-[80%]"
      : "translate-x-[0%]";
  }, [activeStep]);
  const animationCard = useMemo(() => {
    return activeStep === STEP_TYPE.FIRST_STEP
      ? "translate-x-0"
      : activeStep === STEP_TYPE.SECOND_STEP
      ? "-translate-x-1/3"
      : "-translate-x-2/3";
  }, [activeStep]);
  const percentLine = useMemo(() => {
    return activeStep === STEP_TYPE.SECOND_STEP
      ? 50
      : activeStep === STEP_TYPE.THIRD_STEP
      ? 90
      : 10;
  }, [activeStep]);
  const onClickFirst = (item: ICard) => {
    setValue("firstStep", item);
    setValue("activeStep", STEP_TYPE.SECOND_STEP);
  };
  const onClickSecond = (item: ICard) => {
    setValue("secondStep", item);
    setValue("activeStep", STEP_TYPE.THIRD_STEP);
  };
  const onClickBack = () => {
    if (activeStep === STEP_TYPE.THIRD_STEP) {
      setValue("activeStep", STEP_TYPE.SECOND_STEP);
    } else {
      setValue("activeStep", STEP_TYPE.FIRST_STEP);
    }
  };
  const onChangeGender = (value: GENDER_TYPE) => {
    setValue("gender", value);
  };
  return {
    dataFirstStep,
    activeStep,
    firstStep,
    secondStep,
    dataSecondStep,
    listCarousel,
    register,
    onPressSubmit: handleSubmit(onPressSubmit),
    errors,
    gender,
    animationLine,
    percentLine,
    onClickFirst,
    onClickSecond,
    onClickBack,
    animationCard,
    onChangeGender,
  };
};

export default FormStepViewModel;
