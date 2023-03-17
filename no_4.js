function isValidPassword(email) {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var email;

  if (
    email.match(lowerCaseLetters) &&
    email.match(upperCaseLetters) &&
    email.match(numbers) &&
    email.length >= 8
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isValidPassword("Meong2021");
isValidPassword("meong2021");
isValidPassword("@eong");
isValidPassword("Meong2");
isValidPassword(0);
isValidPassword();
