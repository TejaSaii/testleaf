function oddIndexToUppercase(input) {
  const arr = input.split('');
  for(let i = 0; i < arr.length; i++){
    if(i % 2 !== 0){
      arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join('');
}

console.log(oddIndexToUppercase('vanilla'));
