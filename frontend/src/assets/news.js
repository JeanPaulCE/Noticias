const fs = require("fs");
let res = require("./res.json");
let cat = [
  "Acción",
  "Aventura",
  "Aventura Gráfica",
  "Consola Virtual",
  "Deportes",
  "Estrategia",
  "Lucha",
  "Multijugador Online",
  "Musical",
  "Plataformas",
  "Puzzle",
  "Realidad Virtual",
  "Rol",
  "Shooter",
  "Simulación",
  "Velocidad",
  "Xbox Live Arcade",
];
let count = 0;
let out = [];
res.news.forEach((element) => {
  element_ = element;
  let catefory = cat[Math.round(Math.random() * (16 - 0) + 0)];
  element_.category = catefory;
  out[count] = element_;
  count++;
});

let data = JSON.stringify({ news: out });
fs.writeFileSync("res-out.json", data);
