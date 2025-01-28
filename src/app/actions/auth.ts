"use server";

import { RegisterFormSchema } from "@/lib/rules";
import { error } from "console";

export async function register(state: any, formData: FormData) {




const  validatedfields=RegisterFormSchema.safeParse({
email:formData.get("email"),
password:formData.get("password"),
confirmPassword:formData.get("confirm-password")
})
console.log(validatedfields);
if(!validatedfields.success){
  return {
    error:validatedfields.error.flatten().fieldErrors,
    email:formData.get("email"),
  }
}


}
