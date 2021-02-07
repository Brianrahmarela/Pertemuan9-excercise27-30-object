let data = [
  {
    name: "Alpha",
    class: "Dragon",
    club: ["Bola", "Bulutangkis"]
  },
  {
    name: "Beta",
    class: "Lizard",
    club: ["Membaca", "Bulutangkis"]
  },
]

// Tampilkanlah seperti ini
// Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis
// Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis

data.forEach((key) => {
  
  console.log(`${key.name} ada di kelas ${key.class}, dia mengikuti club ${key.club[0]}, ${key.club[1]}`);
});


