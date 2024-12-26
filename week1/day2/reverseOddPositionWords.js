function reverseOddPositionWords(input) {
  const inputArr = input.split(' ');
  for(let i = 0; i < inputArr.length; i++){
    if(i % 2 !== 0){
      inputArr[i] = reverseWord(inputArr[i]);
    }
  }

  return inputArr.join(' ');
}

function reverseWord(input) {
  return input.split('').reverse().join('');
}

console.log(reverseOddPositionWords('I am a software tester in testleaf'));
