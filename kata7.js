/*
Create a function which returns how many Friday 13ths there are in a given year.
Examples
howUnlucky(2020) ➞ 2
howUnlucky(2026) ➞ 3
howUnlucky(2016) ➞ 1
*/

const howUnlucky = (year) => {
  const date = new Date(Date.UTC(year, 0, 13));

  let friday13 = 0;
  for (let i = 0; i < 12; i++) {
    date.setUTCMonth(i);
    if (date.getUTCDay() === 5) {
      friday13++;
    }
  }

  return friday13;
};

console.log(howUnlucky(2020)); // ➞ 2
console.log(howUnlucky(2026)); // ➞ 3
console.log(howUnlucky(2016)); // ➞ 1
