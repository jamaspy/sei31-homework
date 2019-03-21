//Strings
//DrEvil
const DrEvil = function(amount) {
  if (amount == 1000000) {
    console.log(`${amount} dollars (pinky)`);
  } else {
    console.log(`${amount} dollars`);
  };
};

DrEvil(10);
DrEvil(1000000);

//mixUp
const mixUp = function(str1, str2) {
  const strOneStart = str1.split(0, 1);
  const strOneEnd = str1.split(1);

  const strTwoStart = str2.split(0, 1);
  const strTwoEnd = str2.split(1);

  const mixOne = strOneStart += strTwoEnd;
  const mixTwo = strTwoStart += strOneEnd;

  console.log(`${mixOne}, ${mixTwo}`);
};

mixUp('mix', 'pod');
mixUp('dog', 'dinner');

//fixStart
const fixStart = function(string) {
  const firstLetter = string.charAt(0);
  const restOfWord = string.slice(1);
  const newString = firstLetter += repString;
  let repString = i;
  for (i = 1, i < string.length, i++) {
    if (restOfWord[i] === firstLetter) {
      restOfWord[i] = "*"
    } else {};
  };
  console.log(`${newString}`);
};

fixStart('babble');
fixStart('testy mctestyface');
