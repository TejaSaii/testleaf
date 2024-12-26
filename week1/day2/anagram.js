function anagram() {
  let string1 = 'brag';
  let string2 = 'grab';

  if(string1.length !== string2.length){
    console.log('Lengths mismatch, therefore strings are not an Anagram');
    return;
  }
  
  let arr1 = string1.split('').sort();
  let arr2 = string2.split('').sort();
  
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      console.log('Strings are not an anagram');
      return;
    }
  }
  console.log('Strings are Anagram');
}

anagram();
