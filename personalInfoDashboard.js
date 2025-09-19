// Declare the following variables using appropriate keywords (let or const):
// firstName: string — your first name
// lastName: string — your last name
// birthYear: number — your birth year
// currentYear: number — this year (2025)
// isStudent: boolean — true or false
// hobbies: array of at least 3 strings
// contact: object with keys email, phone, city
//    Log the following sentences
// “Hi, my name is {firstName} {lastName}. I live in {city}.”
// “I am {currentYear - birthYear} years old and currently {isStudent ? "a student" : "not a student"}.”


const firstName = "Anna"
const lastName = "Adonts"
const birthYear = 2002
const currentYear = 2025
const isStudent = true
const hobbies = ["watching movies", "swimming", "running"]
const info = {
    "email": "name.lastname@gmail.com",
    "phone": "+12345678",
    "city": "Yerevan"

}

console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${info["city"]}\nI am ${currentYear-birthYear} years old and currently ${isStudent ? "a student":"not a student"}`)



// Type Coercion & Comparison
//        Add two variables:
//  ageString = "25" (string)
// ageNumber = 25 (number)
//        Use both == and === to compare them and log the results
//        Log the data types of both variables.

let ageString = "25";
let ageNumber = 25;

console.log("ageString == ageNumber:", ageString == ageNumber); 
console.log("ageString === ageNumber:", ageString === ageNumber); 


// Create a variable score (number between 0 and 100).
//    Write an if...else if...else block to print:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: below 6

let score = 50;
let grade = "";

    if (score >= 90 && score <= 100) {
    grade = "A";
    } else if (score >= 80 && score <= 89) {
    grade = "B";
    } else if (score >= 70 && score <= 79) {
    grade = "C";
    } else if (score >= 60 && score <= 69) {
    grade = "D";
    } else {
    grade = "F";
    }

console.log(`Your grade: ${grade}`);

// Use a switch statement to print a message based on the grade:
// A → “Excellent work!”
// B → “Good job!”
// C → “Keep improving.”
// D → “Try harder.”
// F → “Needs serious effort.”
let message = "";
    switch (grade) {
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;
    case "C":
        message = "Keep improving.";
        break;
    case "D":
        message = "Try harder.";
        break;
    case "F":
        message = "Needs serious effort.";
        break;
    }

console.log(message);

//  Use a ternary operator to print:
// “You passed.” if grade is C or above
// Otherwise, “You failed.”

let gradeMessage = grade === "C" || grade === "A" || grade === "B"? "You passed.": "You failed."

console.log(gradeMessage)