function getAngkaTerbesarKedua(dataNumbers) {
  if (!Array.isArray(dataNumbers)) {
    return "Parameter harus berupa array";
  }
  if (!dataNumbers || dataNumbers.length === 0) {
    return "Parameter tidak boleh kosong";
  }
  if (dataNumbers.length < 2) {
    return "Array harus memiliki minimal 2 angka";
  }
  const uniqueNumbers = [...new Set(dataNumbers)];
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);
}

const dataNumbers = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataNumbers));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
