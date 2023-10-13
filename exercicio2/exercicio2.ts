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

const getBio = (): void => {
    const id = parseInt((<HTMLInputElement>document.getElementById("idInput")).value);
    const bioOutput = document.getElementById("resultado") as HTMLDivElement;

    const bio = lista.find(item => item.id === id)?.bio;

    if (bio) {
        bioOutput.innerHTML = bio;
    } else {
        bioOutput.innerText = "Pessoa não encontrada.";
    }
};

const deleteItem = (): void => {
    const id = parseInt((<HTMLInputElement>document.getElementById("idInput")).value);

    lista = lista.filter(item => item.id !== id);
    atualizarLista();
};

const updateBioOrName = (): void => {
    const id = parseInt((<HTMLInputElement>document.getElementById("idInput")).value);
    const newName = (<HTMLInputElement>document.getElementById("nameInput")).value;
    const newBio = (<HTMLInputElement>document.getElementById("bioInput")).value;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            if (newName) lista[i].name = newName;
            if (newBio) lista[i].bio = newBio;
            break;
        }
    }

    atualizarLista();
};

const getName = (id: number): string | undefined => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].name;
        }
    }
    return undefined;
};

const atualizarLista = (): void => {
    const listaPersonalidades = document.getElementById('listaPersonalidades') as HTMLUListElement;
    listaPersonalidades.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${lista[i].name}</strong> - ${lista[i].bio}
        `;
        listaPersonalidades.appendChild(listItem);
    }
};

atualizarLista();