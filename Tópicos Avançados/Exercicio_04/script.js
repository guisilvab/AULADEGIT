function classificarTriangulo() {
    // Obtendo os valores dos lados do triângulo do usuário
    var lado1 = parseFloat(document.getElementById("lado1").value)
    var lado2 = parseFloat(document.getElementById("lado2").value)
    var lado3 = parseFloat(document.getElementById("lado3").value)
    var resultado = document.getElementById("resultado")

    // Verificando se os valores formam um triângulo
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        // Verificando o tipo de triângulo
        if (lado1 === lado2 && lado2 === lado3) {
            resultado.innerHTML = "Triângulo Equilátero: todos os lados são iguais."
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            resultado.innerHTML = "Triângulo Isósceles: dois lados são iguais."
        } else {
            resultado.innerHTML= "Triângulo Escaleno: todos os lados são diferentes."
        }
    } else {
        alert("Os valores não formam um triângulo válido.")
    }
}