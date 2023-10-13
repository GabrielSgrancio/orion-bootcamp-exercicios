/**
 * Conta o número de vogais em uma palavra.
 *
 * @param palavra - A palavra para contar as vogais.
 * @returns O número de vogais na palavra (contador).
 */
function contarVogais(palavra: string): number {
    const vogais: string = 'aeiouAEIOU';
    let contador: number = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }

    return contador;
}
/**
 * @example
 */
const palavraExemplo: string = "gAbriel";
const quantidadeDeVogais: number = contarVogais(palavraExemplo);
console.log(`A palavra "${palavraExemplo}" possui ${quantidadeDeVogais} vogais.`);