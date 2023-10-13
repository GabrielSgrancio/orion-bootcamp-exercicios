/**
 * Conta o número de vogais em uma palavra.
 *
 * @param palavra - A palavra para contar as vogais.
 * @returns {Number} O número de vogais na palavra .
 */
function contarVogais() {
    const palavraElement = document.getElementById("inputPalavra") as HTMLInputElement;
    const resultadoElement = document.getElementById("resultado") as HTMLElement;
    const palavra: string = palavraElement.value;
    const palavraClean: string = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const vogais: string = 'aeiouAEIOU';
    let contador: number = 0;

    for (let i = 0; i < palavraClean.length; i++) {
        if (vogais.includes(palavraClean[i])) {
            contador++;
        }
    }

    resultadoElement.innerText = `A palavra "${palavra}" possui ${contador} vogais.`;
}

const palavraExemplo: string = "gAbriel";
const quantidadeDeVogais: number = contarVogais(palavraExemplo);
console.log(`A palavra "${palavraExemplo}" possui ${quantidadeDeVogais} vogais.`);