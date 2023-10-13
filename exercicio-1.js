/**
 * Conta o número de vogais em uma palavra.
 *
 * @param palavra - A palavra para contar as vogais.
 */
function contarVogais() {
    var palavraElement = document.getElementById("inputPalavra");
    var resultadoElement = document.getElementById("resultado");
    var palavra = palavraElement.value;
    var palavraClean = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    var vogais = 'aeiouAEIOU';
    var contador = 0;
    for (var i = 0; i < palavraClean.length; i++) {
        if (vogais.includes(palavraClean[i])) {
            contador++;
        }
    }
    resultadoElement.innerText = "A palavra \"".concat(palavra, "\" possui ").concat(contador, " vogais.");
}
var palavraExemplo = "gAbriel";
var quantidadeDeVogais = contarVogais(palavraExemplo);
console.log("A palavra \"".concat(palavraExemplo, "\" possui ").concat(quantidadeDeVogais, " vogais."));
