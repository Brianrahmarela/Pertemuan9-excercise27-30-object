let car = {
  //property
  //key(nama:) value(Ferarri)
  nama: "Ferarri",
  year: 2021,
  isStart: true,
  komponen: ["ban","stir","mesin",4],

//   //nested object
  komponen2: {
    ban:4,
    wiper: 2,
  },

  let buah = [
    {nama: "apel", warna: "merah"},
    {nama: "jeruk", warna: "orange"},
    {nama: "pear", warna: "kuning"},
    {nama: "semangka", warna: "hijau"},
  ]

  //method
  engineStart: ()=>{
    return "brum brum";
  },
};

// console.log(car);
// console.log(car.komponen[0]);
// console.log(car.year);
// console.log(car.komponen2.ban);
// console.log(car.engineStart());

// //array isinya object
// console.log(car);
let buah = [
  {nama: "apel", warna: "merah"},
  {nama: "jeruk", warna: "orange"},
  {nama: "pear", warna: "kuning"},
  {nama: "semangka", warna: "hijau"},
]
// console.log(buah[nama.warna]);
function iterate(item){
  console.log(item.nama);
}

console.log(buah.forEach(iterate));

buah.forEach((item) => {
  
  console.log("item dalam buah :", item.warna);
});

buah.map()

// pass by
let number ={
  num1: 1,
  num2: 2,
}
console.log(number, num1);
console.log(number, num2);

const changeNum = (number) => {
  (number.num1 = 10),
  (number.num1 = 20);
}

changeNum(number);
console.log(number1, num2);

let buah = [
  {
    nama: 'pisang'
  }
]