const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(stringElement => {
    return stringManip(stringElement); // datatype: string
  })
}

function stringManip(string) {
  const arrayOfEachWord = string.split(" "); // datatype: string to array

  return arrayOfWords(arrayOfEachWord).join(' '); // datatype: array to string AFTER invoking arrayOfWords()
}

function arrayOfWords(array) {
  // const newArray = []; // .map potential
  // for(const element of array) {
  //   const newElement = element.toUpperCase().substring(0, 1) + element.slice(1);
  //   newArray.push(newElement);
  // }
  // return newArray;

  // .map attempt
  return array.map(element => {
    return element.toUpperCase().substring(0, 1) + element.slice(1) // returns a string element and places into copied array
  }) // returns an array
}

// stringManip(tutorials[0]);

// titleCased();
console.log(titleCased());