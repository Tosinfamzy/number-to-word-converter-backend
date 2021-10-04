const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

module.exports.getTexts = (req, res, next) => {
  //Throw an error if the input is a string
  const number = convertInputToLetter(req.body.text);
  return res.send({ number: number });
};

const convertInputToLetter = (number) => {
  let numberString;
  try {
    numberString = number.toString();
  } catch (error) {
    console.log(error);
    return [];
  }
  const numberArray = numberString.split("");

  let letterArray = numberArray
    .map((number) => {
      const letters = numberMap(number);
      if (letters !== []) {
        return letters;
      }
    })
    .reduce((previous, current) => {
      let mergedPreviousAndCurrent = [];
      if (previous === undefined || current === undefined ) {
          return []
      }
      previous.forEach((previousLetter) => {
        current.forEach((currentLetter) => {
          mergedPreviousAndCurrent.push(previousLetter + currentLetter);
        });
      });
      return mergedPreviousAndCurrent;
    });
  return letterArray;
};

const numberMap = (number) => {
  let numberString;
  try {
    numberString = number.toString();
  } catch (e) {
    console.log(e);
  }
  if (numberString in map) {
    return map[numberString];
  }
};
