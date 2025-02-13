function generateExcuse() {
  let who = ["El perro", "Mi madre", "El cartero", "Mi pájaro"];
  let action = ["se comió", "orinó sobre", "aplastó", "rompió"];
  let what = ["mis deberes ", "mi ps5", "el coche"];
  let when = [
    "antes de clase",
    "en la siesta ",
    "mientras estaba en el futnol",
    "en la comida",
  ];

  let excuse = `${who[Math.floor(Math.random() * who.length)]} 
                ${action[Math.floor(Math.random() * action.length)]} 
                ${what[Math.floor(Math.random() * what.length)]} 
                ${when[Math.floor(Math.random() * when.length)]}`;

  document.getElementById("excuse").innerHTML = excuse;
}
