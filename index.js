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

// var arr = ["fachrul", "galih", "nova", "agus", "asep"];
// arr.splice(2, 0, "doddy");
// console.log(arr.join(" - "));

// var arr2 = arr.slice(1, 3);
// console.log(arr2.join("-"));

// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["fachrul", "asep", "udin"];
// var cetak = function (e) {
//   console.log();
// };
// angka.forEach((e) => {
//   console.log(e);
// });

// nama.forEach((e, i) => {
//   console.log(`mahasiswa ke ${i} adalah ${e}`);
// });

// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map((e) => {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// var angka = [1, 2, 10, 3, 6, 20, 5, 7, 3];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

//filter mencari array banyak nilai dan mengembalikan array
//find mencari 1 nilai

// var angka2 = [1, 2, 10, 3, 6, 20, 5, 7, 3];
// var angka = angka2.find(function (a) {
//   return a > 5;
// });
// console.log(angka);

// var mhs = {
//   nama: "fachrul faathir",
//   umur: 31,
//   ips: [21, 34, 45, 56],
//   alamat: {
//     jalan: "Jl.abc no.24",
//     kota: "Bandung",
//     provinsi: "jawa baratt",
//   },
// };
// console.log(mhs.alamat.kota);

//this = menggunkan epxression akan mengembalikan objectnya

//membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert("angkot masih kosong");
      return penumpang;
    }

    for (var i = 0; i < penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("fachrul", ["bandung", "cirebon"], [], 0);
