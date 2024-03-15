var PhysicsNumber = 70;
var ChemistryNumber = 75;
var MathNumber = 88;
var islmiatNumber = 85;
var PakstudiesNumber = 80;
var totalNumber = 500;
var obtainedMarks = PhysicsNumber + ChemistryNumber + MathNumber + islmiatNumber + PakstudiesNumber;
var TotalPercentage = (obtainedMarks / totalNumber) * 100;
console.log("Mark Sheet");
console.log("Physics Marks:", PhysicsNumber);
console.log("Chemistry Marks:", ChemistryNumber);
console.log("Mathematics Marks:", MathNumber);
console.log("Islamiat Marks:", islmiatNumber);
console.log("PakStudies Marks:", PakstudiesNumber);
console.log("Total Marks", totalNumber);
console.log("Obtained Marks:", obtainedMarks);
console.log("Percentage:", TotalPercentage.toFixed(2) + "%");
if (TotalPercentage >= 80) {
    console.log("Grade A+");
}
else if (TotalPercentage >= 70) {
    console.log("Grade A");
}
else if (TotalPercentage >= 60) {
    console.log("Grade B");
}
else if (TotalPercentage >= 50) {
    console.log("Grade C");
}
else if (TotalPercentage >= 40) {
    console.log("Grade F");
}
