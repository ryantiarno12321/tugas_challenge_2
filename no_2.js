function checkTypeNumber(givenNumber) {
  if (givenNumber % 2 == 0 && typeof givenNumber == "number") {
    return "GENAP";
  } else if (givenNumber % 2 !== 0 && typeof givenNumber == "number") {
    return "GANJIL";
  } else if (givenNumber == null) {
    return "Error: Bro Where is the parameter?";
  } else {
    return "Error: Invalid Data Type";
  }
}
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
