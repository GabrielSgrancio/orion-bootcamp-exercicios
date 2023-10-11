/**
 * Conta o número de vogais em uma palavra.
 *
 * @param palavra - A palavra para contar as vogais.
 * @returns O número de vogais na palavra (contador).
 */


function contarVogais(palavra: string): number {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }

    return contador;
}

/* 
* Exemplo de uso da função :
*
*/
const palavraExemplo = "gAbriel";
const quantidadeDeVogais = contarVogais(palavraExemplo);
console.log(`A palavra "${palavraExemplo}" possui ${quantidadeDeVogais} vogais.`);



