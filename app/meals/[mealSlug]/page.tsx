import Image from "next/image";
import styles from "./page.module.css";

export default function MealPostPage({
  params,
}: {
  params: { mealSlug: string };
}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill />
        </div>
        <div className={styles.headerText}>
          <h1>TITLE</h1>
        </div>
      </header>
      <main></main>
    </>
  );
}
