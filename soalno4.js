let buahData =[
  {
      nama: "Appel",
      warna: "Merah",
      namaLatin: "Malus sylvestris",
      tipeBiji: "Dikotil",
      gambarBuah: "https://image.freepik.com/free-photo/fresh-red-apples_93675-30209.jpg"
  },
  {
      nama: "Mangga",
      warna: "Hijau",
      namaLatin: "Mangifera indica",
      tipeBiji: "Dikotil",
      gambarBuah: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/12/30/4149872808.jpg"
  },
  {
      nama: "Stroberi",
      warna: "Merah",
      namaLatin: "Fragaria",
      tipeBiji: "Dikotil",
      gambarBuah: "http://2.bp.blogspot.com/-Br373URsb-U/UYuf6YbscSI/AAAAAAAAABc/U0kxf1pUVeg/s1600/strawberry+matang.jpg"
  },
  {
      nama: "Jambu",
      warna: "Hijau",
      namaLatin: "Psidium Guajava",
      tipeBiji: "Dikotil",
      gambarBuah: "https://mmc.tirto.id/image/otf/1024x535/2019/06/17/jambu-iji-istockphotoo_ratio-16x9.jpg"
  },
  {
      nama: "Pisang",
      warna: "Kuning",
      namaLatin: "Musa Sp",
      tipeBiji: "Monokotil",
      gambarBuah: "https://img-o.okeinfo.net/content/2020/05/15/298/2214844/ciri-ciri-pisang-matang-sempurna-bReK2YGBA0.jpg"
  },
  {
      nama: "Jeruk",
      warna: "Orange",
      namaLatin: "Citrus",
      tipeBiji: "Dikotil",
      gambarBuah: "https://s2.bukalapak.com/img/2118773951/s-330-330/Bibit_Benih_Seeds_Buah_Jeruk_Mandarin_Ponkam_Manis_Orange_Fr.jpg.webp"
  },
  {
      nama: "Lemon",
      warna: "Kuning",
      namaLatin: "Sitrun",
      tipeBiji: "Dikotil",
      gambarBuah: "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg"
  },
  {
      nama: "Kiwi",
      warna: "Coklat",
      namaLatin: "Actinidia",
      tipeBiji: "monokotil",
      gambarBuah: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"
  },
]

//Hubungkan dom dgn html
let buahDom = document.querySelector("#buah");

let display = () => {
  console.log("tes");
  buahData.map((item) => {

    //buat element div baru
    let card = document.createElement('div');

    //isi datanya dgn template literal
    card.innerHTML = `
        <img class="card-img-top" height="210px" src="${item.gambarBuah}" alt="Card image cap">
        <h1>${item.nama}</h1>
        <h5>${item.warna}</h5>
        <h5>${item.namaLatin}</h5>
        <h5>${item.tipeBiji}</h5>
    
    `;
    //tambahkan class di tiap div baru
    card.classList.add("card");

    //tampilkan data
    buahDom.appendChild(card);
  })
}

display();