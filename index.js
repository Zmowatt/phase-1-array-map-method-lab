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


const titleCased = () =>{
  return tutorials.map((tutorial) => {
    const words = tutorial.split(' ');
    const upperCasedWords = words.map((word) =>{
      const upperCaseLetter = word.charAt(0).toUpperCase();
      const lowerCaseLetters = word.slice(1);
      return upperCaseLetter + lowerCaseLetters;
    });
    return upperCasedWords.join(' ');
  })
}