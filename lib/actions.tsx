"use server";

import slugify from "slugify";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string | null | undefined) {
  return !text ?? text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // html에 required로 필수 입력란을 만들었지만,
  // F12 누르고 사용자가 지우면 백엔드에 빈 상태로 보내게 된다.
  // 이를 막기위해 백엔드에서도 유효성 검사를 진행해야함.
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.image) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  // console.log(meal);
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
