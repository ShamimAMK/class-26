"use strict";
//Math.random()
// console.log(Math,floor(Math.random()*100)+1);
const randomPassGen = (digitLimit = 8) => {
  const materiels =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789!@#%$*";

  let pass = "";

  for (let i = 0; i <= digitLimit; i++) {
    pass += materiels[Math.ceil(Math.random() * materiels.length - 1)];
  }

  return pass;
};

console.log(randomPassGen(8));
