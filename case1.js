// Case 1 - Student Score Analysis
let studentName = "Andi";
let assignment = 80;
let midterm = 75;
let finalExam = 90;

// Final score = 30% assignment + 30% midterm + 40% final exam
let finalScore = assignment * 0.3 + midterm * 0.3 + finalExam * 0.4;

// Status: passing score is 70
let status = finalScore >= 70 ? "Passed" : "Failed";

// Category: >= 85 Excellent, >= 70 Good, otherwise Failed
let category = finalScore >= 85 ? "Excellent" : finalScore >= 70 ? "Good" : "Failed";

console.log(`Student: ${studentName}`);
console.log(`Assignment: ${assignment}`);
console.log(`Midterm: ${midterm}`);
console.log(`Final Exam: ${finalExam}`);
console.log(`Final Score: ${finalScore}`);
console.log(`Status: ${status}`);
console.log(`Category: ${category}`);