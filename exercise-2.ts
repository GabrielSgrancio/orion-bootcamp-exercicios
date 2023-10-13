interface Pessoa {
    id: number;
    name: string;
    bio: string;
}

const lista: Pessoa[] = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

/**
 * Retorna a biografia da pessoa com o ID fornecido.
 *
 * @param id - O ID da pessoa.
 * 
 * @returns A biografia da pessoa, se encontrada. Caso contrário, retorna undefined.
 */
function getBio(id: number): string | undefined {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            return lista[i]['bio'];
        }
    }
    return undefined; 
}

/**
 * Retorna o nome da pessoa com o ID fornecido.
 *
 * @param id - O ID da pessoa.
 * 
 * @returns O nome da pessoa, se encontrada. Caso contrário, retorna undefined.
 */
function getName(id: number): string | undefined {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            return lista[i]['name'];
        }
    }
    return undefined; 
}

/**
 * Apaga uma pessoa da lista com o ID fornecido.
 *
 * @param id - O ID da pessoa a ser apagada.
 */
function deleteItem(id: number): void {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            lista.splice(i, 1);
            break; 
        }
    }
}

/**
 * Altera a biografia ou o nome da pessoa com o ID fornecido.
 *
 * @param id - O ID da pessoa a ser alterada.
 * @param newName - O novo nome (opcional).
 * @param newBio - A nova biografia (opcional).
 */
function updateBioOrName(id: number, newName?: string, newBio?: string): void {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]['id'] === id) {
            if (newName) lista[i]['name'] = newName;
            if (newBio) lista[i]['bio'] = newBio;
            break; 
        }
    }
}



/*Paradigma imperativo*/
function paradigmaImperativo() {
    const bio = getBio(1);
    console.log(bio); 
    
    const name = getName(3);
    console.log(name); 
    
    deleteItem(2);
    console.log(lista); 
    
    updateBioOrName(3, "Novo Nome", "Nova Bio");
    console.log(lista); 
}

paradigmaImperativo();



/*Paradigma funcional*/

const getBioFuncional = (id: number): string | undefined => {
    const pessoa = lista.find(item => item.id === id);
    return pessoa?.bio;
};

const getNameFuncional = (id: number): string | undefined => {
    const pessoa = lista.find(item => item.id === id);
    return pessoa?.name;
};

const deleteItemFuncional = (id: number): Pessoa[] => {
    const updatedList = lista.filter(item => item.id !== id);
    return updatedList;
};

const updateBioOrNameFuncional = (id: number, newName?: string, newBio?: string): Pessoa[] => {
    const updatedList = lista.map(item => {
        if (item.id === id) {
            if (newName) item.name = newName;
            if (newBio) item.bio = newBio;
        }
        return item;
    });
    return updatedList;
};

/* Teste no paradigma funcional */
console.log(getBioFuncional(1)); 
console.log(getNameFuncional(3)); 
console.log(deleteItemFuncional(2)); 
console.log(updateBioOrNameFuncional(3, "Novo Nome", "Nova Bio"));