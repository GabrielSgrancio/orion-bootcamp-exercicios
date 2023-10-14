var lista = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
var getBio = function () {
    var _a;
    var id = parseInt(document.getElementById("idInput").value);
    var bioOutput = document.getElementById("resultado");
    var bio = (_a = lista.find(function (item) { return item.id === id; })) === null || _a === void 0 ? void 0 : _a.bio;
    if (bio) {
        bioOutput.innerHTML = bio;
    }
    else {
        bioOutput.innerText = "Pessoa não encontrada.";
    }
};
var deleteItem = function () {
    var id = parseInt(document.getElementById("idInput").value);
    lista = lista.filter(function (item) { return item.id !== id; });
    atualizarLista();
};
var updateBioOrName = function () {
    var id = parseInt(document.getElementById("idInput").value);
    var newName = document.getElementById("nameInput").value;
    var newBio = document.getElementById("bioInput").value;
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            if (newName)
                lista[i].name = newName;
            if (newBio)
                lista[i].bio = newBio;
            break;
        }
    }
    atualizarLista();
};
var getName = function (id) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].name;
        }
    }
    return undefined;
};
var atualizarLista = function () {
    var listaPersonalidades = document.getElementById('listaPersonalidades');
    listaPersonalidades.innerHTML = '';
    for (var i = 0; i < lista.length; i++) {
        var listItem = document.createElement('li');
        listItem.innerHTML = "\n            <strong>".concat(lista[i].name, "</strong> - ").concat(lista[i].bio, "\n        ");
        listaPersonalidades.appendChild(listItem);
    }
};
atualizarLista();
