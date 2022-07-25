let usuario = ""
let password = ""
let login = false

/*debugger*/

while ( login === false){
    usuario = prompt ("Ingresa tu usuario:")
    password = prompt ("Ingresa tu contraseña:")
    if( usuario === "Andrea" && password === "3045"){
        console.log ("Bienvenido", usuario)
        login= true
    } else{
        alert("No se reconoce usuario y/o contraseña")
    }

    let limite = parseInt(prompt( "Ingrese un numero:"))
    for( let i = 0; i < limite; i = i + 1){
        console.log("Iterando la vez numero:",i)
    }
}