

//debugger//

const iva = 1.21

function IngreseNombre(){
    alert ("BIENVENIDO A TOP SYSTEMS")
    let nombre = prompt("Ingrese su nombre:");
    while(nombre === "" || nombre === "null"){
        nombre = prompt("Ingrese su nombre");
    }
}


 function mostrarProducto(){
 
  let producto= prompt("Ingrese el producto del que desea saber el precio final: \n1)Notebook 14 pulgadas \n2)Notebook Gauser \n3)Notebook Dell");

     while(producto ==="" || producto != 1 && producto !=2 && producto !=3)
        producto =  prompt("Ingrese el producto del que desea saber el precio final: \n1)Notebook 14 pulgadas \n2)Notebook Gauser \n3)Notebook Dell"); 

     switch (producto){
        case "1":
            return "Notebook 14 pulgadas";

        case "2":
            return "Notebok Gauser";
           
        case "3":
            return "Notebook Dell";   
     }
}

function validarPrecio(producto){
   if (producto === "Notebook 14 pulgadas"){
    return 100000
   } else if (producto === "Notebook Gauser"){
    return 150000
   } else {
    return 200000
   }
}

function precioFinal(producto,precio){
   alert("El producto elegido es:" + (producto) + "\n Precio final $" + (precio * iva));
}

IngreseNombre();
 let productoSeleccionado = mostrarProducto();
 let precioprod = validarPrecio(productoSeleccionado);
 precioFinal(productoSeleccionado,precioprod);


