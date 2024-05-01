export interface ICard {
  id: number;
  title: string;
  icon: string;
}

export enum STEP_TYPE {
  FIRST_STEP = 1,
  SECOND_STEP = 2,
  THIRD_STEP = 3,
}
export enum GENDER_TYPE {
  MALE = "Male",
  FEMALE = "Female",
}
export interface IInputFormStep {
  firstStep: ICard;
  activeStep: STEP_TYPE;
  secondStep: ICard;
  thirdStep: ICard;
  name: string;
  phone: string;
  postcode: string;
  location: string;
  street: string;
  house_number: string;
  gender: GENDER_TYPE;
}
