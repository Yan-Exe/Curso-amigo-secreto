let listaTotal = [];


function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value === '') {
        alert('Nenhum nome adicionado!')
    } else {
        let lista = document.getElementById('lista-amigos');
        listaTotal.push(amigo.value);

        if(lista.textContent == '') {
            lista.textContent += amigo.value;
        } else {
            lista.textContent += ', ' + amigo.value;
        }
        amigo.value = '';
    } 
}


function sortear() {
    embaralha(listaTotal);
    let listaSorteio = document.getElementById('lista-sorteio');
    
    if (listaTotal.length <= 4) {
        alert('Quantidade de participantes insuficiente! Deve-se ter no minimo 4!');
        return;
    } 

    for(i = 0; i < listaTotal.length; i++) {

        if(i === listaTotal.length - 1) {
            listaSorteio.innerHTML += listaTotal[i] + '-->' + listaTotal[0] +'<br>';
        } else {
            listaSorteio.innerHTML += listaTotal[i] + '-->' + listaTotal[i+1] +'<br>';
        }
    
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaTotal = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}