function convertToRoman(num) {
  if (num === 0) return "";

  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let res = "";

  for (let i = 0; i <= 6; i++) {
    let symbol = obj[i][0];
    let value = obj[i][1];

    while (num >= value) {
      res += symbol;
      num -= value;
    }
  }

  return res;
}

module.exports = convertToRoman;
