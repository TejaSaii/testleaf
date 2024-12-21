function launchBroswer(browserName) {
  if(browserName === 'chrome'){
    console.log("Chrome");
  }
  else console.log("Other than chrome");
}

function runTests(testType){
  switch(testType){
    case 'sanity':
      console.log('sanity');
      break;
    case 'regression':
      console.log('regression');
      break;
    default: 
      console.log('smoke');
  }
}

launchBroswer('chrome');
launchBroswer('something else');
console.log("---------------");
runTests('sanity');
runTests('regression');
runTests('something else');

