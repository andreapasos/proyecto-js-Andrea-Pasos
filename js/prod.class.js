class Producto {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return '$ ' + parseFloat((this.importe).toFixed(2))
    }
}