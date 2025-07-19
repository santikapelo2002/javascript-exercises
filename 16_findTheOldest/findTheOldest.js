const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();

  let resultado = arr.reduce((acc, current) => {
    let accYears = (acc.yearOfDeath || currentYear) - acc.yearOfBirth;
    let currentYears = (current.yearOfDeath || currentYear) - current.yearOfBirth;

    return accYears > currentYears ? acc : current;
  });

  return resultado;
};


// Do not edit below this line
module.exports = findTheOldest;
