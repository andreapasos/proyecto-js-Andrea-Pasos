const titulo = document.getElementById("titulo")
const parrafo = document.getElementById("parrafo")
const botonGris = document.getElementsByClassName("button-grey")
const botones = document.getElementsByClassName("button")
const buttons = document.getElementsByTagName("button")

function textoDdeBotones(){
    for (let boton of buttons) {
        console.log(boton.innerText)
    }
}

function cambiarEncabezado(){
    titulo.innerText = "Ofertas Farmacia D"
    titulo.className = "fondo-verde"
    parrafo.innerText = "Elija ofertas"
}


crearLista()

const lista = document.getElementById("lista")

function crearLista() {
 
    productos.forEach(producto => {
            //debugger
            const li = document.createElement("li")
                  li.innerText = producto
                  lista.append(li)
                })
            }
    crearLista()        


    function listarProductos() {
        //debugger
        for (let i = 0; i < producto.length; i++) {
            console.log(productos[i])
        }
    }
    
    function agregarProducto() {
        let nuevoProducto = prompt("Ingresa el nuevo producto:")
        let resultado = productos.includes(nuevoProducto)
            if (!resultado) { 
                productos.push(nuevoProducto)
            } else {
                console.warn("El producto", nuevoProducto, "ya figura en la lista.")
            }
    }
    
    function quitarProducto() {
        //debugger
        let aQuitar = prompt("Ingrese el producto a eliminar:")
        let indice = productos.indexOf(aQuitar)
        if (indice !== -1) {
            let resultado = productos.splice(indice, 1)
            console.warn("Se ha eliminado el producto:", resultado)
        } else {
            console.error("No se ha encontrado el producto", aQuitar)
        }
    }