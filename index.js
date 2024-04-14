const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];
function main() {
  const listaUl = document.querySelector(".lista");
  // console.log("listaUl: ", listaUl);
  const child = listaUl.querySelectorAll("li");
  // console.log("losLi: ", child);
  child.forEach((elemento) => {
    elemento.remove();
  });
  cosasQueAprendimos.forEach((objeto) => {
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = objeto.tema;
    nuevoLi.classList.add(objeto.class || "item");
    listaUl.appendChild(nuevoLi);
  });
}
main();

//   const listaUl = document.querySelector(".lista");
//   console.log("listaUl: ", listaUl);
//   listaUl.innerHTML = ""; // Eliminar elementos li existentes
//   cosasQueAprendimos.forEach((objetoActual) => {
//     const nuevoElementoLi = document.createElement("li");
//     nuevoElementoLi.textContent = objetoActual.tema;
//     if (objetoActual.class) {
//       nuevoElementoLi.className = objetoActual.class;
//     }
//     listaUl.appendChild(nuevoElementoLi);
//   });
// }
