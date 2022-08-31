
const cargarCombo = (select, array)=> { 
    if (array.length > 0) {
        array.forEach(elemento=> {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        });
    } else {
        console.error("No existe el producto :(")
        btnCotizar.disabled = true
    }
}

cargarCombo(prodPerf, datosprodPerf)
cargarCombo(prodFarm, datosprodFarm)

const productoElegido = ()=> { 
    if (prodPerf.value !== "..." && prodFarm.value !== "..." ) {
        return true
    } else {
        return false 
    }
}


const realizarCotizacion = ()=> {
    if (productoElegido()) {
        const precio = new Cotizador(desc1.value, parseFloat(prodPerf.value), parseFloat(prodFarm.value))
        console.log(precio.cotizar())
        importe.innerText = precio.cotizar() 
        btnEnviar.classList.remove("ocultar")
    
    } else {  
        alert("⛔️ Elige alguna oferta.")
    }

}
const precioEstimado = ()=> { 
    const cotizacion = {precioEstimado: importe.innerText
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    alert("✅ Cotización enviada. ¡Muchas gracias por elegirnos!")
    btnEnviar.classList.add("ocultar")
}


btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", precioEstimado )

if (carrito.length === 0) {
    console.log("El carrito está vacío!")
  }
   
  carrito.length === 0 && console.log("El carrito está vacío!")
 

                                           