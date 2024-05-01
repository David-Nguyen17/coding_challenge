import parsePhoneNumber from "libphonenumber-js";
import * as z from "zod";

export const InputsFormStepSchema = z.object({
  name: z.string().min(1, { message: "This field is not empty" }),
  phone: z.string().transform((arg, ctx) => {
    const phone = parsePhoneNumber(arg, {
      defaultCountry: "DE",
      extract: false,
    });
    if (phone && phone.isValid()) {
      return phone.number;
    }
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Invalid phone number",
    });
  }),
  postcode: z.string().regex(/^\d+$/).min(1),
  location: z.string().min(1, { message: "This field is not empty" }),
  street: z.string().min(1, { message: "This field is not empty" }),
  house_number: z.string().min(1, { message: "This field is not empty" }),
  gender: z.string().min(1, { message: "Please choose gender" }),
});
