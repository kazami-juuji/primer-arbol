
const calcular = () => {
    
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    let operacion = document.getElementById('operacion').value;

    
    
    document.getElementById('operator').textContent = operacion;
    document.getElementById('value1').textContent = valor1;
    document.getElementById('value2').textContent = valor2;

 
}