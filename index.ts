#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
    name:"Userguessednum",
    type:"number",
    message:"Please Enter your number"
}]);

const randomNumber = Math.floor(Math.random()* 6 + 1);
console.log(randomNumber);

if(randomNumber === answer.Userguessednum){
    console.log("Congratulation You Enter correct Number")
}else{
    console.log("You Enter wrong number please Try Again")
}