const letters = "abcdefghijklmnopqrstuvwxyz".split("");
Promise.all(
  letters.map(letter =>
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=`)
      .then(response => response.json())
      .then(data => data.meals || [])
  )
)
  .then(allMealsArrays => {
    const allMeals = allMealsArrays.flat();
    const first5Names = allMeals
      .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
      .slice(0, 5)
      .map(meal => meal.strMeal);
    console.log("First 5 meals in order a-z:");
    console.log(first5Names);
  })
  .catch(error => console.error("Error:", error));
