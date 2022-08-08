


 function ListarProductos(){
    //debugger//

    for( let i=0 ; i<productos.length; i++){
        console.log(productos[i])
    }
 }

 function AgregarProducto(){
    let nuevoProducto = prompt("Ingrese nuevo producto:")
    let resultado = productos.includes(nuevoProducto)
    if(!resultado){
    productos.push(nuevoProducto)
    }else{
        console.warn("El producto", nuevoProducto,"ya figura en la lista")
    }
}
function quitarProducto(){
    let aQuitar = prompt("Ingrese el producto a quitar:")
    let indice = productos.indexOf(aQuitar)
    if(indice!== -1){
    let resultado = productos.splice(indice, 1)
    console.warn("Se ha eliminado el producto:", resultado)
    }else{
    console.error("No se encontro el producto:", aQuitar)
    }
}
