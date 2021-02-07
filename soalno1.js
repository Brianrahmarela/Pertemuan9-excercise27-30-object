//soal no 1
let hewan = {
  nama: "kucing",
  kaki: 4,
  warna: ["orange"],
  spesies: "mamalia",
  makanan: ["ikan"],
  keahlian: ()=> {
    return "tidur";
  },
};

console.log(`Nama: ${hewan.nama}`);
console.log(`Kaki: ${hewan.kaki}`);
console.log(`Spesies: ${hewan.spesies}`);
console.log(`Warna: ${hewan.warna[0]}`);
console.log(`Makanan: ${hewan.makanan[0]}`);
console.log( `keahlian: ${hewan.keahlian()}`);