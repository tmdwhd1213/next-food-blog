export default function MealPostPage({
  params,
}: {
  params: { mealSlug: string };
}) {
  return <p>{params.mealSlug}</p>;
}
