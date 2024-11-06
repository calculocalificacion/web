function calcularPromedio() {
    const cal1 = parseFloat(document.getElementById('calificacion1').value);
    const cal2 = parseFloat(document.getElementById('calificacion2').value);
    const cal3 = parseFloat(document.getElementById('calificacion3').value);
    
    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        document.getElementById('resultado').innerText = 'Por favor ingrese valores válidos.';
        return;
    }
    
    const promedio = (cal1 + cal2 + cal3) / 3;
    document.getElementById('resultado').innerText = 'El promedio es: ' + promedio.toFixed(2);
}
