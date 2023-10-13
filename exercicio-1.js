/**
 * Conta o número de vogais em uma palavra.
 *
 * @param palavra - A palavra para contar as vogais.
 * @returns O número de vogais na palavra (contador).
 */
function contarVogais(palavra) {
    var vogais = 'aeiouAEIOU';
    var contador = 0;
    for (var i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    return contador;
}
/**
 * @example
 */
var palavraExemplo = "gAbriel";
var quantidadeDeVogais = contarVogais(palavraExemplo);
console.log("A palavra \"".concat(palavraExemplo, "\" possui ").concat(quantidadeDeVogais, " vogais."));
