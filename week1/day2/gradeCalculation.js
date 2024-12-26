function gradeCalculation(marks) {
  switch(true){
    case (marks < 30):
      console.log('Grade F');
      break;
    case (marks >=30 && marks < 40):
      console.log('Grade E');
      break;
    case (marks >= 40 && marks < 50):
      console.log('Grade D');
      break;
    case (marks >= 50 && marks < 60):
      console.log('Grade C');
      break;
    case (marks >= 60 && marks < 70):
      console.log('Grade B');
      break;
    case (marks >= 70 && marks < 90):
      console.log('Grade A');
      break;
    default:
      console.log('Grade S');
  }
}


gradeCalculation(20);
gradeCalculation(85);
gradeCalculation(35);
