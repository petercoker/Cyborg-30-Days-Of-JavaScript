// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let input = prompt("Enter your score:");
if (Number.isNaN(input)) {
  alert("Please enter a valid number");
} else {
  let score = Number(input);
  switch (true) {
    case score >= 80 && score <= 100:
      alert("A");
      break;
    case score >= 70 && score <= 89:
      alert("B");
      break;
    case score >= 60 && score <= 69:
      alert("C");
      break;
    case score >= 50 && score <= 59:
      alert("D");
      break;
    case score >= 0 && score <= 49:
      alert("F");
      break;
    default:
      alert("Score out of range");
      break;
  }
}

// best practice
input = prompt("Enter your score:");
const score = Number(input);

if (Number.isNaN(score)) {
  alert("Please enter a valid number");
} else if (score >= 80 && score <= 100) {
  alert("A");
} else if (score >= 70 && score <= 79) {
  alert("B");
} else if (score >= 60 && score <= 69) {
  alert("C");
} else if (score >= 50 && score <= 59) {
  alert("D");
} else if (score >= 0 && score <= 49) {
  alert("F");
} else {
  alert("Score out of range");
}
