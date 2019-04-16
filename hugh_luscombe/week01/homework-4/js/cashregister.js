const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const sum = (obj) => {
 let sum = 0;
 for (let i in obj) {
   if (obj.hasOwnProperty(i)) {
     sum += parseFloat(obj[i]);
   }
 }
 return sum;
}

const cashRegister = function(cart) {
  const total = sum(cart);
  console.log(total);
};

// const cashRegister = function(cart) {
//   const total = sum(cart);
//   console.log(total);
// };
//
// cashRegister(cartForParty);
