


function register() {
    var user = document.getElementById("user").value;
    var contra = document.getElementById("passw").value;
    var rol = document.getElementById("rol").value;

    var table = document.getElementsByTagName('table')[0];


    var fila = table.insertRow(1);

    var celda1 = newRow.insertCell(0);
    var celda2 = newRow.insertCell(1);
    var celda3 = newRow.insertCell(2);

    celda1.innerHTML = usuario;
    celda2.innerHTML = contrasenia;
    celda3.innerHTML = rol;