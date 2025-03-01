import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {

  let cardNumber = ["1", "2", "3", "4", "5", "6", "8", "9", "10", "J", "Q", "K"];
  let cardIcons = ['<i class="fa-solid fa-heart" style="color:red"></i>', '<i class="fa-solid fa-clover"></i>',
    '<i class="fa-solid fa-diamond" style="color:red"></i>', "♠"];

  let icons = cardIcons[Math.floor(Math.random() * cardIcons.length)];
  let num = cardNumber[Math.floor(Math.random() * cardNumber.length)];
  document.getElementById("numero").innerHTML = num;
  document.getElementById("figuraIzquierda").innerHTML = icons;
  document.getElementById("figuraDerecha").innerHTML = icons;

  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    let como = cardIcons[Math.floor(Math.random() * cardIcons.length)];
    let num = cardNumber[Math.floor(Math.random() * cardNumber.length)];
    document.getElementById("numero").innerHTML = num
    document.getElementById("figuraIzquierda").innerHTML = como
    document.getElementById("figuraDerecha").innerHTML = como
  })

  setInterval(() => {
    let como = cardIcons[Math.floor(Math.random() * cardIcons.length)];
    let num = cardNumber[Math.floor(Math.random() * cardNumber.length)];
    document.getElementById("numero").innerHTML = num
    document.getElementById("figuraIzquierda").innerHTML = como
    document.getElementById("figuraDerecha").innerHTML = como
  }, 10000);

  let ancho = document.getElementById("floatingAncho");
  let alto = document.getElementById("floatingAlto");
  ancho.addEventListener("change", () => {
    document.getElementById("card").style.width = `${ancho.value}px`;
    if (ancho.value.length === 0) {
      document.getElementById("card").style.width = "400px";
    }
    alto.addEventListener("change", () => {
      document.getElementById("card").style.height = `${alto.value}px`;
      if (alto.value.length === 0) {
        document.getElementById("card").style.height = "600px";
      }
    })
  })

};
