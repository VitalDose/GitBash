
// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

1.
// let age_1 = 18
// let age_2 = 60

// checkAge = function(age) {
// if (age < age_1) {
//     console.log("You dont have access cause your age is", + age, "Its less then", age_2)
// } else if (age >=  age_1 && age <  age_2) {
//     console.log("Welcome")
// } else if (age  > age_2) {
//     console.log("Keep calm and look Culture channel")
// } else {
//     console.log("Technical work")
// }
// }

// checkAge(17)
// checkAge(18)
// checkAge(61)

2.
// let age_1 = 18
// let age_2 = 60

// checkAge = function(age) {
// if (typeof age == "number") {   
//     if (age < age_1) {
//     console.log("You dont have access cause your age is", + age, "Its less then", age_2)
//     } else if (age >=  age_1 && age <  age_2) {
//     console.log("Welcome")
//     } else if (age  > age_2) {
//     console.log("Keep calm and look Culture channel")
//     } else {
//     console.log("Technical work")
//     } 
// } else 
//     console.log ("ne namber")  
// }
// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge("Valera")

3.
// let age_1 = 18
// let age_2 = 60

// checkAge = function(age) {
// if (age && !isNaN(age)) {   
//     if (age < age_1) {
//     console.log("You dont have access cause your age is", + age, "Its less then", age_2)
//     } else if (age >=  age_1 && age <  age_2) {
//     console.log("Welcome")
//     } else if (age  > age_2) {
//     console.log("Keep calm and look Culture channel")
//     } else {
//     console.log("Technical work")
//     } 
// } else 
//     console.log ("ne namber")  
// }
// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge("Valera")
// checkAge("53")
// checkAge("0")

let age_1 = 18
let age_2 = 60

checkAge = function(age) {
if (age && !isNaN(age)) {   
    if (age < age_1) {
    alert("You dont have access cause your age is", + age, "Its less then", age_2)
    } else if (age >=  age_1 && age <  age_2) {
    alert("Welcome")
    } else if (age  > age_2) {
    alert("Keep calm and look Culture channel")
    } else {
    alert("Technical work")
    } 
} else 
    alert ("ne namber")  
}

let a = prompt("Enter your age")

checkAge (a)