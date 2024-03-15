import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

type Meal = {
  title: string;
  image: string;
  creator_email: string;
  creator: string;
  summary: string;
  instructions: string;
};

export default function MealPostPage({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal: Meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
