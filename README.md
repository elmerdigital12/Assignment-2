Javascript code flow works by executing from top to bottom.
const creates a variable that cannot be reassigned. .split splits all letters. It will search the api by every letter.
promise.all waits for fetch requests to complete.
letters.map will transform each array and then fetch all recepies from each letter.
.then response, if no meals are returned you will get no response.
.flat merges into a singular array
.sort localecompare sorts all meals in alphabetical order = SortedMeals
first5Meals is given same variable as sortedMeals
.slice(0, 5) then only takes meals 1-5.
.map then converts the array
console.log text then also first5Meals.
After the consolelog
const filteredMeals then it filters the examplecategory which was set as the same which is pasta, so it will show the recepies that contains pasta only.
then console.log it aswell as all of the recepies names of Pastas.
then const category amounts array and add counting.
add + 1 to make the count correct. count otherwise starts at 0.
then console log the message with the categoryamount
catch error if code fails it will print error message.



