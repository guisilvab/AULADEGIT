function calcularIMC() {
    
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var resultado = document.getElementById("resultado")

    var imc = peso / (altura * altura);
    
    // Exibindo o resultado do IMC
    resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2);
    
    var categoria;
        if (imc < 18.5) {
            categoria = "Magreza";
        } else if (imc < 24.9) {
            categoria = "Normal";
        } else if (imc < 29.9) {
            categoria = "Sobrepeso";
        } else if (imc < 34.9) {
            categoria = "Obesidade Grau I";
        } else if (imc < 39.9) {
            categoria = "Obesidade Grau II";
        } else {
            categoria = "Obesidade Grau III";
        }

        resultado.innerHTML += ("<br> Categoria: " + categoria)
    

}
