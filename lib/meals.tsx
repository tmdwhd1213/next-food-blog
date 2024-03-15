import sql from "better-sqlite3";

const db = sql("meals.db");

// async 함수의 역할. -> 프로미스가 아닌 것도 래핑해서 프로미스로 반환함.
export async function getMeals() {
  await new Promise((resovle) => setTimeout(resovle, 2000));
  return db.prepare("SELECT * FROM meals").all();
}
