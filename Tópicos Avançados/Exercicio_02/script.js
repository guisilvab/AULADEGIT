function ordenarDecrescente() {
    var numeros = [];
    var resultado = document.getElementById("resultado")


    for (var i = 0; i < 5; i++) {
        numeros.push(parseInt(prompt("Digite um número:")))
    }
   
    numeros.sort((a, b) => b - a);
    resultado.innerHTML = "Números em ordem decrescente: " + numeros.join (", ");
}