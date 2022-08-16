

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

    const botonListar = document.querySelector(".button")
    const botonAgregar = document.querySelector(".button.button-grey")
    const botonBuscar = document.querySelector(".button.button-outline")
    const botonQuitar = document.querySelector(".button.button-delete")

botonListar.addEventListener("click", listarProductos)
botonAgregar.addEventListener("click", agregarProducto)
botonBuscar.addEventListener("click", buscarProducto)
botonQuitar.addEventListener("click", quitarProducto)