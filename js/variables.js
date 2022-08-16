const producto = ['Aspirinetas' , 'Bayaspirina' , 'Aziatop' , 'Regulacid' , 'Treg' , 'Geniol 1g' , 'Caramelos Fecofar', 'Bengue']
const carrito = []

const titulo = document.getElementById("titulo")
const parrafo = document.getElementById("parrafo")


const selectProductos = document.querySelector("select")


function textoDeBotones() { //debugger
    for (boton of buttons) {
        console.log(boton.innerText)
    }
}

function crearLista() {
    const ul = document.getElementById("lista")
          ul.innerHTML = "<li>Elemento 1</li><li>Elemento 2</li>"
}   


function cambiarFondo() {
    parrafo.className = "fondo-verde"

}


function cargarProductos() {
    //debugger
    const selectProducto = document.getElementById("selectProducto")
          selectProducto.innerHTML = ""
          productos.forEach(producto => {
            const option = document.createElement("option")
                  option.innerText = producto
                  selectProducto.append(option)
          })
}


