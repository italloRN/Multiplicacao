
function multiplicar() {
num1 = document.getElementById("valor1").value;
console.log(num1);
num2 = document.getElementById("valor2").value;
console.log(num2);
multiplica = parseInt(num1)*parseInt(num2);
document.getElementById("solucao").innerHTML = multiplica;
}
function limpar() {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("solucao").innerHTML = "";
}