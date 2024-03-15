import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { Meal } from "@/app/meals/[mealSlug]/page";

const db = sql("meals.db");

// async 함수의 역할. -> 프로미스가 아닌 것도 래핑해서 프로미스로 반환함.
export async function getMeals() {
  await new Promise((resovle) => setTimeout(resovle, 2000));
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // ? 는 query문에 직접적으로 주입하지 않기 위해서(삽입공격방지) ? 자리에 get메서드의 args가 들어감.
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}

export function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
}
