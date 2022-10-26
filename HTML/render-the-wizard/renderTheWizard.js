
const personOne = {
firstName: "Harry ",
lastName: "Potter",
hairColor: "Black",
};

const personTwo = {
    firstName: "Hermione ",
    lastName: "Granger",
    hairColor: "Brown",
};

const personThree = {
    firstName: "Ron ",
    lastName: "Weasley",
    hairColor: "Red",
};

const personOneElement = document.getElementById("personOne");
const personTwoElement = document.getElementById("personTwo");
const personThreeElement = document.getElementById("personThree");

console.log(personOne);
console.log(personTwo);
console.log(personThree);

personOne.hairColor = "color: black";
personTwo.hairColor = "color: brown";
personThree.hairColor = "color: red";

personOneElement.style = personOne.hairColor;
personTwoElement.style = personTwo.hairColor;
personThreeElement.style = personThree.hairColor;

personOneElement.innerHTML = personOne.firstName + personOne.lastName;
personTwoElement.innerHTML = personTwo.firstName + personTwo.lastName;
personThreeElement.innerHTML = personThree.firstName + personThree.lastName;

