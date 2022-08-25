
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
        precio.innerText = precio.cotizar()      
    } else {
        alert("⛔️ Elige alguna oferta.")
    }

}


btnCotizar.addEventListener("click", realizarCotizacion)
