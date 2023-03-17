function checkEmail(email) {
  if (!email) {
    return "Error: Parameter kosong";
  }

  if (typeof email !== "string") {
    return "Error: Parameter harus berupa string";
  }

  if (!email.includes("@")) {
    return "Error: Tidak ada unsur email";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkEmail(3322));
console.log(checkEmail());
