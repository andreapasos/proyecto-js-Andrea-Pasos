const cargarCombo=(r,a)=>{a.length>0?a.forEach((a=>{r.innerHTML+=`<option value="${a.factor}">${a.tipo}</option>`})):btnCotizar.disabled=!0};cargarCombo(prodPerf,datosprodPerf),cargarCombo(prodFarm,datosprodFarm);const productoElegido=()=>"..."!==prodPerf.value&&"..."!==prodFarm.value,realizarCotizacion=()=>{if("..."!==prodPerf.value&&"..."!==prodFarm.value){const r=new Cotizador(desc1.value,parseFloat(prodPerf.value),parseFloat(prodFarm.value));r.innerText=r.cotizar()}else alert("⛔️ Elige alguna oferta.")};btnCotizar.addEventListener("click",realizarCotizacion);