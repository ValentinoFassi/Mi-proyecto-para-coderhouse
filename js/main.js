const inc = document.querySelector("#inc")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    inc.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    inc.classList.remove("visible");
})