function calculateAverage() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const value3 = parseFloat(document.getElementById('value3').value);
    const value4 = parseFloat(document.getElementById('value4').value);

    const average = (value1 + value2 + value3 + value4) / 4;
    document.getElementById('result').innerText = `El promedio es: ${average}`;
}

function checkEquality() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const value3 = document.getElementById('value3').value;
    const value4 = document.getElementById('value4').value;

    const values = [value1, value2, value3, value4];
    const allEqual = values.every(val => val === values[0]);

    document.getElementById('result').innerText = allEqual ? 'Todos los valores son iguales' : 'Los valores son distintos';
}

function findMax() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const value3 = parseFloat(document.getElementById('value3').value);
    const value4 = parseFloat(document.getElementById('value4').value);

    const maxValue = Math.max(value1, value2, value3, value4);
    document.getElementById('result').innerText = `El valor mayor es: ${maxValue}`;
}
