//makeAMeal = Function name; Order = Parameter Name;
function makeAMeal(order: string): string {
    return order + " $15.00";
};
//call the function with the order
let firstOrder = makeAMeal("Two double cheese burgers, onion rings, and Root Beer");
let secondOrder = makeAMeal("Spicy chicken sandwich, fries, and Dr. Pepper");
let thirdOrder = makeAMeal("10 piece chicken nugget, fries, and Pepsi");

console.log(firstOrder);
console.log(secondOrder);
console.log(`To Go Order for Mars: ${thirdOrder}`);
