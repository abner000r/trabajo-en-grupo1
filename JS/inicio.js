
function concatenar() {
    let uno = document.getElementById("txtuno").value;
    let dos = document.getElementById("txtdos").value;
    let tres = document.getElementById("txtres").value;
    let cuatro = document.getElementById("txtcuatro").value;
    let cinco = document.getElementById("txtcinco").value;
    document.getElementById("txt_resultado").innerHTML = uno + " " + dos + " " + tres + " " + cuatro + " " + cinco;
}

function calcularMayor() {
    let uno = document.getElementById("txtuno").value;
    let dos = document.getElementById("txtdos").value;
    let tres = document.getElementById("txtres").value;
    let cuatro = document.getElementById("txtcuatro").value;
    let cinco = document.getElementById("txtcinco").value;

    var textos = [uno, dos, tres, cuatro, cinco];
    var longitudMaxima = Math.max(...textos.map(texto => texto.length));
    var indiceTextoLargo = textos.findIndex(texto => texto.length === longitudMaxima);
    document.getElementById("txt_resultado").innerHTML = "Texto más grande es: " + textos[indiceTextoLargo];
}
function escribirUltimaLetra() {
    let uno = document.getElementById("txtuno").value;
    let dos = document.getElementById("txtdos").value;
    let tres = document.getElementById("txtres").value;
    let cuatro = document.getElementById("txtcuatro").value;
    let cinco = document.getElementById("txtcinco").value;

    var ultimaLetra = uno.slice(-1) + dos.slice(-1) + tres.slice(-1) + cuatro.slice(-1) + cinco.slice(-1);
    document.getElementById("txt_resultado").innerHTML = "La palabra secreta es: " + ultimaLetra;
}