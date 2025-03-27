// 2 užduotis - filmų rekomendacija +:
// ● Padarykite funkciją, kuri iš visų esamų filmų sąrašo (kuris gali būti bet kada
// papildomas), pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų.
// Jei joks filmas netinka, turi tai pranešti.
// ● Jei vietoj įverčio arba žanro yra pateikiamas žodis ‘nesvarbu’, yra pateikiami filmai pagal
// tą kriterijų, kuris yra svarbus.
// ● Jei abu kriterijai yra nesvarbūs, parekomenduokite top 3 įvertintus filmus.

const filmai = [
  {
    pavadinimas: 'Pabėgimas iš Šoušenko',
    zanras: 'Drama',
    imdb_ivertinimas: 9.3,
  },
  {
    pavadinimas: 'Forrestas Gampas',
    zanras: 'Drama',
    imdb_ivertinimas: 8.8,
  },
  {
    pavadinimas: 'Pradžia',
    zanras: 'Mokslinė fantastika',
    imdb_ivertinimas: 8.8,
  },
  {
    pavadinimas: 'Tamsos riteris',
    zanras: 'Veiksmo',
    imdb_ivertinimas: 9.0,
  },
  {
    pavadinimas: 'Parazitas',
    zanras: 'Trileris',
    imdb_ivertinimas: 8.6,
  },
  {
    pavadinimas: 'Didysis Budapešto viešbutis',
    zanras: 'Komedija',
    imdb_ivertinimas: 8.1,
  },
  {
    pavadinimas: 'Išvarymas',
    zanras: 'Siaubo',
    imdb_ivertinimas: 7.5,
  },
  {
    pavadinimas: 'Stebuklingi Šihiros nuotykiai Dvasių pasaulyje',
    zanras: 'Animacija',
    imdb_ivertinimas: 8.6,
  },
  {
    pavadinimas: '12 įtūžusių vyrų',
    zanras: 'Kriminalinis',
    imdb_ivertinimas: 9.0,
  },
  {
    pavadinimas: 'Tarp žvaigždžių',
    zanras: 'Nuotykių',
    imdb_ivertinimas: 8.7,
  },
  {
    pavadinimas: 'Titanikas',
    zanras: 'Romantinis',
    imdb_ivertinimas: 7.9,
  },
];
