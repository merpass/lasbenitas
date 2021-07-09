function grabar() {
    var boton = document.querySelector('#guardar')
    boton.addEventListener('click', nuevaFeria)
    mostrarFeria()
}
function nuevaFeria(){
    var clave = document.querySelector('#clave').value
    var anotaciones = document.querySelector('#anotaciones').value
    var dia = document.querySelector('#dia').value
    var fecha = document.querySelector('#fecha').value

    var valores = [anotaciones, dia, fecha]
    localStorage.setItem(clave, valores)
    mostrarFeria()
    alert("Se ha guardado tu recordatorio")
}
function mostrarFeria(){
    var caja = document.querySelector('#mostrarDatos')
    for(var i=0; i<localStorage.length; i++){
        var id= localStorage.key(i)
        var valor = localStorage.getItem(id)

        caja.innerHTML += '<p>'+id+' - '+valor+'</p>'
        onclick="borrarTodo()"
    }
}

function borrarTodo(id) {
    localStorage.clear(id)
    location.reload()
    mostrarFeria()
    alert("Se ha borrado el recordatorio")

}
window.addEventListener('load', grabar)