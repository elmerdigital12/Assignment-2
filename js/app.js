const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const ExampleCategory = "Pasta";
Promise.all(
  letters.map(letter => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(response => response.json())
      .then(data => data.meals || [])
  ))
  .then(allMealsArrays => {
    const allMeals = allMealsArrays.flat();
    const sortedMeals = allMeals.sort((a, b) =>
      a.strMeal.localeCompare(b.strMeal));
    const first5Meals = sortedMeals
      .slice(0, 5)
      .map(meal => meal.strMeal);
    console.log("First 5 meals in order A–Z:");
    console.log(first5Meals);
    const filteredMeals = sortedMeals.filter(meal =>
      meal.strCategory === ExampleCategory);
    console.log(`Meals in category "${ExampleCategory}":`);
    console.log(filteredMeals.map(meal => meal.strMeal));
    const categoryAmount = allMeals.reduce((acc, meal) => {
      const category = meal.strCategory;
      acc[category] = (acc[category] || 0) + 1;
      return acc;},
      {});
    console.log("Number of meals per category:");
    console.log(categoryAmount);
  })
  .catch(error => console.error("Error:", error));




