function creoID() { return parseInt(Math.random() * 100000) }

function agregarProductos() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del Producto:")
    let importe = parseInt(prompt("Ingresa el importe:"))
        productos.push(new Producto(id, descripcion, importe))
        console.table(productos)
}

function generadorAutomatico() {
    productos.push(new Producto(1234, "Aspirinetas", 125))
    productos.push(new Producto(2345, "Bayaspirina", 200))
    productos.push(new Producto(3456, "Aziatop", 365))
    productos.push(new Producto(4567, "Regulacid", 500))
    productos.push(new Producto(5678, "Treg", 250))
    productos.push(new Producto(6789, "Geniol 1G", 450))
    productos.push(new Producto(7890, "Caramelos Fecofar", 290))
    productos.push(new Producto(8901, "Bengue", 1100))
}

function generarCarrito() {
    carrito.push(new Producto(1234, "Aspirinetas", 125))
    carrito.push(new Producto(2345, "Bayaspirina", 200))
    carrito.push(new Producto(3456, "Aziatop", 365))
}
generadorAutomatico()
generarCarrito()

function recorrerElementos() {

    //debugger//
    for (let producto of productos) { 
        console.table(producto)
    }
    
}

function recorrerProductos() {
    //debugger//
    productos.forEach(elemento => {
        console.table(elemento)
    })
}

function buscarProducto() {
    let prod = prompt("Ingresa el producto a buscar:")
        //debugger//
        const resultado = productos.find(producto => producto.nombre === prod)
         console.table(resultado)
}

function filtrarProductos() {
    let prod = prompt("Ingresa el término a buscar:")
    //debugger
    const resultado = productos.filter(producto => producto.nombre.includes(prod))
     console.table(resultado)

}

function existeProducto() {
    let codigo = prompt("Ingresa el código de producto:")
    //debugger
    const resultado = productos.some(producto => producto.id === parseInt(codigo))
    console.log("Existe?", resultado)
}

function proyeccionIncremento(porcentaje) {
    let resultado = productos.map(producto => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
            proyeccion: producto.importe * porcentaje 
        }
    })
    console.table(resultado)
}

function calcularCarrito() {
    debugger
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, 0)
    console.log("Total a pagar: $", total)
}

function ordenarProductos() {
    console.clear()
    console.table(productos)
    debugger
    productos.sort((a, b) => {
        if (a.importe > b.importe) {
            return 1
        }
        if (a.importe < b.importe) {
            return -1
        }
        return 0
    })
    console.table(productos)
}