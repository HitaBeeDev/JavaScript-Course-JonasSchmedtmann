## 🚀 Coding Challenge 2:
```ruby
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
```

## 💡 Solution:
```ruby
const markWeights = 95;
const markHeight = 1.88;

const johnWeights = 85;
const johnHeight = 1.76;

const markBmi = markWeights / markHeight ** 2;
const johnBmi = johnWeights / johnHeight ** 2;

console.log(markBmi, johnBmi);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Mark's! (${markBmi})`);
}
```
