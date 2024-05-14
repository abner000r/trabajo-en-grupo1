function compararSumaMultiplicacion() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var num3 = parseInt(document.getElementById("numero3").value);
    var num4 = parseInt(document.getElementById("numero4").value);
  
    var suma = num1 + num2;
    var multiplicacion = num3 * num4;
  
    var resultado = "";
    if (suma > multiplicacion) {
      resultado = "La suma de los dos primeros números es mayor que la multiplicación de los dos últimos.";
    } else if (suma < multiplicacion) {
      resultado = "La suma de los dos primeros números es menor que la multiplicación de los dos últimos.";
    } else {
      resultado = "La suma de los dos primeros números es igual a la multiplicación de los dos últimos.";
    }
  
    document.getElementById("resultados").innerHTML = resultado;
  }
  
  function compararIgualdad() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var num3 = parseInt(document.getElementById("numero3").value);
    var num4 = parseInt(document.getElementById("numero4").value);
  
    var resultado = "";
    if (num1 === num2 && num2 === num3 && num3 === num4) {
      resultado = "Todos los números son iguales.";
    } else {
      resultado = "Los números son distintos.";
    }
  
    document.getElementById("resultados").innerHTML = resultado;
  }
  
  function mostrarPares() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var num3 = parseInt(document.getElementById("numero3").value);
    var num4 = parseInt(document.getElementById("numero4").value);
  
    var suma = num1 + num2 + num3 + num4;
    var promedio = suma / 4;
  
    var pares = "";
    for (var i = 2; i <= promedio; i++) {
      if (i % 2 === 0) {
        pares += i + ", ";
      }
    }
  
    document.getElementById("resultados").innerHTML = "Números pares entre 2 y el promedio de la suma: " + pares;
  }
  