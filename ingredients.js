const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents:
console.log("Ingredients");
let i = 0;
white(i < ingredients.lenth){
  console.log(ingredients.list[i]);
  i++;
}
// Write a for loop that prints out the contents of the ingredients 
console.log("Ingredients:");
for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// write any loop, while or for that prints out each item of ingredients but backwards


console.log("Ingredients:");
for (let i = 0; i < ingredients.length; i++){
  reverseMe(ingredients[i]);
  console.log(ingredients[i]);
}