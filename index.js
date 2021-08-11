// function tampilAngka(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   return tampilAngka(n - 1);
// }
// tampilAngka(10);

// function faktorial(n) {
//   if (n === 0) return 1;
//   return n * faktorial(n - 1);
// }
// console.log(faktorial(5));
//splice(indexAwal , mauDihapusBerapa)

var arr = ["fachrul", "galih", "nova"];
arr.splice(2, 0, "doddy");
console.log(arr.join(" - "));
