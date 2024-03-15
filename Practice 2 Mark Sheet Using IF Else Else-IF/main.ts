let PhysicsNumber : number = 70;
let ChemistryNumber : number = 75;
let MathNumber : number = 88;
let islmiatNumber : number = 85;
let PakstudiesNumber : number = 80;

let totalNumber = 500;
let obtainedMarks =PhysicsNumber + ChemistryNumber + MathNumber + islmiatNumber + PakstudiesNumber;
let TotalPercentage = (obtainedMarks / totalNumber) * 100;

console.log("Mark Sheet");
console.log("Physics Marks:", PhysicsNumber);
console.log("Chemistry Marks:", ChemistryNumber);
console.log("Mathematics Marks:", MathNumber);
console.log("Islamiat Marks:", islmiatNumber);
console.log("PakStudies Marks:", PakstudiesNumber);
console.log("Total Marks", totalNumber);
console.log("Obtained Marks:", obtainedMarks);
console.log("Percentage:", TotalPercentage.toFixed(2) + "%");

if (TotalPercentage >= 80){

    console.log("Grade A+");
} else if (TotalPercentage >= 70){

    console.log("Grade A");
}  else if (TotalPercentage >= 60){

    console.log("Grade B");
} else if (TotalPercentage >= 50){

    console.log("Grade C");
}  else if (TotalPercentage >= 40){

    console.log("Grade F");
}  




