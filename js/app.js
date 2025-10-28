fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch response");
    }
    return response.json();
  })
  .then(data => {
    const sorted = data.categories.sort((a, b) =>
      a.strCategory.localeCompare(b.strCategory)
    );
    const first5 = sorted.slice(0, 5);
    console.log("First 5 categories in order:");
    first5.forEach(item => console.log(item.strCategory));
  })
  .catch(error => console.error("Error:", error));

