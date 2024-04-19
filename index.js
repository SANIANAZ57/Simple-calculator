#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter  your second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multipition", "Division"],
    },
]);
//condition statment
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multipition") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please wait valid answer");
}
console.log("Simple Calculater End");
