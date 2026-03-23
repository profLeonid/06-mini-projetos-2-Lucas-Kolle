"use strict"

//função para criar uma lista sequencial a partir do número digitado
export function criarListaNumeros(quantidade){

//criando ARRAY para guardar os números
let listaNumeros = []

    //estrutura de repetição para adicionar números ao ARRAY.
    for(let i = 1; i <= quantidade; i++){ // cira a variavél "i" que recebe 1; enquanto "i" for menor ou igual a quantidade; "i" recebe mais 1
        listaNumeros.push(i)
    }
    return listaNumeros
}

export function criarListaPares(quantidade){

    let listaPares = []
    let par = 2

    for(let i = 1; i <= quantidade; i++){
        listaPares.push(par)
        par = par+2
    }
    return listaPares
}

export function criarListaImpares(quantidade){

    let listaImpares = []
    let impar = 1

    for(let i = 1; i <= quantidade; i++){
        listaImpares.push(impar)
        impar += 2 // outra forma de somar um valor a ele mesmo
    }
    return listaImpares
}

export function criarListaMulti5(quantidade){

    let listaMulti5 = []
    let multi5 = 5

    for(let i = 1; i <= quantidade; i++ ){
        listaMulti5.push(multi5)
        multi5 += 5
    }
    return listaMulti5
}

export function criarListaPotencia2(quantidade){
    
    let listaPotencia2 = []
    
    for(let i = 0; i < quantidade; i++){
        listaPotencia2.push(2 ** i)
    }
    return listaPotencia2
}
